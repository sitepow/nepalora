import { Badge } from "@/components/ui/badge";
import React from "react";

interface TypographyTitleProps {
  children?: React.ReactNode;
  className?: string;
  badge?: string;
}

function parseFormattedText(text: string) {
  const parts = text.split(/(\*{1,2}[^*]+\*{1,2})/g);

  return parts.map((part, index) => {
    const isDouble = part.startsWith("**") && part.endsWith("**");
    const isSingle = part.startsWith("*") && part.endsWith("*");

    if (isDouble || isSingle) {
      const cleanText = isDouble ? part.slice(2, -2) : part.slice(1, -1);

      return (
        <span key={index} className="font-serif font-semibold italic opacity-80">
          {cleanText}
        </span>
      );
    }

    return part;
  });
}

function renderFormattedChildren(children: React.ReactNode): React.ReactNode {
  return React.Children.map(children, (child) => {
    if (typeof child === "string") {
      return parseFormattedText(child);
    }
    return child;
  });
}

export function TypographyTitle({ children, badge, className = "" }: TypographyTitleProps) {
  return (
    <div className="flex flex-col items-center gap-5">
      {badge && (
        <Badge className="mr-3 bg-gray-100 px-10 py-5 align-middle text-black">{badge}</Badge>
      )}
      <h1 className={`text-center text-7xl leading-[0.9] tracking-[-0.055em] ${className}`}>
        {renderFormattedChildren(children)}
      </h1>
    </div>
  );
}
