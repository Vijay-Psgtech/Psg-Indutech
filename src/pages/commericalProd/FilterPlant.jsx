import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, Layers, Zap, ArrowRight, Mail } from "lucide-react";
import {
  prodImages,
  sections,
  filterApplications,
  meltBlownSpecs,
  ctoSpecs,
  keyMetrics,
} from "../../components/data/FilterPlant";
import {
  brandColors,
  grad,
  borderColor,
} from "../../components/common/brand.js";
import usePageTitle from "../../hooks/usePageTitle.jsx";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 90, damping: 18 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const smoothScrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const FilterPlant = () => {
  usePageTitle("Melt-blown Filter Cartridge Plant");
  const [activeSection, setActiveSection] = useState("overview");
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact", {
      state: {
        recipientEmail: "mfr1.int@psgtech.ac.in",
        service: "Filter Plant",
        source: "Filter Plant Page",
      },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-left">
      <header className="relative overflow-hidden h-[480px] flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-center bg-cover md:bg-fixed bg-no-repeat z-0"
          style={{
            backgroundImage: `url(/images/filter/filter1.jpg)`,
          }}
        ></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-black/60 z-0" />

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
        <div className="relative mx-auto px-4 sm:px-6 lg:px-8 w-full sm:mt-50">
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
                Melt blown machine
              </h1>

              <p className="text-sm text-gray-200 mt-2 max-w-xl">
                Melt-blown polypropylene filter cartridges are manufactured in
                this plant.
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

                <a
                  href="#cta"
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScrollTo("cta");
                  }}
                >
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
                    Filter Plant
                  </h2>

                  <div className="space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
                    <p>
                      Melt-blown polypropylene filter cartridges are
                      manufactured in this plant. These polypropylene water
                      filters are designed to reduce sediment, dirt, sand, silt,
                      rust, lime scale, and other suspended impurities in water.
                      They offer excellent chemical resistance and high
                      dirt-holding capacity at a cost-effective price point. The
                      filters are constructed from food-grade melt-blown
                      polypropylene fibres, enabling effective removal of a wide
                      range of particulate contaminants.
                    </p>
                  </div>
                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 mt-4">
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
              <div className="space-y-8 sm:space-y-12 animate-slide-right">
                {/* Header */}
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
                {/* Spec Table */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="overflow-x-auto rounded-2xl shadow-md"
                  style={{ border: `1px solid ${borderColor()}` }}
                >
                  <table className="w-full text-sm bg-white rounded-2xl overflow-hidden">
                    <thead>
                      <tr style={{ background: grad.subtle }}>
                        <th className="px-4 py-3 text-left text-white font-bold uppercase tracking-wide">
                          Size
                        </th>
                        <th className="px-4 py-3 text-left text-white font-bold uppercase tracking-wide">
                          Weight
                        </th>
                        <th className="px-4 py-3 text-left text-white font-bold uppercase tracking-wide">
                          Micron
                        </th>
                        <th className="px-4 py-3 text-left text-white font-bold uppercase tracking-wide">
                          Application
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {meltBlownSpecs.map((spec, i) => (
                        <tr
                          key={i}
                          className={`border-b last:border-b-0 transition-colors`}
                          style={{ borderColor: borderColor() }}
                        >
                          <td
                            className="px-4 py-3 font-semibold"
                            style={{ color: brandColors.primary }}
                          >
                            {spec.size}
                          </td>
                          <td className="px-4 py-3 text-slate-700">
                            {spec.weight}
                          </td>
                          <td className="px-4 py-3">
                            <span
                              className="px-3 py-1 rounded-full text-xs font-bold text-white"
                              style={{ background: grad.subtle }}
                            >
                              {spec.micron} µm
                            </span>
                          </td>
                          <td className="px-4 py-3 text-slate-700">
                            {spec.app}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </motion.div>
                {/* General Specs */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4"
                >
                  {[
                    { label: "Length Range", value: "6 – 40 inches" },
                    { label: "Diameter Range", value: "60 – 110 mm" },
                    {
                      label: "Applications",
                      value: "RO & ETP filtration systems",
                    },
                  ].map((spec, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-xl"
                      style={{
                        background: "rgba(255,255,255,0.95)",
                        border: `1px solid ${borderColor()}`,
                      }}
                    >
                      <div
                        className="text-xs font-bold uppercase tracking-wider mb-1"
                        style={{ color: brandColors.tertiary }}
                      >
                        {spec.label}
                      </div>
                      <div
                        className="text-base font-black"
                        style={{ color: brandColors.primary }}
                      >
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* Surface Finish */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="mt-6 p-5 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.95)",
                    border: `1px solid ${borderColor()}`,
                  }}
                >
                  <p
                    className="text-sm font-bold"
                    style={{ color: brandColors.primary }}
                  >
                    <span className="font-black">Surface Finish:</span> Plain /
                    Groove / Dot
                    <span className="text-slate-600 ml-2">
                      (Plain only for 110 mm)
                    </span>
                  </p>
                </motion.div>
                {/*Image section */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16 px-4">
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
                    Typical Applications
                  </h2>
                </div>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                  {filterApplications.map((app, i) => (
                    <motion.div
                      key={i}
                      variants={cardVariants}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 p-4 rounded-xl"
                      style={{
                        background: "rgba(255,255,255,0.9)",
                        border: `1px solid ${borderColor()}`,
                      }}
                    >
                      <CheckCircle
                        className="w-5 h-5 flex-shrink-0"
                        style={{ color: brandColors.accent }}
                      />
                      <span className="text-sm font-semibold text-slate-700">
                        {app}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="rounded-3xl p-8 shadow-lg"
                  style={{
                    background: `${brandColors.primary}06`,
                    border: `1px solid ${borderColor()}`,
                  }}
                >
                  <h3
                    className="text-2xl font-extrabold mb-6"
                    style={{ color: brandColors.primary }}
                  >
                    CTO Carbon Filter Cartridges
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left */}
                    <div className="space-y-4">
                      <div
                        className="p-4 rounded-lg"
                        style={{
                          background: "rgba(255,255,255,0.95)",
                          border: `1px solid ${borderColor()}`,
                        }}
                      >
                        <span
                          className="text-xs font-bold uppercase tracking-wider"
                          style={{ color: brandColors.tertiary }}
                        >
                          Material
                        </span>
                        <p
                          className="text-base font-bold mt-1"
                          style={{ color: brandColors.primary }}
                        >
                          {ctoSpecs.material}
                        </p>
                      </div>
                      <div
                        className="p-4 rounded-lg"
                        style={{
                          background: "rgba(255,255,255,0.95)",
                          border: `1px solid ${borderColor()}`,
                        }}
                      >
                        <span
                          className="text-xs font-bold uppercase tracking-wider"
                          style={{ color: brandColors.tertiary }}
                        >
                          Functions
                        </span>
                        <ul className="mt-2 space-y-2">
                          {ctoSpecs.functions.map((fn, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <CheckCircle
                                className="w-4 h-4"
                                style={{ color: brandColors.accent }}
                              />
                              <span className="text-sm font-semibold text-slate-700">
                                {fn}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right */}
                    <div className="space-y-4">
                      <div
                        className="p-4 rounded-lg"
                        style={{
                          background: "rgba(255,255,255,0.95)",
                          border: `1px solid ${borderColor()}`,
                        }}
                      >
                        <span
                          className="text-xs font-bold uppercase tracking-wider"
                          style={{ color: brandColors.tertiary }}
                        >
                          Available Sizes
                        </span>
                        <p
                          className="text-base font-bold mt-1"
                          style={{ color: brandColors.primary }}
                        >
                          {ctoSpecs.size}
                        </p>
                      </div>
                      <div
                        className="p-4 rounded-lg"
                        style={{
                          background: "rgba(255,255,255,0.95)",
                          border: `1px solid ${borderColor()}`,
                        }}
                      >
                        <span
                          className="text-xs font-bold uppercase tracking-wider"
                          style={{ color: brandColors.tertiary }}
                        >
                          Applications
                        </span>
                        <p
                          className="text-base font-bold mt-1"
                          style={{ color: brandColors.primary }}
                        >
                          {ctoSpecs.app}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Note */}
                  <div
                    className="mt-6 p-4 rounded-xl"
                    style={{
                      background: `${brandColors.tertiary}10`,
                      border: `1px solid ${borderColor()}`,
                    }}
                  >
                    <p
                      className="text-sm font-bold"
                      style={{ color: brandColors.primary }}
                    >
                      Note:{" "}
                      <span className="font-normal text-slate-700">
                        Micron rating (2 &amp; 5 micron) determined by cartridge
                        weight.
                      </span>
                    </p>
                  </div>
                </motion.div>
              </div>
            )}
          </main>
        </div>
      </div>
      {/* CTA Section */}
      <div
        id="cta"
        className="mt-10 sm:mt-20 py-8 sm:py-16 border-t border-indigo-100"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <p className="font-medium mb-2">For any enquiries, please contact:</p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-4 sm:px-6 py-2 sm:py-3 w-full sm:w-auto">
              <p
                className="text-base font-bold flex items-center justify-center gap-2"
                style={{ color: brandColors.primary }}
              >
                <Zap className="w-4 h-4" />
              </p>
              <div className="flex flex-col items-center justify-center mt-3 space-y-2 text-gray-700">
                <div className="flex items-center gap-2">
                  <Mail
                    className="w-4 h-4"
                    style={{ color: brandColors.secondary }}
                  />
                  <button
                    onClick={handleContactClick}
                    className="flex items-center gap-2 font-medium hover:text-blue-600 transition-all cursor-pointer"
                    style={{ color: brandColors.secondary }}
                  >
                    <span className="underline">mfr1.int@psgtech.ac.in</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPlant;
