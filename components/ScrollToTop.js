import React from "react";
import { FaChevronUp } from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ScrollToTop = () => {
  const [backToTop, setBackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const item = {
    hidden: {
      opacity: 0,
      y: -10,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, -0.05, 0.01, 0.99],
        duration: 1.4,
      },
    },
  };

  return (
    <>
      {backToTop && (
        <motion.button
          variants={item}
          initial="hidden"
          animate="show"
          className="fixed p-3 text-xl text-center bg-gray-300 rounded-full outline-none text-background/70 bottom-6 right-6  md:bottom-16 xl:bottom-[70px] md:right-10"
          onClick={scrollUp}
        >
          <FaChevronUp className="text-xl font-medium text-background/50" />
        </motion.button>
      )}
    </>
  );
};

export default ScrollToTop;
