# AI Watcher

This documents the repo-independent AI transcript watcher installed on this
machine. It captures local Codex and Claude Code transcripts, normalizes visible
user/assistant exchanges, stores JSONL shards on disk, and syncs the same data to
PostgreSQL for analysis.

## Current State

As of the last verification:

```text
Corpus root: /Users/stevencturner/ai-corpus
Normalized records: 23854
Normalized files: 8
Tracked source files: 753
Postgres backfill pending: false
claude: 2451
claude_web: 1431
codex: 19972
Postgres exchanges: 23854
Postgres sessions: 887
Postgres titled sessions: 474
Postgres model-attributed exchanges: 23854
Postgres token usage events: 229423
Postgres pricing sources: anthropic=staged, openai=staged
Postgres pricing rows: live=30
```

The file corpus and PostgreSQL table counts matched at that point.

`pricing_sources.status` describes the last ETL outcome for each provider. The
actual review state of extracted rows is tracked separately in
`pricing_catalog_staging.status`; at the last verification, all 30 extracted
pricing rows were marked `live`.

## Installed Files

```text
/Users/stevencturner/.local/bin/ai-corpus-watcher
/Users/stevencturner/Library/LaunchAgents/com.stevencturner.ai-corpus-watcher.plist
/Users/stevencturner/.codex/hooks.json
/Users/stevencturner/.claude/settings.json
```

The LaunchAgent and hooks intentionally call this Python interpreter:

```text
/Library/Frameworks/Python.framework/Versions/3.14/bin/python3
```

That interpreter has `psycopg2` installed. macOS's default `/usr/bin/python3`
does not, so using the explicit interpreter matters for PostgreSQL sync.

## Data Layout

The corpus root is:

```text
/Users/stevencturner/ai-corpus
```

It contains:

```text
ai-corpus/
  raw/
    claude/
    claude_web/
    codex/
  normalized/
    exchanges/
      YYYY-MM.jsonl
    _legacy/
  state/
    seen_files.json
  pricing/
    snapshots/
      anthropic/
      openai/
  logs/
    watcher.out.log
    watcher.err.log
```

Raw transcript archives preserve full local transcript files. Treat
`ai-corpus/raw` as sensitive.

Normalized exchange shards contain one JSON object per visible exchange:

```json
{
  "schema": "ai-corpus.exchange.v1",
  "tool": "codex",
  "session_id": "...",
  "role": "user",
  "text": "...",
  "cwd": "...",
  "event_timestamp": "...",
  "captured_at": "...",
  "source_path": "...",
  "source_line": 123,
  "raw_archive_path": "...",
  "raw_hash": "...",
  "model": "gpt-5.3-codex",
  "model_provider": "openai"
}
```

Shards are monthly, based on `event_timestamp` when available, otherwise
`captured_at`.

## How Capture Works

The system has two capture paths:

```text
Codex/Claude turn finishes
  -> global Stop hook receives transcript_path
  -> ai-corpus-watcher hook copies/parses transcript
  -> raw archive + normalized monthly JSONL shard + PostgreSQL insert
```

And:

```text
LaunchAgent runs ai-corpus-watcher watch
  -> periodically scans ~/.codex/sessions and ~/.claude/projects
  -> catches transcript files even if a hook missed them
```

The watcher is intentionally independent of any current repository.

## What Gets Normalized

The normalizer keeps visible `user` and `assistant` message text.

It skips common non-visible or noisy blocks:

```text
thinking
redacted_thinking
tool_use
tool_result
server_tool_use
web_search_tool_result
```

The raw archive is still full fidelity, so sensitive code, paths, command
output, and pasted secrets may exist there even if the normalized corpus is
filtered.

## PostgreSQL

Database:

```text
host=localhost port=5432 dbname=ai-watcher
```

Default DSN in the watcher:

```text
host=localhost port=5432 dbname=ai-watcher
```

Override with:

```bash
export AI_WATCHER_PG_DSN='host=localhost port=5432 dbname=ai-watcher'
```

Disable PostgreSQL writes with:

```bash
export AI_WATCHER_DISABLE_PG=1
```

### Schema

Schema name:

