# Playbook Development Sequence — Proposal

*Working document. Captures the approach we arrived at on 2026-06-20 and identifies where it would be codified in the project's guidance surface if you choose to apply it. Nothing in `book/AGENTS.md`, `.claude/rules/book.md`, the skill files, or `ai/harness-map.md` has been touched yet.*

---

## What we did

In a single conversation, we worked through how to develop the Viable Coder playbook's structure — starting from the existing four-section outlines and ending at narrative prose. Four artifact types were produced in sequence:

1. **A matrix outline** for Section 3, Chapter 3 — [book/outlines/section-3-chapter-3-matrix.md](book/outlines/section-3-chapter-3-matrix.md). Exposes the linear spine and the modular audience configuration side-by-side, in the form of a per-gate configuration manifest.
2. **An end-to-end view** of the full playbook — [book/outlines/playbook-end-to-end.md](book/outlines/playbook-end-to-end.md) plus a rendered Mermaid flowchart at [book/outlines/playbook-end-to-end.png](book/outlines/playbook-end-to-end.png). Chapter-level ToC with cross-cutting threads.
3. **A granular ToC** for Section 1, all chapters — original pilot draft, since absorbed into the polished [book/outlines/section-1-outline.md](book/outlines/section-1-outline.md). Sub-beat granularity with load-bearing phrases pulled verbatim from doctrine.
4. **A narrative prose draft** of Section 1, end to end — original pilot draft, since polished and promoted to [book/manuscript/section-1.md](book/manuscript/section-1.md). The granular ToC rewritten as one continuous lecture in the voice of a builder addressing a builder.

## What we found

The first three artifacts answered structural questions — what's in, what configures what, how the threads weave, how the chapter-by-chapter beats decompose. None of them told Clay whether a reader would *want* to move forward through the section.

The narrative did.

Clay's own words after reading the Section 1 narrative draft:

> *I really like this approach because for me, the human, I can see "why" I am writing it and why another human would want to read it. A story builds. I am convinced of why there is value moving forward through the reading.*

That is a non-trivial finding. It means the prose form is not the polish step at the end of structural work — it is the **evaluation step**. Without it, the author cannot tell whether the structure has reader-pull. A matrix can be internally consistent; a granular ToC can hit every load-bearing concept; a flowchart can show every cross-cutting thread land where it should — and none of that confirms that a reader would care to begin Chapter 1 and not stop.

## The approach we've arrived at

When developing the structure of a major reader-facing unit (a section, a chapter, a major module), the default working sequence is:

1. **Conceptual frame.** What the unit is doing and why; what doctrine it draws on; how it relates to other units. *(Existing outline-level artifact — `section-N-outline.md` and `conceptual-playbook-outline.md` already do this.)*
2. **Granular sub-beats.** The unit at sub-beat granularity, with concepts named and key phrases identified. Phrases lifted from doctrine are marked; invented ones are flagged as proposed. *(New artifact type, originally piloted as `section-1-granular.md`; since absorbed into the polished [section-1-outline.md](book/outlines/section-1-outline.md).)*
3. **Narrative prose draft.** The unit as continuous prose, in the appropriate voice, end to end. Chapter headings preserved so the spine stays legible. *(New artifact type, originally piloted as `section-1-narrative.md`; since polished and promoted to [section-1.md](book/manuscript/section-1.md).)*

The narrative is treated as the **evaluation step**, not polish. It is how the author confirms the structure earns the reader's forward motion.

### Collateral rules that fall out of this

