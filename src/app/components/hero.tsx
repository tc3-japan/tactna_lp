import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");
  const tNav = useTranslations("navbar");

  return (
    <div className="overflow-x-hidden pt-20 md:pt-16">
      <div className="flex items-center justify-center py-20">
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
          {/* タイトル */}
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
            {t.rich("title", {
              br: () => <br />,
            })}
          </h1>

          {/* 説明文 */}
          <p className="text-base sm:text-lg md:text-xl mt-6 max-w-3xl text-gray-700">
            {t.rich("desc", {
              br: () => <br />,
            })}
          </p>

          {/* Contact Salesボタン */}
          <div className="mt-8">
            <Link
              href="#inquiry"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              {tNav("contact")}
            </Link>
          </div>

          {/* 画像 */}
          <div className="mt-12 w-full max-w-5xl">
            <Image
              src={`/hero/screen.png`}
              alt="hero"
              width={1200}
              height={425}
              quality={75}
              sizes="100vw"
              className="object-contain h-auto w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
