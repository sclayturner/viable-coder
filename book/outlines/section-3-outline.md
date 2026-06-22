# Section 3: Running the Day-to-Day
 
*(working titles throughout)*
 
**The promise, stated before Chapter 1:** By the end of this section you'll be able to run a full team's worth of work — every step of building real software — with a crew of AI agents doing the middle, while you hold the two jobs that stay yours, refuse the defaults that would silently make your big decisions for you, and keep an honest scoreboard on whether you actually held them.
 
---
 
## Chapter 1 — What the Day-to-Day Becomes (When a Crew of Agents Does the Middle)
 
*What you get: you'll see how one person can now run the whole build — and why that doesn't change who's in charge.*
 
- First, the thing being transformed — and most people were never taught its name. For decades, building software followed a set path: figure out what's needed, design it, build it, test it, ship it, keep it alive. That path has a name — the **Software Development Life Cycle**, the **SDLC** — and whether or not you've ever heard the term, every app on your phone was built on some version of it.
- Why it existed: each step was there to kill a specific risk at the right moment — so you didn't build the wrong thing, design yourself into a corner, or ship something broken to real people.
- The catch that shaped everything: doing those steps *well* took a whole team and took real time — which is exactly why scrappy startups skipped most of it and paid the interest later.
- What just changed: AI agents can now do the work *inside* every one of those steps. The path stays; the team in the middle becomes a crew of agents. We call that the **Agent Development Life Cycle — the ADLC**: the same old SDLC, re-staffed by agents, producing everything a full human team once produced.
- The one line that carries the whole section: the agents do the middle; you keep the two jobs from Section 1 — you *start* the work, and you *answer* for it — and you stay in the work in between, reading what the agents are doing as they do it. That third move, the in-flight one, has a name we'll bloom in Ch 4: **steering**. It is not a third job; it is what holding the two jobs looks like while the work is running.
---
 
## Chapter 2 — Your Shop: Where the Work Lives, the Team, and the House Rules
 
*What you get: you'll know the handful of pieces that make up an AI-run build — and see that the kit you got in Section 2 is how yours gets set up.*
 
### One place the work lives
 
- The code, its full history, the to-do list, and the plan all sit in one place you can audit. The to-do list *is* the plan — nothing important lives only in someone's head.
- The same place is what makes the agent's work *readable as it runs*, not only when it lands — every reasoning step, every choice, every edit recorded as it happens. That is the substrate that makes steering possible; we name the move in Ch 4.
### The team (the "subagents")
 
- Instead of hiring a product manager, an architect, a tester, a security reviewer, you direct a set of specialized agents — each with one narrow job, each handing you back clean work to check.
### The house rules (the "Skills")
 
- A short, reusable file that teaches an agent *how your shop does a thing* — how you write a spec, what "done" means to you, your security checklist — so every agent produces it *your* way, every time, instead of some generic way.
### The thing that lets the AI see everything you know (the "MCP")
 
- A universal adapter that lets your agents read across the scattered places your truth actually lives — support tickets, meeting notes, design files, chat threads — so the work is shaped by everything the company knows, not just what you happen to remember on a given afternoon.
- **And here's where Section 2 plugs in:** your situation already decided which of these agents step forward and which house rules they run. The kit you got wasn't advice to read and forget — it was the setup sheet for this shop.
*The takeaway: you're not really coding anymore — you're running a shop. A team, a rulebook, and one place it all lives.*
 
---
 
## Chapter 3 — One Job, Start to Finish
 
*What you get: you'll watch a single piece of work move through every step — and see exactly where your hands are and where the agents' are.*
 
- Follow one piece of work across the board, left to right. Every column is staffed by an agent; your job is the gates *between* the columns — and reading the column *as it runs* so the gate at the end is real. The reading-as-it-runs move is steering; Ch 4 names it as doctrine.
- **Start it.** You decide it's worth doing — the agents surface what the company already knows about it; you own the "why now."
- **Spell it out.** An agent drafts the full write-up a startup never used to have time for; you own the actual problem and the trade-offs.
- **Break it down.** It becomes a list of work items; an agent sorts, de-duplicates, and estimates; *you* say which ones are truly ready — out loud, on purpose.
- **Design it.** An agent proposes the shape; you judge whether it's *right*, not just whether it'll work.
- **Build it.** An agent writes the code and opens it up for review. This part is genuinely the agent's.
- **Test it, secure it, wire it up.** The work that used to get skipped — real tests, a security pass, the plumbing — agents now produce as a matter of course.
- **Review it.** You read what was built and stand behind it. This one never transfers.
- **Write it down.** An agent keeps the documentation true *as the code changes*, instead of letting it rot the way it always did.
- **Ship it, and watch it.** It goes live behind your say-so, and you own what happens to real people on the other side.
- Then it loops: what you learn out in the world feeds the next "start it."
*The takeaway: the agent fills the column; you own the gate. That rhythm is the whole job.*
 
