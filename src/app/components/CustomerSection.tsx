import LogoMarquee from "./logo_marquee";
import { useTranslations } from "next-intl";

export default function CustomerSection() {
  const t = useTranslations("hero");

  return (
    <div className="w-full text-center py-8">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
        {t("customers")}
      </h2>
      <LogoMarquee />
    </div>
  );
}