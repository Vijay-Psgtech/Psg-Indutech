import React, { useState, useRef } from "react";
import { CheckCircle, Layers, User, Mail, CheckCircle2 } from "lucide-react";

import {
  quickStats,
  sections,
  processSteps,
  applications,
  specifications,
  prodImages,
} from "../../components/data/CoirNeedleData";
import { brandColors, grad } from "../../components/common/brand";
import { motion } from "framer-motion";
import usePageTitle from "../../hooks/usePageTitle.jsx";


const PROCESS_IMAGES = {
  // Option A: Recommended
  0: "/images/MACHINE PHOTOS - sima, coir, dilo, tasker/COIR/Coir plant - Opener 1.jpeg",
  1: "/images/MACHINE PHOTOS - sima, coir, dilo, tasker/COIR/Coir plant - Opener Conveyor.jpeg",
  2: "/images/MACHINE PHOTOS - sima, coir, dilo, tasker/COIR/Coir plant - Needle loom 2.jpeg",
  3: "/images/MACHINE PHOTOS - sima, coir, dilo, tasker/COIR/Coir plant - Opener Conveyor.jpeg",
  4: "/images/coir/img5.jpg",

  
};

const APP_IMAGES = {
  mulch: "/images/products/Mulch1.png",
  mattress: "/images/products/Matress1.png",
  coir: "/images/products/coir1.png",
  garden: "/images/products/garden1.png",
  biofilter: "/images/products/biofilter1.png",
  geotextile: "/images/products/geotextiles1.png",
};

/** Returns the correct image URL for a given app name */
const getAppImage = (name = "") => {
  const n = name.toLowerCase();
  if (n.includes("mulch")) return APP_IMAGES.mulch;
  if (n.includes("mattress") || n.includes("matress"))
    return APP_IMAGES.mattress;
  if (n.includes("coir board") || n.includes("board")) return APP_IMAGES.coir;
  if (n.includes("garden")) return APP_IMAGES.garden;
  if (n.includes("biofilter")) return APP_IMAGES.biofilter;
  if (n.includes("geotextile")) return APP_IMAGES.geotextile;
  return null;
};

