"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "PROFESSIONALS",
    title: "Certified professionals earn $12,000 more annually on average than non-certified peers.",
    src: "/card1.png",
    
  },
  {
    category: "RECRUITERS",
    title: "53% of employers prefer candidates with industry certifications over those with just degrees.",
    src: "/card2.png",
    
  },
  {
    category: "STUDENTS",
    title: "73% of students said certifications helped them stand out in internships and job applications.",
    src: "/card1.png",    
  },

  {
    category: "COLLEAGUES",
    title: "61% of certified employees say their colleagues respect them more after becoming certified.",
    src: "/card1.png",
    
  },
  {
    category: "MANAGERS",
    title: "Photography just got better.",
    src: "/card1.png",
    
  },
  {
    category: "FAMILY",
    title: "Hiring for a Staff Software Engineer",
    src: "/card1.png",
    
  },
];
