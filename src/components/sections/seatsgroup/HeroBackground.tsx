"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const SLIDES = [
  "/images/hero-stadium-1.webp",
  "/images/hero-stadium-2.jpg",
  "/images/hero-stadium-3.jpg",
] as const;

const INTERVAL_MS = 6500;

export function HeroBackground() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % SLIDES.length);
    }, INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="sg-hero-bg" aria-hidden>
      <div className="sg-hero-slides">
        {SLIDES.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className={`sg-hero-slide ${index === active ? "is-active" : ""}`}
          />
        ))}
      </div>
      <div className="sg-hero-overlay" />
      <div className="sg-hero-vignette" />
    </div>
  );
}