/* ── ENHANCED PROCESS STEP CARD COMPONENT ─────────────────
   Matching Needle Punching layout with alternating image/text
─────────────────────────────────────────────────────────── */
const ProcessStepCard = ({ step, index, imageUrl, isEven }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = step.icon;
  const stepNumber = index + 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      viewport={{ once: true, margin: "-50px" }}
      className={`flex flex-col ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-8 lg:gap-12 items-center mb-16 lg:mb-24`}
    >
      {/* Image Section */}
      <motion.div
        className="w-full lg:w-1/2 relative overflow-hidden rounded-2xl shadow-xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.02 }}
      >
        <div className="relative h-72 lg:h-80 overflow-hidden bg-slate-900">
          <motion.img
            src={imageUrl}
            alt={step.name}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            animate={{ scale: isHovered ? 1.08 : 1 }}
            transition={{ duration: 0.5 }}
            onError={(e) => {
              // Fallback if image not found
              e.target.style.display = "none";
            }}
          />

          {/* Fallback placeholder */}
          {!imageUrl && (
            <div className="absolute inset-0 bg-linear-to-br from-slate-800 to-slate-900 flex items-center justify-center">
              <div className="text-center">
                <svg
                  className="w-16 h-16 mx-auto mb-3 opacity-30"
                  fill="none"
                  stroke="white"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-white/50 text-sm">Step {stepNumber} Image</p>
              </div>
            </div>
          )}

          {/* Overlay */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%)`,
            }}
            animate={{ opacity: isHovered ? 0.6 : 0.3 }}
            transition={{ duration: 0.3 }}
          />

          {/* Step Number Badge - Top Right */}
          <motion.div
            className="absolute top-4 right-4 z-20"
            animate={{ y: isHovered ? -4 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center font-black text-xl text-white shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${brandColors.accent}, ${brandColors.primary})`,
              }}
            >
              {String(stepNumber).padStart(2, "0")}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="w-full lg:w-1/2 flex flex-col justify-center space-y-4"
        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: index * 0.15 + 0.2 }}
        viewport={{ once: true }}
      >
        {/* Step Label */}
        <motion.div
          className="inline-flex items-center gap-2 w-fit"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
          viewport={{ once: true }}
        >
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: brandColors.accent }}
          />
          <span
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: brandColors.accent }}
          >
            Step {stepNumber}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h3
          className="text-2xl lg:text-3xl font-black leading-tight"
          style={{ color: brandColors.primary }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
          viewport={{ once: true }}
        >
          {step.name}
        </motion.h3>

        {/* Description */}
        <motion.p
          className="text-sm lg:text-base text-slate-700 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
          viewport={{ once: true }}
        >
          {step.desc}
        </motion.p>

        {/* Features List */}
        <motion.div
          className="space-y-2 py-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
          viewport={{ once: true }}
        >
          {[
            `Precision ${step.name.toLowerCase()} technology`,
            `Optimized fiber interlocking`,
            `Consistent quality output`,
          ].map((feature, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-2"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.15 + 0.4 + i * 0.08,
              }}
              viewport={{ once: true }}
            >
              <CheckCircle2
                size={16}
                style={{ color: brandColors.accent }}
                className="shrink-0 mt-1"
              />
              <span className="text-sm text-slate-700">{feature}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default function CoirNeedleFeltLine() {
  usePageTitle("Coir Needle Felt Line");
  const [activeSection, setActiveSection] = useState("overview");
  const [selectedApp, setSelectedApp] = useState(null);

  // Ref for scroll-to-contact
  const contactRef = useRef(null);
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="min-h-screen bg-white text-left">
      {/* ── Top Banner ─────────────────────────────────── */}
      <header className="relative overflow-hidden h-[480px] flex items-center">
        <div
          className="absolute inset-0 w-full h-full bg-center bg-cover md:bg-fixed bg-no-repeat z-0"
          style={{ backgroundImage: `url(/images/coir/coir-needle-1.jpg)` }}
        />
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative hidden md:block"
            >
              <div className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-2xl" />
            </motion.div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex-1 text-left"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3 leading-tight drop-shadow-lg">
                Coir Needle Felt Line
              </h1>
              <p className="text-sm md:text-base text-cyan-100 font-medium">
                M/s 2M Engineers | 100% Natural Geotextile Solutions for Erosion
              </p>
              <p className="text-sm text-gray-200 mt-2 max-w-xl">
                Coir is a natural material widely used for erosion control. Coir
                needled felt geotextiles are nonwoven fabrics made from 100% coir
                fibre.
              </p>
              <div className="mt-6 flex gap-4">
                <button
                  className="px-6 py-3 rounded-lg text-white font-semibold shadow-lg hover:bg-cyan-600 transition"
                  onClick={() => setActiveSection("process")}
                  style={{ background: `${grad.subtle}` }}
                >
                  View Process
                </button>
                <button
                  onClick={scrollToContact}
                  className="px-6 py-3 rounded-lg border border-white text-white hover:bg-white hover:text-black transition"
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* ── Main Layout ─────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Side Navigation */}
          <aside className="hidden lg:block w-56 lg:w-64 shrink-0">
            <div className="sticky top-8 space-y-2">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => {
                      setActiveSection(section.id);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl smooth-all text-left ${
                      activeSection === section.id
                        ? "text-white shadow-lg"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                    style={
                      activeSection === section.id
                        ? { background: `${grad.subtle}` }
                        : {}
                    }
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-bold">{section.label}</span>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Mobile Navigation */}
          <div className="lg:hidden w-full mb-6 sm:mb-8">
            <div className="flex gap-2 overflow-x-auto pb-2 max-w-full">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl smooth-all whitespace-nowrap ${
                      activeSection === section.id
                        ? "text-white shadow-lg"
                        : "bg-slate-100 text-slate-700"
                    }`}
                    style={
                      activeSection === section.id
                        ? { background: `${grad.subtle}` }
                        : {}
                    }
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-bold text-sm">{section.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Main Content ─────────────────────────────────── */}
          <main className="flex-1 min-w-0">
            {/* Overview */}
            {activeSection === "overview" && (
              <div className="space-y-8 sm:space-y-12 animate-slide-right">
                <div
                  className="rounded-3xl p-6 sm:p-10 border-2 shadow-sm"
                  style={{
                    background: `linear-gradient(135deg, ${brandColors.primary}08, ${brandColors.accent}08)`,
                    borderColor: `${brandColors.tertiary}40`,
                  }}
                >
                  <h2
                    className="text-3xl sm:text-4xl font-extrabold mb-4 sm:mb-6 underline decoration-[3px] underline-offset-4"
                    style={{ color: brandColors.primary }}
                  >
                    Coir Needle Felt Line
                  </h2>
                  <div className="space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
                    <p>
                      <span className="font-semibold text-slate-800">Coir</span>{" "}
                      is a natural material widely used for erosion control. When
                      manufactured into nonwoven geotextiles and placed on
                      vulnerable areas, coir geotextiles help retain water,
                      prevent the topsoil from drying out, and promote the growth
                      of new vegetation.
                    </p>
                    <p>
                      <span className="font-semibold text-slate-800">
                        Coir needled felt geotextiles
                      </span>{" "}
                      are nonwoven fabrics made from 100% coir fibre. The fibres
                      are randomly needle-punched to achieve the desired
                      compaction. These fabrics can be produced with:
                    </p>
                    <ul className="list-disc list-inside pl-2 sm:pl-4 text-slate-700 space-y-1 sm:space-y-2">
                      <li>
                        <strong>Thickness:</strong> 10–15 mm
                      </li>
                      <li>
                        <strong>GSM:</strong> 800–1200
                      </li>
                    </ul>
                    <p>
                      <span className="font-semibold text-slate-800">
                        Manufacturing process
                      </span>{" "}
                      includes opening and cleaning machine, needle loom and
                      winder. The fibres are pneumatically conveyed to the needle
                      loom, where they are punched to form felts of varying
                      density, thickness, and punching intensity. No additional
                      bonding material is used in this process, ensuring strong,
                      durable, and environmentally friendly geotextiles suitable
                      for erosion control.
                    </p>
                    <p>
                      The machine is also equipped with{" "}
                      <strong>spraying and dryer units</strong> to apply adhesive
                      for producing composite boards, garden articles, and other
                      coir-based applications.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mt-4">
                    {quickStats.map((stat, idx) => (
                      <div
                        key={idx}
                        className="bg-white/10 backdrop-blur-sm border border-black/30 rounded-xl p-2 sm:p-4"
                      >
                        <div className="text-black text-sm font-semibold mb-1">
                          {stat.label}
                        </div>
                        <div
                          className="text-2xl font-black"
                          style={{ color: brandColors.secondary }}
                        >
                          {stat.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* PROCESS WITH ENHANCED LAYOUT */}
            {activeSection === "process" && (
              <section className="space-y-12 py-4 animate-slide-right">
                {/* Section Header */}
                <motion.div
                  className="text-left mb-8"
                  initial={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full text-xs"
                    style={{
                      background: `${brandColors.accent}15`,
                      color: brandColors.accent,
                    }}
                  >
                    <span className="font-bold tracking-widest uppercase">
                      Production Pipeline
                    </span>
                  </motion.div>

                  <h2
                    className="text-2xl lg:text-4xl font-black mb-3 leading-tight"
                    style={{ color: brandColors.primary }}
                  >
                    Complete Manufacturing Process Flow
                  </h2>

                  <p className="text-sm lg:text-base text-slate-600 max-w-2xl">
                    Discover each stage of our advanced coir needle punching
                    manufacturing process with precision engineering and quality
                    control
                  </p>
                </motion.div>

                {/* Process Steps with Images */}
                <div className="relative">
                  {processSteps.map((step, index) => (
                    <ProcessStepCard
                      key={step.id}
                      step={step}
                      index={index}
                      imageUrl={PROCESS_IMAGES[index]}
                      isEven={index % 2 === 0}
                    />
                  ))}
                </div>

                {/* Completion Summary */}
                <motion.div
                  className="mt-12 rounded-2xl p-8 lg:p-10 border"
                  style={{
                    background: `linear-gradient(135deg, ${brandColors.accent}12, ${brandColors.primary}12)`,
                    borderColor: `${brandColors.accent}25`,
                  }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 flex-none"
                      style={{
                        background: `linear-gradient(135deg, ${brandColors.accent}, ${brandColors.primary})`,
                      }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <h3
                      className="text-2xl font-black"
                      style={{ color: brandColors.primary }}
                    >
                      Premium Quality Output
                    </h3>
                  </div>

                  <p className="text-sm lg:text-base text-slate-700 mb-6 leading-relaxed">
                    After completing all five stages of our advanced coir needle
                    punching process, the finished nonwoven geotextile fabric
                    undergoes final quality checks to ensure perfect balance of
                    strength, durability, and environmental sustainability with
                    consistent quality for erosion control applications.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { label: "Working Width", value: "1.5 - 2m" },
                      { label: "GSM Range", value: "800 - 1200 g/m²" },
                      { label: "Thickness", value: "10 - 15 mm" },
                    ].map((stat, i) => (
                      <motion.div
                        key={i}
                        className="p-4 rounded-lg border"
                        style={{
                          background: `rgba(255,255,255,0.5)`,
                          borderColor: `${brandColors.accent}20`,
                        }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div
                          className="text-xs font-bold tracking-wider uppercase mb-1"
                          style={{ color: brandColors.accent }}
                        >
                          {stat.label}
                        </div>
                        <div
                          className="text-xl font-black"
                          style={{ color: brandColors.primary }}
                        >
                          {stat.value}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </section>
            )}

            {/* Specifications */}
            {activeSection === "specifications" && (
              <div className="space-y-10 animate-slide-right">
                <div>
                  <h2
                    className="text-4xl font-black mb-4"
                    style={{ color: brandColors.primary }}
                  >
                    Technical Specifications
                  </h2>
                  <p className="text-lg text-slate-600">
                    Explore detailed specifications and core performance
                    capabilities.
                  </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div
                    className="relative rounded-2xl overflow-hidden shadow-xl border flex items-center justify-center bg-white"
                    style={{
                      borderColor: `${brandColors.tertiary}40`,
                      height: "100%",
                    }}
                  >
                    <img
                      src="/images/coir/coir-needle-1.jpg"
                      alt="Coir Needle Image"
                      className="w-full h-56 sm:h-full object-contain p-2 sm:p-4"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute bottom-4 left-4 text-white font-semibold text-lg drop-shadow-lg bg-slate-900/40 px-3 py-1.5 rounded-md">
                      Coir Needle Felt Line
                    </div>
                  </div>
                  <div
                    className="rounded-2xl border-2 overflow-hidden shadow-md"
                    style={{
                      borderColor: `${brandColors.tertiary}30`,
                      background: `linear-gradient(135deg, ${brandColors.primary}03, ${brandColors.accent}05)`,
                    }}
                  >
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-slate-100/50 text-left">
                          <th className="p-4 text-sm font-semibold uppercase text-slate-500 w-1/2">
                            Parameter
                          </th>
                          <th className="p-4 text-sm font-semibold uppercase text-slate-500">
                            Details
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            label: "Working Width",
                            value: specifications.workingWidth,
                          },
                          {
                            label: "Production Capacity",
                            value: specifications.capacity,
                          },
                          { label: "GSM Range", value: specifications.gsm },
                          {
                            label: "Thickness",
                            value: specifications.thickness,
                          },
                          {
                            label: "Needle Boards",
                            value: specifications.needleBoards,
                          },
                          {
                            label: "Minimum Order",
                            value: specifications.moq,
                          },
                        ].map((row, idx) => (
                          <tr
                            key={idx}
                            className={`border-t ${
                              idx % 2 === 0
                                ? "bg-white/50"
                                : "bg-slate-50/30"
                            }`}
                            style={{
                              borderColor: `${brandColors.tertiary}30`,
                            }}
                          >
                            <td className="p-4 font-medium text-slate-700">
                              {row.label}
                            </td>
                            <td
                              className="p-4 font-bold"
                              style={{ color: brandColors.primary }}
                            >
                              {row.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div
                  className="rounded-2xl p-4 sm:p-8 border-2 shadow-sm"
                  style={{ borderColor: `${brandColors.tertiary}40` }}
                >
                  <h3
                    className="text-lg sm:text-2xl font-black mb-6"
                    style={{ color: brandColors.primary }}
                  >
                    Raw Materials
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {specifications.materials.map((material, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl text-center border transition-all duration-300 hover:shadow-md"
                        style={{
                          background: `linear-gradient(135deg, ${brandColors.primary}08, ${brandColors.accent}08)`,
                          border: `2px solid ${brandColors.tertiary}30`,
                        }}
                      >
                        <div
                          className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 rounded-full flex items-center justify-center"
                          style={{
                            backgroundColor: `${brandColors.accent}15`,
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke={brandColors.accent}
                            className="w-5 h-5 sm:w-6 sm:h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 2c1.657 0 3 1.343 3 3v2a3 3 0 01-6 0V5c0-1.657 1.343-3 3-3zM6 10a6 6 0 1112 0v8a6 6 0 11-12 0v-8z"
                            />
                          </svg>
                        </div>
                        <div
                          className="text-sm font-semibold"
                          style={{ color: brandColors.primary }}
                        >
                          {material}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-16 px-4">
                  {prodImages.map((img, i) => (
                    <div
                      key={i}
                      className="relative group rounded-2xl overflow-hidden shadow-lg transform-gpu"
                    >
                      <img
                        src={img.img}
                        alt={img.label}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-56 sm:h-64 object-cover transition-transform duration-300 group-hover:scale-105 will-change-transform"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <p className="text-white font-semibold">{img.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── Applications ─────────────────────────────────── */}
            {activeSection === "applications" && (
              <div className="space-y-10 animate-slide-right">
                <div>
                  <h2
                    className="text-2xl sm:text-4xl font-black mb-2 sm:mb-4"
                    style={{ color: brandColors.primary }}
                  >
                    Applications
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600">
                    Versatile solutions for erosion control, agriculture, and
                    environmental protection
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {applications.map((app, idx) => {
                    const Icon = app.icon;
                    const isSelected = selectedApp === idx;
                    const imgUrl = getAppImage(app.name);

                    return (
                      <div
                        key={idx}
                        onClick={() =>
                          setSelectedApp(isSelected ? null : idx)
                        }
                        className="group cursor-pointer"
                      >
                        <div
                          className={`relative overflow-hidden rounded-2xl border-2 smooth-all transition-all duration-300 ${
                            isSelected
                              ? "shadow-2xl scale-[1.02]"
                              : "hover:shadow-xl hover:scale-[1.01]"
                          }`}
                          style={{
                            borderColor: isSelected
                              ? brandColors.accent
                              : `${brandColors.tertiary}40`,
                            minHeight: 280,
                          }}
                        >
                          {/* ── Background image ── */}
                          {imgUrl && (
                            <div
                              className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-105"
                              style={{ backgroundImage: `url(${imgUrl})` }}
                            />
                          )}

                          {/* ── Scrim: dark at rest, branded gradient when selected ── */}
                          <div
                            className="absolute inset-0 transition-all duration-400"
                            style={{
                              background: isSelected
                                ? `linear-gradient(160deg, ${brandColors.primary}d0 0%, ${brandColors.accent}a0 100%)`
                                : "linear-gradient(160deg, rgba(0,0,0,0.52) 0%, rgba(0,0,0,0.70) 100%)",
                            }}
                          />

                          {/* ── Card content ── */}
                          <div
                            className="relative z-10 p-5 sm:p-6 flex flex-col"
                            style={{ minHeight: 280 }}
                          >
                            {/* Top row — icon + checkmark */}
                            <div className="flex items-start justify-between mb-4">
                              <div
                                className="p-2 sm:p-3 rounded-xl"
                                style={{
                                  backgroundColor: "rgba(255,255,255,0.18)",
                                  backdropFilter: "blur(6px)",
                                  border: "1px solid rgba(255,255,255,0.28)",
                                }}
                              >
                                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                              </div>
                              {isSelected && (
                                <CheckCircle className="w-6 h-6 text-white drop-shadow" />
                              )}
                            </div>

                            {/* Title */}
                            <h3 className="text-lg sm:text-xl font-bold mb-2 text-white drop-shadow">
                              {app.name}
                            </h3>

                            {/* Description */}
                            <p
                              className="text-sm leading-relaxed wrap-break-word"
                              style={{
                                color: "rgba(255,255,255,0.82)",
                              }}
                            >
                              {app.desc}
                            </p>

                            {/* Benefits — expand on click */}
                            {isSelected && app.benefits?.length > 0 && (
                              <div
                                className="mt-4 pt-4 border-t space-y-2"
                                style={{
                                  borderColor: "rgba(255,255,255,0.25)",
                                }}
                              >
                                {app.benefits.map((benefit, bidx) => (
                                  <div
                                    key={bidx}
                                    className="flex items-start gap-2"
                                  >
                                    <div
                                      className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                                      style={{ backgroundColor: "#fff" }}
                                    />
                                    <span className="text-xs sm:text-sm text-white/90 wrap-break-word">
                                      {benefit}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* Hover hint */}
                            {!isSelected && (
                              <p className="mt-auto pt-3 text-xs font-semibold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white/70">
                                Click to explore →
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* ── Bottom CTA / Contact ── */}
      <div
        ref={contactRef}
        className="mt-10 sm:mt-20 py-8 sm:py-16 border-t border-indigo-100"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <p className="font-medium mb-2">For any enquiries, please contact:</p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-4 sm:px-6 py-2 sm:py-3 w-full sm:w-auto">
              <div className="flex flex-col items-center justify-center mt-3 space-y-2 text-gray-700">
                <div className="flex items-center gap-2">
                  <Mail
                    className="w-4 h-4"
                    style={{ color: brandColors.secondary }}
                  />
                  <a
                    href="mailto:Mfr1.int@psgtech.ac.in"
                    className="font-medium transition-all"
                    style={{ color: brandColors.secondary }}
                  >
                    Mfr1.int@psgtech.ac.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}