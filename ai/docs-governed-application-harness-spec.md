# Docs-Governed Application Harness Spec

This spec describes a repository pattern for an application whose durable operating knowledge lives in `docs/`, while both Codex and Claude Code can read native instructions, use native skills, and call native subagents without losing alignment.

The pattern is based on one principle: do not force every coding harness to consume one abstract instruction source. Give each harness the files it discovers natively, then maintain a clear synchronization contract between those files.

## Purpose

Use this structure when building an application where the `docs/` folder should remain current with the product, architecture, APIs, operations, and release state.

The goals are:

- Keep application knowledge durable and reviewable in `docs/`.
- Let Codex and Claude Code load guidance through their native discovery paths.
- Make docs drift visible whenever code behavior changes.
- Separate product intent, architecture, API contracts, operational runbooks, release notes, and AI collaboration machinery.
- Give agents clear routing rules so they load only the context needed for the task.

## Recommended File Set

```text
AGENTS.md
CLAUDE.md

docs/
  AGENTS.md
  index.md
  product.md
  architecture/
    overview.md
    decisions/
      0001-record-architecture-decisions.md
  api/
    contracts.md
  operations/
    runbooks.md
    incident-response.md
  releases/
    changelog.md
    release-notes.md
  glossary.md
  known-gaps.md

.claude/
  rules/
    docs.md
    src.md
    tests.md
    harness-artifacts.md
  skills/
    docs-maintainer/SKILL.md
    architecture-auditor/SKILL.md
    release-docs-writer/SKILL.md
  agents/
    docs-maintainer.md
    architecture-auditor.md
    release-reviewer.md

.agents/
  skills/
    docs-maintainer/SKILL.md
    architecture-auditor/SKILL.md
    release-docs-writer/SKILL.md

.codex/
  agents/
    docs-maintainer.toml
    architecture-auditor.toml
    release-reviewer.toml

ai/
  source-map.md
  harness-map.md
  evals/
    docs-drift-checklist.md
    architecture-drift-checklist.md
    release-readiness-checklist.md
```

## Root Instruction Contract

`AGENTS.md` and `CLAUDE.md` should carry the same operating doctrine, translated only where the harness needs different native behavior.

Recommended root language:

```markdown
# Application Agent Instructions

This repository is a docs-governed application.

The application code is not self-explaining by default. The `docs/` folder is the source of truth for product intent, architecture, API contracts, operational behavior, and release state.

When changing behavior, update the relevant docs in the same change unless the change is intentionally internal and has no user, operator, API, architectural, or release consequence.

## Operating Principles

- Preserve the distinction between product intent, implementation detail, architecture, operations, release documentation, and AI collaboration machinery.
- Prefer small, well-routed context loads.
- Read the nearest path instructions before acting.
- Keep changes scoped to the touched surface.
- If code and docs disagree, either update the docs, update the code, or record the gap explicitly.

## Default Workflow

1. Identify the touched surface: product behavior, architecture, API, operations, tests, release, or harness configuration.
2. Load only the necessary source files from `ai/source-map.md`.
3. Read the nearest path-specific instructions.
4. Make the smallest coherent change.
5. Check for docs drift, architecture drift, test drift, release drift, and harness drift before finishing.
```

## Docs Folder Contract

`docs/AGENTS.md` should define `docs/` as the application memory, not as optional collateral.

Recommended language:

```markdown
# Docs Instructions

Use this folder for durable application knowledge.

## Source Boundaries

- `docs/product.md` owns user-facing intent, product rules, and non-obvious behavior.
- `docs/architecture/overview.md` owns system shape, major boundaries, and dependency direction.
- `docs/architecture/decisions/` owns architecture decision records.
- `docs/api/contracts.md` owns public API behavior and compatibility expectations.
- `docs/operations/` owns deploy, monitoring, incidents, support, and runbooks.
- `docs/releases/` owns changelog entries, migration notes, and release notes.
- `docs/glossary.md` owns shared terms.
- `docs/known-gaps.md` owns accepted debt, incomplete documentation, and known inconsistencies.

## Working Rules

- Do not let implementation behavior drift away from these files.
- Do not bury product rules only in code comments or tests.
- Do not update release notes without checking product, API, and operations impact.
- Add an ADR when a change alters system boundaries, persistence, integration strategy, deployment shape, security posture, or long-term dependency direction.
- If a docs update is intentionally deferred, add the gap to `docs/known-gaps.md` with an owner or review trigger.
```

