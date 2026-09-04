"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function useCycle(length: number, ms = 2800, paused = false) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (paused || length < 2) return;
    const timer = setInterval(
      () => setIndex((current) => (current + 1) % length),
      ms
    );
    return () => clearInterval(timer);
  }, [length, ms, paused]);

  return [index, setIndex] as const;
}

export type RevealVariant =
  | "up"
  | "left"
  | "right"
  | "fade"
  | "scale"
  | "line";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
  once?: boolean;
  threshold?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
  once = false,
  threshold = 0.18,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -6% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, threshold]);

  return (
    <div
      ref={ref}
      className={cn(`reveal-${variant}`, visible && "is-in", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
