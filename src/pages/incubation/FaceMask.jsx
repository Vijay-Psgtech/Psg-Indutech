/**
 * ═══════════════════════════════════════════════════════════════════════════
 * FACE MASK MANUFACTURING COMPONENT - FIXED VERSION
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * IMAGE FOLDER STRUCTURE (ACTUAL):
 * 
 * public/
 * └── images/
 *     └── Face Mask/
 *         ├── img1.jpeg (used for hero, variant 1, product showcase)
 *         ├── img2.jpeg (used for variant 2, process step 2)
 *         └── img3.jpeg (used for variant 3, process step 3)
 * 
 * KEY FIX:
 * • Updated all paths to use actual folder name: /images/Face Mask/ (with space)
 * • Maintained original file names and extensions: img1.jpeg, img2.jpeg, img3.jpeg
 * • Added /images/ prefix to all paths
 * • Component now references the actual files you have
 * 
 * IMAGE USAGE MAP:
 * • img1.jpeg → Hero section, Variant 1, Product showcase
 * • img2.jpeg → Variant 2, Process Step 2
 * • img3.jpeg → Variant 3, Process Step 3
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 */

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Shield,
  Wind,
  CheckCircle,
  Zap,
  Settings,
  ArrowRight,
  Info,
  Mail,
  Sparkles,
  Image as ImageIcon,
} from "lucide-react";
import {
  brandColors,
  grad,
  borderColor,
} from "../../components/common/brand.js";
import {
  maskVariants,
  manufacturingProcess,
  specifications,
  availableColors,
  features,
} from "../../components/data/FaceMaskData.js";
import usePageTitle from "../../hooks/usePageTitle.jsx";

/* ── Images are now included in FaceMaskData.js ────────────────────────── */
/* Each variant and process step includes an image property */
/* Images are fetched from: public/images/Face Mask/ */

/* ── Enhanced Animation Variants ────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const cardFade = {
  hidden: { opacity: 0, y: 25, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideIn = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ── Accent Pill Component ────────────────────────────────────────────── */
function AccentPill({ icon: Icon, text, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
      style={{
        background: grad.card,
        border: `1.5px solid ${borderColor()}`,
      }}
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [1, 0.6, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        {Icon ? (
          <Icon
            className="w-4 h-4"
            style={{ color: brandColors.accent }}
          />
        ) : (
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: brandColors.accent }}
          />
        )}
      </motion.div>
      <span
        className="text-xs font-bold uppercase tracking-widest"
        style={{ color: brandColors.secondary }}
      >
        {text}
      </span>
    </motion.div>
  );
}

/* ── Optimized Image Loading Component ──────────────────────────────── */
/* Improved to show helpful error messages */
function OptimizedImage({ src, alt, className, objectFit = "cover" }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Loading skeleton */}
      <AnimatePresence>
        {!imageLoaded && !imageError && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-linear-to-r from-slate-200 via-slate-100 to-slate-200 animate-pulse"
          />
        )}
      </AnimatePresence>

      {/* Error fallback with helpful message */}
      {imageError && (
        <div className="absolute inset-0 bg-slate-100 flex flex-col items-center justify-center gap-2 p-4">
          <ImageIcon className="w-12 h-12 text-slate-400" />
          <p className="text-xs text-slate-600 text-center font-medium">
            Image not found
          </p>
          <p className="text-xs text-slate-500 text-center font-mono wrap-break-word">
            {src}
          </p>
        </div>
      )}

      {/* Actual image */}
      <motion.img
        src={src}
        alt={alt}
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageError(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: imageLoaded && !imageError ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{ objectFit }}
        className="w-full h-full"
      />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════════════════════════════════ */
