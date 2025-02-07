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
    <div className="flex flex-col items-center justify-center bg-gray-100 py-8">
      <h1 className="text-4xl font-bold mb-4">Tactnaの特徴</h1>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[Autoplay({ delay: 5000 })]}
        className="w-full max-w-4xl"
      >
        <CarouselContent>
          {features.map((feature, index) => (
            <CarouselItem key={index} className="">
              <div className="p-2">
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                    <span className="text-xl font-bold">{feature.title}</span>
                    <p className="text-sm text-gray-500 mt-2">
                      {feature.description}
                    </p>
                    <div className="mt-4">
                      <Image
                        src={feature.image_path}
                        alt="Feature Image"
                        width={600}
                        height={225}
                        quality={75}
                        sizes="100vw"
                        className="object-contain max-w-[600px] h-auto"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
