import React, { useEffect, useState, useRef } from "react";

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  startAnimation?: boolean;
}

export const AnimatedCounter = ({
  target,
  duration = 2000,
  suffix = "",
  prefix = "",
  className = "",
  startAnimation = true,
}: AnimatedCounterProps) => {
  const [current, setCurrent] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    if (!startAnimation) return;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);
      const easedProgress = easeOutQuart(progress);

      setCurrent(Math.floor(target * easedProgress));

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [target, duration, startAnimation]);

  return (
    <span className={className}>
      {prefix}
      {current.toLocaleString()}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
