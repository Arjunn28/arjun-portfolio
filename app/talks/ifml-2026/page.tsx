import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { cn } from "@/lib/utils";

const PHOTO_DIR = "/talks/ifml-2026";

export const metadata: Metadata = {
  title: "IFML Research Symposium 2026 | Arjun",
  description:
    "Two days at UT Austin's IFML Research Symposium on what it takes to reach superintelligence, where I presented my DocCypher poster.",
  openGraph: {
    title: "IFML Research Symposium 2026",
    description:
      "Photos, speakers and takeaways from the IFML Research Symposium 2026, plus my DocCypher poster.",
    url: "https://ai-with-arjun.vercel.app/talks/ifml-2026",
    siteName: "AI with Arjun",
    type: "article",
    images: [
      {
        url: `${PHOTO_DIR}/me-at-poster.jpg`,
        width: 1457,
        height: 1600,
        alt: "Arjun presenting DocCypher at the poster session",
      },
    ],
  },
  robots: { index: true, follow: true },
};

type ButtonLink = { label: string; href: string; primary?: boolean };

const eventLinks: ButtonLink[] = [
  {
    label: "Event page",
    href: "https://www.ifml.institute/events/ifml-research-symposium-2026",
  },
  { label: "About IFML", href: "https://www.ifml.institute/" },
  {
    label: "Full agenda",
    href: "https://cvent.utexas.edu/event/53e5dc89-78f3-44c7-ac95-2bfaf3696c28/agenda",
  },
];

const posterLinks: ButtonLink[] = [
  { label: "Try the live demo", href: "https://doc-cypher.vercel.app", primary: true },
  { label: "Source code", href: "https://github.com/Arjunn28/doc-cypher" },
  { label: "Case study", href: "/projects/doc-cypher" },
];

const ideas: { title: string; body: string }[] = [
  {
    title: "Search two ways at once",
    body: "Keyword (BM25) and semantic search run in parallel, so each catches what the other misses.",
  },
  {
    title: "Merge by rank, not by score",
    body: "Reciprocal Rank Fusion combines the two lists using position alone, so there are no incomparable scores to calibrate.",
  },
  {
    title: "Answer only from what was found",
    body: "The model sees only the top passages and must cite the file and page for every claim.",
  },
];

// Each inner array is one pipeline stage; stages with two entries run in parallel.
const pipeline: string[][] = [
  ["Question"],
  ["Keyword search (BM25)", "Semantic search (ChromaDB)"],
  ["Rank fusion (RRF)"],
  ["Rerank top 5"],
  ["LLM answer with page citations"],
];

const results: { value: string; label: string }[] = [
  { value: "1.5 GB", label: "peak memory before" },
  { value: "< 200 MB", label: "after the redesign" },
  { value: "512 MB", label: "free-tier container it fits" },
];

const stack = [
  "FastAPI",
  "ChromaDB",
  "rank_bm25",
  "PyMuPDF",
  "Groq",
  "React",
  "Vite",
  "Render",
  "Vercel",
];

type Session = {
  time: string;
  kind: string;
  speaker?: string;
  affiliation?: string;
  title?: string;
  summary?: string;
  mine?: boolean;
};

