# The Relocation Ledger & Dimension Pointers
 
*Section 2 → Section 4 bridge artifact. Every escape is a trade: each situation's fix relocates risk rather than removing it. This artifact books both columns of that trade (the ledger) and names which of Section 4's nine dimensions each trade lights up (the pointer) — **named only, never defined here.** Definitions and instrumentation are Section 4's harvest.*

*Canonical audience definitions live in [doctrine/audiences.md](doctrine/audiences.md). The ledger entries below assume those definitions; if they drift, update the doctrine first, then the ledger.*
 
---
 
## Master pointer table
 
| Situation | What's shed (dependency leaving) | What's adopted (the new dependency) | Dimension(s) lit |
|---|---|---|---|
| **Internal Talent Worth Developing** | Dependence on hiring/contracting external capability | The risk of developing *delegators who atrophy* instead of *inquirers who build real capability*; plus attrition (you fund the development, they leave) | Identity · Cognitive |
| **SaaS Vendor Dependency** | Perpetual rent and the vendor's control over a slice of operations | The maintenance burden of the tool you now own and run; model/build risk if it's agent-built | Temporal · Economic |
| **External Dev Dependency** | The agency margin and the "you don't own what you can't change or see" trap | In-house origination + answerability — and, once the same agents are available to everyone, the question of what's left that's yours | Differential · Economic |
| **Legacy Software Debt** | A system you couldn't see, couldn't safely touch, and feared | A modernization in which a model now makes change decisions on your behalf over code you still don't fully frame | Judgment |
| **AI Development Gap** *(Shape A — pre-adoption)* | The drag of stalled adoption / evaluation paralysis / staying structurally behind | Change-management load, tool-evaluation cost, and the risk of crossing into Shape B (verification debt) if velocity is chased before the answerable end | Epistemic · Cognitive |
| **AI Development Gap** *(Shape B — post-adoption, blind)* | The bottleneck of producing by hand | The standing burden of *verification debt* — output you can ship but can't fully verify or explain | Epistemic · Cognitive |
| **Prototype-to-Production Wall** | The freedom of a prototype that never had to hold the answerable half | Accountability in registers the prototype never owed — real user data, security, reliability, the consequences that land on people once it's live | Ethical |
 
---
 
## The six ledgers, expanded
 
Each carries a one-line routing header (which end held badly / develop-or-borrow default / who lands here), the two-column ledger with the **Adopted** side forced to three-plus entries — it's the column founders leave empty — and a **residual-risk statement** template, the sentence that converts a hidden cost into a chosen one.
 
### 1. Internal Talent Worth Developing
*Holds both ends, wants to transfer the engineering and product-ownership faculty into specific developable people — an individual standout or a small team of change-makers · default: develop the faculty, fully · existing employees + the leader who sponsors them.*
 
- **Shed:** external hiring/contracting capability.
- **Adopted:**
  - delegator-atrophy risk — people who can't build or verify unaided;
  - attrition — the capability walks out the door;
  - ongoing sponsorship load — inquiry-over-delegation has to be protected, not assumed.
- **Residual-risk statement:** *"We choose to hold the risk that our bench's long-run sharpness depends on sustaining inquiry over delegation — acceptable because we instrument it (inquiry-vs-delegation diagnostic) and retain through [____]."*
- **Lights up:** Identity · Cognitive.
### 2. SaaS Vendor Dependency
*Both ends sit with the vendor · default: borrow the frame, minimally · repeat non-technical founder / operator.*
 
- **Shed:** perpetual rent + the vendor's control of a slice of operations.
- **Adopted:**
  - the maintenance burden — the answerable half of "build it yourself";
  - capability/model risk if agent-built (deprecation, drift);
  - the upkeep that can quietly eat the savings — the ops-staffing line, discovered a year later.
- **Residual-risk statement:** *"We choose to hold the maintenance and capability risk of an owned tool — acceptable because rent exceeded build at our scale and this is a commodity we can keep cheaply / a differentiator worth owning."*
- **Lights up:** Temporal · Economic.
### 3. External Dev Dependency
*Origination partial, answerability largely external · default: borrow the frame (founder), develop the faculty if there's internal talent to receive it · founder reliant on an agency or contractor.*
 
- **Shed:** the agency margin + the "don't own what you can't change/see" trap.
- **Adopted:**
  - origination + answerability you must now actually hold (review capacity, directing literacy);
  - differentiation risk — the same agents are available to everyone, so what distinguishes you from the next founder with the identical stack;
  - transition-stall and lost tribal knowledge (handover, IP/escrow).
