import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { process } from "@/constants/content";

const ProcessTimeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-4 bg-[hsl(var(--background))]">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-20 text-white"
          style={{ letterSpacing: '0.02em' }}
        >
          {process.headline}
        </motion.h2>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[hsl(var(--accent))]/30 hidden md:block" />

          {process.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative flex items-start gap-8 mb-16 last:mb-0"
            >
              {/* Number circle */}
              <motion.div 
                className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full border-2 border-[hsl(var(--accent))] bg-[hsl(var(--background))] flex items-center justify-center"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(244,196,48,0.7)",
                    "0 0 0 10px rgba(244,196,48,0)",
                    "0 0 0 0 rgba(244,196,48,0)"
                  ],
                  y: [0, -8, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  boxShadow: { duration: 2, repeat: Infinity, delay: index * 0.5 },
                  y: { duration: 3, repeat: Infinity, delay: index * 0.3 },
                  rotate: { duration: 4, repeat: Infinity, delay: index * 0.2 }
                }}
              >
                <motion.span 
                  className="text-3xl font-bold text-[hsl(var(--accent))]"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    textShadow: [
                      "0 0 0px rgba(244,196,48,0)",
                      "0 0 10px rgba(244,196,48,0.5)",
                      "0 0 0px rgba(244,196,48,0)"
                    ]
                  }}
                  transition={{
                    scale: { duration: 2, repeat: Infinity, delay: index * 0.5 },
                    textShadow: { duration: 3, repeat: Infinity, delay: index * 0.4 }
                  }}
                >
                  {step.number}
                </motion.span>
              </motion.div>

              {/* Content */}
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-base text-white/80 leading-relaxed max-w-2xl">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
