# Viable Coder Kit — Concept Manifest

*One page. Internal. This document decides nothing about implementation; it forces the design problems to be visible before any code gets written and before any outline, narrative, or doctrine file is rewritten to match.*

---

## 1. What the kit is

The kit is the $495 deliverable: a private website/application the builder installs, adapts, and runs as their own AI-coding harness. The curriculum lives inside that application as units and lesson bundles: teaching content, vocabulary, exercises, kit actions, artifacts, signals, working agents, configuration surfaces, and dashboards. The builder does not read doctrine in one place and operate the harness somewhere else. They install the kit on day one, learn inside it, instrument their own work with it, configure it to their situation in Unit 2, run it as their day-to-day harness through Unit 3, and read its longitudinal data in Unit 4.

**Same doctrine, two paths.** The kit is what Clay uses in every mentorship engagement. It is sold separately, at $495, for the builder who prefers to work from it alone. The mentorship page (`website/public/mentorship.html`) names the relationship plainly: weekly working sessions, between-session access, community, and handoff at $4,000/month — *or* the same private kit app, on the builder's own schedule. The cost difference reflects access to Clay, not access to the doctrine.

**The dual-judgement value the kit embodies.** Clay's stated value is the combination of **founder judgement** (the *should I build it* gate) at origination, and **engineering judgement** (the *will it scale* gate) across the day-to-day. The builder is not told about the two gates and asked to honor them on their own work. The builder runs the gates on the kit, on day one, and keeps running them as they build with it. The *proportion* of founder versus engineering judgement the kit emphasizes is decided in Unit 2, by situation — the Internal Talent Worth Developing builder lives in a different mix than the Prototype-to-Production Wall builder, and the configured kit honors that. The lessons name the gates. The kit makes the builder pass through them in the mix their situation calls for.

**The third source of authority.** The kit also carries the binding layer named in `doctrine/voice/lived-answerability.md` — the personal life experience of owning consequences, of being wrong, of adjusting under pain. The kit reads the builder's behavior. What the builder does with what the kit shows them is where lived answerability is exercised. The kit does not deliver the formation; it preserves the conditions under which formation can still happen. That is the third reason the kit is more than a productivity harness, and the third reason the $495 is honest.

## 2. The four kit moments — Install. Configure. Use. Watch.

Each unit produces one of the four canonical kit moments. Unit titles use the **pair form** — verb first (what the builder does with the kit), conceptual title second (what the curriculum teaches them about) — across lesson content, harness instructions, and website.

- **Unit 1 — Install: Knowing Who Does What.** The first build is the kit. The builder gets acquainted with the source tree and private app, runs the included exercises against it, and begins emitting telemetry — every prompt, every accept, every reframe, every commit, every PR, every diff merge. Self-observability stops being argued and becomes a process running on the builder's own machine.
- **Unit 2 — Configure: Finding Your Situation.** The kit walks the builder through their situation and produces their configured modules, agents, skills, exercises, ADLC gates, and dashboard signals as outputs. The audience model becomes operative, not taxonomic.
- **Unit 3 — Use: Running the Day-to-Day.** The configured kit is the harness the builder runs against real work. ADLC gates fire; agents and skills do their assigned halves; review capacity is respected by configuration rather than by discipline; documentation and observability are produced as artifacts rather than prescribed as habits.
- **Unit 4 — Watch: Playing the Long Game.** The kit's accumulated database is the nine-dimensions dashboard. The longitudinal reading is rendered from real behavioral data, not from periodic self-rating.

## 3. The honesty-by-design signal set

This is the kit's hardest design problem and its primary moat. The kit's signals must be **structurally honest** — the only path to a good number is doing the work the number measures. Gameable signals are excluded by design.

Signals the kit reads from behavior:

- **Accept-without-read.** Time-on-diff before merge, keystrokes between agent output and accept, and similar behavioral proxies. The builder can game it by waiting; the design's job is to make the wait expensive without measuring the wait itself.
- **Origination ratio.** Prompts the builder composed cold versus prompts that were the agent's suggestion accepted verbatim. Captured at the moment of authorship, not after.
- **Reframe-versus-accept.** When the agent's first output is rejected, the fraction replaced by a substantially different framing the builder authored, versus a re-prompt that keeps the agent's framing and asks again.
- **Override-fired.** Decisions where the agent's recommendation was overridden, with the builder's reason captured at the moment of override, not retrospectively.
- **Financial tripwire breach.** Set in advance, when the builder can think straight; logged when crossed.
- **Condition-correlated incidents.** Behavioral lapses cross-referenced against the builder's stated condition at the time. Not for shaming. For the longitudinal pattern.

Signals the kit deliberately **does not** collect, because they cannot be made structurally honest in a self-installed kit: introspective wellness scores, self-rated focus, periodic check-ins answered by the builder about themselves. Those are mirrors with databases behind them. The kit reads behavior, not opinion.

## 4. The kit-defeat posture

The builder can defeat the kit. The whole point of the honesty posture is that the operator most motivated to fudge the reading is the builder. The kit's posture on this is stated up front, not hidden in a settings panel.