```sql
ai_watcher
```

Tables:

```sql
ai_watcher.sessions
ai_watcher.source_files
ai_watcher.exchanges
ai_watcher.token_usage_events
ai_watcher.pricing_sources
ai_watcher.pricing_snapshots
ai_watcher.pricing_catalog_staging
```

View:

```sql
ai_watcher.exchange_details
```

`ai_watcher.exchanges` is the main exchange table. For most analysis,
`ai_watcher.exchange_details` is more convenient because it joins exchanges to
session-level metadata such as `conversation_title`.

Important columns:

```text
raw_hash          primary key, idempotency key
tool              codex | claude | claude_web
session_id        local tool session identifier
role              user | assistant
text              visible exchange text
cwd               working directory, when known
event_timestamp   source transcript event time
captured_at       watcher capture time
source_path       original transcript path
source_line       original transcript JSONL line
raw_archive_path  copied raw transcript path
model             model/version when the source exposes it
model_provider    openai | anthropic when known
record            full normalized JSONB record
text_search       generated tsvector
```

Important `ai_watcher.sessions` metadata columns:

```text
tool                 codex | claude | claude_web
session_id           local tool session identifier
cwd                  session working directory, when known
conversation_title   Codex thread_name, Claude Code aiTitle, or Claude export name
title_source         codex_session_index | claude_ai_title | claude_export_conversation_name
title_updated_at     source title timestamp, when known
primary_model        session-level model inferred from local transcript metadata
model_provider       openai | anthropic when known
first_event_at       earliest exchange timestamp
last_event_at        latest exchange timestamp
```

Important `ai_watcher.token_usage_events` columns:

```text
usage_hash                    primary key, idempotency key
tool                          codex | claude
session_id                    local tool session identifier
usage_kind                    last_token_usage | total_token_usage | message_usage
event_timestamp               source transcript event time
source_path                   original transcript path
source_line                   original transcript JSONL line
model                         model/version when the source exposes it
model_provider                openai | anthropic when known
input_tokens                  input tokens from source usage object
cached_input_tokens           Codex cached input tokens
output_tokens                 output tokens
reasoning_output_tokens       Codex reasoning output tokens
total_tokens                  source total tokens, when exposed
cache_creation_input_tokens   Claude cache creation input tokens
cache_read_input_tokens       Claude cache read input tokens
raw_usage                     full source usage JSONB object
```

For Codex, `last_token_usage` is the per-event usage and `total_token_usage` is
cumulative for the session. Do not sum `total_token_usage` across events.

Pricing tables:

```text
pricing_sources           provider URL, refresh interval, parser model, last status
pricing_snapshots         raw fetched pricing pages and parse status
pricing_catalog_staging   model token prices staged for human review
```

Important `ai_watcher.pricing_catalog_staging` columns:

```text
provider                         openai | anthropic
model                            model display name or API model id from source page
currency                         USD
input_per_mtok                   input price per 1 million tokens
cached_input_per_mtok            cached input price per 1 million tokens
output_per_mtok                  output price per 1 million tokens
reasoning_output_per_mtok        separate reasoning output price, when exposed
cache_creation_5m_per_mtok       Anthropic 5-minute cache write price
cache_creation_1h_per_mtok       Anthropic 1-hour cache write price
cache_read_per_mtok              prompt cache read price
status                           staged | live | rejected
confidence                       parser confidence score
warnings                         parser warnings as JSONB
raw_extract                      full extracted row as JSONB
```

Indexes:

```text
exchanges_tool_session_idx
exchanges_event_timestamp_idx
exchanges_role_idx
exchanges_model_idx
exchanges_source_path_line_idx
exchanges_record_gin_idx
exchanges_text_search_gin_idx
exchanges_text_trgm_idx
sessions_conversation_title_trgm_idx
token_usage_events_tool_session_idx
token_usage_events_kind_idx
token_usage_events_event_timestamp_idx
token_usage_events_model_idx
pricing_catalog_staging_status_idx
pricing_catalog_staging_provider_model_idx
```

The watcher creates `pg_trgm` if needed for trigram text search.

## Commands

Status:

