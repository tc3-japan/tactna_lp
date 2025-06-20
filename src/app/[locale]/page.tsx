import Navbar from "../components/navbar";
import Hero from "../components/hero";
import FeatureComparison from "../components/feature_comparison";
import Footer from "../components/footer";
import HubSpotForm from "../components/inquiry_form";
import Features from "../components/features";
import VideoPlayer from "../components/video";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <Navbar />
      <Hero />
      <VideoPlayer />
      <Features />
      <FeatureComparison />
      <HubSpotForm />
      <Footer />
    </>
  );
}
