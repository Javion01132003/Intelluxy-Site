import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const FinalCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    pricingSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} className="py-20 sm:py-32 px-4 bg-gradient-to-r from-background via-[hsl(var(--gold))]/5 to-background">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 px-4"
        >
          Stop wasting money on marketing that doesn't work.
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-12 px-4"
        >
          Join businesses getting predictable growth for one flat fee.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center px-4"
        >
          <Button
            size="lg"
            className="w-full sm:w-auto gradient-gold-orange text-black font-bold text-lg sm:text-xl px-8 sm:px-12 py-6 sm:py-8 shadow-glow hover:scale-105 transition-all duration-300 animate-gradient"
            onClick={() => {
              console.log("CTA: Book a Call (Final CTA)");
              window.open("https://calendly.com/genz-investorr/30min", "_blank");
            }}
          >
            Book a Call
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
