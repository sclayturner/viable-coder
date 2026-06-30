# Harness Map

This repository privileges coding-harness capability over a single human-readable source layout. Harness artifacts live where Codex and Claude Code discover them natively.

## Root Instructions

| Purpose | Codex | Claude Code |
| --- | --- | --- |
| Project instructions | `AGENTS.md` | `CLAUDE.md` |
| Path-specific instructions | nested `AGENTS.md` files | `.claude/rules/*.md` |

## Skills

| Purpose | Codex | Claude Code |
| --- | --- | --- |
| Playbook editor | `.agents/skills/viablecoder-playbook-editor/SKILL.md` | `.claude/skills/viablecoder-playbook-editor/SKILL.md` |
| Voice and positioning | `.agents/skills/viablecoder-voice-and-positioning/SKILL.md` | `.claude/skills/viablecoder-voice-and-positioning/SKILL.md` |
| Structure auditor | `.agents/skills/viablecoder-structure-auditor/SKILL.md` | `.claude/skills/viablecoder-structure-auditor/SKILL.md` |
| Module architect | `.agents/skills/viablecoder-module-architect/SKILL.md` | `.claude/skills/viablecoder-module-architect/SKILL.md` |

## Agents

| Purpose | Codex | Claude Code |
| --- | --- | --- |
| Editorial review | `.codex/agents/editor.toml` | `.claude/agents/editor.md` |
| Voice review | `.codex/agents/voice-reviewer.toml` | `.claude/agents/voice-reviewer.md` |
| Structure audit | `.codex/agents/structure-auditor.toml` | `.claude/agents/structure-auditor.md` |
| Module architecture | `.codex/agents/module-architect.toml` | `.claude/agents/module-architect.md` |
| Research review | `.codex/agents/research-reviewer.toml` | `.claude/agents/research-reviewer.md` |

## Shared Editorial Doctrine

The reader-orientation pattern lives in `doctrine/reader-orientation-pattern.md` and is enforced through curriculum instructions, evals, skills, and editorial/structure/voice/module agents. When changing that pattern, update every active Codex and Claude harness copy that applies it.

The playbook is delivered as a **private kit app** with integrated units, lessons, exercises, working agents, configuration surfaces, telemetry, and dashboards. The canonical design surface for the kit is `ai/viable-coder-kit-concept-manifest.md`. Root project instructions (`AGENTS.md` and `CLAUDE.md`) carry the kit framing in their *The Playbook Is a Kit App* heading. When the kit concept evolves, update the manifest first, then both root project instructions, then any downstream surface affected.

## Sync Rule

When changing a reusable AI workflow, skill, agent, or instruction surface, update every active harness copy in the same change. Do not update only one harness location unless the change is intentionally harness-specific. If a divergence is intentional, document the reason in the changed file or here.

## Guidance Sync Notes

- 2026-06-20: Added narrative validation guidance for major builder-facing playbook structure work across `curriculum/AGENTS.md`, `.claude/rules/curriculum.md`, both `viablecoder-playbook-editor` skill copies, `ai/evals/structure-checklist.md`, and `curriculum/outlines/README.md`.
- 2026-06-20: Established `doctrine/audiences.md` as the canonical six-audience source of truth; registered in `doctrine/AGENTS.md`, `.claude/rules/doctrine.md`, and `ai/source-map.md`. Downstream propagation across `curriculum/modules/`, `curriculum/outlines/`, and `website/` follows.
- 2026-06-24: **Kit realignment.** Established `ai/viable-coder-kit-concept-manifest.md` as the canonical design surface for the playbook-as-kit (private kit app with integrated curriculum at $495, same kit Clay uses in mentorship). Propagated the kit framing in a single pass across both harnesses:
  - Root project instructions: new *The Playbook Is a Kit* heading in `CLAUDE.md` and `AGENTS.md`.
  - AI orchestration: kit manifest registered in `ai/source-map.md` and `ai/harness-map.md` (this file, Shared Editorial Doctrine).
  - `.claude/rules/*`: kit-awareness additions in the then-current `book.md` rule, `doctrine.md`, `website.md`, `research.md`, and `harness-artifacts.md` (each path-scoped to its surface).
  - Doctrine: dual-judgement framing added to `doctrine/value-proposition.md` (+ new Delivery heading); new "The kit (delivery, not metaphor)" lexicon entry in `doctrine/playbook-lexicon.md`; new "The kit: delivery, not metaphor" heading in `curriculum/outlines/conceptual-playbook-outline.md` plus updated 1.4 first-build rung and a new "Kit-resolved decisions" subsection.
  - Skill pairs (both copies kept equivalent): `viablecoder-playbook-editor`, `viablecoder-voice-and-positioning` (now reads the LinkedIn essay), `viablecoder-structure-auditor`, `viablecoder-module-architect`.
  - Agent pairs (both copies kept equivalent in purpose; markdown frontmatter vs TOML format): `editor`, `voice-reviewer`, `structure-auditor`, `module-architect`, `research-reviewer`.
  - Doctrine surfaces deliberately **not touched** in this pass: `doctrine/reader-orientation-pattern.md` (lesson-level rhythm, kit-invariant), the maintenance trilogy (`human-condition.md`, `observability.md`, `upkeep.md`), `doctrine/organic-intelligence.md`, `doctrine/steering.md`, `doctrine/right-sized-models.md`, `doctrine/nine-dimensions-model.md`, and `doctrine/audiences.md` (which already implicitly carries the kit concept via the "routes the kit" / "delivered kit" / "this audience realizes the kit is real" language).
  - **Realignment order locked.** Harness and doctrine first; outlines, narratives, modules, and website pages second, and only to reorganize and re-present, not to rewrite. Source content is plentiful. See `CLAUDE.md` / `AGENTS.md` *The Playbook Is a Kit* heading, last paragraph.
- 2026-06-30: **Private kit app and Unit/Lesson realignment.** Ratified the product shift from "manuscript plus reference application" to an integrated private kit app with curriculum inside it. Renamed `book/` to `curriculum/`, `curriculum/manuscript/` to `curriculum/lessons/`, and active `section-*` curriculum artifacts to `unit-*`. Replaced current user-facing structure language from Sections/Chapters to Units/Lessons while preserving modules as the audience-configuration layer.
  - Canonical surfaces updated: `ai/viable-coder-kit-concept-manifest.md`, `AGENTS.md`, `CLAUDE.md`, `doctrine/value-proposition.md`, `doctrine/playbook-lexicon.md`, `doctrine/reader-orientation-pattern.md`, `curriculum/AGENTS.md`, and `ai/source-map.md`.
  - Harness sync: renamed `.claude/rules/book.md` to `.claude/rules/curriculum.md`; updated Codex and Claude skill pairs, agent pairs, path rules, and skill OpenAI metadata to enforce private-kit-app, Unit/Lesson, and builder-facing language.
  - Downstream content surfaces should now use `curriculum/` paths and Unit/Lesson labels unless intentionally referring to historical source material.
