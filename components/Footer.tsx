import Link from "next/link";
import { socialLinks } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-800 py-12 bg-ink-950">
      <div className="container-x">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <Link
              href="/"
              className="font-mono text-sm tracking-wider text-ink-100"
            >
              <span className="text-accent">◆</span> ai_with_arjun
            </Link>
            <p className="text-ink-400 text-sm mt-3 leading-relaxed max-w-xs">
              Data Analyst moving into AI Engineering. Building agents,
              retrieval systems and vision pipelines. 
            </p>
          </div>

          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500 mb-3">
              Navigate
            </div>
            <ul className="space-y-2">
              {[
                { href: "/#about", label: "About" },
                { href: "/#work", label: "Work" },
                { href: "/#experience", label: "Experience" },
                { href: "/#beyond", label: "Beyond" },
                { href: "/#contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-ink-300 text-sm hover:text-accent transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500 mb-3">
              Elsewhere
            </div>
            <ul className="space-y-2">
              <li>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-300 text-sm hover:text-accent transition-colors"
                >
                  GitHub ↗
                </a>
              </li>
              <li>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-300 text-sm hover:text-accent transition-colors"
                >
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="text-ink-300 text-sm hover:text-accent transition-colors"
                >
                  Email ↗
                </a>
              </li>
              <li>
                <a
                  href={socialLinks.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-300 text-sm hover:text-accent transition-colors"
                >
                  Resume ↓
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-ink-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-500">
            © {year} Arjun Abbimutt Nagendra Kumar
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-500 flex items-center gap-4">
            <span>Built with Next.js + Tailwind</span>
            {/* <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-signal-green" />
              Online
            </span> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
