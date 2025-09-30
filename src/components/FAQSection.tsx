import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { faq } from "@/constants/content";

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-4 border-t border-[hsl(var(--accent))]/30">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 text-white"
          style={{ letterSpacing: '0.02em' }}
        >
          {faq.headline}
        </motion.h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faq.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <AccordionItem
                value={`item-${index}`}
                className="border-2 border-[hsl(var(--accent))]/50 rounded-lg px-6 data-[state=open]:border-[hsl(var(--accent))] transition-all duration-300"
              >
                <AccordionTrigger className="text-xl font-bold text-white hover:text-[hsl(var(--accent))] hover:no-underline py-6 transition-colors duration-300">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-white/80 leading-relaxed pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
