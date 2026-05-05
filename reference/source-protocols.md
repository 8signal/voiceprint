# Source Protocols

How to convert each kind of artifact into post material. The model uses these protocols so the conversion is consistent across SMEs.

---

## Protocol 1: Meeting transcript → posts

**Input:** A Fireflies / Otter / Zoom transcript from a real meeting (L10, client call, internal sync, sales conversation, etc.).

**Steps:**

1. **Skim the transcript for moments, not topics.** A "moment" is a specific exchange — a question someone asked, a phrase someone used, a realization someone had, a pushback that changed the meeting's direction.

2. **Pull 3-5 candidate moments.** For each, capture:
   - The verbatim line or exchange
   - Who said it (anonymized — "a CEO," "a founder," "a manager")
   - The context in one sentence
   - The before/after (what shifted)

3. **Score each moment for post potential:**
   - Is there a specific quote or number?
   - Does it pattern-match to a theme in `identity.md`?
   - Would the SME want this story told?
   - Does it have a punch (a takeaway that lands)?

4. **For the strongest 1-3 moments, draft a post.** Pick a format from `post-formats.md` based on the moment's shape.

5. **Run the voice check** (Rule 3 in `rules.md`).

6. **Output** in the format from Rule 7.

**Andrea's specialty case:** She specifically pulls from the Issues List portion of L10 meetings — the IDS (Identify, Discuss, Solve) section. Those moments tend to have the cleanest before/after structure because the meeting itself produced the shift.

---

## Protocol 2: V/TO + 3 client wins → 30-day calendar

**Input:** The SME's V/TO (Vision/Traction Organizer) plus 3 recent client wins.

**Steps:**

1. **Extract pillar themes from the V/TO:**
   - Core values (these become recurring weekly themes)
   - Three uniques (these become signature content angles)
   - 10-year target / BHAG (occasional aspirational post)
   - Marketing strategy / target market (defines the audience filter)

2. **Map the 3 wins to pillars.** Each win demonstrates one or more core values or three uniques. Note which.

3. **Build a 30-day skeleton:**
   - 4 weeks × 5 weekdays = 20 posts
   - Each week: 1 pillar theme (rotates through core values + uniques)
   - Within a week: mix formats from `post-formats.md` so the feed has texture
   - Anchor 2-3 posts per week to the wins (those become Format A, B, or F)
   - Leave 1 post per week as "live capture" — a slot reserved for whatever happens that week

4. **For each post in the skeleton, generate:**
   - Day + theme
   - Source artifact pointer (which win, which V/TO entry)
   - Format
   - Hook (first line draft)
   - Status: `draft | needs-source | scheduled`

5. **Output as a table or calendar view.** Don't draft full posts yet — that's a separate workflow. The calendar is the plan.

**Why this works:** Core values become recurring themes (so the audience hears the same drumbeat). Three uniques become signature angles (so the SME builds positioning over time). Wins become proof. The mix prevents the feed from going stale.

---

## Protocol 3: Weekly review/preview → posts

**Input:** The SME's weekly review or preview document. Should include: wins from the past week, what was learned, what they'd do differently, what's coming next week.

**Reference:** Ruben's version lives at [mytinta.app](https://mytinta.app). Other SMEs use journals, Notion docs, voice memos, or one-page reviews.

**Steps:**

1. **Extract from the review:**
   - **Wins** (with specifics — numbers, names anonymized, before/after)
   - **What I learned** (the meta-insight — the pattern or realization)
   - **What I'd do differently** (the lesson — usually the strongest post material)
   - **What surprised me** (often the best hook)

2. **Each wins, learning, or lesson becomes a candidate post.**

3. **The "what I'd do differently" entries are usually the most authentic — they have built-in vulnerability and specificity.** Lean on those.

4. **Generate 1-2 posts** (not more — the weekly review is for cadence, not a content firehose):
   - Pick the strongest moment from the week
   - Pair with a learning if relevant
   - Use Format A (Real Moment), D (One-Liner), or E (Question Behind the Question)

5. **The "what's coming next week" section seeds the following week's intake** — the model can flag candidate post topics for next week's review.

---

## Protocol 4: A specific client moment → a post

**Input:** A free-text description of a moment. ("A client said X to me on Tuesday." "A founder pushed back on my fee. Here's what happened.")

**Steps:**

1. **Ask for the missing specifics:**
   - What were the exact words?
   - What was the company size / context?
   - What did you say back?
   - What happened after?
   - What's the takeaway in one sentence?

2. **Once you have the specifics, draft using Format A or B.**

3. **Confirm anonymization** before output. Do not name companies or people unless the SME explicitly OKs it.

---

## Protocol 5: A pattern you've seen 10+ times → a post

**Input:** The SME describes a recurring pattern in their work. ("Every time a CEO hits $15M, X happens." "Every founder I work with says Y.")

**Steps:**

1. **Confirm the pattern with at least 2-3 specific examples.** If the SME can only think of one, it's a moment, not a pattern. Use Protocol 4 instead.

2. **Use Format C (Uncomfortable Truth) or E (Question Behind the Question).**

3. **Anchor the abstract pattern to a specific opener** — even if the post is about the pattern, the hook is one specific instance.

---

## What gets rejected

If the input is:
- A topic ("write me something about leadership")
- A vibe ("something inspirational")
- An audience instruction without source ("write to CEOs of $15M companies")
- A regenerate-with-different-angle request when no new artifact is provided

→ **Reject the request. Ask for an artifact.** See Rule 0.

---

*Protocols evolve. When a new kind of artifact comes in (a Loom recording, a customer support ticket, a sales pitch deck), add a protocol for it here.*
