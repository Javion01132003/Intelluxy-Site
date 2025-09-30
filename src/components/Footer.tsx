import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer ref={ref} className="bg-muted/20 border-t border-gold-30 py-8 sm:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8"
        >
          {/* Logo & Tagline */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[hsl(var(--gold))] mb-2">INTELLUXY</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Productized marketing services for growing businesses.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="text-sm sm:text-base text-muted-foreground hover:text-[hsl(var(--gold))] transition-colors duration-300"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="text-sm sm:text-base text-muted-foreground hover:text-[hsl(var(--gold))] transition-colors duration-300"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="text-sm sm:text-base text-muted-foreground hover:text-[hsl(var(--gold))] transition-colors duration-300"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
                  className="text-sm sm:text-base text-muted-foreground hover:text-[hsl(var(--gold))] transition-colors duration-300"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => window.location.href = "mailto:hello@intelluxy.com"}
                  className="text-sm sm:text-base text-muted-foreground hover:text-[hsl(var(--gold))] transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Contact</h4>
            <p className="text-sm sm:text-base text-muted-foreground mb-2">
              Email:{" "}
              <a
                href="mailto:hello@intelluxy.com"
                className="text-[hsl(var(--gold))] hover:underline transition-all duration-300"
              >
                hello@intelluxy.com
              </a>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-gold-30 pt-6 sm:pt-8 text-center text-sm sm:text-base text-muted-foreground"
        >
          <p>© 2025 Intelluxy. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
