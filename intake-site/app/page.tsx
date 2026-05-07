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
        <div className="aspect-video bg-stone-100 border border-stone-200 rounded-2xl overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/YfaSZLCCn1Y"
            title="Voiceprint — intro from Ruben"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </section>

      {/* PROOF — finished posts in the wild */}
      <section id="proof" className="bg-stone-100 border-y border-stone-200">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="text-xs uppercase tracking-[0.2em] text-amber-800 mb-6">
            It already works
          </div>
          <h2 className="serif text-4xl md:text-5xl mb-6 max-w-3xl">
            Six posts shipping in the wild this week.
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl leading-relaxed mb-12">
            All written by Voiceprint from real artifacts. All published under
            Ruben&apos;s name on LinkedIn. Each passed the voice check on the
            first run. Read them, then come back if you want to see how they
            were made.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                href: "https://www.linkedin.com/posts/ruben-aguirre_fractionalcmo-aiadoption-share-7457497718450552832-zsW7",
                ago: "2d",
                source: "Fireflies meeting recording",
                body: (
                  <>
                    I was on a working call with my copywriter this morning.
                    We&apos;d already broken into stories about an alligator
                    cake (her, weekend-baking masterpiece) and a pizza oven
                    (mine, courtesy of the parish priest who showed up
                    mid-meeting).
                    <br />
                    <br />
                    Then I started showing her the things I&apos;ve been
                    building.
                  </>
                ),
                reactions: 47,
                comments: 12,
              },
              {
                href: "https://www.linkedin.com/feed/update/urn:li:activity:7457580393890836480/",
                ago: "2d",
                source: "Client L10 meeting",
                body: (
                  <>
                    &ldquo;Honestly, I don&apos;t have great news.&rdquo;
                    <br />
                    <br />
                    That&apos;s how a client opened our marketing Level 10
                    meeting last month.
                  </>
                ),
                reactions: 38,
                comments: 9,
              },
              {
                href: "https://www.linkedin.com/posts/ruben-aguirre_fractionalcmo-b2bmarketing-influencermarketing-share-7457814725477916672-9tB9",
                ago: "1d",
                source: "Client marketing L10",
                body: (
                  <>
                    Cold email is supposed to be hard. A client of mine
                    apparently didn&apos;t get the memo.
                    <br />
                    <br />
                    He sent one last month to the founder of an eight-figure
                    SaaS company. Two hours later: &ldquo;100%, let&apos;s
                    meet up.&rdquo; No emoji. No throat-clearing.
                  </>
                ),
                reactions: 54,
                comments: 14,
              },
              {
                href: "https://www.linkedin.com/posts/ruben-aguirre_fractionalcmo-aiadoption-firstweserve-activity-7457933244555165696-RAwl",
                ago: "1h",
                source: "Team training call",
                body: (
                  <>
                    I almost made the classic founder mistake on a team
                    training call last week.
                    <br />
                    <br />
                    A copywriter on my team was telling the group why she was
                    stuck on an AI foundations course. The course assumed a
                    baseline tech vocabulary she didn&apos;t have. Every video
                    had her pausing with her husband to Google acronyms.
                  </>
                ),
                reactions: 21,
                comments: 4,
              },
            ].map((p) => (
              <a
                key={p.href}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="block bg-white border border-stone-300 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group"
              >
                {/* Card header — LinkedIn-style */}
                <div className="px-4 pt-4 pb-2">
                  <div className="flex items-start gap-2">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0a66c2] to-[#004182] text-white flex items-center justify-center text-base font-semibold flex-shrink-0">
                      RA
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-[#000000e6] text-sm leading-tight hover:text-[#0a66c2] hover:underline cursor-pointer">
                        Ruben Aguirre
                      </div>
                      <div className="text-xs text-[#00000099] leading-tight mt-0.5 truncate">
                        Fractional CMO at 8 SIGNAL · Building marketing teams
                      </div>
                      <div className="text-xs text-[#00000099] leading-tight mt-0.5 flex items-center gap-1">
                        <span>{p.ago} •</span>
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                          <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM3 8a5 5 0 0 1 .9-2.86l1.34 1.34a3 3 0 0 0 .76 3.02l1 1V11a1 1 0 0 0 1 1v1.93A5 5 0 0 1 3 8zm9.36 3.86l-.96-.96a2.99 2.99 0 0 0-1.79-.86A2 2 0 0 0 8 9H7V8a1 1 0 0 1 1-1h.5a.5.5 0 0 0 .5-.5V6a1 1 0 0 1 1-1h.59A4.98 4.98 0 0 1 13 8a5 5 0 0 1-.64 3.86z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Post body */}
                <div className="px-4 pb-3 text-sm text-[#000000e6] leading-[1.5]">
                  {p.body}
                  <div className="mt-2 text-[#00000099] hover:text-[#0a66c2] hover:underline">
                    ...see more
                  </div>
                </div>

                {/* Reactions count */}
                <div className="px-4 py-1.5 flex items-center justify-between text-xs text-[#00000099]">
                  <div className="flex items-center gap-1">
                    <span className="inline-flex">
                      <span className="w-4 h-4 rounded-full bg-[#0a66c2] flex items-center justify-center text-white text-[10px]">
                        👍
                      </span>
                      <span className="w-4 h-4 rounded-full bg-[#df704d] flex items-center justify-center text-white text-[10px] -ml-1">
                        ❤️
                      </span>
                      <span className="w-4 h-4 rounded-full bg-[#6dae4f] flex items-center justify-center text-white text-[10px] -ml-1">
                        💡
                      </span>
                    </span>
                    <span className="ml-1 hover:text-[#0a66c2] hover:underline">
                      {p.reactions}
                    </span>
                  </div>
                  <div className="hover:text-[#0a66c2] hover:underline">
                    {p.comments} comments
                  </div>
                </div>

                {/* Action bar */}
                <div className="border-t border-stone-200 grid grid-cols-4 text-[#00000099] text-xs font-semibold">
                  {[
                    { icon: "👍", label: "Like" },
                    { icon: "💬", label: "Comment" },
                    { icon: "🔁", label: "Repost" },
                    { icon: "➤", label: "Send" },
                  ].map((a) => (
                    <div
                      key={a.label}
                      className="flex items-center justify-center gap-1.5 py-2.5 hover:bg-stone-100 transition-colors"
                    >
                      <span className="text-sm">{a.icon}</span>
                      <span>{a.label}</span>
                    </div>
                  ))}
                </div>
              </a>
            ))}

            {/* Placeholder cards — same shape, faded */}
            {[
              {
                source: "Client kickoff call",
                title: "Tuition for a Marketing Seat",
                blurb:
                  "A 90-day sprint, a college-aged kid, and what parents actually pay for when they pay 8 SIGNAL.",
              },
              {
                source: "Building Voiceprint itself",
                title: "The Tool That Refuses to Write",
                blurb:
                  "Why Rule 0 — &ldquo;no artifact, no post&rdquo; — is the whole product.",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="bg-white border border-dashed border-stone-300 rounded-lg overflow-hidden opacity-70"
              >
                <div className="px-4 pt-4 pb-2">
                  <div className="flex items-start gap-2">
                    <div className="w-12 h-12 rounded-full bg-stone-300 text-stone-500 flex items-center justify-center text-base font-semibold flex-shrink-0">
                      RA
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-stone-500 text-sm leading-tight">
                        Ruben Aguirre
                      </div>
                      <div className="text-xs text-stone-400 leading-tight mt-0.5 truncate">
                        Fractional CMO at 8 SIGNAL · Building marketing teams
                      </div>
                      <div className="text-xs text-stone-400 leading-tight mt-0.5">
                        Publishing this week •
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 pb-4 text-sm text-stone-500 leading-[1.5]">
                  <div className="font-medium mb-1 text-stone-600">
                    {p.title}
                  </div>
                  <p className="italic" dangerouslySetInnerHTML={{ __html: p.blurb }} />
                </div>
                <div className="border-t border-stone-200 grid grid-cols-4 text-stone-400 text-xs font-semibold">
                  {["Like", "Comment", "Repost", "Send"].map((label) => (
                    <div
                      key={label}
                      className="flex items-center justify-center gap-1.5 py-2.5"
                    >
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