export default function FaceMaskPlant() {
  usePageTitle("Face Mask Manufacturing");
  const [selectedVariant, setSelectedVariant] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);
  const [hoveredProcess, setHoveredProcess] = useState(null);
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(180deg, #f8fafc 0%, #eef6ff 50%, #f0f4ff 100%)",
      }}
    >
      {/* Animated Background Elements */}
      <motion.div
        className="fixed top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        animate={{
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: `radial-gradient(circle, ${brandColors.accent}30, transparent)`,
        }}
      />

      <motion.div
        className="fixed bottom-0 left-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        animate={{
          opacity: [0.08, 0.15, 0.08],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        style={{
          background: `radial-gradient(circle, ${brandColors.secondary}25, transparent)`,
        }}
      />

      {/* HERO - Enhanced Glassmorphic Split */}
      <section className="relative py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="rounded-3xl p-8 lg:p-12 backdrop-blur-xl relative overflow-hidden group"
                style={{
                  background: `${brandColors.primary}06`,
                  border: `1px solid ${borderColor()}`,
                }}
              >
                {/* Animated background */}
                <motion.div
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${brandColors.accent}10, transparent 70%)`,
                  }}
                />

                <div className="relative z-10">
                  <AccentPill icon={Shield} text="Medical Grade" delay={0} />

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-4xl sm:text-5xl font-extrabold mb-4"
                    style={{ color: brandColors.primary }}
                  >
                    Face Mask{" "}
                    <span
                      style={{
                        background: `linear-gradient(135deg, ${brandColors.accent}, ${brandColors.secondary})`,
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Manufacturing
                    </span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="text-lg text-slate-600 mb-6 max-w-lg leading-relaxed"
                  >
                    Three-ply surgical masks manufactured with advanced ultrasonic
                    bonding technology, available in tie attachment and elastic
                    ear-loop variants.
                  </motion.p>

                  {/* Specs Grid */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="flex flex-wrap gap-4 mb-6"
                  >
                    {specifications.slice(0, 3).map((spec, i) => {
                      const Icon = spec.icon;
                      return (
                        <motion.div
                          key={i}
                          whileHover={{ y: -4, scale: 1.05 }}
                          className="flex items-center gap-3 bg-white/90 p-4 rounded-xl backdrop-blur-sm"
                          style={{
                            border: `1px solid ${borderColor()}`,
                            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                          }}
                        >
                          <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center"
                            style={{ background: grad.card }}
                          >
                            <Icon
                              className="w-5 h-5"
                              style={{ color: brandColors.accent }}
                            />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-slate-500">
                              {spec.label}
                            </div>
                            <div
                              className="text-sm font-black"
                              style={{ color: brandColors.primary }}
                            >
                              {spec.value}
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </motion.div>

                  {/* CTA Button */}
                  <motion.button
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    onClick={scrollToContact}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-bold overflow-hidden"
                    style={{
                      background: grad.subtle,
                      boxShadow: `0 12px 32px ${brandColors.accent}35`,
                    }}
                  >
                    <span className="relative z-10">Contact Us</span>
                    <motion.div
                      animate={{
                        x: [0, 4, 0],
                        opacity: [1, 0.6, 1],
                      }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative z-10"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>

                    {/* Shimmer effect */}
                    <motion.div
                      animate={{
                        x: [-400, 400],
                        opacity: [0, 0.3, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent opacity-20"
                    />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Right - Product Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl p-6 shadow-2xl relative group"
                style={{
                  background: `${brandColors.secondary}06`,
                  border: `1px solid ${borderColor()}`,
                }}
              >
                <div className="h-full rounded-xl overflow-hidden bg-linear-to-br from-indigo-50 to-cyan-50 flex items-center justify-center">
                  <div className="relative max-w-lg w-full h-96">
                    <OptimizedImage
                      src="/images/Face Mask/img1.jpeg"
                      alt="Face Mask Manufacturing"
                      className="w-full h-full rounded-2xl shadow-2xl"
                    />

                    {/* Floating Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      whileHover={{ scale: 1.1 }}
                      className="absolute -bottom-2 -right-4 px-5 py-3 rounded-lg text-white font-bold shadow-lg backdrop-blur-md"
                      style={{
                        background: grad.subtle,
                        boxShadow: `0 8px 24px ${brandColors.accent}40`,
                      }}
                    >
                      <motion.span
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        95% Filtration
                      </motion.span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 space-y-20">
        {/* ─── PRODUCT VARIANTS ─── */}
        <section>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <AccentPill icon={null} text="Product Variants" delay={0} />
            <motion.h2
              className="text-3xl sm:text-4xl font-black"
              style={{ color: brandColors.primary }}
            >
              Two Attachment Options
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {maskVariants.map((variant) => {
              const Icon = variant.icon;
              const isSelected = selectedVariant === variant.id;

              return (
                <motion.button
                  key={variant.id}
                  variants={cardFade}
                  onClick={() => setSelectedVariant(variant.id)}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative text-left rounded-2xl overflow-hidden transition-all duration-300 group"
                  style={{
                    background: "rgba(255,255,255,0.95)",
                    border: `2px solid ${
                      isSelected ? brandColors.accent : borderColor()
                    }`,
                    boxShadow: isSelected
                      ? `0 20px 50px -10px ${brandColors.accent}40`
                      : "0 6px 20px rgba(16,24,40,0.08)",
                  }}
                >
                  {/* Animated Border Glow */}
                  {isSelected && (
                    <motion.div
                      animate={{
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        border: `2px solid ${brandColors.accent}`,
                        boxShadow: `inset 0 0 20px ${brandColors.accent}15`,
                      }}
                    />
                  )}

                  {/* Image Container */}
                  <div className="relative w-full h-56 overflow-hidden">
                    <OptimizedImage
                      src={variant.image}
                      alt={variant.name}
                      className="w-full h-full"
                    />

                    {/* Gradient overlay */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.4) 100%)",
                      }}
                    />

                    {/* Selected Badge */}
                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          duration: 0.5,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center shadow-lg"
                        style={{ background: brandColors.accent }}
                      >
                        <CheckCircle className="w-5 h-5 text-white" />
                      </motion.div>
                    )}

                    {/* Machine Label */}
                    <motion.div
                      animate={{
                        y: isSelected ? 0 : 5,
                        opacity: isSelected ? 1 : 0.9,
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold backdrop-blur-md"
                      style={{
                        background: "rgba(255,255,255,0.9)",
                        color: brandColors.secondary,
                      }}
                    >
                      <Settings className="w-3.5 h-3.5" />
                      {variant.machine}
                    </motion.div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 relative z-10">
                    <div className="flex items-start gap-4">
                      <motion.div
                        animate={{
                          scale: isSelected ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                        className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md shrink-0"
                        style={{
                          background: isSelected ? grad.subtle : grad.card,
                        }}
                      >
                        <Icon
                          className="w-6 h-6"
                          style={{
                            color: isSelected ? "#fff" : brandColors.accent,
                          }}
                        />
                      </motion.div>
                      <div>
                        <h3
                          className="text-xl font-extrabold mb-1"
                          style={{ color: brandColors.primary }}
                        >
                          {variant.name}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {variant.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        </section>

        {/* ─── MANUFACTURING PROCESS WITH IMAGES ─── */}
        <section>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <AccentPill icon={Layers} text="Production Line" delay={0} />
            <motion.h2
              className="text-3xl sm:text-4xl font-black mb-3"
              style={{ color: brandColors.primary }}
            >
              3-Stage Manufacturing Process
            </motion.h2>
            <p className="text-slate-600 max-w-2xl text-lg">
              Advanced ultrasonic bonding technology ensures secure layer
              adhesion and consistent quality.
            </p>
          </motion.div>

          {/* Process Steps */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="space-y-12"
          >
            {manufacturingProcess.map((process, i) => {
              const Icon = process.icon;
              const isLast = i === manufacturingProcess.length - 1;
              const isHovered = hoveredProcess === i;

              return (
                <motion.div
                  key={i}
                  variants={cardFade}
                  onMouseEnter={() => setHoveredProcess(i)}
                  onMouseLeave={() => setHoveredProcess(null)}
                  className="relative"
                >
                  {/* Timeline wrapper */}
                  <div className="flex gap-6 md:gap-8 items-stretch relative">
                    {/* Left Timeline Column */}
                    <div className="flex flex-col items-center shrink-0">
                      {/* Step Icon */}
                      <motion.div
                        animate={{
                          scale: isHovered ? 1.15 : 1,
                          rotate: isHovered ? 10 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="relative z-10"
                      >
                        <div
                          className="w-24 h-24 rounded-2xl flex items-center justify-center shadow-xl relative"
                          style={{
                            background: grad.subtle,
                          }}
                        >
                          <Icon className="w-10 h-10 text-white" />
                        </div>

                        {/* Step Badge */}
                        <motion.div
                          animate={{
                            scale: isHovered ? 1.2 : 1,
                          }}
                          transition={{ duration: 0.3 }}
                          className="absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center text-sm font-black text-white shadow-lg"
                          style={{ background: brandColors.accent }}
                        >
                          {process.step}
                        </motion.div>
                      </motion.div>

                      {/* Connecting Line */}
                      {!isLast && (
                        <motion.div
                          animate={{
                            background: isHovered
                              ? brandColors.accent
                              : `${brandColors.accent}30`,
                            height: isHovered ? 140 : 100,
                          }}
                          transition={{ duration: 0.3 }}
                          className="w-1.5 rounded-full mt-6"
                        />
                      )}
                    </div>

                    {/* Content Column */}
                    <div className="flex-1 flex flex-col md:flex-row gap-6 pb-4">
                      {/* ── Step-specific image ── */}
                      <motion.div
                        animate={{
                          scale: isHovered ? 1.08 : 1,
                          y: isHovered ? -4 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="w-full md:w-80 h-64 md:h-auto rounded-2xl overflow-hidden shadow-lg shrink-0 relative"
                        style={{
                          border: `1px solid ${borderColor()}`,
                        }}
                      >
                        <OptimizedImage
                          src={process.image}
                          alt={process.title}
                          className="w-full h-full"
                        />

                        {/* Overlay gradient */}
                        <div
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            background: isHovered
                              ? "rgba(0,0,0,0.1)"
                              : "rgba(0,0,0,0.15)",
                          }}
                        />

                        {/* Step label on image */}
                        <motion.div
                          animate={{ opacity: isHovered ? 1 : 0.8 }}
                          transition={{ duration: 0.3 }}
                          className="absolute bottom-3 left-3 px-4 py-2 rounded-lg backdrop-blur-md font-bold text-sm"
                          style={{
                            background: "rgba(255,255,255,0.9)",
                            color: brandColors.secondary,
                          }}
                        >
                          Step {process.step}
                        </motion.div>
                      </motion.div>

                      {/* Content Card */}
                      <motion.div
                        animate={{
                          y: isHovered ? -6 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="flex-1 rounded-2xl p-8 md:p-8 pt-4 md:pt-8"
                        style={{
                          background: "rgba(255,255,255,0.96)",
                          border: `1px solid ${borderColor()}`,
                          boxShadow: isHovered
                            ? `0 20px 40px ${brandColors.accent}20`
                            : "0 6px 20px rgba(16,24,40,0.06)",
                        }}
                      >
                        <motion.h3
                          animate={{
                            color: isHovered
                              ? brandColors.accent
                              : brandColors.primary,
                          }}
                          transition={{ duration: 0.3 }}
                          className="text-2xl md:text-3xl font-black mb-4"
                          style={{ color: brandColors.primary }}
                        >
                          {process.title}
                        </motion.h3>

                        <p className="text-slate-600 mb-6 leading-relaxed text-base md:text-lg">
                          {process.description}
                        </p>

                        {/* Layer Visualization */}
                        {process.layers && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{
                              opacity: isHovered ? 1 : 0.85,
                              y: 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="space-y-3 mt-6 pt-6 border-t"
                            style={{ borderColor: borderColor() }}
                          >
                            <div
                              className="text-xs font-bold uppercase tracking-wider"
                              style={{ color: brandColors.tertiary }}
                            >
                              Layer Composition:
                            </div>
                            {process.layers.map((layer, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  delay: idx * 0.08,
                                  duration: 0.3,
                                }}
                                whileHover={{ x: 4 }}
                                className="flex items-center gap-4"
                              >
                                <motion.div
                                  animate={{
                                    scale: isHovered ? 1.15 : 1,
                                  }}
                                  transition={{ duration: 0.3 }}
                                  className="w-16 h-10 rounded-lg border-2 shadow-sm shrink-0"
                                  style={{
                                    background: layer.color,
                                    borderColor: borderColor(),
                                  }}
                                />
                                <span className="text-sm font-semibold text-slate-700">
                                  {layer.name}
                                </span>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* ─── FEATURES & SPECS GRID ─── */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Features Section */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            className="rounded-3xl p-8 shadow-xl backdrop-blur-sm group hover:shadow-2xl transition-shadow duration-300"
            style={{
              background: "rgba(255,255,255,0.96)",
              border: `1px solid ${borderColor()}`,
            }}
          >
            <h3
              className="text-2xl font-black mb-6"
              style={{ color: brandColors.primary }}
            >
              Key Features
            </h3>

            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  variants={cardFade}
                  whileHover={{ x: 6 }}
                  className="flex items-start gap-4 p-3 rounded-lg transition-colors duration-300 hover:bg-slate-50"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.1,
                    }}
                  >
                    <CheckCircle
                      className="w-5 h-5 shrink-0 mt-1"
                      style={{ color: brandColors.accent }}
                    />
                  </motion.div>
                  <span className="text-sm font-semibold text-slate-700 leading-relaxed">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Color Options */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            className="rounded-3xl p-8 shadow-xl backdrop-blur-sm hover:shadow-2xl transition-shadow duration-300"
            style={{
              background: "rgba(255,255,255,0.96)",
              border: `1px solid ${borderColor()}`,
            }}
          >
            <h3
              className="text-2xl font-black mb-6"
              style={{ color: brandColors.primary }}
            >
              Available Colors
            </h3>

            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              {availableColors.map((color, i) => (
                <motion.button
                  key={i}
                  variants={cardFade}
                  onClick={() => setSelectedColor(i)}
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-300"
                  style={{
                    borderColor:
                      selectedColor === i ? brandColors.accent : borderColor(),
                    background: selectedColor === i ? grad.card : "transparent",
                  }}
                >
                  {/* Color Swatch */}
                  <motion.div
                    animate={{
                      scale: selectedColor === i ? 1.1 : 1,
                      boxShadow:
                        selectedColor === i
                          ? `0 0 20px ${color.hex}60`
                          : "none",
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 rounded-xl border-2 shadow-md shrink-0"
                    style={{
                      background: color.hex,
                      borderColor:
                        selectedColor === i
                          ? brandColors.accent
                          : borderColor(),
                    }}
                  />

                  {/* Info */}
                  <div className="flex-1 text-left">
                    <div
                      className="text-base font-black"
                      style={{ color: brandColors.primary }}
                    >
                      {color.name}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      {color.description}
                    </div>
                  </div>

                  {/* Selected Indicator */}
                  {selectedColor === i && (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <CheckCircle
                        className="w-6 h-6"
                        style={{ color: brandColors.accent }}
                      />
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          {/* Product Image */}
          <motion.div
            variants={slideIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            className="rounded-3xl p-8 shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            style={{
              background: "rgba(255,255,255,0.96)",
              border: `1px solid ${borderColor()}`,
            }}
          >
            <motion.div
              whileHover={{
                scale: 1.08,
              }}
              transition={{ duration: 0.4 }}
              className="w-full h-80 rounded-2xl overflow-hidden"
            >
              <OptimizedImage
                src="/images/Face Mask/img1.jpeg"
                alt="Face Mask Product"
                className="w-full h-full shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* ─── TECHNICAL SPECIFICATIONS ─── */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-3xl p-8 md:p-12 shadow-xl backdrop-blur-sm"
          style={{
            background: "rgba(255,255,255,0.96)",
            border: `1px solid ${borderColor()}`,
          }}
        >
          <div className="flex items-center gap-3 mb-10">
            <motion.div
              animate={{ scale: [1, 1.15, 1], rotate: [0, 5, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Info
                className="w-6 h-6"
                style={{ color: brandColors.accent }}
              />
            </motion.div>
            <h3
              className="text-2xl font-extrabold"
              style={{ color: brandColors.primary }}
            >
              Technical Specifications
            </h3>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {specifications.map((spec, i) => {
              const Icon = spec.icon;
              return (
                <motion.div
                  key={i}
                  variants={cardFade}
                  whileHover={{ y: -6, scale: 1.05 }}
                  className="text-center p-6 rounded-xl"
                  style={{
                    background: "white",
                    border: `1px solid ${borderColor()}`,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                  }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.1,
                    }}
                    className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md"
                    style={{
                      background: `${brandColors.accent}10`,
                    }}
                  >
                    <Icon
                      className="w-8 h-8"
                      style={{ color: brandColors.accent }}
                    />
                  </motion.div>

                  <motion.div
                    animate={{
                      color: [brandColors.primary, brandColors.accent, brandColors.primary],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.15,
                    }}
                    className="text-3xl font-black mb-1"
                    style={{ color: brandColors.primary }}
                  >
                    {spec.value}
                  </motion.div>

                  <div className="text-sm font-semibold text-slate-600">
                    {spec.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.section>
      </main>

      {/* ─── CONTACT SECTION ─── */}
      <motion.section
        ref={contactRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative mt-24 py-16 border-t border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <AccentPill icon={Mail} text="Get in Touch" delay={0} />
            <motion.h2
              className="text-2xl sm:text-3xl font-black mb-3"
              style={{ color: brandColors.primary }}
            >
              Let's Connect
            </motion.h2>
            <p className="text-slate-600 max-w-xl mx-auto text-lg">
              For product inquiries, specifications, and bulk orders, contact
              our expert team today.
            </p>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: `0 20px 60px ${brandColors.accent}25`,
              }}
              className="inline-block rounded-2xl p-10 backdrop-blur-sm relative overflow-hidden group"
              style={{
                background: "rgba(255,255,255,0.96)",
                border: `1px solid ${borderColor()}`,
                boxShadow: "0 8px 32px rgba(16,24,40,0.1)",
              }}
            >
              {/* Animated background */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(circle, ${brandColors.accent}10, transparent)`,
                }}
              />

              <div className="relative z-10 flex items-center justify-center gap-5">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    boxShadow: [
                      `0 0 20px ${brandColors.accent}30`,
                      `0 0 40px ${brandColors.accent}50`,
                      `0 0 20px ${brandColors.accent}30`,
                    ],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: grad.card }}
                >
                  <Mail
                    className="w-7 h-7"
                    style={{ color: brandColors.accent }}
                  />
                </motion.div>

                <div className="text-left">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                    Email Us
                  </p>
                  <motion.a
                    href="mailto:admin.int@psgtech.ac.in"
                    whileHover={{ scale: 1.05, x: 4 }}
                    className="text-lg font-black transition-colors duration-200 hover:opacity-70"
                    style={{ color: brandColors.primary }}
                  >
                    admin.int@psgtech.ac.in
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <motion.p
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="text-sm text-slate-600"
            >
              ✓ We'll respond to your inquiry within 24 hours.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}