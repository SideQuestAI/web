import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MorphingButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const MorphingButton = ({
  children,
  className,
  onClick,
  variant = "primary",
  size = "md",
}: MorphingButtonProps) => {
  const variants = {
    primary:
      "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white",
    secondary:
      "glass border-2 border-white/20 text-white hover:border-white/40",
    ghost: "text-white hover:bg-white/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      className={cn(
        "relative overflow-hidden rounded-xl font-medium liquid-button ripple-effect",
        "focus:outline-none focus:ring-4 focus:ring-blue-500/30",
        variants[variant],
        sizes[size],
        className,
      )}
      onClick={onClick}
      whileHover={{
        scale: 1.08,
        y: -3,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 10,
        },
      }}
      whileTap={{
        scale: 0.96,
        y: 0,
        transition: { duration: 0.1 },
      }}
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 bg-white/20 rounded-full scale-0"
        whileTap={{ scale: 4, opacity: [0, 1, 0] }}
        transition={{ duration: 0.3 }}
      />

      {/* Button content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>

      {/* Glowing border */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        style={{
          background:
            "linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)",
          backgroundSize: "200% 200%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.button>
  );
};

export default MorphingButton;
