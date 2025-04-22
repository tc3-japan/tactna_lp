import Navbar from "./components/navbar";
import Hero from "./components/hero";
//import FeatureCarousel from "./components/carousel";
import FeatureTable from "./components/feature_table";
import Footer from "./components/footer";
import HubSpotForm from "./components/inquiry_form";
import Features from "./components/features";
import VideoPlayer from "./components/video";
import { setRequestLocale } from "next-intl/server";

export default async function Home({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <Navbar />
      <Hero />
      <VideoPlayer />
      <Features />
      <FeatureTable />
      <HubSpotForm />
      <Footer />
    </>
  );
}
