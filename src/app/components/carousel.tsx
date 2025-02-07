"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const features = [
  {
    title: "B2Bにも対応した、業界標準の認証認可機能の実装",
    description:
      "Tactnaは様々なIDaaSと連携して動作可能。​求められるセキュリティ要件などによって、利用者に最適なIDaaSを活用する事が可能です。様々なIDaaSの仕様理解のためにドキュメントを確認したりする必要はありません。また、実装検討に労力がかかりがちなB2B向けサービスに必要となる「組織」による権限管理などの実装も対応可能です。",
    image_path: "/laptop.png",
  },
  {
    title: "B2Bにも対応した、業界標準の認証認可機能の実装",
    description:
      "Tactnaは様々なIDaaSと連携して動作可能。​求められるセキュリティ要件などによって、利用者に最適なIDaaSを活用する事が可能です。様々なIDaaSの仕様理解のためにドキュメントを確認したりする必要はありません。また、実装検討に労力がかかりがちなB2B向けサービスに必要となる「組織」による権限管理などの実装も対応可能です。",
    image_path: "/laptop.png",
  },
];

export default function FeatureCarousel() {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-gray-100 py-8 sm:py-10 md:py-12 lg:py-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        Tactnaの特徴
      </h1>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[Autoplay({ delay: 5000 })]}
        className="w-full max-w-md sm:max-w-lg md:max-w-4xl lg:max-w-6xl p-10"
      >
        <div className="flex flex-col w-full items-center justify-center">
          <CarouselContent>
            {features.map((feature, index) => (
              <CarouselItem key={index}>
                <div className="p-2 sm:p-4 md:p-6 lg:p-8">
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 text-center">
                      <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
                        {feature.title}
                      </span>
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 mt-2">
                        {feature.description}
                      </p>
                      <Image
                        src={feature.image_path}
                        alt="Feature Image"
                        width={600}
                        height={225}
                        quality={75}
                        sizes="100vw"
                        className="object-contain w-full sm:w-4/5 md:w-3/4 lg:w-2/3 mt-4"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center space-x-8 w-full mt-4">
            <CarouselPrevious className="px-8" />
            <CarouselNext className="px-8" />
          </div>
        </div>
      </Carousel>
    </div>
  );
}
