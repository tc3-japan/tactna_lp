"use client";

import * as React from "react";
import Image from "next/image";
import { TestimonialCarousel } from "./TestimonialCarousel";
import { useTranslations } from "next-intl";

/**
 * CaseCarousel - お客様事例カルーセルのサンプル実装
 * 実際の企業事例データを使用したTestimonialCarouselの使用例
 */
export function CaseCarousel() {
  const t = useTranslations("case");

  // 画像スロット - MS&AD
  const MSADImageSlot = (
    <div className="relative w-full h-full rounded-lg overflow-hidden">
      <Image
        src="/client_logos/msad.png"
        alt="G-Search Data Utilization Platform"
        width={800}
        height={500}
        className="w-full h-full object-contain"
      />
    </div>
  );

  // 画像スロット - G-Search（実際の画像を使用）
  const GSearchImageSlot = (
    <div className="relative w-full h-full rounded-lg overflow-hidden">
      <Image
        src="/case/gsearch.png"
        alt="G-Search Data Utilization Platform"
        width={800}
        height={500}
        className="w-full h-full object-contain"
      />
    </div>
  );
  // スライドデータ
  const slides = [
    {
      quoteKey: "case.gsearch.quote",
      author: {
        name: t("gsearch.person"),
        role: t("gsearch.department"),
        org: t("gsearch.company"),
      },
      imageSlot: GSearchImageSlot,
    },
    {
      quoteKey: "case.msad.quote",
      author: {
        name: t("msad.person"),
        role: t("msad.department"),
        org: t("msad.company"),
      },
      imageSlot: MSADImageSlot,
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("title")}</h2>
      </div>

      <TestimonialCarousel
        slides={slides}
        autoPlay={false}
        autoPlayInterval={10000}
        className="mb-12"
      />
    </div>
  );
}

export default CaseCarousel;
