import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface SectionBadgeProps extends ComponentProps<typeof Badge> {
  children: React.ReactNode;
}

export function SectionBadge({ children, className, ...props }: SectionBadgeProps) {
  return (
    <Badge
      className={cn(
        "w-52 bg-gray-100 px-10 py-5 align-middle text-black uppercase hover:bg-gray-200",
        className
      )}
      {...props}
    >
      {children}
    </Badge>
  );
}
