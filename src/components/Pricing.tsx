import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const pricingTiers = [
  {
    name: "STARTER",
    price: "$2,997",
    tagline: "For businesses ready to scale",
    features: [
      "One request at a time",
      "Sales funnel builds",
      "Landing page creation",
      "AI-generated ads",
      "Email sequences",
      "Google Business optimization",
      "Monthly analytics reports",
      "48-hour turnaround",
      "Unlimited revisions"
    ],
    cta: "Start Growing",
    popular: false
  },
  {
    name: "GROWTH",
    price: "$4,997",
    tagline: "For businesses dominating their market",
    features: [
      "Two requests at a time",
      "Everything in Starter",
      "E-commerce site builds",
      "Ad campaign management (Google + Facebook)",
      "A/B testing & optimization",
      "Custom AI image generation",
      "Weekly strategy calls",
      "24-hour turnaround",
      "Priority support"
    ],
    cta: "Accelerate Growth",
    popular: true
  },
  {
    name: "ELITE",
    price: "$9,997",
    tagline: "For businesses ready to win",
    features: [
      "Unlimited requests",
      "Everything in Growth",
      "AI app development",
      "N8N workflow automations",
      "Custom integrations",
      "Dedicated account manager",
      "Same-day turnaround",
      "White-glove onboarding",
      "Quarterly strategy sessions"
    ],
    cta: "Go Elite",
    popular: false
  }
];

const painPoints = [
  "Waiting weeks for a single landing page",
  "Paying by the hour while scope creeps",
  "Endless revision requests that drain your budget",
  "Zero accountability for results",
  "Marketing teams that don't understand your business"
];

const differentiators = [
  "One flat monthly fee - no hourly billing, no surprise invoices",
  "Unlimited requests - add as many as you want to your queue",
  "Fast turnaround - 24-48 hours on most requests",
  "Unlimited revisions - we don't stop until you're happy",
  "Pause or cancel anytime - no contracts, no commitments",
  "Expert team - specialists in funnel building, ads, automation"
];

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" ref={ref} className="py-12 sm:py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* QUALIFY */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 px-4">
            Stop overpaying for mediocre marketing.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4 max-w-4xl mx-auto px-4">
            Traditional agencies charge $150-300/hour. You pay for meetings, revisions,
            project management overhead. A single funnel costs $15K+ and takes months.
          </p>
          <p className="text-xl sm:text-2xl font-bold px-4">
            We flip the script. One flat fee. Unlimited work. Fast turnaround.
          </p>
        </motion.div>

        {/* UNDERSTAND */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 sm:mb-16 max-w-3xl mx-auto"
        >
          <div className="space-y-3 px-4">
            {painPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-3 text-base sm:text-lg">
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-destructive shrink-0 mt-1" />
                <span>{point}</span>
              </div>
            ))}
          </div>
          <p className="text-lg sm:text-xl mt-6 text-center font-semibold px-4">
            We built Intelluxy because we lived this nightmare too.
          </p>
        </motion.div>

        {/* EDUCATE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 sm:mb-16 max-w-3xl mx-auto"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center px-4">Here's how we're different:</h3>
          <div className="space-y-3 px-4">
            {differentiators.map((point, index) => (
              <div key={index} className="flex items-start gap-3 text-base sm:text-lg">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[hsl(var(--gold))] shrink-0 mt-1" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* STIMULATE - Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className={`relative p-6 sm:p-8 rounded-2xl border-2 bg-card transition-all duration-300 hover:shadow-2xl ${
                tier.popular
                  ? "border-[hsl(var(--gold))] lg:scale-105 shadow-glow"
                  : "border-gold-30 hover:border-[hsl(var(--gold))]"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[hsl(var(--gold))] text-black px-4 sm:px-6 py-1 rounded-full text-xs sm:text-sm font-bold">
                  MOST POPULAR
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">{tier.tagline}</p>
                <div className="text-4xl sm:text-5xl font-bold mb-2">{tier.price}</div>
                <p className="text-sm sm:text-base text-muted-foreground">/month</p>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[hsl(var(--gold))] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full text-base sm:text-lg py-5 sm:py-6 font-bold transition-all duration-300 ${
                  tier.popular
                    ? "gradient-gold-orange text-black shadow-glow hover:scale-105 animate-gradient"
                    : "border-2 border-gold-30 bg-transparent hover:bg-gradient-to-br hover:from-[hsl(var(--gold))]/10 hover:to-[hsl(var(--orange))]/10 hover:border-[hsl(var(--gold))]"
                }`}
                onClick={() => console.log(`CTA: Selected ${tier.name} plan (Pricing)`)}
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-sm sm:text-base text-muted-foreground mb-12 sm:mb-16 px-4"
        >
          All plans include unlimited revisions • Pause or cancel anytime • No contracts
        </motion.p>

        {/* TRANSITION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-xl sm:text-2xl mb-6 sm:mb-8 font-semibold px-4">
            Try it risk-free. Pause or cancel anytime. No questions asked.
          </p>
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 px-4">
            Ready to stop wasting money on marketing?
          </h3>
          <Button
            size="lg"
            className="w-full sm:w-auto gradient-gold-orange text-black font-bold text-lg sm:text-xl px-8 sm:px-12 py-6 sm:py-8 shadow-glow hover:scale-105 transition-all duration-300 animate-gradient"
            onClick={() => console.log("Get Started clicked")}
          >
            Get Started Today
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
