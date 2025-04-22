import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import ClarityInit from "@/components/analysis/Clarity";
import GoogleAnalytics from "@/components/analysis/GoogleAnalytics";
import { Suspense } from "react";

import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tactna: 認証認可・ID管理基盤",
  description: "Tactnaは、認証認可・ID管理基盤を提供するサービスです。",
};

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
