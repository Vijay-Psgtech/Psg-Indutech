import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Shield,
  CheckCircle,
  ArrowRight,
  Info,
  Settings,
  Wind,
  Zap,
  Package,
  Gauge,
  Ruler,
  FlaskConical,
  Factory,
  Cog,
  ScanLine,
  Scissors,
} from "lucide-react";
import {
  brandColors,
  grad,
  borderColor,
} from "../../components/common/brand.js";
import {
  applications,
  fiberRanges,
  processSteps,
  quickStats,
  specifications,
} from "../../components/data/DiloNeedleMachine";

/* ── Animation Variants ────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const cardFade = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ── Process step icon map ─────────────────────────────────────── */
const processIconMap = [Factory, ScanLine, Cog, Scissors];

/* ── Process image map ─────────────────────────────────────────── */
const processImagesMap = {
  0: "/images/NeedlePunching/MBO.jpeg",
  1: "/images/MACHINE PHOTOS - sima, coir, dilo, tasker/DILO/DiloCarding2.jpeg",
  2: "/images/MACHINE PHOTOS - sima, coir, dilo, tasker/DILO/DILOCrosslapper.jpeg",
  3: "/images/NeedlePunching/needlepunchingmachine.jpeg",
};

/* ── Spec icon map ─────────────────────────────────────────────── */
const specIconMap = [Ruler, Gauge, Package, ScanLine, Cog, Scissors, Wind, Zap];

/* ══════════════════════════════════════════════════════════════════
   IMAGE COMPONENT WITH FALLBACK
   ══════════════════════════════════════════════════════════════════ */
const OptimizedImage = ({ src, alt, className = "", style = {}, ...props }) => {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div
        className={`bg-linear-to-br from-slate-200 to-slate-300 flex items-center justify-center ${className}`}
        style={style}
      >
        <div className="text-center text-slate-500">
          <Package className="w-12 h-12 mx-auto mb-2 opacity-50" />
          <p className="text-xs font-semibold">Image not available</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onError={() => setImgError(true)}
      loading="lazy"
      {...props}
    />
  );
};

