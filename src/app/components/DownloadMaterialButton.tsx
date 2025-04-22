"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";

export default function DownloadMaterialButton() {
  const [showDownload, setShowDownload] = useState(false);
  const locale = useLocale();

  useEffect(() => {
    const handleScroll = () => {
      setShowDownload(
        window.pageYOffset > 0 &&
          document.documentElement.scrollHeight > window.innerHeight
      );
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showDownload && locale == "ja" && (
        <motion.a
          href="https://info.tc3.co.jp/hubfs/Tactna/tactna_a4_DL%E7%94%A8.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-3 right-3 md:bottom-5 md:right-5 flex items-center gap-1 md:gap-2 px-3 py-2 md:px-5 md:py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full shadow-lg md:shadow-2xl border border-white hover:shadow-md md:hover:shadow-xl text-sm md:text-lg"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          whileHover={{
            scale: 1.15,
            transition: { type: "spring", stiffness: 300, damping: 20 },
          }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            src="/download_icon.svg"
            alt="Download"
            width={24}
            height={24}
          />
          <span className="font-semibold text-lg">資料をダウンロード</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
