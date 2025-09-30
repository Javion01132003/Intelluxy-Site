import { CreditCard, List, Rocket, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    icon: CreditCard,
    title: "Subscribe",
    description: "Choose your plan. No proposals, no contracts, no meetings."
  },
  {
    icon: List,
    title: "Request",
    description: "Add unlimited requests to your queue. We work on them one by one."
  },
  {
    icon: Rocket,
    title: "Receive",
    description: "Get your marketing assets in 24-48 hours. Unlimited revisions."
  },
  {
    icon: TrendingUp,
    title: "Scale",
    description: "Watch your revenue grow while we handle everything."
  }
];

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-12 sm:py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
            Simple. Fast. Predictable.
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground px-4">
            How we help you grow without the agency BS.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {/* Connecting line - hidden on mobile */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-[hsl(var(--gold))]/0 via-[hsl(var(--gold))]/50 to-[hsl(var(--gold))]/0" />
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative text-center group"
              >
                {/* Step number background */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 text-7xl sm:text-9xl font-bold text-[hsl(var(--gold))]/10 -z-10 group-hover:text-[hsl(var(--gold))]/20 transition-colors duration-300">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 bg-gradient-to-br from-[hsl(var(--gold))]/10 to-[hsl(var(--orange))]/10 rounded-full flex items-center justify-center border-2 border-[hsl(var(--gold))] relative z-10 backdrop-blur-sm group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-[hsl(var(--gold))] group-hover:scale-110 transition-transform duration-300" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
