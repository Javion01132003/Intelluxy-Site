import Hero from "@/components/Hero";
import CoreServices from "@/components/CoreServices";
import AdvancedServices from "@/components/AdvancedServices";
import Pricing from "@/components/Pricing";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <CoreServices />
      <AdvancedServices />
      <Pricing />
      <HowItWorks />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
