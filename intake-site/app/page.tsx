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
            <a href="#how-it-works" className="text-stone-600 hover:text-stone-900">
              How it works
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

      <section className="max-w-5xl mx-auto px-6 pt-20 pb-24">
        <div className="text-xs uppercase tracking-[0.2em] text-amber-800 mb-6">
          A folder-based AI specialist
        </div>
        <h1 className="serif text-6xl md:text-7xl leading-[1.05] mb-8 max-w-4xl">
          Your voice on LinkedIn.
          <br />
          <span className="text-stone-500">Not a copywriter&apos;s.</span>
        </h1>
        <p className="text-xl text-stone-600 max-w-2xl leading-relaxed mb-10">
          Voiceprint is a folder you drop into a Claude project. It turns the
          artifacts you already produce — meeting transcripts, V/TO documents,
          weekly reviews, client wins — into LinkedIn posts that sound like you.
          Not the AI version of you.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/intake"
            className="bg-stone-900 text-stone-50 px-6 py-3 rounded-full hover:bg-stone-800 transition-colors text-base font-medium"
          >
            Build my identity file →
          </Link>
          <a
            href="https://github.com/8signal/voiceprint"
            target="_blank"
            rel="noreferrer"
            className="border border-stone-300 px-6 py-3 rounded-full hover:border-stone-900 transition-colors text-base"
          >
            Clone the folder
          </a>
        </div>
      </section>

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

      <section className="bg-stone-900 text-stone-100">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="text-xs uppercase tracking-[0.2em] text-amber-400 mb-6">
            The problem
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

      <section id="how-it-works" className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-xs uppercase tracking-[0.2em] text-amber-800 mb-6">
          How it works
        </div>
        <h2 className="serif text-4xl md:text-5xl mb-16 max-w-3xl">
          Three steps. One folder. A voice that doesn&apos;t drift.
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              n: "01",
              title: "Answer 20 questions",
              body: "The intake interview surfaces the specifics that make your voice yours: vocabulary, banned phrases, content themes, gold-standard reference. Takes about 15 minutes.",
            },
            {
              n: "02",
              title: "Download identity.md",
              body: "We generate a populated identity file from your answers. It joins the rest of the Voiceprint folder: rules, examples, post formats, and three workflows.",
            },
            {
              n: "03",
              title: "Drop into Claude",
              body: "Upload the folder to a Claude project. Run any of the workflows. Paste a transcript, a V/TO entry, a weekly review. Get posts in your voice in under five minutes.",
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

      <section className="bg-stone-100 border-y border-stone-200">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="text-xs uppercase tracking-[0.2em] text-amber-800 mb-6">
            What&apos;s inside
          </div>
          <h2 className="serif text-4xl md:text-5xl mb-12 max-w-3xl">
            The folder is the deliverable.
          </h2>
          <p className="text-stone-600 leading-relaxed max-w-2xl mb-8">
            Maya and Dale are fictionalized composites based on real 8 SIGNAL
            clients, anonymized to protect their privacy. They serve the same
            niche and hold the same job title but sound nothing alike — which is
            the whole point.
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
        </div>
      </section>

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
