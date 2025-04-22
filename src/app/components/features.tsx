"use client";
import React, { useState } from "react";
import FeatureCard from "./FeatureCard";
import { useTranslations } from "next-intl";

export default function Features() {
  const [showMore, setShowMore] = useState(false);
  const t = useTranslations("features");

  return (
    <section className="py-20 bg-gray-50" id="features">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600 mb-16">
          {t("title")}
        </h2>
        <div className="space-y-10">
          {[1, 2, 3].map((index) => (
            <FeatureCard
              key={index}
              index={index.toString()}
              isReverse={index % 2 !== 0}
            />
          ))}
          {showMore &&
            [4, 5, 6].map((index) => (
              <FeatureCard
                key={index}
                index={index.toString()}
                isReverse={index % 2 !== 0}
              />
            ))}
        </div>
        {!showMore && (
          <div className="mt-8 flex justify-center pt-10">
            <button
              onClick={() => setShowMore(true)}
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
            >
              Read More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
