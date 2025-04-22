"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface FeatureCardProps {
  isReverse: boolean;
  index: string;
}

export default function FeatureCard({ index, isReverse }: FeatureCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations("features.cards." + index);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={cardRef}
      role="article"
      className={`bg-white rounded-2xl overflow-hidden shadow-xl transform transition-all duration-1000 
      ${
        isVisible
          ? "opacity-100 translate-y-0 rotate-0 hover:shadow-2xl hover:scale-105"
          : "opacity-0 translate-y-10 rotate-3"
      } 
      flex flex-col md:flex-row ${isReverse ? "md:flex-row-reverse" : ""}`}
    >
      <div className="md:w-1/2 relative">
        <Image
          src={`/tactna_features/${index}.png`}
          alt={`Feature: ${t("title")}`}
          width={600}
          height={400}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0"></div>
      </div>
      <div className="md:w-1/2 p-10 flex flex-col justify-center">
        <h3 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600 mb-8 py-2">
          {t("title")}
        </h3>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          {t("desc")}
        </p>
      </div>
    </article>
  );
}
