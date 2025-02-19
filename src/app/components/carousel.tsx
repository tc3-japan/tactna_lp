"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const features = [
  {
    title: "",
    description: "",
    image_path: "/tactna_features/1.png",
  },
  {
    title: "",
    description: "",
    image_path: "/tactna_features/2.png",
  },
  {
    title: "",
    description: "",
    image_path: "/tactna_features/3.png",
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
        plugins={[Autoplay({ delay: 3000, stopOnMouseEnter: true })]}
        className="w-full sm:max-w-3xl md:max-w-4xl lg:max-w-6xl p-10"
      >
        <div className="flex flex-col w-full items-center justify-center">
          <CarouselContent>
            {features.map((feature, index) => (
              <CarouselItem key={index}>
                <div className="flex flex-col items-center justify-center sm:p-4 md:p-6 lg:p-8">
                  <Image
                    src={feature.image_path}
                    alt="Feature Image"
                    width={800}
                    height={225}
                    quality={75}
                    sizes="100vw"
                    className="object-contain w-full "
                  />
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
