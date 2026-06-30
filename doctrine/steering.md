# Steering: keeping the human in the middle of agent work

*Companion to [organic-intelligence.md](organic-intelligence.md) (the two ends — origination at the front, answerability at the back) and to [observability.md](observability.md) (instrument-don't-introspect, applied to the self). This piece names what was implicit between them: the in-flight motion that makes the two ends holdable at all, and the structural precondition that makes the motion possible.*

There are two jobs at the ends — origination at the front, answerability at the back. The agent owns the producing in between. That geometry is doctrine, and it does not change here.

What that geometry left implicit is the question this unit answers. **What is the human doing while the middle runs?** The honest version of "you own the gate between the columns" — the line Unit 3 carries through every lesson — does not survive contact with the actual pace of an agent crew unless something connects the two ends in flight. That something is steering.

## Steering is the in-flight form of holding the two ends

Steering is not a third job. The two jobs from `organic-intelligence.md` remain origination and answerability. Steering is what holding them looks like *while the work is running* — reading the agent's reasoning as it produces, redirecting when the trajectory drifts off the why-now, interrupting when the path turns into a path you cannot stand behind. The interrupt key on every major coding agent today — Claude Code, Cursor, Codex, Cline — is the most primitive form of this. It is a steering primitive: a button that turns "wait for the artifact" into "stay in the work."

The distinction matters because the alternative is the failure mode the lesson on the two non-transferable gates exists to name. **If the human is absent through the middle, the gate at the back becomes a rubber-stamp.** Not because the human is lazy or careless; because no one can read a fluent 200-line diff with full understanding at the pace an agent produces it, and the only honest review is one informed by readings taken across the middle, not by a single end-of-pipe inspection. The gate at the front goes the same way from the other direction — if the human is not steering, the agent's next-suggested ticket quietly becomes the human's next ticket, and origination atrophies into drift.

Steering is what makes both gates real. It is the through-line of the loop, not a stage in it.

## Observability of the middle is the structural precondition

Steering requires something to read. **The work the agent does has to emit signals the human can read as the work runs** — not only after it lands. That is observability of the middle, and it is the same instrument-don't-introspect principle from `observability.md`, applied at a second scale.

Three scales of one principle, now:

- **Self-observability** (`observability.md`) — the human reads themselves. Instrument the trailing signal; don't ask the gauge.
- **Work-observability of the middle** (here) — the human reads the agent's reasoning and trajectory while it runs. The middle emits signals; the human consumes them in flight.
- **Work-system reads the human** (Unit 3 Lesson 6 — the board's trailing signals) — the substrate that runs the work also records how the human held it. The board reads the human after the fact.

The three scales are the same doctrine. Instrumentation defeats introspection across all of them, and the work-system that runs the build is the single substrate that supports all three. One place the work lives, three readings off it.

## What makes the middle observable

Observability of the middle is not satisfied by long logs or summary screens. The same three properties a good self-instrument needs (`observability.md` — *answer lives outside your head, asked off the decision, targets your specific failure*) translate cleanly here:

- **The reasoning is exposed, not summarized.** The agent shows what it considered and why it chose, not just what it produced. Polished post-hoc summaries are observability theater — the explanation you would have written if you had decided, attached to the choice the agent actually made. A produce-and-explain register that narrates choices *as they are made* is not the same artifact as a fluent post-mortem, and only the first one supports steering.
- **The signals run in flight, not at the gate.** Reframes, interrupts, redirections, and overrides happen *during* the column, not at its boundary. The gate at the end is informed by what happened across the middle, not by the artifact alone.
- **The instrument targets the substitution risks, not the producing.** Self-spec (the agent writing its own marching orders), drift (the agent's frame quietly becoming the human's frame), and rubber-stamp (the human signing for what they did not read) are the failure modes worth instrumenting. Producing speed is not.

The single substrate Unit 3 calls "one place the work lives" is what makes all three properties holdable. The board records the agent's reasoning at the moment it ran, not the version it would tell you about later; it records the human's interventions in the order they happened; it records what the human did not look at. The substrate that runs the work is the instrument; the human does not have to build the instrument separately.

## Steering primitives and disciplines

The current generation of agentic tools supplies primitives. The disciplines are the playbook's job.

**Primitives in the tooling today.**

- The interrupt key — every major coding agent exposes one. The minimum viable steering wheel.
- The explain register — agents that can be configured to narrate their reasoning as they produce (the produce-and-explain mode from the lexicon).
- The transcript — a record of the agent's chain of decisions, available for in-flight scan and for after-the-fact review.
- Mid-stream artifact preview — the ability to see the spec, the design, or the diff while it is still being written, not only when it is filed.

**Disciplines the playbook teaches.**

- Configure agents to produce-and-explain in any column whose substitution risk is the human's. The lexicon's *transfer / substitution* knife-edge bends here: an agent that cannot show its reasoning cannot transfer the faculty back, and cannot be steered through.
- Treat the interrupt as a positive move, not an emergency one. Steering is not just rescue. A deliberate interrupt — once a session, by intention — is a calibration that the human is still inside the work, not outside it.
- Read the transcript as the work runs, not only at the gate. The transcript is the dashboard for the middle; the same way Unit 1 ported instrumentation onto the self and Unit 3 ports it onto the work-system reading the human.
- Police the substitution: every gate where the substitution risk is the agent originating, drafting its own spec, or grading its own work needs the human's steering action recorded — an edit, a reframe, a redirection, a refusal — or the gate is recorded as un-held.

## Why the middle was opaque before — and why opacity now is a choice

For most of the last forty years, the middle of software work was opaque because it was distributed across humans across days. A spec sat on a PM's screen for a week before anyone else saw it. An architecture decision happened in a meeting that left a one-page summary. The pipeline's slowness was a kind of accidental observability surface: there was time for people to drift in and read what was happening.

That is no longer true. The middle compresses into minutes, and the slowness that used to make it observable is gone. **Opacity in the middle now is not a structural property of the work; it is a configuration choice in how the agent is run.** The same agent can be configured to produce silently or to produce-and-explain, to file a 200-line PR or to file the same PR with the eight decisions it made along the way exposed in order, to write the spec end-to-end or to pause at the third trade-off and ask the human to make the call.

The playbook's position is that opacity in the middle is the wrong default for any work whose answerable half is the human's. Observability of the middle is the configuration that keeps the two jobs holdable; opacity is the configuration that produces rubber-stamp at the back. The choice between them is the practitioner's, not the tool vendor's.

## What this is not

- **Not micromanagement.** Steering is not the human producing the work alongside the agent. The agent still does the producing. Steering is the human reading the agent's trajectory and intervening where the trajectory would otherwise drift off the why-now or off the answerable bar.
- **Not a productivity tax.** Done right, steering raises the rate at which the human can stand behind work the agent produced. The constraint on a human's review capacity (Unit 3 Lesson 6) is what makes review at G7 the binding gate. Steering relieves that constraint by spreading the human's attention across the middle in small, in-flight increments instead of concentrating it into one impossibly large end-of-pipe inspection.
- **Not a third job.** Origination and answerability remain the two jobs. Steering is the active form of holding them through the middle.
- **Not delegable.** Like every other knife-edge in the corpus: the agent can produce the signal; only the human can act on it. The interrupt is delegable as a primitive; deciding when to press it is not.

## Where this lives in the kit

- **Planted in Unit 1 implicitly** — the two ends doctrine names what the human holds; this piece names how the human holds it through the middle.
- **Operationalized in Unit 3 Lesson 4** — the lesson that names the two non-transferable gates also names observability-of-the-middle and steering as what makes those gates holdable. The lesson's existing failure modes (origination by drift, review by rubber-stamp) are recast: both are what steering's absence looks like.
- **Configured in Unit 3 Lesson 5** — the produce-and-explain register is the primary steering instrument. Lesson 5 is where the builder sets up the configuration that makes the middle observable for the work they are about to do.
- **Read on the long clock in Unit 4** — declining reframe-vs-accept ratios, falling override rates on agent flags, and rising self-spec incidence are long-clock readings of steering depth across a career.

## The line to carry

> **The two jobs stay yours. Steering is how you hold them while the work runs. Observability of the middle is what makes steering possible. Opacity is now a configuration choice — and rubber-stamp is what the wrong choice produces.**
