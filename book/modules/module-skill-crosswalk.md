# The Module ↔ Skill Crosswalk
 
*Section 2 ⇄ Section 3 bridge artifact — the single source of truth for how an audience's kit configures the ADLC's agents. Section 2 hands the human a **module** (guidance + exercise); the same act loads the agent a **Skill** (executable `SKILL.md`). This document books the join so the two sections share one truth instead of drifting.*

*Canonical audience definitions live in [doctrine/audiences.md](doctrine/audiences.md). The audience codes used throughout this crosswalk (ITW · SVD · EDD · LSD · AID · PPW) point back to those definitions. AID covers both pre-adoption (Shape A) and post-adoption-blind (Shape B); the gate hardened (G7) and the load-bearing signals are the same for both shapes — the kit gets there by different roads.*
 
> **What this artifact does and doesn't carry.** It owns the *new* information: each module's paired Skill, its **register**, the ADLC **gate** it hardens, the **subagent** it configures, and the **trailing signal** it feeds. It does **not** reproduce audience membership — that lives in the module-to-audience grid in `section-2-audience-research-plan.md`, and pointing back to it (rather than copying it) is what keeps the two from drifting. Section 4's nine dimensions appear here only as **named pointers**, never defined — the harvest stays Section 4's.
 
---
 
## The governing idea (one line)
 
**The ADLC pipeline is invariant; Section 2 configures only the interaction layer.** The board geometry, the ten steps, the deliverables, and the *existence* of every gate are fixed doctrine for everyone. What an audience's kit tunes is the narrow band where AI meets the human — and that band has exactly **four knobs**, the first three of which map to layers Section 2 already composes from, with the fourth added by `doctrine/right-sized-models.md`:
 
| Section 2 layer | What it selects in the ADLC |
|---|---|
| **Situation** picks the module set | which subagents/Skills are *foregrounded*, and **which gate is hardened** (the one this person tends to rubber-stamp) |
| **Persona** sets develop-vs-borrow | the Skill's **register** — produce-and-explain vs. produce (also doubles as the *steering instrument:* produce-and-explain exposes the agent's reasoning in flight, per `doctrine/steering.md`) |
| **Wiring** (operating profile) tunes delivery | the *pacing and structure* of the teaching, not its content |
| **Routing policy** (per audience) sets which-model-on-which-Skill | the **right-sized routing** discipline (per `doctrine/right-sized-models.md`) — frontier-only is the wrong default; the audience kit pre-configures the per-Skill model tier and the *escalate-when* rules |
 
---
 
## Legend
 
**Register** — how the Skill meets the human (the B.5 knife-edge):
- **E** — *Explanatory / Socratic.* Produce-and-explain; narrates the *why* like a senior to a junior; deliberately leaves blanks. **Develops the faculty.**
- **P** — *Produce.* Delivers the artifact fully; transfers only *enough frame to stay answerable* for a call the human will never author. **Borrows the frame.**
- **E⇄P** — *Switchable by persona tag at intake.* Same Skill, mode selected by develop-vs-borrow (see the register-switch standard below).
**ADLC gate** (from the canonical pipeline, Section 3 B.2):
G1 ORIGINATE · G2 SPECIFY (PRD) · G3 GROOM / `Ready` · G4 DESIGN & ARCHITECT · G5 IMPLEMENT · G6 TEST·SEC·INFRA·CICD · G7 REVIEW · G8 DOCUMENT · G9 DEPLOY & OBSERVE
 
**Trailing signal** — the board-emitted measure the gate produces (B.6), which doubles as the Section 4 self-dashboard input. Each points, by gate, at the dimension(s) the relocation ledger names for that audience.
 
---
 
## The five universals — they configure the *human-side* gates
 
These sit in every audience's default set. They don't load a producing subagent into the middle; they set the human's posture at the ends and select how everything else loads.
 
