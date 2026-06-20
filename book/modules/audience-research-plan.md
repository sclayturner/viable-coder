# Section 2 Research Plan: Mapping Audiences to Valuable Insights
 
*A research **plan**, not the research itself. This document outlines, for each audience, the guiding principles to fetch depth on later — one audience at a time. It is built to feed the **module library** (guidance + exercise + paired agent skill) that Part 2 of the playbook hands to each audience as a default set, borrowable across types.*

*Canonical audience definitions live in [doctrine/audiences.md](doctrine/audiences.md). This document elaborates the research backing each audience; the snapshots below align with the doctrine. If a snapshot drifts, update the doctrine first, then the elaboration.*
 
---
 
## How this plan is organized (and the three choices behind it)
 
**Choice 1 — six situations as the spine, personas as the overlay.** Per the `[DECISION]` flagged in the working outline, the six canonical site situations remain the organizing unit. The three personas from the brief (repeat non-technical founder; first-time technical founder; non-technical career-changer) are treated as *how those situations show up in a person*, and the **producible/answerable split** is the cross-cutting diagnostic. If you'd rather invert this — personas as spine, situations as instances — the per-section research topics below mostly survive the reshuffle; only the grouping changes. There is a third read on top of these two — the **operating profile** (Stream F), the instrument's stable wiring — giving a clean composition: **situation picks the module set; persona sets develop-vs-borrow; wiring tunes the delivery.**
 
**Choice 2 — shared research is hoisted into cross-cutting streams.** Several topics feed three or more audiences (adult skill acquisition, the founder faculty, the diagnostic instrument itself, review capacity, the relocation lens, the operating profile). Researching these once as reusable blocks, before the per-audience passes, prevents you from re-deriving the same module six times. Do the cross-cutting streams first.
 
**Choice 3 — the relocation lens blooms here; the nine dimensions stay seeds.** Every situation's "fix" relocates risk rather than removing it: insource the agency to agents and you trade relationship-and-contract risk for model-capability and lock-in risk, but the risk never leaves you, because per the spine it can't. This dynamic is **bloomed fully in Section 2** (Stream E below), since Section 2 is where those trades are actually chosen — insource, replace, modernize. But the **nine dimensions** that measure each trade's cost appear only as **named pointers** per situation, not as definitions, to protect the seed→bloom→harvest pedagogy that reserves the dimensions as Section 4's harvest. A one-line version of the idea also belongs back in Section 1's stance — *you can't escape risk, only choose its shape* — so that Section 2 blooms something already planted rather than introducing it cold.
 
**The load-bearing diagnostic for every audience** is the one your outline calls the sharpest tool in the part: **develop the faculty** (the person wants this end as a real, owned capability) vs. **borrow the frame** (the person needs just enough to stay *answerable* for a call they will never author). Each situation below is tagged with its default position on that spectrum, plus **which of the two ends it holds badly** — origination at the front, answerability at the back. That tag is what later calibrates the teaching agents in Section 3 (transfer fully vs. teach just enough frame).
 
A note on your own material: throughout, I flag **"Clay-experience anchors to capture."** These are prompts for *you* to mine three wells of experience: founder judgment, engineering judgment, and the personal life experience beneath both. The modules become yours when they carry the right source: what you learned building companies, what you learned building systems, and what you learned by owning consequences in ordinary human life. I can't research those; I can only mark where the playbook needs one.
 
---
 
## Cross-cutting research streams (do these first)
 
These are the shared building blocks. Each becomes a module-set that multiple audiences draw from.
 
### Stream A — The founder faculty (the origination front-end)
 
This is the "what *should* be built" research, and it is squarely the **origination** end. First-time founders need it before any engineering frame; repeat founders already hold it and borrow the engineering frame instead. Topics to fetch depth on:
 
- Product-market fit: the operational definitions (Sean Ellis test, retention-curve flattening, pull vs. push), and how PMF is detected *as a trailing signal* rather than felt — which ties straight to your "self-report lies" principle.
- Founder-market fit: what it actually predicts, how to assess it honestly, the failure mode of building from capability rather than conviction.
- Timing and market entry: "why now" frameworks, the cost of being early vs. late, technology-adoption windows.
- The "can vs. should" gate as origination made explicit — connecting business acumen directly to your *Did I choose this, or did it choose me?* test.
- How AI changes the founder calculus: when cheap building tempts you to build the wrong thing fast (the "missteps cost more now" claim from Section 1).
- **Clay-experience anchor to capture:** your own PMF/FMF/timing calls — the ones that worked and the ones that didn't, told as a founder-to-founder module.
### Stream B — Adult skill acquisition, transfer, and de-skilling
 
