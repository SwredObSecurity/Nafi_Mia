"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import InteractiveCard from "./InteractiveCard";

export default function ProjectCard({
  title,
  description,
  url,
  displayUrl,
  tags,
}: {
  title: string;
  description: string;
  url: string;
  displayUrl: string;
  tags: string[];
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <InteractiveCard>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          onMouseMove={handleMouseMove}
          className="project-card group block rounded-2xl border border-border bg-surface
            p-8 sm:p-10 hover:border-accent/40 transition-all duration-400"
        >
          <div className="space-y-5">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold group-hover:text-accent transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-sm text-accent font-mono opacity-80">
                  {displayUrl}
                </p>
              </div>
              <motion.div
                className="flex-shrink-0 w-10 h-10 rounded-xl border border-border bg-background
                  flex items-center justify-center group-hover:border-accent/30 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <svg
                  className="w-4 h-4 text-muted group-hover:text-accent transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 17L17 7M17 7H7M17 7v10"
                  />
                </svg>
              </motion.div>
            </div>

            <p className="text-sm text-muted leading-relaxed">{description}</p>

            <div className="flex flex-wrap gap-2 pt-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1
                    rounded-md bg-accent/8 text-accent border border-accent/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </a>
      </InteractiveCard>
    </motion.div>
  );
}
