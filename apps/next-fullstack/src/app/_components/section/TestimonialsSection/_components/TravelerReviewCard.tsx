import Image from "next/image";
import { ReviewData } from "../TestimonialsSection";
import { ComponentProps } from "react";
import { cn } from "cn";

interface TestimonialCardProps extends ComponentProps<"div"> {
  review: ReviewData;
}

export function TestimonialCard({ review, className, ...props }: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "flex max-w-80 flex-col gap-5 rounded-3xl border bg-[#f5f5f5] p-6 text-black",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-4">
        <div className="relative size-28 overflow-hidden rounded-2xl">
          <Image src={review.avatar} alt={review.name} fill className="object-cover" />
        </div>
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold tracking-tight">{review.name}</h3>
          <p className="opacity-50">
            {review.age} years old, {review.location}
          </p>
          <p className="opacity-50">{review.tag}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={`size-3 rounded-full ${
                i < Math.floor(review.rating) ? "bg-[#007aff]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
        <span className="text-sm font-semibold">{review.rating.toFixed(1)}</span>
      </div>

      <div className="flex flex-col gap-1">
        <span className="font-medium opacity-50">Experience</span>
        <p className="leading-relaxed">&ldquo;{review.experience}&rdquo;</p>
      </div>

      <div className="flex flex-col gap-1">
        <span className="font-medium opacity-50">Highlight</span>
        <p className="leading-relaxed">&ldquo;{review.highlight}&rdquo;</p>
      </div>

      {review.isVerified && (
        <div className="mt-2 flex">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-200/60 px-3 py-1.5 text-xs font-medium text-gray-700">
            Verified Traveler
            <Image src={"/images/verify.png"} width={35} height={35} alt="" />
          </span>
        </div>
      )}
    </div>
  );
}
