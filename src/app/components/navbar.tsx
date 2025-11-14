"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import NextLink from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const t = useTranslations("navbar");
  const locale = useLocale();
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsResourcesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsResourcesOpen(false);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsResourcesOpen(false);
  };

  return (
    <>
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between min-h-12 items-center">
            <div className="py-2 md:py-4">
              <Link href="/">
                <Image
                  src="/tactna_logo_2.png"
                  alt="Tactna Logo"
                  width={200}
                  height={100}
                  className="object-contain max-w-[120px] md:max-w-40 h-auto cursor-pointer"
                  onClick={isMobileMenuOpen ? closeMobileMenu : undefined}
                />
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-12">
              <div className="flex items-center space-x-6">
                <NextLink
                  href="/products"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2"
                >
                  {t("products")}
                </NextLink>
                <NextLink
                  href="/solutions"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2"
                >
                  {t("solutions")}
                </NextLink>

                <div
                  className="relative"
                  ref={dropdownRef}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 inline-flex items-center"
                  >
                    {t("resources")}
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                        isResourcesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`absolute top-full left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-gray-200 transition-all duration-200 origin-top transform ${
                      isResourcesOpen
                        ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
                    }`}
                  >
                    <div className="py-1">
                      <Link
                        href="/blog"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        onClick={() => setIsResourcesOpen(false)} // PCドロップダウンを閉じる
                      >
                        {t("resources_dropdown.blog")}
                      </Link>
                      {locale === "ja" && (
                        <a
                          href="https://info.tc3.co.jp/hubfs/Tactna/tactna_a4_DL%E7%94%A8.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          onClick={closeMobileMenu}
                        >
                          {t("resources_dropdown.download_materials")}
                        </a>
                      )}
                      <a
                        href="https://tc3-japan.github.io/prd-hammerhead/public/api/for_app_v1/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        onClick={() => setIsResourcesOpen(false)}
                      >
                        {t("resources_dropdown.api_reference")}
                      </a>
                    </div>
                  </div>
                </div>

                <Link
                  href="/blog"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2"
                >
                  {t("blog")}
                </Link>
              </div>
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
              <Link href="/#inquiry">{t("contact")}</Link>
            </Button>

            {/* 🔽 モバイル用ハンバーガーボタン */}
            {/* md:hidden でモバイル (md未満) のみ表示 */}
            <div className="md:hidden">
              <button
                onClick={() => {
                  const newState = !isMobileMenuOpen;
                  setIsMobileMenuOpen(newState);
                  if (!newState) {
                    // メニューを閉じるとき
                    setIsResourcesOpen(false); // Resourcesアコーディオンも閉じる
                  }
                }}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* 🔽 モバイルメニュー本体 */}
        {/* md:hidden でモバイルのみ。isMobileMenuOpen で表示/非表示を切り替え */}
        <div
          className={`md:hidden ${
            isMobileMenuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-white shadow-lg z-40`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NextLink
              href="/products"
              className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              onClick={closeMobileMenu} // リンククリックでメニューを閉じる
            >
              {t("products")}
            </NextLink>
            <NextLink
              href="/solutions"
              className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              onClick={closeMobileMenu}
            >
              {t("solutions")}
            </NextLink>

            {/* モバイル用 Resources (アコーディオン) */}
            <div>
              <button
                onClick={() => setIsResourcesOpen(!isResourcesOpen)} // 🔽 クリックでトグル
                className="w-full text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between items-center px-3 py-2 rounded-md text-base font-medium"
              >
                {t("resources")}
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    isResourcesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {/* モバイル用ドロップダウンコンテンツ */}
              <div className={`${isResourcesOpen ? "block" : "hidden"} pl-4`}>
                <Link
                  href="/blog"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  onClick={closeMobileMenu}
                >
                  {t("resources_dropdown.blog")}
                </Link>
                {locale === "ja" && (
                  <a
                    href="https://info.tc3.co.jp/hubfs/Tactna/tactna_a4_DL%E7%94%A8.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    onClick={closeMobileMenu}
                  >
                    {t("resources_dropdown.download_materials")}
                  </a>
                )}
                <a
                  href="https://tc3-japan.github.io/prd-hammerhead/public/api/for_app_v1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  onClick={closeMobileMenu}
                >
                  {t("resources_dropdown.api_reference")}
                </a>
              </div>
            </div>

            <Link
              href="/blog"
              className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              onClick={closeMobileMenu}
            >
              {t("blog")}
            </Link>
          </div>
          {/* モバイル用CTAボタン */}
          <div className="px-4 py-3 border-t border-gray-200">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
              <Link href="/#inquiry" onClick={closeMobileMenu}>
                {t("contact")}
              </Link>
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
}