- **Residual-risk statement:** *"We choose to hold origination and answerability in-house, and the risk that our edge must come from something other than the stack — acceptable because our differentiator is [____], not the code."*
- **Lights up:** Differential · Economic.
### 4. Legacy Software Debt
*Holds the answerable end but can't hold the frame (it's missing, not abdicated) · default: develop the faculty · operator or technical founder inheriting a system.*
 
- **Shed:** a system you couldn't see, couldn't safely touch, and feared.
- **Adopted:**
  - a model now making change decisions on your behalf over code you don't fully frame;
  - the brownfield risk — AI can *slow* you on mature code you know well, with "directionally correct but not exactly right" review cost;
  - the slow, unborrowable work of building the situation model before any safe change.
- **Residual-risk statement:** *"We choose to hold the risk that modernization decisions are partly the model's — acceptable only while we externalize the situation model (characterization tests, ADRs) to keep the judgment ours."*
- **Lights up:** Judgment.
### 5. AI Development Gap
*Two shapes — sometimes both at once — but the same kit and the same destination · default: develop the faculty (closing the gap* is *building owned capability) · the team mid-non-adoption or mid-blind-adoption.*

**Shape A — pre-adoption (stalled, paralyzed, not started).**

- **Shed:** the drag of stalled adoption / evaluation paralysis / staying structurally behind while peers move.
- **Adopted:**
  - change-management load — the org has to actually do the work of moving;
  - tool-evaluation cost — credible first-move pathways, not just buying Copilot seats;
  - the risk of crossing into Shape B if velocity is chased before the answerable end is built.
- **Residual-risk statement:** *"We choose to hold the change-management and tool-evaluation load of moving AI-native — acceptable only because we develop the answerable end alongside the producible velocity, not after it."*

**Shape B — post-adoption, blind (verification debt).**
 
- **Shed:** the bottleneck of producing by hand.
- **Adopted:**
  - verification debt — shippable output you can't fully verify or explain;
  - review-capacity load that can't scale (finite attention, the rubber-stamp default);
  - automation complacency that keeps the gap invisible, plus the self-spec substitution risk.
- **Residual-risk statement:** *"We choose to hold the standing burden of telling true from merely plausible as volume grows — acceptable only while we develop owned capability (spec-driven development, structural gates) faster than output."*

- **Lights up (either shape):** Epistemic · Cognitive.

### 6. Prototype-to-Production Wall
*Built on Lovable / Base44 / Replit / Bubble / a Cursor-vibe stack — looks amazing, traction showed up, scaling isn't happening · default: develop on the non-functional surface, borrow where you'll rely on specialists/agents · the enthusiastic founder who chose those tools specifically because they appeared to remove engineering time and cost from the equation.*
 
- **Shed:** the freedom of a prototype that never had to hold the answerable half.
- **Adopted:**
  - accountability for real user data, security, and reliability — the non-functional registers the prototype skipped;
  - an expanded threat surface from AI-generated code (the OWASP / Veracode / prompt-injection set);
  - observability, SLA, and compliance obligations as actual release requirements.
- **Residual-risk statement:** *"We choose to hold accountability in registers we didn't previously owe — acceptable only with a hardening definition-of-done that makes the answerable half explicit before we call it production-ready."*
- **Lights up:** Ethical.
---
 
## How it's used, and where it hands off
 
**The discipline is the whole point.** The teaching move is mechanical: force at least three entries into the Adopted column, then sign one residual-risk statement. That signature is *Did I choose this, or did it choose me?* pointed at the dependency rather than the product — origination applied to the trade itself. An empty Adopted column means the trade wasn't decided, just made.
 
**Keep it a seed.** Name the dimension, never define it here; the definition and the instrumentation are Section 4's harvest. The handoff is clean: each Adopted dependency in this table *is* the thing Section 4 later measures, and each residual-risk statement is meant to become a trailing signal you re-read on the board (origination ratio, reframe-vs-accept rate) rather than a cost discovered late — the same instrument as the intake's re-administration, at process scale.
 
**Coverage note.** The six situations collectively point at **eight** of Section 4's nine dimensions — Identity, Cognitive, Temporal, Economic, Differential, Judgment, Epistemic, Ethical — with Economic and Cognitive each lit twice. That leaves **one of the nine (Vocational) with no Section 2 seed.** A deliberate call for Section 4: does Vocational need a situation pointer back here, or is it genuinely a harvest-only axis that no single relocation trade surfaces?