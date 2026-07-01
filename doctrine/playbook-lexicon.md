# The Viable Coder Lexicon
 
*A working dictionary of the terms and concepts that are unique to the playbook — or that the playbook repurposes with a specific meaning. Built to be expanded.*
 
**How to read an entry.** Each gives the meaning and, where the term is a contrast, *what it's compared with* (the playbook's vocabulary is full of deliberate pairs). Where a term has two registers — the authoring name and the plain builder-facing phrase — both are listed so they stay consistent across the corpus. Origin tags: **◆** = the playbook's own coinage, present it as ours; **◇** = an industry term the playbook borrows and points at its own purpose (credit the source).
 
---
 
## The spine (runs through every unit)
 
**The wager / the stake asymmetry ◆** — The single claim the whole kit rests on: *you bear all the risk; the machine bears none.* Everything else is that asymmetry worked out in practice.
 
**Becoming Viable / Remaining Viable ◆** — The two horizons the site is named for. *Becoming* is the asymmetry on the short clock — convert the AI opportunity into owned capability now, without missteps that cost more than they ever have. *Remaining* is the same asymmetry on the long clock — never stop asking what is under threat across a career. *Compared with each other:* not two activities in sequence — **one stance held at two horizons.** The faculties that win the opportunity are the same ones you keep in form to hold it.
 
**One stance, two clocks ◆** — The shorthand for the Becoming/Remaining relationship: a single instrument (you) pointed at this build (short clock) and kept fit across every build (long clock).
 
**Vigilance is the opportunity's bodyguard ◆** — Why you instrument and maintain yourself: not caution, but because you finally have something rare to win and you are the component most likely to lose it. Seriousness about the builder reads as pride in a system you intend to keep winning with.
 
**Viable coding / "from vibe coding to viable coding" ◆** — The positioning. The move from AI-assisted *vibe coding* (◇, see below) to durable AI-native product ownership.
 
**Seed → bloom → harvest ◆** — How the kit curriculum teaches. Each idea is *planted* light in Unit 1, *bloomed* in context in the unit where the builder is actually doing the thing it governs, and *harvested* as measurable data in Unit 4. The builder meets each concept exactly when they need it, never as an upfront lecture.

**Reader-orientation pattern / Scene -> Tension -> Distinction -> Tool -> Return ◆** — The unit-, lesson-, and module-level teaching rhythm inside *seed -> bloom -> harvest*. A major unit's root `unit.md` opens from a concrete human situation, story, allegory, or builder scene, names the pressure that makes it matter, introduces the Viable Coder distinction that clarifies it, gives the builder a usable move, and hands the builder into the lesson sequence with changed understanding. *Compared with:* explanation order. The kit curriculum should usually teach in felt-need order, not by defining concepts before the builder knows why they matter.

**Unit / Lesson ◆** — The kit curriculum's two educational containers. A **unit** is one of the four canonical kit moments: Install, Configure, Use, Watch. A **lesson** is a discrete teaching and exercise experience inside a unit. Use these terms instead of *section* and *chapter* for current Viable Coder curriculum work. *Compared with:* modules, which are configurable audience-specific building blocks rather than the linear learning sequence.

**Lesson bundle ◆** — The app-renderable container for one lesson. A lesson bundle may contain teaching prose, vocabulary, an exercise, a kit action, expected artifacts, and signals. The bundle keeps the curriculum from becoming prose-only: every lesson can declare what the builder learns, what the builder does, what the kit does, what artifact remains, and what can later be read. *Canonical template:* `curriculum/templates/lesson-bundle/`.

**Lesson prose ◆** — The teaching content of a lesson: scene, tension, distinction, tool, and return. Lesson prose carries Clay's voice and the felt-need order. It is not the same thing as the whole lesson bundle.

**Lesson vocabulary / Vocabulary surface ◆** — The terms a builder needs at the point of use. Vocabulary is canonical in this lexicon, but builder-facing definitions should appear inside the kit where the builder meets the term. *Rule:* define a term when the builder needs it to operate the kit, not as an upfront terminology dump.

**Exercise ◆** — The builder's assigned work inside a lesson. An exercise asks the builder to make a decision, configure something, run a gate, inspect a signal, revise an artifact, or practice a move. *Compared with:* a kit action, which is what the app or harness does in support of the lesson.

**Kit action ◆** — The specific behavior the private kit app or AI-coding harness performs for a lesson: prompt for input, run an intake, configure an agent, apply a Skill register, open a gate, collect telemetry, render a dashboard, create a file, or record an event. *Compared with:* the exercise, which is the builder's work; and the artifact, which is what remains after the work.

