import React, { useState } from "react";
import { motion } from "framer-motion";

const OrbitalLayout = ({
  image,
  items = [],
  radius = 220,
  rotationSpeed = 40,
  size = 500,
}) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <motion.section
      className="w-full flex flex-col items-center justify-center py-24 px-6 relative overflow-hidden text-center"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(224,235,255,0.1), rgba(255,255,255,1))",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div
        className={`relative flex items-center justify-center`}
        style={{ width: `${size}px`, height: `${size}px` }}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
        {/* Center Image */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 10 }}
          className="absolute w-40 h-40 rounded-full flex flex-col items-center justify-center text-center bg-white shadow-2xl z-20"
          style={{
            boxShadow: "0 0 40px 10px rgba(59,130,246,0.3)",
          }}
        >
          <img
            src={image}
            alt="center-icon"
            className="w-60 h-26 object-contain"
          />
        </motion.div>

        {/* Rotating orbit ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2"
          animate={{ rotate: 360 }}
          transition={{
            duration: rotationSpeed,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ borderColor: "rgba(59,130,246,0.3)" }}
        />

        {/* Orbiting items */}
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="absolute flex items-center justify-center"
            animate={{
              transform: expanded
                ? `rotate(${item.deg}deg) translate(${radius}px) rotate(-${item.deg}deg)`
                : "rotate(0deg) translate(0px) rotate(0deg)",
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 12,
              delay: i * 0.05,
            }}
          >
            <motion.div
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 25px rgba(59,130,246,0.8)",
              }}
              className={`w-32 h-32 bg-gradient-to-br ${
                item.color
              } rounded-full shadow-lg flex items-center justify-center text-white font-semibold text-center text-sm px-3 py-2 cursor-pointer whitespace-pre-line ${
                item.doc ? "hover:opacity-90" : "cursor-default"
              } `}
              onClick={() => {
                if (item.doc) {
                  window.open(item.doc, "_blank", "noopener,noreferrer");
                }
              }}
            >
              {item.title}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default OrbitalLayout;
