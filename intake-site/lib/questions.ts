export type Question = {
  id: string;
  label: string;
  hint?: string;
  placeholder?: string;
  rows?: number;
};

export type Section = {
  id: string;
  title: string;
  intro: string;
  questions: Question[];
};

export const sections: Section[] = [
  {
    id: "who-you-are",
    title: "Who you are",
    intro:
      "Five questions to ground the identity. Specificity wins — pretend you're explaining yourself to a writer who's never met you.",
    questions: [
      {
        id: "name",
        label: "What's your name?",
        placeholder: "Andrea Perales",
      },
      {
        id: "title_company",
        label: "Title and company.",
        placeholder: "Fractional Integrator at ACP Enlightening",
      },
      {
        id: "positioning",
        label:
          "Write a one-sentence positioning statement you'd actually say at a dinner party.",
        hint: "Not the website version. The version you'd say to your brother-in-law.",
        placeholder:
          "I'm the Fractional Integrator for visionary CEOs of mid-market companies who are stuck running their own day-to-day.",
        rows: 3,
      },
      {
        id: "ideal_client",
        label: "Who is your ideal client? Give them a name, title, company size, daily pain.",
        hint: "Bad: 'small business owners.' Good: 'Scott — entrepreneurial CEO, 50s, $5-50M revenue, has read Rocket Fuel and recognizes himself as a textbook visionary.'",
        rows: 4,
      },
      {
        id: "client_quotes",
        label: "What does your ideal client say (in their own words) before they hire you?",
        hint: "Pull from real conversations if you can. Verbatim phrases.",
        rows: 4,
      },
    ],
  },
  {
    id: "what-you-do",
    title: "What you do",
    intro:
      "The next four questions get at the underlying work, not the deliverables.",
    questions: [
      {
        id: "after_quotes",
        label: "What do clients say after working with you for 6 months?",
        hint: "Real testimonial language if you have it.",
        rows: 4,
      },
      {
        id: "hard_problem",
        label: "What's the hard problem you solve? Not the deliverable. The underlying pain.",
        rows: 4,
      },
      {
        id: "unfair_advantage",
        label: "What's the unfair combination you bring? The 1+1=3 thing.",
        hint: "Andrea: finance + operations. Ruben: marketing + AI fluency. Yours?",
        rows: 3,
      },
      {
        id: "what_you_dont_do",
        label: "What requests do you turn down? Why?",
        hint: "Equally telling. The things you don't do define the things you do.",
        rows: 3,
      },
    ],
  },
  {
    id: "how-you-sound",
    title: "How you sound",
    intro:
      "The voice section. This is where most identity files fail — they stay generic. Get specific.",
    questions: [
      {
        id: "voice_one_sentence",
        label: "Describe your voice in one sentence.",
        hint: "Pretend you're explaining it to a writer. Andrea: 'the calm, sharp-eyed partner you wish you'd hired two years ago.'",
        rows: 3,
      },
      {
        id: "voice_pillars",
        label: "Pick 3-5 voice pillars. For each, give a 'sounds like' / 'does NOT sound like' example.",
        hint: "Andrea's pillars: Direct Not Harsh, Concrete Not Conceptual, Present Not Distant.",
        rows: 8,
      },
      {
        id: "phrases_you_say",
        label: "10-15 phrases you actually say. From transcripts, Slack, real conversations.",
        hint: "If you've never said it out loud, it doesn't go here.",
        rows: 6,
      },
      {
        id: "phrases_close",
        label: "10 words or phrases that sound like you but aren't quite right — the close cousins.",
        hint: "Things that read AI-generated when applied to you specifically.",
        rows: 5,
      },
      {
        id: "banned_phrases",
        label: "What words or phrases do you ban? (Beyond universal AI-slop.)",
        hint: "Personal to your voice. Ruben bans em dashes and 'here's the thing.'",
        rows: 4,
      },
      {
        id: "gold_standard",
        label: "Who or what is your gold-standard reference for what your voice sounds like?",
        hint: "Andrea's: client testimonials. Ruben's: the way he talks to a fellow founder over tacos. Yours?",
        rows: 3,
      },
    ],
  },
  {
    id: "what-you-write",
    title: "What you write about",
    intro:
      "Three questions to map your themes — the topics you have permanent authority on.",
    questions: [
      {
        id: "themes",
        label: "List 3-6 content themes you have permanent authority on.",
        hint: "Not 'leadership' — that's a category. 'The financial fog — most CEOs don't actually know where their money is going' is a theme.",
        rows: 6,
      },
      {
        id: "themes_why",
        label: "For each theme, why do YOU specifically have a take?",
        hint: "Lived experience. Unique angle. The thing nobody else can write about quite like you.",
        rows: 6,
      },
      {
        id: "artifacts",
        label: "What artifacts do you produce regularly that we can pull from?",
        hint: "Meeting transcripts (Fireflies/Otter/Zoom), V/TO, weekly reviews, client wins log, Slack threads, journal entries. Where do they live?",
        rows: 5,
      },
    ],
  },
  {
    id: "how-you-ship",
    title: "How you ship",
    intro:
      "Two final questions. Then we generate your identity file.",
    questions: [
      {
        id: "signoff",
        label: "How do you sign your LinkedIn posts?",
        placeholder: "Andrea at ACP / Ruben at 8 SIGNAL / no sign-off",
        rows: 2,
      },
      {
        id: "hashtags",
        label: "Hashtag strategy. Primary 3-5, rotate 3-5, never use 3-5.",
        hint: "Format: 'Primary: #X #Y #Z. Rotate: #A #B. Never: #BossLife #Hustle.'",
        rows: 5,
      },
    ],
  },
];

export const totalQuestions = sections.reduce(
  (sum, s) => sum + s.questions.length,
  0
);
