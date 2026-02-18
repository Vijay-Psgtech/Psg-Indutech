import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  testNotifications,
  testingItems,
} from "../../components/data/TestingData.js";
import {
  brandColors,
  grad,
  gradText,
  borderColor,
} from "../../components/common/brand.js";
import {
  FlaskConical,
  Microscope,
  Flame,
  Layers,
  Droplets,
  Filter,
  Zap,
  Cpu,
  ArrowUpRight,
} from "lucide-react";

import Eyebrow from "../../components/common/EyeBrow";

/* ── Reusable Components ─────────────────────────────────── */

// Map icons based on titles or keywords
const getIcon = (title) => {
  const t = title.toLowerCase();
  if (t.includes("physical")) return <Layers size={32} />;
  if (t.includes("analytical")) return <FlaskConical size={32} />;
  if (t.includes("fire")) return <Flame size={32} />;
  if (t.includes("surface")) return <Microscope size={32} />;
  if (t.includes("wet")) return <Droplets size={32} />;
  if (t.includes("filter")) return <Filter size={32} />;
  if (t.includes("insulation")) return <Zap size={32} />;
  if (t.includes("fesem")) return <Cpu size={32} />;
  return <Microscope size={32} />; // Default
};

/* ── Main Component ─────────────────────────────────── */

const Testing = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* ── Hero Section ─────────────────────────────────── */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-60"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Eyebrow>Testing Services</Eyebrow>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-tight text-slate-900 mb-6"
          >
            Advanced <span style={gradText}>Testing Facility</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-12"
          >
            PSG Tech's COE Indutech offers state-of-the-art instruments for
            comprehensive material evaluation. Explore our specialized
            laboratories below for detailed testing capabilities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-col gap-2 mb-12 text-sm md:text-base text-gray-500 font-medium"
          >
            <p>
              For Testing Enquiries:{" "}
              <a
                href="mailto:testing.int@psgtech.ac.in"
                className="text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                testing.int@psgtech.ac.in
              </a>
              ,{" "}
              <a
                href="mailto:testing1.int@psgtech.ac.in"
                className="text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                testing1.int@psgtech.ac.in
              </a>
            </p>
            <p>
              For Fesem Edax Test Enquiries:{" "}
              <a
                href="mailto:semedaxlab@psgtech.ac.in"
                className="text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                semedaxlab@psgtech.ac.in
              </a>
            </p>
          </motion.div>

          {/* Scrolling Notifications - Redesigned */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full max-w-5xl mx-auto bg-slate-900 text-white rounded-full py-3 px-6 overflow-hidden flex items-center shadow-lg border border-slate-700"
          >
            <span className="flex-shrink-0 bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded-full mr-4 animate-pulse">
              Updates
            </span>
            <div className="overflow-hidden relative w-full h-6 flex items-center">
              <div className="animate-scroll-text whitespace-nowrap absolute flex items-center">
                {testNotifications.map((note, index) => (
                  <a
                    key={index}
                    href={note.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mx-8 text-sm hover:text-indigo-300 transition-colors"
                  >
                    <span className="mr-2 opacity-70">•</span>
                    {note.text}
                    {note.pdf && (
                      <ArrowUpRight size={12} className="ml-1 opacity-50" />
                    )}
                  </a>
                ))}
                {/* Duplicate for seamless loop */}
                {testNotifications.map((note, index) => (
                  <a
                    key={`dup-${index}`}
                    href={note.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mx-8 text-sm hover:text-indigo-300 transition-colors"
                  >
                    <span className="mr-2 opacity-70">•</span>
                    {note.text}
                    {note.pdf && (
                      <ArrowUpRight size={12} className="ml-1 opacity-50" />
                    )}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Labs Grid Section ─────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 bg-white" id="labs">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {testingItems.map((item, index) => (
              <motion.a
                key={index}
                variants={itemVariants}
                href={item.doc}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block h-64 w-full overflow-hidden rounded-3xl bg-gray-50 p-8 transition-all duration-500 hover:scale-[1.02]"
              >
                {/* Background Gradient on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col justify-between">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-gray-700 group-hover:scale-110 group-hover:bg-white/20 group-hover:text-white transition-all duration-500">
                    {getIcon(item.title)}
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300 leading-tight">
                      {item.title}
                    </h3>
                    <div className="mt-4 flex items-center gap-2 text-sm font-medium text-gray-500 group-hover:text-white/80 transition-colors duration-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                      Download Specs <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>

                {/* Decorative Pattern (Optional - subtle noise or lines) */}
                <div className="absolute right-0 top-0 -mt-8 -mr-8 h-32 w-32 rounded-full bg-current opacity-[0.03] group-hover:opacity-10"></div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Styles for marquee animation */}
      <style>{`
        @keyframes scroll-text {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); } 
        }
        .animate-scroll-text {
          animation: scroll-text 40s linear infinite;
          display: flex; /* Ensure items are in a row */
        }
        .animate-scroll-text:hover {
            animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Testing;
