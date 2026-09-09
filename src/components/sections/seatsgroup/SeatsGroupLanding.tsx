import { BarChart3, Boxes, Globe } from "lucide-react";
import { ConnectedSection } from "@/components/sections/seatsgroup/ConnectedSection";
import { EcosystemCards } from "@/components/sections/seatsgroup/EcosystemCards";
import { MoreThanTicketing } from "@/components/sections/seatsgroup/MoreThanTicketing";
import { NextSection } from "@/components/sections/seatsgroup/NextSection";
import { SeatsGroupFooter } from "@/components/sections/seatsgroup/SeatsGroupFooter";
import { HeroBackground } from "@/components/sections/seatsgroup/HeroBackground";
import { SeatsGroupLogo } from "@/components/sections/seatsgroup/SeatsGroupLogo";
import { seatsGroup } from "@/lib/constants/seatsgroup";

const heroFeatureIcons = {
  globe: Globe,
  boxes: Boxes,
  chart: BarChart3,
} as const;

export function SeatsGroupLanding() {
  return (
    <div className="sg-page overflow-x-hidden bg-white text-brand-dark">
      <main>
        <section className="sg-hero relative isolate bg-[#0c0c0e] text-[#e8f5e9]">
          <HeroBackground />

          <div className="sg-hero-inner relative z-10 mx-auto w-full max-w-[88rem] px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-[max(1.35rem,env(safe-area-inset-top))] sm:px-8 sm:pb-6 sm:pt-5 lg:px-12 lg:pb-7 lg:pt-6">
            <div className="sg-hero-copy">
              <SeatsGroupLogo />
              <div className="sg-hero-headline-block">
                <h1 className="heading text-[1.9rem] leading-[1.04] tracking-[-0.045em] text-white sm:text-[3.15rem] lg:text-[3.85rem] lg:leading-[1.03] xl:text-[4.25rem]">
                  <span className="block">{seatsGroup.headlineLead}</span>
                  <span className="sg-hero-accent sg-hero-accent-shine mt-1 block">
                    <span className="sg-hero-accent-base">{seatsGroup.headlineAccent}</span>
                    <span className="sg-hero-accent-blade" aria-hidden>
                      {seatsGroup.headlineAccent}
                    </span>
                  </span>
                </h1>
              </div>
              <div className="sg-hero-intro mx-auto max-w-[46rem]">
                <p className="sg-hero-intro-lead">
                  <span className="sg-hero-brand">{seatsGroup.name}</span>
                  {seatsGroup.intro[0].replace(seatsGroup.name, "")}
                </p>
                <p className="sg-hero-intro-sub hidden sm:block">
                  {seatsGroup.intro[1]}
                </p>
              </div>
              <div className="sg-hero-highlights hidden md:flex">
                {seatsGroup.connectedFeatures.map((feature) => {
                  const Icon = heroFeatureIcons[feature.icon];
                  return (
                    <div key={feature.label} className="sg-hero-highlight">
                      <span className="sg-hero-highlight-icon">
                        <Icon className="h-4 w-4 sm:h-[1.05rem] sm:w-[1.05rem]" strokeWidth={1.8} />
                      </span>
                      <span className="sg-hero-highlight-label">{feature.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="sg-eco-follow">
              <div className="sg-eco-block">
                <div className="hidden justify-center sm:flex">
                  <p className="sg-hero-pill">{seatsGroup.ecosystemEyebrow}</p>
                </div>
                <EcosystemCards />
              </div>

              <div className="sg-more-panel">
                <div className="flex justify-center">
                  <p className="sg-hero-pill">{seatsGroup.moreEyebrow}</p>
                </div>
                <p className="sg-more-copy hidden mx-auto max-w-3xl text-center text-[11px] leading-snug text-white lg:block lg:text-[13.5px]">
                  {seatsGroup.moreText}
                </p>
                <MoreThanTicketing />
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
