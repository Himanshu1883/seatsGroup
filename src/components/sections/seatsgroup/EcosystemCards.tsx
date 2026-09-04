"use client";

import { useCallback, useEffect, useRef, useState, type PointerEvent } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
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
const AUTO_MS = 2800;

function wrapOffset(index: number, active: number) {
  let offset = index - active;
  if (offset > COUNT / 2) offset -= COUNT;
  if (offset < -COUNT / 2) offset += COUNT;
  return offset;
}

export function EcosystemCards() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const drag = useRef({ startX: 0, dragging: false, moved: false });

  const goTo = useCallback((index: number) => {
    setActive(((index % COUNT) + COUNT) % COUNT);
  }, []);

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion || paused) return;

    const timer = window.setInterval(next, AUTO_MS);
    return () => window.clearInterval(timer);
  }, [next, paused]);

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    drag.current = {
      startX: event.clientX,
      dragging: true,
      moved: false,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
    setPaused(true);
  }

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!drag.current.dragging) return;
    if (Math.abs(event.clientX - drag.current.startX) > 8) {
      drag.current.moved = true;
    }
  }

  function onPointerUp(event: PointerEvent<HTMLDivElement>) {
    if (!drag.current.dragging) return;
    const delta = event.clientX - drag.current.startX;
    drag.current.dragging = false;
    if (Math.abs(delta) > 48) {
      if (delta < 0) next();
      else prev();
    }
    window.setTimeout(() => {
      drag.current.moved = false;
      setPaused(false);
    }, 80);
  }

  return (
    <div
      className="sg-eco-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <button
        type="button"
        className="sg-eco-nav sg-eco-nav-prev"
        aria-label="Previous product"
        onClick={prev}
      >
        <ChevronLeft className="h-4 w-4" strokeWidth={2.2} />
      </button>

      <div
        className="sg-eco-stage"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {products.map((product, index) => {
          const Icon = productIcons[product.icon];
          const offset = wrapOffset(index, active);
          const isActive = offset === 0;
          const hidden = Math.abs(offset) > (isMobile ? 1 : 2);

          return (
            <article
              key={product.name}
              className={`sg-eco-card sg-eco-focus${isActive ? " is-active" : ""}${hidden ? " is-hidden" : ""}`}
              style={
                {
                  "--eco-offset": String(offset),
                  zIndex: isActive ? 12 : 8 - Math.abs(offset),
                } as React.CSSProperties
              }
              aria-hidden={!isActive}
              onClick={() => {
                if (!drag.current.moved && !isActive) goTo(index);
              }}
            >
              <Icon
                className="sg-eco-focus-icon"
                strokeWidth={1.7}
              />
              <h2 className="heading sg-eco-focus-title">
                Seats
                <span
                  className={
                    isActive ? "sg-text-shine" : "text-brand-orange"
                  }
                  key={isActive ? `name-${index}-${active}` : undefined}
                >
                  {product.name}
                </span>
              </h2>
              <p
                className={`sg-eco-focus-copy${isActive ? " sg-text-shine sg-text-shine-light" : ""}`}
                key={isActive ? `copy-${index}-${active}` : undefined}
              >
                {product.text}
              </p>
              <ArrowRight
                aria-hidden
                className="sg-eco-focus-arrow"
                strokeWidth={2.4}
              />
            </article>
          );
        })}
      </div>

      <button
        type="button"
        className="sg-eco-nav sg-eco-nav-next"
        aria-label="Next product"
        onClick={next}
      >
        <ChevronRight className="h-4 w-4" strokeWidth={2.2} />
      </button>

      <div className="sg-eco-dots" role="tablist" aria-label="Ecosystem products">
        {products.map((product, index) => (
          <button
            key={product.name}
            type="button"
            role="tab"
            aria-selected={index === active}
            aria-label={`Seats${product.name}`}
            className={`sg-eco-dot${index === active ? " is-active" : ""}`}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
