import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { footer } from "@/constants/content";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <footer ref={ref} className="border-t border-[hsl(var(--accent))]/30 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
        >
          {/* Left Column */}
          <div>
            <h3 className="text-xl font-bold text-white mb-2">{footer.leftColumn.brand}</h3>
            <p className="text-sm text-white/70">
              {footer.leftColumn.tagline}
            </p>
          </div>

          {/* Center Column */}
          <div className="text-center">
            <p className="text-sm text-white/70">
              {footer.centerColumn.philosophy}
            </p>
          </div>

          {/* Right Column */}
          <div className="text-right">
            <p className="text-sm text-white/70">
              {footer.rightColumn.contact.split(":")[0]}:
            </p>
            <a
              href="mailto:hello@intelluxy.com"
              className="text-sm text-[hsl(var(--accent))] hover:underline transition-colors duration-300"
            >
              hello@intelluxy.com
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-sm text-white/50"
        >
          <p>© 2025 Intelluxy. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
