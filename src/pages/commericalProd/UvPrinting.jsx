import React, { useState, useEffect } from "react";
import {
  Printer,
  CheckCircle2,
  Sparkles,
  Phone,
  Mail,
  User,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  specifications,
  inkColors,
  materials,
  features,
  quickStats,
  benefits,
  sections,
  prodImages,
} from "../../components/data/UvPrintingData";
import { brandColors, grad } from "../../components/common/brand";

export default function UVPrinting() {
  const [activeSection, setActiveSection] = useState("overview");
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      <style>
        {`
        .smooth-all { transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
        .hover-scale:hover { transform: scale(1.02); }
        .hover-glow:hover { box-shadow: 0 0 30px rgba(6, 182, 212, 0.3); }
        
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        .animate-slide-left { animation: slideInLeft 0.6s ease-out; }
        .animate-slide-right { animation: slideInRight 0.6s ease-out; }`}
      </style>
      {/* Header */}
      <header
        className="relative bg-white/80 backdrop-blur-xl border-b border-[#eef2ff] shadow-sm"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-white/20 blur-xl" />
              <div className="relative p-5 rounded-2xl shadow-2xl bg-white/20 backdrop-blur-sm border-2 border-white/40">
                <Printer className="w-14 h-14 text-white" strokeWidth={2.5} />
              </div>
            </motion.div>
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-2 leading-tight">
                UV Printing
              </h1>
              <p className="text-lg text-cyan-100">
                UV Flatbed Digital Printing | Vibrant, Durable, Versatile |
                Custom Signage, Decor & More
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
                    UV PRINTING
                  </h2>

                  <div className="space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
                    <p>
                      The{" "}
                      <span className="font-semibold text-slate-800">
                        UV printing
                      </span>{" "}
                      machine uses a digital printing technology that uses{" "}
                      <span className="font-semibold text-slate-800">
                        ultraviolet (UV)
                      </span>
                      light to instantly dry or cure the ink as it is printed.
                      As the printer deposits ink onto the surface of the
                      material (referred to as the substrate), specially
                      designed{" "}
                      <span className="font-semibold text-slate-800">
                        UV lamps
                      </span>{" "}
                      follow immediately behind, curing the ink instantaneously.
                      This process enables{" "}
                      <span className="font-semibold text-slate-800">
                        high-quality printing with sharp images, excellent color
                        accuracy, and strong ink adhesion
                      </span>{" "}
                      on a wide range of substrates.
                    </p>

                    <p>
                      The machine supports a maximum print size of 8 feet × 10
                      feet and can handle materials with a thickness of up to
                      100 mm. It is capable of printing on any smooth, flat
                      surface, including glass, aluminium sheets, foam boards,
                      plastic boards, wood, tiles, acrylic sheets, and similar
                      materials.
                    </p>

                    <p>
                      An accurate combination of Cyan, Magenta, Yellow, Black,
                      and Varnish hybrid UV inks delivers high-resolution prints
                      with superior adhesion and durability on the substrate.
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
                      src={{}}
                      alt="UV Printing Image"
                      className="w-full h-56 sm:h-64 object-cover p-2 sm:p-4"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute bottom-4 left-4 text-white font-semibold text-lg drop-shadow-lg bg-slate-900/40 px-3 py-1.5 rounded-md">
                      UV Printing
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
                            label: "Model Year",
                            value: specifications.modelYear,
                          },
                          {
                            label: "Production Capacity",
                            value: specifications.capacity,
                          },
                          {
                            label: "Maximum Print Size",
                            value: specifications.maxSize,
                          },
                          {
                            label: "Print Thickness",
                            value: specifications.printThickness,
                          },
                          {
                            label: "Max material",
                            value: specifications.maxMaterial,
                          },
                          {
                            label: "Print Durability",
                            value: specifications.durability,
                          },
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

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {materials.map((material, idx) => (
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
                    CMYK + Varnish Hybrid Inks
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
                  {inkColors.map((ink, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-2xl bg-white border-2 border-[#e0e7ff] hover:border-[#434C9A] transition-all duration-300"
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${ink.color} opacity-5 group-hover:opacity-15 transition-opacity`}
                      />
                      <div className="relative p-6 text-center">
                        <div
                          className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${ink.color} shadow-lg`}
                        />
                        <h3 className="text-lg font-bold text-[#22227A] mb-2">
                          {ink.name}
                        </h3>
                        <code className="text-xs text-slate-500 font-mono">
                          {ink.hex}
                        </code>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Key Features */}
                <div className="space-y-6 sm:space-y-10">
                  <h2
                    className="text-4xl font-extrabold mb-8 tracking-tight"
                    style={{ color: brandColors.primary }}
                  >
                    Special Features
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {features.map((feature, index) => {
                      const Icon = feature.icon;
                      return (
                        <div
                          key={index}
                          onClick={() => setActiveFeature(index)}
                          className={`group relative overflow-hidden rounded-3xl bg-white border-2 cursor-pointer transition-all duration-500 ${
                            activeFeature === index
                              ? "border-[#434C9A] shadow-xl shadow-[#434C9A]/20"
                              : "border-[#e0e7ff] hover:border-[#6D77B3]"
                          }`}
                        >
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}
                          />

                          <div className="relative p-8">
                            <div
                              className={`inline-flex p-3 sm:p-5 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg mb-4 sm:mb-6`}
                            >
                              <Icon
                                className="w-10 h-10 text-white"
                                strokeWidth={1.5}
                              />
                            </div>
                            <h3 className="text-lg sm:text-2xl font-bold text-[#22227A] mb-2 sm:mb-3">
                              {feature.title}
                            </h3>
                            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                {/* Benefits Banner */}
                <motion.div
                  className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#22227A] via-[#434C9A] to-[#6D77B3] p-6 sm:p-10 md:p-14 shadow-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="absolute inset-0 opacity-10">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                        backgroundSize: "30px 30px",
                      }}
                    />
                  </div>

                  <div className="relative">
                    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        <Sparkles className="w-16 h-16 text-white flex-shrink-0" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                          Why Choose UV Flatbed Printing?
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-8 text-base sm:text-lg">
                          {benefits.map((benefit, index) => (
                            <motion.div
                              key={index}
                              className="flex items-center gap-3"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                              <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0" />
                              <span className="text-white font-semibold break-words">
                                {benefit}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
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
              <p className="text-base font-bold text-[var(--color-indigo)] flex items-center justify-center gap-2">
                <User className="w-4 h-4 text-[var(--color-purple)]" /> Mr. V.
                Muthu Kumar — QC Manager
              </p>
              <div className="flex flex-col items-center justify-center mt-3 space-y-2 text-gray-700">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[var(--color-purple)]" />
                  <a
                    href="mailto:info.int@psgtech.ac.in"
                    className="text-[var(--color-indigo)] font-medium hover:text-[var(--color-purple)] transition-all"
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
}
