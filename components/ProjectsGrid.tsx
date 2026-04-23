"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";

export function ProjectsGrid() {
  const featured = projects.filter((p) => p.featured);
  const secondary = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="py-24 md:py-32 scroll-mt-20">
      <div className="container-x">
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="section-label mb-4">Some of my work..</div>
            <h2 className="font-serif text-hero text-ink-50 text-balance">
              AI systems I&apos;ve built,{" "}
              <span className="italic text-accent">live and open.</span>
            </h2>
          </div>
          <div className="hidden md:block font-mono text-xs text-ink-500 tracking-widest uppercase">
            {featured.length.toString().padStart(2, "0")} /{" "}
            {projects.length.toString().padStart(2, "0")}
          </div>
        </div>

        {/* Featured projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {featured.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={index === 0 ? "lg:col-span-2" : ""}
            >
              <ProjectCard project={project} large={index === 0} />
            </motion.div>
          ))}
        </div>

        {/* Secondary projects */}
        {secondary.length > 0 && (
          <div className="mt-16">
            <div className="section-label mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {secondary.map((project, index) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <SecondaryCard project={project} />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  large,
}: {
  project: (typeof projects)[0];
  large: boolean;
}) {
  const router = useRouter();
  const imagePath = `/projects/${project.slug}.png`;

  return (
    <div
      role="article"
      onClick={() => router.push(`/projects/${project.slug}`)}
      className="group relative border border-ink-800 bg-ink-900/30 backdrop-blur-sm hover:border-accent/40 transition-all duration-500 overflow-hidden cursor-pointer"
    >
      {/* Screenshot image */}
      <div
        className={`relative w-full overflow-hidden border-b border-ink-800 bg-ink-900 ${
          large ? "h-56 md:h-72" : "h-44 md:h-52"
        }`}
      >
        <Image
          src={imagePath}
          alt={`${project.title} screenshot`}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          sizes={large ? "100vw" : "50vw"}
          onError={(e) => {
            // Hide broken image, show fallback gradient
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
        {/* Gradient overlay so text below reads cleanly */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent pointer-events-none" />

        {/* Category badge pinned to top-left of image */}
        <div className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-950 bg-accent px-2.5 py-1">
          {project.category}
        </div>

        {/* Year pinned top-right */}
        <div className="absolute top-3 right-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-400">
          {project.year}
        </div>
      </div>

      {/* Card body */}
      <div className="p-6 md:p-8 relative z-10">
        <div className={large ? "grid grid-cols-1 lg:grid-cols-12 gap-8" : ""}>
          <div className={large ? "lg:col-span-7" : ""}>
            <h3
              className={`font-serif text-ink-50 mb-3 leading-[1] tracking-tight ${
                large ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"
              }`}
            >
              {project.title}
            </h3>
            <p className="text-ink-300 text-sm md:text-base leading-relaxed mb-5 text-pretty">
              {project.tagline}
            </p>
          </div>

          {/* Metric + stack for large variant */}
          {large && (
            <div className="lg:col-span-5 flex flex-col justify-between gap-4">
              <div className="border-l-2 border-accent/40 pl-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500 mb-1">
                  {project.metric.label}
                </div>
                <div className="font-serif text-2xl md:text-3xl text-accent">
                  {project.metric.value}
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.stack.slice(0, 6).map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[10px] uppercase tracking-wider text-ink-400 border border-ink-700 px-2.5 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Stack for small variant */}
        {!large && (
          <div className="flex flex-wrap gap-2 mb-5">
            {project.stack.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="font-mono text-[10px] uppercase tracking-wider text-ink-400 border border-ink-700 px-2.5 py-1"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 5 && (
              <span className="font-mono text-[10px] uppercase tracking-wider text-ink-500 px-2.5 py-1">
                +{project.stack.length - 5}
              </span>
            )}
          </div>
        )}

        {/* Bottom CTA row */}
        <div className="flex items-center justify-between pt-5 border-t border-ink-800">
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-accent group-hover:tracking-[0.2em] transition-all">
            Read case study →
          </span>
          <div className="flex items-center gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-ink-500 hover:text-accent transition-colors p-1"
                aria-label={`${project.title} live demo`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-ink-500 hover:text-accent transition-colors p-1"
              aria-label={`${project.title} on GitHub`}
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function SecondaryCard({ project }: { project: (typeof projects)[0] }) {
  const router = useRouter();
  const imagePath = `/projects/${project.slug}.png`;

  return (
    <div
      role="article"
      onClick={() => router.push(`/projects/${project.slug}`)}
      className="group border border-ink-800 bg-ink-900/20 hover:border-accent/30 hover:bg-ink-900/40 transition-all duration-300 cursor-pointer overflow-hidden"
    >
      {/* Screenshot strip */}
      <div className="relative w-full h-32 overflow-hidden border-b border-ink-800 bg-ink-900">
        <Image
          src={imagePath}
          alt={`${project.title} screenshot`}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          sizes="50vw"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/50 to-transparent pointer-events-none" />
        <div className="absolute top-2 left-2 font-mono text-[9px] uppercase tracking-[0.2em] text-ink-950 bg-accent px-2 py-0.5">
          {project.category}
        </div>
      </div>

      {/* Card body */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h4 className="font-serif text-2xl text-ink-50 mb-2">
              {project.title}
            </h4>
            <p className="text-ink-400 text-sm leading-relaxed mb-3 text-pretty">
              {project.tagline}
            </p>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              {project.stack.slice(0, 4).map((tech, i) => (
                <span
                  key={tech}
                  className="font-mono text-[9px] uppercase tracking-wider text-ink-500 flex items-center gap-2"
                >
                  {tech}
                  {i < Math.min(project.stack.length, 4) - 1 && (
                    <span className="text-ink-700">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-ink-500 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1" />
        </div>
      </div>
    </div>
  );
}
