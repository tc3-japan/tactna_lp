import { notFound } from "next/navigation";
import { ReactNode } from "react";
import { setRequestLocale } from "next-intl/server";
import "../globals.css";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import DownloadMaterialButton from "../components/DownloadMaterialButton";

export const metadata = {
  title: "Tactna",
  description: "Tactna LP",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    console.log("Locale not found:", locale);
    notFound();
  }

  setRequestLocale(locale);

  return (
    <NextIntlClientProvider locale={locale}>
      <>
        {children}
        <DownloadMaterialButton />
      </>
    </NextIntlClientProvider>
  );
}
