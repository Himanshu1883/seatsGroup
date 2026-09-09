"use client";

import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { BarChart3, Boxes, Globe } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { seatsGroup } from "@/lib/constants/seatsgroup";

const featureIcons: Record<
  (typeof seatsGroup.connectedFeatures)[number]["icon"],
  LucideIcon
> = {
  globe: Globe,
  boxes: Boxes,
  chart: BarChart3,
};

const labelPositions = [
  { key: "Partners", className: "sg-connected-label-partners", delay: 220 },
  { key: "Suppliers", className: "sg-connected-label-suppliers", delay: 280 },
  { key: "Distribution", className: "sg-connected-label-distribution", delay: 340 },
  { key: "Buyers", className: "sg-connected-label-buyers", delay: 400 },
] as const;

export function ConnectedSection() {
  return (
    <section className="sg-connected relative overflow-hidden px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
      <div className="sg-connected-pattern" aria-hidden>
        <span className="sg-connected-pattern-grid" />
        <span className="sg-connected-pattern-dots" />
        <span className="sg-connected-pattern-mesh" />
        <span className="sg-connected-pattern-spotlight" />
      </div>
      <div className="sg-connected-inner relative z-10 mx-auto grid max-w-[88rem] items-center gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:gap-8">
        <div className="sg-connected-copy max-w-[34rem]">
          <Reveal variant="line" className="block h-px w-10 bg-brand-icon" aria-hidden>
            <span className="sr-only">Section divider</span>
          </Reveal>
          <Reveal variant="up" delay={80}>
            <p className="eyebrow mt-3 text-brand-orange">
              {seatsGroup.connectedEyebrow}
            </p>
          </Reveal>
          <Reveal variant="up" delay={160}>
            <p className="mt-5 text-[14px] leading-relaxed text-neutral-900 sm:text-[16px]">
              {seatsGroup.connectedText}
            </p>
          </Reveal>
          <Reveal variant="left" delay={240}>
            <h2 className="heading mt-7 text-[1.85rem] leading-[1.12] tracking-[-0.03em] text-neutral-900 sm:mt-8 sm:text-[2.45rem] lg:text-[2.85rem]">
              <span className="text-brand-plum">Built for the</span>{" "}
              <span className="sg-text-shine sg-text-shine-stagger-first">Industry.</span>
              <br />
              <span className="text-brand-plum">Connected</span>{" "}
              <span className="sg-text-shine sg-text-shine-stagger-second">Globally.</span>
            </h2>
          </Reveal>

          <div className="sg-connected-features mt-9 sm:mt-10">
            {seatsGroup.connectedFeatures.map((feature, index) => {
              const Icon = featureIcons[feature.icon];
              return (
                <Reveal
                  key={feature.label}
                  variant="scale"
                  delay={360 + index * 90}
                  className={`sg-connected-feature${index > 0 ? " sg-connected-feature-divided" : ""}`}
                >
                  <span className="sg-connected-feature-icon">
                    <Icon className="h-4 w-4" strokeWidth={1.8} />
                  </span>
                  <span className="sg-connected-feature-label">
                    {feature.label}
                  </span>
                </Reveal>
              );
            })}
          </div>
        </div>

        <div className="sg-connected-visual">
          <Reveal variant="fade" delay={120} className="absolute inset-0">
            <svg
              className="sg-connected-lines"
              viewBox="0 0 640 420"
              fill="none"
              aria-hidden
            >
              <path
                d="M88 72 C 150 92, 210 118, 286 148"
                stroke="rgba(102,187,106,0.42)"
                strokeWidth="1.1"
                strokeDasharray="2.5 5"
              />
              <path
                d="M84 206 C 150 188, 220 176, 300 168"
                stroke="rgba(102,187,106,0.42)"
                strokeWidth="1.1"
                strokeDasharray="2.5 5"
              />
              <path
                d="M556 84 C 490 108, 420 132, 350 154"
                stroke="rgba(102,187,106,0.42)"
                strokeWidth="1.1"
                strokeDasharray="2.5 5"
              />
              <path
                d="M552 220 C 488 202, 420 188, 352 176"
                stroke="rgba(102,187,106,0.42)"
                strokeWidth="1.1"
                strokeDasharray="2.5 5"
              />
              <circle cx="88" cy="72" r="3" fill="#66bb6a" />
              <circle cx="84" cy="206" r="3" fill="#66bb6a" />
              <circle cx="556" cy="84" r="3" fill="#66bb6a" />
              <circle cx="552" cy="220" r="3" fill="#66bb6a" />
              <circle cx="286" cy="148" r="3" fill="#66bb6a" />
              <circle cx="300" cy="168" r="3" fill="#66bb6a" />
              <circle cx="350" cy="154" r="3" fill="#66bb6a" />
              <circle cx="352" cy="176" r="3" fill="#66bb6a" />
            </svg>
          </Reveal>

          {labelPositions.map((label) => (
            <Reveal
              key={label.key}
              variant="scale"
              delay={label.delay}
              className={`sg-connected-label ${label.className}`}
            >
              {label.key}
            </Reveal>
          ))}

          <Reveal variant="right" delay={180}>
            <Image
              src="/images/seatsgroup-devices-mockup.png"
              alt="SeatsGroup platform across laptop, tablet and mobile"
              width={1024}
              height={682}
              className="sg-connected-image"
              sizes="(min-width: 1024px) 52vw, 92vw"
              priority
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
