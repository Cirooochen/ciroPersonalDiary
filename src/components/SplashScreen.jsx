import { useState, useEffect } from "react";
import { motion } from "motion/react";

const SplashScreen = ({ onFinish }) => {
  const [text, setText] = useState("");
  const fullText = "Mindnote.";
  const typingSpeed = 100; // ms per letter

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setText((prev) => prev + fullText[index]);
      index++;

      if (index === fullText.length) {
        clearInterval(interval);

        // Optional: wait a bit then finish splash
        setTimeout(() => {
          onFinish();
        }, 1000);
      }
    }, [typingSpeed]);

    return () => clearInterval(interval);
  }, []);
  return (
    <motion.div
      className="fixed inset-0 bg-black text-white flex items-center justify-center text-4xl font-mono"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {text}
      <span className="animate-pulse">|</span>
    </motion.div>
  );
};

export default SplashScreen;
