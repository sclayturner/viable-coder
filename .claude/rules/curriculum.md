---
paths:
  - "curriculum/**"
---

# Curriculum Instructions

Use this folder for the saleable kit curriculum: unit and lesson content, outlines, modules, and exercises that will live inside the private kit app.

## Working Rules

- Treat `curriculum/units/` as the app-renderable unit-and-lesson bundle structure for the private kit app. Current lesson prose belongs there.
- Treat `curriculum/outlines/` as current structure, not immutable law.
- Treat `curriculum/modules/` as the system that maps audience situations to guidance, exercises, ADLC gates, skill pairings, and measurement signals.
- Treat `curriculum/vocabulary/` as builder-facing vocabulary surfaces derived from `doctrine/playbook-lexicon.md`.
- Treat `curriculum/templates/lesson-bundle/` as the standard for new or migrated lesson bundles.
- Do not let a lesson become a research memo. Move support material to `research/` or `doctrine/`.
- Do not let a lesson become website copy. Move promotional or conversion language to `website/`.
- Organize major builder-facing units in felt-need order when possible: Scene -> Tension -> Distinction -> Tool -> Return. Use `doctrine/reader-orientation-pattern.md` as the governing doctrine and `curriculum/narrative-ledger.md` to track recurring anchors.
- When developing structure for a major builder-facing unit, such as a unit, lesson, or major module, use a narrative prose draft as a validation artifact alongside the structural artifact. The narrative is not final lesson prose or polish; it tests whether the structure earns forward motion. Default sequence: conceptual frame -> granular sub-beats -> narrative validation.
- Treat story as structural evidence, not ornament. A scene should carry a doctrine, gate, module, diagnostic, exercise, or signal.

## Unit Bundle Standard

A unit bundle root `unit.md` is the unit-opening prose surface. It should not be only an index or source note. Open the unit with narrative prose — a story, allegory, scene, or concrete builder situation — that creates felt need for the whole unit, names the unit's governing tension, introduces the unit's kit moment, and hands the builder into the lesson sequence.

The unit opener works at the altitude of the whole unit. It may use the reader-orientation rhythm without exposing it as headings, but it should still move from scene to pressure to governing distinction to the kit-facing move the unit will teach. Track recurring scenes and callbacks in `curriculum/narrative-ledger.md`.

## Lesson Bundle Standard

A lesson is a **bundle**, not prose alone. When creating or migrating app-renderable lessons under `curriculum/units/`, use this component vocabulary:

- `lesson.md`: the teaching content. It carries the scene, tension, distinction, tool, and return.
- `vocabulary.md`: terms introduced or required by the lesson. Define terms at the point of need, not as an upfront glossary dump.
- `exercise.md`: the builder's assigned work.
- `kit-action.md`: what the private app, local harness, agent, Skill, gate, or dashboard does in support of the lesson.
- `artifacts.md`: durable outputs created or changed by the lesson.
- `signals.md`: telemetry, readings, or long-clock seeds associated with the lesson.

Do not create empty files merely to satisfy the shape. A lesson may omit a component file when the component is genuinely absent, or keep components together in a transitional draft when the split would be premature. The conceptual distinction still matters: do not confuse the builder's exercise with the kit's action, the artifact with the signal, or vocabulary with doctrine exposition.

## Unit Architecture

The kit curriculum has four major units. Each is named in **pair form** — kit-moment verb first (what the builder does with the kit), conceptual title second (what the curriculum teaches). The four verbs — **Install. Configure. Use. Watch.** — are canonical (see `doctrine/playbook-lexicon.md`).

1. **Install: Knowing Who Does What** — human and machine roles, risk, Organic Intelligence, condition, observability, upkeep.
2. **Configure: Finding Your Situation** — audience types, modules, develop-vs-borrow, relocation, operating profile.
3. **Use: Running the Day-to-Day** — ADLC, gates, agents, skills, review capacity, documentation, deploy and observe.
4. **Watch: Playing the Long Game** — nine dimensions, long-term viability, dashboards, longitudinal inquiry.

## Kit Awareness

The playbook is delivered as a **private kit app**: integrated units, lessons, exercises, working agents, configuration surfaces, telemetry, and dashboards. See `ai/viable-coder-kit-concept-manifest.md` §2 for the canonical concept and the unit-to-kit handoffs. Curriculum work should know which kit moment the lesson hands the builder to. Do not write Unit 1 as if the builder will leave with concepts only — they install on day one. Do not write Unit 2 as a taxonomy — it configures the builder's own kit. Do not write Unit 3 as advice — it is the day-to-day of a configured harness the builder is running.

## Editorial Test

Before finishing curriculum work, ask:

- Does this make the builder more answerable, or merely more impressed?
- Is this Clay's point of view, or could any AI consultant have written it?
- Does the passage know which unit or lesson it belongs to?
- Is the builder being given a practical move, a diagnostic, or a governing distinction?
- If this is a lesson, does it know its exercise, kit action, artifact, signal, and vocabulary implications?
- Does the major unit create felt need before exposition, then return to its opening scene or situation with changed understanding?
- Does the passage know the playbook is a private kit app, and does it hand the builder to the right kit moment for its unit?
