import React, { useState } from "react";
import {
  Flame,
  Box,
  ArrowRight,
  Sparkles,
  ThermometerSun,
  Zap,
} from "lucide-react";
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

const brandColors = {
  primary: "#22227A",
  secondary: "#434C9A",
  tertiary: "#6D77B3",
  accent: "#06b6d4",
};

export default function ThermalBonding() {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <style>{`
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(6, 182, 212, 0.4);
          }
          50% { 
            box-shadow: 0 0 40px rgba(6, 182, 212, 0.6), 0 0 60px rgba(67, 76, 154, 0.3);
          }
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .shimmer-effect {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        
        .pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        
        .gradient-animate {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }
      `}</style>

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
              <p className="text-lg text-cyan-100">
                Advanced Fiber Fusion Technology
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="relative max-w-6xl mx-auto px-6 py-12 space-y-16">
        {/* Hero Section */}
        <div
          className="relative overflow-hidden rounded-3xl bg-white p-8 md:p-12 shadow-2xl border-2"
          style={{ borderColor: `${brandColors.tertiary}30` }}
        >
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-20"
            style={{
              background: `linear-gradient(135deg, ${brandColors.secondary}, ${brandColors.accent})`,
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl"
            style={{ backgroundColor: "rgba(34, 34, 122, 0.1)" }}
          />

          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-2 h-16 rounded-full"
                style={{
                  background: `linear-gradient(to bottom, ${brandColors.secondary}, ${brandColors.accent})`,
                }}
              />
              <h2
                className="text-3xl md:text-5xl font-black"
                style={{ color: brandColors.primary }}
              >
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
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              {[
                {
                  label: "Temperature Range",
                  value: "120-200°C",
                  icon: ThermometerSun,
                },
                { label: "Chamber Length", value: "3 meters", icon: Box },
                { label: "Capacity", value: "40 kg/hr", icon: Zap },
              ].map((m, idx) => {
                const Icon = m.icon;
                return (
                  <motion.div
                    key={m.label}
                    variants={cardVariants}
                    whileHover={{
                      y: -12,
                      scale: 1.05,
                      rotateY: 5,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 cursor-pointer overflow-hidden"
                    style={{ borderColor: `${brandColors.tertiary}40` }}
                  >
                    <div className="relative">
                      <div>
                        <Icon
                          className="w-8 h-8 mb-3"
                          style={{ color: brandColors.accent }}
                        />
                      </div>
                      <div
                        className="text-sm font-semibold mb-2 uppercase tracking-wide"
                        style={{ color: brandColors.secondary }}
                      >
                        {m.label}
                      </div>
                      <div
                        className="text-4xl font-black"
                        style={{ color: brandColors.primary }}
                      >
                        {m.value}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Process Features Grid */}
        <div className="space-y-6">
          <h2
            className="text-4xl font-black mb-10 text-center"
            style={{ color: brandColors.primary }}
          >
            Process Features
          </h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {processFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.03,
                    y: -6,
                    boxShadow: "0 20px 30px rgba(67,76,154,0.08)",
                  }}
                  transition={{ duration: 0.28 }}
                  className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg border-2 cursor-pointer"
                  style={{ borderColor: "#e2e8f0" }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.07 }}
                    style={{
                      background:
                        "linear-gradient(to bottom right, #434C9A, #6D77B3)",
                    }}
                  />

                  <div className="relative">
                    <div
                      className="inline-flex p-4 rounded-2xl shadow-lg mb-4"
                      style={{
                        background: `linear-gradient(135deg, ${brandColors.secondary}, ${brandColors.accent})`,
                      }}
                    >
                      <Icon className="w-10 h-10 text-white" strokeWidth={2} />
                    </div>
                    <h3
                      className="text-2xl font-bold mb-3"
                      style={{ color: brandColors.primary }}
                    >
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
        <div
          className="rounded-3xl bg-white shadow-2xl overflow-hidden border-2"
          style={{ borderColor: `${brandColors.tertiary}30` }}
        >
          <div
            className="px-8 py-6"
            style={{
              background: `linear-gradient(135deg, ${brandColors.primary}, ${brandColors.accent})`,
            }}
          >
            <h2 className="text-3xl font-black text-white">
              Technical Specifications
            </h2>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  label: "Production Capacity",
                  value: specifications.capacity,
                },
                { label: "Fiber Denier", value: specifications.denier },
                { label: "GSM Range", value: specifications.gsm },
                {
                  label: "Temperature Range",
                  value: specifications.temperature,
                },
                {
                  label: "Chamber Length",
                  value: specifications.chamberLength,
                },
                { label: "Minimum Order", value: specifications.moq },
              ].map((spec, index) => (
                <div
                  className="flex items-center justify-between p-5 rounded-xl border-2 transition-all"
                  style={{ borderColor: `${brandColors.tertiary}30` }}
                >
                  <span className="font-bold text-slate-700">{spec.label}</span>
                  <span
                    className="ont-black text-lg px-4 py-2 rounded-lg"
                    style={{
                      backgroundColor: `${brandColors.accent}15`,
                      color: brandColors.primary,
                    }}
                  >
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Raw Materials */}
        <div
          className="rounded-3xl p-8 shadow-2xl"
          style={{
            backgroundColor: "#eef2ff",
            borderColor: "#e0e7ff",
            borderWidth: "1px",
          }}
        >
          <h2 className="text-4xl font-black mb-10"
            style={{ color: brandColors.primary }}
          >
            Raw Materials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {specifications.materials.map((material, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 12px 24px rgba(67,76,154,0.06)",
                  borderColor: "#434C9A",
                }}
                transition={{ duration: 0.25 }}
                className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-md border-2"
                style={{ borderColor: "transparent" }}
              >
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.04 }}
                  style={{
                    background: "linear-gradient(to right, #434C9A, #6D77B3)",
                  }}
                />
                <div className="relative flex items-center gap-4">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{
                      background: "linear-gradient(to right, #434C9A, #6D77B3)",
                    }}
                  />
                  <span
                    className="text-lg font-semibold"
                    style={{ color: "#22227A" }}
                  >
                    {material}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Flow */}
        <div className="rounded-3xl bg-white shadow-xl border border-slate-200 p-8">
          <h2
            className="text-4xl font-black mb-10"
            style={{ color: brandColors.primary }}
          >
            Process Sequence
          </h2>

          <div className="space-y-8">
            {processSequence.map((item, index) => {
              const isActive = activeStep === index;

              return (
                <div
                  key={index}
                  onHoverStart={() => setActiveStep(index)}
                  onHoverEnd={() => setActiveStep(null)}
                  className="flex items-start gap-6 group cursor-pointer"
                >
                  <div className="relative flex-shrink-0">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${brandColors.secondary}, ${brandColors.accent})`,
                      }}
                    >
                      <span className="text-white font-bold text-xl">
                        {item.step}
                      </span>
                    </div>

                    {index < processSequence.length - 1 && (
                      <div
                        className="absolute top-16 left-1/2 -translate-x-1/2 w-1 h-16 rounded-full"
                        style={{
                          background: `linear-gradient(to bottom, ${brandColors.secondary}, ${brandColors.accent})`,
                        }}
                      />
                    )}
                  </div>

                  <div className="flex-1 pt-2">
                    <h3
                      className="text-2xl font-bold mb-2"
                      style={{
                        color: isActive
                          ? brandColors.accent
                          : brandColors.primary,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-slate-600 leading-relaxed"
                      animate={{ opacity: isActive ? 1 : 0.8 }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Applications */}
        <div
          className="rounded-3xl p-8 shadow-lg"
          style={{
            backgroundColor: `${brandColors.tertiary}08`,
            borderWidth: "2px",
            borderColor: `${brandColors.tertiary}30`,
          }}
        >
          <h2
            className="text-4xl font-black mb-10"
            style={{ color: brandColors.primary }}
          >
            Applications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {applications.map((app, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-md border-2"
                style={{ borderColor: `${brandColors.tertiary}30` }}
              >
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(67,76,154,0.03), rgba(109,119,179,0.03))",
                  }}
                />
                <div className="relative flex items-center gap-3">
                  <div>
                    <ArrowRight
                      className="w-5 h-5"
                      style={{ color: brandColors.accent }}
                    />
                  </div>
                  <span
                    className="font-bold"
                    style={{ color: brandColors.primary }}
                  >
                    {app}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Benefits */}
        <div
          className="rounded-3xl p-10 shadow-2xl"
          style={{
            background: `linear-gradient(135deg, ${brandColors.primary}05, ${brandColors.accent}05)`,
            borderWidth: "2px",
            borderColor: `${brandColors.tertiary}30`,
          }}
        >
          <h2
            className="text-4xl font-black mb-10 text-center"
            style={{ color: brandColors.primary }}
          >
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {keyBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl border-2 cursor-pointer"
                style={{ borderColor: `${brandColors.tertiary}30` }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xl"
                  style={{
                    background: `linear-gradient(135deg, ${brandColors.secondary}, ${brandColors.accent})`,
                  }}
                >
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ color: brandColors.primary }}
                >
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Equipment Note */}
        <div
          className="rounded-3xl p-8 text-white shadow-2xl"
          style={{
            background: `linear-gradient(135deg, ${brandColors.primary}, ${brandColors.secondary})`,
          }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl"
                style={{
                  background: `linear-gradient(135deg, ${brandColors.accent}, ${brandColors.tertiary})`,
                }}
              >
                <Flame className="w-8 h-8 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-black mb-3">
                Wadding Machine Configuration
              </h3>
              <p className="text-cyan-100 leading-relaxed text-lg">
                This configuration ensures uniform bonding across the web, while
                maintaining process safety, energy efficiency, and consistent
                fabric quality. The single-chamber oven with a 3-meter chamber
                length provides optimal heat distribution for superior results.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
