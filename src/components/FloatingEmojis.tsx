import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FloatingEmojis = () => {
  const emojis = ["💰", "📈", "🚀", "⚡", "✨", "🎯"];
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {emojis.map((emoji, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl opacity-10"
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
            rotate: [0, 360, 720],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {emoji}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingEmojis;

