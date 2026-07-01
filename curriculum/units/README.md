# Curriculum Units

This folder is the target app-renderable structure for the private kit curriculum.

The app-renderable lesson prose lives here. Working structural artifacts still live in `curriculum/outlines/`. As lessons are migrated into app-ready form, use this shape:

```text
unit-01-install-knowing-who-does-what/
  unit.md
  lessons/
    lesson-01-short-slug/
      lesson.md
      vocabulary.md
      exercise.md
      kit-action.md
      artifacts.md
      signals.md
```

The root `unit.md` is the unit-opening prose surface. It should not be only an index or source note. Use it to open the unit with narrative prose — a story, allegory, scene, or concrete builder situation — that creates felt need for the whole unit, names the unit's governing tension, introduces the unit's kit moment, and hands the builder into the lesson sequence. Track recurring unit scenes and callbacks in `curriculum/narrative-ledger.md`.

Do not create empty component files merely to satisfy the shape. A lesson bundle should include the components the lesson actually needs. The required contract is conceptual:

- `lesson.md`: the teaching content in felt-need order.
- `vocabulary.md`: terms introduced or used at the point of need.
- `exercise.md`: what the builder does.
- `kit-action.md`: what the private app or harness does.
- `artifacts.md`: what durable output remains.
- `signals.md`: what the kit records, reads, or plants for later reading.

Use `curriculum/templates/lesson-bundle/` as the starting point for new bundle work.
