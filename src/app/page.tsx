import Hero from "./components/hero";
import Navbar from "./components/navbar";
//import FeatureCarousel from "./components/carousel";
import ImageWithBorderAndDelete from "./components/banner";
import CaseSection from "./components/CaseSection";
import FeatureComparison from "./components/feature_comparison";
import FeaturesEnhanced from "./components/FeaturesEnhanced";
import Footer from "./components/footer";
import HubSpotForm from "./components/inquiry_form";
import VideoPlayer from "./components/video";

export default function Home() {
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
