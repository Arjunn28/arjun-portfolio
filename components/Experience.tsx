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

const education: Role[] = [
  {
    role: "M.S. Information Studies · AI, Data Science and Analytics",
    company: "The University of Texas at Austin",
    period: "Aug 2026 — May 2028",
    location: "Austin, TX",
    logo: "/ut_austin.png",
    current: true,
  },
  {
    role: "B.E. Computer Science and Business Systems · 9.47 / 10 (3.8/4.0 US Equivalent)",
    company: "JSS Science and Technology University",
    period: "Jul 2019 — Aug 2023",
    location: "Mysuru, India",
    logo: "/jss.png",
  },
];

const workRoles: Role[] = [
  {
    role: "Teaching Assistant · Innovation and Entrepreneurship Honours",
    company: "McCombs School of Business, UT Austin",
    period: "Aug 2026 — Present",
    location: "Austin, TX",
    logo: "/mccombs.png",
    current: true,
  },
  {
    role: "Data Analyst",
    company: "Target Corporation",
    period: "Aug 2023 — Jul 2026",
    location: "Bengaluru, India",
    logo: "/target.png",
  },
  {
    role: "AI/ML Intern",
    company: "Tata Consultancy Services",
    period: "Jun 2022 — Sep 2022",
    location: "Bengaluru, India",
    logo: "/tcs.png",
  },
];

const leadershipRoles: Role[] = [
  {
    role: "Certified Zone Trainer",
    company: "JCI India · Zone",
    period: "2025 — Present",
    location: "India",
    logo: "/jci.png",
    current: true,
  },
  {
    role: "President",
    company: "JCI Mysore Brindavan",
    period: "Jan 2024 — Dec 2024",
    location: "Mysore",
    logo: "/jci.png",
  },
];

function RoleCard({ role }: { role: Role }) {
  return (
    <div className="group border border-ink-800 bg-ink-900/30 hover:border-accent/30 hover:bg-ink-900/50 transition-all duration-300 p-6 md:p-7 h-full">
      <div className="flex items-start gap-5">
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
    </div>
  );
}

function RoleGrid({ roles }: { roles: Role[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      {roles.map((role, i) => (
        <motion.div
          key={`${role.company}-${role.period}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <RoleCard role={role} />
        </motion.div>
      ))}
    </div>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      className="py-24 md:py-28 scroll-mt-20 border-t border-ink-800"
    >
      <div className="container-x">
        {/* Education */}
        <div className="mb-12">
          <div className="section-label mb-4">Education</div>
          <h2 className="font-serif text-hero text-ink-50 text-balance max-w-3xl">
            Where I&apos;m{" "}
            <span className="italic text-accent">learning the craft.</span>
          </h2>
        </div>
        <RoleGrid roles={education} />

        {/* Work */}
        <div className="mt-20 mb-12">
          <div className="section-label mb-4">Experience</div>
          <h2 className="font-serif text-hero text-ink-50 text-balance max-w-3xl">
            Where I&apos;ve{" "}
            <span className="italic text-accent">done the work.</span>
          </h2>
        </div>
        <RoleGrid roles={workRoles} />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 font-mono text-xs text-ink-500"
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

        {/* Leadership */}
        <div className="mt-20 mb-12">
          <div className="section-label mb-4">Leadership</div>
          <h2 className="font-serif text-hero text-ink-50 text-balance max-w-3xl">
            And where I&apos;ve{" "}
            <span className="italic text-accent">led people.</span>
          </h2>
        </div>
        <RoleGrid roles={leadershipRoles} />
      </div>
    </section>
  );
}
