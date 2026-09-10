import Image from "next/image";
import { cn } from "@/lib/utils";

export function SeatsGroupLogo({
  className,
  centered = false,
}: {
  className?: string;
  variant?: "light" | "dark";
  centered?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center",
        centered && "mx-auto w-fit justify-center",
        className
      )}
    >
      <Image
        src="/images/seatsgroup-logo.png"
        alt="SeatsGroup"
        width={884}
        height={173}
        className="h-7 w-auto shrink-0 object-contain sm:h-9"
        priority
      />
    </div>
  );
}
