# Data Collection Alignment

This document maps the measurement questions in `remaining-viable.html` and
`data/*.json` against the current `ai_watcher` PostgreSQL schema and collection
pipeline described in `ai_watcher.md`.

## Current Collection Surface

Verified on 2026-05-27, the live PostgreSQL schema is strong for:

- Agent transcript exchanges: `ai_watcher.exchanges` and
  `ai_watcher.exchange_details`
- Session metadata: `ai_watcher.sessions`
- Source transcript files and raw archive pointers: `ai_watcher.source_files`
- Token usage by tool, model, provider, session, and timestamp:
  `ai_watcher.token_usage_events`
- Provider pricing snapshots and extracted model price rows:
  `ai_watcher.pricing_sources`, `ai_watcher.pricing_snapshots`,
  `ai_watcher.pricing_catalog_staging`

Current row counts at verification:

| Table | Rows |
|---|---:|
| `sessions` | 888 |
| `source_files` | 754 |
| `exchanges` | 23865 |
| `token_usage_events` | 229453 |
| `pricing_sources` | 2 |
| `pricing_snapshots` | 3 |
| `pricing_catalog_staging` | 30 |

The current collection surface is not yet a general research warehouse. It does
not currently contain structured git commits, PRs, calendar events, accounting
records, invoices, inbound prospect messages, public bios, public discourse
scrapes, benchmark results, journal responses, reviewer scores, deployment
review records, or consent metadata.

Important distinction: `data/*.json` contains mocked findings and instrument
statuses for the site. Those statuses should not be read as proof that the
underlying live data pipeline already exists.

Another distinction: some sources do not need to be part of the always-on
watcher to be useful. Git history, PRs, diffs, deployment records, and similar
artifact data can be joined during analysis. The alignment below asks what the
current AI watcher already gives us, and what must be added either as a new
collection source or as analysis-time enrichment.

## Alignment Scale

| Alignment | Meaning |
|---|---|
| Strong | Current `ai_watcher` data directly supports the core measurement, though analysis/classification may still be needed. |
| Partial | Current data supports a meaningful component, but at least one required source, join, or structured instrument is missing. |
| Weak | Current schema has little or no direct source data for the question. A new instrument or source pipeline is required. |
| Not applicable | The question is intentionally answered by an "Asked" instrument over time, not by passive data accrual. |

For "Asked" questions, schema alignment is marked "Not applicable." The relevant
question is not whether today's passive watcher already contains the answer; it
is whether a durable asked-response instrument exists. The current transcript
watcher can capture an answer if the prompt/answer happens inside Codex or
Claude, but a proper research instrument still needs scheduled prompts,
respondent identity, consent, scoring, and longitudinal response status.

## Per-Question Alignment

