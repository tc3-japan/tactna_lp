"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations("navbar");
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
                  className="object-contain max-w-[120px] md:max-w-[160px] h-auto cursor-pointer"
                />
              </Link>
            </div>

            <div className="ml-10 flex items-center space-x-4">
              <div className="hidden md:block">
                <a
                  href="/products"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2"
                >
                  {t("products")}
                </a>
                <a
                  href="/solutions"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2"
                >
                  {t("solutions")}
                </a>
                <Link
                  href="/#features"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2"
                >
                  {t("features")}
                </Link>
                <Link
                  href="/#feature-comparison"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2"
                >
                  {t("compare")}
                </Link>
                <Link
                  href="/blog"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2"
                >
                  {t("blog")}
                </Link>
                <a
                  href="https://info.tc3.co.jp/hubfs/Tactna/tactna_a4_DL%E7%94%A8.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2"
                >
                  {t("download_material")}
                </a>
              </div>
              <Button className="bg-blue-600">
                <Link href="/#inquiry">{t("contact")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
