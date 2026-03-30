"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import FeedbackModal from "./FeedbackModal";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Learning", href: "#learning" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Hobbies", href: "#hobbies" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 nav-blur transition-all duration-300 ${
          scrolled
            ? "bg-background/90 border-b border-border shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          {/* Logo + Feedback */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-base font-semibold tracking-tight hover:opacity-70 transition-opacity"
            >
              Nafi
              <span className="text-accent">.</span>
            </a>
            <button
              onClick={() => setFeedbackOpen(true)}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-border
                text-[11px] font-mono uppercase tracking-widest text-muted
                hover:text-accent hover:border-accent/30 hover:bg-surface-hover transition-all duration-200 cursor-pointer"
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
              </svg>
              Feedback
            </button>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-[13px] text-muted hover:text-foreground rounded-md
                  hover:bg-surface-hover transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
            <div className="ml-3 pl-3 border-l border-border">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="w-9 h-9 flex items-center justify-center rounded-lg
                border border-border bg-surface hover:bg-surface-hover transition-colors cursor-pointer"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-80 border-t border-border" : "max-h-0"
          }`}
        >
          <div className="px-6 py-3 flex flex-col gap-1 bg-background/95 nav-blur">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 text-sm text-muted hover:text-foreground rounded-md
                  hover:bg-surface-hover transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => { setOpen(false); setFeedbackOpen(true); }}
              className="px-3 py-2 text-sm text-accent hover:text-foreground rounded-md
                hover:bg-surface-hover transition-colors text-left cursor-pointer"
            >
              Feedback
            </button>
          </div>
        </div>
      </nav>

      <FeedbackModal open={feedbackOpen} onClose={() => setFeedbackOpen(false)} />
    </>
  );
}
