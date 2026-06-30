# Toolchain by Category

*Unit 3 module artifact. Names the twelve functions Unit 3 demands of a working shop, by category, so the discipline survives the quarterly vendor cycle. Each category has a load-bearing **failure mode** — the way a tool can advertise the function while delivering something else. Vendor evaluations live below the body-text line in [Vendor Evaluations](#vendor-evaluations-this-unit-churns-quarterly) and are expected to churn quarterly.*

*The lesson spine stays vendor-free. The crosswalk ([curriculum/modules/module-skill-crosswalk.md](curriculum/modules/module-skill-crosswalk.md)) tells each audience which gates harden and which signals matter; this module tells the same audience what each piece of their stack has to **do**. Together they let an audience kit assemble a vendor-named tool sheet without contaminating Unit 3 body text.*

*Doctrine governs ([doctrine/right-sized-models.md](doctrine/right-sized-models.md), [doctrine/steering.md](doctrine/steering.md)); this module operationalizes the doctrine into purchasable / installable / composable categories.*

---

## The governing idea (one line)

**Twelve categories, four layers. Vendor names go stale every quarter; the categories do not.** Unit 3 needs each of the twelve to exist somewhere in the practitioner's stack — but each can be filled by a different tool, and the assembled stack is the practitioner's choice.

---

## The four layers

| Layer | Categories | Unit 3 anchor |
|---|---|---|
| **L1 — Where the work lives** | 1 VCS · 2 Issues/PRDs as the board · 3 In-flight reasoning substrate | Lesson 2.1; Lesson 3 spine |
| **L2 — Coding harness** | 4 Subagent host · 5 Skills host (E ⇄ P) · 6 MCP host · 7 Interrupt + redirect · 8 Hooks / policy enforcement | Lesson 2.2–2.4; Lesson 4 (steering); Lesson 6 (register) |
| **L3 — Right-sized routing** | 9 Classifier · 10 Router with policy seam · 11 Multi-vendor + open-source + self-hosted + local fleet | Lesson 5 ([doctrine/right-sized-models.md](doctrine/right-sized-models.md)) |
| **L4 — Trailing signals** | 12 Trailing-signal capture + dashboard | Lesson 7 |

---

## The twelve categories

| # | Category | What it has to do | Where it lands | Failure mode (advertising the function, delivering something else) |
|:--:|---|---|---|---|
| 1 | **Version control + history** | Carry code and full provenance in one auditable place; survive the AI work as the source of truth. | Lesson 2.1; G5, G7, G8, G9 | Local-only or detached-state agent work that leaves no provenance the board can re-read. |
| 2 | **Issues / PRDs as the board** | Carry each piece of work as a card that moves G1→G9; the to-do list **is** the plan; PRDs live on issues, not in a separate doc system. | Lesson 3 entire spine | A project surface that holds tickets but doesn't carry gate semantics — moving a card to *Done* doesn't enforce that G7's human review actually happened. |
| 3 | **In-flight reasoning substrate** | Record reasoning, choices, edits **as they happen** — the precondition for steering and for the board reading the human. | Lesson 2.1; Lesson 4 precondition; Lesson 7 substrate | An after-the-fact transcript the practitioner can scroll, but not a stream they can read **during** the work and interrupt. A greyed-out *thinking pane* that ignores mid-flight input is this failure. |
| 4 | **Subagent host** | Run narrow-purpose specialists per gate — discovery, PRD-author, design, implementer, refactor, test-author, security-reviewer, code-review-assist-only, review-explainer, docs, observability, classifier (L3). Isolated context per specialist. | Lesson 2.2; every gate in Lesson 3 | "Agents" that are workflow orchestrations of the same chat session, not isolated specialists with their own context and Skills. |
| 5 | **Skills host (E ⇄ P)** | Load reusable house rules from a discoverable location, with the **same** Skill switchable between produce-and-explain and produce-only by persona tag at intake. Per the crosswalk's register-switch standard: write each Skill once with switchable modes; never two libraries. | Lesson 2.3, Lesson 6 | Static system prompts with no mode switch, or Skills that are tool-specific and not portable across the practitioner's other harnesses. |
| 6 | **MCP host** | Read across the scattered places truth actually lives (tickets, calls, threads, design files) without per-Skill custom integration. Universal adapter. Must pass through subagent boundaries. | Lesson 2.4; G1, G7, G8 | Hard cap on tool count that forces the practitioner to pick which knowledge surfaces the agent can see; a half-implemented MCP that doesn't traverse subagent boundaries. |
| 7 | **Interrupt + redirect** | Stop the agent mid-flight, redirect on what's exposed, resume — **while the agent is reasoning**, not only at tool-call boundaries. The deliberate-interrupt-as-calibration move from `doctrine/steering.md`. | Lesson 4; Lesson 3 G5 exercise | A stop button that kills the session but doesn't carry the redirect; a *thinking* phase that ignores new input until the agent emerges. |
| 8 | **Hooks / policy enforcement** | Be the seam where structural rules bind — *every ticket carries a human-authored why-now*; *spec must carry a human edit-trail*; *security findings can't be auto-approved*. Per-event triggers the practitioner writes code against. | Lesson 3 substitution-risk policing; Lesson 7 signal emission | Exhortation-only ("we recommend…") with no enforcement seam; or hooks that exist but can't see the agent's reasoning, only its outputs. |
| 9 | **Classifier (complexity, not safety)** | Read the complexity of an incoming task and emit a routing recommendation. Small, fast model whose only job is reading complexity — frontier capability is not what it needs. | Lesson 5 first primitive | **Load-bearing.** The tool ships a *classifier* that is a **safety** classifier (allow / sandbox / block) rather than a **complexity** classifier. Same word, different doctrine. |
| 10 | **Router with policy seam** | Take the classifier's recommendation, apply the practitioner's *escalate-when* and *de-escalate-when* policy, hand the work to the right-sized model. **The policy is the practitioner's, not the tool's.** | Lesson 5 second primitive; Lesson 7 override-up / override-down signals | An *Auto* model picker that selects heuristically among vendor-curated frontier tiers, with no user-defined policy. *You didn't choose the policy; the policy chose you.* |
| 11 | **Multi-vendor + open-source + self-hosted + local fleet** | At minimum: frontier closed-source, mid-tier open-source, small open-source for boilerplate, self-hosted for internal-only, locally-served for high-volume background work. Per doctrine: a router that can only choose among one vendor's tiers is hollow. | Lesson 5 third piece (first-class, not last-resort) | Local / self-hosted is *possible* via base-URL override but excluded from primary features (e.g., tab completion locked to the in-house model); a router constrained to closed-source vendor tiers. |
| 12 | **Trailing-signal capture + dashboard** | Auto-emit origination ratio, reframes-vs-accepts, `Ready`-gate decisions, PR review depth, override rate, inquiry-vs-delegation ratio, cost-per-tier, frontier-share, override-up/down rate, rate-limit incidence, self-hosted utilization, deploy discipline, change-failure rate. | Lesson 7 entire lesson | Signals are *computable* from harness logs but no tool ships a board the practitioner reads. Mostly **build, not buy** — see crosswalk open decision #5. |

---

## Notes on the load-bearing categories

These five are the categories where the discipline is most often advertised and least often delivered. They are the ones to test a candidate tool against hardest.

- **#3 (in-flight reasoning substrate).** This is the steering precondition. A harness that exposes thinking only after the fact is not a steering surface; it is a debrief. Test: can the practitioner read the agent's reasoning *and inject a redirect* while the agent is still mid-task? The pair with **#7 (interrupt + redirect)** is what makes Lesson 4's doctrine real.
- **#9 (classifier — complexity, not safety).** Watch for the word *classifier* attached to safety governance (allow / sandbox / block) instead of complexity reading. They are different primitives serving different doctrine. A safety classifier is a hooks-layer concern (#8); a complexity classifier is the L3 entry point. The June 2026 evaluation below is the clearest case study.
- **#10 (router with policy seam).** An *Auto* picker is not a router in the playbook's sense. The test: can the practitioner write a rule that says *escalate to frontier when the work touches authentication code, regardless of classifier recommendation* — and have the router honor it? If not, the router is the tool's, not the practitioner's.
- **#11 (model fleet).** Test the fleet shape, not the vendor list. Closed-source-only fleets fail [doctrine/right-sized-models.md](doctrine/right-sized-models.md) on the concentration-of-power register even if they fail it on no other axis.

---

## How audience kits use this module

The crosswalk ([curriculum/modules/module-skill-crosswalk.md](curriculum/modules/module-skill-crosswalk.md)) tells each audience which gates harden and which signals matter most; this module tells the same audience what each piece of their stack has to *do*. The two together let the audience kit assemble a vendor-named tool sheet.

Per Unit 2 doctrine, audience kits MAY name vendors in their own module material. The lesson spine does not. The natural binding point in the crosswalk is the *Routing posture* column in its **The loop closes on itself** table — that column already names a per-audience routing posture and is the natural seam for a per-audience tool-sheet pointer once the evaluations below stabilize.

---

## Vendor evaluations (this unit churns quarterly)

*Evaluations are working notes — dated, sourced, replaceable. The doctrine above does not move when an evaluation does.*

### Evaluation snapshot — 2026-06-23

**Cursor (June 2026).** Closed most of the surface gap from winter 2025: subagents (up to 8 parallel on git worktrees), Skills (as cross-tool open `SKILL.md` standard), MCP (with a 40-tool hard limit), hooks (substantial event set including `preToolUse`, `beforeShellExecution`, `afterAgentThought`), plugin marketplace, Composer in-house model, an Auto-review *safety* classifier subagent. **Critical gap against Lesson 5:** category #9 fails — the classifier is allow / sandbox / block, not complexity reading; category #10 fails — the *Auto* picker is heuristic curation among Cursor-curated frontier tiers with no user-defined escalate-when policy; category #11 fails — local models are possible only via base-URL override and Tab is locked to Composer. **Category #3 weaker** than Claude Code native (thinking pane greyed-out; community threads as recent as 2026 report mid-thought input ignored); **category #7 weaker** at parity. Categories #5, #6, #8 at functional parity with native harnesses. June 2026 roadmap commits to governed-autonomy and cloud-resident agents — *not* to multi-vendor or open-source routing. Benchmarks higher than native on raw functionality; burns ~5.5× more tokens than Claude Code native on identical tasks. *(Sources: cursor.com/changelog through 2026-06-22; Composer-2 technical report; Cursor community forum threads; Endor Labs / Toolradar comparisons cited May 2026.)*

**VS Code + Claude Code extension + Codex extension (June 2026).** Categories #4–#8 at native-harness fidelity for each provider (subagents, Skills with E⇄P, MCP without the 40-tool ceiling, Claude-native thinking blocks for #3 and #7, hooks). Token discipline strong. **Categories #9–#11 absent and must be added.** Plausible build: LiteLLM or `claude-code-router` as the L3 substrate, Ollama serving local open-source models for boilerplate / summarization / high-volume background work; **the policy is the practitioner's**, the gateway is the seam. Category #12 is build, not buy.

**Single-tool consolidations with stated L3 posture (June 2026, unverified depth).** Kilo Code (500+ models, 60+ providers, orchestrator mode). OpenCode (75+ providers including local Ollama). Both warrant their own evaluation pass; neither has Anthropic-native or Codex-native primitive fidelity to displace the current stack on #5–#8.

**Gateway-only / L3 substrates (June 2026).** OpenRouter (Auto Router with NotDiamond `cost_quality_tradeoff` dial 0–10). LiteLLM (five routing strategies; no built-in complexity classifier — practitioner builds the classifier on top). These are the **substrate** for L3, not finished L3 products — they satisfy #10 and #11; they do not satisfy #9 out of the box.

**Local-model serving.** Ollama remains the de-facto local-serving layer (OpenAI-compatible endpoint; integrates with the current stack via base-URL override or gateway).

### Decisions to revisit at the next evaluation pass

1. Cursor's Composer-2 *interruption evaluation* claim — does the shipped product close the steering gap (#3 / #7) by the next evaluation? Re-test end-of-quarter.
2. Kilo Code and OpenCode — do their right-sized-routing primitives match L3 doctrine? Run a focused evaluation before any audience kit points at them.
3. The L3 build for the VS Code + Claude Code + Codex stack — is LiteLLM or `claude-code-router` the right substrate, given the practitioner's policy-authoring overhead?
4. Local-model fleet — which open-source code / summarization / classification models are at production parity in June 2026? Needs its own evaluation.

---

## Open decisions this module forces

1. **Category #12 (trailing-signal dashboard) is build-not-buy.** Crosswalk open decision #5 already names this. Decide whether the build pattern lives in [curriculum/exercises/](curriculum/exercises/), in a follow-up `curriculum/modules/dashboard-substrate.md`, or in body text of Lesson 7's *tips and tricks* beat.
2. **Pruning policy for vendor evaluations.** This module is meant to outlive the June 2026 snapshot. Recommendation: append new evaluations dated; prune older ones only when the doctrine has not changed and the older evaluation is no longer load-bearing.
3. **Author-side or builder-facing?** The crosswalk is explicitly an authoring artifact; the relocation ledger is builder-facing. This module is closer to the crosswalk in form, but the vendor evaluation unit is the kind of thing builders want. Decide whether to split — keep the categories author-side and ship the evaluation as a separate builder-facing addendum — or ship as a single working module.
4. **Pointer from the crosswalk.** The crosswalk's *Routing posture* column in **The loop closes on itself** table is the natural place to bind audience kit → vendor stack once evaluations stabilize. Decide when to add that column-level pointer (likely after the next evaluation pass).
5. **Clay-experience anchor for Lesson 5 (cross-reference).** The winter-2025 Cursor abandonment is the kind of *default escalation cost you visibly / right-sizing earned its keep* anchor [unit-3-granular.md](curriculum/outlines/unit-3-granular.md) Lesson 5 leaves open. The lived shape of the failure mode is now sitting in this module's #9–#11 entries; the lesson prose can reach in here when the anchor slot is filled.

---

## How to use this artifact

- **As a category-first toolchain spec** — the twelve functions are doctrine; everything below the body-text line churns.
- **As Unit 3 Lesson 5's operational home** — the right-sized-routing doctrine is operationalized here (categories #9–#11) rather than in body text.
- **As an audience-kit reference** — audience modules point at this artifact for vendor evaluation; lesson spine stays vendor-free.
- **As a research seed** — vendor evaluations are expected to extend; this is the staging ground for continued investigation.
