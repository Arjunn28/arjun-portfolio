import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "DocCypher — IFML Research Symposium 2026 | Arjun",
  description:
    "Hybrid retrieval for grounded document question answering, built to run in 200 MB. Poster presented at the IFML Research Symposium 2026, UT Austin.",
  openGraph: {
    title: "DocCypher — IFML Research Symposium 2026",
    description:
      "Hybrid retrieval for grounded document question answering, built to run in 200 MB.",
    url: "https://ai-with-arjun.vercel.app/ifml",
    siteName: "AI with Arjun",
    type: "website",
  },
  robots: { index: true, follow: true },
};

type LinkCard = {
  label: string;
  desc: string;
  href: string;
  primary?: boolean;
};

const links: LinkCard[] = [
  {
    label: "Try the live demo",
    desc: "Upload a PDF and ask it questions. Every answer cites the file and page it came from.",
    href: "https://doc-cypher.vercel.app/",
    primary: true,
  },
  {
    label: "Source code",
    desc: "github.com/Arjunn28/doc-cypher",
    href: "https://github.com/Arjunn28/doc-cypher",
  },
  {
    label: "Portfolio",
    desc: "Other projects, plus ARIA, a RAG chatbot that answers questions about my work.",
    href: "https://ai-with-arjun.vercel.app",
  },
  {
    label: "LinkedIn",
    desc: "Happy to connect. Mention the symposium and I will know where we met.",
    href: "https://www.linkedin.com/in/arjun-an/",
  },
  {
    label: "More on GitHub",
    desc: "github.com/Arjunn28",
    href: "https://github.com/Arjunn28",
  },
];

const facts: { value: string; label: string }[] = [
  { value: "1.5 GB", label: "peak memory before" },
  { value: "< 200 MB", label: "footprint after" },
  { value: "512 MB", label: "container it fits" },
  { value: "0", label: "weights in-process" },
];

export default function IFMLPage() {
  return (
    <main className="min-h-screen py-16 md:py-24">
      <div className="mx-auto w-full max-w-2xl px-6">
        <p className="section-label mb-6">IFML Research Symposium 2026</p>

        <h1 className="font-serif text-hero text-ink-50">DocCypher</h1>

        <p className="mt-5 text-lg leading-relaxed text-ink-300 text-pretty">
          Hybrid retrieval for grounded document question answering, built to
          run in 200&nbsp;MB.
        </p>

        <div className="mt-8 text-sm leading-relaxed text-ink-400">
          <span className="text-ink-100 font-medium">
            Arjun Abbimutt Nagendra Kumar
          </span>
          <br />
          MS Information Studies, School of Information
          <br />
          The University of Texas at Austin
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {facts.map((f) => (
            <div
              key={f.label}
              className="rounded-lg border border-ink-700 bg-ink-900/60 px-3 py-4 text-center"
            >
              <div className="font-serif text-2xl text-accent">{f.value}</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-ink-400">
                {f.label}
              </div>
            </div>
          ))}
        </div>

        <div className="my-10 h-px w-full bg-ink-700" />

        <div className="space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`card-hover group block rounded-xl border px-5 py-5 ${
                l.primary
                  ? "border-accent/40 bg-accent/[0.04]"
                  : "border-ink-700 bg-ink-900/40"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-[17px] font-medium text-ink-50">
                    {l.label}
                  </div>
                  <div className="mt-1.5 text-sm leading-relaxed text-ink-400">
                    {l.desc}
                  </div>
                </div>
                <ArrowUpRight
                  size={20}
                  className="shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </a>
          ))}
        </div>

        <p className="mt-10 border-l-2 border-accent/50 pl-4 text-sm leading-relaxed text-ink-400">
          Thanks for stopping by the poster. If you want the architecture
          walkthrough, the fastest path is the demo above, then the README in
          the repo.
        </p>

        <div className="mt-12 flex items-center justify-between gap-4 border-t border-ink-700 pt-6">
          <Link
            href="/"
            className="link-underline inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-ink-400 hover:text-ink-100"
          >
            <ArrowLeft size={14} />
            Back to portfolio
          </Link>
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-500">
            October 1&ndash;2, 2026
          </span>
        </div>
      </div>
    </main>
  );
}
