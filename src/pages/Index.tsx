import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import FeaturedProjects from "@/components/FeaturedProjects";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <TechStack />
      <FeaturedProjects />
      <Services />
      <Footer />
    </main>
  );
};

export default Index;
