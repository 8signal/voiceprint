import Link from "next/link";

export default function Playbook() {
  return (
    <main className="min-h-screen">
      <header className="border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-700" />
            <span className="serif text-xl">Voiceprint</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link href="/" className="text-stone-600 hover:text-stone-900">
              Home
            </Link>
            <Link href="/intake" className="text-stone-600 hover:text-stone-900">
              Build identity
            </Link>
            <a
              href="https://cal.com/8signal/voiceprint"
              target="_blank"
              rel="noreferrer"
              className="bg-stone-900 text-stone-50 px-4 py-2 rounded-full hover:bg-stone-800 transition-colors"
            >
              Book a call
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-24">
        <div className="text-xs uppercase tracking-[0.2em] text-amber-800 mb-6">
          The Playbook · done with you
        </div>
        <h1 className="serif text-6xl md:text-7xl leading-[1.05] mb-8 max-w-4xl">
          Your LinkedIn growth engine,
          <br />
          <span className="text-stone-500">run by operators.</span>
        </h1>
        <p className="text-xl text-stone-600 max-w-2xl leading-relaxed mb-10">
          The Playbook is a complete LinkedIn system, built around your voice
          and executed alongside your team. Eight modules. Four-week build.
          Monthly execution. No more guessing what to post.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://cal.com/8signal/voiceprint"
            target="_blank"
            rel="noreferrer"
            className="bg-stone-900 text-stone-50 px-6 py-3 rounded-full hover:bg-stone-800 transition-colors text-base font-medium"
          >
            Book a discovery call →
          </a>
          <Link
            href="#modules"
            className="border border-stone-300 px-6 py-3 rounded-full hover:border-stone-900 transition-colors text-base"
          >
            See what&apos;s inside
          </Link>
        </div>
      </section>

      {/* Who this is for */}
      <section className="bg-stone-900 text-stone-100">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="text-xs uppercase tracking-[0.2em] text-amber-400 mb-6">
            Who this is for
          </div>
          <h2 className="serif text-4xl md:text-5xl leading-tight mb-10 max-w-3xl">
            Subject matter experts who already have a point of view
            <span className="text-stone-400">, and don&apos;t have time to post.</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                t: "Fractional executives",
                d: "Fractional COOs, Integrators, CMOs, and CFOs who need LinkedIn working for them every week without becoming a full-time content job.",
              },
              {
                t: "Founder-led companies",
                d: "CEOs and founders of $5M-$50M businesses who want their voice on LinkedIn as a credibility engine, not their assistant&apos;s voice.",
              },
              {
                t: "Niche operators",
                d: "Coaches, advisors, and consultants serving narrow markets where authority is currency and generic content kills you.",
              },
            ].map((row) => (
              <div key={row.t}>
                <h3 className="serif text-2xl mb-3 text-stone-50">{row.t}</h3>
                <p className="text-stone-400 leading-relaxed">{row.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section id="modules" className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-xs uppercase tracking-[0.2em] text-amber-800 mb-6">
          What&apos;s in the system
        </div>
        <h2 className="serif text-4xl md:text-5xl mb-6 max-w-3xl">
          Eight modules. One system.
        </h2>
        <p className="text-lg text-stone-600 max-w-2xl leading-relaxed mb-16">
          Every Playbook engagement includes all eight. Some clients lean
          heavier on the Content Engine; others lean on Campaigns. We tune the
          weight to your business, but the foundation is the foundation.
        </p>

        <div className="space-y-12">
          {modules.map((m, i) => (
            <div
              key={m.title}
              className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-start pb-12 border-b border-stone-200 last:border-0"
            >
              <div className="mono text-amber-700 text-sm">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="serif text-3xl mb-3">{m.title}</h3>
                <p className="text-stone-600 leading-relaxed mb-4">{m.body}</p>
                <ul className="text-sm text-stone-500 space-y-1.5">
                  {m.includes.map((line) => (
                    <li key={line} className="flex gap-3">
                      <span className="text-amber-700 mono">·</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-stone-100 border-y border-stone-200">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="text-xs uppercase tracking-[0.2em] text-amber-800 mb-6">
            How it works
          </div>
          <h2 className="serif text-4xl md:text-5xl mb-16 max-w-3xl">
            Three phases. Built fast. Run consistently.
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                phase: "Phase 1 · Build",
                weeks: "Weeks 1-4",
                body: "Drop us 3-5 transcripts (testimonials, L10s, sales calls, parody clips). We populate your identity file from the source material in days, not weeks. Then we build all eight modules around it. By week four, you have a complete system and a 30-day calendar ready to run.",
              },
              {
                phase: "Phase 2 · Launch",
                weeks: "Weeks 5-8",
                body: "We publish. You review. We tune the voice in real-time as posts go out. Engagement strategy turns on. The first themed campaign goes live.",
              },
              {
                phase: "Phase 3 · Compound",
                weeks: "Month 3+",
                body: "Monthly retainer keeps the engine running. Every new transcript gets read twice — once for post material, once for new voice tics. Approved tics fold into your identity file automatically. The voice gets sharper every month without you maintaining it.",
              },
            ].map((p) => (
              <div key={p.phase}>
                <div className="mono text-amber-700 text-sm mb-2">{p.weeks}</div>
                <h3 className="serif text-2xl mb-3">{p.phase}</h3>
                <p className="text-stone-600 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Continuous voice tuning */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-xs uppercase tracking-[0.2em] text-amber-800 mb-6">
          The voice tunes itself
        </div>
        <h2 className="serif text-4xl md:text-5xl mb-6 max-w-3xl">
          Drop transcripts. We read them twice.
        </h2>
        <p className="text-lg text-stone-600 max-w-3xl leading-relaxed mb-10">
          Most voice systems get stale the day they ship. Voiceprint doesn&apos;t.
          Every transcript you drop into the system gets read twice. First pass
          for the post material you asked for. Second pass for the voice tics,
          signature openers, and AI-slop cousins hiding inside your own words.
        </p>
        <p className="text-lg text-stone-600 max-w-3xl leading-relaxed mb-16">
          New patterns get logged. Cross-transcript repeats get flagged as
          high-confidence signatures. Every month we surface the candidates: approve,
          reject, or refine. Approved tics fold into your identity file automatically.
          Your voice on LinkedIn keeps catching up to your voice in real life,
          without you ever having to maintain a doc.
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              n: "Transcripts in",
              title: "Bring what already happened",
              body: "Fireflies meetings, sales calls, podcast appearances, video testimonials, parody clips, L10s. The more variety, the more dimensional the identity file gets.",
            },
            {
              n: "Voice signal out",
              title: "New tics caught automatically",
              body: "Openers, transitions, coined phrases, banned-AI cousins, archetype moves. Each candidate logged with source pointer and example sentence in your private voice-tics file.",
            },
            {
              n: "You stay in the loop",
              title: "Approve, reject, refine",
              body: "Once a month we walk you through the candidates. The ones that survive ship into your identity file. The voice keeps tuning itself in real time, with one human still in the driver&apos;s seat.",
            },
          ].map((step) => (
            <div key={step.n}>
              <div className="mono text-amber-700 text-sm mb-4">{step.n}</div>
              <h3 className="serif text-2xl mb-3">{step.title}</h3>
              <p className="text-stone-600 leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-xs uppercase tracking-[0.2em] text-amber-800 mb-6">
          Investment
        </div>
        <h2 className="serif text-4xl md:text-5xl mb-12 max-w-3xl">
          Two ways to engage.
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-stone-200 rounded-2xl p-8 bg-white">
            <div className="mono text-amber-700 text-sm mb-3">Build only</div>
            <h3 className="serif text-3xl mb-3">The Build</h3>
            <p className="text-stone-600 leading-relaxed mb-6">
              We build the full system in four weeks. You run it. Includes all
              eight modules, the 30-day calendar, and a working voice file. One
              flat fee. No retainer.
            </p>
            <ul className="text-sm text-stone-500 space-y-2 mb-8">
              <li>· Four-week build sprint</li>
              <li>· All eight modules delivered</li>
              <li>· One themed campaign included</li>
              <li>· 90-day post-launch voice support</li>
            </ul>
            <a
              href="https://cal.com/8signal/voiceprint"
              target="_blank"
              rel="noreferrer"
              className="inline-block border border-stone-300 px-5 py-2.5 rounded-full hover:border-stone-900 transition-colors text-sm"
            >
              Discuss the Build →
            </a>
          </div>
          <div className="border border-stone-900 rounded-2xl p-8 bg-stone-900 text-stone-100">
            <div className="mono text-amber-400 text-sm mb-3">Recommended</div>
            <h3 className="serif text-3xl mb-3 text-stone-50">Build + Run</h3>
            <p className="text-stone-300 leading-relaxed mb-6">
              We build the system, then run it monthly. Posts get drafted from
              your real artifacts. Campaigns ship on schedule. Your voice stays
              protected. Your calendar stays full.
            </p>
            <ul className="text-sm text-stone-400 space-y-2 mb-8">
              <li>· Everything in The Build</li>
              <li>· Monthly content drafted from your artifacts</li>
              <li>· One themed campaign per quarter</li>
              <li>· Engagement strategy executed weekly</li>
              <li>· Monthly metrics review</li>
            </ul>
            <a
              href="https://cal.com/8signal/voiceprint"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-stone-50 text-stone-900 px-5 py-2.5 rounded-full hover:bg-amber-100 transition-colors text-sm font-medium"
            >
              Discuss Build + Run →
            </a>
          </div>
        </div>
        <p className="text-sm text-stone-500 mt-8 max-w-xl">
          Engagement size depends on your industry, audience, and goals. We
          quote after the discovery call. No surprises, no upsells.
        </p>
      </section>

      {/* Final CTA */}
      <section className="bg-stone-900 text-stone-100">
        <div className="max-w-5xl mx-auto px-6 py-24 text-center">
          <h2 className="serif text-5xl md:text-6xl mb-8 leading-tight text-stone-50">
            Want LinkedIn off your plate?
          </h2>
          <p className="text-xl text-stone-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Start with a 30-minute discovery call. We&apos;ll look at your
            audience, your voice, and what&apos;s actually getting in the way.
            No pitch deck.
          </p>
          <a
            href="https://cal.com/8signal/voiceprint"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-amber-500 text-stone-900 px-8 py-4 rounded-full hover:bg-amber-400 transition-colors text-lg font-medium"
          >
            Book a discovery call →
          </a>
        </div>
      </section>

      <footer className="border-t border-stone-200">
        <div className="max-w-5xl mx-auto px-6 py-10 flex flex-wrap items-center justify-between gap-4 text-sm text-stone-500">
          <div>
            Built and operated by{" "}
            <a
              href="https://www.8signal.com"
              target="_blank"
              rel="noreferrer"
              className="text-stone-700 hover:text-stone-900"
            >
              8 SIGNAL
            </a>
            .
          </div>
          <Link href="/" className="text-stone-700 hover:text-stone-900">
            ← Back to Voiceprint
          </Link>
        </div>
      </footer>
    </main>
  );
}

const modules = [
  {
    title: "The Voice System",
    body: "Your voice on LinkedIn, protected from AI drift. We capture how you actually sound, vocabulary, sentence rhythm, banned phrases, gold-standard references, so every post passes for you, not for a generic LinkedIn ghostwriter.",
    includes: [
      "Voice profile distilled from real transcripts and writing samples",
      "Banned-phrase library specific to your voice",
      "Voice check that runs on every draft before it ships",
      "Side-by-side examples of what good and bad output looks like for you",
    ],
  },
  {
    title: "The Profile System",
    body: "Your LinkedIn profile audited and rebuilt as a conversion tool. When a post lands and a stranger clicks through, your profile answers their three questions in five seconds: who is this, can they help me, what do I do next?",
    includes: [
      "Headline, banner, About, Featured, and Experience rewritten",
      "ICP-aligned positioning across every section",
      "Custom URL, contact info, and CTA flow",
      "Recommendation strategy and skills curation",
    ],
  },
  {
    title: "The Audience Map",
    body: "Your ideal client defined in plain language. Not a buyer persona deck. The version you'd describe to a stranger at a dinner party, what they say out loud, what keeps them up at night, what they actually want.",
    includes: [
      "Named persona with daily pain and desired outcome",
      "Verbatim language your audience uses (so your posts mirror it)",
      "Where they spend time and who they trust",
      "What they don't want (equally important)",
    ],
  },
  {
    title: "The Compliance Layer",
    body: "Industry-specific language guardrails. If you operate in EOS, finance, healthcare, or legal, there are words you can't say and frameworks you can't claim. We map them all so your content never gets flagged.",
    includes: [
      "Trademark and certification compliance review",
      "Approved vs. flagged terminology lists",
      "Disclosure language where required",
      "Approved alternatives for restricted phrases",
    ],
  },
  {
    title: "The Content Engine",
    body: "The system that turns your meetings, planning documents, weekly reviews, and client wins into LinkedIn posts in your voice. No more staring at a blank page. The system requires source material, and you already have plenty.",
    includes: [
      "Transcript-to-posts conversion (Fireflies, Otter, Zoom)",
      "Weekly-review-to-posts conversion",
      "Client-win-to-posts conversion",
      "Six post formats matched to artifact shape",
    ],
  },
  {
    title: "The 30-Day Cadence",
    body: "A themed monthly rhythm built on your core values and unique positioning. Each week has a theme. Each day has a format. One slot per week stays open for live capture from this week's real moments.",
    includes: [
      "30-day calendar drafted from your strategic plan",
      "Pillar themes mapped to your core values",
      "Format mix that keeps the feed from going stale",
      "Live-capture slots for real-time material",
    ],
  },
  {
    title: "The Campaign Pack",
    body: "Multi-week themed pushes with a story arc, not random posts. Each campaign opens with a hook, builds across 6-8 posts, and closes with a clear next step. Pairs with email sequences for the full nurture.",
    includes: [
      "8-post campaign blueprint per quarter",
      "Paired email nurture sequence (6 emails, 14 days)",
      "Hook-and-CTA quality gate per post",
      "Repurposing playbook (LinkedIn → email → blog → short video)",
    ],
  },
  {
    title: "The Engagement Strategy",
    body: "The 30-minute daily routine that actually moves pipeline, without becoming an addiction. Targeted commenting on the right people's posts, passive and active DM strategy, and how to never pitch in a comment thread.",
    includes: [
      "Target list of 25-50 people to engage with weekly",
      "Comment templates and rules (no 'Great post!')",
      "Passive vs. active DM playbook",
      "Monthly metrics review focused on pipeline, not vanity",
    ],
  },
];
