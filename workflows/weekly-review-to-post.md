# Workflow: Weekly Review → Post

Convert the SME's weekly review or preview into 1-2 LinkedIn posts.

This is the **highest-frequency workflow** in Voiceprint. The SME does the weekly review anyway — for their own clarity, not for content. Voiceprint treats the review as a content artifact and harvests posts from it.

The reference implementation lives at [mytinta.app](https://mytinta.app) — Ruben's personal weekly preview/review app. The workflow assumes a similar structure: wins, learnings, what would you do differently, what's coming.

---

## When to use this

- Every week, after the SME completes their weekly review
- The Sunday-evening or Monday-morning slot in the SME's planning rhythm
- Before the week starts, so the calendar's Live Capture slots can fill from this week's material

---

## What the review should include

For Voiceprint to extract good posts, the weekly review needs at minimum:

1. **Wins from the past week** (with specifics — clients, numbers, named patterns)
2. **What I learned** (the meta-insight)
3. **What I'd do differently** (the lesson — usually the strongest post material)
4. **What surprised me** (often the best hook)
5. **What's coming next week** (seeds the next review)

Bonus fields that produce great posts:
- A specific moment that stood out
- A client quote that landed
- A pattern you saw 2-3 times this week
- A decision you made under pressure

---

## The prompt

```
Run the weekly-review-to-post workflow.

Identity: [identity.md or pointer]

Week ending: [YYYY-MM-DD]

Weekly review:

## Wins
[paste wins]

## What I learned
[paste]

## What I'd do differently
[paste]

## What surprised me
[paste]

## Coming up next week
[paste]
```

---

## What the model does

1. **Reads `identity.md`, `rules.md`, recent `examples.md`.**
2. **Scans the review for the strongest moment** — the post with the highest specificity, vulnerability, or pattern-recognition value.
3. **Identifies 1-2 candidate posts**, prioritizing:
   - "What I'd do differently" entries (highest authenticity, built-in vulnerability)
   - Specific wins with named clients (anonymized) and numbers
   - Patterns named 2+ times in the review (signal, not noise)
4. **Drafts 1-2 posts** using Format A (Real Moment), D (One-Liner), or E (Question Behind the Question).
5. **Runs the voice check** (Rule 3).
6. **Outputs** with source pointers back to the specific review section.

---

## What you get

```
**Post 1 (recommended): [format]**

[Full post body, ready to paste]

---

**Why this one this week:**
[1-2 sentences on what made this the strongest moment]

**Source:** Weekly review, [section] — "[verbatim line that seeded the post]"

---

**Post 2 (alternate): [format]**

[Full post body]

**Why this one this week:**
[...]

**Source:** [...]

---

**Live Capture slot recommendation**

If the SME's 30-day calendar has a Live Capture slot open this week, slot Post 1 there. The remaining draft can hold for next week or get scheduled into a generic slot.
```

---

## Quality gate

- [ ] Each post has a verbatim phrase or specific number from the review
- [ ] Anonymization complete
- [ ] Voice pillars visible
- [ ] No em dashes, no banned phrases
- [ ] 150-400 words per post
- [ ] Each post points back to the review section it came from

---

## The compounding effect

Run this workflow every week. After 12 weeks:
- 12-24 source-grounded posts have shipped
- The SME's `examples.md` has grown with the actual best-performers
- The `identity.md` has sharpened (banned phrases added, new vocabulary captured)
- The SME has a habit, not a content sprint

That's the whole game. Cadence beats brilliance. Specificity beats volume. The folder learns alongside the SME.

---

*Pair this with `transcript-to-posts.md` for double the artifact coverage. Reviews catch the meta-patterns; transcripts catch the in-the-moment moments. Run both weekly.*
