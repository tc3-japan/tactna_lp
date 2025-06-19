export default function StructuredData({ locale }: { locale: string }) {
  const isJapanese = locale === "ja";
  
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.tactna.com/#organization",
        "name": isJapanese ? "TC3 株式会社" : "TC3 K.K.",
        "url": "https://www.tactna.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.tactna.com/tc3_logo.svg"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": isJapanese 
            ? "大手町一丁目6番1号 大手町ビル4階 FINOLAB" 
            : "Otemachi Building 4F FINOLAB, Otemachi 1-6-1",
          "addressLocality": isJapanese ? "千代田区" : "Chiyoda-ku",
          "addressRegion": isJapanese ? "東京都" : "Tokyo",
          "postalCode": "100-0004",
          "addressCountry": "JP"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.tactna.com/#website",
        "url": "https://www.tactna.com",
        "name": "Tactna",
        "description": isJapanese 
          ? "Tactnaは、TC3株式会社が提供する認証認可・ID管理のためのSaaSです。"
          : "Tactna is a platform that provides account management, authentication and authorization services, enabling rapid deployment of your services.",
        "publisher": {
          "@id": "https://www.tactna.com/#organization"
        },
        "inLanguage": isJapanese ? "ja" : "en"
      },
      {
        "@type": "Product",
        "@id": "https://www.tactna.com/#product",
        "name": "Tactna",
        "description": isJapanese 
          ? "認証認可・ID管理のためのSaaS基盤"
          : "Account & User Management Platform",
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