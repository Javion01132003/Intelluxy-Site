import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { pricing } from "@/constants/content";

const PricingTiers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" ref={ref} className="py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4" style={{ letterSpacing: '0.02em' }}>
            {pricing.headline}
          </h2>
          <p className="text-xl text-white/80">
            {pricing.subheadline}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {pricing.tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative border-2 rounded-xl p-8 ${
                tier.highlighted
                  ? "border-[hsl(var(--accent))] lg:scale-105"
                  : "border-[hsl(var(--accent))]/50"
              }`}
            >
              {tier.highlighted && (
                <motion.div 
                  className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[hsl(var(--accent))] text-black px-6 py-1 rounded-full text-sm font-bold"
                  animate={{
                    y: [0, -4, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }}
                >
                  MOST POPULAR
                </motion.div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {tier.name}
                </h3>
                <p className="text-base text-white/70 mb-6">
                  {tier.description}
                </p>
                <div className="flex items-baseline gap-2">
                  <motion.span 
                    className="text-5xl font-bold text-white"
                    animate={tier.highlighted ? {
                      textShadow: [
                        "0 0 8px rgba(244,196,48,0.5)",
                        "0 0 16px rgba(244,196,48,0.8)",
                        "0 0 8px rgba(244,196,48,0.5)"
                      ]
                    } : {}}
                    transition={{
                      duration: 2,
                      repeat: Infinity
                    }}
                  >
                    {tier.price}
                  </motion.span>
                  <span className="text-base text-white/70">
                    {tier.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                    <span className="text-sm text-white/90">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full bg-[hsl(var(--coral))] hover:bg-[hsl(var(--coral))]/90 text-white font-bold text-lg py-6 rounded-lg transition-all duration-300 hover:scale-105"
                onClick={() => {
                  console.log(`CTA: Selected ${tier.name} plan`);
                  window.open("https://calendly.com/genz-investorr/30min", "_blank");
                }}
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-2 border-[hsl(var(--accent))] rounded-xl p-8 text-center max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white mb-3">
            {pricing.guarantee.headline}
          </h3>
          <p className="text-base text-white/80">
            {pricing.guarantee.text}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingTiers;
