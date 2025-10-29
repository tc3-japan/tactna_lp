"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { TestimonialCard } from "./TestimonialCard";
import { TestimonialIndicator } from "./TestimonialIndicator";

type Slide = {
  quoteKey: string; // messages のキー（例: "testimonial.fujitsuQuote"）
  author: {
    name: string;
    role?: string;
    org?: string;
  };
  imageSlot?: React.ReactNode; // 後で実画像を差し込み可能
};

export type TestimonialCarouselProps = {
  slides: Slide[];
  className?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
};

export function TestimonialCarousel({
  slides,
  className,
  autoPlay = false,
  autoPlayInterval = 5000,
}: TestimonialCarouselProps) {
  const t = useTranslations();
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  // Carousel APIのイベントリスナー
  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    return () => {
      api.off("select", () => {});
    };
  }, [api]);

  // オートプレイ機能
  React.useEffect(() => {
    if (!api || !autoPlay) return;

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0); // ループ
      }
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [api, autoPlay, autoPlayInterval]);

  // インジケータクリックでスライド移動
  const handleIndicatorClick = React.useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  return (
    <div className={cn("relative", className)}>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {slides.map((s) => {
            return (
              <CarouselItem key={s.quoteKey}>
                <TestimonialCard
                  quote={t(s.quoteKey)}
                  author={s.author}
                  currentIndex={current}
                  totalSlides={slides.length}
                  imageSlot={s.imageSlot}
                  showNavigation={false} // Carousel側で管理
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>

        {/* ナビゲーションボタン（右下に配置） */}
        <div className="absolute right-6 bottom-6 flex items-center gap-2">
          <CarouselPrevious
            aria-label={t("testimonial.previous") || "Previous testimonial"}
            className="h-9 w-9 rounded-full border border-slate-300 bg-white/80 text-slate-700 hover:bg-white shadow-sm transition"
          />
          <CarouselNext
            aria-label={t("testimonial.next") || "Next testimonial"}
            className="h-9 w-9 rounded-full border border-slate-300 bg-white/80 text-slate-700 hover:bg-white shadow-sm transition"
          />
        </div>
      </Carousel>

      {/* インジケータ（左下に配置） */}
      <TestimonialIndicator
        currentIndex={current}
        totalSlides={slides.length}
        onClick={handleIndicatorClick}
        className="absolute left-6 bottom-6"
      />

      {/* スクリーンリーダー用のライブリージョン */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {t("testimonial.slideAnnouncement", {
          current: current + 1,
          total: slides.length,
        }) || `Slide ${current + 1} of ${slides.length}`}
      </div>
    </div>
  );
}

export default TestimonialCarousel;