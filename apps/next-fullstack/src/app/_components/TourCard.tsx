import { Button } from "@/components/ui/button";
import { cn } from "cn";
import { ComponentProps } from "react";

export interface TourCardProps extends ComponentProps<"div"> {
  imageSrc?: string;
  title?: string;
  price?: string;
  description?: string;
  tag?: string;
  duration?: string;
}

export function TourCard({
  imageSrc,
  title,
  price,
  description,
  tag,
  duration,
  className,
  ...props
}: TourCardProps) {
  return (
    <div
      className={cn(
        "bg-red-0 flex h-120 w-[320px] flex-col justify-end rounded-4xl bg-cover bg-bottom bg-no-repeat",
        className
      )}
      style={{ backgroundImage: `url(${imageSrc})` }}
      {...props}
    >
      <div className="space-y-3 rounded-b-3xl p-3 text-white backdrop-blur-md">
        <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
        <p className="line-clamp-3 text-sm">{description}</p>

        {tag && (
          <div className="flex items-center gap-2 pt-1 text-xs">
            <span className="rounded-full bg-white/20 px-3 py-1 backdrop-blur-md">{tag}</span>
            <span className="rounded-full bg-white/20 px-3 py-1 backdrop-blur-md">
              {duration} days
            </span>
          </div>
        )}

        <Button className="w-full bg-white py-6 text-lg text-black hover:bg-white/80">
          Explore
        </Button>
      </div>
    </div>
  );
}
