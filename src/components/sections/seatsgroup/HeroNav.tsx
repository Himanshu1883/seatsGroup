"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { SeatsGroupLogo } from "@/components/sections/seatsgroup/SeatsGroupLogo";

const NAV_LINKS = [
  { label: "Solutions", href: "#solutions" },
  { label: "Industries", href: "#industries" },
  { label: "Technology", href: "#technology" },
  { label: "About", href: "#about" },
  { label: "Insights", href: "#insights" },
] as const;

const FADE_DISTANCE = 240;

export function HeroNav() {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const update = () => {
      const t = Math.min(1, Math.max(0, window.scrollY / FADE_DISTANCE));
      const eased = t * t * (3 - 2 * t);
      navRef.current?.style.setProperty("--sg-nav-progress", eased.toFixed(3));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <header ref={navRef} className="sg-nav">
      <div className="sg-nav-inner">
        <a href="#top" className="sg-nav-brand" aria-label="SeatsGroup home">
          <SeatsGroupLogo />
        </a>

        <nav className="sg-nav-links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="sg-nav-link">
              {link.label}
              <ChevronDown className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
            </a>
          ))}
        </nav>

        <div className="sg-nav-actions">
          <a href="#contact" className="sg-nav-cta">
            Get in Touch
            <span className="sg-nav-cta-icon" aria-hidden>
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.2} />
            </span>
          </a>

          <button
            type="button"
            className="sg-nav-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <X className="h-5 w-5" strokeWidth={2} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={2} />
            )}
          </button>
        </div>
      </div>

      {open ? (
        <div className="sg-nav-sheet">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="sg-nav-sheet-link"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="sg-nav-sheet-cta"
            onClick={() => setOpen(false)}
          >
            Get in Touch
            <ArrowRight className="h-4 w-4" strokeWidth={2.2} aria-hidden />
          </a>
        </div>
      ) : null}
    </header>
  );
}
