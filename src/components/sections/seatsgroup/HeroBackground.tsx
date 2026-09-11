"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const SLIDES = [
  { src: "/images/seatssource.png", className: "sg-hero-slide-seats" },
  { src: "/images/hero-image.png", className: "sg-hero-slide-venue" },
  { src: "/images/hero-bg.png", className: "sg-hero-slide-live" },
  { src: "/images/hero_image1.png", className: "sg-hero-slide-stadium" },
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
    <>
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
        <div className="sg-hero-scrim" />
        <div className="sg-hero-vignette" />
      </div>

      {/* <div className="sg-hero-ticks" aria-hidden>
        {SLIDES.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            tabIndex={-1}
            className={`sg-hero-tick${index === active ? " is-active" : ""}`}
            onClick={() => setActive(index)}
          >
            {String(index + 1).padStart(2, "0")}
          </button>
        ))}
      </div> */}
    </>
  );
}
