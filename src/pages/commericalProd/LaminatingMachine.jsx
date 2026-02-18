import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Layers, Zap, ArrowRight, Mail } from "lucide-react";
import {
  prodImages,
  keyMetrics,
  applications,
  productApplications,
  advantages,
  specifications,
  rawMaterials,
  sections,
} from "../../components/data/LaminatingMachineData.js";
import { brandColors, grad } from "../../components/common/brand.js";

export default function LaminatingMachine() {
  const [activeSection, setActiveSection] = useState("overview");
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <header
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${brandColors.primary} 0%, ${brandColors.secondary} 50%, ${brandColors.accent} 100%)`,
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-white/20 blur-xl" />
              <div className="relative p-5 rounded-2xl shadow-2xl bg-white/20 backdrop-blur-sm border-2 border-white/40">
                <Layers className="w-14 h-14 text-white" strokeWidth={2.5} />
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-2 leading-tight">
                Laminating & Coating Machine
              </h1>
              <p className="text-lg text-cyan-100">
                LACOM MPBL-2400 CV – 2015 Model | Professional Grade
              </p>
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
                {/* Hero Card */}
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
                    Hot Melt Coating & Lamination Machine
                  </h2>

                  <div className="space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
                    <p>
                      The process involves bonding two substrates using hot-melt
                      adhesive, applied under controlled temperature conditions
                      with the help of a drum melter or extruder.{" "}
                      <span className="font-semibold text-slate-800">
                        COE INDUTECH
                      </span>{" "}
                      is equipped with a compact model coating and lamination
                      machine supplied by{" "}
                      <span className="font-semibold text-slate-800">
                        Lacom, Germany,
                      </span>{" "}
                      with a working width of 2000 mm.
                    </p>

                    <p>
                      The machine is equipped with an IR heater, drum melters
                      (20 kg and 200 kg capacities), and an extruder, enabling
                      precise control of adhesive application. This system is
                      capable of processing a wide range of materials, including
                      woven fabrics, knitted fabrics, polar fleece, terry
                      fabrics, nonwoven materials, mesh fabrics, foams, and
                      similar substrates.
                    </p>

                    <p>
                      The machine is fitted with positive and negative blades,
                      allowing coating thickness control up to 20 g/m². A
                      multi-blade system is available for full-surface coating
                      applications. Products manufactured using this machine
                      cater to both domestic and industrial applications
                    </p>
                  </div>
                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mt-4">
                    {keyMetrics.map((stat, idx) => (
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

            {/* Specifications Section */}
            {activeSection === "specifications" && (
              <div className="space-y-10 animate-slide-right">
                {/* Header */}
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

                {/* Image + Table Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  {/* Product Image */}
                  <div
                    className="relative rounded-2xl overflow-hidden shadow-xl border flex items-center justify-center bg-white"
                    style={{
                      borderColor: `${brandColors.tertiary}40`,
                      height: "100%",
                    }}
                  >
                    <img
                      src="/images/HotMelt/laminating-machine.png"
                      alt="laminating & coating Image"
                      className="w-full h-56 sm:h-64 object-cover p-2 sm:p-4"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute bottom-4 left-4 text-white font-semibold text-lg drop-shadow-lg bg-slate-900/40 px-3 py-1.5 rounded-md">
                      Hot Melt Coating & Lamination Machine
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
                        {specifications.map((row, idx) => (
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto mb-16 px-">
                  {prodImages.map((img, i) => (
                    <div
                      key={i}
                      className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 bg-white group"
                    >
                      {/* Image */}
                      <img
                        src={img.img}
                        alt={img.label}
                        className="w-full h-56 sm:h-64 object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                        decoding="async"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-500"></div>

                      {/* Label */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[90%] text-center">
                        <div className="inline-block bg-slate-900/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm sm:text-base font-semibold tracking-wide shadow-md group-hover:bg-slate-900/80 transition-all duration-500">
                          {img.label}
                        </div>
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
                    Product Range
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                    {productApplications.map((product, idx) => (
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
                {/* Key Advantage */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                  <h3
                    className="text-2xl font-bold mb-6 flex items-center gap-3"
                    style={{ color: brandColors.primary }}
                  >
                    <Zap className="w-7 h-7 text-yellow-500" />
                    Key Advantages
                  </h3>

                  <div className="space-y-3">
                    {advantages.map((adv, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-blue-50 transition-colors duration-300"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 leading-relaxed">
                          {adv}
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
                <ArrowRight className="w-4 h-4" /> PSGTECHS COE INDUTECH
              </p>
              <div className="flex flex-col items-center justify-center mt-3 space-y-2 text-gray-700">
                <div
                  className="flex items-center gap-2"
                  style={{ color: brandColors.secondary }}
                >
                  <Mail className="w-4 h-4" />
                  <a
                    href="mailto:lamicoat.int@psgtech.ac.in"
                    className="font-medium hover transition-all"
                  >
                    lamicoat.int@psgtech.ac.in
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
