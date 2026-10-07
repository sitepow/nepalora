"use client";

import { useState } from "react";
import { TourCard, TourCardProps } from "../TourCard";
import { TypographyTitle } from "../TypographyTitle";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { NavigationPrevious } from "../navigation/NavigationPrevious";
import { NavigationNext } from "../navigation/NavigationNext";

const TOUR_LISTS: TourCardProps[] = [
  {
    imageSrc: "/images/cristian-grecu-6yBAQeeNROU.jpg",
    title: "Everest Escape",
    price: "890",
    description:
      "Trek through Nepal's legendary peaks, discovering remote trails, mountain villages and breathtaking Himalayan views.",
    tag: "top rated",
    duration: "7 days",
  },
  {
    imageSrc: "/images/caden-nickel-pu-NcO7QIbI-unsplash.jpg",
    title: "Annapurna Trail",
    price: "760",
    description:
      "Follow scenic mountain trails through peaceful villages, ancient paths and some of Nepal's most spectacular landscapes.",
    tag: "popular",
    duration: "6 days",
  },
  {
    imageSrc: "/images/kabita-darlami-fXEDLesuYu0-unsplash.jpg",
    title: "Pokhara Retreat",
    price: "540",
    description:
      "Slow down beside the peaceful lake, surrounded by green hills, distant peaks and the quiet beauty of Nepal.",
    tag: "relax",
    duration: "4 days",
  },
  {
    imageSrc: "/images/photo-1529733905113-027ed85d7e33.avif",
    title: "Kathmandu Soul",
    price: "460",
    description:
      "Wander through ancient temples, hidden courtyards and colorful streets filled with history and spirit of Nepal.",
    tag: "top rated",
    duration: "3 days",
  },
  {
    imageSrc: "/images/travelmax-guide-S_hFKpgzGD4-unsplash.jpg",
    title: "Himalayan Escape",
    price: "650",
    description:
      "Experience Nepal through its vibrant culture, taking landscapes, ancient traditions and unforgettable local encounters.",
    tag: "adventure",
    duration: "5 days",
  },
];

export function PopularToursSection() {
  const [tours, setTours] = useState<TourCardProps[]>(TOUR_LISTS);

  const handleSelect = (selectedIndex: number) => {
    const centerIndex = 2;
    const diff = selectedIndex - centerIndex;

    if (diff === 0) return;

    setTours((prev) => {
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
      <TypographyTitle badge="You Journey" className="max-w-xl">
        Discover *Our Most Popular* Tours
      </TypographyTitle>
      {tours.length !== 0 && (
        <div className="relative flex items-center justify-center py-10">
          {tours.map((tour, index) => {
            const isCenter = index === 2;
            const distance = Math.abs(index - 2);

            return (
              <TourCard
                key={tour.title}
                className={`relative -mx-10 cursor-pointer ${
                  isCenter
                    ? "blur-0 z-30 scale-110 shadow-2xl"
                    : distance === 1
                      ? "z-20 scale-95"
                      : "z-10 scale-70 opacity-45 blur-[2px]"
                } `}
                {...tour}
              />
            );
          })}
        </div>
      )}
      <div className="flex items-center justify-center gap-5">
        <NavigationPrevious onClick={handlePrev} />

        <span className="text-2xl">View More Tours</span>

        <NavigationNext onClick={handleNext} />
      </div>
    </div>
  );
}
