"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section
      id="experience"
      className="py-24 md:py-32 scroll-mt-20 border-t border-ink-800"
    >
      <div className="container-x">
        <div className="mb-16">
          <div className="section-label mb-4">Experience</div>
          <h2 className="font-serif text-hero text-ink-50 text-balance max-w-3xl">
            Three years of data and AI work{" "}
            <span className="italic text-accent">at real retail scale.</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-[180px] top-0 bottom-0 w-px bg-ink-800" />

          <div className="space-y-16 md:space-y-20">
            {experience.map((job, i) => (
              <motion.div
                key={`${job.company}-${i}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative grid grid-cols-1 md:grid-cols-[180px_1fr] gap-6 md:gap-12"
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-[180px] -translate-x-[5px] md:-translate-x-[5px] top-1.5 w-[10px] h-[10px] rounded-full bg-accent ring-4 ring-ink-950" />

                {/* Period */}
                <div className="pl-10 md:pl-0 md:text-right md:pr-8">
                  <div className="font-mono text-xs uppercase tracking-[0.15em] text-ink-400 mb-1">
                    {job.period}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-500">
                    {job.location}
                  </div>
                </div>

                {/* Content */}
                <div className="pl-10 md:pl-8">
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-6">
                    <div>
                      <h3 className="font-serif text-2xl md:text-3xl text-ink-50 mb-1">
                        {job.role}
                      </h3>
                      <div className="text-ink-300 text-base">
                        {job.company}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {job.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="text-ink-300 text-sm md:text-base leading-relaxed flex gap-3 text-pretty"
                      >
                        <span className="text-accent flex-shrink-0 mt-1.5">
                          <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                            <rect width="6" height="6" />
                          </svg>
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10px] uppercase tracking-wider text-ink-400 border border-ink-800 px-2.5 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