**Artifact ◆** — A durable output created or changed by a lesson: a written why-now statement, PRD, issue, residual-risk statement, routing policy, review checklist, telemetry baseline, dashboard configuration, or similar object. Artifacts are how the kit prevents learning from evaporating into agreement.

**Lesson signal ◆** — A measurement or reading associated with a lesson. Some signals are collected immediately as kit telemetry; some are planted for Unit 4 to read later. A lesson signal should say what behavior is read, where it is read from, and whether it is Auto or Asked when that distinction matters.

---

## The kit (delivery, not metaphor)

**The playbook is a kit app ◆** — The playbook is delivered as a **private kit app**, not as a book: integrated units, lessons, exercises, working agents, configuration surfaces, telemetry, and dashboards the builder installs in Unit 1, configures to their situation in Unit 2, runs as their day-to-day harness through Unit 3, and reads as a longitudinal dashboard in Unit 4. *Builder-facing:* "the kit." *Compared with:* a book or static course that leaves the builder with concepts in one place and the working harness somewhere else; the kit teaches and operates in the same environment. *Canonical design surface:* `ai/viable-coder-kit-concept-manifest.md`.

**Install / Configure / Use / Watch ◆** — The four canonical kit-moment names, one per unit. *Install* (Unit 1), *Configure* (Unit 2), *Use* (Unit 3), *Watch* (Unit 4). Used in **pair form** alongside the conceptual unit titles: **Unit 1 — Install: Knowing Who Does What. Unit 2 — Configure: Finding Your Situation. Unit 3 — Use: Running the Day-to-Day. Unit 4 — Watch: Playing the Long Game.** *The split:* the verb anchors what the builder does *with the kit*; the conceptual title anchors what the curriculum *teaches them about*. *Builder-facing:* the four words function as the unit spine across lesson content, marketing, and onboarding. *Stand-alone form:* "Install. Configure. Use. Watch." — usable as a marketing line and as the closing summary of any unit recap, where the four verbs alone do the work. *Compared with:* using the conceptual titles alone — readable, but it leaves the kit moments unnamed. *Canonical source:* `ai/viable-coder-kit-concept-manifest.md` §2.

**The airframe metaphor ◆** — Legacy metaphor for explaining what a $495 kit is and is not: the curriculum gives build instructions; the app is the airframe; the builder assembles, adapts, owns, and flies their own judgment infrastructure. Use sparingly now that the delivery model is a private app rather than a book plus reference application.

**Same doctrine, two paths ◆** — The kit is what Clay uses in every mentorship engagement. It is also sold separately at $495 for builders who prefer to work from it alone. *Compared:* mentorship ($4,000/month, quarterly billing, 3–5 engagements at a time, per `website/public/mentorship.html`) includes weekly sessions, between-session access, community, and handoff; the self-directed tier is same kit, no Clay. The cost difference reflects access to the person, not access to the artifact.

**Founder judgement / Engineering judgement ◆** — The dual-judgement value the kit embodies. *Founder judgement* is the *can build vs. should build* gate, at origination — what the agent cannot decide for you, because the definition of *worth* came from you. *Engineering judgement* is the *won't scale vs. will scale* gate, across the day-to-day — what the prototype-to-production wall exposes when it is skipped. The builder is not told about the gates and asked to honor them on their own work; the builder passes through them on the kit itself as they install, configure, and adapt it. *Builder-facing source:* `doctrine/voice/linkedin-builders-journey-ai-coding.md`.

**Doctrine–code coupling ◆** — Once the kit ships, doctrine and code are joined. A doctrinal claim the kit cannot operationalize is a doctrinal claim not yet ready to ratify. Refining the nine dimensions, the ADLC gates, the audience model, the maintenance trilogy, or the signal set implies a kit revision. *Compared with:* doctrine changes the kit does not have to track — voice, lexicon refinements that do not change behavior, narrative reorderings within a unit. See the concept manifest §5 for the coupling contract.

