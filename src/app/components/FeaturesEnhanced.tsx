"use client";
import React, { useState, useRef, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Feature {
  id: string;
  icon: React.ReactElement;
  color: string;
  bgGradient: string;
  accentGradient: string;
}

const featureData: Feature[] = [
  { 
    id: "1", 
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: "text-amber-700", 
    bgGradient: "from-amber-50 via-yellow-50 to-orange-50",
    accentGradient: "from-amber-500 to-orange-600"
  },
  { 
    id: "2", 
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    color: "text-blue-700", 
    bgGradient: "from-blue-50 via-indigo-50 to-blue-100",
    accentGradient: "from-blue-500 to-indigo-600"
  },
  { 
    id: "3", 
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: "text-purple-700", 
    bgGradient: "from-purple-50 via-pink-50 to-purple-100",
    accentGradient: "from-purple-500 to-pink-600"
  },
  { 
    id: "4", 
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: "text-emerald-700", 
    bgGradient: "from-emerald-50 via-green-50 to-teal-50",
    accentGradient: "from-emerald-500 to-teal-600"
  },
  { 
    id: "5", 
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "text-rose-700", 
    bgGradient: "from-rose-50 via-pink-50 to-red-50",
    accentGradient: "from-rose-500 to-red-600"
  },
  { 
    id: "6", 
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: "text-indigo-700", 
    bgGradient: "from-indigo-50 via-purple-50 to-indigo-100",
    accentGradient: "from-indigo-500 to-purple-600"
  },
];

export default function FeaturesEnhanced() {
  const [selectedFeature, setSelectedFeature] = useState<string>("1");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const t = useTranslations("features");
  const locale = useLocale();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section ref={sectionRef} className="py-24 bg-linear-to-b from-gray-50 via-white to-gray-50 overflow-hidden" id="features">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900">
            {t("title")}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* メイン特徴エリア */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 h-full border border-gray-200">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedFeature}
                  initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                  transition={{ 
                    duration: 0.4,
                    ease: [0.43, 0.13, 0.23, 0.96]
                  }}
                  className="h-full"
                >
                  <div className="relative h-full">
                    <div className={`bg-gray-50 rounded-2xl p-8 h-full`}>
                      <div className="space-y-8">
                        {/* アイコンとタイトル、説明文 */}
                        <div className="flex items-start gap-6">
                          <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 10 }}
                            className={`shrink-0 p-4 rounded-2xl bg-white shadow-lg`}
                          >
                            <div className={`${featureData.find(f => f.id === selectedFeature)?.color}`}>
                              {featureData.find(f => f.id === selectedFeature)?.icon}
                            </div>
                          </motion.div>
                          <div className="flex-1">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                              {t(`cards.${selectedFeature}.title`)}
                            </h3>
                            <p className="text-gray-700 text-lg leading-relaxed">
                              {t(`cards.${selectedFeature}.desc`)}
                            </p>
                          </div>
                        </div>
                        
                        {/* 横長画像 */}
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                          className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-xl"
                        >
                          <Image
                            src={`/${locale}/tactna_features/${selectedFeature}.png`}
                            alt={t(`cards.${selectedFeature}.title`)}
                            fill
                            className="object-cover object-center"
                            priority
                          />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* 特徴セレクター */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="space-y-4"
          >
            {featureData.map((feature) => (
              <motion.button
                key={feature.id}
                variants={itemVariants}
                onClick={() => setSelectedFeature(feature.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full text-left p-4 rounded-2xl transition-all duration-300 transform ${
                  selectedFeature === feature.id
                    ? "bg-white shadow-lg border-2 border-blue-500"
                    : "bg-gray-50 hover:bg-white hover:shadow-md border-2 border-transparent"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-linear-to-br ${feature.bgGradient} ${feature.color}`}>
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 text-base leading-tight">
                      {t(`cards.${feature.id}.title`).split('\n')[0]}
                    </h4>
                  </div>
                  {selectedFeature === feature.id && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "3rem" }}
                      className={`h-1 bg-linear-to-r ${feature.accentGradient} rounded-full`}
                    />
                  )}
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* 実績データセクション */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-indigo-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="text-5xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">36%</div>
                <div className="text-gray-600 font-medium">{t("stats.cost_reduction")}</div>
                <div className="mt-4 text-sm text-gray-500">{t("stats.cost_comparison")}</div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="text-5xl font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">{t("stats.deployment_period")}</div>
                <div className="text-gray-600 font-medium">{t("stats.deployment_time")}</div>
                <div className="mt-4 text-sm text-gray-500">{t("stats.deployment_desc")}</div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-r from-emerald-600 to-teal-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="text-5xl font-bold bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">24/7</div>
                <div className="text-gray-600 font-medium">{t("stats.support")}</div>
                <div className="mt-4 text-sm text-gray-500">{t("stats.support_desc")}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}