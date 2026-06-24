# Viable Coder Claude Code Instructions

This repository is the working source for the Viable Coder playbook, its supporting doctrine, its research inquiry, its public website, and the AI collaboration machinery used to build them.

Clay Turner is the author and subject-matter owner. Treat the repository as a book and doctrine project first. Code may appear in support of the website or research instruments, but the central work is editorial, conceptual, and evidentiary.

## Operating Principles

- Preserve Clay's earned point of view. Do not flatten the work into generic AI productivity advice.
- Distinguish saleable manuscript, governing doctrine, research support, website presentation, and AI collaboration machinery.
- Prefer small, well-routed context loads. Use `ai/source-map.md` before loading broad context.
- Treat `archive/` as provenance, not the working source of truth.
- When promoting material from `archive/`, move the idea into the appropriate canonical folder and leave the archive untouched.
- Keep changes scoped. Do not reorganize doctrine, manuscript, research, website, and harness configuration in one pass unless the task explicitly requires it.

## Source Boundaries

- `book/` contains the manuscript, outlines, audience modules, and reader exercises.
- `doctrine/` contains the concepts that govern the book: value proposition, lexicon, Organic Intelligence, ADLC, audience model, and nine dimensions.
- `research/` contains research streams, instruments, evidence ledgers, and measurement thinking.
- `website/` contains the public-facing site and site documentation.
- `.agents/skills/` contains Codex-discoverable repository skills.
- `.claude/skills/` contains Claude Code-discoverable repository skills.
- `.codex/agents/` contains Codex custom subagents.
- `.claude/agents/` contains Claude Code custom subagents.
- `ai/` contains collaboration workflows, source maps, harness maps, and evaluation checklists.
- `archive/` contains imported historical material that should not be edited as the canonical source.

## The Playbook Is a Kit

The Viable Coder playbook is delivered as a **kit**, not as a book alone. The reader pays $495 for the manuscript plus a working reference application they install, configure to their situation, and run as their own AI-coding harness. The same kit is what Clay uses in every mentorship engagement; the $495 self-directed tier and the $4,000/month mentorship engagement (see `website/public/mentorship.html`) share one kit. The cost difference reflects access to Clay, not access to the doctrine.

The canonical design surface for the kit is `ai/viable-coder-kit-concept-manifest.md`. Read it before making changes that touch:

- doctrine the kit must operationalize (the nine dimensions, the ADLC gates, the audience model, the maintenance trilogy, the signal set)
- Section 1's install moment, Section 2's configuration moment, Section 3's day-to-day harness, Section 4's longitudinal dashboard
- the website's playbook positioning or pricing
- any harness artifact (skill, agent, instruction surface) that will eventually ship inside the kit

**Doctrine–code coupling.** A doctrinal claim the kit cannot operationalize is a doctrinal claim not yet ready to ratify. Changes to load-bearing doctrine should flag the kit implication. See the concept manifest §5 for the coupling contract.

**Dual-judgement framing.** The playbook delivers both **founder judgement** (the *should I build it* gate) at origination and **engineering judgement** (the *will it scale* gate) across the day-to-day, in the proportion Section 2's configuration calibrates per situation. The LinkedIn essay at `doctrine/voice/linkedin-builders-journey-ai-coding.md` is the public statement of this frame.

**Realignment order for any project-wide change.** Harness-facing instructions and doctrine surfaces first; outlines, narratives, modules, and website pages second — and only to reorganize and re-present, not to rewrite from scratch. Source content is plentiful; the kit concept does not require new writing, it requires new organization and presentation.

## Harness Artifact Sync

This repo privileges coding-harness capability over a single human-readable source layout.

When changing a reusable AI workflow, skill, agent, or instruction surface, update every active harness copy in the same change:

- Codex repo skills: `.agents/skills/<skill-name>/SKILL.md`
- Claude Code skills: `.claude/skills/<skill-name>/SKILL.md`
- Codex custom agents: `.codex/agents/<agent-name>.toml`
- Claude Code subagents: `.claude/agents/<agent-name>.md`
- Codex project instructions: `AGENTS.md`
- Claude Code project instructions: `CLAUDE.md`
- Harness map: `ai/harness-map.md`

Do not update only one harness location unless the change is intentionally harness-specific. If a divergence is intentional, document the reason in the changed file or in `ai/harness-map.md`.

## Default Workflow

1. Identify which surface the task touches: book, doctrine, research, website, harness configuration, or AI workflow.
2. Load only the necessary source files from `ai/source-map.md`.
3. Apply any path-specific Claude rule under `.claude/rules/`.
4. Make the smallest coherent change.
5. Check for doctrine drift, voice drift, structural drift, and harness drift before finishing.

## Style Guardrails

- Write plainly, with weight. Avoid hype, vendor language, and generalized futurism.
- Keep the human answerable for risk, judgment, origination, and review.
- Treat AI as a powerful collaborator inside a governed process, not as the author of the ends.
- Prefer concrete reader situations, gates, modules, signals, and questions over abstractions without use.
- For playbook material, prefer felt-need order over explanation order: Scene -> Tension -> Distinction -> Tool -> Return.
