"use client";

import { motion } from "framer-motion";

const shapes = [
  { size: 300, x: "10%", y: "20%", duration: 20, delay: 0, color: "var(--accent)" },
  { size: 200, x: "80%", y: "10%", duration: 25, delay: 2, color: "var(--accent)" },
  { size: 150, x: "70%", y: "70%", duration: 18, delay: 4, color: "var(--accent)" },
  { size: 250, x: "20%", y: "80%", duration: 22, delay: 1, color: "var(--accent)" },
  { size: 100, x: "50%", y: "50%", duration: 15, delay: 3, color: "var(--accent)" },
];

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            background: shape.color,
            opacity: 0.04,
            filter: `blur(${shape.size / 3}px)`,
          }}
          animate={{
            x: [0, 30, -20, 15, 0],
            y: [0, -25, 15, -10, 0],
            scale: [1, 1.1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
