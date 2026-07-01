# Lesson 3 — Establishing Division of Labor

## Purpose

See the two jobs that do not transfer to the agent, practice the Think/Decide/Create split, and use steering as the in-flight motion that keeps the human present while the machine produces.

## Scene

You hand the agent a goal and it builds the thing. Design, implementation, tests, the lot.

Where does that leave you?

The instinct, we have said, is to find a task the agent cannot do and stand on that. The move is a losing one. The list of tasks we want to stand on shortens with every model release. Standing on a shrinking platform, in a cold and stormy sea, is not a strategy.

The line worth drawing is structural, and it does not move with the next model release: **You start the work. You answer for the work. The agent takes everything in between.**

This can be liberating. It can expand your creative horizon. But only when the line is held.

## Tension

The danger is not that the agent steals the human jobs. The danger is that the human stops performing them.

At the front, the failure is abdicated origination. At the back, the failure is distributed answerability. Both failures can look productive while they are happening. The work keeps moving. The output keeps arriving. The signature on the work may still be yours, even after the choices no longer were.

The temptation under AI is to multiply yourself without limits: whatever you ran before, you can now run ten of in parallel. The first half is true. You can run more production concurrently than you could a year ago. The second half is where it breaks. Production parallelizes; answerability does not.

The number of streams you can stand behind is bounded by the number you can hold in mind, read closely, override when wrong, and own when shipped. That ceiling is lower than enthusiasm wants. Past it, you are still originating in name, but you have stopped originating in fact. The work carries your signature on choices you did not have the mind to make.

## Distinction

The front job is **origination**: picking the right thing to build to begin with. AI can help you figure that out, but it cannot care if it is or is not the right thing. The operational question is: *Did I choose this, or did it choose me?*

The failure here, the one I have watched in myself more times than I will admit on the page, is not that an agent seizes my origination. It cannot. The failure is that I quietly abdicate it, responding only to what the tool, the feed, or the agent's next suggestion happens to surface, until choosing what to aim at is a muscle I no longer use. Origination atrophies from disuse, not from AI's malicious seizure. That is harder to defend against because nobody takes it from you.

The back job is **answerability**: standing behind the result when it ships and something breaks. You answer in registers the machine answers in none of: economic, legal, ethical, environmental, the customer at two in the morning when the cutover drops orders. A model can produce a decision. It cannot be the party held to its outcome. That party is always a living thing.

Two failure modes, one abdication. The first comes from disuse: the muscle withers because nothing asks for it. The second comes from over-distribution: the muscle is stretched across more concurrent works than one mind can hold answerable. AI does not raise this ceiling. It reveals one that was always there and makes it easy to walk past.

These two jobs show up every time you work, in three places at once.

**Think** — the agent explores; you own the framing. You tell the agent your app is slow, and it proposes a caching layer with a clean invalidation strategy. The producible half is the analysis and the caching code. The answerable half is whether latency is even the real problem, or whether an over-fetching query is the actual cause and a cache would hide a data-model flaw you will pay interest on for years. The agent can give you a clean plan. The clean plan is the thing you have to interrupt to ask whether the problem was the one you named.

**Decide** — the agent recommends; you live with it. It recommends moving the API from REST to GraphQL and hands you a defensible migration plan. The plan may be good. You are the one who answers to the team maintaining it at two in the morning, to the customers if the cutover drops orders, and to the budget that funds the rewrite. A plausible recommendation is not a held decision until someone holds it.

**Create** — the agent generates; you judge whether it is *right*, not just whether it *works*. It produces an auth module that compiles and passes its tests. Working is not the same as right. The answerable half is whether this is the auth your product *should* have: whether it fits your threat model, what your users believe about how their data is handled, and whether it reads like something your team can own and extend. Generation is not authorship.

## Tool

Naming the two ends does not finish the work. What does the human do *while the middle runs*?

The agent owns the producing. That does not mean you are absent from it. The in-flight form of holding the two ends is what the playbook calls **steering**: reading the agent's reasoning as it produces, redirecting when the trajectory drifts off the *why* you set at the front, and interrupting when the path turns into one you cannot stand behind at the back.

Steering is not a third job. It is what holding the two jobs looks like while the work is running. You observe what is happening between the two ends so you can intervene.

Look at the running kit. Find the origination surface, where work is named and scoped. Find the answerability gates, where work has to clear a bar before it advances. Find the agent column between them, with production under way.

Then press the interrupt key on one of the running agents. The work stops. The partial trajectory captures. You are now standing in the middle of the agent's column with the option to redirect.

That move is the steering primitive.

## Return

When the agent builds the thing, you are not left trying to prove your worth against it. You have two jobs that do not transfer: start the work and answer for the work.

Everything between those two jobs can move faster now. That is the gift and the danger. The kit gives you a place to hold the front, a place to hold the back, and an interrupt in the middle so the machine's speed does not become your absence.
