"use client";

import { useState } from "react";
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
import Image from "next/image";
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

const leftChips = seatsGroup.chips.slice(0, 5);
const rightChips = seatsGroup.chips.slice(4);

function MarqueeItems({
  chips,
  duplicate,
}: {
  chips: typeof seatsGroup.chips;
  duplicate?: boolean;
}) {
  return chips.map((chip, index) => {
    const Icon = chipIcons[chip.icon];
    return (
      <span
        key={`${chip.label}-${duplicate ? "dup" : "src"}-${index}`}
        className="sg-more-item"
        aria-hidden={duplicate}
      >
        <span className="sg-more-item-icon">
          <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5" strokeWidth={1.9} />
        </span>
        <span className="sg-more-item-label">{chip.label}</span>
      </span>
    );
  });
}

export function MoreThanTicketing() {
  const [paused, setPaused] = useState(false);
  const pauseClass = paused ? " is-paused" : "";

  return (
    <div
      className="sg-more-flow"
      onPointerDown={() => setPaused(true)}
      onPointerUp={() => setPaused(false)}
      onPointerCancel={() => setPaused(false)}
      onPointerLeave={() => setPaused(false)}
    >
      <div className="sg-more-ribbon sg-more-ribbon-left" aria-hidden>
        <div className={`sg-more-track sg-more-track-ltr${pauseClass}`}>
          <MarqueeItems chips={leftChips} />
          <MarqueeItems chips={leftChips} duplicate />
        </div>
      </div>

      <div className="sg-more-hub">
        <Image
          src="/favicon-green.png"
          alt="SeatsGroup"
          width={56}
          height={56}
          className="sg-more-hub-mark"
        />
      </div>

      <div className="sg-more-ribbon sg-more-ribbon-right" aria-hidden>
        <div className={`sg-more-track sg-more-track-rtl${pauseClass}`}>
          <MarqueeItems chips={rightChips} />
          <MarqueeItems chips={rightChips} duplicate />
        </div>
      </div>
    </div>
  );
}
