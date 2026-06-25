import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Layers,
  CheckCircle2,
  Sparkles,
  User,
  Mail,
  ArrowRight,
  Zap,
  ChevronRight,
  Heart,
  Wind,
  Shield,
  Truck,
  Droplets,
  Shirt,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  specifications,
  processSteps,
  applications,
  sections,
  quickStats,
  prodImages,
} from "../../components/data/NeedlePunchingData";
import { brandColors, grad } from "../../components/common/brand";
import usePageTitle from "../../hooks/usePageTitle.jsx";

// Process images mapping
const processImagesMap = {
  0: "/images/NeedlePunching/MBO.jpeg",
  1: "/images/NeedlePunching/Mono cylinder.jpeg",
  2: "/images/NeedlePunching/Flexiclean1.jpeg",
  3: "/images/NeedlePunching/Carding.jpeg",
  4: "/images/NeedlePunching/Crosslapper.jpeg",
  5: "/images/NeedlePunching/Needleloom2.jpeg",
};

const appImages = {
  Filters: "/images/products/Spunfilter.JPG",
  "Medical Cast Pads": "/images/products/pads.webp",
  Wipes: "/images/products/kitchen-wipes.webp",
};

// Enhanced Process Step Card - Matching Screenshot Layout
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
      className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
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
          />

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
            `Advanced ${step.name.toLowerCase()} technology`,
            `Enhanced precision and efficiency`,
            `Optimized for quality output`,
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

