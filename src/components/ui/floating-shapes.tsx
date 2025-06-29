import React from "react";
import { motion } from "framer-motion";

interface FloatingShapesProps {
  count?: number;
  className?: string;
}

export const FloatingShapes = ({
  count = 8,
  className = "",
}: FloatingShapesProps) => {
  const shapes = Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 100 + 50,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 15,
    delay: Math.random() * 5,
    shape: Math.random() > 0.5 ? "circle" : "square",
    gradient: i % 3,
  }));

  const gradients = [
    "from-blue-500/20 to-purple-500/20",
    "from-purple-500/20 to-pink-500/20",
    "from-pink-500/20 to-blue-500/20",
  ];

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute bg-gradient-to-br ${gradients[shape.gradient]} backdrop-blur-sm ${
            shape.shape === "circle" ? "rounded-full" : "rounded-2xl"
          }`}
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
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
};

export default FloatingShapes;