---
 
## Chapter 4 — What You Can't Hand Off
 
*What you get: you'll know the exact moments the work is yours alone — and why skipping them is the quiet way good builds go bad.*
 
*Pairs with Ch 5 ("What You Can't Leave to Default Settings"). Both chapters refuse one of the agent's defaults: Ch 4 refuses the default of opacity in the middle; Ch 5 refuses the default of frontier-on-every-task. Same structural discipline at two axes.*
 
- Two of those steps aren't like the others: where you *start* (deciding it's worth building, saying it's ready) and where you *answer* (reviewing what shipped, approving the release). These are the two jobs from Section 1, now living at specific spots on the board.
- Everything between them, the agents can do. These two, they can't — because they're about *wanting the thing to be right* and *being the one who gets the call at 2 a.m.*, and the machine does neither.
- The good news first: because the agents absorb the *time* the middle used to cost, the things only big, late-stage companies could once afford — real tests, proper security, solid infrastructure, docs that stay true — are now standard from day one. The luxuries became the floor.
- The honest catch: "time is no longer the constraint" holds best for *new* work built from scratch. For the tangled system you inherited and can't fully see — your Section 2 situation, if that's you — the agent can speed the typing but not the *understanding*, and the understanding was always the slow part.
- **What makes the two gates holdable at all — observability of the middle and steering.** The two ends are jobs the machine can't take. What the chapter has to also say honestly is what makes those two jobs *holdable*, because no human can stand behind a 200-line PR they didn't watch get written at the pace an agent writes it. The fix isn't *be more careful at G7*. The fix is structural: the agent's reasoning has to be readable *while the work runs*, not summarized after — and the human's job in the middle isn't to wait, it's to **steer**. Read the agent's reasoning as it produces; redirect when the trajectory drifts off the *why-now*; press the interrupt key when the path turns into one you can't stand behind. **Steering is not a third job. It is the active form of holding the two jobs through the middle.** Its structural precondition is what `doctrine/steering.md` calls *observability of the middle* — the same instrument-don't-introspect principle from Section 1 Ch 5, applied at a second scale. Without it, both gates collapse: origination drifts into accepting the agent's next suggestion; review collapses into rubber-stamp.
- The trap at each gate, then, is what steering's absence looks like: waving a piece of work to "ready" because the agent suggested it (you didn't choose it — it chose you) is origination without steering; waving a finished build through review without really reading it is answerability without steering. Both feel like progress. Both are you quietly handing off the in-flight motion that was yours to keep.
- *The handoff to Ch 5:* the agent has a second default that hollows the practice the same way opacity does, and the chapter that names what you can't hand off owes the chapter that names what you can't leave to default settings. The second default is on the economics of the work, not the work itself, and it is silently making your dependency and cost decisions for you while the bills look acceptable. The next chapter is its mitigation.
---
 
## Chapter 5 — What You Can't Leave to Default Settings
 
*What you get: you'll know the second default the agent has — frontier-on-every-task — and the explicit structural discipline that meets it, so your token bill, your rate-limit exposure, and your provider dependency reflect choices you actually made instead of defaults you never noticed.*
 
*Sibling chapter to Ch 4. Ch 4 named steering as the discipline against the agent's default of opacity in the middle. This chapter names right-sized routing as the discipline against the agent's default of frontier-on-every-task. Same shape, different axis.*
 
