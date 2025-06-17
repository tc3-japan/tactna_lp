"use client";

import ReactPlayer from "react-player";
import React, { useEffect, useState, useRef } from "react";
import { useTranslations, useLocale } from "next-intl";

export default function VideoPlayer() {
  const [isClient, setIsClient] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);
  const t = useTranslations("video");
  const locale = useLocale();
  const videoUrl =
    locale === "ja"
      ? "https://youtu.be/IfQyOyljmUc"
      : "https://youtu.be/E0Zj5sAErfs";

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsPlaying(true);
        }
      },
      { threshold: 0.5 } // 50%以上見えたら再生
    );
    const target = playerRef.current;

    if (target) {
      observer.observe(target);
    }
    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [isPlaying]);

  return (
    <div className="max-w-5xl mx-auto px-4 pt-12 md:pb-60">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600 mb-16">
        {t("title")}
      </h2>
      <div ref={playerRef} className="relative w-full aspect-video">
        {isClient ? (
          <ReactPlayer
            url={videoUrl}
            playing={isPlaying}
            controls={false}
            width="100%"
            muted={true}
            height="100%"
            config={{
              youtube: { playerVars: { controls: 0, autoplay: 1 } }, // YouTubeのコントロールバー非表示
            }}
            wrapper={({ children }) => (
              <div className="absolute top-0 left-0 w-full h-full">
                {children}
              </div>
            )}
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
