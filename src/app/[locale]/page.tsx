import Hero from "../components/hero";
import Navbar from "../components/navbar";
//import FeatureCarousel from "../components/carousel";
import ImageWithBorderAndDelete from "../components/banner";
import CaseSection from "../components/CaseSection";
import FeatureComparison from "../components/feature_comparison";
import FeaturesEnhanced from "../components/FeaturesEnhanced";
import Footer from "../components/footer";
import HubSpotForm from "../components/inquiry_form";
import VideoPlayer from "../components/video";
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
      <CaseSection />
      <VideoPlayer />
      <FeaturesEnhanced />
      <FeatureComparison />
      <HubSpotForm />
      <Footer />
      <ImageWithBorderAndDelete />
    </>
  );
}
