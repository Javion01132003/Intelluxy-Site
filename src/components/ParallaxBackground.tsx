import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ParallaxBackground = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Large floating circles */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 left-10 w-32 h-32 rounded-full border border-[hsl(var(--accent))]/10"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-40 right-20 w-24 h-24 rounded-full border border-[hsl(var(--accent))]/10"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-40 left-1/4 w-20 h-20 rounded-full border border-[hsl(var(--accent))]/10"
      />
      
      {/* Rotating geometric shapes */}
      <motion.div
        style={{ rotate, y: y1 }}
        className="absolute top-1/3 right-1/3 w-16 h-16 border-2 border-[hsl(var(--accent))]/20"
      />
      <motion.div
        style={{ rotate: useTransform(rotate, (r) => -r), y: y2 }}
        className="absolute bottom-1/3 left-1/3 w-12 h-12 border-2 border-[hsl(var(--accent))]/20 rotate-45"
      />
      
      {/* Floating lines */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[hsl(var(--accent))]/20 to-transparent"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[hsl(var(--accent))]/10 to-transparent"
      />
    </div>
  );
};

export default ParallaxBackground;
