"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import FloatingShapes from "@/components/FloatingShapes";
import GlowCursor from "@/components/GlowCursor";
import TypeWriter from "@/components/TypeWriter";
import ScrollReveal from "@/components/ScrollReveal";
import MagneticButton from "@/components/MagneticButton";
import AnimatedSkills from "@/components/AnimatedSkills";
import AnimatedCounter from "@/components/AnimatedCounter";
import ProjectCard from "@/components/ProjectCard";
import ParallaxText from "@/components/ParallaxText";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Home() {
  return (
    <>
      <GlowCursor />
      <Navbar />

      {/* ═══════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-14 overflow-hidden">
        <FloatingShapes />

        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-40 dark:opacity-20 pointer-events-none" />

        <motion.div
          className="relative max-w-2xl w-full space-y-8"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          {/* Status badge */}
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface text-[12px] font-mono uppercase tracking-widest text-muted">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Available for projects
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div variants={fadeUp} className="space-y-3">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              Hi, I&apos;m{" "}
              <span className="gradient-text">Nafi</span>
            </h1>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.1] text-muted italic"
              style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
            >
              I{" "}
              <TypeWriter
                words={["build things.", "write code.", "solve problems.", "create experiences."]}
                typingSpeed={80}
                deletingSpeed={50}
                pauseTime={2500}
              />
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-muted max-w-lg leading-relaxed"
          >
            Driven Computer Science student crafting clean, functional digital
            experiences&mdash;one line of code at a time.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 pt-2">
            <MagneticButton
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white
                text-sm font-medium hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 glow-pulse"
            >
              Explore my work
              <motion.svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </motion.svg>
            </MagneticButton>
            <MagneticButton
              href="#work"
              className="inline-flex items-center px-6 py-3 rounded-xl border border-border
                text-sm font-medium hover:bg-surface-hover hover:border-accent/30 transition-all duration-300"
            >
              View projects
            </MagneticButton>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={fadeUp}
            className="pt-12"
          >
            <motion.div
              className="w-5 h-8 rounded-full border-2 border-muted/30 flex justify-center pt-1.5"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="w-1 h-2 rounded-full bg-muted/50"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════
          MARQUEE
      ═══════════════════════════════════════════ */}
      <div className="border-y border-border py-5 overflow-hidden">
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, setIndex) => (
            <div key={setIndex} className="flex items-center gap-8 px-4">
              {["C", "C++", "C#", "Java", "HTML", "CSS", "JavaScript", "Vibe Coding"].map(
                (skill) => (
                  <span
                    key={`${setIndex}-${skill}`}
                    className="text-sm font-mono text-muted whitespace-nowrap uppercase tracking-widest opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          ABOUT
      ═══════════════════════════════════════════ */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="space-y-4 mb-12">
              <span className="text-[13px] uppercase tracking-[0.2em] text-accent font-medium font-mono">
                01 &mdash; About
              </span>
              <div className="section-divider" />
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 items-start">
            {/* Left: quick stats */}
            <ScrollReveal direction="left" delay={0.1}>
              <div className="space-y-8">
                <div className="grid grid-cols-2 gap-6">
                  <AnimatedCounter target={7} suffix="+" label="Languages" />
                  <AnimatedCounter target={1} suffix="+" label="Projects" />
                </div>

                <div className="rounded-2xl border border-border bg-surface p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Vibe Coder</p>
                      <p className="text-[11px] text-muted">Flow-state developer</p>
                    </div>
                  </div>
                  <p className="text-[13px] text-muted leading-relaxed">
                    I thrive where intuition meets technical skill&mdash;producing
                    clean, efficient code at speed.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: bio text */}
            <ScrollReveal delay={0.2}>
              <div className="space-y-5 text-[15px] text-muted leading-[1.85]">
                <p>
                  I&apos;m a Computer Science student with a passion for building
                  clean, functional, and meaningful digital experiences. I&apos;m{" "}
                  <span className="text-foreground font-medium">driven</span> by
                  curiosity and the desire to turn ideas into reality through code.
                </p>
                <p>
                  Whether it&apos;s crafting a polished front-end, solving
                  algorithmic challenges, or experimenting with new technologies, I
                  bring focus and determination to everything I work on.
                </p>
                <p>
                  I believe great software starts with{" "}
                  <span
                    className="text-foreground italic"
                    style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
                  >
                    simplicity
                  </span>
                  . That philosophy shapes how I write code, design interfaces,
                  and approach problem-solving. My goal is to grow as a developer,
                  contribute to impactful projects, and continuously push my
                  boundaries.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SKILLS
      ═══════════════════════════════════════════ */}
      <section id="skills" className="py-32 px-6 border-y border-border relative">
        {/* Background accent */}
        <div className="absolute inset-0 bg-surface/50 pointer-events-none" />

        <div className="max-w-3xl mx-auto relative">
          <ScrollReveal>
            <div className="space-y-4 mb-12">
              <span className="text-[13px] uppercase tracking-[0.2em] text-accent font-medium font-mono">
                02 &mdash; Skills
              </span>
              <div className="section-divider" />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight pt-2">
                Technologies I work with
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Animated progress bars */}
            <ScrollReveal delay={0.1}>
              <AnimatedSkills />
            </ScrollReveal>

            {/* Skill tags + description */}
            <ScrollReveal delay={0.2}>
              <div className="space-y-6">
                <p className="text-sm text-muted leading-relaxed">
                  From systems-level programming in C/C++ to building interactive
                  web experiences with JavaScript, I enjoy working across the
                  stack. Each language has taught me a different way to think about
                  solving problems.
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", label: "CLI Tools" },
                    { icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064", label: "Web Dev" },
                    { icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z", label: "Problem Solving" },
                    { icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", label: "Clean Code" },
                  ].map((item) => (
                    <motion.div
                      key={item.label}
                      whileHover={{ scale: 1.03, y: -2 }}
                      className="flex items-center gap-2.5 p-3 rounded-xl border border-border bg-background
                        hover:border-accent/30 hover:shadow-sm transition-colors cursor-default"
                    >
                      <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                      </svg>
                      <span className="text-xs font-medium">{item.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PARALLAX DIVIDER
      ═══════════════════════════════════════════ */}
      <ParallaxText className="text-6xl sm:text-8xl font-bold text-border opacity-30 select-none flex">
        NAFI MIA TALUKDER
      </ParallaxText>

      {/* ═══════════════════════════════════════════
          WORK
      ═══════════════════════════════════════════ */}
      <section id="work" className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="space-y-4 mb-12">
              <span className="text-[13px] uppercase tracking-[0.2em] text-accent font-medium font-mono">
                03 &mdash; Work
              </span>
              <div className="section-divider" />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight pt-2">
                Featured project
              </h2>
            </div>
          </ScrollReveal>

          <ProjectCard
            title="Laptops E-Commerce Shop"
            description="A fully functional e-commerce web application for browsing and purchasing laptops. Built with modern web technologies, featuring a clean UI, product filtering, and seamless checkout experience. Deployed on Vercel."
            url="http://laptops-ecom-shop.vercel.app/"
            displayUrl="laptops-ecom-shop.vercel.app"
            tags={["E-Commerce", "Web App", "Vercel"]}
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          HOBBIES
      ═══════════════════════════════════════════ */}
      <section id="hobbies" className="py-32 px-6 border-y border-border relative">
        <div className="absolute inset-0 bg-surface/50 pointer-events-none" />

        <div className="max-w-3xl mx-auto relative">
          <ScrollReveal>
            <div className="space-y-4 mb-12">
              <span className="text-[13px] uppercase tracking-[0.2em] text-accent font-medium font-mono">
                04 &mdash; Beyond Code
              </span>
              <div className="section-divider" />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight pt-2">
                When I&apos;m not coding
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-5">
            {/* Gaming card */}
            <ScrollReveal delay={0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="group rounded-2xl border border-border bg-background p-7 space-y-5
                  hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
                    </svg>
                  </motion.div>
                  <h3 className="font-semibold group-hover:text-accent transition-colors">Gaming</h3>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  Immersive worlds and competitive play that sharpen my strategic
                  thinking and reaction time. From story-driven adventures to
                  fast-paced multiplayer.
                </p>
              </motion.div>
            </ScrollReveal>

            {/* Reading card */}
            <ScrollReveal delay={0.2}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="group rounded-2xl border border-border bg-background p-7 space-y-5
                  hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center"
                    whileHover={{ rotate: -15, scale: 1.1 }}
                  >
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>
                  </motion.div>
                  <h3 className="font-semibold group-hover:text-accent transition-colors">
                    Reading & Writing
                  </h3>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  Tech blogs, fiction, and journaling&mdash;words help me think
                  clearly and communicate better. Writing is how I process ideas
                  and sharpen my perspective.
                </p>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════ */}
      <footer className="py-20 px-6 relative overflow-hidden">
        {/* Gradient decoration */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full
            opacity-[0.05] blur-[100px] pointer-events-none"
          style={{ background: "var(--accent)" }}
        />

        <div className="max-w-3xl mx-auto text-center relative space-y-8">
          <ScrollReveal>
            <p
              className="text-3xl sm:text-4xl italic text-muted"
              style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
            >
              Let&apos;s build something{" "}
              <span className="gradient-text not-italic font-bold">great</span>.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="flex items-center justify-center gap-3 text-sm text-muted">
              <div className="h-px w-12 bg-border" />
              <span className="font-mono text-xs uppercase tracking-widest">
                Nafi Mia Talukder
              </span>
              <div className="h-px w-12 bg-border" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <p className="text-xs text-muted/60">
              &copy; 2026 All rights reserved. Built with Next.js & Tailwind CSS.
            </p>
          </ScrollReveal>
        </div>
      </footer>
    </>
  );
}
