"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { TestimonialIndicator } from "./TestimonialIndicator";

type Author = {
  name: string;
  role?: string;
  org?: string;
};

export type TestimonialCardProps = {
  quote: React.ReactNode; // i18n 済みテキストを親から受け取る
  author: Author;
  currentIndex?: number; // 現在のスライドインデックス
  totalSlides?: number; // 総スライド数
  imageSlot?: React.ReactNode; // 後で Next/Image 等に差し替え
  showNavigation?: boolean; // ナビゲーションを表示するか（Carousel側で管理する場合はfalse）
  onPrev?: () => void; // スタンドアロン使用時のナビゲーション
  onNext?: () => void;
  onIndicatorClick?: (index: number) => void; // インジケータクリックハンドラ
  className?: string;
};

export function TestimonialCard({
  quote,
  author,
  currentIndex,
  totalSlides,
  imageSlot,
  showNavigation = true,
  onPrev,
  onNext,
  onIndicatorClick,
  className,
}: TestimonialCardProps) {
  return (
    <section
      className={cn(
        "relative rounded-2xl bg-[#EAF2FF] p-6 md:p-8 lg:p-10 shadow-sm",
        className
      )}
      aria-label="Customer testimonial"
    >
      <div className="grid grid-cols-1 items-center gap-6 md:gap-8 md:grid-cols-2">
        {/* 左: 画像枠（プレースホルダー） */}
        <div className="w-full">
          {imageSlot ? (
            imageSlot
          ) : (
            <div
              aria-label="Device mockup placeholder"
              className="relative mx-auto w-full max-w-[520px] rounded-xl border border-slate-200 bg-white/80 shadow-sm overflow-hidden"
              style={{ aspectRatio: "16 / 10" }}
            >
              {/* 内側の縁取りで"デバイス枠"感 */}
              <div className="absolute inset-2 rounded-lg border border-slate-300/50 bg-gradient-to-br from-slate-50 to-white" />

              {/* デバイスのトップバー（装飾） */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-slate-100 border-b border-slate-200 flex items-center px-3 gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400/50" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/50" />
                <span className="w-3 h-3 rounded-full bg-green-400/50" />
              </div>

              {/* プレースホルダーテキスト */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs text-slate-400 font-medium">
                  Image placeholder
                </span>
              </div>
            </div>
          )}
        </div>

        {/* 右: テキスト */}
        <div className="relative">
          {/* 装飾の引用符 */}
          <div
            aria-hidden="true"
            className="absolute -top-2 -left-2 text-7xl md:text-8xl text-slate-300/40 font-serif select-none leading-none"
          >
            &ldquo;
          </div>

          <blockquote className="relative z-10 pt-4 md:pt-6 text-slate-700 text-base md:text-lg leading-relaxed">
            {quote}
          </blockquote>

          <footer className="mt-6 md:mt-8">
            <div className="font-bold text-lg md:text-lg text-slate-900">
              {author.name}
            </div>
            {(author.role || author.org) && (
              <div className="mt-1 text-sm md:text-base text-slate-600">
                <cite className="not-italic">
                  {author.role}
                  {author.role && author.org ? <br /> : ""}
                  {author.org}
                </cite>
              </div>
            )}
          </footer>
        </div>
      </div>

      {/* インジケータとナビゲーション（showNavigationがtrueの場合のみ） */}
      {showNavigation && (
        <>
          {/* 左下: インジケータ */}
          {currentIndex !== undefined && totalSlides !== undefined && (
            <TestimonialIndicator
              currentIndex={currentIndex}
              totalSlides={totalSlides}
              onClick={onIndicatorClick}
              className="absolute left-6 md:left-8 bottom-6 md:bottom-8"
            />
          )}

          {/* 右下: 矢印ナビ（ハンドラが供給された場合のみ表示） */}
          {(onPrev || onNext) && (
            <div className="absolute right-6 md:right-8 bottom-6 md:bottom-8 flex items-center gap-2">
              {onPrev && (
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  onClick={onPrev}
                  className={cn(
                    "grid h-9 w-9 place-items-center rounded-full",
                    "border border-slate-300 bg-white/90 text-slate-700",
                    "hover:bg-white hover:border-slate-400",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
                    "shadow-sm transition-all duration-200"
                  )}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="transform -translate-x-0.5"
                  >
                    <path
                      d="M15 6l-6 6 6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              )}
              {onNext && (
                <button
                  type="button"
                  aria-label="Next testimonial"
                  onClick={onNext}
                  className={cn(
                    "grid h-9 w-9 place-items-center rounded-full",
                    "border border-slate-300 bg-white/90 text-slate-700",
                    "hover:bg-white hover:border-slate-400",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
                    "shadow-sm transition-all duration-200"
                  )}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="transform translate-x-0.5"
                  >
                    <path
                      d="M9 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              )}
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default TestimonialCard;
