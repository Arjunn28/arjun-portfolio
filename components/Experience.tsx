"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Role = {
  role: string;
  company: string;
  period: string;
  location: string;
  logo: string;
  current?: boolean;
};

const roles: Role[] = [
  {
    role: "Data Analyst",
    company: "Target Corporation",
    period: "Aug 2023 — Present",
    location: "Bengaluru",
    logo: "/target.png",
    current: true,
  },
  {
    role: "AI/ML Intern",
    company: "Tata Consultancy Services",
    period: "Jun 2022 — Sep 2022",
    location: "Bengaluru",
    logo: "/tcs.png",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="py-24 md:py-28 scroll-mt-20 border-t border-ink-800"
    >
      <div className="container-x">
        <div className="mb-12">
          <div className="section-label mb-4">Experience</div>
          <h2 className="font-serif text-hero text-ink-50 text-balance max-w-3xl">
            Where I&apos;ve{" "}
            <span className="italic text-accent">done the work.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {roles.map((role, i) => (
            <motion.div
              key={role.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group border border-ink-800 bg-ink-900/30 hover:border-accent/30 hover:bg-ink-900/50 transition-all duration-300 p-6 md:p-7"
            >
              <div className="flex items-start gap-5">
                {/* Logo */}
                <div className="relative flex-shrink-0 w-14 h-14 md:w-16 md:h-16 bg-white rounded-sm overflow-hidden flex items-center justify-center p-2">
                  <Image
                    src={role.logo}
                    alt={`${role.company} logo`}
                    width={64}
                    height={64}
                    className="object-contain max-w-full max-h-full"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3 className="font-serif text-xl md:text-2xl text-ink-50 leading-tight">
                      {role.company}
                    </h3>
                    {role.current && (
                      <span className="flex-shrink-0 flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.15em] text-signal-green bg-signal-green/10 px-2 py-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-signal-green animate-pulse" />
                        Current
                      </span>
                    )}
                  </div>
                  <div className="text-ink-200 text-sm md:text-base mb-3">
                    {role.role}
                  </div>
                  <div className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.15em] text-ink-500 flex items-center gap-3">
                    <span>{role.period}</span>
                    <span className="text-ink-700">·</span>
                    <span>{role.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 font-mono text-xs text-ink-500"
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-accent transition-colors link-underline"
          >
            For the detailed bullet-point version, grab the resume ↓
          </a>
        </motion.div>
      </div>
    </section>
  );
}
