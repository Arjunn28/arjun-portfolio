"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight, Check, AlertCircle } from "lucide-react";
import { socialLinks } from "@/lib/data";

type FormState = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to send message");
      }

      setState("success");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setState("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong"
      );
    }
  }

  return (
    <section
      id="contact"
      className="py-24 md:py-32 scroll-mt-20 border-t border-ink-800 relative overflow-hidden"
    >
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-x relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="section-label mb-4">Contact</div>
              <h2 className="font-serif text-hero text-ink-50 text-balance mb-6">
                Koffee with <br />
                <span className="italic text-accent">Arjun?</span>
              </h2>
              <p className="text-ink-300 text-base md:text-lg leading-relaxed mb-4 text-pretty">
                Think we could have an interesting convo? HMU.
              </p>
              <p className="text-ink-400 text-sm md:text-base leading-relaxed mb-10 text-pretty">
                Open to AI Engineer, SWE, Data roles, side projects,
                hackathon teams or just a good rant!
              </p>

              <div className="space-y-4">
                <ContactLink
                  href={`mailto:${socialLinks.email}`}
                  icon={<Mail className="w-4 h-4" />}
                  label="Email"
                  value={socialLinks.email}
                />
                <ContactLink
                  href={socialLinks.github}
                  icon={<Github className="w-4 h-4" />}
                  label="GitHub"
                  value="github.com/Arjunn28"
                  external
                />
                <ContactLink
                  href={socialLinks.linkedin}
                  icon={<Linkedin className="w-4 h-4" />}
                  label="LinkedIn"
                  value="linkedin.com/in/arjun-an"
                  external
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="border border-ink-800 bg-ink-900/30 backdrop-blur-sm p-6 md:p-10 space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block font-mono text-[10px] uppercase tracking-[0.2em] text-ink-400 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  disabled={state === "loading"}
                  className="w-full bg-transparent border-b border-ink-700 focus:border-accent py-2 text-ink-100 placeholder-ink-600 outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-mono text-[10px] uppercase tracking-[0.2em] text-ink-400 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  disabled={state === "loading"}
                  className="w-full bg-transparent border-b border-ink-700 focus:border-accent py-2 text-ink-100 placeholder-ink-600 outline-none transition-colors"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-mono text-[10px] uppercase tracking-[0.2em] text-ink-400 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  disabled={state === "loading"}
                  className="w-full bg-transparent border-b border-ink-700 focus:border-accent py-2 text-ink-100 placeholder-ink-600 outline-none transition-colors resize-none"
                  placeholder="Role, project, coffee plan, anything really..."
                />
              </div>

              <div className="flex items-center justify-between pt-4">
                <div className="font-mono text-xs text-ink-500">
                  {state === "success" && (
                    <span className="flex items-center gap-2 text-signal-green">
                      <Check className="w-4 h-4" />
                      Got it. I&apos;ll hit you back within 24 hours.
                    </span>
                  )}
                  {state === "error" && (
                    <span className="flex items-center gap-2 text-signal-amber">
                      <AlertCircle className="w-4 h-4" />
                      {errorMessage || "Something went wrong. Try email instead."}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={state === "loading" || state === "success"}
                  className="group inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.15em] text-ink-950 bg-accent px-6 py-3 hover:bg-accent-bright transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state === "loading" ? "Sending..." : "Send Message"}
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactLink({
  href,
  icon,
  label,
  value,
  external = false,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-4 border-b border-ink-800 pb-4 hover:border-accent/40 transition-colors"
    >
      <div className="text-accent">{icon}</div>
      <div className="flex-1">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500 mb-0.5">
          {label}
        </div>
        <div className="text-ink-200 group-hover:text-accent transition-colors">
          {value}
        </div>
      </div>
      <ArrowUpRight className="w-4 h-4 text-ink-600 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
    </a>
  );
}