- **The narrative is a working draft, not manuscript.** It lives in `book/outlines/`, not `book/manuscript/`. Its purpose is structural validation. Manuscript prose is a separate, later step that may or may not start from this narrative.
- **Lifted phrases are marked.** When the narrative quotes doctrine verbatim, those phrases are bolded or quoted. This keeps the doctrine the source of truth and the narrative honest about what it inherited.
- **Lived-experience anchors are slots, not invented content.** Where the reader-orientation pattern calls for personal Clay material, the narrative *names the slot* rather than guessing what goes there. Memoir-by-proxy is forbidden.
- **Drift is carried forward, not papered over.** If the conceptual outline and the section outline disagree (as happened with the maintenance trilogy's bloom in Section 1), the narrative surfaces the discrepancy explicitly rather than silently picking one reading.
- **Matrix outlines remain the right tool for modular units.** The matrix form ([section-3-chapter-3-matrix.md](book/outlines/section-3-chapter-3-matrix.md)) is a fourth artifact type that sits alongside the conceptual/granular/narrative sequence when modularity branches the chapter. It is *additive*, not a replacement.

## What should change in the guidance files

If this approach is codified — and per the [CLAUDE.md](CLAUDE.md) harness-sync rule, Codex has to be able to infer it as cleanly as Claude Code does — the minimum canonical sync set is **four files, plus one optional reader-facing note**.

### 1. `book/AGENTS.md` Working Rules (Codex side)

Add a bullet near the existing felt-need-order rule:

> - When developing structure for a major reader-facing unit (section, chapter, major module), produce a narrative prose draft alongside the structural artifact (outline, granular ToC, matrix). Treat the narrative as the **evaluation step**, not a polish step — it is how the author confirms whether the structure has reader-pull. Default sequence: conceptual frame → granular sub-beats → narrative.

### 2. `.claude/rules/book.md` (Claude Code mirror)

Same bullet, same place, per the harness sync rule.

### 3. `viablecoder-playbook-editor` skill — both copies

`.claude/skills/viablecoder-playbook-editor/SKILL.md` and `.agents/skills/viablecoder-playbook-editor/SKILL.md` extend their Output Standard. Current text:

> For review tasks, lead with findings and file references. For drafting tasks, produce clean prose plus a short note on source assumptions. For restructuring tasks, propose moves before rewriting.

Proposed addition (one sentence, appended):

> For structural tasks on major reader-facing units, produce a narrative prose draft alongside the structural artifact — the narrative is the evaluation step, not polish.

### 4. `ai/harness-map.md`

Log the four-file sync entry so harness divergence stays auditable. One line, naming the date and the files touched.

### Optional: `book/outlines/README.md`

A short stub naming the four artifact types now living in `book/outlines/` — `outline`, `granular`, `matrix`, `narrative` — and the working sequence between them. Useful if other contributors will land in `book/outlines/` cold; skippable if the folder stays mostly Clay-authored.

## Things to decide before applying

A few calls worth making explicitly:

1. **Scope of "major reader-facing unit."** The rule applies to *sections, chapters, and major modules.* Is that the right cutoff? A small audience module probably doesn't need a narrative pass; a Section 3 walk-through definitely does. Confirm.
2. **What "narrative" means for non-prose surfaces.** Some playbook surfaces are tabular or list-shaped by nature (the lexicon, the crosswalk). The rule doesn't apply to those, but the standard text doesn't say so. Decide whether to qualify the rule or trust the reader to apply it sensibly.
3. **Whether the project memory file gets removed.** I wrote one at `~/.claude/projects/.../memory/feedback_narrative_form_for_structure.md`. Once the standard is in place, the memory is redundant — and it loads only in Claude Code, not Codex, so removing it once the standard exists is the clean move.
4. **What happens to this document.** Once the four-file sync is in, this proposal is either (a) redundant, in which case it gets deleted; or (b) useful as the long-form rationale that the terse standard text doesn't carry, in which case it stays in `ai/` as a record of *why* the rule exists. Worth deciding now so the document either earns its keep or gets removed.
5. **Order of operations.** The narrative-as-evaluation pattern was discovered by piloting it on Section 1. Section 2 — where the modularity branches into audience kits — is the next genuine test. Worth considering whether to apply the standard to one more section *before* codifying, in case the pattern needs revision.

---

That's the proposal. The standards files have not been touched. When you're ready to codify, the four-file sync plus the optional README is the move; until then, this document is the only place the approach is written down.
