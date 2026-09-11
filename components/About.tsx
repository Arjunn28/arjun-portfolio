"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 scroll-mt-20 border-t border-ink-800"
    >
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-32"
            >
              <div className="section-label mb-4">About</div>
              <h2 className="font-serif text-[clamp(1.75rem,3.4vw,2.75rem)] leading-[1.05] tracking-tight text-ink-50 text-balance mb-8">
                  AI Researcher, <br />
                  <span className="italic text-accent">builder,</span> <br />
                  <span className="italic text-accent">engineer,</span> <br />
                  learner.
                </h2>
              <div className="font-mono text-xs text-ink-500 uppercase tracking-[0.15em] space-y-2 border-l-2 border-accent/40 pl-4">
                <div>UT Austin · MSIS 2028</div>
                <div>AI, Data Science &amp; Analytics</div>
                <div>Ex-Target · Ex-TCS</div>
                <div>Computer Science & Business Systems Engineer</div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-ink-200 text-lg md:text-xl leading-relaxed text-pretty"
            >
              I spent three years as a Data Analyst at a Fortune 500 retailer, building
              pipelines that moved billions of records a week. The work was
              analytical but the pattern I kept seeing was the same: humans in
              the loop, doing repetitive, low-creativity work that a well-designed
              system could handle.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-ink-300 text-base md:text-lg leading-relaxed text-pretty"
            >
              So I started building agents. First at work: AI agents deployed
              across 167 business categories that off-loaded major dependency on external
              category managers. Then on my own time: Sentinel AI, DocCypher & much more. 
              Live projects across AI modalities.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-ink-300 text-base md:text-lg leading-relaxed text-pretty"
            >
              What I care about: decoupling LLM reasoning from arithmetic.
              Hybrid retrieval over naïve vectors. Structured outputs with
              Pydantic validation at every boundary. Evals as the real moat.
              Systems that run unattended at 3am.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-ink-300 text-base md:text-lg leading-relaxed text-pretty"
            >
              Outside work, I train young people in Modern
              Personal Grooming, Public Speaking and Ethical Use of AI as a
              Certified Trainer with Junior Chamber International. I led
              a 40-member team as President and represented my country, India,  at
              the 2024 Asia-Pacific Conference in Cambodia.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-8 mt-8 border-t border-ink-800 grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              <Stat label="Years in industry" value="3" />
              <Stat label="Projects deployed" value="4+" />
              <Stat label="Records at scale" value="2B+" />
              <Stat label="Categories automated" value="167" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-serif text-3xl md:text-4xl text-accent mb-1">{value}</div>
      <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-500">
        {label}
      </div>
    </div>
  );
}
