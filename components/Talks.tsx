"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type TalkLink = { label: string; href: string };

type Talk = {
  image: string;
  title: string;
  org: string;
  body: string;
  date: string;
  links?: TalkLink[];
};

// Newest first. Add the Gen-AI workshop (and future talks or posters) here.
const talks: Talk[] = [
  {
    image: "/genai_workshop.jpg",
    title: "Gen-AI Workshop, MAN 327H",
    org: "Teaching Assistant | McCombs School of Business, UT Austin",
    body: "Designed and ran a hands-on Gen-AI workshop for 115 Business Honors students across three sections of Innovation and Entrepreneurship. Students built their venture's web page with AI, hosted it on Netlify and measured real user behavior with Microsoft Clarity, launching live in class. The core lesson: watch what users repeat, then build that feature.",
    date: "Oct 2026",
    links: [
      {
        label: "LinkedIn post",
        href: "https://www.linkedin.com/posts/arjun-an_utaustin-mccombs-genai-ugcPost-7517404055732699136-k1na/",
      },
    ],
  },
  {
    image: "/ifml_poster.jpg",
    title: "IFML Research Symposium 2026",
    org: "Poster Presenter | NSF AI Institute for Foundations of ML, UT Austin",
    body: "Presented DocCypher, my hybrid retrieval system for grounded document Q&A, at UT Austin's 2026 symposium on \"Achieving Superintelligence: What does it take?\". Walked researchers through how keyword and semantic search are fused so every answer cites its source page, all inside a 200 MB footprint. My first research poster, and its questions are now shaping the next version.",
    date: "Oct 2026",
    links: [
      { label: "Poster page", href: "/ifml" },
      { label: "Live demo", href: "https://doc-cypher.vercel.app" },
      {
        label: "LinkedIn post",
        href: "https://www.linkedin.com/posts/arjun-an_machinelearning-artificialintelligence-airesearch-ugcPost-7512219412347650048-oKhH/",
      },
    ],
  },
];

function TalkLinks({ links }: { links?: TalkLink[] }) {
  if (!links?.length) return null;
  return (
    <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
      {links.map((l) => {
        const external = l.href.startsWith("http");
        const cls =
          "group/link inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-accent hover:text-accent-bright transition-colors";
        const inner = (
          <>
            {l.label}
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
            />
          </>
        );
        return external ? (
          <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className={cls}>
            {inner}
          </a>
        ) : (
          <Link key={l.href} href={l.href} className={cls}>
            {inner}
          </Link>
        );
      })}
    </div>
  );
}

export function Talks() {
  // A single entry renders as one wide card so the grid never looks half empty.
  const solo = talks.length === 1;

  return (
    <section
      id="talks"
      className="py-24 md:py-28 scroll-mt-20 border-t border-ink-800"
    >
      <div className="container-x">
        <div className="mb-12">
          <div className="section-label mb-4">Talks &amp; Research</div>
          <h2 className="font-serif text-hero text-ink-50 text-balance max-w-3xl">
            Sharing the <span className="italic text-accent">work.</span>
          </h2>
        </div>

        <div
          className={cn(
            "grid grid-cols-1 gap-4 md:gap-6",
            !solo && "md:grid-cols-2"
          )}
        >
          {talks.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={cn(
                "group border border-ink-800 bg-ink-900/20 hover:border-accent/30 hover:bg-ink-900/40 transition-all duration-300 overflow-hidden",
                solo && "md:grid md:grid-cols-2"
              )}
            >
              {/* Image */}
              <div
                className={cn(
                  "relative w-full overflow-hidden border-ink-800 bg-ink-900",
                  solo
                    ? "h-64 md:h-auto md:min-h-[22rem] border-b md:border-b-0 md:border-r"
                    : "h-44 md:h-52 border-b"
                )}
              >
                <Image
                  src={t.image}
                  alt={`${t.title} photo`}
                  fill
                  className="object-cover object-[center_30%] transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/10 to-transparent pointer-events-none" />
                <div className="absolute top-3 right-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-100 bg-ink-950/70 backdrop-blur-sm px-2.5 py-1">
                  {t.date}
                </div>
              </div>

              {/* Body */}
              <div className={cn("p-6", solo && "md:p-8 md:flex md:flex-col md:justify-center")}>
                <h3 className="font-serif text-xl md:text-2xl text-ink-50 leading-tight mb-1.5">
                  {t.title}
                </h3>
                <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-500 mb-4">
                  {t.org}
                </div>
                <p className="text-ink-300 text-sm md:text-base leading-relaxed text-pretty">
                  {t.body}
                </p>
                <TalkLinks links={t.links} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
