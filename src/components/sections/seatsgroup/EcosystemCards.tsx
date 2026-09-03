"use client";

import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BriefcaseBusiness,
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

export function EcosystemCards() {
  const [paused, setPaused] = useState(false);
  const loop = [...seatsGroup.products, ...seatsGroup.products];

  return (
    <>
      <div
        className="sg-eco-marquee mt-3 md:hidden"
        onPointerDown={() => setPaused(true)}
        onPointerUp={() => setPaused(false)}
        onPointerCancel={() => setPaused(false)}
        onPointerLeave={() => setPaused(false)}
      >
        <div
          className={`sg-eco-marquee-track ${paused ? "is-paused" : ""}`}
        >
          {loop.map((product, index) => {
            const Icon = productIcons[product.icon];
            const duplicate = index >= seatsGroup.products.length;

            return (
              <article
                key={`${product.name}-${index}`}
                className={`sg-eco-card sg-eco-slide-card${duplicate ? " sg-eco-slide-dup" : ""}`}
                aria-hidden={duplicate}
              >
                <Icon className="h-4 w-4 shrink-0 text-brand-icon" strokeWidth={1.8} />
                <h2 className="heading min-w-0 truncate text-[13px] leading-none text-white">
                  Seats
                  <span className="text-brand-orange">{product.name}</span>
                </h2>
                <ArrowRight
                  aria-hidden
                  className="ml-auto h-3.5 w-3.5 shrink-0 text-brand-icon"
                  strokeWidth={2.4}
                />
              </article>
            );
          })}
        </div>
      </div>

      <div className="mt-3 hidden grid-cols-2 gap-2.5 sm:mt-4 md:grid sm:grid-cols-3 lg:grid-cols-6 lg:gap-2.5 xl:gap-3">
        {seatsGroup.products.map((product) => {
          const Icon = productIcons[product.icon];
          return (
            <article
              key={product.name}
              className="sg-eco-card flex min-h-0 flex-col rounded-2xl p-3 sm:p-3.5"
            >
              <Icon
                className="h-4 w-4 text-brand-icon sm:h-[18px] sm:w-[18px]"
                strokeWidth={1.7}
              />
              <h2 className="heading mt-2 text-[13px] leading-none text-white sm:mt-2.5 sm:text-[15px]">
                Seats
                <span className="text-brand-orange">{product.name}</span>
              </h2>
              <p className="mt-2 flex-1 text-[10.5px] leading-snug text-[#e3f2fd] sm:text-[11.5px]">
                {product.text}
              </p>
              <ArrowRight
                aria-hidden
                className="mt-3 h-3.5 w-3.5 text-brand-icon sm:h-4 sm:w-4"
                strokeWidth={2.4}
              />
            </article>
          );
        })}
      </div>
    </>
  );
}
