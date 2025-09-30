import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    pricingSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 leading-tight"
        >
          Don't sell marketing.
          <br />
          <span className="gradient-text animate-gradient inline-block">
            Sell the revenue that makes tomorrow possible.
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4 sm:mb-6 max-w-3xl mx-auto px-4"
        >
          Agencies nickel-and-dime you with proposals, meetings, and hourly rates.
          You get stuck in revision hell with no clear path to ROI.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl font-bold mb-8 sm:mb-12 max-w-3xl mx-auto px-4"
        >
          We're different. One flat fee. Unlimited requests. Predictable growth.
          No meetings unless you want them.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center px-4"
        >
          <Button
            size="lg"
            onClick={() => {
              console.log("CTA: Book a Call (Hero)");
              window.open("https://calendly.com/genz-investorr/30min", "_blank");
            }}
            className="w-full sm:w-auto gradient-gold-orange text-black font-bold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-glow hover:scale-105 transition-all duration-300 animate-gradient"
          >
            Book a Call
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
