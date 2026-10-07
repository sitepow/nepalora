import { cn } from "cn";
import { ArrowRight } from "lucide-react";
import { ComponentProps } from "react";

export function NavigationNext({ className, ...props }: ComponentProps<"button">) {
  return (
    <button
      className={cn(
        "flex size-14 items-center justify-center rounded-full border border-gray-900 text-gray-900 transition-colors hover:bg-gray-100",
        className
      )}
      {...props}
    >
      <ArrowRight className="size-6" />
    </button>
  );
}
