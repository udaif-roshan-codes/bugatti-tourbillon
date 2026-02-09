import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import FeaturesSection from "@/components/FeaturesSection";
import GallerySection from "@/components/GallerySection";
import ExclusivitySection from "@/components/ExclusivitySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <FeaturesSection />
      <GallerySection />
      <ExclusivitySection />
      <Footer />
    </main>
  );
};

export default Index;
