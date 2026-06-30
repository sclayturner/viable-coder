# Right-sized models: refusing the agent's economic defaults

*Sibling to [steering.md](steering.md). Steering names what the practitioner does to keep the agent from silently taking over the *work*. This piece names what the practitioner does to keep the agent from silently taking over the *economics of the work*. Same shape, different axis. Both are doctrine about explicit structural discipline against the agent's defaults.*

The agent has two defaults that, left running, hollow the practice. The first one — opacity in the middle — gets a doctrine of its own (`steering.md`). The second is the one this piece names: **the agent reaches for the frontier model by default, on every task, without being told to.** That default is reinforced by the labs (who want frontier usage), by the marketing (which trains the practitioner to believe frontier is always *better*), and by the tooling (which makes frontier the path of least resistance). Left running, it produces a token bill that scales with the agent's volume, a rate-limit exposure that scales with the same, and a provider dependency the practitioner never explicitly signed for. It is the economic equivalent of rubber-stamp at G7: the practitioner did not choose the policy; the policy chose the practitioner.

The discipline that meets the default is **right-sized routing.** Two primitives, one posture. The primitives — classifier and router — are the structural implements. The posture — open-source / self-hosted as a first-class option, not a last resort — is the dependency stance.

## The default the discipline refuses

Most AI coding harnesses today don't classify and route by default. They let one model — usually the frontier one configured for the harness — run every subagent in every column, for every task, regardless of the task's complexity. That is not a feature; it is the absence of a discipline. The harness does the work that arrives at it; it does not ask whether the work needs what it's about to spend on it.

The cost of *that absent discipline* is mostly invisible until the bill arrives. A boilerplate refactor that needed a 70B open-source model gets handed to a frontier reasoning model. A documentation pass that needed a small fast model gets the same. A test scaffold, a commit message, a config sweep — all handed to the most expensive model in the rack, because no one configured otherwise. The harness produces fluent results, the practitioner gets accustomed to the fluency, and the economics quietly become a dependency on the frontier provider continuing to subsidize.

This is the **default escalation** trap, and like the steering traps in `steering.md`, it feels like progress. The work ships. The artifacts read clean. The dashboards stay green. The thing that doesn't stay green is the margin, which the practitioner discovers months later, when a price change or a rate-limit notice surfaces a dependency they never explicitly chose to hold.

## The two primitives

**Classifier.** A small, fast model whose only job is to *read the complexity of the incoming task* and route accordingly. It reads the prompt, the surrounding context (which subagent, which column, which Skill is loading), and emits a complexity score and a routing decision. The classifier itself runs cheap, because reading complexity is not what frontier capability is for. *Builder-facing:* "the thing that decides which model gets this one."

**Router.** The component that takes the classifier's decision and assigns the work to a model in the practitioner's configured fleet — frontier when the work genuinely needs it, mid-tier when the work is between, small / open-source / self-hosted when the work is bounded and well-defined. The router is also the seam where the practitioner's *policy* lives: the rules that say *for this kind of work, even if the classifier thinks frontier is warranted, use mid-tier* (for cost) or *for this kind of work, even if the classifier thinks mid-tier is enough, use frontier* (for stakes). *Builder-facing:* "the thing that hands the task to the right-sized model."

Together, the two pieces refuse the default. The classifier reads the work. The router applies the policy. The frontier model runs only when the policy says it should.

## The third piece — open-source / self-hosted as a first-class option

The classifier-router architecture is hollow if the router can only choose between three closed-source frontier models at three price points. Right-sizing isn't *down-routing among the same vendor's tiers;* it is reaching into a wider stack that includes open-source, self-hosted, and locally-served models for the work that doesn't need closed-source capability.

What this looks like in practice:

- **Boilerplate / deterministic transforms** — a small open-source code model, self-hosted or locally served, runs the work for a fraction of the per-token cost and inside the practitioner's own infrastructure.
- **Summarization / classification / extraction** — a mid-sized open-source model handles tasks that have been solved well for years and do not need frontier capability.
- **Internal-only tooling** — work whose outputs never leave the practitioner's organization can run on self-hosted models without the privacy, latency, or per-token cost overhead of a hosted frontier endpoint.
- **High-volume background work** — characterization tests, repository sweeps, doc-freshness checks, scheduled audits — runs that don't need to be fast or smart, just available and cheap.
- **Genuinely judgment-dense or open-ended work** — the frontier model still runs this. Right-sizing is not "always go cheap." Right-sizing is "stop defaulting upward."

The open-source / self-hosted option is doing two jobs at once, and the doctrine is honest about both. It is the cost-control option, and it is the *concentration-of-power* option — the Unit 4 Ethical dimension's register on decision power pooling inside three or four labs. Same primitive, two registers. The practitioner who right-sizes is simultaneously controlling their token bill and refusing a dependency the broader field has not yet reckoned with.

## The honest catch (parallel to the Iron-Triangle qualification)

The Iron-Triangle-dissolves claim in Unit 3 Lesson 4 is qualified inside the lesson that most celebrates it — for the inherited tangled system, the agent can speed the typing but not the *understanding.* This doctrine deserves the same honesty.

