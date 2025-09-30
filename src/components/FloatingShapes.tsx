import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FloatingShapes = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, []);

  const shapes = [
    { emoji: "🔸", size: "text-2xl", delay: 0 },
    { emoji: "🔹", size: "text-3xl", delay: 1 },
    { emoji: "🔶", size: "text-xl", delay: 2 },
    { emoji: "🔷", size: "text-4xl", delay: 3 },
    { emoji: "💎", size: "text-2xl", delay: 4 },
    { emoji: "⭐", size: "text-3xl", delay: 5 },
    { emoji: "✨", size: "text-xl", delay: 6 },
    { emoji: "🌟", size: "text-2xl", delay: 7 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute ${shape.size} opacity-5`}
          initial={{
            x: Math.random() * windowSize.width,
            y: Math.random() * windowSize.height,
          }}
          animate={{
            x: [
              Math.random() * windowSize.width,
              Math.random() * windowSize.width,
              Math.random() * windowSize.width,
            ],
            y: [
              Math.random() * windowSize.height,
              Math.random() * windowSize.height,
              Math.random() * windowSize.height,
            ],
            rotate: [0, 180, 360],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 25 + i * 3,
            repeat: Infinity,
            ease: "linear",
            delay: shape.delay,
          }}
        >
          {shape.emoji}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingShapes;
