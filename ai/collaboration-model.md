# Collaboration Model

This project uses layered guidance.

## Layers

- `AGENTS.md`: standing instructions loaded by location.
- `agents/`: subagent role briefs for independent review or specialized passes.
- `skills/`: reusable Codex skills with `SKILL.md`, references, and optional assets or scripts.
- `ai/workflows/`: repeatable procedures that may call on multiple skills or subagent roles.
- `ai/evals/`: checklists for quality control.

## Distinctions

- A skill is a repeatable capability.
- A subagent brief is a role and lens.
- A workflow is a sequence of work.
- An eval is a standard of judgment.
- Doctrine is source material, not an instruction mechanism.

## Default Collaboration Pattern

1. Use root and local `AGENTS.md` for standing rules.
2. Use a skill when the task matches a repeatable capability.
3. Use a workflow when the task has multiple phases.
4. Use a subagent role when an independent lens would improve quality.
5. Use evals before finalizing substantial book, doctrine, or website changes.
