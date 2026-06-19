# Collaboration Model

This project uses layered guidance.

## Layers

- `AGENTS.md`: standing instructions loaded by location.
- `agents/`: subagent role briefs for independent review or specialized passes.
- `skills/`: reusable Codex skills with `SKILL.md`, references, and optional assets or scripts.
- `ai/workflows/`: repeatable procedures that may call on multiple skills or subagent roles.
- `ai/evals/`: checklists for quality control.
- `ai/source-guides/`: contextual guides for large, historical, or local reference sources that should not be treated as canonical by default.
- `ai/adlc-dogfooding.md`: the lightweight mapping from the ADLC to how this repository is worked.

## Distinctions

- A skill is a repeatable capability.
- A subagent brief is a role and lens.
- A workflow is a sequence of work.
- An eval is a standard of judgment.
- Doctrine is source material, not an instruction mechanism.
- A source guide is a routing and context document. It explains how to use a source without letting its old frame or provenance drift into current doctrine.
- ADLC dogfooding is an operating discipline. It keeps origination with Clay, lets the agent handle the producible middle, and returns answerability to Clay through checks and review.

## Default Collaboration Pattern

1. Use root and local `AGENTS.md` for standing rules.
2. Use `ai/adlc-dogfooding.md` as the default shape for substantive repo work.
3. Use a skill when the task matches a repeatable capability.
4. Use a workflow when the task has multiple phases.
5. Use a subagent role when an independent lens would improve quality.
6. Use source guides before promoting historical or local reference material.
7. Use evals before finalizing substantial book, doctrine, or website changes.
