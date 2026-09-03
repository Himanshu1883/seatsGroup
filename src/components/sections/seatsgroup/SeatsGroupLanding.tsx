import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Boxes,
  ConciergeBell,
  CreditCard,
  Database,
  Handshake,
  Puzzle,
  Store,
  Tag,
} from "lucide-react";
import { ConnectedSection } from "@/components/sections/seatsgroup/ConnectedSection";
import { EcosystemCards } from "@/components/sections/seatsgroup/EcosystemCards";
import { NextSection } from "@/components/sections/seatsgroup/NextSection";
import { SeatsGroupFooter } from "@/components/sections/seatsgroup/SeatsGroupFooter";
import { SeatsGroupGlobe } from "@/components/sections/seatsgroup/SeatsGroupGlobe";
import { SeatsGroupLogo } from "@/components/sections/seatsgroup/SeatsGroupLogo";
import { seatsGroup } from "@/lib/constants/seatsgroup";

const chipIcons: Record<(typeof seatsGroup.chips)[number]["icon"], LucideIcon> = {
  ticket: Tag,
  handshake: Handshake,
  boxes: Boxes,
  hospitality: ConciergeBell,
  card: CreditCard,
  store: Store,
  database: Database,
  puzzle: Puzzle,
  chart: BarChart3,
};

export function SeatsGroupLanding() {
  return (
    <div className="sg-page overflow-x-hidden bg-[#e3f2fd] text-brand-dark">
      <main>
        <section className="sg-hero relative isolate bg-[#0c0c0e] text-[#e3f2fd]">
          <SeatsGroupGlobe className="sg-hero-globe pointer-events-none absolute right-0 top-0 h-[min(44vh,19rem)] w-[90%] sm:h-[26rem] sm:w-[68%] lg:h-[30rem] lg:w-[min(62%,48rem)]" />

          <div className="sg-hero-inner relative z-10 mx-auto w-full max-w-[88rem] px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-[max(1.35rem,env(safe-area-inset-top))] sm:px-8 sm:pb-6 sm:pt-5 lg:px-12 lg:pb-7 lg:pt-6">
            <div className="sg-hero-copy max-w-xl">
              <SeatsGroupLogo />
              <div className="sg-hero-headline-block">
                <h1 className="heading text-[1.55rem] leading-[1.06] tracking-[-0.04em] text-white sm:text-[2.55rem] lg:text-[3.15rem] lg:leading-[1.05] xl:text-[3.3rem]">
                  {seatsGroup.headlineLead}
                  <span className="mt-0.5 block text-brand-orange">
                    {seatsGroup.headlineAccent}
                  </span>
                </h1>
                <span
                  aria-hidden
                  className="sg-hero-divider mt-2 block h-px w-12 bg-brand-orange sm:mt-2.5 sm:w-14"
                />
              </div>
              <div className="sg-hero-intro max-w-[32rem] text-[12px] leading-relaxed text-[#e3f2fd] sm:text-[13.5px] lg:text-[14.5px] xl:text-[15px]">
                {seatsGroup.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="sg-eco-follow">
              <div className="shrink-0">
                <p className="text-center font-tech text-[9px] font-bold uppercase tracking-[0.2em] text-brand-orange sm:text-[11px]">
                  {seatsGroup.ecosystemEyebrow}
                </p>
                <EcosystemCards />
              </div>

              <div className="sg-more-panel shrink-0 rounded-[1.15rem] px-3 py-3 sm:rounded-[1.35rem] sm:px-6 sm:py-4">
                <div className="flex items-center justify-center gap-2.5">
                  <span className="sg-more-dot shrink-0" />
                  <p className="shrink-0 font-tech text-[9px] font-bold uppercase tracking-[0.22em] text-brand-orange sm:text-[11px]">
                    {seatsGroup.moreEyebrow}
                  </p>
                  <span className="sg-more-dot shrink-0" />
                </div>
                <p className="sg-more-copy mx-auto mt-2 max-w-3xl text-center text-[11px] leading-snug text-white sm:mt-2.5 sm:text-[13.5px]">
                  {seatsGroup.moreText}
                </p>
                <ul className="mt-3 grid grid-cols-3 gap-y-3 sm:mt-4 sm:gap-y-3.5 lg:flex lg:items-stretch">
                  {seatsGroup.chips.map((chip, index) => {
                    const Icon = chipIcons[chip.icon];
                    return (
                      <li
                        key={chip.label}
                        className={`flex min-w-0 flex-col items-center px-1 text-center lg:flex-1 lg:px-1.5 xl:px-2 ${
                          index > 0
                            ? "lg:border-l lg:border-brand-orange/50"
                            : ""
                        }`}
                      >
                        {chip.icon === "handshake" ? (
                          <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-brand-orange text-brand-orange sm:h-5 sm:w-5">
                            <Icon className="h-2.5 w-2.5 sm:h-3 sm:w-3" strokeWidth={2} />
                          </span>
                        ) : (
                          <Icon
                            className="h-3.5 w-4 text-brand-orange sm:h-[18px] sm:w-[18px]"
                            strokeWidth={1.7}
                          />
                        )}
                        <span className="mt-1 max-w-[7.6rem] text-[8.5px] font-medium leading-tight text-white sm:mt-1.5 sm:text-[10.5px] lg:text-[11px] xl:text-[11.5px]">
                          {chip.label}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="sg-stack">
          <ConnectedSection />
          <NextSection />
        </div>
      </main>

      <SeatsGroupFooter />
    </div>
  );
}
