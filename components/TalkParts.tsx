import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { cn } from "@/lib/utils";

// Shared building blocks for the pages under /talks.

export type ButtonLink = { label: string; href: string; primary?: boolean };

export type Photo = { file: string; caption: string; focus: string };

export function SmartLink({
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

export function Buttons({ links }: { links: ButtonLink[] }) {
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

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-serif text-3xl md:text-4xl text-ink-50 leading-tight mb-6 text-balance">
      {children}
    </h2>
  );
}

export function BackLink() {
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

export function Gallery({
  heading,
  photoDir,
  photos,
}: {
  heading: string;
  photoDir: string;
  photos: Photo[];
}) {
  return (
    <section className="mt-20 border-t border-ink-800 pt-12">
      <FadeIn>
        <SectionHeading>{heading}</SectionHeading>
      </FadeIn>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {photos.map((p, i) => (
          <FadeIn key={p.file} delay={i * 0.06}>
            <figure className="group">
              <div className="relative h-48 w-full overflow-hidden border border-ink-800 bg-ink-900 sm:h-64">
                <Image
                  src={`${photoDir}/${p.file}`}
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
  );
}

export function TalkFooter() {
  return (
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
  );
}
