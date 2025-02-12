"use client";

import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Clarity from "@microsoft/clarity";
import { useEffect } from "react";
import GoogleAnalytics from "@/components/GoogleAnalytics/GoogleAnalytics";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tactna 認証認可・ID管理基盤",
  description: "Tactnaは、認証認可・ID管理基盤を提供するサービスです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;
    if (CLARITY_ID && typeof window !== "undefined") {
      Clarity.init(CLARITY_ID);
    }
  }, []);
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
      </head>
      <body className={`${notoSansJP.variable} antialiased`}>{children}</body>
    </html>
  );
}
