---
name: viablecoder-playbook-editor
description: Draft, revise, organize, and critique the Viable Coder playbook. Use when working on manuscript chapters, section outlines, reader exercises, playbook modules, or book-level editorial decisions for Clay Turner's Viable Coder project.
---

# Viable Coder Playbook Editor

## Overview

Use this skill to work on the playbook as a book: structure, sequence, reader usefulness, and Clay's point of view. Do not use it to make broad website changes or to implement code unless the task explicitly crosses into those surfaces.

## Required Orientation

Read these first:

- Root instructions: `AGENTS.md`
- Book instructions: `book/AGENTS.md`
- Source routing: `ai/source-map.md`
- Reader orientation pattern: `doctrine/reader-orientation-pattern.md`
- Kit concept manifest (the playbook is delivered as a kit, manuscript + working reference application): `ai/viable-coder-kit-concept-manifest.md`

Then load only the files needed for the current task:

- Section work: relevant file in `book/outlines/`
- Module work: relevant file in `book/modules/`
- Core concepts: relevant files in `doctrine/`
- Narrative anchors: `book/narrative-ledger.md` when drafting or revising section openings, chapter openings, recurring scenes, or callbacks
- Voice/lived source: `doctrine/voice/lived-answerability.md` when drafting or revising openings, examples, personal anchors, or human-risk passages
- Historical source routing: `ai/source-guides/superhuman-2025-source-guide.md` when considering material from the prior book
- Evidence or support: relevant files in `research/`

## Editing Standard

- Preserve the four-section architecture unless the task is explicitly architectural.
- Keep chapter prose distinct from research notes, website copy, and doctrine definitions.
- Prefer felt-need order over explanation order for major reader-facing units: Scene -> Tension -> Distinction -> Tool -> Return.
- For structural work on major reader-facing units, use a narrative prose draft as a validation artifact alongside the structural artifact. The narrative is not manuscript prose or polish; it tests whether the structure earns reader-pull. Default sequence: conceptual frame -> granular sub-beats -> narrative validation.
- Use story as structural evidence. A scene should carry a doctrine, gate, module, diagnostic, exercise, or signal; it should not merely add color.
- Prefer concrete reader situations, diagnostics, exercises, and decisions.
- Know which Clay source is carrying the passage: founder experience, engineering experience, personal life experience, or a deliberate combination.
- Remove generic AI-era claims unless they are tied to Clay's specific doctrine.
- Treat the prior `Superhuman` book as historical reference. Verify dated AI claims before promotion and translate durable ideas into current Viable Coder language.
- Surface open decisions rather than silently resolving major doctrine tension.
- **Treat the playbook as a kit.** Manuscript work hands the reader to the four canonical kit moments — **Install** (§1), **Configure** (§2), **Use** (§3), **Watch** (§4) — paired with the conceptual section titles (Section 1 — Install: Knowing Who Does What, and so on; see `doctrine/playbook-lexicon.md`). Do not write Section 1 as if the reader leaves with concepts only — they install on day one. Do not write Section 2 as a taxonomy — it configures the reader's own kit. Do not write Section 3 as advice — it is the day-to-day of a configured harness the reader is running. Reorganization and re-presentation are the typical moves; new writing is rarely the answer.

## Output Standard

For review tasks, lead with findings and file references. For drafting tasks, produce clean prose plus a short note on source assumptions. For restructuring tasks, propose moves before rewriting. For structural tasks on major reader-facing units, include or recommend the narrative validation pass unless there is a clear reason it does not apply.

## Checks

Before finishing substantial work, run the relevant checklists in `ai/evals/`.
