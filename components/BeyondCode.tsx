"use client";

import { motion } from "framer-motion";
import { Users, Mic, Globe, Award } from "lucide-react";

type Achievement = {
  icon: React.ReactNode;
  title: string;
  org: string;
  body: string;
  year: string;
};

const achievements: Achievement[] = [
  {
    icon: <Mic className="w-5 h-5" />,
    title: "Certified Zone Trainer",
    org: "Junior Chamber International India",
    body: "Trained 350+ students across the state in Public Speaking, Ethical Use of AI, Modern Personal Grooming and Study Techniques.",
    year: "2025 — Present",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "President, JCI Mysore Brindavan",
    org: "Led 40-member team",
    body: "Grew chapter membership by 8% and impacted 400+ lives through wheelchair donations, meal drives and blood donation camps.",
    year: "2024",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Asia-Pacific Conference",
    org: "Represented JCI India",
    body: "Attended the 2024 Asia-Pacific Conference in Cambodia as a JCI India representative.",
    year: "Jun 2024",
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: "Star Local President",
    org: "JCI International Award Series",
    body: "Recognised for exceptional chapter leadership and community impact during my tenure.",
    year: "2024",
  },
];

export function BeyondCode() {
  return (
    <section
      id="beyond"
      className="py-24 md:py-28 scroll-mt-20 border-t border-ink-800"
    >
      <div className="container-x">
        <div className="mb-12">
          <div className="section-label mb-4">Beyond the code</div>
          <h2 className="font-serif text-hero text-ink-50 text-balance max-w-3xl">
            Leadership, training{" "}
            <span className="italic text-accent">and the stage!</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group border border-ink-800 bg-ink-900/20 hover:border-accent/30 hover:bg-ink-900/40 transition-all duration-300 p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-accent/10 border border-accent/30 text-accent flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  {a.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-serif text-lg md:text-xl text-ink-50 leading-tight">
                      {a.title}
                    </h3>
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-500 mb-3">
                    {a.org} · {a.year}
                  </div>
                  <p className="text-ink-300 text-sm leading-relaxed text-pretty">
                    {a.body}
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
