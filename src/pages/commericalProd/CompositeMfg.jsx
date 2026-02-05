import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Flame,
  Droplets,
  CheckCircle,
} from "lucide-react";
import { hotPressFeatures, filterApplications, meltBlownSpecs, ctoSpecs } from "../../components/data/CompositeMfgData";
import { brandColors, grad, borderColor } from "../../components/common/brand";


/* ── Animation Variants ────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: "spring", stiffness: 90, damping: 18 },
  },
};

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

/* ══════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════════════════════════ */
export default function CompositeMfg() {
  const [activeTab, setActiveTab] = useState("hotpress");  // "hotpress" | "filter"

  return (
    <div className="min-h-screen" style={{ background: "#f8f9ff" }}>

      {/* ═══ HEADER ═══ */}
      <section className="relative overflow-hidden" style={{ background: grad.hero }}>
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center text-white"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.25)",
                backdropFilter: "blur(6px)",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-cyan-300" />
              <span className="text-xs font-bold uppercase tracking-widest">
                Manufacturing Equipment
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
              Composite Manufacturing
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
              Hot press units and advanced filtration systems for precision industrial applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ TAB NAVIGATION ═══ */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-lg border-b shadow-md"
        style={{ borderColor: borderColor() }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto">
            {[
              { key: "hotpress", label: "Hot Press Unit", icon: Flame },
              { key: "filter",   label: "Filter Plant",   icon: Droplets },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className="relative flex items-center gap-2 px-6 py-4 font-bold text-sm uppercase tracking-wider whitespace-nowrap transition-all"
                  style={{
                    color: isActive ? "#fff" : brandColors.tertiary,
                    background: isActive ? grad.subtle : "transparent",
                    borderRadius: isActive ? "0.5rem 0.5rem 0 0" : 0,
                  }}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-1 rounded-t-full"
                      style={{ background: brandColors.accent }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* ═══ CONTENT ═══ */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

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
              className="rounded-3xl bg-white p-8 md:p-10 shadow-lg border-2"
              style={{ borderColor: borderColor() }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-2 h-16 rounded-full" style={{ background: grad.subtle }} />
                <div>
                  <h2 className="text-3xl md:text-4xl font-black" style={{ color: brandColors.primary }}>
                    Hot Press Unit
                  </h2>
                  <p className="mt-2 text-slate-600 text-base leading-relaxed max-w-3xl">
                    The hot press machine is used for pressing and laminating fibreboards,
                    decorative papers, plywood, and other laminated sheets, ensuring precise
                    lamination and high-quality finished products.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ── Features Grid ── */}
            <div>
              <h3 className="text-2xl font-black mb-6" style={{ color: brandColors.primary }}>
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
                      whileHover={{ y: -6, boxShadow: `0 16px 32px ${brandColors.accent}20` }}
                      transition={{ type: "spring", stiffness: 300, damping: 22 }}
                      className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-md border-2"
                      style={{ borderColor: borderColor() }}
                    >
                      {/* Top accent bar */}
                      <div className="absolute top-0 left-0 w-full h-1 rounded-b-full"
                        style={{
                          background: grad.subtle,
                          transform: "scaleX(0.4)",
                          transformOrigin: "left",
                          transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1)",
                        }}
                        ref={el => {
                          if (!el) return;
                          const parent = el.closest(".group, [class*='hover']")?.parentElement || el.parentElement;
                          parent.onmouseenter = () => { el.style.transform = "scaleX(1)"; };
                          parent.onmouseleave = () => { el.style.transform = "scaleX(0.4)"; };
                        }}
                      />

                      {/* Icon badge */}
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-md"
                        style={{ background: grad.subtle }}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      <h4 className="text-base font-bold mb-2" style={{ color: brandColors.primary }}>
                        {feat.title}
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {feat.desc}
                      </p>
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
              style={{ background: `${brandColors.accent}10`, border: `2px solid ${borderColor()}` }}
            >
              <p className="text-sm font-bold" style={{ color: brandColors.primary }}>
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
              className="rounded-3xl bg-white p-8 md:p-10 shadow-lg border-2"
              style={{ borderColor: borderColor() }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-2 h-16 rounded-full" style={{ background: grad.subtle }} />
                <div>
                  <h2 className="text-3xl md:text-4xl font-black" style={{ color: brandColors.primary }}>
                    Filter Plant
                  </h2>
                  <p className="mt-2 text-slate-600 text-base leading-relaxed max-w-3xl">
                    Melt-blown polypropylene filter cartridges are manufactured in this plant.
                    These polypropylene water filters are designed to reduce sediment, dirt, sand,
                    silt, rust, lime scale, and other suspended impurities in water. They offer
                    excellent chemical resistance and high dirt-holding capacity at a cost-effective
                    price point.
                  </p>
                </div>
              </div>

              <div className="rounded-xl p-5 mt-6"
                style={{ background: `${brandColors.tertiary}10`, border: `1px solid ${borderColor()}` }}>
                <p className="text-sm text-slate-700 leading-relaxed">
                  <strong className="font-bold" style={{ color: brandColors.primary }}>Material:</strong>{" "}
                  Constructed from food-grade melt-blown polypropylene fibres, enabling effective
                  removal of a wide range of particulate contaminants.
                </p>
              </div>
            </motion.div>

            {/* ── Applications ── */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-black" style={{ color: brandColors.primary }}>
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
                    className="flex items-center gap-3 p-4 rounded-xl bg-white border-2 shadow-sm"
                    style={{ borderColor: borderColor() }}
                  >
                    <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: brandColors.accent }} />
                    <span className="text-sm font-semibold text-slate-700">{app}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* ── Melt Blown Cartridge Filters ── */}
            <div>
              <h3 className="text-2xl font-black mb-6" style={{ color: brandColors.primary }}>
                Melt Blown Cartridge Filters
              </h3>

              {/* Spec Table */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="overflow-x-auto rounded-2xl shadow-lg border-2"
                style={{ borderColor: borderColor() }}
              >
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: grad.subtle }}>
                      <th className="px-4 py-3 text-left text-white font-bold uppercase tracking-wide">Size</th>
                      <th className="px-4 py-3 text-left text-white font-bold uppercase tracking-wide">Weight</th>
                      <th className="px-4 py-3 text-left text-white font-bold uppercase tracking-wide">Micron</th>
                      <th className="px-4 py-3 text-left text-white font-bold uppercase tracking-wide">Application</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {meltBlownSpecs.map((spec, i) => (
                      <tr key={i} className="border-b last:border-b-0 hover:bg-slate-50 transition-colors"
                        style={{ borderColor: borderColor() }}>
                        <td className="px-4 py-3 font-semibold" style={{ color: brandColors.primary }}>{spec.size}</td>
                        <td className="px-4 py-3 text-slate-700">{spec.weight}</td>
                        <td className="px-4 py-3">
                          <span className="px-3 py-1 rounded-full text-xs font-bold text-white"
                            style={{ background: grad.subtle }}>
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
                  { label: "Applications", value: "RO & ETP filtration systems" },
                ].map((spec, i) => (
                  <div key={i} className="p-5 rounded-xl bg-white border-2 shadow-sm"
                    style={{ borderColor: borderColor() }}>
                    <div className="text-xs font-bold uppercase tracking-wider mb-1"
                      style={{ color: brandColors.tertiary }}>
                      {spec.label}
                    </div>
                    <div className="text-base font-black" style={{ color: brandColors.primary }}>
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
                style={{ background: `${brandColors.accent}10`, border: `2px solid ${borderColor()}` }}
              >
                <p className="text-sm font-bold" style={{ color: brandColors.primary }}>
                  <span className="font-black">Surface Finish:</span> Plain / Groove / Dot
                  <span className="text-slate-600 ml-2">(Plain only for 110 mm)</span>
                </p>
              </motion.div>
            </div>

            {/* ── CTO Carbon Filter Cartridges ── */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-3xl bg-white p-8 shadow-lg border-2"
              style={{ borderColor: borderColor() }}
            >
              <h3 className="text-2xl font-black mb-6" style={{ color: brandColors.primary }}>
                CTO Carbon Filter Cartridges
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left */}
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: brandColors.tertiary }}>Material</span>
                    <p className="text-base font-bold mt-1" style={{ color: brandColors.primary }}>
                      {ctoSpecs.material}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: brandColors.tertiary }}>Functions</span>
                    <ul className="mt-2 space-y-2">
                      {ctoSpecs.functions.map((fn, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" style={{ color: brandColors.accent }} />
                          <span className="text-sm font-semibold text-slate-700">{fn}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right */}
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: brandColors.tertiary }}>Available Sizes</span>
                    <p className="text-base font-bold mt-1" style={{ color: brandColors.primary }}>
                      {ctoSpecs.size}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: brandColors.tertiary }}>Applications</span>
                    <p className="text-base font-bold mt-1" style={{ color: brandColors.primary }}>
                      {ctoSpecs.app}
                    </p>
                  </div>
                </div>
              </div>

              {/* Note */}
              <div className="mt-6 p-4 rounded-xl"
                style={{ background: `${brandColors.tertiary}10`, border: `1px solid ${borderColor()}` }}>
                <p className="text-sm font-bold" style={{ color: brandColors.primary }}>
                  Note: <span className="font-normal text-slate-700">
                    Micron rating (2 &amp; 5 micron) determined by cartridge weight.
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