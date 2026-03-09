import React, { useState } from "react";
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
import { CheckCircle, Layers, Mail, User } from "lucide-react";

const diloNeedleMachine = () => {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <header className="relative overflow-hidden h-[480px] flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-fixed bg-center bg-cover z-0"
          style={{
            backgroundImage: `url(/images/dilo/dilo-image.jpg)`,
          }}
        ></div>

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
              className="relative"
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
                COE Indutech has established a full-scale pilot needle-punch production line supplied by DILO, Germany.
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

                <a href="/contact" target="_blank">
                  <button className="px-6 py-3 rounded-lg border border-white text-white hover:bg-white hover:text-black transition">
                    Contact Us
                  </button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </header>
      {/* Main Layout with Side Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Side Navigation */}
          <aside className="hidden lg:block w-56 lg:w-64 flex-shrink-0">
            <div className="sticky top-8 space-y-2">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => {
                      setActiveSection(section.id);
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }}
                    className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl smooth-all text-left ${
                      activeSection === section.id
                        ? "text-white shadow-lg"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                    style={
                      activeSection === section.id
                        ? {
                            background: `${grad.subtle}`,
                          }
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
                        ? {
                            background: `${grad.subtle}`,
                          }
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

          {/* Main Content Area */}
          <main className="flex-1 min-w-0">
            {/* Overview Section */}
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

            {/* Process Steps Section */}
            {activeSection === "process" && (
              <div className="space-y-6 sm:space-y-10 animate-slide-right">
                <div>
                  <h2
                    className="text-2xl sm:text-4xl font-black mb-2 sm:mb-4"
                    style={{ color: brandColors.primary }}
                  >
                    Process Description
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600">
                    The needle-punching line consists of four main sections,
                    through which the raw material passes sequentially:
                  </p>
                </div>

                {/* Timeline Style Process */}
                <div className="relative">
                  {processSteps.map((step, idx) => {
                    const Icon = step.icon;
                    const isLast = idx === processSteps.length - 1;

                    return (
                      <div key={step.id} className="relative pb-10 last:pb-0">
                        {!isLast && (
                          <div
                            className="absolute left-6 top-14 w-0.5 h-full -ml-px"
                            style={{
                              backgroundColor: `${brandColors.tertiary}40`,
                            }}
                          />
                        )}

                        <div className="relative flex flex-col sm:flex-row items-start gap-3 sm:gap-6">
                          <div
                            className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center smooth-all"
                            style={{
                              background: `${grad.subtle}`,
                              boxShadow: `0 4px 12px ${brandColors.accent}40`,
                            }}
                          >
                            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                          </div>

                          <div className="flex-1 pt-1">
                            <div
                              className="bg-white rounded-2xl p-4 sm:p-6 border-2 smooth-all hover:shadow-lg"
                              style={{
                                borderColor: `${brandColors.tertiary}40`,
                              }}
                            >
                              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 sm:mb-3 gap-1 sm:gap-0">
                                <h3
                                  className="text-base sm:text-xl font-bold"
                                  style={{ color: brandColors.primary }}
                                >
                                  {step.name}
                                </h3>
                                <span
                                  className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-bold text-white"
                                  style={{
                                    backgroundColor: brandColors.accent,
                                  }}
                                >
                                  STEP {step.id}
                                </span>
                              </div>
                              <p className="text-slate-600 leading-relaxed break-words">
                                {step.desc}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Specifications Section */}
            {activeSection === "specifications" && (
              <div className="space-y-10">
                <div className="animate-slide-right">
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
                {/* Image + Table Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  {/* Machine Image */}
                  <div
                    className="relative rounded-2xl overflow-hidden shadow-xl border flex items-center justify-center bg-white"
                    style={{
                      borderColor: `${brandColors.tertiary}40`,
                      height: "100%",
                    }}
                  >
                    <img
                      src="/images/dilo/dilo-image.jpg"
                      alt="Dilo Needle Image"
                      className="w-full h-56 sm:h-full object-contain p-2 sm:p-4"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute bottom-4 left-4 text-white font-semibold text-lg drop-shadow-lg bg-slate-900/40 px-3 py-1.5 rounded-md">
                      Dilo Needle Punching Machine
                    </div>
                  </div>
                  {/* Specifications Table */}
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

                          { label: "Minimum Order", value: specifications.moq },
                        ].map((row, idx) => (
                          <tr
                            key={idx}
                            className={`border-t ${idx % 2 === 0 ? "bg-white/50" : "bg-slate-50/30"}`}
                            style={{ borderColor: `${brandColors.tertiary}30` }}
                          >
                            <td className="p-4 font-medium text-slate-700">
                              {row.label}
                            </td>
                            <td
                              className="p-4 font-bold text-slate-800"
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

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {rawMaterials.map((material, idx) => (
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <p className="text-white font-semibold">{img.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/* Applications Section */}
            {activeSection === "applications" && (
              <div className="space-y-10 animate-slide-right">
                <div>
                  <h2
                    className="text-2xl sm:text-4xl font-black mb-2 sm:mb-4"
                    style={{ color: brandColors.primary }}
                  >
                    Key Applications
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {applications.map((app, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      whileHover={{ scale: 1.03, y: -4 }}
                      className="group rounded-2xl p-6 border-2 transition-all shadow-md"
                      style={{
                        background: `linear-gradient(135deg, ${brandColors.primary}05, ${brandColors.accent}05)`,
                        borderColor: `${brandColors.tertiary}40`,
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className="p-3 rounded-xl transition-transform group-hover:scale-110"
                          style={{ background: `${grad.subtle}` }}
                        >
                          <CheckCircle
                            className="w-6 h-6 text-white"
                            strokeWidth={2.5}
                          />
                        </div>
                        <span
                          className="font-bold text-lg"
                          style={{ color: brandColors.primary }}
                        >
                          {app}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
                {/* Product Applications */}
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 md:p-10 border border-gray-200 shadow-inner">
                  <h3
                    className="text-2xl font-extrabold mb-8 tracking-tight"
                    style={{ color: brandColors.primary }}
                  >
                    Fiber Range
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                    {fiberRanges.map((product, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.03 }}
                        whileHover={{ y: -3, scale: 1.05 }}
                        className="bg-white/90 backdrop-blur-sm rounded-xl p-5 text-center border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300"
                      >
                        <span className="text-sm sm:text-base font-semibold text-gray-700 tracking-wide">
                          {product}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
      {/* Bottom CTA */}
      <div className="mt-10 sm:mt-20 py-8 sm:py-16 border-t border-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <p className="font-medium mb-2">For any enquiries, please contact:</p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-4 sm:px-6 py-2 sm:py-3 w-full sm:w-auto">
              <p
                className="text-base font-bold flex items-center justify-center gap-2"
                style={{ color: brandColors.primary }}
              >
                <User
                  className="w-4 h-4"
                  style={{ color: brandColors.secondary }}
                />{" "}
                Mr. V. Muthu Kumar — Admin
              </p>
              <div className="flex flex-col items-center justify-center mt-3 space-y-2 text-gray-700">
                <div className="flex items-center gap-2">
                  <Mail
                    className="w-4 h-4"
                    style={{ color: brandColors.secondary }}
                  />
                  <a
                    href="mailto:info.int@psgtech.ac.in"
                    className="font-medium transition-all"
                    style={{ color: brandColors.secondary }}
                  >
                    info.int@psgtech.ac.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default diloNeedleMachine;