```bash
/Library/Frameworks/Python.framework/Versions/3.14/bin/python3 \
  /Users/stevencturner/.local/bin/ai-corpus-watcher status
```

One-time scan of existing transcript files:

```bash
/Library/Frameworks/Python.framework/Versions/3.14/bin/python3 \
  /Users/stevencturner/.local/bin/ai-corpus-watcher scan
```

Run watcher in foreground:

```bash
/Library/Frameworks/Python.framework/Versions/3.14/bin/python3 \
  /Users/stevencturner/.local/bin/ai-corpus-watcher watch
```

Backfill or repair PostgreSQL from JSONL shards:

```bash
/Library/Frameworks/Python.framework/Versions/3.14/bin/python3 \
  /Users/stevencturner/.local/bin/ai-corpus-watcher sync-db
```

Backfill or refresh session titles:

```bash
/Library/Frameworks/Python.framework/Versions/3.14/bin/python3 \
  /Users/stevencturner/.local/bin/ai-corpus-watcher sync-titles
```

Backfill or refresh model/provider metadata:

```bash
/Library/Frameworks/Python.framework/Versions/3.14/bin/python3 \
  /Users/stevencturner/.local/bin/ai-corpus-watcher sync-models
```

Backfill or refresh token usage events:

```bash
/Library/Frameworks/Python.framework/Versions/3.14/bin/python3 \
  /Users/stevencturner/.local/bin/ai-corpus-watcher sync-token-usage
```

Fetch official pricing pages and stage parsed token prices:

```bash
/Library/Frameworks/Python.framework/Versions/3.14/bin/python3 \
  /Users/stevencturner/.local/bin/ai-corpus-watcher refresh-pricing
```

Force a provider refresh even if the weekly interval has not elapsed:

```bash
/Library/Frameworks/Python.framework/Versions/3.14/bin/python3 \
  /Users/stevencturner/.local/bin/ai-corpus-watcher refresh-pricing \
  --provider anthropic --force
```

The pricing parser reads the Anthropic API key from:

```text
~/.config/ai-corpus/anthropic_api_key
```

The key file should remain mode `600`, and the directory should remain mode
`700`.

Import an official Claude web export directory:

```bash
/Library/Frameworks/Python.framework/Versions/3.14/bin/python3 \
  /Users/stevencturner/.local/bin/ai-corpus-watcher import-claude-export \
  .local/chat-exports/claude/data-da326743-9695-4467-a5b5-c8d229a3787b-1779730057-3fdcb3d1-batch-0000
```

The first Claude export imported `1431` visible `claude_web` messages from
`192` conversations. It skipped messages with no visible text after excluding
thinking/tool content. The raw export was archived at:

```text
/Users/stevencturner/ai-corpus/raw/claude_web/864807d9fe10
```

Routine Claude web imports:

1. Download the Claude export from Claude settings.
2. Unzip it.
3. Move the extracted export directory under:

```text
.local/chat-exports/claude/
```

4. Run the importer on the extracted directory:

```bash
/Library/Frameworks/Python.framework/Versions/3.14/bin/python3 \
  /Users/stevencturner/.local/bin/ai-corpus-watcher import-claude-export \
  .local/chat-exports/claude/<export-directory>
```

5. Verify counts:

```bash
/Library/Frameworks/Python.framework/Versions/3.14/bin/python3 \
  /Users/stevencturner/.local/bin/ai-corpus-watcher status
```

The import is idempotent. Re-running the same export is safe because
`raw_hash` prevents duplicate normalized records and duplicate PostgreSQL rows.

Migrate an old flat normalized file into monthly shards:

```bash
/Library/Frameworks/Python.framework/Versions/3.14/bin/python3 \
  /Users/stevencturner/.local/bin/ai-corpus-watcher migrate-shards
```

Manage the background service:

```bash
launchctl print gui/$(id -u)/com.stevencturner.ai-corpus-watcher
launchctl bootout gui/$(id -u) ~/Library/LaunchAgents/com.stevencturner.ai-corpus-watcher.plist
launchctl bootstrap gui/$(id -u) ~/Library/LaunchAgents/com.stevencturner.ai-corpus-watcher.plist
```

