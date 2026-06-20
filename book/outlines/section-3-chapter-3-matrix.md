# Section 3, Chapter 3 — "One Job, Start to Finish"
## Granular Matrix Outline (pilot)

*Working title; pilot of the matrix outline form. The chapter ships as a single linear walk for every reader. This artifact exposes the spine and the configurable columns side-by-side so the spine never drifts from the audience kits ([book/modules/audience-research-plan.md](book/modules/audience-research-plan.md)) or the crosswalk ([book/modules/module-skill-crosswalk.md](book/modules/module-skill-crosswalk.md)).*

This is an **authoring artifact**, not a reader artifact. The reader gets one linear chapter; the author writes that chapter through this matrix so that universals, situations, registers, gates, and signals are configured at the same moment the prose is.

---

## Chapter-level rhythm (Scene -> Tension -> Distinction -> Tool -> Return)

- **Scene:** one piece of work — a single ticket — moves left to right across a board with ten columns. Every column has an agent in it. The human is standing between the columns.
- **Tension:** if every column is staffed, what is the human still doing here?
- **Distinction:** the agent fills the column; the human owns the *gate between* the columns. Two of those gates (G1 originate, G7 review) are the two jobs from Section 1, now living at specific spots on the board.
- **Tool:** the gate-by-gate rhythm — for each gate, name where origination lives, where the answerable half sits, where the human's condition hits the call, which agent/skill does the producible work, what the agent teaches its human counterpart, and what signal the gate emits.
- **Return:** the chapter ends back at the same ticket, now shipped and observed. The reader feels the rhythm. Bridge to Ch. 4 (gates that don't transfer) and Ch. 6 (the board reading the reader).

---

## How to read the per-gate cards

Each card carries:

- **Universal Beat** — what every reader gets in the body text.
- **Scene Anchor** — a concrete image to write the prose into.
- **Distinction** — which doctrine fires at this gate.
- **Producing Subagent** — the column staffer; pulled from the crosswalk.
- **Register** — E / P / E⇄P at this gate (per the register-switch standard).
- **The Configurable Column** — how each of the six situations changes the gate. "**Gate hardened**" means this is *the* gate this audience tends to rubber-stamp and is instrumented hardest for.
- **Trailing Signal** — what the board emits for the Section 4 dashboard.
- **Substitution Risk** — how the agent creeps onto the human's end at this gate, and how to police it.
- **Exercise Slot** — where a reader exercise hangs (later moved to `book/exercises/` or kept inline).

Audience codes follow the Section 2 grid: **ITW** (Internal Talent Worth Developing), **SVD** (SaaS Vendor Dependency), **EDD** (External Dev Dependency), **LSD** (Legacy Software Debt), **AID** (AI Development Gap), **PPW** (Prototype-to-Production Wall).

---

## The spine — nine gates as nine beats

### Gate G1 — START IT (Originate)

- **Universal Beat.** You decide it's worth doing. Agents surface what the company already knows about it from the MCP-fed surfaces (support, calls, threads). You own the "why now."
- **Scene Anchor.** The ticket has a name on top. The name is yours, not the agent's — even if the agent surfaced the idea first.
- **Distinction.** *"Did I choose this, or did it choose me?"* — the first question of the book, hardened into a gate.
- **Producing Subagent.** MCP-fed discovery / research subagent (Module 1 — Founder Faculty; Module 7 — Modernize-vs-Replace where the audience is LSD).
- **Register.** E⇄P. First-time founder gets E (transfer the founder faculty). Repeat founder in the same situation gets P (just produce the discovery brief; they don't need to be taught it).
- **The Configurable Column.**
  - **ITW:** universal only — origination is the lead's job already; the configurable bite happens at G7 and in the teaching loop.
  - **SVD: gate hardened.** Module 2 (Build-vs-Buy & Dependency Economics) loads in P, plus Module 7 if the question is modernize-vs-replace. The reader runs the Relocation Lens here — *what risk am I trading for what risk?*
  - **EDD: gate hardened.** Module 4 (Directing Technical Work) loads in P. The reader writes the why-now in plain language *before* the agency-replacement agents brief options.
  - **LSD:** Module 7 in P + Module 5 (Code Comprehension) in E enter here. Originating any change requires reading what's already there.
  - **AID:** universal only at G1; the bite is G7.
  - **PPW:** Module 11 (Production-Readiness Hardening) enters in E. The prototype's origination is re-evaluated against production-grade NFRs.
- **Trailing Signal.** **Origination ratio** — fraction of tickets the human originated vs. accepted from the agent. The board emits this for the Section 4 dashboard.
- **Substitution Risk.** The agent quietly originates by recommending its own next ticket. **Police:** every ticket carries a human-authored "why now" line, or it doesn't enter the board.
- **Exercise Slot.** *Write the why-now in twelve words.* Run for the next five tickets you would have rubber-stamped. Compare against the agent's framing.

---

### Gate G2 — SPELL IT OUT (PRD / Specify)

- **Universal Beat.** An agent drafts the full spec a startup never had time for. You own the actual problem and the trade-offs.
- **Scene Anchor.** A PRD lands in your inbox at 9:04 a.m. for a ticket you originated at 9:02. It's three pages. You have to decide whether to read it or wave it.
- **Distinction.** Producible / answerable at the spec layer — the artifact is producible (and arrives fast); the trade-offs encoded in it are answerable and cannot be handed off.
- **Producing Subagent.** PRD-author subagent, configured by Module 8 (Spec-Driven Development).
- **Register.** E⇄P. Persona tag at intake decides. Develop-the-faculty readers get E — the PRD-author narrates each trade-off as it makes it and leaves a deliberate blank.
- **The Configurable Column.**
  - **ITW:** E — the team is developing the spec faculty. The lead also reviews what the agent leaves blank for the bench.
  - **SVD:** P — borrow the spec; the founder isn't building the spec muscle.
  - **EDD: gate hardened.** Module 4 + Module 8 in P. The PRD is the founder's lever for directing the agency credibly. **Self-spec flag fires here loudly.**
  - **LSD:** E — the spec must reflect actual system constraints surfaced by Module 5.
  - **AID: gate hardened.** Module 8 in E. The bench has been shipping without specs; this is where that habit dies.
  - **PPW:** Module 11 writes NFRs into the spec in E. The prototype never had NFRs; the spec is where they enter.
- **Trailing Signal.** **Reframes-vs-accepts** on the PRD — did the human edit it materially, or wave it? Plus the **self-spec flag** — did the agent author the spec it then implemented? (The load-bearing substitution.)
- **Substitution Risk.** The self-spec. If the agent writes its own marching orders, it has stepped over the line. **Police:** the spec must carry a human edit-trail, or the gate rejects it.
- **Exercise Slot.** *Diff your last three PRDs.* Count substantive edits vs. typo-class edits. If the ratio looks like "mostly typos," your self-spec is silent.

---

### Gate G3 — BREAK IT DOWN (Ready)

- **Universal Beat.** The spec becomes a list of work items. An agent sorts, de-duplicates, estimates. *You* say which ones are truly ready.
- **Scene Anchor.** A column called Backlog has 47 items. Another column, Ready, has 6. You are the only thing that moves an item from Backlog to Ready, and your hand wants to skip it.
- **Distinction.** The second face of Can-vs-Should. Every item in Backlog *can* be built. The Ready gate asks which one *should*.
- **Producing Subagent.** Grooming subagent (estimation, dedup) — narrow.
- **Register.** P universal; E layered for ITW's bench.
- **The Configurable Column.**
  - **ITW:** the lead uses Ready as a teaching moment — "why this, not that." E layer wraps P for bench members.
  - **SVD: gate hardened with G1.** The Build-vs-Buy decision often surfaces at Ready, not at originate — *now* the trade is concrete.
  - **EDD: gate hardened.** The founder uses Ready as the lever against scope creep from the agency.
  - **LSD:** Ready is harder than usual; items move to Ready behind a "understood: yes/no" flag from Module 5.
  - **AID:** Ready is often skipped today. Modules 8 + 9 make it structural.
  - **PPW:** items pass Ready only if their NFR slot is filled.
- **Trailing Signal.** **`Ready`-gate decisions** — how many items the human marked Ready vs. how many the agent surfaced. Pairs with origination ratio.
- **Substitution Risk.** **`Ready` by drift** — agent-surfaced items the human merely approves. **Police:** the gate records a positive human "yes," not the absence of a no.
- **Exercise Slot.** *Reject one Ready candidate this week on purpose.* Force the gate to be real.

---

### Gate G4 — DESIGN IT (Architecture)

- **Universal Beat.** An agent proposes the shape. You judge whether it's *right*, not just whether it'll work.
- **Scene Anchor.** The design doc has three options, scored. The agent has a recommendation. You have a feeling.
- **Distinction.** Producible / answerable at the design layer — the options are producible; the *right* answer is judgment-dense and answerable.
- **Producing Subagent.** Design subagent (architecture options + trade-offs).
- **Register.** E for develop-the-faculty; P for borrow-the-frame.
- **The Configurable Column.**
  - **ITW:** E — bench members watch the design choices land. Lead's job is to police the teaching, not the design.
  - **SVD:** P — the founder receives a design they can stand behind without learning architecture.
  - **EDD:** E if the founder is growing in-house; P if they are directing the agency.
  - **LSD: gate hardened *pre-*G4 by Module 5.** Design can't be honest until the legacy archaeology is real. The design subagent is forbidden from proposing options that contradict the archaeology.
  - **AID:** E if the bench is building the design faculty; otherwise P with a heavy review at G7.
  - **PPW:** Module 11 in E. NFRs from G2 force the design to declare its production posture.
- **Trailing Signal.** **Reframes on the design** — same shape as the PRD signal. Did the human pick a different option than the agent recommended? How often?
- **Substitution Risk.** The agent's recommendation becomes the default because it scored highest by criteria the agent chose. **Police:** the human either overrides the scoring or signs the scoring as theirs.
- **Exercise Slot.** *Pick the second-best option once.* See what changes about the build. (Cuts the automation-complacency reflex.)

---

### Gate G5 — BUILD IT (Implement)

- **Universal Beat.** An agent writes the code, opens a PR. This part is genuinely the agent's.
- **Scene Anchor.** The PR is open in fifteen minutes. The diff is two hundred lines. The agent's commit message is fluent.
- **Distinction.** The agent owns the middle — and the middle now includes substantially more than it used to.
- **Producing Subagent.** Implementer + refactor subagents (Module 10 — Vibe-to-Engineering Ladder, in E for AID/ITW).
- **Register.** P universal. Exception: AID and ITW in E.
- **The Configurable Column.**
  - **ITW:** E — the implementer narrates as it goes for the bench.
  - **SVD / EDD:** P — founder isn't building the implementer faculty.
  - **LSD:** P, hard constraint that the implementer reads Module 5's archaeology notes before writing.
  - **AID: gate hardened upstream by Module 6 (Characterization-Test-First) and downstream by G7.** Implementer runs only after characterization tests pin behavior.
  - **PPW:** P, with NFRs from G2 enforced as build-time constraints.
- **Trailing Signal.** **Rework rate** and **structure signals** (Module 10) — does the same area keep getting rewritten? Is the structure decaying?
- **Substitution Risk.** Implementer is genuinely the agent's column. The risk isn't here; it's at G7. *(Name this explicitly — the chapter's honesty depends on it.)*
- **Exercise Slot.** *(None. G5 is the column the chapter deliberately doesn't pull back from. The exercise is at G7.)*

---

### Gate G6 — TEST IT, SECURE IT, WIRE IT UP

- **Universal Beat.** The work that used to get skipped — real tests, a security pass, the plumbing — agents now produce as a matter of course.
- **Scene Anchor.** A test report, a security-finding list, an IaC change-set — all generated, all reading clean. Too clean?
- **Distinction.** The Iron Triangle dissolved. What used to be a luxury (real tests, real security, real infra) is now the floor.
- **Producing Subagent.** Test-author (Module 6), security-reviewer (Module 12), infra/IaC subagent (Module 11).
- **Register.** E for NFRs (Module 11 in E); P for specialist outputs (security findings in P).
- **The Configurable Column.**
  - **ITW:** E for everything; the bench is learning what production-grade looks like.
  - **SVD / EDD:** P, with a one-page summary the founder can sign.
  - **LSD: gate inverted.** Module 6 runs *before* G5 (characterization tests first). This is the LSD-specific shape change to the board geometry.
  - **AID: gate hardened.** Modules 6 + 12 in E. The bench is learning to read its own test reports.
  - **PPW: gate hardened.** Modules 11 + 12. This is most of why PPW readers are here.
- **Trailing Signal.** **Coverage**, **change-failure rate**, **vulns-per-changeset**, **deploy discipline** — the most signal-rich gate on the board.
- **Substitution Risk.** The security-reviewer flags; the human approves the flag without reading. **Police:** override rate on security flags is itself a signal.
- **Exercise Slot.** *Read one security finding all the way through this week.* Then ask the security-reviewer to explain it back to you. Compare.

---

### Gate G7 — REVIEW IT

- **Universal Beat.** You read what was built and stand behind it. This one never transfers.
- **Scene Anchor.** The PR is green. The CI is green. The agent's summary is fluent. Your finger is over Approve. *Did you read the diff?*
- **Distinction.** Answerability — the back end of the two jobs. The chapter's emotional center.
- **Producing Subagent.** Code-review subagent (Module 9 — Review Capacity, assist-only — flags, never decides) + review-explainer (Module 3 — Minimum Frame, for non-authors).
- **Register.** E universal. Review is where teaching has to happen even for borrow-the-frame readers, because they have to be answerable at this gate.
- **The Configurable Column.**
  - **ITW: gate hardened.** Modules 9 + 14 (Develop-the-Faculty Teaching Protocol). Lead reviews the reviewer; the bench's reviews are themselves a teaching artifact.
  - **SVD: gate hardened.** Module 3 — minimum frame to stay answerable for a system the founder won't author.
  - **EDD: gate hardened.** Modules 3 + 9. The founder rejects agency-produced code on substance, not vibes.
  - **LSD: gate hardened.** Module 5 governs review depth on inherited code. *Net-first* review — what does this change to the system, in the smallest possible diff terms.
  - **AID: gate hardened — the whole reason this audience exists.** Module 9. Review capacity is the binding constraint named in Ch. 6.
  - **PPW:** Modules 9 + 11 (NFRs back-checked in review).
- **Trailing Signal.** **PR / diff review depth** (load-bearing), **override rate** on agent flags, **inquiry-vs-delegation ratio** (Module 13). This is the gate the Section 4 dashboard reads hardest.
- **Substitution Risk.** **Rubber-stamp.** Automation complacency. The single most dangerous gate on the board for everyone. **Police:** review depth is structurally instrumented, not just exhorted.
- **Exercise Slot.** *Run the assist-only review subagent on your last five approved PRs.* Count how many you would still approve after reading what it flags. That number is your review-capacity baseline. *(Anchors Ch. 6.)*

---

### Gate G8 — WRITE IT DOWN (Documentation)

- **Universal Beat.** An agent keeps the documentation true *as the code changes*, instead of letting it rot.
- **Scene Anchor.** The docs page updates itself when the PR merges. You haven't opened it in three weeks. Should you?
- **Distinction.** Documentation, the formerly-skipped work, becomes free. *Free isn't the same as honest.*
- **Producing Subagent.** Documentation subagent (paired to whatever produced the change).
- **Register.** P universal; E for ITW.
- **The Configurable Column.**
  - **ITW:** the bench uses agent-generated docs as a teaching surface. E; lead reviews for what's been silently elided.
  - **SVD / EDD / PPW:** P; founder doesn't write docs but does sample them.
  - **LSD:** docs are also being generated *for the inherited code* via Module 5 — this audience uses G8 differently from everyone else.
  - **AID:** docs are part of what the audience didn't have. Module 14 may wrap G8 in E.
- **Trailing Signal.** Documentation freshness; docs-vs-code drift.
- **Substitution Risk.** Docs that are fluent and wrong. The agent writes the doc the way it *thinks* the system works, not necessarily how it does. **Police:** spot-sample one doc per release against actual behavior.
- **Exercise Slot.** *Pick one doc you'd bet money on.* Test it against the running system.

---

### Gate G9 — SHIP IT, AND WATCH IT (Deploy & Observe)

- **Universal Beat.** It goes live behind your say-so. You own what happens to real people on the other side.
- **Scene Anchor.** The deploy button. Then: the dashboards. Then: the first user.
- **Distinction.** Product observability — the build now talks back. *And the build is silently observing you, too.* (Bridge to Ch. 6.)
- **Producing Subagent.** Observability subagent (Module 11).
- **Register.** E for NFRs and incident posture.
- **The Configurable Column.**
  - **ITW:** observability is teaching surface for the bench.
  - **SVD / EDD:** founder gets a curated dashboard; what they sign is the rollback policy.
  - **LSD: gate hardened upstream by Module 6.** Deploy-and-observe is only honest if characterization tests are pinned.
  - **AID:** observability is where AI-generated code's failure modes get expensive. Hardened here too.
  - **PPW: gate hardened.** Modules 11 + 12. The whole audience converges here.
- **Trailing Signal.** **Deploy discipline**, **change-failure rate**, **recovery time**. These feed the Ethical and Economic dimensions in S4.
- **Substitution Risk.** Agent declares the deploy healthy; human believes it. **Police:** the human reads one user-side outcome per release, not just one dashboard.
- **Exercise Slot.** *Pull the rollback once on purpose.* Confirm it works before you need it.

---

### The Loop — back to G1

- **Universal Beat.** What you learn out in the world feeds the next "start it." The board doesn't end; it cycles. The *same* board has been quietly emitting the signals Section 4 will read on the long clock. *(Bridge to Ch. 6.)*
- **Scene Anchor.** The ticket is closed. The next ticket is named — by you, again, with a why-now you can defend. The shop runs.
- **Return.** The chapter's opening promise — "the agent fills the column; you own the gate" — has now been walked through nine times. The reader has felt the rhythm.

---

## Cross-cutting columns (carried across every gate, not repeated per gate)

| Cross-cut | Where it lives in this chapter | S4 dimension(s) fed |
|---|---|---|
| Universals (Two-Ends Diagnostic, Operating Profile, Relocation Lens, You-Are-Infrastructure, Can-vs-Should) | Configure the chapter's entry conditions — assumed loaded before G1 | all |
| Register-switch standard (E / P / E⇄P) | Per-gate cards; persona tag at intake decides | Identity, Differential, Judgment |
| Maintenance trilogy bites (condition / observability / upkeep) | Surface at G2 self-spec, G3 Ready-by-drift, G7 rubber-stamp, G9 deploy-substitution | Cognitive, Epistemic, Vocational, Judgment |
| Watchdog (Section 1, Ch. 6) | Wired against the trailing signals this chapter emits; argued in Ch. 6 of this section, not here | all |
| Narrative anchors ([book/narrative-ledger.md](book/narrative-ledger.md)) | "Two gates" returns at G1/G7; "Prototype-to-production wall" returns at G6/G9; "Dashboard / watchdog" seeded at G7 for Ch. 6 bloom | Section 4 |

---

## Audience-by-gate quick view

Which gate is the *hardened* one for each audience — useful as a single-glance check before the prose is written.

| Audience | Hardened gate(s) | Distinguishing shape change |
|:--:|:--:|---|
| ITW | G7 + teaching loop around G4-G7 | Every gate doubles as a teaching surface |
| SVD | G1 + G3 | Build-vs-Buy decision surfaces at Ready |
| EDD | G1 + G2 + G7 | Directing the agency is concentrated at spec and review |
| LSD | pre-G4, G6 (inverted), G7 | Characterization tests run before implement; archaeology gates design |
| AID | G2 + G6 + G7 | Spec, test, and review are all the muscles that atrophied |
| PPW | G2 + G6 + G9 | NFRs everywhere; the prototype's missing back half is hardened |

---

## Open decisions this matrix forces

1. **The chapter as written today is universal-only.** This matrix says each audience experiences a *different* chapter even though the spine is the same. **Decision:** does the book deliver the universal walk in body text and the configurable layer as inline call-outs / module pointers, or are there genuinely six different versions of Chapter 3 bound into different print kits?
2. **The signal density.** This matrix surfaces ~12 trailing signals across nine gates. **Decision:** which become explicit reader-facing measurements in Ch. 6, and which stay author-side (named for Section 4 only)?
3. **The exercise count.** Eight gate exercises plus the cross-cuts is too many for one chapter. **Decision:** which exercises live in-chapter and which move to [book/exercises/](book/exercises/).
4. **G5's deliberate silence.** This matrix leaves G5 (implement) without an exercise on purpose — the chapter celebrates that this column is genuinely the agent's. Confirm we're comfortable with that asymmetry; the alternative is a "watch one PR get built" exercise.
5. **LSD's inverted G6.** Characterization-tests-before-implement is the only audience-specific *shape change* to the board geometry in this chapter. **Decision:** surface it in the reader-facing chapter (most truthful) vs. handle it in LSD-specific module material only (cleaner spine).
6. **Whether this form propagates.** If this matrix holds for Ch. 3, the next candidates are Section 2 Ch. 5 (the six situations) and Section 4 Ch. 3 (the nine questions) — both are similarly modular. Decide whether to pilot the form on those next or stay linear there.
