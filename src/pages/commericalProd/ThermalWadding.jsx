import React from "react";
import { Flame, Box, ArrowRight, Sparkles, ThermometerSun } from "lucide-react";
import {
  specifications,
  processFeatures,
  applications,
  processSequence,
  keyBenefits,
} from "../../components/data/ThermalWaddingData.js";
import { motion } from "framer-motion";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ThermalBonding() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <style>{`
        .smooth-all { transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
        .hover-scale:hover { transform: scale(1.02); }
        .hover-glow:hover { box-shadow: 0 0 30px rgba(6, 182, 212, 0.3 ); }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1, transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0, transform: translateX(30px); }
          to { opacity: 1, transform: translate(0); }
        }
        
        .animate-slide-left { animation: slideInLeft 0.6s ease-out; }
        .animate-slide-right { animation: slideInRight 0.6s ease-out; }
      
      `}</style>

      {/* Top Banner */}
      <div
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, #22227A, #434C9A, #06b6d4)`,
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
                <Flame className="w-12 h-12 text-white" strokeWidth={2.5} />
              </div>
            </motion.div>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1"
            >
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full border border-white/30 mb-3">
                <ThermometerSun className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-bold uppercase tracking-wider">
                  Heat & Melt Bonding Technology
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-2">
                Thermal Bonding
              </h1>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="relative max-w-6xl mx-auto px-6 py-12 space-y-12">
        {/* Hero Section */}
        <div
          className="relative overflow-hidden rounded-3xl bg-white p-8 md:p-12 shadow-2xl"
          style={{ borderColor: "#eef2ff", borderWidth: "1px" }}
        >
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl"
            style={{ backgroundColor: "rgba(67, 76, 154, 0.1)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl"
            style={{ backgroundColor: "rgba(34, 34, 122, 0.1)" }}
          />

          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-1.5 h-12 rounded-full"
                style={{
                  background: "linear-gradient(to bottom, #434C9A, #6D77B3)",
                }}
              />
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                Advanced Fusion Technology
              </h2>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-8 max-w-3xl">
              Thermal bonding, also known as heat bonding or melt bonding, is a
              process in which a fibre web is fused at the fibre crossover
              points. This is achieved by passing the web through a controlled
              heat source—typically hot air—causing the thermoplastic fibres to
              soften and bond at their points of intersection.
            </p>

            {/* Key Metrics */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                { label: "Temperature Range", value: "120-200°C", gradient: "linear-gradient(to right, #434C9A, #22227A)", color: "#434C9A" },
                { label: "Chamber Length", value: "3 meters", gradient: "linear-gradient(to right, #6D77B3, #434C9A)", color: "#6D77B3" },
                { label: "Capacity", value: "40 kg/hr", gradient: "linear-gradient(to right, #22227A, #6D77B3)", color: "#22227A" },
              ].map((m) => (
                <motion.div key={m.label} variants={cardVariants} whileHover={{ y: -6, scale: 1.02 }} transition={{ duration: 0.25 }} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-md" style={{ borderColor: "#eef2ff", borderWidth: "1px" }}>
                  <div className="text-sm font-semibold mb-2 uppercase tracking-wide" style={{ color: m.color }}>{m.label}</div>
                  <div className="text-3xl font-bold bg-clip-text text-transparent" style={{ backgroundImage: m.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{m.value}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Process Features Grid */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">
            Process Features
          </h2>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={containerVariants} initial="hidden" animate="visible">
            {processFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ scale: 1.03, y: -6, boxShadow: "0 20px 30px rgba(67,76,154,0.08)" }}
                  transition={{ duration: 0.28 }}
                  className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg border-2"
                  style={{ borderColor: "#e2e8f0" }}
                >
                  <motion.div className="absolute inset-0 rounded-2xl pointer-events-none" initial={{ opacity: 0 }} whileHover={{ opacity: 0.07 }} style={{ background: "linear-gradient(to bottom right, #434C9A, #6D77B3)" }} />

                  <div className="relative">
                    <div className="inline-flex p-4 rounded-2xl shadow-lg mb-4" style={{ background: "linear-gradient(to bottom right, #434C9A, #6D77B3)" }}>
                      <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Technical Specifications */}
        <div className="rounded-3xl bg-white shadow-xl border border-slate-200 overflow-hidden">
          <div
            className="px-8 py-6"
            style={{
              background:
                "linear-gradient(to right, #22227A, #434C9A, #6D77B3)",
            }}
          >
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Box className="w-8 h-8" />
              Technical Specifications
            </h2>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-5">
                <div
                  className="flex items-center justify-between p-4 rounded-xl border"
                  style={{ backgroundColor: "#f8fafc", borderColor: "#eef2ff" }}
                >
                  <span className="font-semibold" style={{ color: "#374151" }}>
                    Production Capacity
                  </span>
                  <span
                    className="font-bold text-lg"
                    style={{ color: "#22227A" }}
                  >
                    {specifications.capacity}
                  </span>
                </div>
                <div
                  className="flex items-center justify-between p-4 rounded-xl border"
                  style={{ backgroundColor: "#f8fafc", borderColor: "#eef2ff" }}
                >
                  <span className="font-semibold" style={{ color: "#374151" }}>
                    Fiber Denier
                  </span>
                  <span
                    className="font-bold text-lg"
                    style={{ color: "#434C9A" }}
                  >
                    {specifications.denier}
                  </span>
                </div>
                <div
                  className="flex items-center justify-between p-4 rounded-xl border"
                  style={{ backgroundColor: "#f8fafc", borderColor: "#eef2ff" }}
                >
                  <span className="font-semibold" style={{ color: "#374151" }}>
                    GSM Range
                  </span>
                  <span
                    className="font-bold text-lg"
                    style={{ color: "#6D77B3" }}
                  >
                    {specifications.gsm}
                  </span>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-5">
                <div
                  className="flex items-center justify-between p-4 rounded-xl border"
                  style={{ backgroundColor: "#f8fafc", borderColor: "#eef2ff" }}
                >
                  <span className="font-semibold" style={{ color: "#374151" }}>
                    Temperature Range
                  </span>
                  <span
                    className="font-bold text-lg"
                    style={{ color: "#22227A" }}
                  >
                    {specifications.temperature}
                  </span>
                </div>
                <div
                  className="flex items-center justify-between p-4 rounded-xl border"
                  style={{ backgroundColor: "#f8fafc", borderColor: "#eef2ff" }}
                >
                  <span className="font-semibold" style={{ color: "#374151" }}>
                    Chamber Length
                  </span>
                  <span
                    className="font-bold text-lg"
                    style={{ color: "#434C9A" }}
                  >
                    {specifications.chamberLength}
                  </span>
                </div>
                <div
                  className="flex items-center justify-between p-4 rounded-xl border"
                  style={{ backgroundColor: "#f8fafc", borderColor: "#eef2ff" }}
                >
                  <span className="font-semibold" style={{ color: "#374151" }}>
                    Minimum Order
                  </span>
                  <span
                    className="font-bold text-lg"
                    style={{ color: "#6D77B3" }}
                  >
                    {specifications.moq}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Raw Materials */}
        <div
          className="rounded-3xl p-8 shadow-lg"
          style={{
            backgroundColor: "#eef2ff",
            borderColor: "#e0e7ff",
            borderWidth: "1px",
          }}
        >
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Raw Materials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {specifications.materials.map((material, index) => (
              <motion.div key={index} variants={cardVariants} whileHover={{ scale: 1.03, boxShadow: "0 12px 24px rgba(67,76,154,0.06)", borderColor: "#434C9A" }} transition={{ duration: 0.25 }} className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-md border-2" style={{ borderColor: "transparent" }}>
                <motion.div className="absolute inset-0 rounded-2xl pointer-events-none" initial={{ opacity: 0 }} whileHover={{ opacity: 0.04 }} style={{ background: "linear-gradient(to right, #434C9A, #6D77B3)" }} />
                <div className="relative flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full" style={{ background: "linear-gradient(to right, #434C9A, #6D77B3)" }} />
                  <span className="text-lg font-semibold" style={{ color: "#22227A" }}>{material}</span>
                </div>
              </motion.div>
            ))} 
          </div>
        </div>

        {/* Process Flow */}
        <div className="rounded-3xl bg-white shadow-xl border border-slate-200 p-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">
            Process Sequence
          </h2>

          <div className="space-y-6">
            {processSequence.map((item, index) => (
              <div key={index} className="flex items-start gap-6 group">
                <div className="relative flex-shrink-0">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
                    style={{
                      background:
                        "linear-gradient(to bottom right, #434C9A, #6D77B3)",
                    }}
                  >
                    <span className="text-white font-bold text-lg">
                      {item.step}
                    </span>
                  </div>
                  {index < 4 && (
                    <div
                      className="absolute top-14 left-1/2 -translate-x-1/2 w-0.5 h-12"
                      style={{
                        background:
                          "linear-gradient(to bottom, #434C9A, #6D77B3)",
                      }}
                    />
                  )}
                </div>
                <div className="flex-1 pt-2">
                  <motion.h3 className="text-xl font-bold mb-2" style={{ color: "#22227A" }} whileHover={{ color: "#434C9A" }}>{item.title}</motion.h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Applications */}
        <div
          className="rounded-3xl p-8 shadow-lg"
          style={{
            backgroundColor: "#eef2ff",
            borderColor: "#e0e7ff",
            borderWidth: "1px",
          }}
        >
          <h2 className="text-3xl font-bold text-slate-800 mb-8">
            Applications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {applications.map((app, index) => (
              <motion.div key={index} variants={cardVariants} whileHover={{ y: -6 }} transition={{ duration: 0.25 }} className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-md transition-all" style={{ animationDelay: `${index * 50}ms` }}>
                <motion.div className="absolute inset-0 rounded-2xl pointer-events-none" initial={{ opacity: 0 }} whileHover={{ opacity: 0.03 }} style={{ background: "linear-gradient(to right, rgba(67,76,154,0.03), rgba(109,119,179,0.03))" }} />
                <div className="relative flex items-center gap-3">
                  <motion.div whileHover={{ x: 6 }}>
                    <ArrowRight className="w-5 h-5" style={{ color: "#434C9A" }} />
                  </motion.div>
                  <span className="font-semibold" style={{ color: "#22227A" }}>{app}</span>
                </div>
              </motion.div>
            ))} 
          </div>
        </div>

        {/* Key Benefits */}
        <div
          className="rounded-3xl p-8 shadow-lg"
          style={{
            backgroundColor: "#eef2ff",
            borderColor: "#e0e7ff",
            borderWidth: "1px",
          }}
        >
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {keyBenefits.map((benefit, index) => (
              <motion.div key={index} variants={cardVariants} whileHover={{ y: -6, scale: 1.02, boxShadow: "0 18px 30px rgba(67,76,154,0.06)" }} transition={{ duration: 0.25 }} className="bg-white rounded-2xl p-6 shadow-md" style={{ borderColor: "#e0e7ff", borderWidth: "1px" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg" style={{ background: "linear-gradient(to bottom right, #434C9A, #6D77B3)" }}>
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Equipment Note */}
        <div
          className="rounded-3xl p-8 text-white shadow-2xl"
          style={{ background: "linear-gradient(to right, #22227A, #434C9A)" }}
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                style={{
                  background:
                    "linear-gradient(to bottom right, #434C9A, #6D77B3)",
                }}
              >
                <Flame className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">
                Wadding Machine Configuration
              </h3>
              <p className="text-slate-300 leading-relaxed">
                This configuration ensures uniform bonding across the web, while
                maintaining process safety, energy efficiency, and consistent
                fabric quality. The single-chamber oven with a 3-meter chamber
                length provides optimal heat distribution for superior results.
              </p>
            </div>
          </div>
        </div>
      </main>
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }
        .animate-pulse {
          animation: pulse 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
