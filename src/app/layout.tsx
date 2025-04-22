import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import ClarityInit from "@/components/analysis/Clarity";
import GoogleAnalytics from "@/components/analysis/GoogleAnalytics";
import { Suspense } from "react";

import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <html lang="ja">
      <head>
        <ClarityInit />
        <Suspense>
          <GoogleAnalytics />
        </Suspense>
      </head>
      <body className={`${notoSansJP.variable} antialiased`}>
        <NextIntlClientProvider locale="ja">{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
