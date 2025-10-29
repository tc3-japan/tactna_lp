"use client";

import * as React from "react";
import { TestimonialCarousel } from "./TestimonialCarousel";
import { useTranslations } from "next-intl";

/**
 * CaseCarousel - お客様事例カルーセルのサンプル実装
 * 実際の企業事例データを使用したTestimonialCarouselの使用例
 */
export function CaseCarousel() {
  const t = useTranslations("case");

  // 画像スロット用のモックアップコンポーネント
  const MSADImageSlot = (
    <div className="relative w-full h-full rounded-lg overflow-hidden bg-linear-to-br from-blue-50 to-indigo-100">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="mb-4 inline-flex items-center justify-center w-20 h-20 rounded-xl bg-white shadow-lg">
            <span className="text-3xl font-bold text-blue-600">MS</span>
          </div>
          <p className="text-sm text-gray-600 font-medium">MS&amp;AD</p>
          <p className="text-xs text-gray-500 mt-1">
            Digital Innovation Platform
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-linear-to-t from-white/20 to-transparent" />
    </div>
  );

  const GSearchImageSlot = (
    <div className="relative w-full h-full rounded-lg overflow-hidden bg-linear-to-br from-emerald-50 to-green-100">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="mb-4 inline-flex items-center justify-center w-20 h-20 rounded-xl bg-white shadow-lg">
            <span className="text-3xl font-bold text-emerald-600">G</span>
          </div>
          <p className="text-sm text-gray-600 font-medium">G-Search</p>
          <p className="text-xs text-gray-500 mt-1">
            Data Utilization Platform
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-linear-to-t from-white/20 to-transparent" />
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
        autoPlayInterval={5000}
        className="mb-12"
      />
    </div>
  );
}

export default CaseCarousel;
