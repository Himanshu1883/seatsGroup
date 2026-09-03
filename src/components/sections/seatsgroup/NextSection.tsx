import Image from "next/image";
import { ArrowRight, CreditCard, Globe, Mail, Shield, Ticket } from "lucide-react";
import { seatsGroup } from "@/lib/constants/seatsgroup";

export function NextSection() {
  return (
    <section className="sg-next relative bg-[#e3f2fd] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto grid max-w-[88rem] items-center gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-4">
        <div className="relative z-10 max-w-xl">
          <h2 className="heading text-[2rem] leading-[1.12] tracking-[-0.03em] text-brand-dark sm:text-[2.75rem] lg:text-[3.15rem]">
            Building What&apos;s{" "}
            <span className="text-brand-orange">Next.</span>
          </h2>
          <span
            aria-hidden
            className="mt-3 block h-px w-11 bg-brand-icon"
          />
          <p className="mt-4 max-w-md text-[14px] leading-relaxed text-brand-gray-text sm:text-[15.5px]">
            {seatsGroup.nextText}
          </p>

          <a
            href={`mailto:${seatsGroup.email}`}
            className="sg-next-card mt-7 flex items-center gap-3.5 rounded-2xl bg-white px-4 py-4 sm:px-5"
          >
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-icon text-white">
              <Mail className="h-5 w-5" strokeWidth={1.8} />
            </span>
            <span className="min-w-0">
              <span className="block text-[12.5px] leading-snug text-brand-gray-text sm:text-[13.5px]">
                {seatsGroup.enquiryLabel}
              </span>
              <span className="mt-1 inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand-icon sm:text-[15px]">
                {seatsGroup.email}
                <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
              </span>
            </span>
          </a>

          <p className="mt-8 inline-flex items-center gap-2 font-tech text-[11px] tracking-wide text-[#0d47a1]">
            <Shield className="h-3.5 w-3.5 text-brand-icon" strokeWidth={1.8} />
            {seatsGroup.copyright}
          </p>
        </div>

        <div className="relative min-h-[16rem]">
          <svg
            className="pointer-events-none absolute left-[6%] top-1 z-10 hidden h-16 w-[72%] sm:block"
            viewBox="0 0 560 70"
            fill="none"
            aria-hidden
          >
            <path
              d="M28 48 C 130 10, 220 8, 300 38 C 380 68, 470 12, 532 24"
              stroke="rgba(255,140,66,0.5)"
              strokeWidth="1.25"
              strokeDasharray="3 6"
            />
          </svg>
          <div className="pointer-events-none absolute left-[8%] top-2 z-10 hidden items-start gap-9 sm:flex">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-icon bg-white text-brand-icon shadow-sm">
              <Globe className="h-4 w-4" strokeWidth={1.8} />
            </span>
            <span className="-mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-icon bg-white text-brand-icon shadow-sm">
              <Ticket className="h-4 w-4" strokeWidth={1.8} />
            </span>
            <span className="mt-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-icon bg-white text-brand-icon shadow-sm">
              <Shield className="h-4 w-4" strokeWidth={1.8} />
            </span>
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-icon bg-white text-brand-icon shadow-sm">
              <CreditCard className="h-4 w-4" strokeWidth={1.8} />
            </span>
          </div>
          <Image
            src="/images/seatsgroup-next-devices.jpg"
            alt="SeatsGroup dashboard on laptop and mobile"
            width={1600}
            height={1200}
            className="relative z-0 ml-auto h-auto w-full object-contain mix-blend-multiply"
            sizes="(min-width: 1024px) 54vw, 92vw"
          />
        </div>
      </div>
    </section>
  );
}
