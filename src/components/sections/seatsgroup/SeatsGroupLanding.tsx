import { ArrowRight, BarChart3, Boxes, Globe, Play } from "lucide-react";
import { ConnectedSection } from "@/components/sections/seatsgroup/ConnectedSection";
import { MoreThanTicketing } from "@/components/sections/seatsgroup/MoreThanTicketing";
import { NextSection } from "@/components/sections/seatsgroup/NextSection";
import { SeatsGroupFooter } from "@/components/sections/seatsgroup/SeatsGroupFooter";
import { HeroBackground } from "@/components/sections/seatsgroup/HeroBackground";
import { HeroNav } from "@/components/sections/seatsgroup/HeroNav";
import { SolutionsRail } from "@/components/sections/seatsgroup/SolutionsRail";
import { seatsGroup } from "@/lib/constants/seatsgroup";

const heroFeatureIcons = {
  globe: Globe,
  boxes: Boxes,
  chart: BarChart3,
} as const;

export function SeatsGroupLanding() {
  return (
    <div className="sg-page bg-white text-brand-dark">
      <HeroNav />

      <main>
        <section id="top" className="sg-hero relative isolate text-white">
          <HeroBackground />

          <div className="sg-hero-shell">
            <div className="sg-hx">
              <p className="sg-hx-eyebrow">
                <span className="sg-hx-dash" aria-hidden />
                Global Ticketing Infrastructure
              </p>

              <h1 className="sg-hx-title heading">
                <span>{seatsGroup.headlineLead}</span>
                <span className="sg-hero-accent sg-hero-accent-shine">
                  <span className="sg-hero-accent-base">
                    {seatsGroup.headlineAccent}
                  </span>
                  <span className="sg-hero-accent-blade" aria-hidden>
                    {seatsGroup.headlineAccent}
                  </span>
                </span>
              </h1>

              <p className="sg-hx-copy">{seatsGroup.intro[0]}</p>

              <ul className="sg-hx-features">
                {seatsGroup.connectedFeatures.map((feature) => {
                  const Icon = heroFeatureIcons[feature.icon];
                  return (
                    <li key={feature.label} className="sg-hx-feature">
                      <span className="sg-hx-feature-icon" aria-hidden>
                        <Icon className="h-4 w-4" strokeWidth={1.7} />
                      </span>
                      <span className="sg-hx-feature-label">
                        {feature.label}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <div className="sg-hx-actions">
                <a href="#solutions" className="sg-hx-cta">
                  Explore Our Ecosystem
                  <span className="sg-hx-cta-icon" aria-hidden>
                    <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
                  </span>
                </a>

                <a href="#story" className="sg-hx-ghost">
                  <span className="sg-hx-ghost-icon" aria-hidden>
                    <Play className="h-3.5 w-3.5 fill-current" strokeWidth={0} />
                  </span>
                  Watch Our Story
                </a>
              </div>
            </div>

            <div id="solutions" className="sg-hx-rail-block">
              <div className="sg-hx-rail-head">
                <p className="sg-hx-eyebrow">
                  <span className="sg-hx-dash" aria-hidden />
                  Our Solutions
                </p>
                <p className="sg-hx-rail-sub">An End-to-End Ecosystem</p>
              </div>

              <SolutionsRail />
            </div>
          </div>
        </section>

        <div className="sg-stack">
          <section className="sg-strip">
            <div className="sg-strip-inner">
              <p className="sg-strip-eyebrow">{seatsGroup.moreEyebrow}</p>
              <p className="sg-strip-copy">{seatsGroup.moreText}</p>
              <MoreThanTicketing />
            </div>
          </section>
          <ConnectedSection />
          <NextSection />
        </div>
      </main>

      <SeatsGroupFooter />
    </div>
  );
}
