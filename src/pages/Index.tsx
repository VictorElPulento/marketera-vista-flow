
import HeroSection from "@/components/home/HeroSection";
import FeaturedProduct from "@/components/home/FeaturedProduct";
import BrandStory from "@/components/home/BrandStory";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedProduct />
        <TestimonialsSection />
        <BrandStory />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
