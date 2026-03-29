"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { getProjectBySlug, projects } from "@/data/projects";
import GlowCursor from "@/components/GlowCursor";
import ThemeToggle from "@/components/ThemeToggle";
import ScrollReveal from "@/components/ScrollReveal";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">404</h1>
          <p className="text-muted">Project not found.</p>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-accent text-sm hover:underline"
          >
            &larr; Back to portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <GlowCursor />

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 nav-blur bg-background/90 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back
          </Link>
          <ThemeToggle />
        </div>
      </nav>

      <main className="pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-12">
            {/* Header */}
            <motion.div variants={fadeUp} className="space-y-6">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-[11px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-md bg-accent/10 text-accent border border-accent/15">
                  {project.category}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1]">
                {project.title}
              </h1>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-surface border border-border text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-white
                    text-sm font-medium hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
                >
                  View live site
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              )}
            </motion.div>

            {/* Divider */}
            <motion.div variants={fadeUp} className="section-divider" />

            {/* Description */}
            <motion.div variants={fadeUp} className="space-y-5">
              <h2 className="text-xl font-semibold">About this project</h2>
              {project.fullDescription.map((para, i) => (
                <p key={i} className="text-[15px] text-muted leading-[1.85]">
                  {para}
                </p>
              ))}
            </motion.div>

            {/* Features & Tech side by side */}
            <div className="grid md:grid-cols-2 gap-8">
              <ScrollReveal>
                <div className="rounded-2xl border border-border bg-surface p-6 space-y-4">
                  <h3 className="text-sm font-semibold flex items-center gap-2">
                    <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Key Features
                  </h3>
                  <ul className="space-y-2.5">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-[13px] text-muted">
                        <span className="w-1 h-1 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="rounded-2xl border border-border bg-surface p-6 space-y-4">
                  <h3 className="text-sm font-semibold flex items-center gap-2">
                    <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="skill-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Other projects */}
            <ScrollReveal>
              <div className="pt-8 border-t border-border space-y-6">
                <h3 className="text-sm font-semibold text-muted uppercase tracking-widest">
                  Other projects
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {projects
                    .filter((p) => p.slug !== project.slug)
                    .slice(0, 4)
                    .map((p) => (
                      <Link
                        key={p.slug}
                        href={`/projects/${p.slug}`}
                        className="group flex items-center gap-3 p-4 rounded-xl border border-border
                          hover:border-accent/30 hover:bg-surface-hover transition-all duration-200"
                      >
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate group-hover:text-accent transition-colors">
                            {p.title}
                          </p>
                          <p className="text-[11px] text-muted font-mono mt-0.5">{p.category}</p>
                        </div>
                        <svg
                          className="w-4 h-4 text-muted group-hover:text-accent transition-colors flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </Link>
                    ))}
                </div>
              </div>
            </ScrollReveal>
          </motion.div>
        </div>
      </main>
    </>
  );
}
