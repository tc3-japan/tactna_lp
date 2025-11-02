import { useTranslations } from "next-intl";
import ImageTextSection from "./ImageTextSection";

/**
 * FeatureList コンポーネント
 * ImageTextSectionを使用した機能紹介セクションのサンプル実装
 */
export default function FeatureList() {
  const t = useTranslations("featureList");

  const features = [
    {
      id: "1",
      imageSrc: "/features/feature1.png",
      imagePosition: "right" as const,
      sectionLabel: t("1.label"),
      title: t("1.title"),
      description: t("1.description"),
    },
    {
      id: "2",
      imageSrc: "/features/feature2.png",
      imagePosition: "left" as const,
      sectionLabel: t("2.label"),
      title: t("2.title"),
      description: t("2.description"),
    },
    {
      id: "3",
      imageSrc: "/features/feature3.png",
      imagePosition: "right" as const,
      sectionLabel: t("3.label"),
      title: t("3.title"),
      description: t("3.description"),
    },
    {
      id: "4",
      imageSrc: "/features/feature4.png",
      imagePosition: "left" as const,
      sectionLabel: t("4.label"),
      title: t("4.title"),
      description: t("4.description"),
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="space-y-8">
        {features.map((feature, index) => (
          <ImageTextSection
            key={feature.id}
            imageSrc={feature.imageSrc}
            imageAlt={`${feature.title} feature`}
            imagePosition={feature.imagePosition}
            sectionLabel={feature.sectionLabel}
            title={feature.title}
            description={feature.description}
            className={index === 0 ? "pt-0" : ""}
            containerClassName="max-w-6xl"
            titleClassName="text-gray-900"
            descriptionClassName="text-gray-600"
          />
        ))}
      </div>
    </div>
  );
}
