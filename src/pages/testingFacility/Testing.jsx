import React from "react";
import { motion } from "framer-motion";
import {
  testNotifications,
  testingItems,
} from "../../components/data/TestingData.js";
import OrbitalLayout from "../../components/OrbitalLayout";
import { brandColors, grad, gradText, borderColor } from "../../components/common/brand.js";

/* ── small reusable pieces ─────────────────────────────────── */
function Eyebrow({ children }) {
  return (
    <div
      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full"
      style={{
        background: `linear-gradient(135deg, ${brandColors.primary}0c, ${brandColors.accent}0c)`,
        border: `1.5px solid ${borderColor()}`,
      }}
    >
      <span
        className="w-2 h-2 rounded-full"
        style={{ background: grad.subtle }}
      />
      <span
        className="text-xs font-bold uppercase tracking-widest"
        style={{ color: brandColors.secondary }}
      >
        {children}
      </span>
    </div>
  );
}

const Testing = () => {
  return (
    <motion.section
      className="w-full flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Header */}
      <Eyebrow>Testing</Eyebrow>
      <h1
        className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight"
        style={{ color: brandColors.primary }}
      >
        Testing <span style={gradText}>Facility</span>
      </h1>
      <p
        className="mt-6 text-md sm:text-lg text-gray-600 max-w-2xl mx-auto"
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
