"use client";
import React from "react";
import { Button } from "../ui/moving-border";

export function MovingBorderDemo() {
  return (
    <div>
      <Button
        borderRadius="1rem"
        className="bg-slate-900 font-bold text-white border-slate-800"
      >
        Get a salary hike
      </Button>
    </div>
  );
}
