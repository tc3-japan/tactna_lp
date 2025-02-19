import React from "react";
import FeatureCard from "./FeatureCard";

const features = [1, 2, 3, 4, 5, 6];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600 mb-16">
          Discover Our Product Features
        </h2>
        <div className="space-y-20">
          {features.map((num, index) => (
            <FeatureCard key={num} num={num} isReverse={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
