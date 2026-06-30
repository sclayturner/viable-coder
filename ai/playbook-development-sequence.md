# Playbook Development Sequence — Proposal

*Working document. Captures the approach we arrived at on 2026-06-20 and identifies where it would be codified in the project's guidance surface if you choose to apply it. Historical note: this predates the 2026-06-30 private kit app and Unit/Lesson realignment.*

---

## What we did

In a single conversation, we worked through how to develop the Viable Coder playbook's structure — starting from the existing four-unit outlines and ending at narrative prose. Four artifact types were produced in sequence:

1. **A matrix outline** for Unit 3, Lesson 3 — [curriculum/outlines/unit-3-lesson-3-matrix.md](curriculum/outlines/unit-3-lesson-3-matrix.md). Exposes the linear spine and the modular audience configuration side-by-side, in the form of a per-gate configuration manifest.
2. **An end-to-end view** of the full playbook — [curriculum/outlines/playbook-end-to-end.md](curriculum/outlines/playbook-end-to-end.md) plus a rendered Mermaid flowchart at [curriculum/outlines/playbook-end-to-end.png](curriculum/outlines/playbook-end-to-end.png). Lesson-level ToC with cross-cutting threads.
3. **A granular ToC** for Unit 1, all lessons — original pilot draft, since absorbed into the polished [curriculum/outlines/unit-1-outline.md](curriculum/outlines/unit-1-outline.md). Sub-beat granularity with load-bearing phrases pulled verbatim from doctrine.
4. **A narrative prose draft** of Unit 1, end to end — original pilot draft, since polished and promoted to [curriculum/lessons/unit-1.md](curriculum/lessons/unit-1.md). The granular ToC rewritten as one continuous lecture in the voice of a builder addressing a builder.

## What we found

The first three artifacts answered structural questions — what's in, what configures what, how the threads weave, how the lesson-by-lesson beats decompose. None of them told Clay whether a builder would *want* to move forward through the unit.

The narrative did.

Clay's own words after reading the Unit 1 narrative draft:

> *I really like this approach because for me, the human, I can see "why" I am writing it and why another human would want to read it. A story builds. I am convinced of why there is value moving forward through the reading.*

That is a non-trivial finding. It means the prose form is not the polish step at the end of structural work — it is the **evaluation step**. Without it, the author cannot tell whether the structure has builder-pull. A matrix can be internally consistent; a granular ToC can hit every load-bearing concept; a flowchart can show every cross-cutting thread land where it should — and none of that confirms that a builder would care to begin Lesson 1 and not stop.

## The approach we've arrived at

When developing the structure of a major builder-facing unit (a unit, a lesson, a major module), the default working sequence is:

1. **Conceptual frame.** What the unit is doing and why; what doctrine it draws on; how it relates to other units. *(Existing outline-level artifact — `unit-N-outline.md` and `conceptual-playbook-outline.md` already do this.)*
2. **Granular sub-beats.** The unit at sub-beat granularity, with concepts named and key phrases identified. Phrases lifted from doctrine are marked; invented ones are flagged as proposed. *(New artifact type, originally piloted as `unit-1-granular.md`; since absorbed into the polished [unit-1-outline.md](curriculum/outlines/unit-1-outline.md).)*
3. **Narrative prose draft.** The unit as continuous prose, in the appropriate voice, end to end. Lesson headings preserved so the spine stays legible. *(New artifact type, originally piloted as `unit-1-narrative.md`; since polished and promoted to [unit-1.md](curriculum/lessons/unit-1.md).)*

The narrative is treated as the **evaluation step**, not polish. It is how the author confirms the structure earns the builder's forward motion.

### Collateral rules that fall out of this

