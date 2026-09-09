"use client";

import Image from "next/image";
import {
  ArrowRight,
  CreditCard,
  Globe,
  Mail,
  Shield,
  Ticket,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { seatsGroup } from "@/lib/constants/seatsgroup";

const floatingIcons = [
  { icon: Globe, delay: 260, className: "" },
  { icon: Ticket, delay: 320, className: "-mt-1" },
  { icon: Shield, delay: 380, className: "mt-3" },
  { icon: CreditCard, delay: 440, className: "" },
] as const;

export function NextSection() {
  return (
    <section className="sg-next relative overflow-hidden bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
      <div className="sg-section-bg" aria-hidden>
        <Image
          src="/images/section-next-bg.jpg"
          alt=""
          fill
          sizes="100vw"
          className="sg-section-bg-image sg-section-bg-image-next"
        />
        <div className="sg-section-bg-wash" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-[88rem] items-center gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-4">
        <div className="relative z-10 max-w-xl">
          <Reveal variant="left">
            <h2 className="heading text-[2rem] leading-[1.12] tracking-[-0.03em] text-neutral-900 sm:text-[2.75rem] lg:text-[3.15rem]">
              <span className="text-brand-plum">Building What&apos;s</span>{" "}
              <span className="sg-text-shine">Next.</span>
            </h2>
          </Reveal>
          <Reveal variant="line" delay={90} className="mt-3 block h-px w-11 bg-brand-icon" aria-hidden>
            <span className="sr-only">Section divider</span>
          </Reveal>
          <Reveal variant="up" delay={170}>
            <p className="mt-4 max-w-md text-[14px] leading-relaxed text-neutral-900 sm:text-[15.5px]">
              {seatsGroup.nextText}
            </p>
          </Reveal>

          <Reveal variant="scale" delay={260}>
            <a
              href={`mailto:${seatsGroup.email}`}
              className="sg-next-card mt-7 flex items-center gap-3.5 rounded-2xl bg-white px-4 py-4 sm:px-5"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-plum text-white">
                <Mail className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <span className="min-w-0">
                <span className="block text-[12.5px] leading-snug text-neutral-900 sm:text-[13.5px]">
                  {seatsGroup.enquiryLabel}
                </span>
                <span className="mt-1 inline-flex items-center gap-1.5 text-[14px] font-semibold text-neutral-900 sm:text-[15px]">
                  {seatsGroup.email}
                  <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
                </span>
              </span>
            </a>
          </Reveal>

          <Reveal variant="fade" delay={360}>
            <p className="mt-8 inline-flex items-center gap-2 font-tech text-[11px] tracking-wide text-neutral-900">
              <Shield className="h-3.5 w-3.5 text-brand-plum" strokeWidth={1.8} />
              {seatsGroup.copyright}
            </p>
          </Reveal>
        </div>

        <div className="relative min-h-[16rem]">
          <Reveal variant="fade" delay={120} className="absolute left-[6%] top-1 z-10 hidden h-16 w-[72%] sm:block">
            <svg viewBox="0 0 560 70" fill="none" aria-hidden className="h-full w-full">
              <path
                d="M28 48 C 130 10, 220 8, 300 38 C 380 68, 470 12, 532 24"
                stroke="rgba(102,187,106,0.5)"
                strokeWidth="1.25"
                strokeDasharray="3 6"
              />
            </svg>
          </Reveal>

          <div className="pointer-events-none absolute left-[8%] top-2 z-10 hidden items-start gap-9 sm:flex">
            {floatingIcons.map(({ icon: Icon, delay, className }) => (
              <Reveal key={delay} variant="scale" delay={delay}>
                <span
                  className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-plum bg-white text-brand-plum shadow-sm ${className}`}
                >
                  <Icon className="h-4 w-4" strokeWidth={1.8} />
                </span>
              </Reveal>
            ))}
          </div>

          <Reveal variant="right" delay={180}>
            <Image
              src="/images/seatsgroup-next-devices.jpg"
              alt="SeatsGroup dashboard on laptop and mobile"
              width={1024}
              height={682}
              className="relative z-0 ml-auto h-auto w-full object-contain"
              sizes="(min-width: 1024px) 54vw, 92vw"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
