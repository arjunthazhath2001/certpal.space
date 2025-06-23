"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo({ 
  direction,
  items 
}: { 
  direction: "left" | "right";
  items: React.ReactNode[];  // Add items to props
}) {
  return (
    <div className="rounded-md flex flex-col antialiased bg-grid-white/[0.05] items-center justify-center relative">
      <InfiniteMovingCards
        items={items}  // Pass items prop
        direction={direction}
        speed="normal"
      />
    </div>
  );
}

