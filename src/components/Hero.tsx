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
          className="text-5xl leading-[1.2] font-bold mb-8"
          style={{ letterSpacing: '0.02em' }}
        >
          <motion.span
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              background: "linear-gradient(90deg, #FFFFFF 0%, #F4C430 50%, #FFFFFF 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            {heroContent.headline}
          </motion.span>
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
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            size="lg"
            onClick={() => {
              console.log("CTA: Book a Call (Hero)");
              window.open(heroContent.ctaUrl, "_blank");
            }}
            className="bg-[hsl(var(--coral))] hover:bg-[hsl(var(--coral))]/90 text-white font-bold text-xl px-8 py-6 rounded-lg transition-all duration-300 relative overflow-hidden group"
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{
                x: ["-100%", "200%"]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1
              }}
            />
            <span className="relative z-10">{heroContent.cta}</span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
