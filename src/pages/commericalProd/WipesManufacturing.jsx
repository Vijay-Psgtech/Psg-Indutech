import React, { useState } from "react";
import {
  sections,
  specifications,
  keyFeatures,
  quickStats,
  processSteps,
  prodImages,
} from "../../components/data/WipesManufacturingData";
import { Droplets, Mail, Sparkles, User } from "lucide-react";
import { motion } from "framer-motion";
import { brandColors, grad } from "../../components/common/brand";

export default function WipesManufacturing() {
  const [activeSection, setActiveSection] = useState("overview");
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Top Banner */}
      <div
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${brandColors.primary}, ${brandColors.secondary}, ${brandColors.accent})`,
        }}
      >
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`,
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-16">
          <div className="flex items-center gap-6 mb-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="p-5 bg-white/20 backdrop-blur-sm rounded-2xl border-2 border-white/40">
                <Droplets className="w-12 h-12 text-white" strokeWidth={2.5} />
              </div>
            </motion.div>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1"
            >
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-2">
                Wipes Manufacturing
              </h1>
              <p className="text-lg text-cyan-100">
                Chungda Machinery Ltd | Premium Disposable Cleaning Solutions
              </p>
            </motion.div>
          </div>
        </div>
      </div>
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
            {/*Overview Section */}
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
                    WIPES MANUFACTURING PLANT
                  </h2>
                  <div className="space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
                    <p>
                      The wet wipe manufacturing machine used for the production
                      of various types of wet wipes. The raw materials used
                      include viscose, polyester, and their blends, with fabric
                      GSM ranging from 45 to 80. The wipe sizes produced vary
                      between 150 × 150 mm and 220 × 220 mm.
                    </p>

                    <p>
                      <span className="font-semibold text-slate-800">
                        Wet wipes
                      </span>{" "}
                      are disposable cleaning products made from wet-strength,
                      soft-fibre, and high-permeability substrates. The wipes
                      are folded, moisturized, and hygienically packaged to
                      ensure convenience and safety during use.
                    </p>

                    <p>
                      The manufacturing plant produces the following types of
                      wet wipes, typically packed in 10 or 20 pieces per pack.
                      Any active substance can be impregnated in the wetwipe.
                    </p>

                    {/* Spec List */}
                    <ul className="list-disc list-inside pl-2 sm:pl-4 text-slate-700 space-y-1 sm:space-y-2">
                      <li>
                        <strong>Multi-surface wipes</strong>
                      </li>
                      <li>
                        <strong>Hand and Face cleaning wipes</strong>
                      </li>
                      <li>
                        <strong>Baby wipes</strong>
                      </li>
                      <li>
                        <strong>Leather wipes</strong>
                      </li>
                    </ul>
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

            {/* Process Section */}
            {activeSection === "process" && (
              <div className="space-y-6 sm:space-y-10 animate-slide-right">
                <div>
                  <h2
                    className="text-2xl sm:text-4xl font-black mb-2 sm:mb-4"
                    style={{ color: brandColors.primary }}
                  >
                    Manufacturing Process
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600">
                    Mechanical interlocking without additional bonding materials
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

            {/*Specification Section*/}
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
                  {/* Machine Image */}
                  <div
                    className="relative rounded-2xl overflow-hidden shadow-xl border flex items-center justify-center bg-white"
                    style={{
                      borderColor: `${brandColors.tertiary}40`,
                      height: "100%",
                    }}
                  >
                    <img
                      src={{}}
                      alt="Wet manufacturing Image"
                      className="w-full max-h-[500px] object-contain p-2 sm:p-4"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute bottom-4 left-4 text-white font-semibold text-lg drop-shadow-lg bg-slate-900/40 px-3 py-1.5 rounded-md">
                      Wet Wipes Manufacturing Machine
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
                            label: "Pack Sizes",
                            value: specifications.packSizes,
                          },
                          {
                            label: "Capacity",
                            value: specifications.capacity,
                          },
                          {
                            label: "Wipe Size",
                            value: specifications.wipeSize,
                          },
                          {
                            label: "Size Range",
                            value: specifications.sizeRange,
                          },
                          {
                            label: "GSM Range",
                            value: specifications.gsm,
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

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
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
                    className="text-3xl sm:text-4xl font-extrabold tracking-tight text-center sm:text-left mb-8"
                    style={{ color: brandColors.primary }}
                  >
                    Key Features
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {keyFeatures.map((feature, index) => {
                      const Icon = feature.icon;
                      return (
                        <div className="bg-white rounded-3xl p-8 shadow-xl cursor-pointer">
                          <div
                            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xl"
                            style={{
                              background: `linear-gradient(135deg, ${brandColors.secondary}, ${brandColors.accent})`,
                            }}
                          >
                            <Icon
                              className="w-8 h-8 text-white"
                              strokeWidth={2}
                            />
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                            {feature.title}
                          </h3>
                          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                {/* Customization Section */}
                <div
                  className="relative overflow-hidden rounded-[2rem] p-6 sm:p-10 md:p-14 shadow-2xl mx-auto max-w-6xl"
                  style={{
                    background:
                      "linear-gradient(to bottom right, #434C9A, #22227A)",
                  }}
                >
                  <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-8">
                    {/* Icon Box */}
                    <div className="flex-shrink-0 bg-gradient-to-br from-[#6D77B3] to-[#06b6d4] p-4 sm:p-5 rounded-2xl shadow-xl">
                      <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>

                    {/* Text Content */}
                    <div className="text-white space-y-3 sm:space-y-4">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                        Custom Formulation Available
                      </h3>
                      <p className="text-base sm:text-lg md:text-xl text-purple-200 leading-relaxed max-w-3xl">
                        Any active substance can be impregnated in the wet wipe
                        to meet your specific requirements and applications. Our
                        flexible manufacturing process allows for customized
                        solutions tailored to your needs.
                      </p>
                    </div>
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
}
