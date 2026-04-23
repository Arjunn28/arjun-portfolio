"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { socialLinks } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[400px] h-[400px] bg-signal-amber/5 rounded-full blur-[120px]" />
      </div>

      <div className="container-x relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left column: headline + CTAs */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="section-label mb-8"
            >
              Welcome to my World! 
              {/* <span className="inline-block ml-3 w-2 h-2 rounded-full bg-signal-green animate-pulse" /> */}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-display text-balance text-ink-50 mb-8"
            >
              I build AI systems
              <br />
              <span className="italic text-accent">that go live.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-ink-300 text-lg md:text-xl max-w-xl leading-relaxed mb-4 text-pretty"
            >
              Data Analyst moving into AI Engineering. I design and deploy
              agentic systems, RAG pipelines and multimodal applications
              from architecture to production.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-ink-400 text-base max-w-xl leading-relaxed mb-10 text-pretty"
            >
              Three years of production analytics inside a Fortune 500 retailer,
              now channelled into building agents, retrieval systems and vision
              pipelines on my own terms.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#work"
                className="group inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.15em] text-ink-950 bg-accent px-6 py-3 hover:bg-accent-bright transition-all"
              >
                View Work
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.15em] text-ink-200 border border-ink-700 px-6 py-3 hover:border-accent hover:text-accent transition-all"
              >
                GitHub
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.15em] text-ink-200 border border-ink-700 px-6 py-3 hover:border-accent hover:text-accent transition-all"
              >
                LinkedIn
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Right column: terminal widget */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-accent/10 blur-2xl" />
              <div className="relative bg-ink-900/80 backdrop-blur border border-ink-700 rounded-sm overflow-hidden">
                {/* Terminal title bar */}
                <div className="flex items-center justify-between px-4 py-2 border-b border-ink-800 bg-ink-900">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-ink-700" />
                    <div className="w-3 h-3 rounded-full bg-ink-700" />
                    <div className="w-3 h-3 rounded-full bg-ink-700" />
                  </div>
                  <div className="font-mono text-[10px] text-ink-500 uppercase tracking-widest">
                    zsh — arjun@portfolio
                  </div>
                </div>

                {/* Terminal body */}
                <div className="p-5 font-mono text-[13px] leading-relaxed space-y-3">
                  <TerminalLine command="whoami" output="arjun_an" delay={0.8} />
                  <TerminalLine
                    command="cat stack.txt"
                    output={[
                      "python · fastapi · langchain",
                      "llama · groq · chromadb",
                      "react · nextjs · typescript",
                      "pyspark · hadoop · sql",
                    ]}
                    delay={1.2}
                  />
                  <TerminalLine
                    command="ls projects/"
                    output={[
                      "sentinel-ai/    doc-cypher/",
                      "snap-iq/        retail-iq-copilot/",
                    ]}
                    delay={1.8}
                  />
                  <TerminalLine
                    command="echo $STATUS"
                    output="crafting · open to opportunities"
                    delay={2.4}
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.8 }}
                    className="flex items-center gap-1"
                  >
                    <span className="text-signal-green">$</span>
                    <span className="w-2 h-4 bg-accent animate-blink" />
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Location card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-4 flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.15em] text-ink-500"
            >
              <span>Bengaluru · IST</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-signal-green" />
                v1.0.0
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TerminalLine({
  command,
  output,
  delay,
}: {
  command: string;
  output: string | string[];
  delay: number;
}) {
  const outputLines = Array.isArray(output) ? output : [output];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.4 }}
      className="space-y-0.5"
    >
      <div>
        <span className="text-signal-green">$</span>{" "}
        <span className="text-ink-200">{command}</span>
      </div>
      {outputLines.map((line, i) => (
        <div key={i} className="text-ink-400 pl-4">
          <span className="text-accent/50">›</span> {line}
        </div>
      ))}
    </motion.div>
  );
}
