"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { seatsGroup } from "@/lib/constants/seatsgroup";

export function ConnectedSection() {
  return (
    <section className="sg-connected relative bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
      <div className="relative mx-auto grid max-w-[88rem] items-center gap-4 sm:gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-5">
        <Reveal>
          <p className="eyebrow text-brand-orange">
            {seatsGroup.connectedEyebrow}
          </p>
          <span
            aria-hidden
            className="mt-2.5 block h-px w-10 bg-brand-orange"
          />
          <p className="mt-5 max-w-[32rem] text-[14px] leading-relaxed text-brand-gray-text sm:text-[16px]">
            {seatsGroup.connectedText}
          </p>
          <p className="heading mt-7 text-[1.7rem] leading-[1.12] tracking-[-0.03em] text-brand-dark sm:mt-8 sm:text-[2.4rem] lg:text-[2.7rem]">
            Built for the <span className="text-brand-orange">Industry.</span>
            <br />
            Connected <span className="text-brand-orange">Globally.</span>
          </p>
        </Reveal>

        <Reveal delay={80}>
          <Image
            src="/images/seatsgroup-devices-mockup.jpg"
            alt="SeatsGroup platform across laptop, tablet and mobile"
            width={1600}
            height={1200}
            className="h-auto w-full object-contain"
            sizes="(min-width: 1024px) 52vw, 92vw"
            priority
          />
        </Reveal>
      </div>
    </section>
  );
}
