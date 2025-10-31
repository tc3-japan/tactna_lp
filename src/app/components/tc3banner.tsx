"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

/**
 * TC3Banner - フルワイドバナーコンポーネント
 * グラデーション背景画像の上にタイトル、説明、CTAボタンを配置
 */
export function TC3Banner() {
  const t = useTranslations("tc3banner");

  return (
    <div className="relative w-full overflow-hidden">
      {/* 背景画像 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/others/gradient.png"
          alt="Gradient background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* オーバーレイ（テキストの可読性向上） */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* コンテンツ */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-32">
        <div className="max-w-4xl text-center">
          {/* メインタイトル */}
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {t("title")}
          </h2>

          {/* 説明文 */}
          <p className="mt-4 text-lg text-white/90 sm:mt-6 sm:text-xl md:text-2xl">
            {t("description")}
          </p>

          {/* CTAボタン */}
          <div className="mt-8 sm:mt-10">
            <Link
              href="#inquiry"
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-blue-700 bg-white border border-transparent rounded-md shadow-lg hover:bg-gray-300 transition-all duration-500 hover:shadow-xl sm:px-10 sm:py-4 sm:text-lg"
            >
              {t("cta")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TC3Banner;
