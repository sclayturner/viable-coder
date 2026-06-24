---
paths:
  - ".agents/**"
  - ".claude/**"
  - ".codex/**"
  - "AGENTS.md"
  - "CLAUDE.md"
  - "ai/harness-map.md"
---

# Harness Artifact Instructions

This repo keeps harness-native AI collaboration artifacts in their expected discovery locations.

## Working Rules

- Keep Codex and Claude Code skill copies equivalent unless a divergence is intentional.
- Keep Codex and Claude Code agent definitions equivalent in purpose, even though their file formats differ.
- Update `ai/harness-map.md` whenever adding, removing, renaming, or intentionally diverging a harness artifact.
- Do not restore root `skills/` or `agents/` as active harness locations. Use the native hidden directories.
- Harness artifacts (skills, agents, instruction surfaces) will eventually ship as part of the kit (`ai/viable-coder-kit-concept-manifest.md`). Treat them as part of the deliverable, not as authoring scaffolding — a divergence here is also a divergence in what reaches the reader.
