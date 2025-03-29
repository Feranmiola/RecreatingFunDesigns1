"use client";
import HeaderText from "@/Components/HeaderText";
import ImageGrid from "@/Components/ImageGrid";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }, 2000);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between each child animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  if (isLoading) {
    return (
      <div
        className={`flex w-full h-screen starterPage bg-[#2F2F2F] items-center justify-center ${
          isFading ? "fade-out" : ""
        }`}
      >
        <div className="loader"></div>
      </div>
    );
  }
  return (
    <div className="w-full h-screen">
      <motion.div
        className="w-full flex items-center justify-center h-full space-x-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col space-y-8">
          <motion.div variants={itemVariants}>
            <HeaderText />
          </motion.div>
          <div className="flex flex-col space-y-5">
            <motion.p
              className="font-poppins font-light text-2xl max-w-[440px] text-white"
              variants={itemVariants}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              in libero risus semper habitant arcu eget. Et integer facilisi
              eget.
            </motion.p>
            <motion.button className="flex items-center cursor-pointer myButton hover:bg-transparent hover:text-white hover:scale-110 border-1 border-transparent hover:border-white transition ease-in-out justify-center w-max px-12 py-4 bg-white rounded-[36px] text-[#232323] text-2xl">
              Explore
            </motion.button>
          </div>
        </div>
        <motion.div variants={itemVariants}>
          <ImageGrid />
        </motion.div>
      </motion.div>
    </div>
  );
}
