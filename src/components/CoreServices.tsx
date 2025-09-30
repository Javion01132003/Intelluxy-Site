import { 
  Zap, 
  Target, 
  MapPin, 
  Globe, 
  ShoppingCart, 
  BarChart3, 
  Mail, 
  Image, 
  LineChart 
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: Zap,
    title: "Sales Funnels",
    description: "Turn traffic into paying customers"
  },
  {
    icon: Target,
    title: "AI-Generated Ads",
    description: "Fresh creative without designer costs"
  },
  {
    icon: MapPin,
    title: "Google Business Profile",
    description: "Own your local search results"
  },
  {
    icon: Globe,
    title: "Landing Pages & Websites",
    description: "Professional web presence in days"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Sites",
    description: "Start selling online immediately"
  },
  {
    icon: BarChart3,
    title: "Ad Campaign Management",
    description: "Predictable lead flow"
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Revenue on autopilot"
  },
  {
    icon: Image,
    title: "AI Image Generation",
    description: "Unique visuals, zero stock photos"
  },
  {
    icon: LineChart,
    title: "Analytics & Reporting",
    description: "Know exactly what's working"
  }
];

const CoreServices = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-12 sm:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
            Everything you need to dominate your market.
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground px-4">
            Nine core services included in every plan.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 sm:p-8 rounded-xl border border-gold-30 bg-card hover:border-[hsl(var(--gold))] hover:bg-gradient-to-br hover:from-[hsl(var(--gold))]/10 hover:to-[hsl(var(--orange))]/5 transition-all duration-300 cursor-pointer group"
              >
                <Icon className="w-10 h-10 sm:w-12 sm:h-12 mb-4 text-[hsl(var(--gold))] group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg sm:text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
