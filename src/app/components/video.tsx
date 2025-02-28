"use client";

import ReactPlayer from "react-player";
import React, { useEffect, useState, useRef } from "react";

export default function VideoPlayer() {
  const [isClient, setIsClient] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);

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
    console.log(isPlaying);
    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [isPlaying]);

  return (
    <div className="max-w-5xl mx-auto px-4 pt-12 md:pb-60">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600 mb-16">
        Tactnaデモ動画
      </h2>
      <div ref={playerRef} className="relative w-full aspect-video">
        {isClient ? (
          <ReactPlayer
            url="https://www.youtube.com/watch?v=9uCoQdjKpck"
            playing={isPlaying}
            controls={false}
            width="100%"
            volume={0.2}
            height="100%"
            config={{
              youtube: { playerVars: { controls: 0 } }, // YouTubeのコントロールバー非表示
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
