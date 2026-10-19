import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import {
  BackLink,
  Buttons,
  Gallery,
  SectionHeading,
  TalkFooter,
  type ButtonLink,
  type Photo,
} from "@/components/TalkParts";

const PHOTO_DIR = "/talks/genai-workshop";

export const metadata: Metadata = {
  title: "Gen-AI Workshop: Launch & Measure | Arjun",
  description:
    "A hands-on workshop I ran for 115 Business Honors students on building, hosting and measuring a venture website with AI.",
  openGraph: {
    title: "Gen-AI Workshop: Launch & Measure",
    description:
      "How I taught 115 students to build a live website with AI and measure what real visitors do on it.",
    url: "https://ai-with-arjun.vercel.app/talks/genai-workshop",
    siteName: "AI with Arjun",
    type: "article",
    images: [
      {
        url: `${PHOTO_DIR}/opening.jpg`,
        width: 1200,
        height: 1600,
        alt: "Arjun opening the Gen-AI workshop",
      },
    ],
  },
  robots: { index: true, follow: true },
};

const parts: {
  title: string;
  summary: string;
  detail: string;
  chips: string[];
}[] = [
  {
    title: "Build",
    summary: "Turn the idea into a website with AI.",
    detail:
      "A single-page landing page with Claude or ChatGPT for product and service ventures, or a multi-page web app with tools like Lovable, Bolt or v0 for software ventures. Everyone started from a shared starter file.",
    chips: ["Claude", "ChatGPT", "Lovable", "Bolt", "v0"],
  },
  {
    title: "Host",
    summary: "Put it on a public link anyone can open.",
    detail:
      "Drag-and-drop deploys on Netlify: drop the folder, make it public, rename it and open it on your phone. No code and no command line.",
    chips: ["Netlify"],
  },
  {
    title: "Measure",
    summary: "See what every visitor does.",
    detail:
      "Microsoft Clarity for session recordings, heatmaps and signals like rage clicks and dead clicks, so a founder can see where visitors hesitate and leave.",
    chips: ["Microsoft Clarity"],
  },
];

const startersLink: ButtonLink[] = [
  {
    label: "Starter files on GitHub",
    href: "https://github.com/Arjunn28/gen-ai-workshop",
  },
];

const approach: { title: string; body: string }[] = [
  {
    title: "Live demo, then your turn",
    body: "Each part opened with a short live demo, then students did the same steps on their own venture.",
  },
  {
    title: "Free tools only",
    body: "Everything worked on free plans, so nothing stood between an idea and a live link.",
  },
  {
    title: "Copy-paste prompts",
    body: "Plain-language prompts students could give Claude or ChatGPT to check their site and add tracking code.",
  },
  {
    title: "Quick polls and a closing quiz",
    body: "Polls to gauge where the room was, and a short quiz on reading analytics to close.",
  },
];

const realLook: { title: string; body: string }[] = [
  { title: "One clear call to action", body: "Above the fold, one button." },
  {
    title: "Your customers' own words",
    body: "Copy from your interviews, not AI filler.",
  },
  { title: "Less is more", body: "Two fonts, one accent color, real spacing." },
  {
    title: "Test on a phone",
    body: "Tap targets, text size and speed.",
  },
];

const gallery: Photo[] = [
  { file: "presenting.jpg", caption: "Walking through hosting", focus: "center 40%" },
  { file: "live-demo.jpg", caption: "Live demo while students build along", focus: "center 45%" },
  { file: "live-quiz.jpg", caption: "Closing quiz on reading analytics", focus: "30% 50%" },
];

const pad = (i: number) => String(i + 1).padStart(2, "0");

