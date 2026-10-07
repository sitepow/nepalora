"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionBadge } from "../../SectionBadge";
import { TestimonialCard } from "./_components/TravelerReviewCard";
import { NavigationPrevious } from "../../navigation/NavigationPrevious";
import { NavigationNext } from "../../navigation/NavigationNext";

export interface ReviewData {
  name: string;
  avatar: string;
  age: number;
  location: string;
  tag: string;
  rating: number;
  experience: string;
  highlight: string;
  isVerified?: boolean;
}

export const REVIEWS_DATA: ReviewData[] = [
  {
    name: "Sophia",
    avatar: "/images/irene-strong-v2aKnjMbP_k-unsplash.jpg",
    age: 29,
    location: "Amsterdam",
    tag: "Culture & Nature Lover",
    rating: 5.0,
    experience:
      "I loved how naturally the trip combined adventure, culture and quiet moments. We discovered places I would never have found on my own.",
    highlight: "It didn't feel like a typical tour — it felt like experiencing the real Nepal.",
    isVerified: true,
  },
  {
    name: "Daniel",
    avatar: "/images/photo-1581382575275-97901c2635b7.avif",
    age: 31,
    location: "Berlin",
    tag: "First-Time Visitor",
    rating: 5.0,
    experience:
      "Nepal completely exceeded my expectations. Everything was beautifully organized, while the journey still felt spontaneous and authentic.",
    highlight:
      "The local villages, mountain trails and people we met made the experience truly special.",
    isVerified: true,
  },
  {
    name: "Emily",
    avatar: "/images/premium_photo-1664910497704-16ceb7f6d95e.avif",
    age: 28,
    location: "London",
    tag: "Adventure Traveler",
    rating: 4.0,
    experience:
      "The entire journey felt personal from the very beginning. Every place, stay and experience was thoughtfully chosen for us.",
    highlight:
      "Watching the sunrise over the Himalayas was something I'll remember for the rest of my life.",
    isVerified: true,
  },
  {
    name: "Lucas",
    avatar: "/images/photo-1697639624655-4fa775970eaf.avif",
    age: 34,
    location: "Zurich",
    tag: "Trekking Enthusiast",
    rating: 5.0,
    experience:
      "An incredible trip from start to finish. The guides were exceptionally knowledgeable, and every day brought a new breathtaking view.",
    highlight:
      "Reaching Everest Base Camp with such a supportive crew was a lifelong dream fulfilled.",
    isVerified: true,
  },
  {
    name: "Aria",
    avatar: "/images/photo-1667785647419-eab8e43a763c.avif",
    age: 26,
    location: "Toronto",
    tag: "Solo Traveler",
    rating: 5.0,
    experience:
      "Traveling solo can be daunting, but everything was handled with so much care that I felt completely safe and immersed in the local culture.",
    highlight: "Sharing tea with a local family in a remote mountain village.",
    isVerified: true,
  },
];

export function TestimonialsSection() {
  const [reviews, setReviews] = useState<ReviewData[]>(REVIEWS_DATA);

  const handleSelect = (selectedIndex: number) => {
    const centerIndex = 2;
    const diff = selectedIndex - centerIndex;

    if (diff === 0) return;

    setReviews((prev) => {
      const len = prev.length;
      return prev.map((_, i) => prev[(i + diff + len) % len]);
    });
  };

  const handlePrev = () => {
    handleSelect(1);
  };

  const handleNext = () => {
    handleSelect(3);
  };

  return (
    <div className="flex flex-col items-center gap-10 px-10 py-20">
      <div className="flex flex-col items-center gap-20 text-center">
        <SectionBadge>Review</SectionBadge>
        <p className="max-w-2xl text-xl font-medium">
          Real journeys, personal stories and unforgettable moments — discover Nepal through the
          eyes of those who traveled with us.
        </p>
      </div>

      {reviews.length !== 0 && (
        <div className="relative flex w-full items-center justify-center overflow-hidden py-10">
          {reviews.map((data, index) => {
            const isCenter = index === 2;
            const distance = Math.abs(index - 2);

            return (
              <TestimonialCard
                key={index}
                review={data}
                className={`relative -mx-6 cursor-pointer transition-all duration-500 ease-in-out ${
                  isCenter
                    ? "blur-0 z-30 scale-105 opacity-100"
                    : distance === 1
                      ? "z-20 scale-95 opacity-80 blur-[0.5px]"
                      : "z-10 scale-85 opacity-40 blur-[2px]"
                }`}
              />
            );
          })}
        </div>
      )}

      <div className="flex items-center justify-center gap-6 pt-4">
        <NavigationPrevious onClick={handlePrev} />

        <div className="flex items-center gap-3">
          {reviews.map((item, index) => {
            const isCenter = index === 2;

            return (
              <button
                key={index}
                onClick={() => handleSelect(index)}
                className={`relative size-16 overflow-hidden rounded-lg ${
                  isCenter ? "ring-3 ring-blue-500" : "opacity-70"
                }`}
              >
                <Image src={item.avatar} alt={item.name} fill className="object-cover" />
              </button>
            );
          })}
        </div>

        <NavigationNext onClick={handleNext} />
      </div>
    </div>
  );
}