| Dimension | Measurement question | Source/cadence | Mock status | Alignment | Current support | Missing or next instrumentation |
|---|---|---:|---|---|---|---|
| Cognitive | Can I still solve a fixed class of problems without AI tools? | Asked / quarterly | instrumented | Not applicable | This is a scheduled benchmark, not passive AI-watcher data. | Benchmark protocol, answer key, no-AI enforcement, score table, scheduled assessment record. |
| Cognitive | How much of the reasoning in my agent transcripts is self-generated versus AI-generated? | Auto / weekly | live | Strong | `exchange_details` has role, text, timestamps, model/provider, and session metadata. | Tokenization and a classifier for reasoning vs instruction/framing; persisted aggregate table. |
| Cognitive | How often am I accepting AI suggestions outright, modifying them, or rejecting them? | Auto / weekly | live | Partial | Raw archives can preserve agent proposals; exchanges preserve visible dialogue. | Structured extraction of code suggestions, git commit/diff ingestion, proposal-to-commit matching. |
| Cognitive | How do I score on a credentialed cognitive battery, year over year? | Asked / annual | pending | Not applicable | This is an external assessment result, not passive AI-watcher data. | External battery selection, results ingestion, credential/proctor metadata. |
| Cognitive | Are new concepts, patterns, and architectures appearing in my own transcript turns that weren't there before? | Auto / monthly | live | Partial | User turns in `exchange_details` can be mined historically. | Concept taxonomy, novelty ledger, distinction between practitioner-first and agent-first concepts. |
| Cognitive | Is my own software-engineering vocabulary still expanding in my writing and transcripts? | Auto / monthly | live | Partial | Transcript text supports the transcript portion. | Commit messages, PR descriptions, blog/public writing ingestion, domain-term dictionary. |
| Cognitive | How many systems am I touching concurrently - commits, PRs, or transcript activity in the past 14 days? | Auto / weekly | live | Partial | Session `cwd`, transcript activity, and timestamps can approximate active project count. | Git commits, PRs, repo/system taxonomy, deduping multiple paths into one system. |
| Cognitive | Of those concurrent systems, how many do I feel I actively own? | Asked / monthly | live | Not applicable | This is a monthly self-report layered on top of the computed system list. | Structured monthly self-report tied to computed system list. |
| Cognitive | Is my ability to stay focused - within a session and across a day - improving or eroding? | Auto / weekly | live | Partial | Session and exchange timestamps support coarse session length and switching estimates. | Calendar/idle data, context-switch classifier, abandoned-thread definition, focus aggregate table. |
| Epistemic | Can I explain, cold, a system I built 30-90 days ago - without agent access? | Asked / monthly | live | Not applicable | This is an elicited explanation exercise, not passive AI-watcher data. | System selection logic, recorded no-agent session, evaluator rubric, score storage. |
| Epistemic | How quickly can I debug a prior-built system without the agent's help? | Asked / quarterly | instrumented | Not applicable | This is a timed assessment, not passive AI-watcher data. | Bug-seeding harness, timer, no-agent enforcement, result table. |
| Epistemic | How much of the documentation on my shipped systems was written by me versus by the agent? | Auto / monthly | live | Partial | Agent transcripts can supply possible agent-authored doc text. | Git blame/docs ingestion, stylometry pipeline, mapping transcript-generated docs to repository files. |
| Epistemic | Can I draw the architecture of one of my systems from memory - and does it match ground truth? | Asked / quarterly | instrumented | Not applicable | This is an elicited recall exercise, not passive AI-watcher data. | Architecture capture format, codebase architecture extractor, comparison rubric. |
| Vocational | What am I noting, week by week, about the texture of the work itself? | Asked / weekly | pending | Not applicable | This is a consented journal instrument, not passive AI-watcher data. | Journal protocol, separate consent handling, coded response table. |
| Vocational | Does each session leave me energized, or depleted? | Asked / per-session | live | Not applicable | This is a session-close rating instrument, not passive AI-watcher data. | Stop-hook or session-close prompt, rating table keyed to session, missing-response tracking. |
| Vocational | How much time am I spending on the craft outside paid hours? | Auto / weekly | live | Partial | Transcript timestamps and `cwd` help identify activity windows. | Calendar data, paid/client vs personal taxonomy, idle/activity normalization. |
| Vocational | Would I want to keep practicing exactly this way for another ten years? | Asked / annual | pending | Not applicable | This is an annual reflection, not passive AI-watcher data. | Annual reflection protocol and coded stance storage. |
| Identity | When asked "what do you do?", how am I describing my contribution across public bios, headlines, and bylines? | Auto / monthly | live | Weak | None in current watcher. | Public profile/source scraper, snapshot history, role-frame classifier. |
| Identity | How am I attributing ownership of my shipped work - "I built," "I orchestrated," "I shipped"? | Auto / monthly | live | Partial | Transcript text can be searched for attribution verbs. | Commit/PR/blog/social writing ingestion and artifact-level source labels. |
| Identity | Which role-frames am I using in agent transcripts - "as a developer," "as a product owner," "as a builder"? | Auto / monthly | live | Strong | User transcript turns are directly searchable by phrase/frame over time. | Role-frame taxonomy and aggregate persistence. |
| Identity | What am I writing, annually, about the value of human contribution in AI-assisted practice? | Asked / annual | pending | Not applicable | This is an annual essay instrument, not passive AI-watcher data. | Annual essay source, versioning, thematic coding. |
| Differential | How is my engagement pricing changing over time, normalized to comparable scope? | Auto / monthly | live | Weak | None in current watcher. | Contract/invoice ingestion, scope index, normalization rules. |
| Differential | What kind of questions are prospects bringing me - capability-acquisition asks, or next-order questions? | Auto / monthly | live | Weak | None in current watcher. | Email/contact-form/calendar-note ingestion, prospect classifier, privacy boundary. |
| Differential | How widely is my practice's distinctive vocabulary diffusing through public discourse? | Auto / monthly | live | Weak | None in current watcher. | Public discourse crawl/search, phrase list, deduped mention counts. |
| Differential | What can I do today that I couldn't two years ago - and what fraction is still rare? | Asked / annual | pending | Not applicable | This is an annual capability reflection, not passive AI-watcher data. | Annual reflection plus external field-diffusion scan. |
| Judgment | On the same problem, how does my work compare to the frontier model's - judged blindly by independent reviewers? | Asked / quarterly | live | Not applicable | This is a controlled comparison and reviewer exercise, not passive AI-watcher data. | Locked problem set, model runs, reviewer workflow, blinded scoring table. |
| Judgment | On a locked set of judgment-heavy problems, how is the gap moving with each new frontier model release? | Auto / per-release | live | Weak | Model names and providers are available in transcript/usage data, but no benchmark harness exists. | Locked benchmark runner, model-release registry, score persistence. |
| Judgment | How often am I pushing back on the agent in ways that materially improve the planned code? | Auto / weekly | live | Partial | Transcript dialogue can identify pushback candidates; raw archives may preserve richer context. | Code proposal extraction, git diff linkage, improvement classifier/evaluator. |
| Judgment | Each week, which three judgment calls did I make that the model wouldn't have? | Asked / weekly | live | Not applicable | Transcripts can suggest candidates, but the measurement depends on a weekly confirmation instrument. | Weekly confirmation prompt, structured judgment-call table, rationale field. |
| Judgment | Which categories of judgment - architectural, strategic, design, operational - are moving into the model first? | Auto / quarterly | instrumented | Weak | None direct. | Category-labeled benchmark, repeated model runs, category gap metrics. |
| Temporal | How are my hours distributed - reactive vs. generative, recovery vs. depletion? | Auto / weekly | live | Partial | Transcript/session timestamps support agent-work activity windows. | Calendar/time tracking, block classifier, recovery/depletion definitions. |
| Temporal | Is my total number of work hours per week rising, falling, or holding? | Auto / weekly | live | Partial | Session timestamps can estimate agent-active work time. | Calendar and non-agent work capture; idle correction; weekly hour aggregates. |
| Temporal | How is my output-per-hour changing, on a defined output metric for the practice? | Auto / monthly | live | Weak | Transcript and token activity can be counted, but not output. | Output metric ingestion: commits, shipped features, contracts, essays; joined time denominator. |
| Temporal | How many hours did I actually take back this quarter - and what did I do with them? | Asked / quarterly | instrumented | Not applicable | This combines a computed baseline with a quarterly reflection instrument. | Baseline expectation, actual-hours calculation, quarterly reflection capture. |
| Economic | How are my token costs per month moving when normalized against output? | Auto / monthly | live | Partial | Token usage and model/provider pricing rows are present. | Effective billing reconciliation, output index, model-price join rules over time. |
| Economic | What is my practice's gross margin, with AI tooling tracked as its own line item? | Auto / monthly | live | Weak | Token/pricing data can estimate part of AI tooling cost. | Accounting export, revenue/COGS categories, AI tooling line-item mapping. |
| Economic | How are list prices on my dependencies changing month over month? | Auto / monthly | live | Strong | Pricing source/snapshot/catalog tables are designed for this for tracked AI providers. | Broaden beyond OpenAI/Anthropic if "dependencies" means the full tool stack. |
| Economic | What signals - rate limits, deprecations, enterprise-tier introductions - are providers sending? | Auto / monthly | live | Partial | Pricing-source status and snapshots capture pricing changes only. | Provider blog/changelog/status monitoring, event taxonomy, signal table. |
| Ethical | What am I writing, annually, when I articulate my own ethical standing? | Asked / annual | pending | Not applicable | This is an annual essay instrument, not passive AI-watcher data. | Annual essay protocol, source/version storage, stance coding. |
| Ethical | How am I disclosing AI involvement in client deliverables? | Auto / monthly | live | Weak | None in current watcher. | Client deliverable ingestion, disclosure-language scanner, client privacy controls. |
| Ethical | How am I disclosing AI involvement in my public work - talks, posts, bios, bylines? | Auto / monthly | live | Weak | None in current watcher. | Public artifact scraper, disclosure classifier, monthly snapshots. |
| Ethical | Of the output I ship, what fraction is AI-generated, AI-assisted, or fully human? | Auto / monthly | live | Partial | Agent transcripts and raw archive pointers can support provenance inference. | Commit/artifact ingestion, transcript-to-output linkage, provenance labels. |
| Ethical | Where is the field shifting on attribution, labor displacement, and model-generated code in regulated systems? | Auto / monthly | live | Weak | None in current watcher. | Curated external-source monitoring, stance taxonomy, source citation storage. |
| Ethical | How many tokens am I generating per month, and what is the trend? | Auto / monthly | live | Strong | `token_usage_events` directly stores input, output, reasoning, cached, and total tokens by timestamp/model/provider. | Monthly materialized aggregate for reporting. |
| Ethical | What is the estimated kWh and CO2e of that month's compute, using each provider's published efficiency numbers? | Auto / monthly | pending | Partial | Token totals by provider/model are present. | Provider efficiency factors, region/grid assumptions, methodology versioning, uncertainty disclosure. |
| Ethical | When a smaller or more efficient model can do the job, am I choosing it? | Auto / monthly | live | Partial | Model/provider attribution is present on exchanges, sessions, and token events. | Task complexity floor classifier, model capability tiers, per-task routing evaluation. |
| Ethical | What roles or hours of work am I no longer paying humans for that I would have a year ago? | Asked / quarterly | pending | Not applicable | This is a quarterly self-report, not passive AI-watcher data. | Quarterly self-report, role/hour/dollar taxonomy, year-over-year comparison. |
| Ethical | How concentrated is my practice in any single provider's tooling, and do I have a working fallback if access were cut? | Auto / quarterly | live | Partial | Token usage supports provider concentration over time. | Tooling inventory beyond tokens, fallback-test protocol, tested-fallback result table. |
| Ethical | What fraction of model-generated code from my practice am I personally reviewing before it reaches systems that affect people? | Auto / monthly | pending | Weak | None direct. | Git/deployment ingestion, production-impact tagging, personal review instrumentation. |