## Example SQL

Counts by tool and role:

```sql
select tool, role, count(*)
from ai_watcher.exchanges
group by tool, role
order by tool, role;
```

Recent exchanges:

```sql
select event_timestamp, tool, role, conversation_title, left(text, 240) as snippet
from ai_watcher.exchange_details
order by event_timestamp desc nulls last
limit 20;
```

Sessions with titles:

```sql
select tool, conversation_title, count(*) as exchanges
from ai_watcher.exchange_details
where conversation_title is not null
group by tool, conversation_title
order by exchanges desc
limit 20;
```

Model usage:

```sql
select tool, effective_model_provider, effective_model, count(*) as exchanges
from ai_watcher.exchange_details
group by tool, effective_model_provider, effective_model
order by tool, exchanges desc;
```

Token usage event counts:

```sql
select tool, usage_kind, count(*) as events
from ai_watcher.token_usage_events
group by tool, usage_kind
order by tool, usage_kind;
```

Per-event token usage, suitable for summing:

```sql
select
  tool,
  model_provider,
  model,
  sum(input_tokens) as input_tokens,
  sum(output_tokens) as output_tokens,
  sum(reasoning_output_tokens) as reasoning_output_tokens
from ai_watcher.token_usage_events
where usage_kind in ('last_token_usage', 'message_usage')
group by tool, model_provider, model
order by tool, input_tokens desc nulls last;
```

Pricing source status:

```sql
select provider, status, last_attempt_at, last_success_at, notes
from ai_watcher.pricing_sources
order by provider;
```

Review staged pricing rows:

```sql
select
  provider,
  model,
  input_per_mtok,
  output_per_mtok,
  cached_input_per_mtok,
  cache_creation_5m_per_mtok,
  cache_creation_1h_per_mtok,
  cache_read_per_mtok,
  confidence,
  warnings
from ai_watcher.pricing_catalog_staging
where status = 'staged'
order by provider, model;
```

Promote reviewed rows to live:

```sql
update ai_watcher.pricing_catalog_staging
set status = 'live',
    approved_at = now(),
    approved_by = current_user
where provider = 'anthropic'
  and status = 'staged';
```

Promote all staged rows from the latest parsed snapshot for one provider:

```sql
update ai_watcher.pricing_catalog_staging pcs
set status = 'live',
    approved_at = now(),
    approved_by = current_user
where pcs.snapshot_id = (
  select ps.id
  from ai_watcher.pricing_snapshots ps
  where ps.provider = 'openai'
    and ps.parse_status = 'parsed'
  order by ps.fetched_at desc
  limit 1
)
and pcs.status = 'staged';
```

Reject all staged rows from the latest parsed snapshot for one provider:

```sql
update ai_watcher.pricing_catalog_staging pcs
set status = 'rejected',
    approved_at = now(),
    approved_by = current_user
where pcs.snapshot_id = (
  select ps.id
  from ai_watcher.pricing_snapshots ps
  where ps.provider = 'openai'
    and ps.parse_status = 'parsed'
  order by ps.fetched_at desc
  limit 1
)
and pcs.status = 'staged';
```

Reject a bad parsed row:

```sql
update ai_watcher.pricing_catalog_staging
set status = 'rejected',
    approved_at = now(),
    approved_by = current_user
where id = 123;
```

Full-text search:

```sql
select event_timestamp, tool, role, left(text, 240) as snippet
from ai_watcher.exchanges
where text_search @@ plainto_tsquery('english', 'postgres schema watcher')
order by event_timestamp desc nulls last
limit 20;
```

Fuzzy text search:

```sql
select event_timestamp, tool, role, left(text, 240) as snippet
from ai_watcher.exchanges
where text ilike '%candidate scoring%'
order by event_timestamp desc nulls last
limit 20;
```

Sessions by working directory:

```sql
select cwd, count(distinct session_id) as sessions, count(*) as exchanges
from ai_watcher.exchanges
group by cwd
order by exchanges desc
limit 20;
```

## Analysis Readiness

This section is intended as handoff context for evaluating product questions,
such as the ViableCoder question set, against the current AI watcher corpus.