const days: { label: string; date: string; sessions: Session[] }[] = [
  {
    label: "Day 1",
    date: "Thursday, Oct 1",
    sessions: [
      {
        time: "9:15 AM",
        kind: "Welcome remarks",
        speaker: "Adam Klivans",
        affiliation: "UT Austin, IFML",
      },
      {
        time: "9:30 AM",
        kind: "Keynote",
        speaker: "Dale Schuurmans",
        affiliation: "Google DeepMind and University of Alberta",
        title: "Large Language Models and Computation",
        summary:
          "Why hard limits on what is computable still apply to LLMs, and what that means for self-improving systems.",
      },
      {
        time: "11:00 AM",
        kind: "Keynote",
        speaker: "Sharon Li",
        affiliation: "University of Wisconsin-Madison",
        title: "Reliability Along the Way: Progress and Failure Signals in AI Agents",
        summary:
          "Measuring whether an agent is on track at every step, not just whether it succeeded at the end.",
      },
      {
        time: "1:15 PM",
        kind: "Invited talk",
        speaker: "Steven Dillmann",
        affiliation: "Stanford University",
        title: "Terminal-Bench-Science",
        summary:
          "A benchmark built from real scientists' research workflows to test whether AI agents can actually do research.",
      },
      {
        time: "2:00 PM",
        kind: "Panel",
        speaker: "Sharon Li and Dale Schuurmans",
        summary: "An open discussion on capability, reliability and limits.",
      },
      {
        time: "3:30 PM",
        kind: "Keynote",
        speaker: "Atlas Wang",
        affiliation: "UT Austin",
        title: "Unsolicited opinions on AGI, RSI and financial markets",
        summary:
          "Lessons from AI in quantitative trading, where better predictions do not always mean better decisions.",
      },
      {
        time: "4:30 PM",
        kind: "Poster session and reception",
        summary: "Presented DocCypher to researchers and students.",
        mine: true,
      },
    ],
  },
  {
    label: "Day 2",
    date: "Friday, Oct 2",
    sessions: [
      {
        time: "9:00 AM",
        kind: "Keynote",
        speaker: "Sanmi Koyejo",
        affiliation: "Stanford University",
        title: "What Would Count as Evidence of Superintelligence?",
        summary:
          "Treating superintelligence as a measurement problem, and why benchmarks built after the fact are not enough.",
      },
      {
        time: "10:30 AM",
        kind: "Keynote",
        speaker: "Scott Aaronson",
        affiliation: "UT Austin",
        title: "Are We Cooked?",
        summary:
          "Case studies of using AI on open problems in quantum computing and complexity theory.",
      },
      {
        time: "11:30 AM",
        kind: "Keynote",
        speaker: "Dylan Foster",
        affiliation: "UC Berkeley and Microsoft Research",
        title: "Understanding the foundation model pipeline: From imitation to exploration",
        summary:
          "Why the next phase of AI depends on agents that gather their own experience.",
      },
      {
        time: "1:45 PM",
        kind: "Invited talk",
        speaker: "Danny Diaz",
        affiliation: "UT Austin",
      },
      {
        time: "2:30 PM",
        kind: "Closing remarks",
        speaker: "Adam Klivans",
      },
    ],
  },
];

type Photo = { file: string; caption: string; focus: string };

const gallery: Photo[] = [
  { file: "ifml-banner.jpg", caption: "IFML banner outside Mulva Auditorium", focus: "35% 60%" },
  { file: "keynote-hall.jpg", caption: "Keynote in Mulva Auditorium", focus: "center 50%" },
  { file: "keynote-qa.jpg", caption: "Q&A after a keynote", focus: "35% 50%" },
  { file: "poster-session-crowd.jpg", caption: "Poster session in the EER atrium", focus: "center 65%" },
  { file: "poster-atrium.jpg", caption: "Posters across the atrium", focus: "center 65%" },
];

function SmartLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

function Buttons({ links }: { links: ButtonLink[] }) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {links.map((l) => (
        <SmartLink
          key={l.href}
          href={l.href}
          className={cn(
            "group inline-flex items-center gap-2 border px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors",
            l.primary
              ? "border-accent/60 bg-accent/[0.06] text-accent hover:border-accent hover:text-accent-bright"
              : "border-ink-700 text-ink-300 hover:border-accent/40 hover:text-accent"
          )}
        >
          {l.label}
          <ArrowUpRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </SmartLink>
      ))}
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-serif text-3xl md:text-4xl text-ink-50 leading-tight mb-6 text-balance">
      {children}
    </h2>
  );
}

function BackLink() {
  return (
    <Link
      href="/#talks"
      className="link-underline inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-ink-400 hover:text-ink-100"
    >
      <ArrowLeft size={14} />
      Back to portfolio
    </Link>
  );
}

