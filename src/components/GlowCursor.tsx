"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function GlowCursor() {
  const [mounted, setMounted] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 300, damping: 28 });
  const springY = useSpring(cursorY, { stiffness: 300, damping: 28 });

  useEffect(() => {
    setMounted(true);
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [cursorX, cursorY]);

  if (!mounted) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9998] hidden md:block"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      {/* Outer soft glow */}
      <div
        className="absolute inset-0 w-[600px] h-[600px] rounded-full opacity-[0.12] dark:opacity-[0.10]"
        style={{
          background: "radial-gradient(circle, var(--accent), transparent 60%)",
          transform: "translate(-50px, -50px)",
        }}
      />
      {/* Inner bright core */}
      <div
        className="w-[500px] h-[500px] rounded-full opacity-[0.08] dark:opacity-[0.07]"
        style={{
          background: "radial-gradient(circle, var(--accent) 0%, var(--accent) 10%, transparent 65%)",
        }}
      />
    </motion.div>
  );
}
