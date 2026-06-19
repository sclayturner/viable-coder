# Skills Instructions

Use this folder for reusable Codex skills that support work on the Viable Coder project.

## Working Rules

- Each skill lives in `skills/<skill-name>/SKILL.md`.
- Use lowercase hyphenated skill names.
- Keep `SKILL.md` lean. Put detailed project references in `references/`.
- Include only the resources the skill actually needs.
- Do not use skills to duplicate the book or doctrine corpus.
- Treat `agents/openai.yaml` inside a skill as UI metadata, not a subagent brief.

## Current Collaboration Skills

- `viablecoder-playbook-editor`: draft, revise, and organize playbook material.
- `viablecoder-voice-and-positioning`: preserve Clay's voice and position.
- `viablecoder-structure-auditor`: audit section flow, structural coherence, and doctrine drift.
- `viablecoder-module-architect`: reconcile audience modules, ADLC gates, skill pairings, and signals.

## Future Playbook-Native Skills

The book describes or implies skills such as `review-capacity`, `spec-driven`, `security-review`, and `originate-discovery`. Do not implement those as Codex skills until the relevant doctrine has stabilized.
