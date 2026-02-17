import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Shield,
  Wind,
  CheckCircle,
  Zap,
  Settings,
  ArrowRight,
  Info,
} from "lucide-react";
import { brandColors, grad, borderColor } from "../../components/common/brand.js";
import { maskVariants, manufacturingProcess, specifications, availableColors, features } from "../../components/data/FaceMaskData.js";


/* ── Animation Variants ────────────────────────────────────────── */
const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const cardFade = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const slideRight = {
  hidden:  { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

/* ══════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════════════════════════ */
export default function FaceMaskPlant() {
  const [selectedVariant, setSelectedVariant] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(180deg,#f8fafc,#eef6ff)" }}>

      {/* HERO - Glassmorphic Split */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <div className="rounded-3xl p-8 lg:p-12" style={{ background: `${brandColors.primary}06`, border: `1px solid ${borderColor()}` }}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5" style={{ background: grad.card, border: `1px solid ${borderColor()}` }}>
                  <Shield className="w-4 h-4" style={{ color: brandColors.accent }} />
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: brandColors.secondary }}>Medical Grade</span>
                </div>

                <h1 className="text-4xl sm:text-5xl font-extrabold mb-4" style={{ color: brandColors.primary }}>Face Mask Manufacturing</h1>
                <p className="text-lg text-slate-600 mb-6 max-w-lg">Three-ply surgical masks manufactured with advanced ultrasonic bonding technology, available in tie attachment and elastic ear-loop variants.</p>

                <div className="flex flex-wrap gap-4 mb-6">
                  {specifications.slice(0, 3).map((spec, i) => {
                    const Icon = spec.icon;
                    return (
                      <div key={i} className="flex items-center gap-3 bg-white/90 p-3 rounded-lg" style={{ border: `1px solid ${borderColor()}` }}>
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: grad.card }}>
                          <Icon className="w-5 h-5" style={{ color: brandColors.accent }} />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-500">{spec.label}</div>
                          <div className="text-sm font-black" style={{ color: brandColors.primary }}>{spec.value}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <button className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-bold" style={{ background: grad.subtle, boxShadow: `0 8px 32px ${brandColors.accent}30` }}>
                  Request Specifications
                  <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
              <div className="rounded-2xl p-6 shadow-2xl" style={{ background: `${brandColors.secondary}06`, border: `1px solid ${borderColor()}` }}>
                <div className="h-56 rounded-xl overflow-hidden bg-gradient-to-br from-indigo-50 to-cyan-50 flex items-center justify-center">
                  <div className="relative max-w-md w-full">
                    <img src="/images/products/_95A0727 - Face mask.JPG" alt="Face Mask" className="w-full h-auto rounded-2xl shadow-2xl" />
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="absolute -bottom-4 -right-4 px-4 py-2 rounded-lg text-white font-bold shadow-md" style={{ background: grad.subtle }}>95% Filtration</motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-12 space-y-16">

        {/* ─── PRODUCT VARIANTS ─── */}
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
              style={{
                background: grad.card,
                border: `1.5px solid ${borderColor()}`,
              }}
            >
              <span className="w-2 h-2 rounded-full" style={{ background: brandColors.accent }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: brandColors.secondary }}>
                Product Variants
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black" style={{ color: brandColors.primary }}>
              Two Attachment Options
            </h2>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {maskVariants.map((variant) => {
              const Icon = variant.icon;
              const isSelected = selectedVariant === variant.id;

              return (
                <motion.button key={variant.id} variants={cardFade} onClick={() => setSelectedVariant(variant.id)} whileHover={{ y: -6 }} className="relative text-left rounded-2xl p-6 transition-all duration-300" style={{ background: 'rgba(255,255,255,0.95)', border: `1px solid ${borderColor()}`, boxShadow: isSelected ? `0 20px 50px -10px ${brandColors.accent}30` : '0 6px 20px rgba(16,24,40,0.06)' }}>
                  {isSelected && (<div className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center" style={{ background: brandColors.accent }}><CheckCircle className="w-5 h-5 text-white" /></div>)}

                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-md" style={{ background: isSelected ? grad.subtle : grad.card }}>
                      <Icon className="w-7 h-7" style={{ color: isSelected ? '#fff' : brandColors.accent }} />
                    </div>

                    <div>
                      <h3 className="text-xl font-extrabold mb-1" style={{ color: brandColors.primary }}>{variant.name}</h3>
                      <p className="text-sm text-slate-600 mb-3">{variant.description}</p>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold" style={{ background: grad.card, color: brandColors.secondary }}>
                        <Settings className="w-3.5 h-3.5" />{variant.machine}
                      </div>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        </div>

        {/* ─── MANUFACTURING PROCESS ─── */}
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
              style={{
                background: grad.card,
                border: `1.5px solid ${borderColor()}`,
              }}
            >
              <Layers className="w-4 h-4" style={{ color: brandColors.accent }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: brandColors.secondary }}>
                Production Line
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black mb-2" style={{ color: brandColors.primary }}>
              3-Stage Manufacturing Process
            </h2>
            <p className="text-slate-500 max-w-2xl">
              Advanced ultrasonic bonding technology ensures secure layer adhesion and consistent quality.
            </p>
          </motion.div>

          {/* Process Flow */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="space-y-6">
            {manufacturingProcess.map((process, i) => {
              const Icon = process.icon;
              const isLast = i === manufacturingProcess.length - 1;

              return (
                <div key={i} className="relative">
                  <motion.div
                    variants={cardFade}
                    className="flex flex-col md:flex-row gap-6 items-start"
                  >
                    {/* Step Number + Icon */}
                    <div className="relative flex-shrink-0">
                      <div className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl relative z-10"
                        style={{
                          background: grad.subtle,
                        }}>
                        <Icon className="w-9 h-9 text-white" />
                      </div>

                      {/* Connecting line */}
                      {!isLast && (
                        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-1 h-20 rounded-full"
                          style={{ background: `${brandColors.accent}30` }} />
                      )}

                      {/* Step badge */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-black text-white"
                        style={{ background: brandColors.accent }}>
                        {process.step}
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 rounded-2xl p-6"
                      style={{ background: 'rgba(255,255,255,0.96)', border: `1px solid ${borderColor()}` }}>
                      <h3 className="text-xl font-black mb-2" style={{ color: brandColors.primary }}>
                        {process.title}
                      </h3>
                      <p className="text-sm text-slate-600 mb-4">
                        {process.description}
                      </p>

                      {/* Layer visualization (only for Blank Machine) */}
                      {process.layers && (
                        <div className="space-y-2">
                          <div className="text-xs font-bold uppercase tracking-wider mb-3"
                            style={{ color: brandColors.tertiary }}>
                            Layer Composition:
                          </div>
                          {process.layers.map((layer, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                              <div className="w-12 h-8 rounded-md border-2"
                                style={{
                                  background: layer.color,
                                  borderColor: borderColor(),
                                }} />
                              <span className="text-sm font-semibold text-slate-700">
                                {layer.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* ─── FEATURES & SPECS ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Features */}
          <motion.div variants={slideRight} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} className="rounded-3xl p-8 shadow-xl" style={{ background: 'rgba(255,255,255,0.96)', border: `1px solid ${borderColor()}` }}>
            <h3 className="text-2xl font-black mb-6" style={{ color: brandColors.primary }}>
              Key Features
            </h3>
            <div className="space-y-3">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: brandColors.accent }} />
                  <span className="text-sm font-semibold text-slate-700 leading-relaxed">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Color Options */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} className="rounded-3xl p-8 shadow-xl" style={{ background: 'rgba(255,255,255,0.96)', border: `1px solid ${borderColor()}` }}>
            <h3 className="text-2xl font-black mb-6" style={{ color: brandColors.primary }}>
              Available Colors
            </h3>
            <div className="space-y-4">
              {availableColors.map((color, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedColor(i)}
                  className="w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-300"
                  style={{
                    borderColor: selectedColor === i ? brandColors.accent : borderColor(),
                    background: selectedColor === i ? grad.card : "transparent",
                  }}
                >
                  {/* Color swatch */}
                  <div className="w-16 h-16 rounded-xl border-2 shadow-md"
                    style={{
                      background: color.hex,
                      borderColor: selectedColor === i ? brandColors.accent : borderColor(),
                    }} />

                  {/* Info */}
                  <div className="flex-1 text-left">
                    <div className="text-base font-black" style={{ color: brandColors.primary }}>
                      {color.name}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      {color.description}
                    </div>
                  </div>

                  {/* Selected indicator */}
                  {selectedColor === i && (
                    <CheckCircle className="w-6 h-6" style={{ color: brandColors.accent }} />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ─── SPECIFICATIONS GRID ─── */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="rounded-3xl p-8 md:p-10" style={{ background: 'rgba(255,255,255,0.96)', border: `1px solid ${borderColor()}` }}>
          <div className="flex items-center gap-3 mb-8">
            <Info className="w-6 h-6" style={{ color: brandColors.accent }} />
            <h3 className="text-2xl font-extrabold" style={{ color: brandColors.primary }}>Technical Specifications</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {specifications.map((spec, i) => {
              const Icon = spec.icon;
              return (
                <div key={i} className="text-center p-4 rounded-lg" style={{ background: 'white', border: `1px solid ${borderColor()}` }}>
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md" style={{ background: "#fff" }}>
                    <Icon className="w-8 h-8" style={{ color: brandColors.accent }} />
                  </div>
                  <div className="text-3xl font-black mb-1" style={{ color: brandColors.primary }}>{spec.value}</div>
                  <div className="text-sm font-semibold text-slate-600">{spec.label}</div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </main>
    </div>
  );
}