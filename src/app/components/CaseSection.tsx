"use client";
import React from "react";
import CaseCard from "@/app/components/CaseCard";
import { useTranslations } from "next-intl";

const CaseSection = () => {
  const t = useTranslations("case");
  
  const caseList = [
  {
    title: t("msad.company"),
    description: t("msad.quote"),
    imageUrl: "/client_logos/cli_msad.jpg",
    link: "https://www.tc3.co.jp/case/msadirric-multi-service-auth-platform-okta/",
    companyName: t("msad.company"),
    department: t("msad.department"),
    personName: t("msad.person"),
  },
  {
    title: t("gsearch.company"),
    description: t("gsearch.quote"),
    imageUrl: "",
    link: "https://www.tc3.co.jp/case/gsearch-tactna/",
    companyName: t("gsearch.company"),
    department: t("gsearch.department"),
    personName: t("gsearch.person"),
  },
];

  return (
  <section className="py-12 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-8 text-center">{t("title")}</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {caseList.map((c) => (
          <CaseCard key={c.link} {...c} />
        ))}
      </div>
    </div>
  </section>
  );
};

export default CaseSection;
