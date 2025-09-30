import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { finalCTA } from "@/constants/content";

const FinalCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-6 text-white"
          style={{ letterSpacing: '0.02em' }}
        >
          {finalCTA.headline}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-white/80 mb-12 leading-relaxed"
        >
          {finalCTA.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-6"
        >
          <Button
            size="lg"
            className="bg-[hsl(var(--coral))] hover:bg-[hsl(var(--coral))]/90 text-white font-bold text-xl px-12 py-8 rounded-lg transition-all duration-300 hover:scale-105"
            onClick={() => {
              console.log("CTA: Book Your Call (Final)");
              window.open(finalCTA.ctaUrl, "_blank");
            }}
          >
            {finalCTA.cta}
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-sm text-[hsl(var(--accent))]"
        >
          {finalCTA.socialProof}
        </motion.p>
      </div>
    </section>
  );
};

export default FinalCTA;
