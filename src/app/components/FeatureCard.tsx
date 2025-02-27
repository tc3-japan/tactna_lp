"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface FeatureCardProps {
  isReverse: boolean;
  title: string;
  description: string;
  filename: string;
}

export default function FeatureCard({
  title,
  description,
  filename,
  isReverse,
}: FeatureCardProps) {
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
          src={filename}
          alt={`Feature: ${title}`}
          width={600}
          height={400}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0"></div>
      </div>
      <div className="md:w-1/2 p-10 flex flex-col justify-center">
        <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600 mb-6">
          {title.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </h3>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          {description}
        </p>
      </div>
    </article>
  );
}