**Structural honesty (of the kit's signals) ◆** — The kit's signal set's hardest design problem and primary moat: the kit reads behavior, not opinion; the only path to a good number must be doing the work the number measures. *Compared with:* introspective wellness scores, self-rated focus, periodic check-ins answered by the builder about themselves — mirrors with databases behind them, deliberately excluded. *Builder-facing analogue:* the same *instrument-don't-introspect* doctrine from `observability.md`, applied to the kit's design.

**Kit-defeat posture ◆** — The kit's stated stance on the builder's ability to disable its honesty: defaults are honest; defeats are visible (logged); the builder is told this directly during install; the kit does not lock the builder out. *Doctrine:* origination at the front, accountability at the back, the kit in the middle. *Why it matters:* Lesson 5's whole point is that the operator most motivated to fudge the reading is the builder; the kit's design must make the disabling itself a logged event, not a hidden setting, or it inherits the original disease.

---

## The two intelligences & the two ends (the geometry)
 
**Organic Intelligence (OI) / Artificial Intelligence (AI) ◆** — You vs. the machine. *OI:* alive, finite in time, consequences land on real people, can care, answers for the outcome. *AI:* tireless and consistent, decides *how* but never *why*, bears no risk, cannot care. *Compared:* the smart move isn't you-vs-the-machine; it's giving each side the half it's built for.
 
**The two ends ◆** — The load-bearing geometry of the kit: **origination at the front, answerability at the back**, with the agent owning everything in between. The human holds both ends; they never transfer. *Related (in-flight):* the ends are held across the middle by **steering** (below) — not a third job, but the active form of holding the two ends while the agent's column runs.
 
**Origination** — The front job: picking the right thing to build — the *why*, the framing. *Builder-facing:* "you start the work."
 
**Answerability / Accountability** — The back job: standing behind the result when it ships and something breaks. *Builder-facing:* "you answer for the work."
 
**The producible middle** — Everything between the two ends; the work the agent takes. *Builder-facing:* "the AI takes everything in between." *Related:* **gating the middle** — the human checkpoints every producible deliverable the agent makes. *The middle is the agent's column; the human is not absent from it — see* steering *and* work-observability.
 
**Steering ◆** — The in-flight motion that connects origination to answerability: reading the agent's reasoning as it produces, redirecting when the trajectory drifts off the *why-now*, interrupting when the path turns into one you can't stand behind. **Not a third job.** Origination and answerability remain the two jobs; steering is what holding them looks like *while the work is running.* *Builder-facing:* "you steer through the middle." *Compared with:* gating the middle (checkpoint at the column boundary); steering is the *in-flight* form, gating is the boundary form. *Where it lives:* `doctrine/steering.md` is canonical; operationalized in Unit 3 Lesson 4; configured by Lesson 5's produce-and-explain register; read on the long clock by Unit 4 as reframe-vs-accept, override rate, and self-spec incidence.
 
**Work-observability / observability of the middle ◆** — The structural precondition for steering: the agent's reasoning, choices, and trajectory have to emit signals the human can read **as the work runs**, not only when the artifact lands. The same instrument-don't-introspect doctrine from `observability.md`, applied at a second scale — the work-system rather than the self. *Compared with:* a polished post-hoc reasoning summary (observability theater — the explanation the agent would write *if* it had decided that way, attached to the choice it actually made). *Doctrine:* opacity in the middle is now a configuration choice, not a property of the work; rubber-stamp at the back is what the wrong choice produces.
 
**The interrupt as steering primitive ◆** — The minimum viable steering action: stopping an agent mid-flight to redirect. Present in every major coding agent today (Claude Code, Cursor, Codex, Cline) — the primitive on which more elaborate steering disciplines (read-the-transcript-as-it-runs, configure-explain-by-default, deliberate-interrupt-as-calibration) are built. *Builder-facing:* "the interrupt key." *Doctrine:* the interrupt is delegable as a primitive; deciding when to press it is not.
 
**Observability theater ◆** — Reasoning shown after the choice, not as it was made: the polished summary attached to the decision the agent actually reached, indistinguishable from a real explanation but useless for steering. Fails the *answer-lives-outside-your-head* test the same way self-observability theater fails the *am-I-rested?* test. *Compared with:* produce-and-explain in the agent's *output stream*, where the reasoning runs alongside the producing.
 
**The three scales of observability ◆** — One principle, three faces: **self-observability** (the human reads themselves — `observability.md`), **work-observability of the middle** (the human reads the agent in flight — `steering.md`), and the **work-system reads the human** (the board's trailing signals, Unit 3 Lesson 6). All three are supported by the same substrate — *one place the work lives* — and all three replace introspection with instrumentation. *Compared with:* a three-tier observability stack (rejected — the three are the same doctrine at three scales, not a layered architecture).
 
**The producible / answerable split ◆** — Each of *think, decide, create* divides into a producible half the agent can take and an answerable half that cannot be handed off. Doubles as the diagnostic that sorts the audiences (Unit 2).
 
**Think / Decide / Create ◆** — The three places the split shows up while you work. *Think:* the agent explores; you own the framing. *Decide:* the agent recommends; you own the consequences. *Create:* the agent generates; you judge whether it's *right*, not just whether it *works*.
 
**"Did I choose this, or did it choose me?" ◆** — The first test question of the kit; origination made operational. Later pointed at dependencies too (see *Trade up to a dependency worth holding*).
 
**The can-vs-should gate ◆** — Separating what you *can* build from what you *should*; origination as an explicit checkpoint before any build. The operational form of the question above.
 
---
 
## The human as instrument (condition — planted in Unit 1, bloomed in Unit 3)
 
**You are the instrument / You are the infrastructure ◆** — Treat yourself like a system you'd never run on broken hardware. *Builder-facing:* "You are the infrastructure." Stated as a fact about leverage, not a warning.
 
**Condition ◆** — Your day-to-day state as it bears on the calls only you can make.
 
**Condition is the binding constraint (time → condition) ◆** — With the agent consistent and the volume gone, your condition flows almost undiluted into the handful of judgment-dense calls that decide everything. *Compared:* time was the startup's scarce input; now condition is.
 
**Weather / Climate ◆** — Two layers of the instrument's state. *Weather:* the day-to-day variance you instrument because it lies (a bad night). *Climate:* your stable configuration — how you're wired. *Compared:* the same bad night degrades two different climates differently; condition/observability read the weather, the Operating Profile reads the climate.
 
**Self-report lies; instrument the trailing signal ◆** — The gauge inside degrades together with the faculty that would read it, so the only honest reading is the trailing one, taken off your behavior over time — never in-the-moment introspection.
 
**The drunk-driver problem ◆** — The impairment and your read on the impairment fail together: a tired mind reports it's sharp, a frightened mind reports it's being prudent. So in-the-moment self-assessment is the one tool you can't trust at the moment you'd reach for it.
 
**Observability / readings you can't fake ◆** — What a good self-check looks like: the answer lives *outside your head*, you ask it *on a schedule* (not mid-decision), and it targets *your specific failure*, not the generic dimension. *Dishonest vs. honest:* "Am I rested?" vs. "How many changes did I wave through last week without really reading them?" *Same doctrine, two siblings at adjacent scales:* **work-observability** (the human reads the *agent* in flight — see *steering*) and the **work-system reading the human** (Unit 3 Lesson 6 — the board's trailing signals). All three scales are doctrine together; see **the three scales of observability**.
 
**The dashboard / self-dashboard ◆** — The instrument pointed at the builder, not just the build: the trailing telemetry of your own state. Built properly in Unit 3; the same instrument the nine dimensions read at career scale.
 
**The watchdog / the coffee cup / the page ◆** — An agent-run pager that reads your trailing telemetry and interrupts the productive trance — "a coffee cup on the dash," ported to the one system that never had a drowsy-driver alert. *The knife-edge:* the page is delegable; the heeding is not. The agent can sound the alarm; only you can pull over. *(Unit 4 ports this to the long clock: an agent that watches the trend lines and flags one bending the wrong way long enough to matter.)*
 
**Upkeep ◆** — Maintaining the faculties the dashboard measures. Four moves: *externalize the frame before you prompt; protect the dense calls; keep the muscle you actually need in use; make the store double as the dashboard* (offload the lookup, not the judgment).
 
**Externalize the frame before you prompt ◆** — Write the *why* down where the agent's first suggestion can't quietly overwrite it. Paired with **notice one number** — count how many of the agent's outputs you accepted without really reading — as the *first-build rung*: the self-instrument simple enough for build #1.
 
**The five dimensions of condition ◆** — The dials that move your state, each tied to a real way work goes wrong: *Cognitive, Emotional, Financial, Physical, Spiritual.* *Builder-facing:* sleep, focus, mood, drive, money. *(Distinct from the nine viability dimensions of Unit 4 — these are about today's state, those about a career's trajectory.)*
 
---
 
## The audience system (Unit 2)
 
**Develop the faculty / Borrow the frame ◆** — The sharpest tool in the unit. *Develop:* build the end into a real, owned capability. *Borrow:* take just enough frame to stay answerable for a call you will never author. *Builder-facing:* **"Build it, or Borrow It."** *Calibrates downstream:* sets how aggressively Unit 3's teaching agents transfer (fully, vs. just enough frame).
 
**The intake ◆** — The short read that routes a person. Two halves administered together: the **Two Ends Diagnostic** (content) and the **Operating Profile** (wiring). *Builder-facing:* "the check that points you to your spot."
 
**The Two Ends Diagnostic ◆** — The content half of the intake: reads *which end you hold badly* — origination at the front or answerability at the back — off behavior, not self-rating.
 
**The Operating Profile ◆** — The wiring half of the intake: reads your *climate* and tunes delivery (pacing, scaffolding, novelty, how hard to externalize the frame). Functional, not categorical — **instrument the constraint, don't type the person.** Changes how a module is delivered, never what it contains. *(Unit 4 reuse: the climate read captured here is the zero-point each long-term trend is later scored against.)*
 
**Route, not a grade ◆** — The intake's discipline: its output points you to a situation and a starter kit; it never stamps a level on you, and you re-take it as you change. *Compared with:* a maturity ladder (rejected — profile-routing over tiers).
 
**The composition rule ◆** — The organizing logic of Unit 2: *situation picks the module set; persona sets develop-vs-borrow; wiring tunes the delivery.*
 
**A module ◆** — The interchangeable building block: a unit of *guidance + an exercise + the agent skill it pairs with* in Unit 3.
 
**The module library ◆** — The full set of modules, assembled into kits.
 
**Default collection / Borrowable modules ◆** — Each situation hands the builder a *default* starter set; any builder can *borrow* a module from another situation where it fits. *Builder-facing:* "your kit isn't a cage."
 
**The universals ◆** — The modules in every default set, because they protect the two jobs regardless of situation: the can-vs-should gate, you-are-infrastructure, the relocation lens, the intake itself — plus the two near-universal promotion candidates, *review capacity* and *say what "right" means first*.
 
**The six situations ◆** — The canonical audience types (authoring name / builder-facing name):
1. *Internal Talent Worth Developing* — "you've got people worth growing"
2. *SaaS Vendor Dependency* — "you're renting what you could own"
3. *External Dev Dependency* — "someone else builds your software"
4. *Legacy Software Debt* — "you inherited a mess you're scared to touch"
5. *AI Development Gap* — "your team ships what it can't explain"
6. *Prototype-to-Production Wall* — "your demo has to become a real product"
**The relocation lens / every escape is a trade ◆** — No move sheds risk; it relocates it. Escaping a dependency was never the goal; *choosing which dependency is worth holding* is — origination pointed at the dependency itself.
 
**The relocation ledger (Shed / Adopted) ◆** — The two-column discipline for any trade: book what's leaving (*Shed*) and what's arriving (*Adopted*). Force the Adopted column open — it's the one founders leave empty. *(Books eight of the nine Unit 4 dimensions; Vocational is the deliberate exception — see* harvest-forward axis*.)*
 
**Trade up to a dependency worth holding ◆** — The can-vs-should gate aimed at the dependency: *Did I choose this dependency, or did it choose me?* Own the differentiator; rent the commodity.
 
**The residual-risk statement ◆** — One sentence naming the risk you are *now choosing to hold* and why it's acceptable. The artifact that converts a hidden cost into a chosen one.
 
---
 
## The process (Unit 3 — the Agent Development Life Cycle)
 
**ADLC (Agent Development Life Cycle) / SDLC ◇→◆** — The traditional Software Development Life Cycle (◇) re-staffed by a team of agents, project-managed through one system of record, producing every deliverable a full human team once produced — *with the human holding the two ends and gating the middle.* The "Clay-style" reference architecture.
 
**The Iron Triangle dissolves ◇→◆** — The classic *scope / time / cost* triangle (◇). Time was the startup's binding constraint and rigid process its luxury; with AI in every phase, time is no longer scarce — so PRDs, real testing, proper infra, granular security, consistent CI/CD, and maintained docs become *standard practice for startups*, not just late-stage companies. *The constraint that replaces time is condition.*
 
**The loop ◆** — Origination → producible middle → answerable back, walked as one cycle so the builder has the shape before the phases.
 
**Relay race → continuous agent-driven flow ◇** — The structural shift named across the agentic-SDLC literature: from a relay race where context leaks at each human handoff (dev → architect → QA → ops) to a continuous flow where agents pursue multi-step goals across phases, under human oversight *at the ends.*
 
**The system of record ◆** — The single auditable place the whole lifecycle runs through (GitHub repo + Issues + Projects, or the Atlassian equivalent). *"The backlog is the project plan."* Crucially: **the same artifact that runs the work measures the human running it** — the board emits the trailing signals (reframes vs. accepts, review depth, the origination ratio) and can't be faked. The bridge from Unit 3's pipeline to Unit 4's inquiry. *Also the substrate for all three scales of observability* — self (the dashboard the human builds for themselves), middle (the in-flight readings the human takes off the agent's reasoning so they can steer), and work-system-reads-human (the board's trailing record of how the human held the work). One substrate, three readings off it.
 
**Teaching agents ◆** — Agents pointed at the human. An agent may *transfer* a faculty or frame back to its human counterpart; it must never *substitute* for it.
 
**Transfer / Substitution ◆** — The knife-edge of every teaching agent. *Transfer* builds the human up to hold the end; *substitution* deepens abdication. The same line as the watchdog's: the same agent that teaches can deepen abdication if built to substitute.
 
**Produce / produce-and-explain ◆** — Two ways to write an agent Skill. *Produce:* hand over the deliverable. *Produce-and-explain:* narrate *why* it made each choice, the way a senior engineer narrates to a junior. Same Skill, tuned for the audience — transfer or substitution. *Doubles as the primary steering instrument:* produce-and-explain is what makes the middle observable in flight, so the human can steer rather than only review at the gate (see *steering*, *work-observability*). The register choice is therefore two decisions in one — what the work does *to the human* (sharpen vs. hollow) and what the human can *do to the work* in flight (steer vs. wait).
 
**Vibe coding / structured agentic engineering ◇→◆** — *Vibe coding* (◇, Garry Tan / YC, 2025): prompting your way to working code. The playbook's progression points it forward to *structured agentic engineering* — disciplined, agent-run, with owned capability behind the output. *Doctrine:* tooling without owned capability is hollow.
 
**Right-sized models / right-sized routing ◆** — The cost-and-sovereignty discipline that refuses the agent's default of reaching for the frontier model on every task. *Builder-facing:* "use the right-sized model for the job." The shop's twin to *steering:* steering refuses the agent's default of opacity in the middle; right-sized routing refuses the agent's default of frontier-on-every-task. Both are explicit structural disciplines configured at the shop, not left for the agent to decide on the practitioner's behalf. *Where it lives:* `doctrine/right-sized-models.md` is canonical; operationalized in Unit 3 Lesson 5; read on the long clock by Unit 4 (Economic dimension 3.8 primarily; Ethical dimension 3.9 on the concentration-of-power register).
 
**Classifier ◆** — A small, fast model whose only job is to read the *complexity* of the incoming task and emit a routing decision. Runs cheap because reading complexity is not what frontier capability is for. *Builder-facing:* "the thing that decides which model gets this one." *Structural twin:* the produce-and-explain register exposes the agent's reasoning so the human can steer; the classifier exposes the work's complexity so the router can size the model. *Failure mode:* a classifier that down-routes work it didn't understand has stepped onto the practitioner's side of the line, the same way the *self-spec* agent does at G2 — policed by the *override-up rate* signal (Auto).
 
**Router ◆** — The component that takes the classifier's recommendation and assigns the task to a model in the practitioner's configured fleet — frontier when the work needs it, mid-tier when it's between, small / open-source / self-hosted when the work is bounded. The router is also the seam where the practitioner's *policy* lives: explicit rules that override the classifier when stakes or cost warrant. *Builder-facing:* "the thing that hands the task to the right-sized model."
 
**Default escalation ◆** — The failure mode the right-sized-routing discipline meets. The agent reaches up the model stack without being told to, because the harness was never configured to do otherwise. *Twin to:* origination by drift (G1) and review by rubber-stamp (G7) — same shape, same feels-like-progress signature, same fix (explicit structural policy). *Builder-facing:* "frontier-on-every-task by default." *Detected by:* flat *frontier-share of output* with no override-down activity; rising *rate-limit incidence;* a token bill whose trajectory tracks volume rather than complexity.
 
**Open-source / self-hosted as a first-class option ◆** — The dependency stance under right-sized routing. The third primitive after classifier and router: a wider model stack that includes open-source, self-hosted, and locally-served models for the work that doesn't need closed-source frontier capability. *Doing two jobs at once:* cost control AND the *concentration-of-power* register from the Unit 4 Ethical dimension (decision power pooling inside three or four labs). Same primitive, two registers. *Builder-facing:* "the model you can run yourself, when the job allows it."
 
**Frontier-share of output ◆** — A trailing signal: the fraction of the practitioner's output that ran on closed-source frontier models versus mid-tier or open-source. Reads the dependency-concentration directly; pairs with the Ethical dimension on the long clock. *Compared with:* raw token-cost-per-unit-of-output — frontier-share reads dependency posture; cost-per-unit reads economics.
 
**Review capacity as condition ◆** — The ability to stand behind work you didn't author, treated as a form of condition. Has a *climate* half (the owned situation model — slow, unborrowable) and a *weather* half (finite attention that depletes within the hour). The genuinely novel framing here is the climate/weather split applied to review.
 
**Verification debt ◇** — Werner Vogels (AWS, 2025): when you author code, comprehension is free; when a machine authors it, you pay for that comprehension at review time. The cause that *review capacity as condition* is the response to.
 
**The "Ready" gate ◇** — The lifecycle checkpoint where work must meet the answerable bar before it advances; where batch-size and review-WIP limits are enforced.
 
---
 
## The long game (Unit 4 — *Remaining Viable*, "Playing the Long Game")
 
**The long clock / the second clock ◆** — The years-long horizon Unit 4 reads, the operational face of *one stance, two clocks*. *Becoming* runs on the short clock (this build); *Remaining* on the long clock (every build after). *Compared:* every short-clock reading flatters — a shipped feature, a happy client — and tells you nothing about whether the slow things (judgment, edge, your reasons for doing this) are gaining or quietly draining. Same instrument, longer clock; the second clock is the one almost nobody is watching.
 
**The three families ◆** — The structure over the nine dimensions; the nine sort 4 / 3 / 2 into three families, each with a one-line question:
- *Practitioner (4)* — **is the person still intact?** (Cognitive, Epistemic, Vocational, Identity)
- *Practice (3)* — **is what I sell still worth selling?** (Differential, Judgment, Temporal)
- *Conditions (2)* — **is the ground still ground?** (Economic, Ethical)
**The nine dimensions of long-term viability ◆** — The axes along which you ask *what is under threat*, each a trend read over time, never a snapshot — the same instrument as the personal dashboard, read over a career. Canonical guiding questions (reconciled to the live `remaining-viable.html`, treated as authoritative):
1. *Cognitive* — am I getting sharper, or going dull? (is my cognitive system still intact?)
2. *Epistemic* — do I still know what I know? (do I actually understand what I shipped?)
3. *Vocational* — does this still feel like work I want to do?
4. *Identity* — what is my value in this arrangement? (when the machine builds it, what's still mine?)
5. *Differential* — when everyone can do this, what's the value of *me* doing it?
6. *Judgment* — what happens when the models exercise the judgment I sell?
7. *Temporal* — does the time I save actually accrue to me?
8. *Economic* — will what's profitable today stay profitable tomorrow?
9. *Ethical* — is what I'm doing defensible to everyone downstream?
*Reconciliation note:* from earlier drafts, **Vocational and Identity traded emphasis** (Vocational is now "does this still feel like work I want to do"; Identity is now "what is my value in this arrangement"), and **Epistemic moved** from "tell true from merely plausible" toward "do I still understand what I shipped." The live pages are canonical; the full per-dimension signal tables live there and on the site, not in the printed edition.
 
**Trend questions, not snapshots ◆** — The dimensions are trailing readings taken over time, not point-in-time self-assessments — because self-report lies at the moment you need it, in one head or across a population.
 
**Read against your own baseline / the idiographic principle ◇→◆** — Every signal is scored as drift from the person's *own* established normal, never against a population norm. The Operating Profile's climate read (Unit 2 intake) is the zero-point each trend is later scored against. *Why:* a novelty-driven originator's healthy numbers look alarming on a generic chart and fine against his own baseline. The career-scale extension of weather/climate — a bad day is weather (ignored); a line bending wrong for two quarters is climate (worth changing course over).
 
**Auto / Asked ◆** — The two signal labels, each carrying a cadence. *Auto:* taken off your digital footprint without your intervention — it cannot be flattered, because you're not the one reading it. *Asked:* the residue that genuinely needs a human voice, given in the lightest form the question allows, then **folded back into the footprint and trended like everything else.** *The repurposing that matters:* an Asked answer is **not** trusted self-report — it's self-report converted into a tracked artifact. *Builder-facing:* "automatic" and "asked." *Doctrine:* prefer Auto wherever a behavioral trace exists; fall back to Asked only where the question needs a human voice.
 
**Cadence ◆** — How often a signal is read: *Per Session, Weekly, Monthly, Quarterly, Per Release, Annual.* Slow questions get slow answers by design — an annual question deserves an annual answer; you don't take a career's temperature hourly.
 
**The digital footprint ◆** — The behavioral trace the Auto signals read off: agent transcripts, repositories and git history, calendar and time data, billing, public bios and bylines, provider pricing pages, field publications. The thing that lets even the soft dimensions be read without sliding back into trusted self-report.
 
**Agent transcript ◇→◆** — The back-and-forth between the practitioner and the AI tools they use, captured the way a recorded meeting yields a transcript for analysis. The richest single source in the footprint — where the origination ratio, the reframe-vs-accept rate, and the self-vs-AI reasoning split are read.
 
**The trailing signal ◆** — The honest reading, taken off the human/agent interaction over time: reframes vs. accepts, overrides that fired, the origination ratio drifting.
 
**Origination ratio ◆** — A trailing signal: the share of work the human *originated* vs. work the agent surfaced and the human merely approved. No off-the-shelf tool measures it — present it as the playbook's own.
 
**Reframe-vs-accept rate ◆** — A trailing signal: how often the human reframes the agent's output vs. accepts it as given.
 
**The honesty ceiling ◆** — The guardrail stated up front so the inquiry never has to apologize later: this is *a disciplined way to read yourself against your own past, plus a small public inquiry — not a validated psychometric battery.* It tells you which way you're drifting; it does not stamp a number on your worth, and it does not claim a validated idiographic factor model. *Held wherever the model is summarized* — load-bearing for the whole *Remaining Viable* credibility claim.
 
**One instrument, two directions ◆** — The self-study framing: **Clay is the subject**, not the author of a framework aimed at someone else. The readings that sharpen his own practice are the ones he publishes. *The page's line:* "Not a dashboard. Not branding. I am running these measurements on myself." *(Distinct from* Two scales, one instrument*, below — that pair is about person vs. population; this one is about private use vs. public publication of the same readings.)*
 
**Two scales, one instrument ◆** — The personal dashboard (one person) and the public inquiry (a population) are the same measurement, built for the same reason: self-report fails the same way in a crowd as in one head — everyone reports they're fine. *The two scales:* Clay as primary subject (always), and an optional opt-in cohort (currently n=4) that makes the picture richer and less lonely than one person staring at his own charts.
 
**Research / Data (the two surfaces) ◆** — Where the inquiry is published. *Research* names what's worth measuring (essays from practice, curation, field signals — each piece tagged to one or more dimensions, published when ready not on a schedule); *Data* measures it (quarterly trend lines on the same nine, methodology versioned). *The page's line:* "Research moves at the speed of thought; Data moves at the speed of evidence."
 
**The firewall / the two decoupling rules ◆** — What keeps the inquiry from becoming a sales funnel: (1) **the mentorship and the inquiry are separate** — opting into the inquiry is never a condition of being mentored; (2) **the measurement surface is not a sales surface** — the Data page carries no call-to-action by design, *"because the measurement only works if it isn't also a sales surface."*
 
**Granular consent ◆** — The cohort's opt-in discipline: consent *by family and by signal*, not all-or-nothing; the most personal readings (the Vocational reflection journal) sit on a separate, optional track; never required to be mentored; withdrawable at any time, with a choice between anonymize-in-place or full removal. Mentee data never appears on the site's marketing surfaces.
 
**The standing commitment / pre-committed honesty statement ◆** — The published pledge that makes the Data surface worth reading — *"without it, what's above would be a vanity dashboard."* Its terms: unfavorable findings published at the same visibility as favorable ones; metrics locked with a PhD collaborator (AI Ethics) before they go public, so they can't be gamed after the fact; methodology changes versioned and visible. *(Status: the collaborator, the consent-instrument full text, and the per-dimension protocol documents are still pending — the commitment is published; the apparatus behind it is partly future-facing. Don't over-promise the cohort in the curriculum.)*
 
**Harvest-forward axis ◆** — A dimension the earlier units didn't seed, harvested mostly in Unit 4. **Vocational** is the one — no Unit 2 situation points to it, so the relocation ledger books only eight of the nine. The exception that proves the *seed → bloom → harvest* rule: most dimensions are planted earlier and come due here; this one is planted here, and most needs a Clay-experience anchor to carry it.
 
**Remaining feeds Becoming / the loop closes ◆** — How Unit 4 hands back to Unit 1. A bad long-clock reading becomes the next thing worth originating, turning the long clock back into a short-clock *why* — *Remaining viable* feeds straight into *becoming viable*, one build smarter than last time. The loop closes two ways: **inward** (a reading becomes the next build, back to *"Did I choose this, or did it choose me?"*) and **outward** (your private instrument can extend Clay's public one, via the cohort, if you choose).
 
---
 
*Living document. As terms are coined or sharpened, add them under the unit they live in, keep the authoring/builder-facing pair together, and tag origin (◆ ours / ◇ borrowed).*
