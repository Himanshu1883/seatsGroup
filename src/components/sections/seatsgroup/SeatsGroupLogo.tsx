import Image from "next/image";
import { cn } from "@/lib/utils";

export function SeatsGroupLogo({
  className,
  variant = "light",
  centered = false,
}: {
  className?: string;
  variant?: "light" | "dark";
  centered?: boolean;
}) {
  const dark = variant === "dark";

  return (
    <div
      className={cn(
        "flex items-center gap-1",
        centered && "mx-auto w-fit justify-center",
        className
      )}
    >
      <Image
        src="/favicon-blue.png"
        alt=""
        width={48}
        height={48}
        className="h-10 w-10 shrink-0 object-contain sm:h-11 sm:w-11"
        priority
      />
      <div
        className={cn(
          "text-[1.05rem] font-bold leading-none tracking-[-0.01em] sm:text-[1.2rem]",
          dark ? "text-brand-dark" : "text-white"
        )}
      >
        <span className={dark ? "text-brand-dark" : "text-white"}>Seats</span>
        <span className="text-brand-orange">Group</span>
      </div>
    </div>
  );
}
