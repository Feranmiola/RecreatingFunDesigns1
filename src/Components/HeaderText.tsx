import React from "react";
import { motion } from "framer-motion";

const HeaderText = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const wordContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between each letter
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const AnimatedText = ({ text, color }: { text: string; color: string }) => (
    <motion.p
      className={`font-bold w-max text-[72px] font-poppins ${color} gradient-text-hover`}
      variants={wordContainerVariants}
    >
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={letterVariants}>
          {char}
        </motion.span>
      ))}
    </motion.p>
  );

  return (
    <motion.div
      className="max-w-[370px] max-h-[324px] flex flex-col justify-between"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <AnimatedText text="Design." color="text-[#FEC3C7]" />
      <AnimatedText text="Create." color="text-[#9AD7F3]" />
      <AnimatedText text="Inspire." color="text-[#6BDFDA]" />
    </motion.div>
  );
};

export default HeaderText;