- **Defaults are honest.** Telemetry is on; the gameable settings are off; defeats require explicit, logged action.
- **Defeats are visible.** Disabling a signal, lowering a tripwire, deleting a log — each is itself a logged event in a record the builder cannot quietly purge.
- **The builder is told this directly.** The kit's onboarding includes a plain statement that disabling honesty makes the kit decorative, and that the choice to disable is the builder's to answer for. This is a doctrine moment, not a EULA.
- **The kit does not lock the builder out.** No DRM, no remote kill, no telemetry shipped off-machine. The builder owns the data, the keys, and the consequences. Origination at the front; accountability at the back; the kit in the middle.

## 5. The doctrine–code coupling contract

Once the kit ships, doctrine and code are joined. The contract names what that means.

- **Doctrine changes the kit must operationalize.** Changes to the nine dimensions, the ADLC gates, the audience model, the maintenance trilogy, the signal set. A doctrinal claim the kit cannot operationalize is a doctrinal claim that is not yet ready to ratify.
- **Doctrine changes the kit does not have to track.** Voice, lexicon refinements that do not change behavior, narrative reorderings within a unit.
- **Kit revisions trigger documentation.** Every change to the configured agents, skills, signals, or gates ships with a changelog entry the builder can read.
- **Forward compatibility.** The configuration the builder produces in Unit 2 must survive minor kit revisions. Breaking changes require a migration the kit performs, not the builder.

## 6. What $495 buys

A line that has to be true for the price to be honest.

The builder gets the private kit app, the integrated unit-and-lesson-bundle curriculum, the configured agents and skills for their situation, the exercises that produce real artifacts, a longitudinal dashboard rendered from their own behavioral data, and the updates that follow as the doctrine evolves. They are buying an artifact they could not assemble themselves from any number of free blog posts, because what is hard to do is hard to reproduce, and the hard part here is the structural-honesty design of the signals, the coupling discipline between doctrine and code, and the cost of the formation that produced the doctrine in the first place (see `doctrine/voice/lived-answerability.md`). They are not buying access to a service; they are buying a kit they own and run on their own machine.

**Relationship to mentorship.** The honest version of the price comparison lives on `website/public/mentorship.html`. Mentorship is $4,000 per month, quarterly billing, 3–5 engagements at a time, and it includes the weekly sessions, between-session access, community, and the handoff. Equity-in-lieu is the alternative mentorship arrangement for early-stage startups where cash hasn't caught up to the work. The $495 kit is the self-directed tier — same doctrine, same kit, no Clay. The cost difference reflects access to the person, not access to the artifact. The closing line of the LinkedIn post stands: AI makes building easy; the kit is part of what makes the builder viable.

## 7. Decisions resolved in this revision

Open questions from the prior draft, settled.

- **Audience scope.** The non-builder is in. People who arrive non-technical are seeking to become builders, and showing them how is the point. No separate SKU and no smaller doorway. Same kit; Unit 2's configuration meets the builder where they are and walks them forward.
- **Pricing tier structure.** Already answered on `website/public/mentorship.html`. Mentorship at $4,000/month is the upper tier; equity-in-lieu is the alternative for early-stage startups; the $495 kit is the self-directed tier. The doctrine and the kit are identical across tiers — the variable is access to Clay.
- **Harness stack.** Both Claude Code and Codex, as this repo already practices. The kit ships under the Harness Artifact Sync discipline already governing this repo (see `CLAUDE.md`), so a single change to a skill, agent, or instruction surface updates every active harness copy in the same change.
- **Teaching-agent posture.** There will be a teaching agent, or at minimum a set of skills, targeted by audience type from Unit 2. Specifics are deferred — the principle is settled: the kit explains its own configuration to the builder through agents and skills it ships with, not only through lesson prose.

## 8. Open decisions remaining

A shorter list, mostly mechanical, settled at build time.

- **Distribution mechanics.** Probably GitHub release. The choice between release, paid repo access, or packaged installer affects the kit-defeat posture and the doctrine–code coupling cadence; it is a build-time decision, not a doctrinal one.
- **Maintenance commitment window.** How long does $495 include updates? One year? Lifetime of a major version? Stated up front when the kit ships.
- **Exercise design.** All exercises — Unit 1's first-build moment, Unit 2's situation-discovery exercises, Unit 3's day-to-day exercises, Unit 4's longitudinal exercises — are defined later, against the configured kit.

## 9. Content, organization, and presentation

We have plenty of content already across `curriculum/`, `doctrine/`, `website/`, and the supporting `research/` and `ai/` material. What changes from the kit concept is **organization within units and lesson bundles** and **presentation across surfaces**, not the underlying doctrine.

Realignment order:

1. **Harness-facing instructions, then doctrine surfaces.** `CLAUDE.md`, `AGENTS.md`, the rules under `.claude/rules/`, the skills in `.claude/skills/` and `.agents/skills/`, the subagents in `.claude/agents/` and `.codex/agents/`, and `ai/harness-map.md` go first so every collaborator is loading the right frame. Doctrine surfaces that still describe a book (`doctrine/value-proposition.md`, the conceptual outline, the reader-orientation pattern where it intersects with kit moments) follow in the same phase.
2. **Outlines, narratives, modules, website pages.** Revisit only to reorganize and re-present, not to rewrite. Source material stays; the unit-to-kit handoffs and the dual-judgement-by-situation framing become visible across the existing prose rather than being authored from scratch.

Outlines and narratives are downstream of the realignment, not part of it.
