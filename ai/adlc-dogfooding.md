# ADLC Dogfooding

This repository should practice the Viable Coder doctrine while producing it. Work with AI in this repo should model the ADLC rather than only describe it.

Dogfooding does not mean turning every edit into process theater. It means keeping the same responsibilities intact:

- Clay holds origination: what should be made, why it matters, and what risk is worth taking.
- The agent can take the producible middle: search, comparison, drafting, editing, implementation, and verification.
- Clay holds answerability: whether the result is right, whether it preserves the doctrine, and whether it should become part of the project.
- Clay steers through the middle: reads the agent's reasoning while the work runs (not only when it lands), redirects when the trajectory drifts off the *why* set at origination, and interrupts when the path would produce an artifact he cannot stand behind at review. Steering is not a fourth responsibility — it is the in-flight form of holding the two jobs above. See `doctrine/steering.md`. The corollary for this repo: when the agent's column would otherwise run opaquely (long-running drafts, multi-file edits, research sweeps), prefer configurations where its reasoning is exposed in flight rather than summarized after.
- Clay sets the routing policy: which model runs which subagent on which task is a practitioner-set policy, not a default the harness silently makes on his behalf. See `doctrine/right-sized-models.md`. The corollary for this repo: prefer right-sizing — frontier capability for genuinely judgment-dense or open-ended work, mid-tier or open-source / self-hosted for boilerplate, summarization, and high-volume background passes. Frontier-by-default is the failure mode (default escalation); rate-limit pressure and unexplained cost trajectory are its leading indicators.

## Practical ADLC Mapping

Use this lightweight mapping when working in the repo. Scale it to the size and risk of the task.

| ADLC gate | Repo practice |
| --- | --- |
| G1 ORIGINATE | Preserve the user's framing. If the ask is ambiguous, identify the surface and the decision being made. |
| G2 SPECIFY | Restate the task as a small scope: affected surface, canonical sources, and expected output. |
| G3 READY | Confirm enough context has been loaded from `AGENTS.md` and `ai/source-map.md`; for larger work, state a short plan. |
| G4 DESIGN & ARCHITECT | Choose the smallest coherent route through book, doctrine, research, website, skills, agents, or `ai/`. |
| G5 IMPLEMENT | Make scoped edits or produce the requested artifact without reorganizing unrelated material. |
| G6 TEST / CHECK | Run the relevant check: diff review, markdown sanity, source-map consistency, website preview, or project-specific verification. |
| G7 REVIEW | Surface what changed, what remains uncertain, and what requires Clay's judgment. |
| G8 DOCUMENT | Update source maps, workflows, evals, or guidance when the work changes how future work should happen. |
| G9 OBSERVE | Capture follow-up questions, drift risks, or signals that should influence the next pass. |

## Operating Rules

- Do not let the agent silently choose the end. When a change would alter doctrine, audience routing, public positioning, or research claims, surface the decision.
- Do not over-ritualize small edits. For a narrow documentation fix, the ADLC can be implicit: read, edit, check, report.
- Use checklists as gates, not decoration. Voice, structure, and doctrine drift evals are the repo's lightweight `Ready` and review disciplines.
- Treat guidance changes as product changes. If a workflow, skill, source guide, or eval changes, check whether `ai/source-map.md` or related instructions should also change.
- Leave the original source untouched when promoting from `archive/` or a historical source guide.

## Signals To Watch

This repo can also measure whether we are practicing the doctrine:

- how often the agent reframes Clay's ask instead of preserving it;
- how often edits touch unrelated surfaces;
- how often historical material is promoted without date/context;
- how often structural changes carry no lived Clay-experience anchor;
- how often final answers identify verification and residual risk.

These are not bureaucratic metrics. They are trailing signals that show whether the collaboration is preserving origination, *steering through* the middle (per `doctrine/steering.md`), and returning answerability to the human. *Gating* the middle is the boundary form; *steering* is the in-flight form. Both are now part of what is being measured.

