"use client";
import { useTranslations } from "next-intl";

export default function StructuredData({ locale }: { locale: string }) {
  const isJapanese = locale === "ja";
  const t = useTranslations("structured_data");
  
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.tactna.com/#organization",
        "name": t("company_name"),
        "url": "https://www.tactna.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.tactna.com/tc3_logo.svg"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": t("address_street"),
          "addressLocality": t("address_locality"),
          "addressRegion": t("address_region"),
          "postalCode": "100-0004",
          "addressCountry": "JP"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.tactna.com/#website",
        "url": "https://www.tactna.com",
        "name": "Tactna",
        "description": t("website_description"),
        "publisher": {
          "@id": "https://www.tactna.com/#organization"
        },
        "inLanguage": isJapanese ? "ja" : "en"
      },
      {
        "@type": "Product",
        "@id": "https://www.tactna.com/#product",
        "name": "Tactna",
        "description": t("product_description"),
        "brand": {
          "@id": "https://www.tactna.com/#organization"
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "JPY",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@id": "https://www.tactna.com/#organization"
          }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "50"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}