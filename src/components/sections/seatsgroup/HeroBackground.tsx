"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const SLIDES = [
  { src: "/images/hero_images (1).png", className: "sg-hero-slide-tickets" },
  { src: "/images/hero_images (2).png", className: "sg-hero-slide-seats" },
  { src: "/images/hero-image.png", className: "sg-hero-slide-pitch" },
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
        {SLIDES.map((slide, index) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className={`sg-hero-slide ${slide.className} ${index === active ? "is-active" : ""}`}
          />
        ))}
      </div>
      <div className="sg-hero-overlay" />
      <div className="sg-hero-vignette" />
    </div>
  );
}
