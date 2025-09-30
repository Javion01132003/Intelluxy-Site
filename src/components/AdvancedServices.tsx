import { Cpu, Workflow, Cable } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const advancedServices = [
  {
    icon: Cpu,
    title: "AI App Development",
    description: "Custom AI applications built for your business",
    example: "Example: Chatbots, lead qualification tools, customer support automation"
  },
  {
    icon: Workflow,
    title: "N8N Automations",
    description: "Workflow automation connecting your entire tech stack",
    example: "Example: Auto-sync leads from ads → CRM → email sequences"
  },
  {
    icon: Cable,
    title: "Custom Integrations",
    description: "Connect any tools in your business for seamless operation",
    example: "Example: Zapier on steroids—built exactly how you need it"
  }
];

const AdvancedServices = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-12 sm:py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
            Go beyond marketing.
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground px-4">
            Elite-tier exclusive services that automate your entire business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {advancedServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="p-8 sm:p-10 rounded-xl border-2 border-[hsl(var(--gold))] bg-gradient-to-br from-[hsl(var(--gold))]/10 to-[hsl(var(--orange))]/10 hover:from-[hsl(var(--gold))]/20 hover:to-[hsl(var(--orange))]/20 transition-all duration-300 cursor-pointer group"
              >
                <Icon className="w-10 h-10 sm:w-12 sm:h-12 mb-4 text-[hsl(var(--gold))] group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-[hsl(var(--gold))]">{service.title}</h3>
                <p className="text-sm sm:text-base text-foreground mb-4">{service.description}</p>
                <p className="text-xs sm:text-sm italic text-muted-foreground">{service.example}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdvancedServices;
