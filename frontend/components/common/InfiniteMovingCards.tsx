"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo({ direction }: { direction: "left" | "right" }) {
  return (
    <div className=" rounded-md flex flex-col antialiased bg-grid-white/[0.05] items-center justify-center relative">
      <InfiniteMovingCards
        items={imageItems}
        direction={direction}
        speed="slow"
      />
    </div>
  );
}

const imageItems = [
  { src: "/cert1.png", alt: "Certificate 1" },
  { src: "/cert2.png", alt: "Certificate 2" },
  { src: "/cert3.png", alt: "Certificate 3" },
  { src: "/cert4.png", alt: "Certificate 4" },
  { src: "/cert5.png", alt: "Certificate 5" },
];