// Main Component
export default function NeedlePunchingMachinePremium() {
  usePageTitle("Engineered Needle punching process");
  const [activeSection, setActiveSection] = useState("overview");
  const contactRef = useRef(null);
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact", {
      state: {
        recipientEmail: "mfr1.int@psgtech.ac.in",
        service: "Needle Punching Machine",
        source: "Needle Punching Machine Page",
      },
    });
  };

  const handleContactScroll = () => {
    setTimeout(() => {
      contactRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50 text-left">
      {/* ═══ HERO SECTION ═══ */}
      <header className="relative overflow-hidden h-[480px] flex items-center">
        <div
          className="absolute inset-0 w-full h-full bg-center bg-cover md:bg-fixed bg-no-repeat z-0"
          style={{
            backgroundImage: `url(/images/NeedlePunching/needle-punching-machine.jpeg)`,
          }}
        />
        <div className="absolute inset-0 bg-black/50 z-0" />

        <div className="relative  mx-auto px-4 sm:px-6 lg:px-8 w-full sm:mt-50">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            {/* Icon Card */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative hidden md:block"
            >
              <div className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-2xl" />


            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex-1 text-left"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3 leading-tight drop-shadow-lg">
                Engineered Needle punching process
              </h1>

              <p className="text-sm text-gray-200 mt-2 max-w-xl">
                Engineering next-generation non-woven textiles through
                high-performance mechanical fiber interlocking for filter and
                medical applications.
              </p>

              {/* Optional CTA */}
              <div className="mt-6 flex gap-4">
                <button
                  className="px-6 py-3 rounded-lg text-white font-semibold shadow-lg hover:bg-cyan-600 transition"
                  onClick={() => setActiveSection("specifications")}
                  style={{ background: `${grad.subtle}` }}
                >
                  View Specifications
                </button>

                <button
                  onClick={handleContactScroll}
                  className="px-6 py-3 rounded-lg border border-white text-white hover:bg-white hover:text-black transition"
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* ═══ MAIN CONTENT ═══ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Side Navigation */}
          <aside className="hidden lg:block w-56 shrink-0">
            <div className="sticky top-8 space-y-1.5">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <motion.button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center gap-3 px-5 py-3 rounded-lg transition-all duration-300 text-sm font-bold ${activeSection === section.id
                      ? "text-white shadow-md"
                      : "text-slate-600 hover:bg-slate-50"
                      }`}
                    style={
                      activeSection === section.id
                        ? { background: grad.subtle }
                        : {}
                    }
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span>{section.label}</span>
                  </motion.button>
                );
              })}
            </div>
          </aside>

          {/* Mobile Navigation */}
          <div className="lg:hidden w-full mb-6">
            <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <motion.button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap font-bold text-xs transition-all ${activeSection === section.id
                      ? "text-white shadow-md"
                      : "bg-slate-100 text-slate-600"
                      }`}
                    style={
                      activeSection === section.id
                        ? { background: grad.subtle }
                        : {}
                    }
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{section.label}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Main Content Area */}
          <main className="flex-1 min-w-0">
            {/* ═══ OVERVIEW SECTION ═══ */}
            {activeSection === "overview" && (
              <section className="space-y-8 py-4">
                {/* Heading */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2
                    className="text-3xl font-black mb-1"
                    style={{ color: brandColors.primary }}
                  >
                    Core Technical Capabilities
                  </h2>
                  <p className="text-sm text-slate-600">
                    Precision engineering for advanced nonwoven production
                  </p>
                </motion.div>

                {/* Main Content Box */}
                <motion.div
                  className="rounded-2xl p-8 lg:p-10 border shadow-sm"
                  style={{
                    background: `linear-gradient(135deg, ${brandColors.primary}03, ${brandColors.accent}03)`,
                    borderColor: `${brandColors.accent}20`,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Text Content */}
                    <div className="space-y-5">
                      <h3
                        className="text-2xl font-black"
                        style={{ color: brandColors.primary }}
                      >
                        {specifications.name}
                      </h3>

                      <p className="text-sm text-slate-700 leading-relaxed">
                        Needle punching is a nonwoven manufacturing process in
                        which fibres are mechanically entangled to produce a
                        fabric. The machine handles 0.8 to 16D fibres
                        including viscose, polyester, nylon, PP and more.
                      </p>

                      <p className="text-sm text-slate-700 leading-relaxed">
                        The finished width is 1.5 meters with advanced
                        calendaring for premium finishing and optimal
                        performance characteristics.
                      </p>

                      {/* Stats Grid - 2x2 */}
                      <div className="grid grid-cols-2 gap-4 pt-2">
                        {quickStats.map((stat, idx) => (
                          <motion.div
                            key={idx}
                            className="rounded-lg p-3 border"
                            style={{
                              background: `${brandColors.accent}08`,
                              borderColor: `${brandColors.accent}20`,
                            }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <div
                              className="text-xs font-bold tracking-wider uppercase mb-1"
                              style={{ color: brandColors.accent }}
                            >
                              {stat.label}
                            </div>
                            <div
                              className="text-lg font-black"
                              style={{ color: brandColors.primary }}
                            >
                              {stat.value}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Images - 2 Column Grid */}
                    <motion.div
                      className="grid grid-cols-2 gap-4"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="rounded-xl overflow-hidden shadow-md h-44"
                        whileHover={{ scale: 1.05 }}
                      >
                        <img
                          src="/images/NeedlePunching/Carding.jpeg"
                          alt="Technical process"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </motion.div>
                      <motion.div
                        className="rounded-xl overflow-hidden shadow-md h-44"
                        whileHover={{ scale: 1.05 }}
                      >
                        <img
                          src="/images/NeedlePunching/needle-punching-machine.jpeg"
                          alt="Machine facility"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </section>
            )}

            {/* ═══ PROCESS SECTION ═══ */}
            {activeSection === "process" && (
              <section className="space-y-12 py-4">
                {/* Section Header */}
                <motion.div
                  className="text-center mb-8"
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
                    className="text-3xl lg:text-4xl font-black mb-3 leading-tight"
                    style={{ color: brandColors.primary }}
                  >
                    Complete Manufacturing Process Flow
                  </h2>

                  <p className="text-sm lg:text-base text-slate-600 max-w-xl mx-auto">
                    Discover each stage of our advanced needle punching
                    manufacturing process
                  </p>
                </motion.div>

                {/* Process Steps */}
                <div className="relative">
                  {processSteps.map((step, index) => (
                    <ProcessStepCard
                      key={step.id}
                      step={step}
                      index={index}
                      imageUrl={processImagesMap[index]}
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
                    After completing all six stages of our advanced needle
                    punching process, the finished nonwoven fabric undergoes
                    final calendaring to achieve perfect balance of softness and
                    durability with consistent quality.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { label: "Finished Width", value: "1.6m" },
                      { label: "GSM Range", value: "100-500 g/m²" },
                      { label: "Production Speed", value: "Optimized" },
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

            {/* ═══ SPECIFICATIONS SECTION ═══ */}
            {activeSection === "specifications" && (
              <section className="space-y-8 py-4">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2
                    className="text-3xl font-black mb-1"
                    style={{ color: brandColors.primary }}
                  >
                    Technical Specifications
                  </h2>
                  <p className="text-sm text-slate-600">
                    Detailed specifications and performance capabilities
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Image */}
                  <motion.div
                    className="rounded-2xl overflow-hidden shadow-lg border h-72"
                    style={{ borderColor: `${brandColors.accent}20` }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <img
                      src="/images/NeedlePunching/needle-punching-machine.jpeg"
                      alt="Machine"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </motion.div>

                  {/* Specifications Table */}
                  <motion.div
                    className="rounded-2xl overflow-hidden shadow-md border"
                    style={{
                      borderColor: `${brandColors.accent}20`,
                      background: "white",
                    }}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <table className="w-full text-sm">
                      <thead>
                        <tr
                          style={{
                            background: brandColors.primary,
                          }}
                        >
                          <th className="p-3 text-left text-white font-black">
                            Parameter
                          </th>
                          <th className="p-3 text-right text-white font-black">
                            Value
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            label: "Production Capacity",
                            value: specifications.capacity,
                          },
                          {
                            label: "Fiber Denier Range",
                            value: specifications.denier,
                          },
                          { label: "GSM Range", value: specifications.gsm },
                          {
                            label: "Finished Width",
                            value: specifications.width,
                          },
                          { label: "Minimum Order", value: specifications.moq },
                        ].map((row, idx) => (
                          <tr
                            key={idx}
                            style={{
                              background:
                                idx % 2 === 0
                                  ? `${brandColors.accent}05`
                                  : "white",
                              borderBottom: `1px solid ${brandColors.accent}15`,
                            }}
                          >
                            <td className="p-3 font-bold text-slate-700">
                              {row.label}
                            </td>
                            <td
                              className="p-3 font-bold text-right"
                              style={{ color: brandColors.primary }}
                            >
                              {row.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </motion.div>
                </div>

                {/* Raw Materials Section */}
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

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
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
                          style={{ backgroundColor: `${brandColors.accent}15` }}
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

                {/*Image section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto mb-16 px-4">
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

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <p className="text-white font-semibold">{img.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* ═══ APPLICATIONS SECTION ═══ */}
            {activeSection === "applications" && (
              <section className="space-y-8 py-4">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2
                    className="text-3xl font-black mb-1"
                    style={{ color: brandColors.primary }}
                  >
                    Applications
                  </h2>
                  <p className="text-sm text-slate-600">
                    Versatility Engineered into Every Stroke
                  </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {applications.map((app, idx) => {
                    const Icon = app.icon;
                    const imageSrc = appImages[app.name];

                    return (
                      <motion.div
                        key={idx}
                        className="group relative overflow-hidden rounded-xl border shadow-sm transition-all duration-300 cursor-pointer bg-white"
                        style={{
                          borderColor: `${brandColors.accent}25`,
                        }}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.08 }}
                        viewport={{ once: true }}
                        whileHover={{
                          y: -6,
                          boxShadow: `0 14px 30px ${brandColors.accent}20`,
                        }}
                      >
                        {/* Top Image Banner */}
                        {imageSrc && (
                          <div className="h-36 w-full overflow-hidden">
                            <img
                              src={imageSrc}
                              alt={app.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                        )}

                        {/* Content Area */}
                        <div
                          className="p-5"
                          style={{
                            background: `linear-gradient(135deg, ${brandColors.primary}03, ${brandColors.accent}03)`,
                          }}
                        >
                          {/* Icon Badge */}
                          <motion.div
                            className="mb-3 p-2.5 w-fit rounded-lg"
                            style={{
                              background: `${brandColors.accent}15`,
                            }}
                            whileHover={{ scale: 1.1, rotate: 8 }}
                          >
                            <Icon
                              className="w-5 h-5"
                              style={{ color: brandColors.accent }}
                            />
                          </motion.div>

                          {/* Title */}
                          <h3
                            className="text-base font-black mb-2 group-hover:opacity-80 transition-all"
                            style={{ color: brandColors.primary }}
                          >
                            {app.name}
                          </h3>

                          {/* Description */}
                          <p className="text-xs text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                            {app.desc}
                          </p>

                          {/* Bottom Accent Line */}
                          <motion.div
                            className="mt-3 h-0.5 w-0 group-hover:w-full transition-all duration-300"
                            style={{
                              background: `linear-gradient(90deg, ${brandColors.accent}, transparent)`,
                            }}
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </section>
            )}
          </main>
        </div>
      </div>

      {/* ═══ CTA SECTION ═══ */}
      <section className="mt-16 py-12 bg-slate-900">
        <motion.div
          className="max-w-4xl mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl lg:text-3xl font-black text-white mb-3">
            Consult with our Engineering Lab
          </h2>
          <p className="text-gray-300 mb-6 text-sm lg:text-base">
            Connect with our technical experts to explore custom solutions
          </p>

          <motion.button
            className="px-6 py-3 rounded-lg font-bold text-white inline-flex items-center gap-2 transition-all duration-300 text-sm"
            style={{
              background: `linear-gradient(135deg, ${brandColors.accent}, ${brandColors.primary})`,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleContactScroll}
          >
            Schedule Consultation
            <ArrowRight size={16} />
          </motion.button>
        </motion.div>
      </section>

      {/* ═══ CONTACT SECTION ═══ */}
      <div
        ref={contactRef}
        className="py-12 border-t border-slate-200 bg-white"
      >
        <motion.div
          className="max-w-4xl mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="font-bold text-slate-700 mb-4 text-sm lg:text-base">
            For any enquiries, please contact:
          </p>

          <motion.div className="inline-block" whileHover={{ scale: 1.02 }}>
            <div
              className="rounded-lg px-6 py-4 border text-center"
              style={{
                background: `${brandColors.accent}08`,
                borderColor: `${brandColors.accent}20`,
              }}
            >
              <button
                onClick={handleContactClick}
                className="flex items-center gap-2 font-medium hover:text-blue-600 transition-all cursor-pointer"
                style={{ color: brandColors.secondary }}
              >
                <Mail className="w-4 h-4" />
                <span className="underline">mfr1.int@psgtech.ac.in</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
