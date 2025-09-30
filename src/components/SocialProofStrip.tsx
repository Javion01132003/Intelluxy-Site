import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { socialProof } from "@/constants/content";

const SocialProofStrip = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-4 border-t border-[hsl(var(--accent))]/30">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 text-white"
          style={{ letterSpacing: '0.02em' }}
        >
          {socialProof.headline}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {socialProof.stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-2 border-[hsl(var(--accent))] rounded-xl p-12 text-center hover:border-[hsl(var(--accent))]/80 transition-all duration-300 hover:scale-105 group"
            >
              <motion.div 
                className="text-5xl font-bold text-white mb-4"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 200,
                  delay: index * 0.1 + 0.2
                }}
              >
                <motion.span
                  animate={{ 
                    textShadow: [
                      "0 0 8px rgba(244,196,48,0.3)",
                      "0 0 16px rgba(244,196,48,0.6)",
                      "0 0 8px rgba(244,196,48,0.3)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                >
                  {stat.number}
                </motion.span>
              </motion.div>
              <div className="text-lg text-white/80 leading-relaxed">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofStrip;