- The default the discipline refuses. Most AI coding harnesses today do not classify the incoming work and route it to a right-sized model. They let one model — usually whatever frontier model the harness ships with — run every subagent, in every column, on every task, regardless of the task's complexity. The harness produces fluent results, the practitioner gets accustomed to the fluency, and the economics quietly become a dependency on the frontier provider continuing to subsidize. This is *default escalation*, and like the steering traps in Ch 4 it feels like progress while it hollows the practice.
- The two primitives. **The classifier** is a small, fast model whose only job is to read the complexity of an incoming task and emit a routing decision; it runs cheap because reading complexity is not what frontier capability is for. **The router** takes the classifier's recommendation and assigns the work to a model in your configured fleet — and it is also the seam where your explicit *policy* lives, the rules that override the classifier when stakes or cost warrant. Together: the classifier reads the work, the router applies the policy, the frontier model runs only when the policy says it should. The plain words first; the technical names in parentheses once, the way Ch 2 introduced *subagents*, *Skills*, and *MCP*.
- The third piece — open-source / self-hosted as a first-class option. The classifier-router architecture is hollow if the router can only choose between the same vendor's tiers. Right-sizing means a wider model stack — open-source code models for boilerplate and deterministic transforms, mid-size open-source for summarization and extraction, self-hosted models for internal-only tooling, locally-served models for high-volume background work, and the frontier model for the work that genuinely needs it. The open-source / self-hosted option is doing two jobs at once: cost control AND the *concentration-of-power* register of the Section 4 Ethical dimension. Treating it as cost-only undersells the doctrine.
- The honest catch (parallel to Ch 4's Iron-Triangle qualification). Right-sizing only works where the classifier can read complexity reliably. For genuinely judgment-dense, open-ended, or first-of-its-kind work, the classifier will under-read the task; frontier capability is still the right call. The discipline is not "always go cheap" — it is "stop defaulting upward." The same skepticism applies in mirror to the classifier as to the *self-spec* agent at G2: a classifier that quietly down-routes work it didn't understand has stepped onto your side of the line.
- Tips and tricks the harness doesn't ship with. Practical moves for practitioners whose harness doesn't classify and route by default — manual routing rules, model-fleet-per-Skill configuration, the policy-override-rule pattern, the locally-served-model setup pattern, the cost-line-as-its-own-dashboard discipline. *(Detailed material; lives at chapter depth, not in this top-level outline.)*
- What the board reads from this chapter. Cost per unit of output by tier, the *frontier-share of output*, *override-up* and *override-down* rates, rate-limit incidence, self-hosted utilization — most of them Auto. Section 4 rolls them into the Economic dimension's quarterly trends.
- The Section 2 connection. Your audience kit pre-configured the default routing posture. SaaS Vendor Dependency readers walk in with right-sizing foregrounded; AI Development Gap readers walk in with classifier-readability as a teaching surface; Legacy Software Debt readers walk in with archaeology-first routing rules. The routing policy is part of the kit, not an afterthought.
*The takeaway: the agent will pick the most expensive option on your behalf, every time, unless you configured otherwise. Right-sized routing is how you stop renting capability you didn't choose to depend on — and how you keep the option of running on models you can actually run yourself.*
 
---
 
## Chapter 6 — Teaching the AI Your Way (and the Knife-Edge Under It)
 
*What you get: you'll learn to set up your agents so they make you sharper, not softer — and the single setting that decides which.*
 
- Back to the house rules: they don't just make the work consistent — they decide what the work does *to you*.
- The same rulebook can be written two ways. One just hands you the finished thing. The other does the thing *and explains why it made each call* — and deliberately leaves a blank for you to fill.
- This isn't a small choice. The research is blunt: people who just take the output get measurably worse at the work; people who make the AI explain stay sharp. Same tool, opposite result.
- This is where your Section 2 kit shows its hand again. For a skill that's yours to own — one you'll live with — your agents are set to *teach*: they explain, they leave blanks. For a skill you'll only ever direct, they're set to *just produce*: enough for you to stay in charge, and no more.
- The same register choice is your primary **steering instrument** (Ch 4). *Produce-and-explain* is what makes the middle observable in flight — the agent's reasoning runs alongside the producing, so you can read it as it lands and redirect before the artifact is finished. *Produce-only* is the opacity setting; it leaves you with nothing but the finished thing and your finger over Approve. Same Skill, two registers — and the register choice is therefore two decisions in one: what the work does *to you* (sharpen vs. hollow) and what you can *do to the work* in flight (steer vs. wait).
- The thing to police: an agent that quietly starts deciding *what* to build, not just *how* — writing its own marching orders. The moment it's setting the goal instead of you, it's stepped onto your side of the line. Steering catches this in flight; the explain register exposes the moment the agent's frame begins to set yours, so you can redirect before the self-spec is written.
*The takeaway: the AI can build you up or hollow you out, and you pick which by how you set it up. Choose to stay sharp.*
 
---
 
## Chapter 7 — The Board Is Watching You, Too
 
*What you get: you'll see how the same system that runs your work becomes the honest scoreboard you could never keep on yourself.*
 
- Remember Section 1's problem: you can't trust the mirror, because the tired part of you is the part doing the checking. Here's the fix, and it's built right in.
- Because the whole build runs through one place, it's quietly recording how *you* worked — not how you *felt*. How often you reshaped the agent's plan versus just accepting it. Whether you actually read the code before you approved it. How many of the things you built you genuinely *chose* versus rubber-stamped. Most of these are **steering signals**: they read whether you held the in-flight motion Ch 4 named, or let it lapse.
- Unlike "am I rested?", none of this can be fudged. The work-system *is* the instrument — and it is now operating at three scales: the self-dashboard from Section 1, the in-flight readings off the agent's reasoning (Ch 4's steering instrument), and this — the board reading the human after the fact. One substrate, three readings off it.
- The real limit it exposes: agents can produce faster than any human can truly check. So the thing that caps you isn't typing speed — it's your capacity to review and to answer. That capacity is part of your condition — Section 1's "you are the infrastructure," now with an actual number on it.
- And that's the handoff to Section 4: these quiet measurements are the seeds of the long-game questions — the ones you'll track not over a sprint, but over a career.
---
 
