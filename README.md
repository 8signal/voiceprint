# Signal Desk

**A folder-based AI specialist that turns subject matter experts into LinkedIn authorities — without sounding like AI.**

Signal Desk is not a LinkedIn copywriter. It refuses to write from a blank page. It only writes from artifacts you already produce: meeting transcripts, V/TO documents, weekly reviews, client wins. That constraint is the whole point.

If you're looking for a tool that hallucinates posts about "leveraging synergy in today's fast-paced business environment," close this tab. This is for operators who already have a point of view and need to operationalize it on LinkedIn.

---

## The 5-minute test

Drop this folder into a Claude project (or paste it into Claude.ai as a project). Fill in `identity.md`. Then run any workflow in `workflows/`. You should have a post in your voice in under five minutes.

If it took longer than that, the folder is broken. Open an issue.

---

## What's in here

```
signal-desk/
├── README.md                    ← you are here
├── identity.md                  ← BLANK template. Fill this first.
├── rules.md                     ← voice rules + banned AI-slop phrases
├── examples.md                  ← what good and bad output looks like
├── reference/
│   ├── intake-interview.md      ← 20 questions that build your identity.md
│   ├── post-formats.md          ← hook patterns + post archetypes
│   ├── source-protocols.md      ← how to convert transcripts / V/TO / wins → posts
│   └── identity-examples/
│       ├── ruben-8signal.md     ← Fractional CMO with AI specialty
│       ├── andrea-acp.md        ← Fractional Integrator / COO
│       └── forrest-dirt.md      ← Dirt Consulting (template)
└── workflows/
    ├── transcript-to-posts.md   ← Fireflies / Zoom transcript → 3-5 posts
    ├── vto-to-30-day-calendar.md ← V/TO + 3 wins → 30-day calendar
    └── weekly-review-to-post.md ← weekly preview/review → 1-2 posts
```

---

## Quickstart

### Option 1 — Use it cold (5 minutes)

1. Open Claude (claude.ai or Claude Code).
2. Create a new Project. Upload this entire folder to the project's knowledge.
3. Pick an identity example from `reference/identity-examples/` that's closest to you. Copy it into `identity.md` and edit it.
4. Start a chat in the project: *"Use the transcript-to-posts workflow. Here's the transcript: [paste]"*
5. Get posts in your voice.

### Option 2 — Use the intake site (10 minutes, recommended)

1. Visit **[signal-desk-eosin.vercel.app](https://signal-desk-eosin.vercel.app)** (or run the `intake-site/` Next.js app locally).
2. Answer the 20-question interview.
3. Download your generated `identity.md`.
4. Drop it into your Signal Desk project folder.

The intake site is a guided version of `reference/intake-interview.md`. Either path works.

---

## Who this is for

Subject matter experts who:

- Have a point of view shaped by years of doing the work
- Generate raw material constantly (meetings, calls, weekly reviews, client wins)
- Don't have time to write LinkedIn posts from scratch
- Hate generic AI-generated content and want their voice protected

Specifically built around Fractional Integrators, Fractional CMOs, founders, operators, and consultants — but the structure works for any expert with a niche and a voice.

---

## What makes this different

Most AI LinkedIn tools start from "give me a topic." Signal Desk starts from "give me what already happened." The artifact is the source of truth. The model's job is voice and structure, not invention.

Three principles:

1. **The folder is the operating system.** Identity is interviewed in. Rules are explicit. Examples are the gold standard. The model defers to the folder.
2. **Source-grounded only.** No posts without artifacts. If you don't have a transcript, V/TO entry, or client win to point to, the system asks for one.
3. **Voice protection is non-negotiable.** Banned phrases are banned. AI tells get caught before they ship. The voice check runs every time.

---

## Built with [ICM methodology](https://github.com/jakevc/interpretable-context-methodology)

Folders as architecture. Identity, rules, examples, reference, README. Each file does one job. The folder is reusable, shareable, and portable across Claude projects.

This was built for [Comp #3 of Jake Van Clief's community](https://www.skool.com/) — the specialist comp.

---

## License

MIT. Fork it. Build your own. Send me what you make.

— Ruben at 8 SIGNAL ([8signal.com](https://www.8signal.com))
