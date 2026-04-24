"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Achievement = {
  image: string;
  title: string;
  org: string;
  body: string;
  year: string;
};

const achievements: Achievement[] = [
  {
    image: "/zone_trainer.png",
    title: "Certified Trainer",
    org: "Training and Development | Junior Chamber International",
    body: "Trained 350+ students & participants across India, focusing on public speaking, ethical use of AI, personal grooming, and effective study techniques. Known for simplifying complex ideas and creating highly engaging learning environments that drive real behavioral change.",
    year: "2025 — Present",
  },
  {
    image: "/president.png",
    title: "President, JCI Mysore Brindavan",
    org: "Leadership | Community Building",
    body: "Led a 40-member chapter and drove an 8% increase in membership! Spearheaded community programs that impacted 400+ individuals, including wheelchair donations, meal drives and blood donation camps. Aligned a diverse network of trainers, speakers, students and business owners to execute high-impact initiatives.",
    year: "2024",
  },
  {
    image: "/aspac.png",
    title: "Asia-Pacific Conference Delegate",
    org: "International Exposure & Representation",
    body: "Represented JCI India at the 2024 Asia-Pacific Conference in Cambodia as a national delegate. Participated in the General Assembly and engaged with National Presidents and global leaders, gaining exposure to international perspectives on leadership, collaboration and community development.",
    year: "Jun 2024",
  },
  {
    image: "/star_president.png",
    title: "Star Local President",
    org: "International Recognition | Leadership Excellence",
    body: "Awarded Star Local President 2024 for outstanding leadership and measurable community impact. Recognized for achieving 100% efficiency, delivering consistent results and executing strong communication and digital outreach strategies. Also led the JCI India football team to the semi-finals, demonstrating team leadership beyond formal roles.",
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
          <div className="section-label mb-4">Beyond Engineering</div>
          <h2 className="font-serif text-hero text-ink-50 text-balance max-w-3xl">
            Leadership in{" "}
            <span className="italic text-accent">action!</span>
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
              className="group border border-ink-800 bg-ink-900/20 hover:border-accent/30 hover:bg-ink-900/40 transition-all duration-300 overflow-hidden"
            >
              {/* Image strip */}
              <div className="relative w-full h-44 md:h-52 overflow-hidden border-b border-ink-800 bg-ink-900">
                <Image
                  src={a.image}
                  alt={`${a.title} photo`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
                {/* Gradient for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/10 to-transparent pointer-events-none" />

                {/* Year badge */}
                <div className="absolute top-3 right-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-100 bg-ink-950/70 backdrop-blur-sm px-2.5 py-1">
                  {a.year}
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <h3 className="font-serif text-xl md:text-2xl text-ink-50 leading-tight mb-1.5">
                  {a.title}
                </h3>
                <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-500 mb-4">
                  {a.org}
                </div>
                <p className="text-ink-300 text-sm md:text-base leading-relaxed text-pretty">
                  {a.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
