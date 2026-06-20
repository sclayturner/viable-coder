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

The reader-orientation pattern lives in `doctrine/reader-orientation-pattern.md` and is enforced through book instructions, evals, skills, and editorial/structure/voice/module agents. When changing that pattern, update every active Codex and Claude harness copy that applies it.

## Sync Rule

When changing a reusable AI workflow, skill, agent, or instruction surface, update every active harness copy in the same change. Do not update only one harness location unless the change is intentionally harness-specific. If a divergence is intentional, document the reason in the changed file or here.
