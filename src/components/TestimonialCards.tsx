"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "@/utils/utils";

const TestimonialCards = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-black relative flex flex-col items-center justify-center overflow-hidden">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_0.5px,transparent_0.5px)]",
          "dark:[background-image:radial-gradient(#404040_0.5px,transparent_0.5px)]",
        )}
      />
      <h1 className="text-white text-3xl text-center font-bold mb-8">
        Hear Our Harmony: Voice of Success
      </h1>
      <div className="flex justify-center w-full overflow-hidden px-4">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;
const testimonials = [
  {
    quote:
      "This music school completely changed the way I understand guitar. The lessons are clear, structured, and very motivating.",
    name: "Aarav Sharma",
    title: "Guitar Student",
  },
  {
    quote:
      "I started piano with zero knowledge, and now I can confidently play my favorite songs. The instructors are amazing.",
    name: "Priya Mehta",
    title: "Piano Learner",
  },
  {
    quote:
      "The vocal training course helped me improve my pitch and breathing techniques. I feel much more confident while singing.",
    name: "Rohan Verma",
    title: "Vocal Music Student",
  },
  {
    quote:
      "The drum classes are super practical and easy to follow. I loved the step-by-step approach used in every lesson.",
    name: "Kunal Singh",
    title: "Drumming Enthusiast",
  },
  {
    quote:
      "Music theory always felt complicated, but this platform made it simple and fun. Highly recommended for beginners.",
    name: "Neha Kapoor",
    title: "Music Theory Student",
  },
  {
    quote:
      "Learning electronic music production here gave me the confidence to create my own tracks. The content feels very industry-ready.",
    name: "Arjun Malhotra",
    title: "Music Producer",
  },
];