## Source Map

`ai/source-map.md` routes context loads. It should keep agents from reading the whole repository when a smaller source set is enough.

Recommended structure:

```markdown
# Source Map

Use this file to route context loads.

## Project Orientation

- Root instructions: `AGENTS.md`
- Claude Code instructions: `CLAUDE.md`
- Docs instructions: `docs/AGENTS.md`
- Harness artifact sync: `ai/harness-map.md`

## Product

- Product intent: `docs/product.md`
- Shared terms: `docs/glossary.md`
- Known gaps: `docs/known-gaps.md`

## Architecture

- Architecture overview: `docs/architecture/overview.md`
- Architecture decisions: `docs/architecture/decisions/`

## API

- API contracts: `docs/api/contracts.md`

## Operations

- Runbooks: `docs/operations/runbooks.md`
- Incident response: `docs/operations/incident-response.md`

## Release

- Changelog: `docs/releases/changelog.md`
- Release notes: `docs/releases/release-notes.md`

## AI Collaboration

- Harness map: `ai/harness-map.md`
- Evals: `ai/evals/`
```

## Harness Map

`ai/harness-map.md` is the sync contract. It records where each harness-native artifact lives and which files must move together.

Recommended structure:

```markdown
# Harness Map

This repository privileges coding-harness capability over a single human-readable source layout. Harness artifacts live where Codex and Claude Code discover them natively.

## Root Instructions

| Purpose | Codex | Claude Code |
| --- | --- | --- |
| Project instructions | `AGENTS.md` | `CLAUDE.md` |
| Path-specific docs instructions | `docs/AGENTS.md` | `.claude/rules/docs.md` |
| Harness artifact instructions | root `AGENTS.md` plus this file | `.claude/rules/harness-artifacts.md` |

## Skills

| Purpose | Codex | Claude Code |
| --- | --- | --- |
| Docs maintainer | `.agents/skills/docs-maintainer/SKILL.md` | `.claude/skills/docs-maintainer/SKILL.md` |
| Architecture auditor | `.agents/skills/architecture-auditor/SKILL.md` | `.claude/skills/architecture-auditor/SKILL.md` |
| Release docs writer | `.agents/skills/release-docs-writer/SKILL.md` | `.claude/skills/release-docs-writer/SKILL.md` |

## Agents

| Purpose | Codex | Claude Code |
| --- | --- | --- |
| Docs maintenance | `.codex/agents/docs-maintainer.toml` | `.claude/agents/docs-maintainer.md` |
| Architecture audit | `.codex/agents/architecture-auditor.toml` | `.claude/agents/architecture-auditor.md` |
| Release review | `.codex/agents/release-reviewer.toml` | `.claude/agents/release-reviewer.md` |

## Sync Rule

When changing a reusable AI workflow, skill, agent, or instruction surface, update every active harness copy in the same change.

Do not update only one harness location unless the change is intentionally harness-specific. If a divergence is intentional, document the reason here.
```

## Core Skills

Start with three reusable skills.

### Docs Maintainer

Use when behavior changes require docs updates, docs are stale, or the user asks to reconcile docs with code.

The skill should require:

- Root instructions.
- `docs/AGENTS.md`.
- `ai/source-map.md`.
- The relevant product, API, architecture, operations, or release docs.
- `ai/evals/docs-drift-checklist.md`.

Expected output:

- Specific docs/code drift findings.
- Recommended file updates.
- Any known gap that should be recorded instead of silently resolved.

### Architecture Auditor