export default function GenAIWorkshopPage() {
  return (
    <main className="min-h-screen py-16 md:py-24 overflow-x-hidden">
      <div className="mx-auto w-full max-w-4xl px-6 md:px-10">
        <BackLink />

        {/* Header */}
        <header className="mt-12">
          <p className="section-label mb-5">Talks &amp; Research</p>
          <h1 className="font-serif text-hero text-ink-50 text-balance">
            Gen-AI Workshop
          </h1>
          <p className="mt-4 font-serif text-2xl md:text-3xl text-ink-300 leading-snug text-balance">
            Launch &amp; <span className="italic text-accent">Measure</span>
          </p>
          <p className="mt-3 text-base text-ink-400 leading-relaxed">
            Build, host and measure your venture website
          </p>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.15em] text-ink-500 leading-relaxed">
            Oct 2026 | McCombs School of Business, UT Austin | Teaching Assistant, MAN 327H
          </p>
        </header>

        <FadeIn className="mt-10">
          <figure>
            <div className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden border border-ink-800 bg-ink-900">
              <Image
                src={`${PHOTO_DIR}/opening.jpg`}
                alt="Arjun at the front of the classroom with the workshop title slide behind him"
                fill
                priority
                style={{ objectPosition: "center 50%" }}
                className="object-cover"
                sizes="(max-width: 896px) 100vw, 896px"
              />
            </div>
            <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.15em] text-ink-500">
              Opening the workshop
            </figcaption>
          </figure>
        </FadeIn>

        {/* Why this workshop */}
        <section className="mt-20 border-t border-ink-800 pt-12">
          <FadeIn>
            <SectionHeading>Why this workshop</SectionHeading>
          </FadeIn>
          <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-12">
            <FadeIn>
              <div className="space-y-5 text-ink-300 leading-relaxed text-pretty md:text-lg">
                <p>
                  Netflix&apos;s Skip Intro button exists because people kept
                  fast-forwarding through the opening by hand. The feature came
                  from watching what users repeated.
                </p>
                <p>
                  That was the idea I built the workshop around. As the Teaching
                  Assistant for an undergraduate Business Honors course on
                  innovation and entrepreneurship, I ran a hands-on session for
                  115 students across three sections. The goal was simple: leave
                  with a live website for your venture and a way to see what real
                  visitors do on it.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <figure>
                <div className="relative w-full aspect-[16/9] overflow-hidden border border-ink-800 bg-ink-900">
                  <Image
                    src={`${PHOTO_DIR}/slide-workaround.jpg`}
                    alt="Slide showing how Netflix, YouTube and Instagram built features from user workarounds"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.15em] text-ink-500">
                  The opening idea: find the workaround, build the button
                </figcaption>
              </figure>
            </FadeIn>
          </div>
          <FadeIn className="mt-10">
            <blockquote className="border-l-2 border-accent pl-5 font-serif text-2xl md:text-3xl leading-snug text-ink-50 text-balance">
              Watch what users repeat. That is your next feature.
            </blockquote>
          </FadeIn>
        </section>

        {/* What we covered */}
        <section className="mt-20 border-t border-ink-800 pt-12">
          <FadeIn>
            <SectionHeading>Three parts, one live site</SectionHeading>
          </FadeIn>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
            {parts.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.08} className="h-full">
                <div className="flex h-full flex-col border border-ink-800 bg-ink-900/20 p-5">
                  <span className="font-mono text-sm text-accent">{pad(i)}</span>
                  <div className="mt-3 font-serif text-2xl text-ink-50 leading-tight">
                    {p.title}
                  </div>
                  <p className="mt-1 text-sm font-medium text-ink-100 leading-relaxed">
                    {p.summary}
                  </p>
                  <p className="mt-3 text-sm text-ink-400 leading-relaxed text-pretty">
                    {p.detail}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-5">
                    {p.chips.map((c) => (
                      <span
                        key={c}
                        className="border border-ink-700 px-2.5 py-1 font-mono text-[11px] text-ink-300"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <Buttons links={startersLink} />
          </FadeIn>
        </section>

        {/* How I ran it */}
        <section className="mt-20 border-t border-ink-800 pt-12">
          <FadeIn>
            <SectionHeading>How I ran it</SectionHeading>
            <ul className="space-y-2">
              {approach.map((a, i) => (
                <li key={a.title} className="flex gap-4 border-l-2 border-ink-800 py-3 pl-4 pr-2">
                  <span className="pt-0.5 font-mono text-[11px] text-accent">
                    {pad(i)}
                  </span>
                  <div>
                    <div className="font-serif text-lg text-ink-50 leading-snug">
                      {a.title}
                    </div>
                    <p className="mt-1 text-sm text-ink-400 leading-relaxed text-pretty">
                      {a.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </FadeIn>
        </section>

        {/* Making it look real */}
        <section className="mt-20 border-t border-ink-800 pt-12">
          <FadeIn>
            <SectionHeading>Avoiding vibe-coded AI slop</SectionHeading>
            <p className="mb-8 text-ink-300 leading-relaxed text-pretty md:text-lg">
              The last part was about making an AI-built page feel like a real
              company.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4">
            {realLook.map((r, i) => (
              <FadeIn key={r.title} delay={i * 0.06} className="h-full">
                <div className="h-full border border-ink-800 bg-ink-900/20 p-5">
                  <div className="font-serif text-xl text-ink-50 leading-tight">
                    {r.title}
                  </div>
                  <p className="mt-2 text-sm text-ink-400 leading-relaxed text-pretty">
                    {r.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Takeaways */}
        <section className="mt-20 border-t border-ink-800 pt-12">
          <FadeIn>
            <SectionHeading>What I took away</SectionHeading>
            <div className="border-l-2 border-accent/50 pl-5 text-ink-300 leading-relaxed text-pretty md:text-lg">
              <p>
                Teaching tech to a non-technical room is a different skill from
                building it. There is no jargon to hide behind, so every step has
                to make sense on its own. That pushed me to cut the session down
                to what actually matters: build something, put it in front of
                people and watch what they do. The questions were some of the
                best I have been asked, and watching ventures go live in the room
                made it worth it.
              </p>
            </div>
          </FadeIn>
        </section>

        <Gallery heading="From the workshop" photoDir={PHOTO_DIR} photos={gallery} />

        <TalkFooter />
      </div>
    </main>
  );
}
