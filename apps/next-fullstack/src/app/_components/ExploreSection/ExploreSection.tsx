"use client";

import { Plus } from "lucide-react";
import { SectionBadge } from "../SectionBadge";
import { GalleryItemCard } from "./_components/GalleryItemCard";
import { NavigationPrevious } from "../navigation/NavigationPrevious";
import { NavigationNext } from "../navigation/NavigationNext";

export interface GalleryItem {
  imageSrc: string;
  alt: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    imageSrc: "/images/photo-1603966474815-85d21585ffb9.avif",
    alt: "Trekking in Nepal mountains",
  },
  {
    imageSrc: "/images/caden-nickel-pu-NcO7QIbI-unsplash.jpg",
    alt: "Local interactions with villagers",
  },
  {
    imageSrc: "/images/photo-1558868540-3b5e8ca26dc2.avif",
    alt: "Monk meditating in monastery view",
  },
  {
    imageSrc: "/images/photo-1523975864490-174dd4d9a41e.avif",
    alt: "Yak on Himalayan trail",
  },
];

export function ExploreSection() {
  return (
    <section className="flex flex-col gap-12 py-20">
      <div className="flex justify-between gap-6 px-10">
        <SectionBadge>Explore Nepal</SectionBadge>
        <p className="max-w-2xl text-3xl leading-tight font-medium text-gray-900">
          From Himalayan Peaks to Hidden Villages, Discover the Places, People and Stories That Make
          Nepal Extraordinary.
        </p>
      </div>

      <div className="grid grid-cols-4 items-start gap-6">
        <div className="flex flex-col justify-between gap-6">
          <GalleryItemCard item={GALLERY_ITEMS[0]} className="h-110 rounded-l-none" />
          <div className="flex items-center justify-end gap-3">
            <NavigationPrevious />
            <NavigationNext />
          </div>
        </div>

        <div className="-mt-4 flex flex-col gap-6">
          <div className="flex items-center justify-between px-2 pt-2">
            <h3 className="text-5xl leading-tight font-medium">
              Discover <br /> More
            </h3>
            <button
              aria-label="Discover more"
              className="flex size-11 items-center justify-center rounded-full bg-blue-600 text-white transition-transform hover:scale-105 active:scale-95"
            >
              <Plus className="size-6" />
            </button>
          </div>
          <GalleryItemCard item={GALLERY_ITEMS[1]} className="h-115" />
        </div>

        <GalleryItemCard item={GALLERY_ITEMS[2]} className="h-110" />
        <GalleryItemCard item={GALLERY_ITEMS[3]} className="mt-32 h-110 rounded-r-none" />
      </div>
    </section>
  );
}
