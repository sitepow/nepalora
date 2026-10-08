import Image from "next/image";
import { GalleryItem } from "../ExploreSection";
import { cn } from "cn";
import { ComponentProps } from "react";

interface GalleryItemCardProps extends ComponentProps<"div"> {
  item: GalleryItem;
}

export function GalleryItemCard({ item, className, ...props }: GalleryItemCardProps) {
  return (
    <div
      className={cn("relative w-full overflow-hidden rounded-[2rem] bg-gray-100", className)}
      {...props}
    >
      <Image
        src={item.imageSrc}
        alt={item.alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 25vw"
      />
    </div>
  );
}
