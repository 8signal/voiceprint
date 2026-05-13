# Workflow: Transcript → Posts

Convert a meeting transcript (Fireflies, Otter, Zoom, internal recording) into 3-5 LinkedIn-ready posts in the SME's voice.

This is the highest-leverage workflow in Voiceprint. SMEs already produce hours of transcripts every week. The transcripts are the gold mine.

---

## When to use this

- After a client L10 with rich Issues List discussion
- After a sales call where a prospect named a specific pain
- After a leadership meeting where a real decision was made
- After a coaching call where a manager broke through on something

**Do NOT use this for:**
- Marketing or sales pitch meetings (the SME isn't being themselves)
- Public webinars or panels (already public, no insight value)
- Casual Zooms with no decisions or insights

---

## The prompt

In a Claude project with Voiceprint loaded, paste:

```
Run the transcript-to-posts workflow.

Identity: [pointer to identity.md, or paste it inline]

Transcript source: [Fireflies / Otter / Zoom / internal]
Date: [date]
Participants: [roles only, anonymize]
Context: [1-2 sentences on what kind of meeting and what was discussed]

Transcript:
[paste transcript here]
```

---

## What the model does

1. **Reads `identity.md`, `rules.md`, `examples.md`.** Establishes voice baseline.
2. **Skims the transcript for moments, not topics** (per `reference/source-protocols.md`, Protocol 1).
3. **Pulls 3-5 candidate moments** with verbatim quotes, anonymized participants, before/after.
4. **Scores each moment** for post potential (specific quote, theme alignment, SME comfort, has a punch).
5. **Opens an opener tracker** (Rule 14). One line per post-to-draft, opener type recorded as drafted.
6. **Drafts post 1** using a format from `reference/post-formats.md`. Records its opener type in the tracker.
7. **Before drafting post 2**, re-reads the tracker. Picks a different opener type. Drafts. Records.
8. **Repeats for posts 3 through N**, picking an unused or recently-unused opener type each time (Rule 14).
9. **Runs the voice check** (Rule 3) on each draft AND the batch-level smell test from Rule 14 (read all openers in sequence, out loud, before output).
10. **Outputs** in the format from Rule 7.

---

## What you get

```
**Candidate Moments (top 5)**

1. [Verbatim quote from transcript]
   - Speaker: [anonymized role]
   - Theme: [which identity.md theme]
   - Format suggestion: [A-F]
   - Score: [strong / medium / weak]

[...]

---

**Post 1: [type, e.g., The Real Moment]**

[Full post body, ready to paste into LinkedIn]

---

**Why this works:**
- [1-2 sentences on voice fit]

**Source:** Transcript line ~XX, [speaker role] said "[verbatim quote]"

[Repeat for 2-3 more posts]
```

---

## Maya's specialty case

For Fractional Integrators / COOs running EOS L10s, the **Issues List / IDS section is the goldmine**. The structure of IDS, Identify the issue, Discuss it, Solve it, produces clean before/after material every meeting.

When pulling from an L10:
1. Skip the segue, scorecard, rocks, and headlines unless something specific landed there
2. Focus on the IDS section
3. For each issue solved, ask: was there a moment of resistance, surprise, or breakthrough?
4. Those moments become Format A or B posts

---

## Quality gate

Before output, the model checks:

- [ ] Each post has a verbatim quote, real number, or specific scene
- [ ] Anonymization is complete (no company names, no person names)
- [ ] Voice pillars from `identity.md` are visible in the prose
- [ ] Banned phrases (`rules.md` Rule 2) are absent
- [ ] No em dashes
- [ ] Each post is 150-400 words
- [ ] Hook is in line 1, no setup paragraph
- [ ] Closer is a punch, not engagement bait
- [ ] **Opener types rotate across the batch** (Rule 14). Read the openers of the batch in sequence; no two consecutive posts share an opener type. No default fallback template (e.g., *"A founder I work with..."*) repeated across the batch.

If any check fails, the post gets rewritten before showing the user. If Rule 14 fails, the rebuild starts from post 2, not post N — the rotation is structural, not cosmetic.

---

## Iteration

The user can ask:
- "Generate two more from a different angle"
- "Rewrite post 2 in Format C instead"
- "This doesn't sound like me, line 3 specifically"

Each iteration reads `identity.md` again and updates banned phrases / vocabulary if the user adds new rules.

---

*This workflow pairs naturally with `weekly-review-to-post.md`, transcripts catch the moments, weekly reviews catch the patterns. Use both.*
