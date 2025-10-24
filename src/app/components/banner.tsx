"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Banner: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const t = useTranslations("banner");
  useEffect(() => {}, [visible]);

  const handleCloseClick = () => {
    setVisible(false);
  };
  console.log(visible);

  if (!visible) return null;

  const handleBannerClick = () => {
    window.open(
      "https://info.tc3.co.jp/saas-id-management-guide-book",
      "_blank"
    );
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white rounded-lg shadow-lg flex items-center">
      <button
        className="absolute top-0 right-0 mt-1 mr-1 bg-red-500 text-white p-1 rounded-full hover:bg-red-700 focus:outline-hidden z-10"
        onClick={handleCloseClick}
        aria-label={t("close")}
        type="button"
      >
        &#x2715;
      </button>
      <div
        className="cursor-pointer relative w-[192px] h-[108px] sm:w-[320px] sm:h-[180px]"
        onClick={handleBannerClick}
      >
        <Image
          src="/whitepaper.png"
          alt="white paper"
          fill
          className="object-contain rounded-md"
          priority
        />
      </div>
    </div>
  );
};

export default Banner;
