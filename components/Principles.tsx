"use client";

import { motion } from "framer-motion";
import { principles } from "@/lib/data";

export function Principles() {
  return (
    <section
      id="principles"
      className="py-24 md:py-32 scroll-mt-20 border-t border-ink-800 relative overflow-hidden"
    >
      <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-x relative">
        <div className="mb-16">
          {/* <div className="section-label mb-4">Principles</div> */}
          <h2 className="font-serif text-hero text-ink-50 text-balance max-w-3xl">
            How I think about{" "}
            <span className="italic text-accent">AI.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink-800 border border-ink-800">
          {principles.map((principle, i) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-ink-950 p-8 md:p-10 relative group hover:bg-ink-900/50 transition-colors duration-500"
            >
              <div className="flex items-start gap-6">
                <div className="font-mono text-sm text-accent flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl text-ink-50 mb-3 leading-tight">
                    {principle.title}
                  </h3>
                  <p className="text-ink-300 text-base leading-relaxed text-pretty">
                    {principle.body}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