- **The narrative is a working draft, not lesson content.** It lives in `curriculum/outlines/`, not `curriculum/lessons/`. Its purpose is structural validation. Final lesson prose is a separate, later step that may or may not start from this narrative.
- **Lifted phrases are marked.** When the narrative quotes doctrine verbatim, those phrases are bolded or quoted. This keeps the doctrine the source of truth and the narrative honest about what it inherited.
- **Lived-experience anchors are slots, not invented content.** Where the reader-orientation pattern calls for personal Clay material, the narrative *names the slot* rather than guessing what goes there. Memoir-by-proxy is forbidden.
- **Drift is carried forward, not papered over.** If the conceptual outline and the unit outline disagree (as happened with the maintenance trilogy's bloom in Unit 1), the narrative surfaces the discrepancy explicitly rather than silently picking one reading.
- **Matrix outlines remain the right tool for modular units.** The matrix form ([unit-3-lesson-3-matrix.md](curriculum/outlines/unit-3-lesson-3-matrix.md)) is a fourth artifact type that sits alongside the conceptual/granular/narrative sequence when modularity branches the lesson. It is *additive*, not a replacement.

## What should change in the guidance files

If this approach is codified — and per the [CLAUDE.md](CLAUDE.md) harness-sync rule, Codex has to be able to infer it as cleanly as Claude Code does — the minimum canonical sync set is **four files, plus one optional builder-facing note**.

### 1. `curriculum/AGENTS.md` Working Rules (Codex side)

Add a bullet near the existing felt-need-order rule:

> - When developing structure for a major builder-facing unit (unit, lesson, major module), produce a narrative prose draft alongside the structural artifact (outline, granular ToC, matrix). Treat the narrative as the **evaluation step**, not a polish step — it is how the author confirms whether the structure has builder-pull. Default sequence: conceptual frame → granular sub-beats → narrative.

### 2. `.claude/rules/curriculum.md` (Claude Code mirror)

Same bullet, same place, per the harness sync rule.

### 3. `viablecoder-playbook-editor` skill — both copies

`.claude/skills/viablecoder-playbook-editor/SKILL.md` and `.agents/skills/viablecoder-playbook-editor/SKILL.md` extend their Output Standard. Current text:

> For review tasks, lead with findings and file references. For drafting tasks, produce clean prose plus a short note on source assumptions. For restructuring tasks, propose moves before rewriting.

Proposed addition (one sentence, appended):

> For structural tasks on major builder-facing units, produce a narrative prose draft alongside the structural artifact — the narrative is the evaluation step, not polish.

### 4. `ai/harness-map.md`

Log the four-file sync entry so harness divergence stays auditable. One line, naming the date and the files touched.

### Optional: `curriculum/outlines/README.md`

A short stub naming the four artifact types now living in `curriculum/outlines/` — `outline`, `granular`, `matrix`, `narrative` — and the working sequence between them. Useful if other contributors will land in `curriculum/outlines/` cold; skippable if the folder stays mostly Clay-authored.

## Things to decide before applying

A few calls worth making explicitly:

1. **Scope of "major builder-facing unit."** The rule applies to *units, lessons, and major modules.* Is that the right cutoff? A small audience module probably doesn't need a narrative pass; a Unit 3 walk-through definitely does. Confirm.
2. **What "narrative" means for non-prose surfaces.** Some playbook surfaces are tabular or list-shaped by nature (the lexicon, the crosswalk). The rule doesn't apply to those, but the standard text doesn't say so. Decide whether to qualify the rule or trust the builder to apply it sensibly.
3. **Whether the project memory file gets removed.** I wrote one at `~/.claude/projects/.../memory/feedback_narrative_form_for_structure.md`. Once the standard is in place, the memory is redundant — and it loads only in Claude Code, not Codex, so removing it once the standard exists is the clean move.
4. **What happens to this document.** Once the four-file sync is in, this proposal is either (a) redundant, in which case it gets deleted; or (b) useful as the long-form rationale that the terse standard text doesn't carry, in which case it stays in `ai/` as a record of *why* the rule exists. Worth deciding now so the document either earns its keep or gets removed.
5. **Order of operations.** The narrative-as-evaluation pattern was discovered by piloting it on Unit 1. Unit 2 — where the modularity branches into audience kits — is the next genuine test. Worth considering whether to apply the standard to one more unit *before* codifying, in case the pattern needs revision.

---

That's the proposal. The standards files have not been touched. When you're ready to codify, the four-file sync plus the optional README is the move; until then, this document is the only place the approach is written down.