**Right-sizing only works where the classifier can read complexity reliably.** For genuinely judgment-dense, open-ended, or first-of-its-kind work, the classifier will under-read the task — it will see surface complexity and miss the *judgment density* underneath. Frontier capability is still the right call for that work, and the discipline is not "always go cheap"; it is "stop defaulting upward." The same skepticism the practitioner brings to "self-spec at G2" applies here in mirror: a classifier that quietly down-routes work it didn't understand has stepped onto the practitioner's side of the line, the same way the agent that drafts the spec it then implements has.

The discipline against *that* failure mode is the same one used everywhere in the corpus: the policy that overrides the classifier is the practitioner's, not the classifier's. The router carries an explicit *escalate-when* rule. The trailing signal — *how often the classifier's recommendation was overridden upward by the policy* — is itself a reading of whether the classifier is trustworthy, on the work this practitioner is running, against this practitioner's baseline. Same idiographic principle as everywhere else.

## What this is not

- **Not vendor advice.** The doctrine names the discipline, not the specific models. The list of open-source and self-hosted options will change every quarter; the discipline of right-sizing will not. Specific model recommendations belong in modules, not doctrine.
- **Not a frontier-skeptic position.** Frontier capability is real, and there is work that genuinely needs it. The doctrine refuses *default* escalation, not escalation per se. The practitioner who runs a frontier model on a judgment-dense G2 spec is making a deliberate, named choice; the practitioner who runs the same model on a boilerplate G8 documentation pass is paying for a default they didn't configure.
- **Not just a cost play.** As noted in the third primitive, right-sizing is also the practitioner's lever on the concentration-of-power register from the Unit 4 Ethical dimension. Treating it as cost-only undersells the doctrine.
- **Not optional infrastructure.** "We'll add classifier-router when we have scale" is the same shape as "we'll add tests when we have scale" — and the corpus has been clear that the pre-2020 startup compromise of *skip the discipline, pay the interest later* is structurally over for new work. The classifier-router is infrastructure; it gets stood up at the same time the shop does, not bolted on after the bill arrives.

## The trailing signals

Most of the readings this doctrine produces are already named in the Unit 4 Economic dimension (3.8) — token cost per unit of output, margin with AI tooling as its own line, dependencies' prices month over month, the signals providers send (rate limits, deprecations, new enterprise tiers). What Unit 3 has to make explicit is which of those readings come from *configuration* and which from *the absence of it*.

- **Cost per unit of output, broken down by model tier** — *Auto.* The board reads which model ran which column for each ticket and what it cost. A flat line dominated by frontier-model spend is the *default-escalation* signature, even when the absolute cost is acceptable today.
- **Override-up rate (policy escalating above classifier)** — *Auto.* How often the practitioner's policy overrode the classifier's down-recommendation. High rate means the classifier is under-reading the work; low rate means the classifier and the policy are in agreement.
- **Override-down rate (policy de-escalating below classifier)** — *Auto.* The reverse — how often the policy ran something cheaper than the classifier thought necessary, and what happened next. The signal of *deliberate* cost discipline as opposed to drift.
- **Frontier-share of output** — *Auto.* What fraction of the practitioner's output ran on closed-source frontier models versus mid-tier or open-source. Reads the dependency-concentration directly; pairs with the Ethical dimension on long clock.
- **Rate-limit incidence** — *Auto.* How often the practitioner's work hit a provider rate limit, and on which columns. A leading indicator of the same dependency the cost line lags.
- **Self-hosted utilization** — *Auto.* Hours of self-hosted-model time per week, broken down by column. Reads whether the open-source / self-hosted option is being used or only available on paper.

Unit 4 reads these on the long clock and rolls them into the Economic dimension's quarterly trend lines. Unit 3 produces them by configuring the routing.

## Where this lives in the kit

- **Planted implicitly in Unit 1** — the *organic-intelligence* doctrine names that the human bears the cost and the machine bears none; the practitioner's bill is one register of that bearing.
- **Planted in Unit 2** — the SaaS Vendor Dependency situation lights this directly; the AI Development Gap situation lights it indirectly (a bench that ships fluent frontier work without classifying it is also a bench that doesn't know what it is buying). The audience kit pre-configures the default routing posture.
- **Operationalized in Unit 3 Lesson 5 (this doctrine's home)** — paired with Lesson 4's steering doctrine as the lesson's twin. Lesson 4 = what you can't hand off. Lesson 5 = what you can't leave to default settings.
- **Configured in Unit 3 Lesson 6 (formerly Lesson 5)** — the same Skill-level configuration that sets the produce-and-explain register also sets the routing policy. One persona tag at intake, two policies that follow.
- **Read on the long clock in Unit 4** — Economic dimension (3.8) primarily, Ethical dimension (3.9) on the concentration-of-power register.

## The line to carry

> **The two jobs stay yours. So does the bill. Steering refuses the agent's default of opacity. Right-sized routing refuses the agent's default of frontier-on-every-task. Both defaults look like progress while they hollow the practice. The discipline against both is the same: explicit structural policy, configured at the shop, not left for the agent to decide on your behalf.**