/* ══════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════════════════════════ */
export default function DiloNeedleMachine() {
  const [selectedProcess, setSelectedProcess] = useState(0);
  const [selectedFiber, setSelectedFiber] = useState(0);

  /* Build specs array from object */
  const specsArray = [
    { label: "Working Width", value: specifications.worlingWidth, icon: Ruler },
    {
      label: "Production Capacity",
      value: specifications.capacity,
      icon: Gauge,
    },
    { label: "GSM Range", value: specifications.gsmRange, icon: Package },
    {
      label: "Stitch Density",
      value: specifications.stitchDensity,
      icon: ScanLine,
    },
    {
      label: "Needle Density",
      value: specifications.needleDensity,
      icon: Cog,
    },
    {
      label: "Fiber Length",
      value: specifications.fiberLength,
      icon: Scissors,
    },
    { label: "Fiber Denier", value: specifications.fiberDenier, icon: Wind },
    { label: "Min. Order", value: specifications.moq, icon: Zap },
  ];

  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(180deg, #f8fafc, #eef6ff)" }}
    >
      {/* ══════════════════════════════════════════════════════════
          HERO SECTION
         ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left text panel */}
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div
                className="rounded-3xl p-8 lg:p-10 h-full flex flex-col justify-between"
                style={{
                  background: `${brandColors.primary}06`,
                  border: `1.5px solid ${borderColor()}`,
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.04)",
                }}
              >
                {/* Badge */}
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                    style={{
                      background: grad.card,
                      border: `1px solid ${borderColor()}`,
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                    }}
                  >
                    <Layers
                      className="w-4 h-4"
                      style={{ color: brandColors.accent }}
                    />
                    <span
                      className="text-xs font-bold uppercase tracking-widest"
                      style={{ color: brandColors.secondary }}
                    >
                      Nonwoven & Needle Punching
                    </span>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight"
                    style={{ color: brandColors.primary }}
                  >
                    Dilo Needle Punching Machine
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed max-w-lg"
                  >
                    COE Indutech has established a full-scale pilot needle-punch
                    production line supplied by DILO, Germany — capable of
                    processing fibres from 1.5 to 6.0 denier with cut lengths
                    between 38 mm and 61 mm.
                  </motion.p>

                  {/* Quick stat chips */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="flex flex-wrap gap-4 mb-8"
                  >
                    {quickStats.slice(0, 3).map((stat, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 bg-white/95 p-4 rounded-xl transition-all hover:shadow-lg"
                        style={{
                          border: `1px solid ${borderColor()}`,
                          backdropFilter: "blur(8px)",
                        }}
                      >
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-md"
                          style={{ background: grad.card }}
                        >
                          <Settings
                            className="w-6 h-6"
                            style={{ color: brandColors.accent }}
                          />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                            {stat.label}
                          </div>
                          <div
                            className="text-lg font-black"
                            style={{ color: brandColors.primary }}
                          >
                            {stat.value}
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>

                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold w-fit transition-all"
                  style={{
                    background: grad.subtle,
                    boxShadow: `0 12px 40px ${brandColors.accent}40`,
                  }}
                >
                  View Specifications
                  <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                </motion.button>
              </div>
            </motion.div>

            {/* Right image panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="h-full"
            >
              <div
                className="rounded-3xl p-6 h-full"
                style={{
                  background: `${brandColors.secondary}06`,
                  border: `1.5px solid ${borderColor()}`,
                  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.08)",
                }}
              >
                <div className="rounded-2xl overflow-hidden bg-linear-to-br from-indigo-50 to-cyan-50 flex items-center justify-center h-96 md:h-96 lg:h-[500px]">
                  <div className="relative w-full h-full">
                    <OptimizedImage
                      src="/images/dilo/dilo-image.jpg"
                      alt="Dilo Needle Punching Machine"
                      className="w-full h-full object-cover rounded-2xl shadow-2xl"
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                      className="absolute bottom-6 right-6 px-5 py-3 rounded-xl text-white font-bold shadow-lg backdrop-blur-md"
                      style={{ background: grad.subtle }}
                    >
                      Germany · DILO
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          MAIN CONTENT
         ══════════════════════════════════════════════════════════ */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 space-y-16 md:space-y-20">
        {/* ─── PROCESS STEPS ─── */}
        <section>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12 md:mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: grad.card,
                border: `1.5px solid ${borderColor()}`,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: brandColors.accent }}
              />
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: brandColors.secondary }}
              >
                Process Sections
              </span>
            </motion.div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight"
              style={{ color: brandColors.primary }}
            >
              Four Main Processing Stages
            </h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
              Raw material passes sequentially through each section of the
              needle-punching production line.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {processSteps.map((step, i) => {
              const Icon = processIconMap[i] || Factory;
              const isSelected = selectedProcess === i;

              return (
                <motion.button
                  key={step.id || i}
                  variants={cardFade}
                  onClick={() => setSelectedProcess(i)}
                  whileHover={{ y: -8, boxShadow: "0 20px 60px rgba(0, 0, 0, 0.12)" }}
                  className="relative text-left rounded-2xl p-6 md:p-8 transition-all duration-300 group cursor-pointer"
                  style={{
                    background: "rgba(255,255,255,0.98)",
                    border: `1.5px solid ${
                      isSelected ? brandColors.accent : borderColor()
                    }`,
                    boxShadow: isSelected
                      ? `0 20px 60px ${brandColors.accent}25`
                      : "0 8px 24px rgba(16,24,40,0.08)",
                  }}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="selectedProcess"
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        background: `${brandColors.accent}05`,
                        border: `1.5px solid ${brandColors.accent}`,
                      }}
                    />
                  )}

                  <div className="relative z-10">
                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center"
                        style={{ background: brandColors.accent }}
                      >
                        <CheckCircle className="w-6 h-6 text-white" />
                      </motion.div>
                    )}

                    <div className="flex items-start gap-4 mb-4">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg shrink-0"
                        style={{
                          background: isSelected ? grad.subtle : grad.card,
                        }}
                      >
                        <Icon
                          className="w-8 h-8"
                          style={{
                            color: isSelected ? "#fff" : brandColors.accent,
                          }}
                        />
                      </motion.div>

                      <div className="flex-1">
                        <span
                          className="text-xs font-bold uppercase tracking-widest block mb-1"
                          style={{ color: brandColors.accent }}
                        >
                          Step {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3
                          className="text-xl md:text-2xl font-black"
                          style={{ color: brandColors.primary }}
                        >
                          {step.name}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm md:text-base text-slate-600 mb-4 leading-relaxed">
                      {step.desc}
                    </p>

                    <div
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold"
                      style={{
                        background: grad.card,
                        color: brandColors.secondary,
                      }}
                    >
                      <Settings className="w-3.5 h-3.5" />
                      High-precision processing
                    </div>

                    {/* Selected: show step image inline */}
                    {isSelected && processImagesMap[i] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.4 }}
                        className="mt-6 rounded-xl overflow-hidden"
                      >
                        <OptimizedImage
                          src={processImagesMap[i]}
                          alt={step.name}
                          className="w-full object-cover rounded-xl shadow-lg"
                          style={{ maxHeight: "240px", display: "block" }}
                        />
                      </motion.div>
                    )}
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        </section>

        {/* ─── MANUFACTURING PROCESS FLOW ─── */}
        <section>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12 md:mb-16"
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: grad.card,
                border: `1.5px solid ${borderColor()}`,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
              }}
            >
              <Layers
                className="w-4 h-4"
                style={{ color: brandColors.accent }}
              />
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: brandColors.secondary }}
              >
                Production Line
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 leading-tight"
              style={{ color: brandColors.primary }}
            >
              Sequential Process Flow
            </h2>
            <p className="text-slate-500 max-w-3xl text-base sm:text-lg">
              Fibres pass through each stage in sequence, progressively
              transforming raw material into finished needle-punched nonwoven
              fabric.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6 lg:space-y-8"
          >
            {processSteps.map((step, i) => {
              const Icon = processIconMap[i] || Factory;
              const isLast = i === processSteps.length - 1;

              return (
                <motion.div key={step.id || i} className="relative">
                  <motion.div
                    variants={cardFade}
                    className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start"
                  >
                    {/* Icon + connecting line */}
                    <div className="relative shrink-0 w-full lg:w-auto">
                      <div
                        className="w-24 h-24 lg:w-28 lg:h-28 rounded-2xl flex items-center justify-center shadow-xl relative z-10 mx-auto lg:mx-0"
                        style={{ background: grad.subtle }}
                      >
                        <Icon className="w-10 lg:w-12 h-10 lg:h-12 text-white" />
                      </div>

                      {/* Connecting line */}
                      {!isLast && (
                        <div
                          className="hidden lg:block absolute top-28 left-1/2 -translate-x-1/2 w-1 h-20 rounded-full"
                          style={{ background: `${brandColors.accent}30` }}
                        />
                      )}

                      {/* Step badge */}
                      <div
                        className="absolute -top-3 -right-3 lg:-top-2 lg:-right-2 w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center text-sm font-black text-white shadow-lg"
                        style={{ background: brandColors.accent }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </div>
                    </div>

                    {/* Content card */}
                    <div
                      className="flex-1 rounded-2xl p-6 md:p-8 w-full"
                      style={{
                        background: "rgba(255,255,255,0.98)",
                        border: `1.5px solid ${borderColor()}`,
                        boxShadow: "0 8px 24px rgba(16,24,40,0.08)",
                      }}
                    >
                      <h3
                        className="text-2xl md:text-3xl font-black mb-3"
                        style={{ color: brandColors.primary }}
                      >
                        {step.name}
                      </h3>
                      <p className="text-base text-slate-600 mb-6 leading-relaxed">
                        {step.desc}
                      </p>

                      {/* Feature bullets */}
                      <div className="space-y-3 mb-6">
                        {[
                          "High precision mechanical processing",
                          "Optimized fiber alignment & web formation",
                          "Consistent quality output",
                        ].map((feat, fi) => (
                          <div key={fi} className="flex items-start gap-3">
                            <CheckCircle
                              className="w-5 h-5 shrink-0 mt-0.5"
                              style={{ color: brandColors.accent }}
                            />
                            <span className="text-sm md:text-base text-slate-600 leading-relaxed">
                              {feat}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Process image */}
                      {processImagesMap[i] && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 }}
                          className="rounded-xl overflow-hidden"
                        >
                          <OptimizedImage
                            src={processImagesMap[i]}
                            alt={step.name}
                            className="w-full object-cover rounded-xl transition-transform duration-300 hover:scale-105 shadow-lg"
                            style={{ maxHeight: "220px", display: "block" }}
                          />
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* ─── FEATURES + FIBER RANGE + IMAGE ─── */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Applications list */}
            <motion.div
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              className="rounded-2xl p-8 shadow-lg h-full"
              style={{
                background: "rgba(255,255,255,0.98)",
                border: `1.5px solid ${borderColor()}`,
              }}
            >
              <h3
                className="text-2xl md:text-3xl font-black mb-8"
                style={{ color: brandColors.primary }}
              >
                Key Applications
              </h3>
              <div className="space-y-4">
                {applications.map((app, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <CheckCircle
                      className="w-5 h-5 shrink-0 mt-0.5"
                      style={{ color: brandColors.accent }}
                    />
                    <span className="text-sm md:text-base font-semibold text-slate-700 leading-relaxed">
                      {app}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Fiber Range - COLUMN LAYOUT WITH GRID IMAGES */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              className="rounded-2xl p-8 shadow-lg lg:col-span-2"
              style={{
                background: "rgba(255,255,255,0.98)",
                border: `1.5px solid ${borderColor()}`,
              }}
            >
              <h3
                className="text-2xl md:text-3xl font-black mb-8"
                style={{ color: brandColors.primary }}
              >
                Fiber Range
              </h3>

              {/* Fiber items in column with images on left */}
              <div className="space-y-4">
                {(fiberRanges || []).map((fiber, i) => {
                  const isSelected = selectedFiber === i;

                  return (
                    <motion.button
                      key={i}
                      onClick={() => setSelectedFiber(i)}
                      whileHover={{ scale: 1.01, y: -2 }}
                      whileTap={{ scale: 0.99 }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="w-full flex items-center gap-5 p-5 rounded-xl border-2 transition-all duration-300"
                      style={{
                        borderColor: isSelected
                          ? brandColors.accent
                          : borderColor(),
                        background: isSelected
                          ? `${brandColors.accent}08`
                          : "rgba(255,255,255,0.5)",
                        boxShadow: isSelected
                          ? `0 8px 24px ${brandColors.accent}20`
                          : "0 2px 8px rgba(0,0,0,0.04)",
                      }}
                    >
                      {/* Fiber Image - Grid Style with proper aspect ratio */}
                      <div
                        className="relative rounded-lg overflow-hidden shrink-0 border-2"
                        style={{
                          width: "110px",
                          height: "110px",
                          borderColor: isSelected
                            ? brandColors.accent
                            : borderColor(),
                          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                        }}
                      >
                        <OptimizedImage
                          src={fiber.img}
                          alt={fiber.label}
                          className="w-full h-full object-cover"
                          style={{ display: "block" }}
                        />
                        {isSelected && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="absolute inset-0"
                            style={{
                              background: `${brandColors.accent}15`,
                            }}
                          />
                        )}
                      </div>

                      {/* Info Section */}
                      <div className="flex-1 text-left min-w-0">
                        <div
                          className="text-lg font-black leading-tight"
                          style={{ color: brandColors.primary }}
                        >
                          {fiber.label}
                        </div>
                        <div className="text-sm text-slate-500 mt-1.5 leading-relaxed">
                          Natural & synthetic fiber support
                        </div>
                      </div>

                      {/* Checkmark */}
                      {isSelected && (
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ type: "spring", stiffness: 200 }}
                          className="shrink-0"
                        >
                          <CheckCircle
                            className="w-7 h-7"
                            style={{ color: brandColors.accent }}
                            strokeWidth={2}
                          />
                        </motion.div>
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── SPECIFICATIONS GRID ─── */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="rounded-3xl p-8 md:p-12"
          style={{
            background: "rgba(255,255,255,0.98)",
            border: `1.5px solid ${borderColor()}`,
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
          }}
        >
          <div className="flex items-center gap-3 mb-10 md:mb-12">
            <Info
              className="w-7 h-7"
              style={{ color: brandColors.accent }}
            />
            <h3
              className="text-3xl md:text-4xl font-black"
              style={{ color: brandColors.primary }}
            >
              Technical Specifications
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {specsArray.map((spec, i) => {
              const Icon = spec.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="text-center p-6 rounded-2xl transition-all"
                  style={{
                    background: "white",
                    border: `1.5px solid ${borderColor()}`,
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md"
                    style={{ background: grad.card }}
                  >
                    <Icon
                      className="w-9 h-9"
                      style={{ color: brandColors.accent }}
                    />
                  </motion.div>
                  <div
                    className="text-2xl md:text-3xl font-black mb-2"
                    style={{ color: brandColors.primary }}
                  >
                    {spec.value}
                  </div>
                  <div className="text-sm font-semibold text-slate-600 leading-snug">
                    {spec.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* ─── RAW MATERIALS OVERVIEW ─── */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="rounded-3xl p-8 md:p-12"
          style={{
            background: `linear-gradient(135deg, ${brandColors.primary}05, ${brandColors.accent}08)`,
            border: `1.5px solid ${borderColor()}`,
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.06)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{
              background: grad.card,
              border: `1.5px solid ${borderColor()}`,
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
            }}
          >
            <FlaskConical
              className="w-4 h-4"
              style={{ color: brandColors.accent }}
            />
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: brandColors.secondary }}
            >
              Processable Fibres
            </span>
          </motion.div>

          <h3
            className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-tight"
            style={{ color: brandColors.primary }}
          >
            Wide Range of Raw Materials
          </h3>
          <p className="text-slate-600 mb-10 max-w-3xl text-base md:text-lg leading-relaxed">
            The system is highly versatile and can process a wide range of
            natural, synthetic, and recycled fibre types to meet diverse
            industrial requirements.
          </p>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {[
              "Polypropylene (PP)",
              "Polyester (PET)",
              "Nylon",
              "Cotton",
              "Jute",
              "Flax",
              "Recycled Shoddy",
              "Aramid",
            ].map((material, idx) => (
              <motion.div
                key={idx}
                variants={cardFade}
                whileHover={{ scale: 1.06, y: -4 }}
                className="rounded-xl p-4 border-2 transition-all shadow-md cursor-default"
                style={{
                  background: "rgba(255,255,255,0.96)",
                  borderColor: borderColor(),
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                }}
              >
                <div className="flex items-center gap-2.5">
                  <motion.div
                    className="p-2 rounded-lg shrink-0"
                    style={{ background: grad.subtle }}
                    whileHover={{ scale: 1.15, rotate: 10 }}
                  >
                    <CheckCircle
                      className="w-5 h-5 text-white"
                      strokeWidth={2.5}
                    />
                  </motion.div>
                  <span
                    className="font-bold text-sm leading-tight"
                    style={{ color: brandColors.primary }}
                  >
                    {material}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </main>

      {/* ══════════════════════════════════════════════════════════
          CTA SECTION
         ══════════════════════════════════════════════════════════ */}
      <section
        className="mt-20 py-16 md:py-20 border-t border-slate-200"
        style={{ background: "linear-gradient(135deg, #1e293b, #0f172a)" }}
      >
        <motion.div
          className="max-w-4xl mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 mb-8 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Connect with our technical experts to explore custom nonwoven
            solutions using the Dilo needle-punching line.
          </p>

          <motion.button
            className="px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-white inline-flex items-center gap-2 transition-all shadow-xl"
            style={{
              background: `linear-gradient(135deg, ${brandColors.accent}, ${brandColors.primary})`,
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: `0 20px 60px ${brandColors.accent}50`,
            }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Us Now
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </section>

      {/* Contact */}
      <div className="py-12 md:py-16 border-t border-slate-200 bg-white">
        <motion.div
          className="max-w-4xl mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="font-bold text-slate-700 mb-6 text-base md:text-lg">
            For any enquiries, please contact:
          </p>

          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div
              className="rounded-2xl px-8 py-6 border-2 text-center transition-all"
              style={{
                background: `${brandColors.accent}10`,
                borderColor: `${brandColors.accent}30`,
              }}
            >
              <a
                href="mailto:Admin.int@psgtech.ac.in"
                className="font-bold flex items-center justify-center gap-2 transition-all hover:opacity-70 text-base md:text-lg"
                style={{ color: brandColors.secondary }}
              >
                <Shield className="w-5 h-5" />
                Admin.int@psgtech.ac.in
              </a>
            </div>
          </motion.div>

          <p className="text-slate-500 mt-8 text-sm">
            © 2024 COE Indutech. All rights reserved. DILO Technology Partner.
          </p>
        </motion.div>
      </div>
    </div>
  );
}