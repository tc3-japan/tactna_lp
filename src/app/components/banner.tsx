"use client";
import React, { useState, useEffect, use } from "react";
import Image from "next/image";

const Banner: React.FC = () => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {}, [visible]);

  const handleCloseClick = () => {
    setVisible(false);
  };
  console.log(visible);

  if (!visible) return null;

  const handleBannerClick = () => {
    window.open("https://dummy.com", "_blank");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white rounded-lg shadow-lg flex items-center">
      <button
        className="absolute top-0 right-0 mt-1 mr-1 bg-red-500 text-white p-1 rounded-full hover:bg-red-700 focus:outline-none z-10"
        onClick={handleCloseClick}
        aria-label="閉じる"
        type="button"
      >
        &#x2715;
      </button>
      <div className="cursor-pointer" onClick={handleBannerClick}>
        <Image
          src="/whitepaper.png"
          alt="white paper"
          width={300}
          height={300}
          className="block max-w-full h-auto rounded-md"
          priority
        />
      </div>
    </div>
  );
};

export default Banner;
