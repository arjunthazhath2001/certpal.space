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
    category: "AWS DEVELOPER ASSOCIATE",
    title: "Validates my ability to develop, deploy, and debug cloud-native apps using AWS services effectively.",
    src: "/cert1.png",
    
  },
    {
    category: "AWS SOLUTIONS ARCHITECT PROFESSIONAL",
    title: "73% of students said certifications helped them stand out in internships and job applications.",
    src: "/card3.png",    
  },

  {
    category: "AWS AI PRACTITIONER FOUNDATIONAL",
    title: "53% of employers prefer candidates with industry certifications over those with just degrees.",
    src: "/card2.png",
    
  },

  {
    category: "COLLEAGUES",
    title: "61% of certified employees say their colleagues respect them more after becoming certified.",
    src: "/card5.png",
    
  },
  {
    category: "MANAGERS",
    title: "81% of managers report higher team performance after encouraging staff to earn certifications.",
    src: "/card4.png",
    
  },
  {
    category: "FAMILY",
    title: "Certified professionals are 2× more likely to feel financially secure and support their families better.",
    src: "/card6.png",
    
  },
];