Strongly supported today:

```text
Conversation volume by provider/tool/model
Visible user and assistant text search
Conversation/session titles where exposed by Codex, Claude Code, or Claude web exports
Session timing via first_event_at, last_event_at, event_timestamp, and captured_at
Working directory and source transcript provenance for local coding tools
Per-event token usage for Codex and Claude Code
Published API-price estimates after pricing rows are reviewed and marked live
Raw transcript audit trail for re-parsing when normalizers improve
```

Partially supported today:

```text
Coding vs non-coding classification
Task/domain classification
Question intent and outcome classification
Estimated cost by conversation
Project-level usage patterns
Time-of-day and longitudinal usage patterns
```

These are partial because the current schema has the raw material but not yet
curated labels. They can be derived with SQL heuristics, text search, or a
separate labeling pass over `exchange_details`.

Known data gaps for question-answering:

```text
ChatGPT web exports have not been imported yet.
Claude web exports do not expose exact model names or token usage in the inspected export.
There is no explicit success/failure/outcome field for a conversation.
There is no explicit satisfaction, usefulness, or time-saved rating.
There is no direct link from an AI exchange to git commits, file diffs, PRs, or deployed code.
There is no durable task taxonomy table yet.
Subscription prices are not modeled; pricing rows estimate API-equivalent cost only.
```

Recommended alignment scale for future question reviews:

```text
High      Answerable now with existing tables and straightforward SQL.
Medium    Answerable with heuristics, text labels, or minor derived tables.
Low       Requires new data collection, external imports, or manual annotation.
None      Not represented in the corpus today.
```

## Operational Notes

- JSONL shards are the durable local corpus layer.
- PostgreSQL is the analysis/index layer and can be rebuilt with `sync-db`.
- Session titles can be refreshed independently with `sync-titles`.
- Model metadata can be refreshed independently with `sync-models`.
- Token usage events can be refreshed independently with `sync-token-usage`.
- Pricing can be refreshed independently with `refresh-pricing`.
- The background watcher checks hourly whether any enabled pricing source is
  due. Each provider has a PostgreSQL `fetch_interval`, defaulting to 7 days.
- Pricing refreshes fetch official pricing pages, save raw snapshots under
  `~/ai-corpus/pricing/snapshots`, and stage parsed rows in
  `ai_watcher.pricing_catalog_staging`.
- Current pricing sources are
  `https://platform.claude.com/docs/en/about-claude/pricing` for Anthropic and
  `https://developers.openai.com/api/docs/pricing` for OpenAI.
- Staged pricing rows are not automatically promoted to `live`; review them in
  PostgreSQL and update `status` when approved.
- Pricing parsing uses the configured Anthropic parser model, currently
  `claude-haiku-4-5-20251001`.
- If a PostgreSQL write fails during capture, the watcher writes a retry marker
  at `~/ai-corpus/state/pg_backfill_needed.json`.
- After a later PostgreSQL write succeeds, the watcher automatically runs
  `sync-db` and clears the retry marker.
- Inserts are idempotent because `raw_hash` is the primary key.
- The watcher silently skips PostgreSQL writes if `AI_WATCHER_DISABLE_PG=1`.
- If file and database counts diverge and no retry marker exists, run `sync-db`.
- If the LaunchAgent is edited, reload it with `bootout` then `bootstrap`.
- If Python dependencies move, update the LaunchAgent and hook commands to use
  the interpreter with `psycopg2`.

## Known Limitations

- Codex and Claude transcript schemas are not guaranteed stable.
- The parser is deliberately conservative and may miss new message shapes.
- Claude web exports currently expose provider-level attribution but did not
  include exact model names in the inspected export.
- `https://openai.com/api/pricing/` returned a Cloudflare HTTP 403 challenge
  from the local watcher process. The watcher uses OpenAI's linked developer
  pricing page instead.
- Pricing extraction is model-assisted and should be treated as staged data
  until manually reviewed.
- Raw archives can contain sensitive information even when normalized records
  exclude reasoning/tool blocks.
- This is local-only infrastructure; it does not encrypt or redact the corpus.
