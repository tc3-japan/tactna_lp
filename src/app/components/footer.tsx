import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-white text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-20">
        <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 sm:gap-8 md:gap-12 lg:gap-16">
          {/* Logo and Copyright Section */}
          <Link href="/" className="inline-block mb-4 sm:mb-0">
            <Image
              src="/tactna_logo_2.png"
              alt="Tactna Logo"
              width={200}
              height={100}
              className="h-10 w-auto"
            />
          </Link>

          <div className="flex flex-wrap gap-x-6 gap-y-2 sm:gap-8 md:gap-12 lg:gap-16">
            <Link
              href="/products"
              className="text-black text-sm hover:text-blue-400 transition-colors duration-200"
            >
              {t("product")}
            </Link>

            <Link
              href="/solutions"
              className="text-black text-sm hover:text-blue-400 transition-colors duration-200"
            >
              {t("solutions")}
            </Link>

            <a
              href="https://info.tc3.co.jp/hubfs/Tactna/tactna_a4_DL%E7%94%A8.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-black hover:text-blue-400 transition-colors duration-200"
            >
              {t("resources")}
            </a>

            <Link
              href="/customers"
              className="text-black text-sm hover:text-blue-400 transition-colors duration-200"
            >
              {t("customers")}
            </Link>

            <a
              href="https://www.tc3.co.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-sm hover:text-blue-400 transition-colors duration-200"
            >
              {t("aboutUs")}
            </a>
          </div>
        </div>

        <div className="flex flex-row justify-between pt-10">
          <p className="text-sm text-gray-400 mt-4">{t("copyright")}</p>
          <div className="flex flex-wrap justify-center sm:justify-start gap-6">
            {/* <Link
              href="/privacy"
              className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200"
            >
              {t("privacyPolicy")}
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200"
            >
              {t("termsOfService")}
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