## Summary

The current watcher is already a strong foundation for questions centered on
agent transcripts, session metadata, model/provider attribution, token volume,
and AI provider list pricing. It can credibly answer or materially support:

- Self-generated versus agent-generated transcript reasoning
- Role frames used in agent transcripts
- Token volume by month and provider
- Provider concentration by token share
- AI provider list price movement for tracked providers

Among the automatic questions, the watcher already gives part of the picture for
many measurements that involve agent behavior, session timing, model choice, and
token use. The largest missing or analysis-time enrichment families are:

- Git/PR/deployment data for output provenance, suggestion acceptance, review
  fraction, documentation authorship, and output-per-hour
- Calendar/time data for hours, focus, reactive/generative distribution, and
  paid versus off-clock craft time
- Accounting, invoice, contract, and billing data for margin, pricing, and
  normalized cost-per-output
- Public web and discourse monitoring for identity, differential, ethical, and
  field-norm signals
Asked measurements are a different class. They need instrument discipline rather
than passive-data alignment: scheduled prompts or exercises, response capture,
consent where appropriate, scoring rubrics, and longitudinal status.

The practical next step is to add a small research-observation schema beside
`ai_watcher`, rather than overloading transcript tables. At minimum it should
store instrument definitions, scheduled observations, responses, scored results,
source artifacts, consent scope, and derived metric snapshots. The existing
watcher can remain the transcript and token backbone while those new tables hold
the evidence needed to make the public `data/*.json` findings auditable.