| Universal module | Stream | Role in the ADLC | Configures | Anchors the signal |
|---|:--:|---|:--:|---|
| **Two Ends Diagnostic** | C | Selector run at intake — reads which end the person holds badly | the whole board's emphasis; *which gate hardens* | baseline all other signals are read against |
| **Operating Profile read** | F | Delivery tuner — pacing & structure density | the *how* of every register, not the *what* | calibration only (feeds S4 thresholds) |
| **Relocation Lens** | E | *Can-vs-Should* pointed at the dependency trade | G1 | deliberate-dependency-choice |
| **You-Are-Infrastructure** | S1 | The condition that makes review real — *review capacity is part of condition* | G7 (keeps the REVIEW gate honest) | condition signals → self-dashboard |
| **Can-vs-Should Gate** | A | *"Did I choose this, or did it choose me?"* | G1 + G3 (`Ready`) | origination ratio; `Ready`-gate decisions |
 
---
 
## The sixteen audience modules — they configure the *agent-side* middle
 
Home audiences per the Section 2 grid (ITW · SVD · EDD · LSD · AID · PPW). Read a row as: *this module installs this Skill, in this register, which hardens this gate by configuring this subagent, and emits this signal.*
 
| # | Module | Paired Skill (`SKILL.md`) | Reg. | Gate(s) | Subagent it configures | Trailing signal fed |
|:--:|---|---|:--:|:--:|---|---|
| 1 | Founder Faculty (PMF / FMF / timing) | `originate-discovery` | E⇄P | G1 | MCP-fed discovery / research | origination ratio; reframes on the framed problem |
| 2 | Build-vs-Buy & Dependency Economics | `dependency-economics` | P | G1 | analysis | deliberate-dependency-choice |
| 3 | Minimum Frame to Stay Answerable | `minimum-frame` | P | G7 | review-explainer (answer-enough mode) | PR / diff review depth |
| 4 | Directing Technical Work (non-technical) | `directing-technical-work` | P | G2 + G7 | PRD-author + review-explainer | reframes-vs-accepts; review depth |
| 5 | Code Comprehension & Legacy Archaeology | `legacy-archaeology` | E | pre-G4 → G7 | codebase-explorer / explainer | review depth on inherited code; override rate |
| 6 | Characterization-Test-First | `characterization-tests` | E | G6 *before* G5 | test-author | coverage; change-failure rate |
| 7 | Modernize-vs-Replace Decision | `modernize-vs-replace` | P | G1 | analysis | deliberate-dependency-choice |
| 8 | Spec-Driven Development | `spec-driven` (PRD) | E⇄P | G2 (polices self-spec) | PRD-author | reframes-vs-accepts; **self-spec flag** |
| 9 | Verification & Review Capacity | `review-capacity` (assist-only) | E | G7 | code-review (flags, never decides) | **PR / diff review depth**; override rate |
| 10 | Vibe-to-Engineering Ladder | `vibe-to-engineering` | E | G5 → G6 → G7 | implementer + refactor (explanatory) | rework rate; structure signals |
| 11 | Production-Readiness Hardening | `production-hardening` | E (NFRs) / P (specialist) | G6 + G9 | infra/IaC + observability | deploy discipline; change-failure / recovery |
| 12 | Security for AI-Generated Code | `security-review` | E⇄P | G6 → gates G7/G9 | security-reviewer | vulns-per-changeset; override on security flags |
| 13 | Inquiry-vs-Delegation | *register governor* (the E wrapper itself) | E | all gates | applies to all; no dedicated subagent | **inquiry-vs-delegation ratio**; retention |
| 14 | Develop-the-Faculty Teaching Protocol | `teaching-protocol` (model→scaffold→fade) | E | teaching loop around G5/G7 | teaching / explanatory | bench strength; knowledge-quiz delta |
| 15 | Manager's Sponsorship | *human / org — no paired Skill* | n/a | meta (protects every gate) | none | org-level (S4) |
| 16 | **Right-Sized Routing & Model-Fleet Policy** | `right-sized-routing` (`classifier` + `router` + escalate-when rules) | P (with E layered for AID/ITW where the bench is learning to *read* complexity) | meta (every gate where a subagent runs, loudest at G5; per-Skill model tier set at intake) | classifier + router + every producing subagent (the routing policy binds at the seam where each subagent loads its model fleet) | **frontier-share of output**; cost-per-unit-per-tier; override-up rate; override-down rate; rate-limit incidence; self-hosted utilization |
 
