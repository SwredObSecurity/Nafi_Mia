"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxTextProps {
  children: string;
  className?: string;
}

export default function ParallaxText({ children, className = "" }: ParallaxTextProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <div ref={ref} className="overflow-hidden py-8">
      <motion.div style={{ x }} className={className}>
        {Array.from({ length: 3 }).map((_, i) => (
          <span key={i} className="whitespace-nowrap">
            {children}
            <span className="mx-8 text-accent opacity-40">&bull;</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