Use when changes affect system boundaries, data flow, persistence, integrations, dependencies, APIs, security posture, or deployment.

The skill should require:

- Root instructions.
- `docs/architecture/overview.md`.
- Relevant ADRs.
- Relevant API or operations docs.
- `ai/evals/architecture-drift-checklist.md`.

Expected output:

- Architecture findings ordered by severity.
- Whether an ADR is required.
- File references and recommended moves.

### Release Docs Writer

Use when preparing changelogs, release notes, migration notes, or operator-facing release instructions.

The skill should require:

- Root instructions.
- Product docs.
- API contracts.
- Operations docs.
- Changelog and release notes.
- `ai/evals/release-readiness-checklist.md`.

Expected output:

- Draft changelog entry.
- Draft release note.
- Migration or operator notes when applicable.
- Any unresolved release blockers.

## Core Agents

Start with three subagents. Keep their purpose equivalent across Codex and Claude Code even though their file formats differ.

### Docs Maintainer Agent

Checks whether docs match code and proposes precise doc updates.

Lens:

- Has product behavior changed?
- Has public API behavior changed?
- Has an operator-facing workflow changed?
- Has a known gap been introduced or resolved?
- Are release notes needed?

Output:

- Findings ordered by severity.
- File references.
- Recommended docs changes.

### Architecture Auditor Agent

Checks whether implementation changes preserve the documented architecture.

Lens:

- Are boundaries still respected?
- Has data flow changed?
- Has persistence or integration behavior changed?
- Is an ADR needed?
- Do API and operations docs still match the architecture?

Output:

- Architecture findings ordered by severity.
- Required ADRs.
- Proposed moves.

### Release Reviewer Agent

Checks whether a change is ready to ship from a documentation and operations perspective.

Lens:

- Is the changelog current?
- Are migration notes needed?
- Are runbooks affected?
- Are API consumers affected?
- Are known gaps documented?

Output:

- Release readiness findings.
- Required docs before release.
- Remaining risks.

## Evaluation Checklists

The `ai/evals/` files should be short, concrete checklists that agents can apply before finishing substantial work.

`docs-drift-checklist.md`:

```markdown
# Eval: Docs Drift

- Does the changed behavior appear in the relevant docs?
- Do product docs still match actual behavior?
- Do API contracts still match actual request, response, error, and compatibility behavior?
- Do operations docs still match deploy, monitor, support, and incident behavior?
- Are terms still consistent with `docs/glossary.md`?
- Should `docs/known-gaps.md` be updated?
```

`architecture-drift-checklist.md`:

```markdown
# Eval: Architecture Drift

- Does the change preserve documented system boundaries?
- Has data flow changed?
- Has persistence changed?
- Has an external dependency changed?
- Has security posture changed?
- Is a new ADR required?
- Do architecture, API, and operations docs agree?
```

`release-readiness-checklist.md`:

```markdown
# Eval: Release Readiness

- Is the changelog updated?
- Are release notes needed?
- Are migration notes needed?
- Are operator runbooks affected?
- Are API consumers affected?
- Are known gaps documented?
- Are rollback or incident-response notes needed?
```

## Adoption Sequence

1. Add root `AGENTS.md` and `CLAUDE.md`.
2. Create `docs/AGENTS.md` and the initial docs skeleton.
3. Add `ai/source-map.md` so agents can route context loads.
4. Add `ai/harness-map.md` so harness-native artifacts stay synchronized.
5. Add the three eval checklists.
6. Add paired Codex and Claude Code skill files.
7. Add paired Codex and Claude Code agent files.
8. Run one real change through the workflow and revise the instructions where they were too vague.

## Operating Principle

The durable pattern is simple:

- `docs/` is the application memory.
- `ai/source-map.md` is the routing table.
- `ai/harness-map.md` is the sync contract.
- `AGENTS.md` and `CLAUDE.md` are native root adapters.
- Skills encode repeatable tasks.
- Agents encode reusable review lenses.
- Evals keep substantial changes from drifting across product, architecture, API, operations, release, and harness boundaries.
