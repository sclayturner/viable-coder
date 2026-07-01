# Lesson Bundle Template

A lesson bundle is the app-renderable container for one lesson. It separates the parts the kit has to understand while keeping the builder's experience coherent.

Use this template when creating or migrating lessons under `curriculum/units/`.

## Components

- `lesson.md` is the teaching content. It should follow felt-need order where appropriate: Scene -> Tension -> Distinction -> Tool -> Return.
- `vocabulary.md` lists terms introduced or required by the lesson. Define terms at the point of use, not as detached exposition.
- `exercise.md` describes the builder's assigned work.
- `kit-action.md` describes what the private app or harness does to support the lesson.
- `artifacts.md` names the durable outputs created or changed by the lesson.
- `signals.md` names the telemetry, readings, or long-clock seeds associated with the lesson.

Not every lesson needs every file. Add a component file only when it carries real content. If a component is intentionally absent, the lesson should still make clear whether that absence is normal for the lesson or a gap to fill later.

## Required Distinctions

- An **exercise** is the builder's work.
- A **kit action** is the app or harness behavior.
- An **artifact** is what remains after the work.
- A **signal** is what the kit records, reads, or plants for later reading.
- **Vocabulary** is not a glossary dump; it is operational language introduced when the builder needs it.
