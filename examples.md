# Examples

What good and bad output looks like. The model uses these as gold-standard references. When in doubt, match the structure and texture of these examples — never invent a different style.

These examples are drawn from the three identity files in `reference/identity-examples/`. They're labeled by SME so you can see how the same workflow produces different voices.

---

## Example 1: BAD vs GOOD — Same source, two outputs

### The artifact
*Fireflies transcript excerpt: A CEO on a $15M staffing company L10 said "I'm working 70 hours a week and I still feel behind. Every problem ends up on my desk."*

### ❌ BAD — Generic AI-slop output

> Here's the thing about being a CEO: it's lonely at the top. 🚀
>
> Many founders find themselves working 70+ hours a week and still feeling behind. They're putting in the work but not seeing the results.
>
> The truth is — it's not about working harder. It's about working smarter.
>
> When every problem lands on your desk, that's a sign your team needs better systems, clearer accountability, and stronger leadership.
>
> Imagine a world where you could take a vacation without your business falling apart.
>
> That world is possible. You just need to leverage the right frameworks to unlock your team's potential.
>
> What's YOUR biggest leadership challenge? Drop it in the comments! 👇
>
> #Leadership #Entrepreneurship #BossLife

**Why this fails:**
- "Here's the thing" opener (Rule 2)
- "Many founders" — generic, not specific (Rule 2, voice check)
- "It's not about X. It's about Y." construction (Rule 2)
- Em dash present (Rule 2)
- "Leverage / unlock / potential" — banned vocabulary (Rule 2)
- "Imagine a world where" (Rule 2)
- "What's YOUR biggest..." engagement bait (Rule 4)
- No specific moment, no number, no real person (Voice check #2)
- Could be written by any LinkedIn ghostwriter (Voice check #1)
- Hashtags include #BossLife (Maya's never-use list)

### ✅ GOOD — Maya's voice

> A CEO told me last week:
> "I'm putting in 70 hours and I still feel behind. Every problem ends up on my desk."
>
> $15M company. 30 employees. No org chart.
>
> I asked him one question:
> "Who decides what gets returned today?"
>
> Long pause.
> "I do."
>
> "And who decides which truck goes out first?"
> "I do."
>
> "Pricing on a custom job?"
> "I do."
>
> 70 hours isn't a leadership problem. It's a structure problem.
>
> We worked the org chart together that afternoon.
> By Friday, three of those decisions had owners.
> Not him.
>
> A CEO who decides everything is just a very expensive employee.
>
> #FractionalIntegrator #EOS

**Why this works:**
- Specific moment, real-feeling client, concrete numbers
- Maya's actual vocabulary: "worked the org chart" (not "built")
- Imagined dialogue (her voice pillar: "Concrete, not Conceptual")
- One insight, fully landed
- Ends on a one-liner punch, not engagement bait
- No em dashes, no banned phrases
- Sounds like the testimonials, not the blog

### ✅ GOOD — Ruben's voice (same artifact, different SME)

> Okay, so a CEO told me he's working 70 hours a week.
>
> $15M staffing company. Smart guy. Good team. Margins were fine.
>
> But every Sunday night his wife was pulling him off his laptop, and his calendar looked like a Tetris game where every block was on fire.
>
> I asked him to pull up his AI stack.
>
> He pulled up his email.
>
> (Reader, that was the AI stack.)
>
> Three weeks later we'd built a Claude project that drafted his client recap emails, summarized his Fireflies transcripts into next-step lists, and triaged his inbox before he opened it.
>
> Hours back per week: ~12.
> Sundays back: priceless. Pregúntale a su esposa.
>
> Most CEOs don't have a leadership problem. They have an AI literacy problem dressed up as a leadership problem.
>
> Ruben at 8 SIGNAL
>
> #FractionalCMO #AIForOperators

**Why this works:**
- Ruben opener "Okay, so" (matches identity vocabulary)
- Self-aware fourth-wall break ("Reader, that was the AI stack.")
- Spanish woven in naturally ("Pregúntale a su esposa")
- Specific numbers, concrete tools, real outcome
- Punch closer that reframes the problem
- Sign-off: "Ruben at 8 SIGNAL"
- No em dashes, no banned phrases

**Notice:** Same source artifact. Two completely different posts. Same problem named, different angles, different vocabulary, different humor registers. That's the whole point of identity-driven output.

---

## Example 2: One-liner format — three voices

Same idea ("structure creates freedom"), three identities.

### Maya
> Software doesn't fix disorganization.
> Structure does.
> The software works after the structure is in place.

### Ruben
> Everyone wants the AI tool.
> Nobody wants the SOP that makes the AI tool useful.
> The tool is 10%. The structure around it is 90%.

### Dale
> The right person, in the right seat, doing the right things.
> That's not a slogan. That's the foundation.
> Skip it and the business never gets built.

---

## Example 3: 30-day calendar entry

A single calendar entry generated from a V/TO + 3 wins. Format used in `workflows/vto-to-30-day-calendar.md`.

```
Day 1 (Monday)
Theme: Core Value #1 — "First, We Serve"
Pillar: Client moment from this week's wins
Source artifact: 2026-05-02 weekly review, win #2 — "Maya's transcript-to-post workflow shipped"
Format: Template A — The Real Moment
Hook: "A client asked me to ghostwrite her LinkedIn for three months. I said no."
Status: draft
```

---

## Example 4: When the SME pushes back

User: *"This doesn't sound like me. The third paragraph reads AI."*

Model:
> Got it. Which line specifically? And what would you have said instead?
>
> While I wait, my guess is the line "It's a structural gap, not a leadership failure." That's a contrast-couplet construction (Rule 2). I'll rewrite it. Want me to add "structural gap, not a leadership failure" framing to your banned phrases in `identity.md`?

---

*Examples grow. When a post hits, paste it here as a GOOD example. When a draft fails, paste the failure here with the diagnosis. The folder learns.*