Feeds every *develop-the-faculty* audience (Internal Talent, AI Gap, Prototype Wall, career-changers). This is the mechanism behind transfer-not-substitution.
 
- The Anthropic skill-formation RCT in depth: the delegators-<40% / inquirers-65%+ split, and what *interaction style* concretely looks like as a teachable behavior.
- Deliberate practice, apprenticeship, and cognitive apprenticeship models (modeling → scaffolding → fading) — the pedagogy that maps onto Explanatory/Socratic agent registers.
- Automation complacency and bias (Parasuraman & Manzey 2010): why it hits experts too, why it can't be trained away simply, why gates must be structural.
- Competency frameworks and how skill acquisition is *measured* (so the modules can include real before/after assessment, not vibes).
- **Clay-experience anchor:** how you've onboarded or mentored engineers historically — what transferred and what didn't.
### Stream C — The diagnostic instrument itself
 
The producible/answerable split has to become a *usable sorting tool*, not just a philosophy. Research how comparable diagnostics are built and administered:
 
- Self-assessment instrument design that resists the flattering answer (forced-choice, behavioral evidence over self-rating) — directly inherits your observability principle.
- How to operationalize "which end do you hold badly?" into a short intake a mentee can take.
- Maturity/readiness models as precedent (DORA's AI Capabilities Model, the seven team archetypes) for structuring audience defaults.
### Stream D — Review capacity as part of condition
 
Flagged in the Section 3 open questions as possibly *the* binding constraint. It cuts across SaaS, External Dev, Legacy, and AI Gap audiences — all of whom must hold an answerable end over work they didn't produce.
 
- "Verification debt" (Sonar) and "acceleration whiplash" (Augment Code): the mechanics of output outrunning review.
- What review capacity actually consists of (mental models, the frame, the threat model) and whether it can be built quickly or must be developed slowly.
- The METR brownfield result (slower on mature repos you know well) as evidence that owned understanding is non-negotiable for review.
### Stream E — The relocation lens (every escape is a trade)
 
The dynamic that cuts across all six situations: no move sheds risk, it only changes risk's shape. This follows straight from the spine — if the human bears all the risk and the machine bears none, then insourcing, replacing, or modernizing never *removes* a dependency, it **relocates** it. The teachable reframe is that escaping dependency was never the goal; *choosing which dependency is worth holding* is — origination applied to the dependency itself, the *Did I choose this, or did it choose me?* test pointed at the trade. Keep the tone clear-eyed choosing, not "it's all dependencies, why bother": you're trading up to a dependency worth holding.
 
- Risk-relocation framing: how each situation's fix manufactures a new dependency, and how to make that trade a deliberate origination act rather than a hidden cost discovered later.
- Model and vendor dependency mechanics for the agent era — capability drift, pricing, deprecation, lock-in — researched specifically as the *agency-to-agents* trade.
- How to price a dependency you're taking on (maintenance burden, capability risk) against the one you're shedding, so the trade is legible before it's made.
- Which of the nine dimensions each common relocation lights up — enough depth to *name the axis* per situation, deliberately not enough to pre-empt Section 4.
- **Clay-experience anchor:** a time you traded one dependency for another and only saw the new one later.
### Stream F — The operating profile (the instrument's wiring)
 
Section 1 already makes "you are the instrument" load-bearing, and the condition arc is about the instrument's *state* — its **weather**, the day-to-day variance you instrument precisely because it lies. This stream is about the instrument's standing *configuration* — its **climate**, the stable traits the weather happens on top of. An ADHD creative and a methodical sequential thinker have different climates, and the same bad night degrades each differently. So this isn't a new concept bolted on; it's the baseline the whole condition/observability arc was implicitly assuming a generic version of. It is **not a tenth dimension** — it's the baseline the *Cognitive* dimension is read *against*. A one-line seed belongs back in Section 1's stance (*the instrument came with a factory configuration; know it before you tune it*), so Section 2 blooms something already planted.
 
This read is administered **together with the Two Ends Diagnostic (Stream C) as one intake**, and it feeds the **teaching-protocol modules** (delivery, not content). The composition it completes: **situation picks the module set; persona sets develop-vs-borrow; wiring tunes the delivery** — same modules, different pacing, scaffolding, novelty, and how aggressively the frame gets externalized.
 
The methodological spine here is non-negotiable, because *Remaining Viable* would otherwise have to apologize for it: **functional, not categorical — instrument the constraint, don't type the person.**
 
- The honest evidence base: Big Five (OCEAN) reliability/validity (the respectable one, still modest); why MBTI is psychometrically weak (poor test-retest, false dichotomies); and why the "learning styles" *meshing* hypothesis fails replication — so the playbook builds on mechanism, not pop-psych labels.
- Neurodivergence and cognitive variation as **engineering constraints**, not identities: ADHD, working-memory limits, need for novelty, nonlinear/associative thinking — and specifically how each interacts with the two ends (origination, the answerable half) and with agentic workflows.
- Functional self-assessment that reads configuration off **behavior** rather than a self-flattering quiz — the observability principle (Stream C) pointed at climate instead of weather.
- How delivery actually changes by wiring: pacing, scaffolding density, novelty load, how hard to externalize the frame, single-threading the dense calls — the same module delivered differently.
- Personalized dashboard baselines: why an ADHD creative's "normal" origination ratio isn't the generic norm, so Section 4 thresholds are read against the individual's climate rather than a population default.
- **Clay-experience anchor:** discovering your own configuration late, and what about the standard path never fit how you learn — which is itself the argument for why the instrument's climate belongs in the intake.
---
 
## The six situations
 
Each profile gives: a **snapshot** (dominant risk, which end held badly, develop-or-borrow default, the persona(s) that land here, the Clay-experience anchor to capture), the **research topics** to fetch depth on, the **module(s)** the research should produce, and the **dimension pointers** — which of Section 4's nine dimensions this situation's relocation trade lights up, named only, as a Section 4 seed.
 
---
 
### 1. Internal Talent Worth Developing (ITW)
 
**Snapshot.** Dominant risk: developing people into *delegators* who atrophy rather than *inquirers* who build real capability — and losing the investment to attrition. End held badly: the org currently holds both ends and wants to **transfer the engineering and product-ownership faculty into real people**. Unit is *specific, developable people* — an individual standout, or a small team of change-makers (the handful who would shift how the org actually builds, if developed). Not org-wide training; not hiring; not a generic L&D initiative. Default: **develop the faculty, fully** — this is the most teaching-heavy audience. Persona: existing employees; the leader who sponsors them. Clay-experience anchor: your history growing engineers and the moment someone "got it."
 
**Research topics.**
- Cognitive apprenticeship and scaffolding-then-fading applied to AI-assisted engineering (leans on Stream B).
- Retention economics of internal development: what it costs to develop vs. hire, and how to keep developed talent.
- Internal mobility ladders and competency rubrics for AI-native engineers.
- Psychological safety and blameless culture (DevOps CAMS model) as the precondition for inquiry over delegation.
- How Explanatory/Socratic Skill registers actually transfer the *why* without doing the work for the learner.
- The specific failure of teaching with AI: how to detect a delegator early and convert them.
**Modules to produce.** A "develop-the-faculty" teaching protocol; an inquiry-vs-delegation diagnostic for learners; a manager's module on sponsoring development without smothering it.
 
**Dimension pointers (Section 4 seed).** **Identity** and **Cognitive** — developing people into delegators relocates the de-skilling risk straight onto your own bench; the trade for an internal capability is the bench's long-run sharpness.
 
---
 
### 2. SaaS Vendor Dependency (SVD)
 
**Snapshot.** Dominant risk: paying perpetual rent for capability you can't control, can't extend, and can't exit cheaply — or, conversely, rebuilding a commodity you should have kept renting. End held badly: **both ends sit with the vendor** for a slice of operations; bringing it home means deciding what's differentiator vs. commodity. Default: **borrow the frame, minimally** — enough engineering frame to own what you were renting, not a full faculty. Persona: repeat non-technical founder; operator. Clay-experience anchor: a build-vs-buy call you made and what it taught you.
 
**Research topics.**
- Build-vs-buy decision frameworks: total cost of ownership, switching costs, opportunity cost, the hidden *maintenance* cost of owning (the answerable half of "build it yourself").
- Commodity vs. differentiator analysis (Wardley mapping as a candidate lens) — what you should never rebuild and what you can't afford to rent.
- Vendor lock-in mechanics: data portability, API dependency, exit-cost modeling.
- Subscription economics: per-seat scaling pain, price creep, the inflection where rent exceeds build.
- What AI changes: when an agent-built internal tool genuinely replaces a SaaS line item — and the maintenance burden that comes with it.
- The minimum engineering frame an owner needs to stay answerable for a tool they now run.
**Modules to produce.** A build-vs-buy decision module; a "minimum frame to own" checklist; a SaaS-replacement feasibility exercise.
 
**Dimension pointers (Section 4 seed).** **Temporal** and **Economic** — replacing rented capability with an owned tool trades a subscription for a maintenance burden; the question Section 4 measures is whether the time and money saved actually accrue or get eaten by the upkeep you just took on.
 
---
 
### 3. External Dev Dependency (EDD)
 
**Snapshot.** Dominant risk: the people who originate and answer for your software work *for someone else* — you direct but don't own, and you can't change what you can't see. End held badly: **origination is partial and answerability is largely external**; the goal is to move both back in-house. Default: **borrow the frame** for the founder; **develop the faculty** if there's internal talent to receive it. Persona: founder reliant on an agency or contractor. Clay-experience anchor: directing or being the outside shop, and where that relationship breaks.
 
**Research topics.**
- Outsourcing/agency relationship dynamics and the predictable failure modes (context loss, misaligned incentives, the "you don't own what you can't change" trap).
- Knowledge and IP transfer mechanics: code escrow, documentation requirements, handover playbooks.
- Insourcing/transition management: how teams actually bring development back in-house without a stall.
- The literacy a non-technical founder needs to *direct* technical work credibly without being an engineer (overlaps Stream A).
- How agents change the make-vs-outsource calculus — when a founder + agents replaces a shop.
- Reading and auditing code you didn't commission (shared with Legacy, #4).
**Modules to produce.** An insourcing transition module; a "directing technical work without being technical" frame; a vendor-handover audit exercise.
 
**Dimension pointers (Section 4 seed).** **Differential** and **Economic** — once the agency margin is gone and the same agents are available to everyone, the trade surfaces the question of what distinguishes you from the next founder with the identical stack, and whether what you uniquely add still pays.
 
---
 
### 4. Legacy Software Debt (LSD)
 
**Snapshot.** Dominant risk: a codebase you didn't author, can't fully see, and are afraid to touch — yet you answer for it. End held badly: you hold the **answerable** end but **cannot hold the frame**, because the frame is missing, not abdicated. Default: **develop the faculty** (you must build real comprehension) — borrowing a frame isn't enough when the thing is yours to maintain. Persona: operator or technical founder inheriting a system. Clay-experience anchor: a legacy system you untangled and the method you used.
 
**Research topics.**
- Legacy modernization strategies: strangler fig, incremental refactor, characterization-then-change, rewrite-vs-refactor decision criteria.
- Technical-debt taxonomy and quantification (so debt becomes a measured signal, not a feeling).
- Using AI to comprehend and document an existing repo — and the limits: the METR brownfield result says AI can *slow* you on mature code you know well, so where does it actually help?
- Characterization testing (golden-master) before any refactor — establishing a safety net over code whose intent is undocumented.
- Architecture archaeology: reverse-engineering intent from a system nobody remembers building.
- When to modernize vs. leave alone vs. replace (links to Stream A's "should" gate).
**Modules to produce.** A legacy-comprehension protocol (AI-assisted, with its limits stated); a characterization-test-first exercise; a modernize-vs-replace decision module.
 
**Dimension pointers (Section 4 seed).** **Judgment** — modernizing with AI trades a system you couldn't see for one whose change decisions a model now makes on your behalf; the trade buys comprehension at the cost of how much of the judgment is still yours.
 
---
 
### 5. AI Development Gap (AID)
 
**Snapshot.** Dominant risk: AI is not yet a deliberate, *owned capability* — in either of two shapes, sometimes both at once. **Shape A (pre-adoption):** stalled adoption, evaluation paralysis, or simply not having started — the team has not moved AI-native and feels behind without knowing how far. **Shape B (post-adoption, blind):** AI-assisted output ships at velocity, but nobody can fully verify or explain it — verification debt that looks like progress on the dashboard. End held badly: in Shape A, both ends invisibly; in Shape B, the producible middle flows but the **answerable back end is unheld**. Same kit reaches both — closing the gap *is* building owned capability. Default: **develop the faculty.** Persona: the team mid-non-adoption or the team mid-blind-adoption; either way, the AI-Gap is a maturity stage. Clay-experience anchor: your own moments of seeing each shape — the team that wouldn't move, and the team that moved without owning what it shipped.
 
**Research topics.**
- Adoption-blocker taxonomy for Shape A: evaluation paralysis, hype fatigue, tool churn, security-policy blockers, and what credible first-move pathways look like for a stalled team.
- Verification debt (Sonar) and the perception gap (the full METR 2025→2026 arc, the May 2026 survey) as the diagnostic symptoms of Shape B.
- The vibe-coding → structured-agentic-engineering progression: what each lacks and the bridge between them — covers both shapes' destinations.
- Spec-driven development as the gap-closer (Spec Kit; "specs as executable contracts") — and the self-spec substitution risk to police in Shape B.
- What "owned capability" means operationally: review capacity, mental models, the ability to say *why* code is wrong (leans on Streams B and D).
- DORA's AI Capabilities Model and "AI anoints elite organizations" — the gap is wider on weak foundations; especially load-bearing for Shape A teams evaluating whether to move at all.
- Automation complacency as the thing that *keeps* the Shape B gap invisible.
**Modules to produce.** A spec-driven-development onboarding module; a "can you verify what you shipped?" diagnostic (Shape B); an honest-evaluation first-move pathway (Shape A); a vibe-to-engineering progression ladder.
 
**Dimension pointers (Section 4 seed).** **Epistemic** and **Cognitive** — closing the gap with generated output trades raw speed for the standing burden of telling true from merely plausible; the dimension measures whether you can still make that call as the volume grows.
 
---
 
### 6. Prototype-to-Production Wall (PPW)
 
**Snapshot.** Dominant risk: an enthusiastic founder built it on Lovable, Base44, Replit, Bubble, or another no-code/low-code/AI-assisted tool — chose those tools specifically because they appeared to remove engineering time and cost from the equation — got traction, and is now hitting the wall between *"it works"* and *"it holds up."* Built it, looks amazing, scaling is not happening. End held badly: origination happened and the thing exists, but the **answerable back end was never required** by a prototype — security, reliability, real data, the non-functional registers. Default: **develop the faculty** on the non-functional surface; **borrow the frame** where the founder will rely on agents or specialists. Persona: technical or non-technical founder with a traction-bearing prototype that has to become a product. Clay-experience anchor: a prototype you carried across the wall and what broke first.
 
**Research topics.**
- What "production-ready" concretely means: the non-functional requirements a prototype skips (reliability, scale, data integrity, compliance, SLAs).
- The AI-generated-code security data in depth: Veracode (~45% OWASP Top 10), CodeRabbit (~2.7× more issues), Black Duck OSSRA (vulnerabilities up ~107% YoY), and the Claude Code Action prompt-injection pathway — agents expand the threat model even as they help.
- Observability as a *release requirement* (Microsoft's position): if you can't reconstruct a run from logs/traces, it isn't production-ready.
- The "luxuries now standard" set — IaC, CI/CD, granular security, real testing — researched as the answerable deliverables the wall demands (this is the densest overlap with Section 3).
- The prototype mindset vs. the production mindset as a cognitive shift, not just a checklist.
- A hardening definition-of-done that makes the answerable half explicit.
**Modules to produce.** A production-readiness hardening module; a security-for-AI-generated-code module (flagship of this audience); a prototype-vs-production mindset exercise.
 
**Dimension pointers (Section 4 seed).** **Ethical** — crossing the wall means answering, for the first time, in registers the prototype never had to: real user data, security, the consequences that land on people once the thing is live. The trade for "it ships" is accountability in registers you didn't previously owe.
 
---
 
## Module-to-audience mapping
 
A condensed view of the module library against the six situations. **●** = default (in this audience's starter collection); **○** = borrowable (commonly pulled in where it fits); blank = not typically needed.
 
**Five universal modules sit in every audience's default set** and are left out of the grid to keep it readable: the **Two Ends Diagnostic** and the **Operating Profile read** (Streams C and F, administered together as one intake), the **Relocation Lens** (Stream E), **You-Are-Infrastructure** (the condition seed from Section 1), and the **Can-vs-Should Gate** (origination, from Stream A).
 
Columns: **ITW** = Internal Talent Worth Developing · **SVD** = SaaS Vendor Dependency · **EDD** = External Dev Dependency · **LSD** = Legacy Software Debt · **AID** = AI Development Gap · **PPW** = Prototype-to-Production Wall.
 
| Module | ITW | SVD | EDD | LSD | AID | PPW |
|---|:--:|:--:|:--:|:--:|:--:|:--:|
| Founder Faculty (PMF / FMF / timing) | | ○ | ● | | ○ | ● |
| Build-vs-Buy & Dependency Economics | ○ | ● | ● | ○ | ○ | ○ |
| Minimum Frame to Stay Answerable | | ● | ● | ○ | ○ | ○ |
| Directing Technical Work (non-technical) | ○ | ● | ● | ○ | ○ | ● |
| Code Comprehension & Legacy Archaeology | ○ | ○ | ● | ● | ○ | |
| Characterization-Test-First | ○ | | ○ | ● | ○ | ● |
| Modernize-vs-Replace Decision | | ● | ○ | ● | | ○ |
| Spec-Driven Development | ● | ○ | ○ | ○ | ● | ● |
| Verification & Review Capacity | ● | ○ | ● | ● | ● | ● |
| Vibe-to-Engineering Ladder | ● | | | ○ | ● | ○ |
| Production-Readiness Hardening | ○ | ○ | ○ | ○ | ○ | ● |
| Security for AI-Generated Code | ○ | ○ | ○ | ○ | ● | ● |
| Inquiry-vs-Delegation | ● | ○ | ○ | ○ | ● | ○ |
| Develop-the-Faculty Teaching Protocol | ● | | ○ | ○ | ● | ○ |
| Manager's Sponsorship | ● | | ○ | | ○ | |
 
Reading down a column gives that audience's starter kit; reading across a row shows how portable a module is. Two things to note as the library hardens:
 
- **The most portable rows are promotion candidates.** Verification & Review Capacity and Spec-Driven Development are default or borrowable almost everywhere — they may belong with the universals rather than as audience modules. The most specialized (Manager's Sponsorship, Security for AI-Generated Code) stay anchored to their home audience.
- **The founder-faculty row is the one most sensitive to the persona overlay.** It's a *default* for a first-time founder and only a *borrow* for a repeat founder in the very same situation. Read its marks as "default if the person is a first-time founder, borrow if repeat" — the clearest place the persona overlay overrides the situation default.
---
 
## Suggested research sequence
 
You'll do these one at a time. Recommended order, and why:
 
1. **Cross-cutting Stream A (founder faculty)**, **Stream B (skill acquisition)**, and **Stream E (the relocation lens)** first. A and B feed the most audiences and define the develop-vs-borrow poles; E threads the tradeoff mindset through all six and should be in place before the per-situation passes, so each profile's dimension pointers already have a home. Everything downstream reuses them.
2. **Internal Talent (#1)** next — the purest *develop-the-faculty* exemplar. Researching it fully calibrates the "transfer" end of the spectrum.
3. **SaaS Vendor Dependency (#2)** next — the purest *borrow-the-frame* exemplar, the opposite pole. With both poles done, the remaining four interpolate.
4. **AI Development Gap (#5)** and **Prototype-to-Production Wall (#6)** — they have the richest existing evidence base in your Section 3 doc, so they're fast, and they're the most common entry points.
5. **Legacy Software Debt (#4)** and **External Dev Dependency (#3)** last — they lean heavily on code-comprehension and review-capacity research (Stream D), which the earlier passes will have already developed.
Streams C and D can be folded into whichever pass first needs them rather than done standalone. **Stream F (operating profile) pairs with Stream C** as one intake, and is worth having in hand before the teaching-heavy passes (ITW, AID), where delivery calibration matters most.
 
---
 
## Open questions to resolve as you go
 
1. **Personas vs. situations** — confirm the spine choice above before the module library hardens around it.
2. **How much of the module ↔ agent-skill pairing is visible to the reader** vs. kept as internal authoring structure (carried over from the working outline's open decisions).
3. **Whether the founder faculty (Stream A) becomes its own audience-adjacent track** or stays a borrowable module set — first-time founders may need it as a full default collection, not a borrow.
4. **Where "review capacity as condition" (Stream D) lives** — Section 2 as an audience trait, or Section 3 as an ADLC constraint, or both.
5. **How much psychometric apparatus the operating profile (Stream F) carries** — a light functional read administered with the intake, or a more formal instrument, and how far its baselines feed the Section 4 dashboard thresholds. Keep it functional (instrument the constraint) rather than categorical (type the person), per the stream's methodological spine.
