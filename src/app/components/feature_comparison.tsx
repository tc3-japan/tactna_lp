"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState } from "react";

type MarkType = "check" | "triangle" | "";

interface Feature {
  category: string;
  name: string;
  scratch: MarkType;
  idaas: MarkType;
  tactna: MarkType;
}

const features: Feature[] = [
  {
    category: "auth_id",
    name: "unit_user",
    scratch: "triangle",
    idaas: "check",
    tactna: "check",
  },
  {
    category: "auth_id",
    name: "unit_organization",
    scratch: "triangle",
    idaas: "",
    tactna: "check",
  },
  {
    category: "auth_id",
    name: "multi_service",
    scratch: "triangle",
    idaas: "",
    tactna: "check",
  },
  {
    category: "portal_ui",
    name: "ui_toc",
    scratch: "triangle",
    idaas: "",
    tactna: "check",
  },
  {
    category: "portal_ui",
    name: "ui_tob",
    scratch: "triangle",
    idaas: "",
    tactna: "check",
  },
  {
    category: "portal_ui",
    name: "ui_custom",
    scratch: "triangle",
    idaas: "",
    tactna: "check",
  },
  {
    category: "customizing",
    name: "billing",
    scratch: "triangle",
    idaas: "",
    tactna: "check",
  },
  {
    category: "customizing",
    name: "contract",
    scratch: "triangle",
    idaas: "",
    tactna: "check",
  },
  {
    category: "customizing",
    name: "system_integration",
    scratch: "triangle",
    idaas: "",
    tactna: "check",
  },
];

