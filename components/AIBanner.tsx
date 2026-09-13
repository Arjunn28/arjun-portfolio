"use client";

import { Sparkles } from "lucide-react";

export function AIBanner() {
  return (
    <div className="relative z-40 border-b border-ink-800 bg-ink-900/50 backdrop-blur-sm py-2.5">
      <div className="container-x flex items-center justify-center gap-2.5">
        <Sparkles className="w-3 h-3 text-accent flex-shrink-0" />
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-700 text-center leading-relaxed">
          Iron Man has JARVIS. I built my own{" "}
          <span className="text-accent">ARIA</span>.
          <br className="hidden sm:block" />{" "}
          This portfolio is an AI project. She&apos;s in the bottom right, ask her anything.
        </p>
        <Sparkles className="w-3 h-3 text-accent flex-shrink-0" />
      </div>
    </div>
  );
}
