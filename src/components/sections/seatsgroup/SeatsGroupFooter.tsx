import { Mail, MapPin, Phone } from "lucide-react";
import { SeatsGroupLogo } from "@/components/sections/seatsgroup/SeatsGroupLogo";
import { seatsGroup } from "@/lib/constants/seatsgroup";

export function SeatsGroupFooter() {
  const { footer } = seatsGroup;

  return (
    <footer className="sg-footer relative bg-[#0c0c0e] text-[#e3f2fd]">
      <div className="relative mx-auto max-w-[88rem] px-5 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.15fr_0.7fr_0.7fr_1fr] lg:gap-8">
          <div>
            <SeatsGroupLogo className="flex items-center gap-3" />
            <p className="mt-5 max-w-sm text-[13px] leading-relaxed text-white/70">
              {seatsGroup.enquiryLabel}
            </p>
            <a
              href={`mailto:${seatsGroup.email}`}
              className="mt-3 inline-flex items-center gap-2 text-[14px] font-semibold text-brand-icon hover:text-white"
            >
              <Mail className="h-4 w-4 text-white" strokeWidth={1.8} />
              {seatsGroup.email}
            </a>
            <div className="mt-5 space-y-2">
              {footer.phones.map((phone) => (
                <p
                  key={phone.label}
                  className="flex items-center gap-2 text-[13px] text-white/70"
                >
                  <Phone className="h-3.5 w-3.5 text-white" strokeWidth={1.8} />
                  <span className="text-white/45">{phone.label}</span>
                  <span className="text-white">{phone.value}</span>
                </p>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow text-brand-orange">Platforms</p>
            <ul className="mt-4 space-y-2.5">
              {footer.platforms.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-[13.5px] text-white/70 transition-colors hover:text-white"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-brand-orange">Company</p>
            <ul className="mt-4 space-y-2.5">
              {footer.company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-[13.5px] text-white/70 transition-colors hover:text-white"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-brand-orange">Offices</p>
            <ul className="mt-4 space-y-4">
              {footer.offices.map((office) => (
                <li key={office.city} className="flex gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white" strokeWidth={1.8} />
                  <div>
                    <p className="text-[13.5px] font-semibold text-brand-icon">
                      {office.city}
                      <span className="ml-1.5 font-normal text-white/40">
                        {office.region}
                      </span>
                    </p>
                    <p className="mt-0.5 text-[12.5px] leading-snug text-white/65">
                      {office.address}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-tech text-[11px] tracking-wide text-white/40">
            {seatsGroup.copyright}
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {footer.legal.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-[12px] text-white/45 transition-colors hover:text-brand-orange"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
