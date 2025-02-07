import Navbar from "./components/navbar";
import Hero from "./components/hero";
import FeatureCarousel from "./components/carousel";
import FeatureTable from "./components/feature_table";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeatureCarousel />
      <FeatureTable />
      <Footer />
    </>
  );
}
