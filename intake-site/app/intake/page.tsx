"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { sections, totalQuestions } from "@/lib/questions";
import { generateIdentityMarkdown } from "@/lib/generateIdentity";

const STORAGE_KEY = "voiceprint-intake-v1";

export default function IntakePage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
    if (saved) {
      try {
        setAnswers(JSON.parse(saved));
      } catch {}
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
    }
  }, [answers]);

  const totalSteps = sections.length;
  const section = sections[step];
  const progress = useMemo(() => {
    const answered = Object.values(answers).filter((v) => v && v.trim()).length;
    return Math.round((answered / totalQuestions) * 100);
  }, [answers]);

  const update = (id: string, value: string) =>
    setAnswers((prev) => ({ ...prev, [id]: value }));

  const next = () => {
    if (step < totalSteps - 1) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setDone(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const back = () => {
    if (done) {
      setDone(false);
      return;
    }
    if (step > 0) {
      setStep(step - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const download = () => {
    const md = generateIdentityMarkdown(answers);
    const blob = new Blob([md], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "identity.md";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const reset = () => {
    if (confirm("Clear all answers and start over?")) {
      setAnswers({});
      setStep(0);
      setDone(false);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  if (done) {
    const md = generateIdentityMarkdown(answers);
    return (
      <main className="min-h-screen">
        <Header />
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="text-xs uppercase tracking-[0.2em] text-amber-800 mb-6">
            Done
          </div>
          <h1 className="serif text-5xl mb-6">Your identity file is ready.</h1>
          <p className="text-lg text-stone-600 mb-10 leading-relaxed">
            Download it, drop it into your Voiceprint folder as{" "}
            <code className="mono bg-stone-100 px-2 py-0.5 rounded text-sm">
              identity.md
            </code>
            , and upload the folder to a Claude project. Then run any workflow.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <button
              onClick={download}
              className="bg-stone-900 text-stone-50 px-6 py-3 rounded-full hover:bg-stone-800 transition-colors font-medium"
            >
              ↓ Download identity.md
            </button>
            <a
              href="https://github.com/8signal/voiceprint"
              target="_blank"
              rel="noreferrer"
              className="border border-stone-300 px-6 py-3 rounded-full hover:border-stone-900 transition-colors"
            >
              Get the rest of the folder
            </a>
            <button
              onClick={back}
              className="text-stone-500 px-4 py-3 hover:text-stone-900 transition-colors"
            >
              ← Edit answers
            </button>
          </div>

          <details className="border border-stone-200 rounded-xl bg-white">
            <summary className="cursor-pointer px-6 py-4 font-medium text-stone-700 hover:text-stone-900">
              Preview the markdown
            </summary>
            <pre className="mono text-xs leading-relaxed bg-stone-900 text-stone-100 p-6 rounded-b-xl overflow-x-auto whitespace-pre-wrap">
              {md}
            </pre>
          </details>

          <div className="mt-12 pt-8 border-t border-stone-200 text-sm text-stone-500">
            <button onClick={reset} className="hover:text-stone-900">
              Clear and start over
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Progress */}
      <div className="border-b border-stone-200">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between text-sm text-stone-600">
          <div>
            Section {step + 1} of {totalSteps}
            <span className="text-stone-400"> · </span>
            <span className="mono text-amber-700">{progress}%</span> answered
          </div>
          <div className="flex gap-1.5">
            {sections.map((s, i) => (
              <div
                key={s.id}
                className={`h-1.5 w-8 rounded-full ${
                  i < step
                    ? "bg-amber-700"
                    : i === step
                    ? "bg-stone-900"
                    : "bg-stone-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-8 inline-flex items-center gap-2 text-xs text-stone-600 bg-amber-50 border border-amber-200 px-3 py-2 rounded-full">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path
              d="M7 1.5L2 3.5v3.5c0 3 2.13 5.5 5 6 2.87-.5 5-3 5-6V3.5L7 1.5z"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            <path d="M5 7l1.5 1.5L9 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Your answers stay in your browser. Nothing is sent to a server.
        </div>

        {step === 0 && (
          <div className="mb-12 border border-stone-300 bg-stone-50 rounded-2xl p-6 md:p-8">
            <div className="text-xs uppercase tracking-[0.2em] text-amber-800 mb-3">
              Faster path · Recommended
            </div>
            <h2 className="serif text-2xl md:text-3xl mb-3 leading-tight">
              Skip the questionnaire. Drop a transcript instead.
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              Voiceprint reads transcripts dramatically faster than you can answer 20 questions. One 30-minute meeting transcript will populate more of your <code className="mono text-sm bg-white px-1.5 py-0.5 rounded border border-stone-200">identity.md</code> than this form ever could.
            </p>
            <p className="text-stone-700 font-medium mb-2">For best results, drop 1 transcript at minimum. Ideally 3 to 5. Ideally varied:</p>
            <ul className="text-stone-600 leading-relaxed list-disc pl-5 space-y-1 mb-4">
              <li>A video testimonial (yours or a client's about you)</li>
              <li>A real client conversation</li>
              <li>A parody or humor clip (catches your playful register)</li>
              <li>A team L10 or strategy meeting</li>
              <li>A sales call</li>
            </ul>
            <p className="text-stone-600 leading-relaxed text-sm">
              Variety in transcript type produces a more dimensional identity file. Voiceprint also reads each transcript twice: first for the post material, second for new voice tics it folds into <code className="mono text-xs bg-white px-1.5 py-0.5 rounded border border-stone-200">identity.md</code> automatically over time.
            </p>
            <p className="text-stone-500 leading-relaxed text-sm mt-4">
              Don't have a transcript handy? The questionnaire below works fine as a fallback. You can always come back and feed transcripts later — the identity file keeps getting sharper either way.
            </p>
          </div>
        )}

        <div className="text-xs uppercase tracking-[0.2em] text-amber-800 mb-4">
          {section.title}
        </div>
        <h1 className="serif text-5xl md:text-6xl mb-6 leading-tight">
          {section.title}
        </h1>
        <p className="text-lg text-stone-600 mb-12 leading-relaxed">
          {section.intro}
        </p>

        <div className="space-y-10">
          {section.questions.map((q, i) => (
            <div key={q.id}>
              <label
                htmlFor={q.id}
                className="block text-base font-medium text-stone-900 mb-2"
              >
                <span className="mono text-xs text-amber-700 mr-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {q.label}
              </label>
              {q.hint && (
                <p className="text-sm text-stone-500 mb-3 leading-relaxed">
                  {q.hint}
                </p>
              )}
              <textarea
                id={q.id}
                rows={q.rows ?? 2}
                value={answers[q.id] ?? ""}
                onChange={(e) => update(q.id, e.target.value)}
                placeholder={q.placeholder}
                className="w-full px-4 py-3 border border-stone-300 rounded-lg bg-white text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700 transition-colors resize-y leading-relaxed"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-stone-200 flex items-center justify-between">
          <button
            onClick={back}
            disabled={step === 0}
            className="text-stone-600 hover:text-stone-900 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            ← Back
          </button>
          <button
            onClick={next}
            className="bg-stone-900 text-stone-50 px-6 py-3 rounded-full hover:bg-stone-800 transition-colors font-medium"
          >
            {step === totalSteps - 1 ? "Generate identity.md →" : "Continue →"}
          </button>
        </div>

      </div>
    </main>
  );
}

function Header() {
  return (
    <header className="border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-700" />
          <span className="serif text-xl">Voiceprint</span>
        </Link>
        <Link
          href="/"
          className="text-sm text-stone-600 hover:text-stone-900"
        >
          ← Home
        </Link>
      </div>
    </header>
  );
}
