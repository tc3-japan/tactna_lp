import Hero from "../components/hero";
import InfoCard from "../components/InfoCard";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HubSpotForm from "../components/inquiry_form";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale?: string }>;
}) {
  const p = await params;
  const locale = p?.locale ?? routing.defaultLocale;
  setRequestLocale(locale);
  return (
    <>
      <Navbar />
      <Hero />
      <InfoCard />
      <HubSpotForm />
      <Footer />
    </>
  );
}
