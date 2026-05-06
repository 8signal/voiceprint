import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-700" />
            <span className="serif text-xl">Voiceprint</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#proof" className="text-stone-600 hover:text-stone-900">
              See it work
            </a>
            <Link
              href="/playbook"
              className="text-stone-600 hover:text-stone-900"
            >
              Done with you
            </Link>
            <a
              href="https://github.com/8signal/voiceprint"
              target="_blank"
              rel="noreferrer"
              className="text-stone-600 hover:text-stone-900"
            >
              GitHub
            </a>
            <Link
              href="/intake"
              className="bg-stone-900 text-stone-50 px-4 py-2 rounded-full hover:bg-stone-800 transition-colors"
            >
              Build my identity
            </Link>
          </nav>
        </div>
      </header>

      {/* HERO — outcome first, no backend mention */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-24">
        <div className="text-xs uppercase tracking-[0.2em] text-amber-800 mb-6">
          For subject matter experts who already have a voice
        </div>
        <h1 className="serif text-6xl md:text-7xl leading-[1.05] mb-8 max-w-4xl">
          Your voice on LinkedIn.
          <br />
          <span className="text-stone-500">Not a copywriter&apos;s.</span>
        </h1>
        <p className="text-xl text-stone-600 max-w-2xl leading-relaxed mb-10">
          A 30-minute meeting becomes a LinkedIn post you&apos;d actually want
          to post. In your voice. Not the AI version of you. No blank-page
          prompts, no &ldquo;leveraging synergy in today&apos;s fast-paced
          business environment.&rdquo;
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/intake"
            className="bg-stone-900 text-stone-50 px-6 py-3 rounded-full hover:bg-stone-800 transition-colors text-base font-medium"
          >
            Build my identity file →
          </Link>
          <a
            href="#proof"
            className="border border-stone-300 px-6 py-3 rounded-full hover:border-stone-900 transition-colors text-base"
          >
            See it work first
          </a>
        </div>
      </section>

      {/* VIDEO */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="aspect-video bg-stone-100 border border-stone-200 rounded-2xl overflow-hidden flex items-center justify-center relative">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-stone-900 mx-auto mb-4 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="ml-1">
                <path d="M5 3l12 7-12 7V3z" fill="white" />
              </svg>
            </div>
            <div className="text-stone-500 text-sm">60-second intro from Ruben</div>
            <div className="text-stone-400 text-xs mt-1 mono">[video coming soon]</div>
          </div>
        </div>
      </section>

      {/* PROOF — finished posts in the wild */}
      <section id="proof" className="bg-stone-100 border-y border-stone-200">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="text-xs uppercase tracking-[0.2em] text-amber-800 mb-6">
            It already works
          </div>
          <h2 className="serif text-4xl md:text-5xl mb-6 max-w-3xl">
            Two posts shipped in the wild this week.
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl leading-relaxed mb-12">
            Both written by Voiceprint from real artifacts. Both published under
            Ruben&apos;s name on LinkedIn. Both passed the voice check on the
            first run. Read them, then come back if you want to see how they
            were made.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="https://www.linkedin.com/posts/ruben-aguirre_fractionalcmo-aiadoption-share-7457497718450552832-zsW7"
              target="_blank"
              rel="noreferrer"
              className="block bg-white border border-stone-200 rounded-xl p-6 hover:border-stone-900 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-stone-900 text-stone-50 flex items-center justify-center text-sm font-medium">
                  RA
                </div>
                <div>
                  <div className="font-medium text-stone-900">Ruben Aguirre</div>
                  <div className="text-xs text-stone-500">Source: Fireflies meeting recording</div>
                </div>
              </div>
              <p className="text-stone-700 leading-relaxed mb-3">
                &ldquo;I said: &lsquo;We are ALL Tony Stark now.&rsquo; She
                said: &lsquo;Yeah... if we want to be.&rsquo; I said:
                &lsquo;Or we could be the chubby bunnies from Wall-E.&rsquo;
                She paused. &lsquo;I mean, it&apos;s tempting...&rsquo;&rdquo;
              </p>
              <div className="text-sm text-amber-800 group-hover:text-amber-900">
                Read on LinkedIn →
              </div>
            </a>

            <a
              href="https://www.linkedin.com/feed/update/urn:li:activity:7457580393890836480/"
              target="_blank"
              rel="noreferrer"
              className="block bg-white border border-stone-200 rounded-xl p-6 hover:border-stone-900 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-stone-900 text-stone-50 flex items-center justify-center text-sm font-medium">
                  RA
                </div>
                <div>
                  <div className="font-medium text-stone-900">Ruben Aguirre</div>
                  <div className="text-xs text-stone-500">Source: client L10 meeting</div>
                </div>
              </div>
              <p className="text-stone-700 leading-relaxed mb-3">
                &ldquo;Some weeks I&apos;m the marketing seat. Some weeks
                I&apos;m the seat next to a founder who needs to hear
                she&apos;s not the nurse who has to help everyone but herself.
                Both are the job. The scorecard only tracks one.&rdquo;
              </p>
              <div className="text-sm text-amber-800 group-hover:text-amber-900">
                Read on LinkedIn →
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="bg-stone-900 text-stone-100">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="text-xs uppercase tracking-[0.2em] text-amber-400 mb-6">
            What makes it different
          </div>
          <h2 className="serif text-4xl md:text-5xl leading-tight mb-10 max-w-3xl">
            Most AI LinkedIn tools start from{" "}
            <em className="text-amber-300">&ldquo;give me a topic.&rdquo;</em>
            <br />
            Voiceprint starts from{" "}
            <em className="text-amber-300">&ldquo;give me what already happened.&rdquo;</em>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div>
              <div className="text-stone-400 text-sm mb-3 mono">// generic AI</div>
              <p className="text-stone-300 leading-relaxed">
                Hallucinated thought-leadership about leveraging synergy in
                today&apos;s fast-paced business environment. Em dashes. Bullet lists
                of 5 tips. &ldquo;Here&apos;s the thing nobody tells you about
                leadership.&rdquo;
              </p>
            </div>
            <div>
              <div className="text-amber-400 text-sm mb-3 mono">// Voiceprint</div>
              <p className="text-stone-100 leading-relaxed">
                Source-grounded posts in your actual voice. Pulled from your
                Fireflies transcript, your weekly review, the client moment that
                happened on Tuesday. Banned phrases caught before they ship. Voice
                protected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY IT SOUNDS LIKE YOU — the voice layer */}
      <section id="how-it-works" className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-xs uppercase tracking-[0.2em] text-amber-800 mb-6">
          Why it sounds like you
        </div>
        <h2 className="serif text-4xl md:text-5xl mb-6 max-w-3xl">
          Voice fingerprint, banned phrases, gold-standard reference.
        </h2>
        <p className="text-lg text-stone-600 max-w-2xl leading-relaxed mb-16">
          The system reads three things on every run: who you are, what you
          refuse to sound like, and what good output actually looks like in
          your voice. The model defers to those rules every time. That&apos;s
          why two SMEs in the same job title can run the same workflow and
          sound nothing alike.
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              n: "Identity",
              title: "Who you are, in your words",
              body: "Your audience, your voice pillars, the verbatim phrases you actually say. Pulled from real conversations, not invented. The model can&apos;t generate voice details that aren&apos;t in this file.",
            },
            {
              n: "Rules",
              title: "What you refuse to sound like",
              body: "AI-slop banned phrases, your personal close-cousins, em dashes (the biggest tell). Every draft passes through the rules check before you see it.",
            },
            {
              n: "Examples",
              title: "Gold-standard reference",
              body: "Side-by-side BAD vs GOOD outputs in your voice. The model matches the GOOD shape; the BAD examples are training-by-counterexample. Three populated identities ship in the folder.",
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

      {/* HOW YOU USE IT */}
      <section className="bg-stone-100 border-y border-stone-200">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="text-xs uppercase tracking-[0.2em] text-amber-800 mb-6">
            How you use it
          </div>
          <h2 className="serif text-4xl md:text-5xl mb-12 max-w-3xl">
            Three steps. Fifteen minutes. Then run it weekly.
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                n: "01",
                title: "Build your identity",
                body: "Twenty questions, one downloadable file. Done in 15 minutes. The wizard pulls voice pillars and vocabulary specific to you, not a template.",
              },
              {
                n: "02",
                title: "Drop in an artifact",
                body: "A meeting transcript, a weekly review, a client moment, a V/TO entry. Anything that already happened. The system refuses to write from a blank topic.",
              },
              {
                n: "03",
                title: "Get posts in your voice",
                body: "Three to five posts per artifact, ready for review. Voice check runs on every draft. You publish, edit, or kill — the system learns either way.",
              },
            ].map((step) => (
              <div key={step.n}>
                <div className="mono text-amber-700 text-sm mb-4">{step.n}</div>
                <h3 className="serif text-2xl mb-3">{step.title}</h3>
                <p className="text-stone-600 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h2 className="serif text-5xl md:text-6xl mb-8 leading-tight">
          Ready to build your voice?
        </h2>
        <p className="text-xl text-stone-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Twenty questions. One markdown file. A LinkedIn rhythm that finally
          sounds like you.
        </p>
        <Link
          href="/intake"
          className="inline-block bg-stone-900 text-stone-50 px-8 py-4 rounded-full hover:bg-stone-800 transition-colors text-lg font-medium"
        >
          Start the intake →
        </Link>
        <div className="mt-6 text-sm text-stone-500">
          Or if you&apos;d rather we run the whole system for you,{" "}
          <Link href="/playbook" className="text-stone-700 underline hover:text-stone-900">
            see the Playbook
          </Link>
          .
        </div>
      </section>

      {/* FOR DEVELOPERS — backend, intentionally last */}
      <section className="border-t border-stone-200 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="text-xs uppercase tracking-[0.2em] text-stone-500 mb-6">
            For developers and ICM judges
          </div>
          <h2 className="serif text-3xl md:text-4xl mb-6 max-w-3xl">
            Under the hood: a folder.
          </h2>
          <p className="text-stone-600 leading-relaxed max-w-2xl mb-8">
            Voiceprint is built on Jake Van Clief&apos;s ICM (Interpretable
            Context Methodology). Each file does one job. The folder drops into
            any Claude project and runs cold. Maya, Dale, and Sarah are
            populated identity examples that prove the structure travels across
            niches.
          </p>
          <pre className="bg-stone-900 text-stone-100 p-8 rounded-xl overflow-x-auto text-sm leading-relaxed mono">
{`voiceprint/
├── README.md                    ← cold-start in <5 min
├── identity.md                  ← who you are (generate this here)
├── rules.md                     ← banned AI-slop, voice check
├── examples.md                  ← what good looks like
├── reference/
│   ├── intake-interview.md      ← 20 questions
│   ├── post-formats.md          ← 6 formats + hooks
│   ├── source-protocols.md      ← artifact → post
│   └── identity-examples/
│       ├── maya-fulcrum.md               (fictionalized)
│       ├── dale-second-seat.md           (fictionalized)
│       └── sarah-whitcomb-negotiation.md (fully fictional)
└── workflows/
    ├── transcript-to-posts.md
    ├── vto-to-30-day-calendar.md
    └── weekly-review-to-post.md`}
          </pre>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://github.com/8signal/voiceprint"
              target="_blank"
              rel="noreferrer"
              className="border border-stone-300 px-5 py-2.5 rounded-full hover:border-stone-900 transition-colors text-sm"
            >
              Clone on GitHub →
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-200">
        <div className="max-w-5xl mx-auto px-6 py-10 flex flex-wrap items-center justify-between gap-4 text-sm text-stone-500">
          <div>
            Built by{" "}
            <a
              href="https://www.8signal.com"
              target="_blank"
              rel="noreferrer"
              className="text-stone-700 hover:text-stone-900"
            >
              8 SIGNAL
            </a>{" "}
            using ICM methodology.
          </div>
          <div>MIT License · Fork it</div>
        </div>
      </footer>
    </main>
  );
}
