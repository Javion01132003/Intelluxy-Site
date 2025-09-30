import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { heroContent } from "@/constants/content";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-32">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-[0.2em] text-[hsl(var(--accent))] font-mono mb-6"
        >
          {heroContent.preHeadline}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl leading-[1.2] font-bold mb-8 text-white"
          style={{ letterSpacing: '0.02em' }}
        >
          {heroContent.headline}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-white/80 mb-6 max-w-3xl mx-auto leading-relaxed"
        >
          {heroContent.subheadline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl font-semibold text-white mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          {heroContent.value}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button
            size="lg"
            onClick={() => {
              console.log("CTA: Book a Call (Hero)");
              window.open(heroContent.ctaUrl, "_blank");
            }}
            className="bg-[hsl(var(--coral))] hover:bg-[hsl(var(--coral))]/90 text-white font-bold text-xl px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105"
          >
            {heroContent.cta}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
