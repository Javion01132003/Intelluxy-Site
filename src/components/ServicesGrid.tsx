import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { services } from "@/constants/content";

const ServicesGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Core Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4" style={{ letterSpacing: '0.02em' }}>
            {services.headline}
          </h2>
          <p className="text-xl text-white/80">
            {services.subheadline}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          {services.coreServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="border-2 border-[hsl(var(--accent))] rounded-xl p-8 hover:border-[hsl(var(--accent))]/80 transition-all duration-300 hover:transform hover:scale-[1.02] group"
            >
              <motion.div 
                className="text-4xl mb-4"
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
                whileHover={{ scale: 1.2, rotate: 15 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-base text-white/80 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Advanced Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white" style={{ letterSpacing: '0.02em' }}>
            {services.advancedHeadline}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.advancedServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="border-2 border-[hsl(var(--accent))] bg-gradient-to-br from-[hsl(var(--accent))]/10 to-transparent rounded-xl p-10 hover:border-[hsl(var(--accent))]/80 transition-all duration-300 hover:scale-105"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-[hsl(var(--accent))]/20 flex items-center justify-center mb-4">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="text-3xl"
                  >
                    ⚙️
                  </motion.div>
                </div>
              </motion.div>
              <h3 className="text-2xl font-bold text-[hsl(var(--accent))] mb-3">
                {service.title}
              </h3>
              <p className="text-base text-white mb-4 leading-relaxed">
                {service.description}
              </p>
              <p className="text-sm text-[hsl(var(--accent))] italic">
                {service.example}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
