import React, { useState } from "react";
import { motion } from "framer-motion";
import { testNotifications, testingItems } from "../../components/data/TestingData";


const Testing = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <motion.section
      className="w-full flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-center"
      style={{
        "--color-deep-indigo": "#22227A",
        "--color-indigo": "#434C9A",
        "--color-purple": "#6D77B3",
        backgroundImage:
          "linear-gradient(to bottom, rgba(224,235,255,0.1), rgba(255,255,255,1))",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Header */}
      <h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
        style={{ color: "var(--color-deep-indigo)" }}
      >
        Testing
      </h1>
      <p
        className="text-md sm:text-lg text-gray-600 max-w-2xl mx-auto"
        style={{ color: "var(--color-muted)" }}
      >
        PSG Tech's COE Indutech is equipped with start of art testing
        instruments to evaluate materials for various functional properties.
        Please click the respective lab in the below chart for more details.
      </p>
      {/*Scrolling notifications*/}
      <div className="w-full text-black py-4 overflow-hidden">
        <div className="whitespace-nowrap overflow-visible animate-scroll font-medium text-lg">
          {testNotifications.map((note, index) => (
            <a
              key={index}
              href={note.pdf}
              target="_blank"
              rel="noopener noreferrer"
              title={note.text}
              className="mx-10 inline-block cursor-pointer"
            >
              ⚡ {note.text}
            </a>
          ))}
        </div>
      </div>
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-scroll {
            display: inline-block;
            animation: scroll 20s linear infinite;
            /* allow pausing when focused (keyboard) */
          }
          /* Pause animation on hover, active or when a child gets focus (keyboard / click) */
          .animate-scroll:hover,
          .animate-scroll:active,
          .animate-scroll:focus-within {
            animation-play-state: paused;
          }
          .animate-scroll a { color: inherit; text-decoration: none; }
          .animate-scroll a:focus,
          .animate-scroll a:hover { text-decoration: underline; }
        `}
      </style>

      {/* Central Orbital Layout */}

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
          className="relative w-[500px] h-[500px] flex items-center justify-center"
          onMouseEnter={() => setExpanded(true)}
          onMouseLeave={() => setExpanded(false)}
        >
          {/* Center Logo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 10 }}
            className="absolute w-40 h-40 rounded-full flex flex-col items-center justify-center text-center text-gray-800 font-bold text-lg shadow-2xl z-20 bg-white"
            style={{
              boxShadow: "0 0 40px 10px rgba(59,130,246,0.3)",
            }}
          >
            <img
              src="/images/test_6.gif"
              alt="COE INDU TECH"
              className="w-60 h-26 object-contain mb-2"
            />
          </motion.div>

          {/* Rotating orbit ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            style={{ borderColor: "rgba(59,130,246,0.4)" }}
          ></motion.div>

          {/* Orbiting Capabilities */}
          {testingItems.map((item, i) => (
            <motion.div
              key={i}
              className="absolute flex items-center justify-center"
              animate={{
                transform: expanded
                  ? `rotate(${item.deg}deg) translate(220px) rotate(-${item.deg}deg)`
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
                className={`w-36 h-36 bg-gradient-to-br ${item.color} rounded-full shadow-lg flex items-center justify-center text-white font-semibold text-center text-sm px-3 py-2 cursor-pointer whitespace-pre-line`}
              >
                {item.title}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.section>
  );
};

export default Testing;
