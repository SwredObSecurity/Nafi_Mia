"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const skills = [
  { name: "C", level: 75, color: "#555555" },
  { name: "C++", level: 70, color: "#00599C" },
  { name: "C#", level: 65, color: "#68217A" },
  { name: "Java", level: 70, color: "#ED8B00" },
  { name: "HTML", level: 90, color: "#E34F26" },
  { name: "CSS", level: 85, color: "#1572B6" },
  { name: "JavaScript", level: 80, color: "#F7DF1E" },
  { name: "Rust", level: 40, color: "#DEA584" },
];

export default function AnimatedSkills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <div ref={ref} className="space-y-4">
      {skills.map((skill, i) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          onMouseEnter={() => setHoveredSkill(skill.name)}
          onMouseLeave={() => setHoveredSkill(null)}
          className="group cursor-default"
        >
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-sm font-medium font-mono tracking-wide">
              {skill.name}
            </span>
            <motion.span
              className="text-xs font-mono text-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredSkill === skill.name ? 1 : 0.5 }}
            >
              {skill.level}%
            </motion.span>
          </div>
          <div className="h-2 rounded-full bg-surface overflow-hidden border border-border">
            <motion.div
              className="h-full rounded-full relative"
              style={{ backgroundColor: skill.color }}
              initial={{ width: 0 }}
              animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
              transition={{
                duration: 1.2,
                delay: i * 0.1 + 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)",
                }}
                animate={{ x: ["-100%", "200%"] }}
                transition={{
                  duration: 2,
                  delay: i * 0.1 + 1.5,
                  repeat: Infinity,
                  repeatDelay: 5,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