## Chapter 8 — Where to Start Today, and How the Rest Helps You
 
*What you get: one thing to set up on your very next build, plus the map into the long game.*
 
- Your first move (do it on your next real piece of work): set up the shop for *one* task — one place it lives, the agents set to **produce-and-explain** in any column whose answerable half is yours — and run that one task all the way across the board, gates and all. Steer once on purpose: read the agent's reasoning as it produces, and press the interrupt key once to redirect, even if the trajectory looks fine. The deliberate interrupt is a calibration that you are still inside the work.
- The whole section in one line: you run a full team's worth of work, but the two jobs at the ends stay yours — held in flight by steering through the middle — and the board keeps you honest about whether they really did.
- What's coming, and what it does for you:
  - **Section 4 — The long game:** the quiet measurements from your board grow into a handful of honest questions across nine dimensions — so that over years, not weeks, you can see what's actually under threat and choose your path instead of drifting into it.
---
 
## Open questions / decisions to resolve as we draft
 
Carried in the spirit of the Section 2 and crosswalk caveats — flagged, not papered over.
 
1. **The naming aside.** Name is settled: **ADLC**, claimed as our term. One decision remains — *where* to note that some vendors use "Agentic Development Life Cycle" to mean something else (building agentic systems, not re-staffing the SDLC). Recommendation: keep it out of the plain-voice body and put it in an endnote, so Chapter 1 stays clean for the non-technical reader.
2. **How far to teach the SDLC.** Per your note, Chapter 1 is the one place we assume zero prior knowledge and define a term in full. Decision: is the one-paragraph "here's the path and why each step existed" enough, or do we want a small plain-language diagram of the old path beside the new one? (A before/after of the same path — human team vs. agent crew — would carry it visually.)
3. **Reader-facing vocabulary level.** The outline introduces *subagents*, *Skills*, and *MCP* in plain terms with the real word in parentheses once — mirroring how Section 1 handled "Origination." Confirm that's the right altitude, versus hiding the terms entirely (cleaner, but leaves the reader unable to follow the tools elsewhere) or teaching them as named tools (more capable, less plain).
4. **Puncturing our own headline inside Section 3.** Chapter 4 deliberately disciplines the "time is no longer scarce" claim and ties the exception to the Legacy situation from Section 2. Confirm we want to qualify the big claim *here*, in the section that most celebrates it, rather than only in back-matter — the research's open question #1 argues we should.
5. **Where review capacity lives.** Chapter 7 places it as *both* the binding constraint of the ADLC *and* a condition signal (the same dual placement the crosswalk took). This is the through-line from Section 1 to Section 4; confirm the dual placement is intended rather than picking one home.
6. **Clay-experience anchors to capture** *(the part that makes it yours).* The outline marks where your own history should land but can't supply it: a build where you waved a review through and paid for it (Chapter 4); a moment when default escalation cost you visibly — a bill, a rate-limit hit, a provider-dependency reckoning — or when right-sizing earned its keep (Chapter 5); a skill you let an agent hollow out — or deliberately kept sharp (Chapter 6); the first time a board's trailing signal told you something your gut had been hiding (Chapter 7). These are the war-story slots.
7. **Granularity of Chapter 3.** The walk-through compresses the full pipeline into nine plain "do this" beats to protect the voice. The granular, column-by-column version (with each subagent and Skill named) lives in the Section 3 research and the crosswalk if we decide the reader needs more — likely a later, deeper pass, not this working outline.
8. **The 8-chapter section.** Section 3 now has 8 chapters; Sections 1, 2, and 4 have 7. The asymmetry is deliberate — Ch 4 and Ch 5 form a structural pair (the two disciplines that refuse the agent's defaults) and Clay's call was to give the cost-discipline material its own chapter rather than compressing it into Ch 4. *Open question:* does the 8-chapter shape need a sibling 8th in another section (most likely Section 4 around offset strategies, which is currently somewhat diffuse across Ch 6 and Ch 7), or does Section 3 carry the asymmetry alone because the day-to-day section honestly has more structural material to teach than the others?