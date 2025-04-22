import Image from "next/image";
import LogoMarquee from "./logo_marquee";
import { useTranslations, useLocale } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  return (
    <div className="overflow-x-hidden pt-20 md:pt-16 md:h-screen flex flex-col">
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 lg:px-8">
          {/* 左側の説明エリア */}
          <div className="max-w-5xl text-center md:text-left md:pl-12">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold pb-4 text-blue-700">
              {t("catchcopy")}
            </h1>
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold">
              {t("title1")}
              <br />
              {t("title2")}
            </h1>
            <p className="text-sm sm:text-base md:text-lg font-bold mt-4 text-gray-700">
              {t("desc")}
            </p>
            <ul className="text-sm sm:text-base md:text-lg  list-disc font-bold list-inside mt-4 text-gray-700">
              <li>{t("feature1")}</li>
              <li>{t("feature2")}</li>
              <li>{t("feature3")}</li>
              <li>{t("feature4")}</li>
            </ul>
          </div>

          {/* 右側の画像エリア */}
          <div className="max-w-3xl  flex justify-center mt-8 md:mt-0">
            <Image
              src={`/${locale}/hero.png`}
              alt="hero"
              width={1200}
              height={425}
              quality={75}
              sizes="100vw"
              className="object-contain h-auto"
            />
          </div>
        </div>
      </div>

      {/* お客様ロゴエリア（最下部） */}
      <div className="w-full mt-auto text-center py-8">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
          {t("customers")}
        </h2>
        <LogoMarquee />
      </div>
    </div>
  );
}
