"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface CaseCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
  companyName?: string;
  department?: string;
  personName?: string;
}

const CaseCard: React.FC<CaseCardProps> = ({
  title,
  description,
  imageUrl,
  link,
  companyName,
  department,
  personName,
}) => {
  const t = useTranslations("case");
  let nameBlock = null;
  if (companyName || department || personName) {
    nameBlock = (
      <div className="w-full">
        {companyName && (
          <div className="text-xs text-gray-500 mb-1">{companyName}</div>
        )}
        {department && (
          <div className="font-bold text-gray-500 text-xs tracking-wide">
            {department}
          </div>
        )}
        {personName && (
          <div className="font-semibold text-gray-700 text-sm">
            {personName}
          </div>
        )}
      </div>
    );
  }
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-start hover:shadow-lg transition-shadow duration-200 h-full min-h-[520px]">
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={200}
          className="w-full h-40 object-contain rounded mb-4"
        />
      ) : (
        <div className="w-full h-40 flex items-center justify-center rounded mb-4 text-black text-2xl md:text-4xl font-bold">
          {title || "No Image"}
        </div>
      )}
      <p className="text-gray-600 mb-4 whitespace-pre-line">{description}</p>
      {nameBlock}
      <div className="flex-1 w-full" />
      {link && (
        <div className="w-full flex justify-center">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 text-base font-semibold bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200 shadow"
          >
            {t("details")}
          </a>
        </div>
      )}
    </div>
  );
};

export default CaseCard;
