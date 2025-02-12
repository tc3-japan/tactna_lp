import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import ClarityInit from "@/components/analysis/Clarity";
import GoogleAnalytics from "@/components/analysis/GoogleAnalytics";

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
  return (
    <html lang="en">
      <head>
        <ClarityInit />
        <GoogleAnalytics />
      </head>
      <body className={`${notoSansJP.variable} antialiased`}>{children}</body>
    </html>
  );
}
