"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type TestimonialIndicatorProps = {
  currentIndex: number;
  totalSlides: number;
  className?: string;
  onClick?: (index: number) => void; // Optional: クリックでスライドジャンプ
};

export function TestimonialIndicator({
  currentIndex,
  totalSlides,
  className,
  onClick,
}: TestimonialIndicatorProps) {
  return (
    <div
      className={cn("flex items-center gap-2", className)}
      role="tablist"
      aria-label="Slide indicators"
    >
      {Array.from({ length: totalSlides }).map((_, index) => {
        const isActive = index === currentIndex;
        const isClickable = onClick !== undefined;

        const indicator = (
          <span
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              isActive
                ? "w-12 bg-blue-600"
                : "w-8 bg-slate-300 hover:bg-slate-400",
              isClickable && "cursor-pointer"
            )}
            role="tab"
            aria-selected={isActive}
            aria-label={`Slide ${index + 1} of ${totalSlides}`}
          />
        );

        if (isClickable) {
          return (
            <button
              key={index}
              type="button"
              onClick={() => onClick(index)}
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded"
              aria-label={`Go to slide ${index + 1}`}
            >
              {indicator}
            </button>
          );
        }

        return <React.Fragment key={index}>{indicator}</React.Fragment>;
      })}
    </div>
  );
}

export default TestimonialIndicator;