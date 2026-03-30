import React, { useState, useRef } from "react";
import {
  applications,
  fiberRanges,
  processSteps,
  prodImages,
  quickStats,
  rawMaterials,
  sections,
  specifications,
} from "../../components/data/DiloNeedleMachine";
import { brandColors, grad } from "../../components/common/brand";
import { motion } from "framer-motion";
import { CheckCircle2, Layers, Mail, User, ArrowRight, ChevronRight } from "lucide-react";

// Process Step Card Component
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
      } gap-10 items-center mb-20 lg:mb-28`}
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

          {/* Step Number Badge */}
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
            "High precision mechanical processing",
            "Optimized fiber alignment & web formation",
            "Consistent quality output",
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
const DiloNeedleMachine = () => {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const contactRef = useRef(null);

  const processImagesMap = {
    0: "/images/NeedlePunching/MBO.jpeg",
    1: "/images/NeedlePunching/Carding.jpeg",
    2: "/images/NeedlePunching/Crosslapper.jpeg",
    3: "/images/NeedlePunching/needlepunchingmachine.jpeg",
    
  };

  const handleContactScroll = () => {
    setTimeout(() => {
      contactRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50">
      {/* ═══ HERO SECTION ═══ */}
      <header className="relative overflow-hidden h-[480px] flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-center bg-cover md:bg-fixed bg-no-repeat z-0"
          style={{
            backgroundImage: `url(/images/dilo/dilo-image.jpg)`,
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-black/70 z-0" />

        {/* Pattern Overlay */}
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

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            {/* Icon Card */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative hidden md:block"
            >
              <div className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-2xl" />

              <div className="relative p-6 rounded-2xl shadow-2xl bg-white/20 backdrop-blur-md border border-white/30">
                <Layers className="w-14 h-14 text-white" strokeWidth={2.5} />
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex-1"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-3 leading-tight drop-shadow-lg">
                Dilo Needle Punching Machine
              </h1>

              <p className="text-lg md:text-xl text-cyan-100 font-medium">
                Nonwoven & Needle Punching | Germany
              </p>

              <p className="text-sm text-gray-200 mt-2 max-w-xl">
                COE Indutech has established a full-scale pilot needle-punch
                production line supplied by DILO, Germany.
              </p>

              {/* CTA Buttons */}
              <div className="mt-6 flex gap-4 flex-wrap">
                <motion.button
                  className="px-6 py-3 rounded-lg text-white font-semibold shadow-lg transition-all inline-flex items-center gap-2"
                  style={{ background: grad.subtle }}
                  onClick={() => setActiveSection("specifications")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Specifications
                  <ArrowRight size={18} />
                </motion.button>

                <motion.button
                  className="px-6 py-3 rounded-lg border-2 border-white text-white font-semibold hover:bg-white/10 transition-all"
                  onClick={handleContactScroll}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* ═══ MAIN LAYOUT ═══ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Side Navigation */}
          <aside className="hidden lg:block w-56 lg:w-64 shrink-0">
            <div className="sticky top-8 space-y-2">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <motion.button
                    key={section.id}
                    onClick={() => {
                      setActiveSection(section.id);
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }}
                    className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl transition-all duration-300 text-left font-bold ${
                      activeSection === section.id
                        ? "text-white shadow-lg"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                    style={
                      activeSection === section.id
                        ? { background: grad.subtle }
                        : {}
                    }
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{section.label}</span>
                  </motion.button>
                );
              })}
            </div>
          </aside>

          {/* Mobile Navigation */}
          <div className="lg:hidden w-full mb-6 sm:mb-8">
            <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <motion.button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-lg whitespace-nowrap font-bold text-xs transition-all ${
                      activeSection === section.id
                        ? "text-white shadow-lg"
                        : "bg-slate-100 text-slate-700"
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
              <motion.div
                className="space-y-8 sm:space-y-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div
                  className="rounded-3xl p-6 sm:p-10 border-2 shadow-sm"
                  style={{
                    background: `linear-gradient(135deg, ${brandColors.primary}08, ${brandColors.accent}08)`,
                    borderColor: `${brandColors.tertiary}40`,
                  }}
                >
                  <h2
                    className="text-3xl sm:text-4xl font-black mb-6"
                    style={{ color: brandColors.primary }}
                  >
                    Dilo Needle Punching Machine
                  </h2>

                  <div className="space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
                    <p>
                      To develop and conduct research on needle-punched nonwoven
                      materials, COE Indutech has established a full-scale pilot
                      needle-punch production line supplied by DILO, Germany.
                      This pilot machine is capable of processing fibres with
                      fineness ranging from 1.5 denier to 6.0 denier and cut
                      lengths between 38 mm and 61 mm.
                    </p>

                    <p>
                      Designed specifically for product development and
                      research, the system is highly versatile and can process a
                      wide range of fibre types, including Polypropylene (PP),
                      Polyester (PET), Nylon, Cotton, Jute, Flax, and recycled
                      shoddy fibres, among others.
                    </p>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mt-6">
                    {quickStats.map((stat, idx) => (
                      <motion.div
                        key={idx}
                        className="rounded-xl p-3 sm:p-4 border transition-all"
                        style={{
                          background: `${brandColors.accent}10`,
                          borderColor: `${brandColors.accent}30`,
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
                          className="text-xl sm:text-2xl font-black"
                          style={{ color: brandColors.primary }}
                        >
                          {stat.value}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* ═══ PROCESS SECTION ═══ */}
            {activeSection === "process" && (
              <motion.div
                className="space-y-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div>
                  <h2
                    className="text-3xl sm:text-4xl font-black mb-2"
                    style={{ color: brandColors.primary }}
                  >
                    Process Description
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600">
                    The needle-punching line consists of four main sections,
                    through which the raw material passes sequentially:
                  </p>
                </div>

                {/* Process Steps with Images */}
                <div className="relative">
                  {processSteps.map((step, index) => (
                    <ProcessStepCard
                      key={step.id}
                      step={step}
                      index={index}
                      imageUrl={processImagesMap[index] || "/images/NeedlePunching/MBO.jpeg"}
                      isEven={index % 2 === 0}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {/* ═══ SPECIFICATIONS SECTION ═══ */}
            {activeSection === "specifications" && (
              <motion.div
                className="space-y-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div>
                  <h2
                    className="text-3xl sm:text-4xl font-black mb-2"
                    style={{ color: brandColors.primary }}
                  >
                    Technical Specifications
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600">
                    Explore detailed specifications and core performance capabilities.
                  </p>
                </div>

                {/* Image + Table Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  {/* Machine Image */}
                  <motion.div
                    className="relative rounded-2xl overflow-hidden shadow-xl border flex items-center justify-center bg-white h-72 lg:h-full"
                    style={{ borderColor: `${brandColors.tertiary}40` }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <img
                      src="/images/dilo/dilo-image.jpg"
                      alt="Dilo Needle Punching Machine"
                      className="w-full h-full object-contain p-4"
                      loading="lazy"
                      decoding="async"
                    />
                  </motion.div>

                  {/* Specifications Table */}
                  <motion.div
                    className="rounded-2xl border-2 overflow-hidden shadow-md"
                    style={{
                      borderColor: `${brandColors.tertiary}30`,
                      background: `linear-gradient(135deg, ${brandColors.primary}03, ${brandColors.accent}05)`,
                    }}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-slate-100/50">
                          <th className="p-4 text-left font-bold uppercase text-slate-600">
                            Parameter
                          </th>
                          <th className="p-4 text-right font-bold uppercase text-slate-600">
                            Details
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            label: "Working Width",
                            value: specifications.worlingWidth,
                          },
                          {
                            label: "Production Capacity",
                            value: specifications.capacity,
                          },
                          {
                            label: "GSM Range",
                            value: specifications.gsmRange,
                          },
                          {
                            label: "Stitch Density",
                            value: specifications.stitchDensity,
                          },
                          {
                            label: "Needle Density",
                            value: specifications.needleDensity,
                          },
                          {
                            label: "Fiber Length",
                            value: specifications.fiberLength,
                          },
                          {
                            label: "Fiber Denier Range",
                            value: specifications.fiberDenier,
                          },
                          {
                            label: "Minimum Order",
                            value: specifications.moq,
                          },
                        ].map((row, idx) => (
                          <tr
                            key={idx}
                            className="border-t"
                            style={{
                              background: idx % 2 === 0 ? `${brandColors.accent}05` : "white",
                              borderColor: `${brandColors.tertiary}30`,
                            }}
                          >
                            <td className="p-4 font-semibold text-slate-700">
                              {row.label}
                            </td>
                            <td
                              className="p-4 font-bold text-right"
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

                {/* Product Images Section */}
                <motion.div
                  className="mt-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-black mb-6" style={{ color: brandColors.primary }}>
                    Featured Products
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {prodImages.map((img, i) => (
                      <motion.div
                        key={i}
                        className="group relative rounded-2xl overflow-hidden shadow-lg h-48"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -4 }}
                      >
                        <img
                          src={img.img}
                          alt={img.label}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                          <p className="text-white font-bold">{img.label}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* ═══ APPLICATIONS SECTION ═══ */}
            {activeSection === "applications" && (
              <motion.div
                className="space-y-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div>
                  <h2
                    className="text-3xl sm:text-4xl font-black mb-2"
                    style={{ color: brandColors.primary }}
                  >
                    Key Applications
                  </h2>
                  <p className="text-base text-slate-600">
                    Versatile applications across various industries
                  </p>
                </div>

                {/* Applications Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {applications.map((app, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: idx * 0.08 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -4 }}
                      className="group rounded-2xl p-6 border-2 transition-all shadow-md cursor-pointer"
                      style={{
                        background: `linear-gradient(135deg, ${brandColors.primary}05, ${brandColors.accent}05)`,
                        borderColor: `${brandColors.tertiary}40`,
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <motion.div
                          className="p-3 rounded-xl shrink-0"
                          style={{ background: grad.subtle }}
                          whileHover={{ scale: 1.1, rotate: 10 }}
                        >
                          <CheckCircle2 className="w-6 h-6 text-white" strokeWidth={2.5} />
                        </motion.div>
                        <span className="font-bold text-lg" style={{ color: brandColors.primary }}>
                          {app}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Fiber Range Section */}
                <motion.div
                  className="rounded-3xl p-8 md:p-10 border-2 shadow-sm"
                  style={{
                    background: `linear-gradient(135deg, ${brandColors.primary}03, ${brandColors.accent}05)`,
                    borderColor: `${brandColors.tertiary}30`,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3
                    className="text-2xl font-black mb-8"
                    style={{ color: brandColors.primary }}
                  >
                    Fiber Range
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {fiberRanges.map((fiber, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.08 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className="relative group overflow-hidden rounded-2xl shadow-lg border-2 h-48 cursor-pointer"
                        style={{ borderColor: `${brandColors.tertiary}20` }}
                      >
                        <img
                          src={fiber.img}
                          alt={fiber.label}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

                        <div className="absolute bottom-0 p-4">
                          <h4 className="text-white font-bold text-lg tracking-wide">
                            {fiber.label}
                          </h4>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </main>
        </div>
      </div>

      {/* ═══ CTA & CONTACT SECTION ═══ */}
      <section className="mt-16 py-12 bg-slate-900 border-t border-slate-200">
        <motion.div
          className="max-w-4xl mx-auto px-4 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-black text-white mb-3">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 mb-6">
            Connect with our technical experts to explore custom solutions
          </p>

          <motion.button
            className="px-8 py-4 rounded-lg font-bold text-white inline-flex items-center gap-2 transition-all"
            style={{
              background: `linear-gradient(135deg, ${brandColors.accent}, ${brandColors.primary})`,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleContactScroll}
          >
            Contact Us Now
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </section>

      {/* Contact Information */}
      <div ref={contactRef} className="py-12 border-t border-slate-200 bg-white">
        <motion.div
          className="max-w-4xl mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="font-bold text-slate-700 mb-6 text-base lg:text-lg">
            For any enquiries, please contact:
          </p>

          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.02 }}
          >
            <div
              className="rounded-2xl px-8 py-6 border-2 text-center"
              style={{
                background: `${brandColors.accent}10`,
                borderColor: `${brandColors.accent}30`,
              }}
            >
              <p
                className="text-base font-bold flex items-center justify-center gap-2 mb-4"
                style={{ color: brandColors.primary }}
              >
                <User className="w-4 h-4" />
                Mr. V. Muthu Kumar — Admin
              </p>

              <a
                href="mailto:info.int@psgtech.ac.in"
                className="font-bold flex items-center justify-center gap-2 transition-all hover:opacity-70"
                style={{ color: brandColors.secondary }}
              >
                <Mail className="w-4 h-4" />
                info.int@psgtech.ac.in
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default DiloNeedleMachine;
