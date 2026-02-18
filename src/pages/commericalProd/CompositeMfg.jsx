import React, { useState } from "react";
import { motion } from "framer-motion";
import { Flame, Droplets, CheckCircle } from "lucide-react";
import {
  hotPressFeatures,
  filterApplications,
  meltBlownSpecs,
  ctoSpecs,
} from "../../components/data/CompositeMfgData";
import { brandColors, grad, borderColor } from "../../components/common/brand";

/* ── Animation Variants ────────────────────────────────────────── */
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

/* ══════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════════════════════════ */
export default function CompositeMfg() {
  const [activeTab, setActiveTab] = useState("hotpress"); // "hotpress" | "filter"

  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(180deg,#f8f9ff,#eef6ff)" }}
    >
      {/* Modern Hero */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1
                className="text-4xl md:text-5xl font-extrabold"
                style={{ color: brandColors.primary }}
              >
                Composite Manufacturing Machine
              </h1>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => setActiveTab("hotpress")}
                  className={`px-4 py-2 rounded-full font-bold transition ${activeTab === "hotpress" ? "text-white" : "text-slate-700"}`}
                  style={{
                    background:
                      activeTab === "hotpress" ? grad.subtle : "transparent",
                    border: `1px solid ${borderColor()}`,
                  }}
                >
                  Hot Press
                </button>
                <button
                  onClick={() => setActiveTab("filter")}
                  className={`px-4 py-2 rounded-full font-bold transition ${activeTab === "filter" ? "text-white" : "text-slate-700"}`}
                  style={{
                    background:
                      activeTab === "filter" ? grad.subtle : "transparent",
                    border: `1px solid ${borderColor()}`,
                  }}
                >
                  Filter Plant
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <div
                className="rounded-2xl p-6 shadow-2xl"
                style={{
                  background: `${brandColors.primary}08`,
                  border: `1px solid ${borderColor()}`,
                }}
              >
                <div className="h-44 rounded-xl overflow-hidden bg-gradient-to-br from-indigo-50 to-cyan-50 flex items-center justify-center">
                  <div className="text-center">
                    <Flame
                      className="w-10 h-10 mx-auto mb-2"
                      style={{ color: brandColors.accent }}
                    />
                    <div
                      className="text-sm font-bold"
                      style={{ color: brandColors.primary }}
                    >
                      Production Snapshot
                    </div>
                    <div className="text-xs text-slate-600 mt-1">
                      Operational metrics preview
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-12 space-y-12">
        {/* ────────────────────────────────────────────────────────────
           HOT PRESS UNIT
           ──────────────────────────────────────────────────────────── */}
        {activeTab === "hotpress" && (
          <motion.div
            key="hotpress"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            {/* ── Overview ── */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="rounded-3xl p-8 md:p-10 shadow-xl"
              style={{
                background: `${brandColors.primary}06`,
                border: `1px solid ${borderColor()}`,
              }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div
                  className="w-2 h-16 rounded-full"
                  style={{ background: grad.subtle }}
                />
                <div>
                  <h2
                    className="text-3xl md:text-4xl font-extrabold"
                    style={{ color: brandColors.primary }}
                  >
                    Hot Press Unit
                  </h2>
                  <p className="mt-2 text-slate-600 text-base leading-relaxed max-w-3xl">
                    The hot press machine is used for pressing and laminating
                    fibreboards, decorative papers, plywood, and other laminated
                    sheets, ensuring precise lamination and high-quality
                    finished products.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ── Features Grid ── */}
            <div>
              <h3
                className="text-2xl font-black mb-6"
                style={{ color: brandColors.primary }}
              >
                Key Features
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-5"
              >
                {hotPressFeatures.map((feat, i) => {
                  const Icon = feat.icon;
                  return (
                    <motion.div
                      key={i}
                      variants={cardVariants}
                      whileHover={{
                        y: -6,
                        boxShadow: `0 18px 36px ${brandColors.accent}22`,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 280,
                        damping: 24,
                      }}
                      className="relative overflow-hidden rounded-2xl p-6 shadow-md"
                      style={{
                        background: "rgba(255,255,255,0.85)",
                        border: `1px solid ${borderColor()}`,
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ background: grad.subtle }}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4
                            className="text-base font-bold"
                            style={{ color: brandColors.primary }}
                          >
                            {feat.title}
                          </h4>
                          <p className="text-sm text-slate-600 mt-1">
                            {feat.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* ── CTA ── */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl p-6 text-center"
              style={{
                background: `${brandColors.accent}12`,
                border: `1px solid ${borderColor()}`,
              }}
            >
              <p
                className="text-sm font-bold"
                style={{ color: brandColors.primary }}
              >
                ✓ Ensures precise lamination and high-quality finished products
              </p>
            </motion.div>
          </motion.div>
        )}

        {/* ────────────────────────────────────────────────────────────
           FILTER PLANT
           ──────────────────────────────────────────────────────────── */}
        {activeTab === "filter" && (
          <motion.div
            key="filter"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            {/* ── Overview ── */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="rounded-3xl p-8 md:p-10 shadow-lg"
              style={{
                background: `${brandColors.primary}06`,
                border: `1px solid ${borderColor()}`,
              }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div
                  className="w-2 h-16 rounded-full"
                  style={{ background: grad.subtle }}
                />
                <div>
                  <h2
                    className="text-3xl md:text-4xl font-extrabold"
                    style={{ color: brandColors.primary }}
                  >
                    Filter Plant
                  </h2>
                  <p className="mt-2 text-slate-600 text-base leading-relaxed max-w-3xl">
                    Melt-blown polypropylene filter cartridges are manufactured
                    in this plant. These polypropylene water filters are
                    designed to reduce sediment, dirt, sand, silt, rust, lime
                    scale, and other suspended impurities in water. They offer
                    excellent chemical resistance and high dirt-holding capacity
                    at a cost-effective price point.
                  </p>
                </div>
              </div>

              <div
                className="rounded-xl p-5 mt-6"
                style={{
                  background: "rgba(255,255,255,0.9)",
                  border: `1px solid ${borderColor()}`,
                }}
              >
                <p className="text-sm text-slate-700 leading-relaxed">
                  <strong
                    className="font-bold"
                    style={{ color: brandColors.primary }}
                  >
                    Material:
                  </strong>{" "}
                  Constructed from food-grade melt-blown polypropylene fibres,
                  enabling effective removal of a wide range of particulate
                  contaminants.
                </p>
              </div>
            </motion.div>

            {/* ── Applications ── */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3
                  className="text-2xl font-black"
                  style={{ color: brandColors.primary }}
                >
                  Typical Applications
                </h3>
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
            </div>

            {/* ── Melt Blown Cartridge Filters ── */}
            <div>
              <h3
                className="text-2xl font-black mb-6"
                style={{ color: brandColors.primary }}
              >
                Melt Blown Cartridge Filters
              </h3>

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
                        <td className="px-4 py-3 text-slate-700">{spec.app}</td>
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
            </div>

            {/* ── CTO Carbon Filter Cartridges ── */}
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
          </motion.div>
        )}
      </main>
    </div>
  );
}
