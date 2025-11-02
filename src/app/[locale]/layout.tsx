import { notFound } from "next/navigation";
import { ReactNode } from "react";
import { setRequestLocale, getTranslations } from "next-intl/server";
import "../globals.css";
import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import DownloadMaterialButton from "../components/DownloadMaterialButton";
import StructuredData from "@/components/StructuredData";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale?: string }>;
}): Promise<Metadata> {
  const p = await params;
  const locale = p?.locale ?? routing.defaultLocale;
  const t = await getTranslations({ locale, namespace: "metadata" });

  const baseUrl = "https://www.tactna.com";
  const url = locale === "ja" ? baseUrl : `${baseUrl}/${locale}`;

  return {
    title: t("title"),
    description: t("description"),
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
      languages: {
        ja: baseUrl,
        en: `${baseUrl}/en`,
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: url,
      siteName: "Tactna",
      images: [
        {
          url: `/${locale}/hero.png`,
          width: 1200,
          height: 630,
          alt: t("title"),
        },
      ],
      locale: locale === "ja" ? "ja_JP" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [`/${locale}/hero.png`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale?: string }>;
}) {
  const p = await params;
  const locale = p?.locale ?? routing.defaultLocale;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <>
      <StructuredData locale={locale} />
      <NextIntlClientProvider locale={locale}>
        <>
          {children}
          <DownloadMaterialButton />
        </>
      </NextIntlClientProvider>
    </>
  );
}
