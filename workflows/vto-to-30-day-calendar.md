# Workflow: V/TO + 3 Wins → 30-Day Content Calendar

Convert the SME's Vision/Traction Organizer plus three recent client wins into a 30-day LinkedIn content calendar with pillar themes, format mix, and source-grounded post slots.

This workflow produces a *plan*, not full drafts. The drafts come from `transcript-to-posts.md` and `weekly-review-to-post.md` once the calendar is in place.

---

## Why V/TO + wins

The V/TO is the SME's strategic backbone. Core values become weekly themes. Three uniques become signature angles. Wins become proof.

A 30-day calendar built this way produces:
- A consistent drumbeat (audience hears the same themes repeatedly)
- A natural mix (formats vary so the feed has texture)
- Source-grounded posts (every entry points back to a real artifact)

---

## When to use this

- Onboarding a new SME / new identity
- Quarterly content reset after a V/TO update
- After a major engagement win that should anchor the next month
- Whenever the SME says "I don't know what to post"

---

## What you need

1. **The SME's V/TO**, at minimum: core values, three uniques, target market, marketing strategy. BHAG and 10-year target are bonus.
2. **3 recent client wins**, specific outcomes from the past 60-90 days. Each win should include: client size, the problem before, the action taken, the result, the lesson.
3. **The SME's `identity.md`**, for voice and theme alignment.

---

## The prompt

```
Run the vto-to-30-day-calendar workflow.

Identity: [identity.md or pointer]

V/TO:
- Core values: [list]
- Three uniques: [list]
- Target market: [description]
- Marketing strategy: [if applicable]

Recent wins (3):
1. [Client size, problem, action, result, lesson]
2. [Client size, problem, action, result, lesson]
3. [Client size, problem, action, result, lesson]

Start date: [Monday, YYYY-MM-DD]
```

---

## What the model produces

A 4-week × 5-weekday calendar = 20 posts.

**Structure:**

- **Week 1 theme:** Core Value #1
- **Week 2 theme:** Core Value #2 (or Three Unique #1, depending on how many core values)
- **Week 3 theme:** Three Unique #2
- **Week 4 theme:** Three Unique #3 (or back to Core Value #3)

Within each week:
- Day 1: Format A (Real Moment), anchored to one of the 3 wins
- Day 2: Format C (Uncomfortable Truth), pillar opinion post
- Day 3: Format D (One-Liner), sharpening a theme
- Day 4: Format B or F (Before/After or Receipt), anchored to a different win or metric
- Day 5: **Live capture slot**, reserved for whatever happens that week

The Live Capture slot is non-negotiable. It keeps the calendar from going stale and lets the SME respond to current events / current client moments.

---

## Output format

```
# 30-Day Calendar, [SME Name], Starting [Date]

## Week 1: [Theme, e.g., Core Value: First, We Serve]

### Day 1 (Mon, May 5)
- **Format:** A, The Real Moment
- **Source:** Win #2 (the AI-stack story for the $15M staffing CEO)
- **Hook draft:** "Okay, so a CEO told me he's working 70 hours a week."
- **Status:** ready-for-draft

### Day 2 (Tue, May 6)
- **Format:** C, The Uncomfortable Truth
- **Source:** V/TO Core Value #1 ("First, We Serve")
- **Hook draft:** "Most agencies pitch their process before they understand your goals. That's why most agencies lose."
- **Status:** ready-for-draft

[...continues for all 20 days]

## Live Capture Slots (5 total, one per week, Friday)

- Week 1 Friday: [reserved]
- Week 2 Friday: [reserved]
- Week 3 Friday: [reserved]
- Week 4 Friday: [reserved]
- Week 5 Friday (if month is 5 weeks): [reserved]

---

## Coverage check

- Core Value coverage: [✓ all 3 hit]
- Three Uniques coverage: [✓ all 3 hit]
- Wins anchored: [✓ 3/3 used as source artifacts]
- Format mix: [A x 5, B x 4, C x 5, D x 3, F x 3], balanced
- Hashtag rotation: [primary set + 2 rotation posts per week]

```

---

## Quality gate

Before output, the model checks:

- [ ] Every post has a source artifact pointer
- [ ] Each core value appears at least once as a weekly theme
- [ ] Each three unique appears at least once as a weekly theme
- [ ] Format mix is balanced (no week is all Format A, no week is all Format C)
- [ ] Each of the 3 wins anchors at least one post
- [ ] At least 5 live capture slots remain unscheduled
- [ ] Hooks pass the strong/weak test from `reference/post-formats.md`
- [ ] **Opener types rotate across the 20-post calendar** (Rule 14). The "Hook draft" field for each post must rotate through opener categories (direct quote, confession, inverted observation, self-aware aside, specific number/scene, action triplet, object-led declarative, imperative quote, conversational pivot). No two consecutive scheduled days share an opener type. No default fallback opener (e.g., *"A founder I work with..."*) used more than once across the calendar.

A 30-day calendar that violates Rule 14 reads as one voice repeated twenty times. The whole point of the calendar is texture — opener rotation is the texture mechanism.

---

## After the calendar exists

The SME runs:
1. `transcript-to-posts.md` weekly to fill live capture slots from real meetings
2. `weekly-review-to-post.md` weekly to harvest wins and learnings
3. Re-runs THIS workflow quarterly when the V/TO updates

The calendar is a skeleton. The transcripts and weekly reviews are the muscle. Together they produce a sustainable LinkedIn rhythm.

---

*Calendar entries with `Status: ready-for-draft` get pulled into the SME's drafting workflow. When a draft is finished and approved, the entry status becomes `scheduled`. When the post ships, it becomes `published` and gets logged in the wins file (which feeds the next quarter's V/TO update, the loop closes).*
