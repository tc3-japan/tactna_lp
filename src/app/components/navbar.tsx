"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import NextLink from "next/link";
import { useTranslations } from "next-intl";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const t = useTranslations("navbar");
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
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
    }, 200); // Small delay to prevent accidental closing
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

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
                />
              </Link>
            </div>

            <div className="ml-10 flex items-center space-x-12">
              <div className="hidden md:flex md:items-center space-x-6">
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

                {/* Resources Dropdown */}
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
                        onClick={() => setIsResourcesOpen(false)}
                      >
                        {t("resources_dropdown.blog")}
                      </Link>
                      <a
                        href="https://info.tc3.co.jp/hubfs/Tactna/tactna_a4_DL%E7%94%A8.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        onClick={() => setIsResourcesOpen(false)}
                      >
                        {t("resources_dropdown.download_materials")}
                      </a>
                      <a
                        href="https://tc3-japan.github.io/prd-hammerhead/public/api/for_app_v1/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      >
                        {t("resources_dropdown.api_reference")}
                      </a>
                    </div>
                  </div>
                </div>

                {/* <Link
                  href="/customers"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2"
                >
                  {t("customers")}
                </Link> */}
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
          </div>
        </div>
      </nav>
    </>
  );
}
