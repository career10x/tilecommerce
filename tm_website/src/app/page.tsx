import Navigation from "@/components/Navigation";
import Hero from "@/components/home/Hero";
import CategoryShowcase from "@/components/home/CategoryShowcase";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import ShopBySpace from "@/components/home/ShopBySpace";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ArchitectsSection from "@/components/home/ArchitectsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <CategoryShowcase />
      <FeaturedProducts />
      <ShopBySpace />
      <WhyChooseUs />
      <ArchitectsSection />
      <Footer />
    </main>
  );
}