**Three notes that fall out of the grid:**
- **Promotion candidates.** Rows 8, 9, and 16 (Spec-Driven, Verification & Review Capacity, Right-Sized Routing) harden the load-bearing gates (G2, G7, G5) and apply across *every* audience — consistent with the Section 2 note that the first two may belong with the universals, and the same case can be made for Module 16. If promoted, they move into the universals table above.
- **The persona-sensitive row.** Row 1 (Founder Faculty) is the clearest case of persona overriding situation: **E** (default, full transfer) for a first-time founder, **P** (borrow) for a repeat founder *in the same situation*. Its `E⇄P` is set by the persona tag, not the situation.
- **The cross-cutting row.** Row 16 (Right-Sized Routing) is the second module without a single hardened gate — it sets a *per-Skill* model-tier policy that binds wherever a subagent runs. The audience kit selects the *posture* (which gate's subagent gets which tier by default, which escalate-when rules fire); the persona tag does not change the routing posture, but the wiring (operating profile) can tune the threshold for the policy-override rules. The new fourth knob in the governing table above.
---
 
## The register-switch standard
 
Because the Anthropic skill-formation RCT shows the *same* Skill builds a person up (inquirers, 65%+) or hollows them out (delegators, <40%) depending only on register, the register is where transfer-vs-substitution actually bites in production. The authoring rule:
 
**Write each Skill once, with both registers as switchable modes; select the mode by persona tag at intake — never maintain two Skill libraries.**
 
- **E mode** narrates each choice, surfaces the trade-offs, and leaves a deliberate blank for the human to fill (Explanatory / Learning output styles).
- **P mode** produces the deliverable to the org's standard and emits *only the minimum frame* a non-author needs to field a question about it at the gate.
- The Operating Profile (Stream F) then tunes pacing/structure *within* the selected mode — fast/slow, dense/sparse — without changing which mode is active.
---
 
## Gates where the agent creeps onto the human's end — police these
 
Substitution doesn't announce itself; it leaks in at specific gates. Each is a place the maintenance trilogy (condition, observability, upkeep) — extended by **steering** (Ch 4) and **right-sized routing** (Ch 5) — has to bite.
 
- **G2 — self-spec.** When the agent writes its own spec, it edges into *origination* — the spec is where the ends live. The human must own or rigorously review it. *(Signal: self-spec flag. Steering-instrument fix: produce-and-explain at G2 exposes the agent's drafting reasoning in flight so the human can edit before the spec is finished.)*
- **G3 — `Ready` by drift.** Agent-surfaced Issues that the human merely approves are the agent choosing what's worth building. *(Signal: origination ratio — originated vs. approved.)*
- **G7 — rubber-stamp.** Automation complacency (Parasuraman & Manzey: it hits experts too, can't be trained away simply) means a human will wave through a PR unless the gate is structurally real. *(Signal: PR / diff review depth.* Structural fix per `doctrine/steering.md`: the only honest review at G7 is one informed by readings taken *across the middle* — produce-and-explain across G2/G4/G5 makes the in-flight reading possible.*)*
- **Everywhere — default escalation** *(the cost-axis sibling of rubber-stamp).* The agent silently reaches for the frontier model on every task because the harness ships that way. *(Signal: flat frontier-share with no override-down activity; rising rate-limit incidence; cost trajectory tracking volume rather than complexity.* Structural fix per `doctrine/right-sized-models.md`: the practitioner's routing policy is explicit, named at intake, and audited via the override-up / override-down rates — *you didn't choose the policy; the policy chose you* is the failure signature.*)*
- **Everywhere — delegator posture.** The interaction-style failure mode is cross-cutting; the Inquiry-vs-Delegation register governor is the standing defense. *(Signal: inquiry-vs-delegation ratio.)*
---
 
## The loop closes on itself
 
The gate you *harden* for an audience is the gate you *instrument hardest* for that audience — and it points at the dimension the relocation ledger already named. Configuration, measurement, and the long-game axis land on the same spot:
 
| Audience | Gate hardened | Signal watched | Routing posture (per Module 16) | Dimension pointer (named only) |
|:--:|:--:|---|---|---|
| ITW | G7 + teaching loop | bench strength; inquiry-vs-delegation | routing decisions double as teaching surface — bench reads the classifier's complexity scores and learns what right-sized looks like before being asked to configure it | Identity · Cognitive |
| SVD | G1 / `Ready` | deliberate-dependency-choice | right-sizing **foregrounded** — the situation is about renting vs. owning, and the routing policy is its operational form | Temporal · Economic |
| EDD | G7 + G1 | review depth; origination ratio | routing posture is part of what the founder retains from the agency — agency hands over the model fleet, not just the code | Differential · Economic |
| LSD | G7 (net first) | review depth on inherited code | archaeology-first routing rules — characterization-test and code-comprehension subagents route to specific tiers, not the default | Judgment |
| AID | G7 | PR review depth; vulns-per-changeset | classifier-readability is a teaching surface — the bench learns to *read* complexity before being asked to configure routing | Epistemic · Cognitive |
| PPW | G6 + G9 | deploy discipline; change-failure | deploy-tier and observability-tier routing rules that the prototype never had | Ethical |
 
The same artifact that runs the work measures the human running it, and routes that measure to Section 4 — which is the bridge B.6 promised.
 
---
 
## Open decisions this crosswalk forces
 
1. **Visibility of the pairing** *(S2 open question #2).* Show develop-the-faculty audiences the Skill behind their module (the transparency is part of the transfer); keep it quieter for borrow-the-frame audiences (they want the frame, not the plumbing). Note this is just the register knob applied to the documentation itself.
2. **Promote rows 8, 9, and 16 to universals?** Spec-Driven, Verification & Review Capacity, and Right-Sized Routing each harden a gate that *every* audience touches (G2, G7, G5 respectively) and each carries a load-bearing signal the Section 4 dashboard reads. Decide before the library hardens, or the three most portable Skills will be authored twice.
3. **Where review capacity lives** *(S3 open question; S2 open question #4).* This crosswalk places it on *both* sides — `review-capacity` (agent) at G7 and You-Are-Infrastructure (human condition) as G7's precondition. Confirm that dual placement is the intended resolution.
4. **`Ready`-gate and self-spec instrumentation have no off-the-shelf tool.** Origination ratio, reframes-vs-accepts, and the self-spec flag are the playbook's own inventions; the GitHub Project board is their most plausible substrate. Treat as build, not buy.
5. **The routing-policy substrate** *(new — S3 Ch 5 open question).* Frontier-share, cost-per-unit-per-tier, override-up/down, rate-limit incidence, and self-hosted utilization all need a substrate too. Most plausible candidate: the harness logs (per-agent invocation metadata) joined to provider billing exports. Treat as build, not buy — the same shape as #4. *(Section 3 Ch 5's "tips and tricks the harness doesn't ship with" beat is the natural home for the build pattern.)*
6. **Module 16's universal-promotion question** *(new).* Right-Sized Routing affects every gate where a producing subagent runs; it has no single hardened gate. The crosswalk currently keeps it as a numbered module for symmetry with the others, but its structural role is closer to a *universal* — the same "set once at intake, binds everywhere" shape as You-Are-Infrastructure or Can-vs-Should. If promoted to the universals table, Module 16 moves up and the count drops from 16 to 15 again (with the universals growing from 5 to 6). Decide at the same time as #2.