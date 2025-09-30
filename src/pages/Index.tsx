import Hero from "@/components/Hero";
import SocialProofStrip from "@/components/SocialProofStrip";
import ServicesGrid from "@/components/ServicesGrid";
import ProcessTimeline from "@/components/ProcessTimeline";
import CaseStudies from "@/components/CaseStudies";
import PricingTiers from "@/components/PricingTiers";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingEmojis from "@/components/FloatingEmojis";
import FloatingShapes from "@/components/FloatingShapes";
import ParallaxBackground from "@/components/ParallaxBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0B] relative">
      <FloatingEmojis />
      <FloatingShapes />
      <ParallaxBackground />
      <div className="relative z-10">
        <Hero />
        <SocialProofStrip />
        <ServicesGrid />
        <ProcessTimeline />
        <CaseStudies />
        <PricingTiers />
        <FAQSection />
        <FinalCTA />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
