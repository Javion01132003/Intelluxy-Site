import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const faqs = [
  {
    question: "How fast will I get my marketing assets?",
    answer: "Most requests are completed in 24-48 hours on Growth/Elite. Starter plans have 48-hour turnaround. Complex projects like full e-commerce builds may take 3-5 days."
  },
  {
    question: "Can I pause my subscription?",
    answer: "Yes. Pause anytime. Billing pauses too. Unused time rolls over when you reactivate."
  },
  {
    question: "What if I don't like the work?",
    answer: "Unlimited revisions until you're happy. We don't stop until it's right."
  },
  {
    question: "Do you do sales calls?",
    answer: "Only if you want them. Most clients prefer our async workflow. Submit requests via portal, get updates via Slack."
  },
  {
    question: "What tools do you use?",
    answer: "We're tool-agnostic. We build on whatever platform you prefer (Shopify, WordPress, Webflow, custom code, etc.)"
  },
  {
    question: "Who owns the work?",
    answer: "You do. All assets, code, and IP belong to you."
  },
  {
    question: "What's included in \"unlimited requests\"?",
    answer: "Any marketing deliverable within our services. Funnels, landing pages, ads, emails, websites, etc. Add as many as you want to your queue."
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, anytime. Changes take effect on your next billing cycle."
  }
];

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-12 sm:py-20 px-4 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center px-4"
        >
          Frequently Asked Questions
        </motion.h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <AccordionItem
                value={`item-${index}`}
                className="bg-card border border-gold-30 rounded-lg px-4 sm:px-6 data-[state=open]:border-[hsl(var(--gold))] data-[state=open]:bg-gradient-to-br data-[state=open]:from-[hsl(var(--gold))]/5 data-[state=open]:to-transparent transition-all duration-300"
              >
                <AccordionTrigger className="text-base sm:text-lg font-bold hover:text-[hsl(var(--gold))] hover:no-underline transition-colors duration-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
