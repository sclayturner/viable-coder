# Viable Coder

Viable Coder is the working source for Clay Turner's playbook, doctrine, research inquiry, public website, and AI collaboration machinery.

The project teaches a move from AI-assisted "vibe coding" to durable AI-native product ownership. It has two clocks:

- **Becoming Viable**: practical mentorship, resources, and playbook material for people and companies trying to build real software capability with AI now.
- **Remaining Viable**: a public inquiry into whether that way of working holds up over time across cognition, judgment, identity, economics, ethics, and other long-term viability dimensions.

This is a book and doctrine repository first. Code exists mainly to support the website, research instruments, and collaboration workflows.

## Project Status

The repository is a live working source, not a finished publication package.

- The public website is a static HTML/CSS/JS site under `website/public/`.
- The playbook structure and modules are active working material under `book/`.
- Doctrine is canonical under `doctrine/` and should be changed deliberately.
- Research streams and measurement thinking are in progress under `research/`.
- Some website pages intentionally contain placeholder or future-facing material. See `website/docs/page-manifest.md` before treating any page as launch-ready.

## Repository Map

| Path | Purpose |
| --- | --- |
| `book/` | Saleable playbook source: manuscript, outlines, modules, exercises. |
| `doctrine/` | Governing concepts: value proposition, lexicon, Organic Intelligence, condition, upkeep, observability, nine dimensions, voice anchors. |
| `research/` | Research streams, evidence ledgers, instruments, and measurement design. |
| `website/` | Static public site and website documentation. |
| `skills/` | Reusable Codex skills for this project. |
| `agents/` | Role briefs for independent editorial, research, voice, structure, and module reviews. |
| `ai/` | Collaboration workflows, source map, evaluation checklists, and operating notes. |
| `archive/` | Historical imported material, prior books, and provenance. Do not edit it as canonical source. |

Use `ai/source-map.md` to decide which files to load for a task. Prefer canonical source files over `archive/`.

## Core Doctrine

The shortest value proposition lives in `doctrine/value-proposition.md`:

> Viable Coder teaches people how to become capable AI-native software builders now, while staying honest about what must remain viable over a career.

The governing vocabulary lives in `doctrine/playbook-lexicon.md`. Important spine concepts include:

- The human bears the risk; the machine bears none.
- The human holds origination at the front and answerability at the back.
- AI can take the producible middle, but the human must gate it.
- Becoming Viable and Remaining Viable are one stance held on two clocks.
- The work should build owned capability, not just short-term output.

## Working Rules

Before changing a surface, read the nearest `AGENTS.md`.

1. Identify the surface: book, doctrine, research, website, skills, agents, or AI workflow.
2. Read the relevant folder guidance.
3. Load only the necessary context from `ai/source-map.md`.
4. Make the smallest coherent change.
5. Check for doctrine drift, voice drift, and structural drift before finishing.

Keep these boundaries intact:

- Do not turn a book chapter into a research memo.
- Do not turn doctrine into promotional website copy.
- Do not treat website copy as canonical doctrine unless it has also been promoted to `doctrine/`.
- Do not overstate mocked or planned research data as live evidence.
- Do not edit `archive/` as the source of truth.

## Website Preview

The site is static. There is no root package manager setup required.

To open directly:

```bash
open website/public/index.html
```

To serve locally:

```bash
cd website/public
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

Before public-facing website work, read:

- `website/AGENTS.md`
- `website/docs/page-manifest.md`
- `website/docs/data-collection-alignment.md` when working near research data or measurement claims

## Book Work

Book material belongs in `book/`.

- `book/outlines/` contains the current four-section structure.
- `book/modules/` maps audience situations to guidance, exercises, ADLC gates, skill pairings, and signals.
- `book/manuscript/` is reserved for publishable text.
- `book/exercises/` is reserved for reader exercises.

The playbook currently runs through four major sections:

1. Knowing Who Does What
2. Finding Your Situation
3. Running the Day-to-Day
4. Playing the Long Game

Before finishing book work, ask whether the change makes the reader more answerable, preserves Clay's earned point of view, belongs in the section where it was placed, and gives the reader a practical move, diagnostic, or governing distinction.

## Research Work

Research material belongs in `research/`.

Separate:

- evidence
- interpretation
- doctrine
- future instrumentation

Current research streams live in `research/streams/`. Evidence and measurement support live in `research/evidence-ledgers/` and `research/instruments/`.

Do not present current mocked site findings as validated research evidence. If a claim depends on measurement readiness, check `research/evidence-ledgers/ai-watcher.md` and `website/docs/data-collection-alignment.md`.

## AI Collaboration

The repository includes process support for AI-assisted authorship:

- `ai/adlc-dogfooding.md` maps the ADLC back onto how this repository is worked.
- `ai/workflows/` holds repeatable workflows.
- `ai/evals/` holds quality checklists.
- `agents/` holds independent review role briefs.
- `skills/` holds reusable Codex skills.

For AI collaborators, the root instruction file is `AGENTS.md`. It is part of the project contract, not incidental metadata.

## Style

Write plainly, with weight.

Avoid hype, vendor language, and generalized futurism. Keep the human answerable for risk, judgment, origination, and review. Treat AI as a powerful collaborator inside a governed process, not as the author of the ends.
