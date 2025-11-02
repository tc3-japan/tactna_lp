import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageTextSectionProps {
  // 画像関連
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  imageWidth?: number;
  imageHeight?: number;

  // テキスト関連
  sectionLabel?: string;
  title: string;
  description: string;

  // スタイル関連（オプション）
  className?: string;
  containerClassName?: string;
  textAlign?: "left" | "center" | "right";
  sectionLabelClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  imageClassName?: string;
}

export default function ImageTextSection({
  // 画像関連
  imageSrc,
  imageAlt,
  imagePosition = "left",
  imageWidth = 500,
  imageHeight = 300,

  // テキスト関連
  sectionLabel,
  title,
  description,

  // スタイル関連
  className,
  containerClassName,
  textAlign = "left",
  sectionLabelClassName,
  titleClassName,
  descriptionClassName,
  imageClassName,
}: ImageTextSectionProps) {
  // 画像が右側の場合、flex-row-reverseを使用
  const isReverse = imagePosition === "right";

  // テキストの配置クラス
  const textAlignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[textAlign];

  return (
    <section className={cn("py-12 px-4 sm:px-6 lg:px-8 bg-white", className)}>
      <div className={cn("max-w-7xl mx-auto", containerClassName)}>
        <div
          className={cn(
            "flex flex-col md:flex-row",
            isReverse && "md:flex-row-reverse"
          )}
        >
          {/* 画像セクション - モバイルでは2番目に表示 */}
          <div className="order-2 md:order-0 md:w-1/2 relative h-64 md:h-auto">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={imageWidth}
              height={imageHeight}
              className={cn("object-cover w-full h-full", imageClassName)}
              priority={false}
            />
          </div>

          {/* テキストセクション - モバイルでは1番目に表示 */}
          <div
            className={cn(
              "order-1 md:order-0 md:w-1/2 p-6 sm:p-8 md:p-10 lg:p-12",
              "flex flex-col justify-center",
              textAlignClass
            )}
          >
            {/* セクションラベル（オプション） */}
            {sectionLabel && (
              <div
                className={cn(
                  "text-lg font-bold tracking-wider mb-2 flex items-center",
                  sectionLabelClassName
                )}
              >
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 shrink-0" />
                {sectionLabel}
              </div>
            )}

            {/* タイトル */}
            <h2
              className={cn(
                "text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6",
                titleClassName
              )}
            >
              {title}
            </h2>

            {/* 説明文 */}
            <p
              className={cn(
                "text-base sm:text-lg text-gray-600 leading-relaxed",
                descriptionClassName
              )}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
