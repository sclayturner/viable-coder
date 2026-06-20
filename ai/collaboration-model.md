# Collaboration Model

This project uses layered guidance.

## Layers

- `AGENTS.md`: Codex standing instructions loaded by location.
- `CLAUDE.md`: Claude Code project instructions loaded at session start.
- `.claude/rules/`: Claude Code path-scoped instructions.
- `.codex/agents/`: Codex custom subagents for independent review or specialized passes.
- `.claude/agents/`: Claude Code custom subagents for independent review or specialized passes.
- `.agents/skills/`: Codex-discoverable repository skills with `SKILL.md`, references, and optional assets or scripts.
- `.claude/skills/`: Claude Code-discoverable repository skills with `SKILL.md`, references, and optional assets or scripts.
- `ai/harness-map.md`: cross-harness map and sync rule for duplicated artifacts.
- `ai/workflows/`: repeatable procedures that may call on multiple skills or subagent roles.
- `ai/evals/`: checklists for quality control.
- `ai/source-guides/`: contextual guides for large, historical, or local reference sources that should not be treated as canonical by default.
- `ai/adlc-dogfooding.md`: the lightweight mapping from the ADLC to how this repository is worked.

## Distinctions

- A skill is a repeatable capability. Keep Codex and Claude Code skill copies equivalent unless a divergence is intentional.
- A subagent is a role and lens. Keep Codex and Claude Code agent definitions equivalent in purpose even though their formats differ.
- A workflow is a sequence of work.
- An eval is a standard of judgment.
- Doctrine is source material, not an instruction mechanism.
- A source guide is a routing and context document. It explains how to use a source without letting its old frame or provenance drift into current doctrine.
- ADLC dogfooding is an operating discipline. It keeps origination with Clay, lets the agent handle the producible middle, and returns answerability to Clay through checks and review.

## Default Collaboration Pattern

1. Use `AGENTS.md` and `CLAUDE.md` for harness-native standing rules.
2. Use `ai/adlc-dogfooding.md` as the default shape for substantive repo work.
3. Use a skill when the task matches a repeatable capability.
4. Use a workflow when the task has multiple phases.
5. Use a subagent role when an independent lens would improve quality.
6. Use source guides before promoting historical or local reference material.
7. Use `ai/harness-map.md` before changing skills, agents, or root instruction files.
8. Use evals before finalizing substantial book, doctrine, or website changes.
