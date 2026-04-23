"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#beyond", label: "Beyond" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur-lg bg-ink-950/70 border-b border-ink-800"
          : "bg-transparent"
      )}
    >
      <div className="container-x flex items-center justify-between py-4">
        <Link
          href="/"
          className="font-mono text-sm tracking-wider text-ink-100 hover:text-accent transition-colors"
        >
          <span className="text-accent">◆</span> ai_with_arjun
        </Link>

        <div className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-nav text-[15px] font-medium text-ink-300 hover:text-accent transition-colors link-underline"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex font-mono text-xs uppercase tracking-[0.15em] text-ink-950 bg-accent px-4 py-2 hover:bg-accent-bright transition-colors"
        >
          Resume ↓
        </a>

        <button
          className="md:hidden text-ink-200"
          aria-label="Menu"
          onClick={() => {
            const menu = document.getElementById("mobile-menu");
            menu?.classList.toggle("hidden");
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      <div id="mobile-menu" className="hidden md:hidden border-t border-ink-800 bg-ink-950">
        <div className="container-x py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-nav text-base font-medium text-ink-300"
              onClick={() => document.getElementById("mobile-menu")?.classList.add("hidden")}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-[0.15em] text-accent"
          >
            Resume ↓
          </a>
        </div>
      </div>
    </nav>
  );
}