export default function FeatureComparison() {
  const t = useTranslations("compare");
  const tDetail = useTranslations("compare_detail");
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  // Group features by category
  const groupedFeatures = features.reduce((acc, feature) => {
    if (!acc[feature.category]) {
      acc[feature.category] = [];
    }
    acc[feature.category].push(feature);
    return acc;
  }, {} as Record<string, Feature[]>);

  // Calculate statistics
  const tactnaCount = features.filter((f) => f.tactna === "check").length;
  const idaasCount = features.filter((f) => f.idaas === "check").length;

  return (
    <div
      className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white"
      id="feature-comparison"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{t("title")}</h1>
          <p className="text-gray-600 text-lg">{tDetail("subtitle")}</p>
        </motion.div>

        {/* Visual Comparison Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* Tactna Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
              {tDetail("recommended")}
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-500 h-full">
              <div className="flex justify-center mb-6">
                <Image
                  src="/tactna_logo_2.png"
                  alt="Tactna"
                  width={160}
                  height={40}
                  className="object-contain"
                />
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    {tDetail("coverage_rate")}
                  </span>
                  <span className="text-sm font-bold text-blue-600">100%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full"
                  />
                </div>
              </div>

              {/* Key Benefits */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-xs">✓</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    {tDetail("tactna_benefits.all_features")}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-xs">✓</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    {tDetail("tactna_benefits.reduce_initial_cost")}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-xs">✓</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    {tDetail("tactna_benefits.five_year_cost_reduction")}
                  </p>
                </div>
              </div>

              {/* Feature Count */}
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  {tactnaCount}/9
                </div>
                <div className="text-sm text-blue-700">
                  {tDetail("features_implemented")}
                </div>
              </div>
            </div>
          </motion.div>

          {/* IDaaS Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8 h-full"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">IDaaS</h3>
              <p className="text-sm text-gray-500 mt-1">
                {tDetail("general_idaas")}
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">
                  {tDetail("coverage_rate")}
                </span>
                <span className="text-sm font-bold text-gray-600">
                  {Math.round((idaasCount / 9) * 100)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(idaasCount / 9) * 100}%` }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="bg-green-500 h-3 rounded-full"
                />
              </div>
            </div>

            {/* Limitations */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-gray-400 text-xs">－</span>
                </div>
                <p className="text-sm text-gray-600">
                  {tDetail("idaas_limitations.basic_auth_only")}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-gray-400 text-xs">－</span>
                </div>
                <p className="text-sm text-gray-600">
                  {tDetail("idaas_limitations.limited_b2b")}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-gray-400 text-xs">－</span>
                </div>
                <p className="text-sm text-gray-600">
                  {tDetail("idaas_limitations.low_customization")}
                </p>
              </div>
            </div>

            {/* Feature Count */}
            <div className="bg-gray-100 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-gray-600 mb-1">
                {idaasCount}/9
              </div>
              <div className="text-sm text-gray-600">
                {tDetail("features_implemented")}
              </div>
            </div>
          </motion.div>

          {/* Scratch Development Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl shadow-lg p-8 h-full"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">
                {t("scratch")}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {tDetail("scratch_dev_full")}
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">
                  {tDetail("dev_effort")}
                </span>
                <span className="text-sm font-bold text-orange-600">
                  {tDetail("massive")}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="bg-gradient-to-r from-orange-400 to-red-500 h-3 rounded-full"
                />
              </div>
            </div>

            {/* Challenges */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-orange-600 text-xs">!</span>
                </div>
                <p className="text-sm text-gray-600">
                  {tDetail("scratch_challenges.all_in_house")}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-orange-600 text-xs">!</span>
                </div>
                <p className="text-sm text-gray-600">
                  {tDetail("scratch_challenges.high_security_risk")}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-orange-600 text-xs">!</span>
                </div>
                <p className="text-sm text-gray-600">
                  {tDetail("scratch_challenges.continuous_operation_cost")}
                </p>
              </div>
            </div>

            {/* Cost Indicator */}
            <div className="bg-orange-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-orange-600 mb-1">
                {tDetail("high_cost")}
              </div>
              <div className="text-sm text-orange-700">
                {tDetail("dev_operation_load")}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Detailed Feature Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {tDetail("feature_detail_comparison")}
          </h2>

          <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <th className="py-4 px-6 text-left font-semibold">
                    {t("feature")}
                  </th>
                  <th className="py-4 px-6 text-center font-semibold">
                    Tactna
                  </th>
                  <th className="py-4 px-6 text-center font-semibold">IDaaS</th>
                  <th className="py-4 px-6 text-center font-semibold">
                    {t("scratch")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(groupedFeatures).map(
                  ([category, categoryFeatures], categoryIndex) => (
                    <React.Fragment key={category}>
                      <tr className="bg-gray-50">
                        <td
                          colSpan={4}
                          className="py-3 px-6 font-semibold text-gray-700"
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-sm font-bold shadow-lg">
                              {categoryIndex + 1}
                            </span>
                            {t(category)}
                          </div>
                        </td>
                      </tr>
                      {categoryFeatures.map((feature, index) => (
                        <motion.tr
                          key={feature.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: 0.7 + categoryIndex * 0.1 + index * 0.05,
                          }}
                          className="hover:bg-blue-50 transition-colors border-b border-gray-100"
                          onMouseEnter={() => setHoveredFeature(feature.name)}
                          onMouseLeave={() => setHoveredFeature(null)}
                        >
                          <td className="py-4 px-6">
                            <span
                              className={`font-medium transition-colors ${
                                hoveredFeature === feature.name
                                  ? "text-blue-600"
                                  : "text-gray-700"
                              }`}
                            >
                              {t(feature.name)}
                            </span>
                          </td>
                          <td className="py-4 px-6 text-center">
                            {feature.tactna === "check" ? (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{
                                  delay:
                                    0.8 + categoryIndex * 0.1 + index * 0.05,
                                }}
                              >
                                <CheckIcon size={24} color="#3B82F6" />
                              </motion.div>
                            ) : (
                              <span className="text-gray-300 text-2xl">－</span>
                            )}
                          </td>
                          <td className="py-4 px-6 text-center">
                            {feature.idaas === "check" ? (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{
                                  delay:
                                    0.85 + categoryIndex * 0.1 + index * 0.05,
                                }}
                              >
                                <CheckIcon size={24} color="#10B981" />
                              </motion.div>
                            ) : (
                              <span className="text-gray-300 text-2xl">－</span>
                            )}
                          </td>
                          <td className="py-4 px-6 text-center">
                            {feature.scratch === "triangle" ? (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{
                                  delay:
                                    0.9 + categoryIndex * 0.1 + index * 0.05,
                                }}
                              >
                                <TriangleIcon size={24} />
                              </motion.div>
                            ) : (
                              <span className="text-gray-300 text-2xl">－</span>
                            )}
                          </td>
                        </motion.tr>
                      ))}
                    </React.Fragment>
                  )
                )}
              </tbody>
            </table>
          </div>

          {/* Legend */}
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2">
              <CheckIcon size={20} color="#3B82F6" />
              <span className="text-sm text-gray-600">
                {tDetail("standard_feature")}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <TriangleIcon size={20} />
              <span className="text-sm text-gray-600">
                {tDetail("dev_implementation_required")}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-300 text-xl">－</span>
              <span className="text-sm text-gray-600">
                {tDetail("not_supported")}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-700 mb-6">
            {tDetail("reduce_dev_effort_enterprise")}
          </p>
          <a
            href="https://info.tc3.co.jp/saas-id-management-guide-book"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            {tDetail("learn_more")}
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  );
}

function CheckIcon({ size = 24, color = "#3B82F6" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className="inline-block"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke={color}
        strokeWidth="2"
        fill={`${color}20`}
      />
      <path
        d="M8 12l2 2 4-4"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TriangleIcon({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className="inline-block"
    >
      <path
        d="M12 5L4 18h16L12 5z"
        stroke="#FB923C"
        strokeWidth="2"
        fill="#FB923C20"
      />
    </svg>
  );
}
