import React from "react";
import { motion } from "framer-motion";
import {
  testNotifications,
  testingItems,
} from "../../components/data/TestingData.js";
import OrbitalLayout from "../../components/OrbitalLayout";

const Testing = () => {
  return (
    <motion.section
      className="w-full flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-center"
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
      <OrbitalLayout
        image="/images/test_6.gif"
        items={testingItems}
        radius={220}
        rotationSpeed={40}
        size={500}
      />
    </motion.section>
  );
};

export default Testing;
