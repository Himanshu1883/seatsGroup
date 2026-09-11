"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Network,
  Search,
  Shield,
  Store,
} from "lucide-react";
import { seatsGroup } from "@/lib/constants/seatsgroup";

const productIcons: Record<(typeof seatsGroup.products)[number]["icon"], LucideIcon> = {
  network: Network,
  briefcase: BriefcaseBusiness,
  shield: Shield,
  store: Store,
  search: Search,
  card: CreditCard,
};

const products = seatsGroup.products;
const COUNT = products.length;
const AUTO_MS = 3600;

export function SolutionsRail() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback((index: number) => {
    setActive(((index % COUNT) + COUNT) % COUNT);
  }, []);

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion || paused) return;

    const timer = window.setInterval(next, AUTO_MS);
    return () => window.clearInterval(timer);
  }, [next, paused]);

  useEffect(() => {
    const track = trackRef.current;
    const card = track?.children[active] as HTMLElement | undefined;
    if (!track || !card) return;

    const target =
      card.offsetLeft - (track.clientWidth - card.clientWidth) / 2;
    track.scrollTo({
      left: Math.max(0, target),
      behavior: "smooth",
    });
  }, [active]);

  return (
    <div
      className="sg-rail"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="sg-rail-track" ref={trackRef}>
        {products.map((product, index) => {
          const Icon = productIcons[product.icon];
          const isActive = index === active;

          return (
            <button
              key={product.name}
              type="button"
              className={`sg-rail-card${isActive ? " is-active" : ""}`}
              aria-current={isActive}
              onClick={() => goTo(index)}
            >
              <span className="sg-rail-card-icon" aria-hidden>
                <Icon className="h-full w-full" strokeWidth={1.7} />
              </span>
              <span className="sg-rail-card-text">
                <span className="heading sg-rail-card-title">
                  Seats
                  <span
                    className={isActive ? "sg-text-shine" : "sg-rail-card-name"}
                    key={isActive ? `name-${index}-${active}` : undefined}
                  >
                    {product.name}
                  </span>
                </span>
                <span className="sg-rail-card-copy">{product.text}</span>
              </span>
              <ChevronRight
                className="sg-rail-card-arrow"
                strokeWidth={2.2}
                aria-hidden
              />
            </button>
          );
        })}
      </div>

      <div className="sg-rail-nav">
        <button
          type="button"
          className="sg-rail-nav-btn"
          aria-label="Previous solution"
          onClick={prev}
        >
          <ChevronLeft className="h-4 w-4" strokeWidth={2.2} />
        </button>
        <button
          type="button"
          className="sg-rail-nav-btn is-primary"
          aria-label="Next solution"
          onClick={next}
        >
          <ChevronRight className="h-4 w-4" strokeWidth={2.2} />
        </button>
      </div>
    </div>
  );
}
