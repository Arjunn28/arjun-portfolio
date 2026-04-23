import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { caseStudies } from "@/lib/case-studies";
import { projects } from "@/lib/data";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const study = caseStudies[slug];
  const project = projects.find((p) => p.slug === slug);

  if (!study && !project) return { title: "Not found" };

  const title = study?.title || project?.title || "Project";
  const description = study?.oneLiner || project?.tagline || "";

  return {
    title: `${title} — Arjun AN`,
    description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = params;
  const study = caseStudies[slug];
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  // For non-featured projects without a full case study, show a minimal page
  if (!study) {
    return <MinimalProjectPage project={project} />;
  }

  return (
    <>
      <Nav />
      <main className="pt-32 pb-16">
        <article className="container-x max-w-4xl">
          {/* Back link */}
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-ink-400 hover:text-accent transition-colors mb-12"
          >
            <ArrowLeft className="w-3 h-3" />
            All Projects
          </Link>

          {/* Header */}
          <header className="mb-16">
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500 mb-6">
              <span className="text-accent">{project.category}</span>
              <span>·</span>
              <span>{project.year}</span>
            </div>

            <h1 className="font-serif text-display text-ink-50 mb-4 leading-[0.95]">
              {study.title}
            </h1>

            <div className="font-serif text-2xl md:text-3xl text-accent italic mb-8">
              {study.subtitle}
            </div>

            <p className="text-ink-200 text-lg md:text-xl leading-relaxed max-w-3xl text-pretty mb-10">
              {study.oneLiner}
            </p>

            {/* Stack pills */}
            <div className="flex flex-wrap gap-2 mb-10">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[10px] uppercase tracking-wider text-ink-300 border border-ink-700 px-3 py-1.5"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action bar */}
            <div className="flex flex-wrap items-center gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.15em] text-ink-950 bg-accent px-5 py-2.5 hover:bg-accent-bright transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.15em] text-ink-200 border border-ink-700 px-5 py-2.5 hover:border-accent hover:text-accent transition-all"
              >
                <Github className="w-4 h-4" />
                Source Code
              </a>
            </div>
          </header>

          {/* The problem */}
          <Section label="The problem">
            <p className="text-ink-200 text-lg leading-relaxed text-pretty">
              {study.problem}
            </p>
          </Section>

          {/* Dynamic sections (what I built, architecture, etc) */}
          {study.sections.map((section, i) => (
            <Section key={i} label={section.heading}>
              {section.paragraphs?.map((para, j) => (
                <p
                  key={j}
                  className="text-ink-300 text-base md:text-lg leading-relaxed mb-4 text-pretty last:mb-0"
                >
                  {para}
                </p>
              ))}
              {section.code && (
                <pre className="bg-ink-900 border border-ink-800 p-4 md:p-6 overflow-x-auto font-mono text-xs md:text-sm text-ink-200 leading-relaxed my-4">
                  <code>{section.code}</code>
                </pre>
              )}
            </Section>
          ))}

          {/* Decisions */}
          <Section label="Decisions worth explaining">
            <div className="space-y-8">
              {study.decisions.map((decision, i) => (
                <div
                  key={i}
                  className="border-l-2 border-accent/40 pl-6 md:pl-8 py-1"
                >
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="font-mono text-sm text-accent flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl text-ink-50 leading-tight">
                      {decision.title}
                    </h3>
                  </div>
                  <p className="text-ink-300 text-base leading-relaxed text-pretty pl-10">
                    {decision.body}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          {/* Results */}
          <Section label="Results">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink-800 border border-ink-800">
              {study.results.map((result, i) => (
                <div key={i} className="bg-ink-950 p-5 md:p-6">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500 mb-2">
                    {result.metric}
                  </div>
                  <div className="font-serif text-2xl md:text-3xl text-accent">
                    {result.value}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* What I'd do differently */}
          <Section label="What I would do differently">
            <ul className="space-y-4">
              {study.improvements.map((improvement, i) => (
                <li
                  key={i}
                  className="flex gap-4 text-ink-300 text-base md:text-lg leading-relaxed text-pretty"
                >
                  <span className="font-mono text-accent text-sm flex-shrink-0 mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{improvement}</span>
                </li>
              ))}
            </ul>
          </Section>

          {/* What this demonstrates */}
          <Section label="What this demonstrates">
            <ul className="space-y-2">
              {study.demonstrates.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-ink-300 text-base leading-relaxed"
                >
                  <span className="text-accent flex-shrink-0 mt-2">
                    <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                      <rect width="6" height="6" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          {/* Next project */}
          <NextProjectNav currentSlug={slug} />
        </article>
      </main>
      <Footer />
    </>
  );
}

function Section({
  label,
  children,
}: {
  label?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-16 md:mb-20">
      {label && <div className="section-label mb-6">{label}</div>}
      {children}
    </section>
  );
}

function NextProjectNav({ currentSlug }: { currentSlug: string }) {
  const featured = projects.filter((p) => p.featured);
  const currentIndex = featured.findIndex((p) => p.slug === currentSlug);
  const next = featured[(currentIndex + 1) % featured.length];

  if (!next || next.slug === currentSlug) return null;

  return (
    <div className="mt-20 pt-12 border-t border-ink-800">
      <Link
        href={`/projects/${next.slug}`}
        className="group flex items-center justify-between gap-6 p-6 md:p-8 border border-ink-800 hover:border-accent/40 transition-all"
      >
        <div className="flex-1">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500 mb-2">
            Next project
          </div>
          <h3 className="font-serif text-2xl md:text-3xl text-ink-50 group-hover:text-accent transition-colors">
            {next.title}
          </h3>
          <p className="text-ink-400 text-sm mt-2 max-w-xl text-pretty">
            {next.tagline}
          </p>
        </div>
        <ArrowUpRight className="w-8 h-8 text-ink-500 group-hover:text-accent group-hover:-translate-y-1 group-hover:translate-x-1 transition-all flex-shrink-0" />
      </Link>
    </div>
  );
}

// Minimal page for projects without a full case study (e.g. RetailIQ Copilot)
function MinimalProjectPage({ project }: { project: (typeof projects)[0] }) {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-16">
        <article className="container-x max-w-3xl">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-ink-400 hover:text-accent transition-colors mb-12"
          >
            <ArrowLeft className="w-3 h-3" />
            All Projects
          </Link>

          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500 mb-6">
            <span className="text-accent">{project.category}</span>
            <span>·</span>
            <span>{project.year}</span>
          </div>

          <h1 className="font-serif text-display text-ink-50 mb-6 leading-[0.95]">
            {project.title}
          </h1>

          <p className="text-ink-200 text-lg md:text-xl leading-relaxed mb-8 text-pretty">
            {project.tagline}
          </p>

          <div className="flex flex-wrap gap-2 mb-10">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[10px] uppercase tracking-wider text-ink-300 border border-ink-700 px-3 py-1.5"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-16">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.15em] text-ink-950 bg-accent px-5 py-2.5 hover:bg-accent-bright transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.15em] text-ink-200 border border-ink-700 px-5 py-2.5 hover:border-accent hover:text-accent transition-all"
            >
              <Github className="w-4 h-4" />
              Source Code
            </a>
          </div>

          <div className="border-t border-ink-800 pt-10">
            <p className="text-ink-400 text-sm leading-relaxed text-pretty">
              Full case study coming soon. For now, check out the live demo or
              the source code on GitHub.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
