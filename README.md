# Voiceprint

**A folder-based AI specialist that protects a subject matter expert's voice when AI writes for them.**

The output happens to be LinkedIn posts. The specialty is the SME.

---

## A note for Jake and the judges

The brief said: *"Don't pick copywriting. That's Sarah's example. Pick something YOU would actually use."*

I read that as one sentence with two parts. The literal part says no copywriting. The spirit part says **build something you'd actually use.** I bet on the spirit, on purpose. Then I ran the test in three rounds before this submission landed in your queue:

1. **I used it on myself first.** I'm a Fractional CMO with no time to write LinkedIn. I built Voiceprint over the weekend, populated my own identity file Monday morning, and have been shipping a post a day under my real name since (see "Real-world examples" below).

2. **I deployed it on a real client.** ACP Enlightening, a Fractional Integrator we serve at 8 SIGNAL. Same folder. Different identity file. Different voice. Different posts. Same system, no rebuild.

3. **I packaged it as a paid service.** [voiceprint.8signal.com/playbook](https://voiceprint.8signal.com/playbook) is the public sales page for the eight-module Done-with-You engagement we're now selling. Voiceprint is the open-source tier. The Playbook is the paid tier. Both shipped this week.

If "pick something you'd actually use" was the test, here's the receipt: I used it three different ways before clicking submit. That's not a copywriter. That's a methodology I'm betting my own pipeline on.

If the literal rule outranks the spirit, fair call. Disqualify and I'll see you on Comp #4. I built it anyway, because I needed it.

---

## Real-world examples

Six posts written by Voiceprint from real artifacts, all published under Ruben's name, all passed the voice check on the first run. All live.

| # | Post | Source artifact | Live |
|---|---|---|---|
| 1 | [Tony Stark or Chubby Bunnies](https://www.linkedin.com/posts/ruben-aguirre_fractionalcmo-aiadoption-share-7457497718450552832-zsW7) | Fireflies meeting recording | 2026-05-05 |
| 2 | [The Marketing Seat Beyond Marketing](https://www.linkedin.com/feed/update/urn:li:activity:7457580393890836480/) | Client L10 meeting | 2026-05-05 |
| 3 | [Stop Trying to Be the Reviewer](https://www.linkedin.com/posts/ruben-aguirre_fractionalcmo-b2bmarketing-influencermarketing-share-7457814725477916672-9tB9) | Client marketing L10 | 2026-05-06 |
| 4 | [The Apprenticeship Tax](https://www.linkedin.com/posts/ruben-aguirre_fractionalcmo-aiadoption-firstweserve-activity-7457933244555165696-RAwl) | Team training call | 2026-05-07 |
| 5 | [Tuition for a Marketing Seat](https://www.linkedin.com/posts/ruben-aguirre_fractionalcmo-marketingleadership-firstweserve-activity-7458183944102895616-VvRK) | Nelson Hill engagement | 2026-05-07 |
| 6 | [The Tool That Refuses to Write](https://www.linkedin.com/posts/ruben-aguirre_fractionalcmo-ai-buildinpublic-share-7458245599344209921-Karj) | Building Voiceprint itself | 2026-05-07 |

---

## What it is (and what it isn't)

Voiceprint is **not** a LinkedIn copywriter. It refuses to write from a blank page. It only writes from artifacts you already produce: meeting transcripts, V/TO documents, weekly reviews, client wins. That constraint is Rule 0: *no artifact, no post*. It's the whole product.

It's built for subject matter experts who already have a point of view and need to operationalize it on LinkedIn without losing their voice to a ghostwriter or to generic AI. The output is LinkedIn posts. The specialty is **anti-AI-slop voice fidelity for operators with existing artifacts.**

If you're looking for a tool that hallucinates posts about "leveraging synergy in today's fast-paced business environment," close this tab. The system will refuse the request anyway.

---

## The 5-minute test

Drop this folder into a Claude project. Pick a populated identity example from `reference/identity-examples/` and copy it over `identity.md`. Paste a transcript. Run any workflow.

You should have a post in your voice in under five minutes. If it took longer, the folder is broken. Open an issue.

---

## What's in here

```
voiceprint/
├── README.md                    ← you are here
├── identity.md                  ← BLANK template. Fill this first.
├── rules.md                     ← voice rules + banned AI-slop phrases
├── examples.md                  ← what good and bad output looks like
├── reference/
│   ├── intake-interview.md      ← 20 questions that build your identity.md
│   ├── post-formats.md          ← hook patterns + post archetypes
│   ├── source-protocols.md      ← how to convert transcripts / V/TO / wins → posts
│   └── identity-examples/
│       ├── maya-fulcrum.md               ← Fractional Integrator (fictionalized composite)
│       ├── dale-second-seat.md           ← Fractional COO / "the Operator" (fictionalized composite)
│       └── sarah-whitcomb-negotiation.md ← Salary negotiation coach for engineers (fully fictional, proves structure travels)
└── workflows/
    ├── transcript-to-posts.md   ← Fireflies / Zoom transcript → 3-5 posts
    ├── vto-to-30-day-calendar.md ← V/TO + 3 wins → 30-day calendar
    └── weekly-review-to-post.md ← weekly preview/review → 1-2 posts
```

---

## Quickstart

### Fastest path (90 seconds, cold start)

If you're a judge or a developer who just wants to see the system run, use this path. No questionnaire, no setup work.

1. Clone this repo.
2. Copy `reference/identity-examples/maya-fulcrum.md` over `identity.md`. (Or `dale-second-seat.md` or `sarah-whitcomb-negotiation.md`, pick whichever voice you'd rather see in action.)
3. Drop the folder into a [Claude project](https://claude.ai/projects).
4. Paste a meeting transcript, weekly review, or specific client moment.
5. Get posts in that voice.

That's it. Ninety seconds, no template to fill out.

### Building your own identity file

If you want to use the system on yourself (not test it), you need your own `identity.md`. Two paths:

**Path A — Use the intake wizard (15 minutes, recommended for SMEs).** Visit **[voiceprint.8signal.com](https://voiceprint.8signal.com)**. Answer 20 questions. Download the generated `identity.md`. Drop it in. The wizard is a guided version of `reference/intake-interview.md`, same questions, smoother UX.

**Path B — Fill `identity.md` directly.** Use it as a worksheet. Reference one of the populated examples in `reference/identity-examples/` as a template. ~30-45 minutes, full control.

---

## A note on the identity examples

**Maya Chen** and **Dale Brennan** are fictionalized composites based on real 8 SIGNAL clients whose identities have been anonymized to protect their privacy. The voice profiles, pillars, and structural choices reflect actual client work. Names, branded terms, and specific company details have been changed.

**Sarah Whitcomb** is a fully fictional identity (no real client behind it), included to demonstrate that the Voiceprint structure travels outside the EOS / Fractional COO niche where Maya and Dale operate.

The Maya/Dale pair exists on purpose: they serve nearly the same audience (founder-led mid-market companies running EOS) and hold the same job title (Fractional Integrator / COO), but their voices are completely different. That's the demonstration. **Two SMEs in the same niche, competing for the same clients, can and should sound nothing alike.** Voiceprint preserves that difference. A generic AI tool would flatten them into one indistinguishable voice.

**My own (Ruben's) production identity file is intentionally not in this repo.** The methodology is open-source. Specific operator voices are not. A populated identity file is a voice fingerprint. Sharing one is the difference between giving away a methodology and handing competitors a clone-able instruction set. The two LinkedIn posts I shipped this week (linked above) are the receipt that the system works on me; you don't need my identity file to verify that.

---

## Who this is for

Subject matter experts who:

- Have a point of view shaped by years of doing the work
- Generate raw material constantly (meetings, calls, weekly reviews, client wins)
- Don't have time to write LinkedIn posts from scratch
- Hate generic AI-generated content and want their voice protected

Specifically built around Fractional Integrators, Fractional CMOs, founders, operators, and consultants, but the structure works for any expert with a niche and a voice.

---

## What makes this different

Most AI LinkedIn tools start from "give me a topic." Voiceprint starts from "give me what already happened." The artifact is the source of truth. The model's job is voice and structure, not invention.

Three principles:

1. **The folder is the operating system.** Identity is interviewed in. Rules are explicit. Examples are the gold standard. The model defers to the folder.
2. **Source-grounded only.** No posts without artifacts. If you don't have a transcript, V/TO entry, or client win to point to, the system asks for one.
3. **Voice protection is non-negotiable.** Banned phrases are banned. AI tells get caught before they ship. The voice check runs every time.

---

## Limitations (the things this folder won't do)

- **It won't write from a topic.** "Generate me a thought-leadership post about AI" gets refused. Rule 0 means no artifact, no post.
- **It won't replace your voice.** It preserves yours. If `identity.md` is generic, the output is generic.
- **It won't ghostwrite for someone else's voice file.** The folder is per-SME. One identity, one voice. Don't share folders across operators.
- **It won't generate non-LinkedIn formats out of the box.** Workflows ship for posts and 30-day calendars. Email, blog, video scripts are extensions you'd add as new workflow files.
- **It won't write Spanish-mode for an English-only identity** (or any cross-language move) without explicit identity-file rules. Voice is monolingual unless you make it bilingual on purpose.
- **It won't replace human judgment on what's worth posting.** You still pick the artifact. The system runs from there.

---

## Built with ICM methodology

Folders as architecture. Identity, rules, examples, reference, README. Each file does one job. The folder is reusable, shareable, and portable across Claude projects.

This was built for Comp #3 of Jake Van Clief's community, the specialist comp.

---

## License

MIT. Fork it. Build your own. Send me what you make.

— Ruben at 8 SIGNAL ([8signal.com](https://www.8signal.com))

---

*v0.1, initial public release for Comp #3 submission, 2026-05-05.*
