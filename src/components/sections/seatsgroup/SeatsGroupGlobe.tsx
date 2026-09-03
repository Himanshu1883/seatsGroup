import Image from "next/image";
import { cn } from "@/lib/utils";

const HERO_BG_SRC = "/images/seatsgroup-hero-bg.png";

export function SeatsGroupGlobe({
  className,
  imageClassName,
}: {
  className?: string;
  imageClassName?: string;
}) {
  return (
    <div className={cn("pointer-events-none", className)} aria-hidden>
      <Image
        src={HERO_BG_SRC}
        alt=""
        fill
        priority
        sizes="(min-width: 1024px) 62vw, 90vw"
        className={cn("sg-hero-bg-image object-cover object-left object-center", imageClassName)}
      />
    </div>
  );
}
