import Navbar from "./components/navbar";
import Hero from "./components/hero";
//import FeatureCarousel from "./components/carousel";
import FeatureTable from "./components/feature_table";
import Footer from "./components/footer";
import HubSpotForm from "./components/inquiry_form";
import Features from "./components/features";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <FeatureTable />
      <HubSpotForm />
      <Footer />
    </>
  );
}
