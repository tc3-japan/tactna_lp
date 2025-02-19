"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface FeatureCardProps {
  num: number;
  isReverse: boolean;
}

export default function FeatureCard({ num, isReverse }: FeatureCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
          src={`/tactna_features/${num}.png`}
          alt={`Feature ${num} image`}
          width={600}
          height={400}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-10"></div>
      </div>
      <div className="md:w-1/2 p-10 flex flex-col justify-center">
        <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600 mb-6">
          Feature {num}
        </h3>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          This is an example description for Feature {num}. It highlights the
          elegance and benefits of our design with clear, concise, and engaging
          details that captivate and inform the user.
        </p>
        <a
          href="#"
          aria-label={`Learn more about Feature ${num}`}
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-xl font-semibold transition duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:shadow-lg hover:scale-105 flex items-center space-x-2"
        >
          <span>Learn More</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </article>
  );
}
