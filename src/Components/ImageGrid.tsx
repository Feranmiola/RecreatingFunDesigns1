"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image1 from "./Images/Image1";
import Image2 from "./Images/Image2";
import Image3 from "./Images/Image3";
import Image4 from "./Images/Image4";
import Image5 from "./Images/Image5";
import Image6 from "./Images/Image6";
import Image7 from "./Images/Image7";
import Image8 from "./Images/Image8";
import Image9 from "./Images/Image9";
import Image10 from "./Images/Image10";
import Image11 from "./Images/Image11";
import Image12 from "./Images/Image12";
import Image13 from "./Images/Image13";
import Image14 from "./Images/Image14";
import Image15 from "./Images/Image15";
import Image16 from "./Images/Image16";

// ... Add your other image imports here ...

const ImageGrid = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, auto)",
        gap: "0.5rem",
      }}
    >
      <ImageCard />
    </div>
  );
};

const ImageCard = () => {
  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,
    Image12,
    Image13,
    Image14,
    Image15,
    Image16,
  ];

  return (
    <>
      {images.map((ImageComponent, index) => (
        <IndividualCard key={index} ImageComponent={ImageComponent} />
      ))}
    </>
  );
};

const IndividualCard = ({
  ImageComponent,
}: {
  ImageComponent: React.ComponentType;
}) => {
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
      dragTransition={{ bounceStiffness: 400, bounceDamping: 20 }}
      whileDrag={{ scale: 0.9, zIndex: 1 }}
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
      <ImageComponent />
    </motion.div>
  );
};

export default ImageGrid;