export default function IFML2026Page() {
  return (
    <main className="min-h-screen py-16 md:py-24 overflow-x-hidden">
      <div className="mx-auto w-full max-w-4xl px-6 md:px-10">
        <BackLink />

        {/* Header */}
        <header className="mt-12">
          <p className="section-label mb-5">Talks &amp; Research</p>
          <h1 className="font-serif text-hero text-ink-50 text-balance">
            IFML Research Symposium 2026
          </h1>
          <p className="mt-4 font-serif text-2xl md:text-3xl text-ink-300 leading-snug text-balance">
            Achieving Superintelligence:{" "}
            <span className="italic text-accent">What does it take?</span>
          </p>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.15em] text-ink-500 leading-relaxed">
            Oct 1-2, 2026 | Mulva Auditorium, EER, UT Austin | Poster Presenter
          </p>
        </header>

        <FadeIn className="mt-10">
          <figure>
            <div className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden border border-ink-800 bg-ink-900">
              <Image
                src={`${PHOTO_DIR}/me-at-poster.jpg`}
                alt="Arjun standing beside the DocCypher poster in the EER atrium"
                fill
                priority
                style={{ objectPosition: "center 42%" }}
                className="object-cover"
                sizes="(max-width: 896px) 100vw, 896px"
              />
            </div>
            <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.15em] text-ink-500">
              Presenting DocCypher at the poster session
            </figcaption>
          </figure>
        </FadeIn>

        {/* About the event */}
        <section className="mt-20 border-t border-ink-800 pt-12">
          <FadeIn>
            <SectionHeading>About the event</SectionHeading>
            <p className="text-ink-300 text-base md:text-lg leading-relaxed text-pretty">
              The IFML Research Symposium is the annual research meeting of the
              NSF AI Institute for Foundations of Machine Learning (IFML).
              Founded in 2020 and led by UT Austin with the University of
              Washington, Wichita State University and Microsoft Research, IFML
              works on the core tools behind the next generation of AI. This
              year&apos;s theme asked what it would actually take to reach
              human-level or superhuman intelligence, and what breaks along the
              way.
            </p>
            <Buttons links={eventLinks} />
          </FadeIn>
        </section>

        {/* My poster */}
        <section className="mt-20 border-t border-ink-800 pt-12">
          <FadeIn>
            <SectionHeading>My poster: DocCypher</SectionHeading>
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent leading-relaxed">
              DocCypher: Hybrid retrieval for grounded document question answering
            </p>
          </FadeIn>

          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-[1fr_minmax(0,18rem)] md:gap-12">
            <FadeIn>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-500 mb-3">
                The problem
              </h3>
              <p className="text-ink-300 leading-relaxed text-pretty">
                Ask a document search system for an exact error code and a
                semantic search engine may miss it entirely. Ask it why a
                deployment failed and a keyword engine may return nothing.
                Fixing one usually breaks the other, and fixing both usually
                costs more memory than a small deployment can afford.
              </p>

              <h3 className="mt-10 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-500 mb-4">
                The idea
              </h3>
              <ol className="space-y-5">
                {ideas.map((idea, i) => (
                  <li key={idea.title} className="flex gap-4">
                    <span className="font-mono text-sm text-accent pt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="font-serif text-xl text-ink-50 leading-tight">
                        {idea.title}
                      </div>
                      <p className="mt-1 text-sm text-ink-400 leading-relaxed text-pretty">
                        {idea.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </FadeIn>

            <FadeIn delay={0.08}>
              <figure>
                <div className="relative w-full aspect-[3/4] overflow-hidden border border-ink-800 bg-ink-900">
                  <Image
                    src={`${PHOTO_DIR}/visitors-at-poster.jpg`}
                    alt="Visitors reading the DocCypher poster"
                    fill
                    style={{ objectPosition: "center 55%" }}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 288px"
                  />
                </div>
                <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.15em] text-ink-500">
                  Visitors reading the DocCypher poster
                </figcaption>
              </figure>
            </FadeIn>
          </div>

          {/* Pipeline */}
          <FadeIn className="mt-14">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-500 mb-4">
              Pipeline
            </h3>
            <div className="flex flex-col items-stretch gap-2 md:flex-row md:items-center">
              {pipeline.map((stage, i) => (
                <div
                  key={stage.join("+")}
                  className="flex flex-col items-center gap-2 md:flex-row md:flex-1"
                >
                  {i > 0 && (
                    <ArrowRight
                      size={14}
                      className="shrink-0 rotate-90 text-accent md:rotate-0"
                      aria-hidden
                    />
                  )}
                  <div className="flex w-full flex-col gap-1.5 md:flex-1">
                    {stage.map((step) => (
                      <div
                        key={step}
                        className="border border-ink-700 bg-ink-900/60 px-3 py-2.5 text-center font-mono text-[10px] uppercase tracking-[0.12em] text-ink-200 leading-snug"
                      >
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Results */}
          <FadeIn className="mt-14">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-500 mb-4">
              Results
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {results.map((r) => (
                <div
                  key={r.label}
                  className="rounded-lg border border-ink-700 bg-ink-900/60 px-3 py-4 text-center"
                >
                  <div className="font-serif text-2xl text-accent">{r.value}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-ink-400">
                    {r.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Stack */}
          <FadeIn className="mt-12">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-500 mb-4">
              Built with
            </h3>
            <div className="flex flex-wrap gap-2">
              {stack.map((s) => (
                <span
                  key={s}
                  className="border border-ink-700 px-2.5 py-1 font-mono text-[11px] text-ink-300"
                >
                  {s}
                </span>
              ))}
            </div>
            <Buttons links={posterLinks} />
          </FadeIn>
        </section>

        {/* Agenda */}
        <section className="mt-20 border-t border-ink-800 pt-12">
          <FadeIn>
            <SectionHeading>Two days at a glance</SectionHeading>
          </FadeIn>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8">
            {days.map((day, di) => (
              <FadeIn key={day.label} delay={di * 0.08}>
                <div className="mb-4 flex items-baseline gap-3 border-b border-ink-800 pb-3">
                  <span className="font-serif text-2xl text-ink-50">{day.label}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-500">
                    {day.date}
                  </span>
                </div>
                <ul className="space-y-2">
                  {day.sessions.map((s) => (
                    <li
                      key={`${s.time}-${s.kind}`}
                      className={cn(
                        "border-l-2 py-3 pl-4 pr-2",
                        s.mine
                          ? "border-accent bg-accent/[0.04]"
                          : "border-ink-800"
                      )}
                    >
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.15em]">
                        <span className="text-accent">{s.time}</span>
                        <span className="text-ink-500">{s.kind}</span>
                        {s.mine && (
                          <span className="border border-accent/50 px-1.5 py-0.5 text-accent">
                            Where I presented
                          </span>
                        )}
                      </div>
                      {s.speaker && (
                        <div className="mt-1.5 text-sm font-medium text-ink-100">
                          {s.speaker}
                        </div>
                      )}
                      {s.affiliation && (
                        <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-500">
                          {s.affiliation}
                        </div>
                      )}
                      {s.title && (
                        <div className="mt-2 font-serif text-lg text-ink-50 leading-snug">
                          {s.title}
                        </div>
                      )}
                      {s.summary && (
                        <p className="mt-1 text-sm text-ink-400 leading-relaxed text-pretty">
                          {s.summary}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Takeaways */}
        <section className="mt-20 border-t border-ink-800 pt-12">
          <FadeIn>
            <SectionHeading>What I took away</SectionHeading>
            <div className="space-y-5 border-l-2 border-accent/50 pl-5 text-ink-300 leading-relaxed text-pretty md:text-lg">
              <p>
                The thread running through both days was simple: capability is
                outrunning our ability to check it. What happens when a system
                gets good enough that we can no longer verify its work?
                Interpretability, evaluation and knowing when a model is
                confident versus guessing kept coming up, and the serious groups
                treat that gap as a research problem, not a footnote. The people
                furthest along were also the most comfortable saying &ldquo;I
                don&apos;t know.&rdquo;
              </p>
              <p>
                It was my first research poster. When you are not the smartest
                person in the room, your own project starts asking you
                questions, and the ones I got at the poster pushed me to think
                harder about how DocCypher proves its answers, not just how it
                finds them.
              </p>
            </div>
          </FadeIn>
        </section>

        {/* Gallery */}
        <section className="mt-20 border-t border-ink-800 pt-12">
          <FadeIn>
            <SectionHeading>From the symposium</SectionHeading>
          </FadeIn>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {gallery.map((p, i) => (
              <FadeIn key={p.file} delay={i * 0.06}>
                <figure className="group">
                  <div className="relative h-48 w-full overflow-hidden border border-ink-800 bg-ink-900 sm:h-64">
                    <Image
                      src={`${PHOTO_DIR}/${p.file}`}
                      alt={p.caption}
                      fill
                      style={{ objectPosition: p.focus }}
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 50vw, 288px"
                    />
                  </div>
                  <figcaption className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-500 leading-snug">
                    {p.caption}
                  </figcaption>
                </figure>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Footer */}
        <div className="mt-20 flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-t border-ink-700 pt-6">
          <BackLink />
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {[
              { label: "LinkedIn", href: "https://www.linkedin.com/in/arjun-an/" },
              { label: "GitHub", href: "https://github.com/Arjunn28" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.2em] text-ink-400 hover:text-accent transition-colors"
              >
                {l.label}
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
