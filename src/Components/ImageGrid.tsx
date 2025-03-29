"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image1 from "./Images/Image1";

const ImageGrid = () => {
  const imageRefs = Array(16)
    .fill(0)
    .map(() => React.useRef(null));

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, auto)",
        gap: "0.5rem",
      }}
    >
      {Array(16)
        .fill(0)
        .map((_, index) => (
          <ImageCard key={index} index={index} />
        ))}
    </div>
  );
};

const ImageCard = ({ index }: { index: number }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXValue = ((y - centerY) / centerY) * -15;
    const rotateYValue = ((x - centerX) / centerX) * 15;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX: rotateX,
        rotateY: rotateY,
        transformPerspective: 1000,
      }}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.5}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      whileDrag={{ scale: 1.1, zIndex: 1 }}
      transition={{
        type: "spring",
        stiffness: 700,
        damping: 17,
        rotateX: { duration: 0.1 },
        rotateY: { duration: 0.1 },
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Image1 />
    </motion.div>
  );
};

export default ImageGrid;
