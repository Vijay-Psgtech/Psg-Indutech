import React from "react";
import {
  specifications,
  wipeTypes,
  keyFeatures,
  quickFacts,
  techSpecs,
} from "../../components/data/WipesManufacturingData";
import { Droplets, Package, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const brandColors = {
  primary: "#22227A",
  secondary: "#434C9A",
  tertiary: "#6D77B3",
  accent: "#06b6d4",
};

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
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function WipesManufacturing() {
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
                <Droplets className="w-12 h-12 text-white" strokeWidth={2.5} />
              </div>
            </motion.div>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1"
            >
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full border border-white/30 mb-3">
                <Package className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-bold uppercase tracking-wider">
                  Advanced Wet Wipe Production
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-2">
                Wipes Manufacturing
              </h1>
              <p className="text-lg text-cyan-100">
                Premium Disposable Cleaning Solutions
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <main className="relative max-w-7xl mx-auto px-6 py-12 space-y-12">
        {/*Hero Section*/}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-white/90 backdrop-blur-xl p-10 md:p-14 shadow-2xl border border-[#6D77B3]">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-300/20 to-purple-300/20 rounded-full blur-3xl" />
          <div className="relative">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-3 rounded-full mb-6">
              <Package className="w-5 h-5 text-indigo-900" />
              <span className="text-indigo-800 font-bold text-sm uppercase tracking-wider">
                Manufacturing Excellence
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-black mb-6"
              style={{ color: brandColors.primary }}
            >
              Advanced Wet Wipe Production
            </h2>

            <p className="text-xl text-slate-700 leading-relaxed mb-8 max-w-4xl">
              Wet wipes are disposable cleaning products made from wet-strength,
              soft-fibre, and high-permeability substrates. The wipes are
              folded, moisturized, and hygienically packaged to ensure
              convenience and safety during use.
            </p>

            {/*Quick Stats*/}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {quickFacts.map((stat, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  variants={cardVariants}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                  />
                  <motion.div
                    className="relative bg-white rounded-2xl p-6 shadow-lg border-2 border-slate-200 group-hover:border-indigo-300 transition-all"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div className="text-sm text-slate-600 font-semibold mb-2 uppercase tracking-wide">
                      {stat.label}
                    </div>
                    <div className="flex items-baseline gap-2">
                      <div
                        className={`text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                      >
                        {stat.value}
                      </div>
                      <div className="text-slate-500 font-semibold">
                        {stat.unit}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/*Wipe Types*/}
        <div className="space-y-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-4xl font-black mb-4"
              style={{ color: brandColors.primary }}
            >
              Product Range
            </h2>
            <p className="text-xl text-slate-600">
              Four specialized wipe types for diverse appliations
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {wipeTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <motion.div
                  key={type.id}
                  variants={cardVariants}
                  className="group relative overflow-hidden rounded-3xl bg-white shadow-xl border-2 border-slate-200 hover:border-[#6D77B3] transition-all duration-500"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 25px 40px -10px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${type.gradient} opacity-50`}
                  />

                  <div className="relative p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className={`bg-gradient-to-br ${type.color} p-5 rounded-2xl shadow-lg`}
                      >
                        <Icon
                          className="w-10 h-10 text-white"
                          strokeWidth={2}
                        />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      {type.name}
                    </h3>
                    <p className="text-slate-600 mb-6">{type.description}</p>

                    <div className="space-y-3">
                      {type.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${type.color}`}
                          />
                          <span className="text-slate-700 font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Key Features */}
        <motion.div
          className="rounded-[2.5rem] bg-gradient-to-br from-white to-purple-50 p-10 shadow-2xl border border-purple-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl font-black mb-10 text-center"
            style={{ color: brandColors.primary }}
          >
            Key Features
          </h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {keyFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  variants={cardVariants}
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#06b6d4] via-[#6D77B3] to-[#22227A] rounded-3xl shadow-xl mb-5"
                    whileHover={{ scale: 1.15, rotateZ: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <Icon className="w-10 h-10 text-white" strokeWidth={2} />
                  </motion.div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Technical Specifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Specifications Card */}
          <div className="rounded-3xl bg-white shadow-xl border border-slate-200 overflow-hidden">
            <div
              className="px-8 py-6"
              style={{
                background:
                  "linear-gradient(to bottom right, #434C9A, #06b6d4)",
              }}
            >
              <h3 className="text-2xl font-bold text-white">
                Technical Specifications
              </h3>
            </div>
            <div className="p-8 space-y-4">
              {techSpecs.map((spec, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 border-b border-slate-200 last:border-0 gap-2"
                >
                  <span className="text-slate-600 font-semibold">
                    {spec.label}
                  </span>
                  <span className="text-slate-900 font-bold bg-slate-50 px-4 py-2 rounded-xl">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Materials Card */}
          <div className="rounded-3xl bg-white shadow-xl border border-slate-200 overflow-hidden">
            <div
              className="px-8 py-6"
              style={{
                background:
                  "linear-gradient(to bottom right,  #06b6d4, #434C9A)",
              }}
            >
              <h3 className="text-2xl font-bold text-white">Raw Materials</h3>
            </div>
            <div className="p-8">
              <div className="space-y-4 mb-8">
                {specifications.materials.map((material, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-[pink-50] to-purple-50 p-6 border-2 border-slate-200 hover:border-indigo-400 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 transition-all duration-300" />
                    <div className="relative flex items-center gap-4">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#434C9A] to-[#06b6d4] shadow-lg" />
                      <span className="text-lg font-bold text-slate-900">
                        {material}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200">
                <h4 className="text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                  Supplied By
                </h4>
                <p className="text-lg font-bold text-slate-900">
                  {specifications.supplier}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Customization Section */}
        <div
          className="relative overflow-hidden rounded-[2.5rem] p-10 md:p-14 shadow-2xl"
          style={{
            background: "linear-gradient(to bottom right, #434C9A, #22227A)",
          }}
        >
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(45deg, transparent 45%, white 45%, white 55%, transparent 55%),
                               linear-gradient(-45deg, transparent 45%, white 45%, white 55%, transparent 55%)`,
                backgroundSize: "60px 60px",
              }}
            />
          </div>

          <div className="relative">
            <div className="flex items-start gap-6 mb-8">
              <div className="bg-gradient-to-br from-[#6D77B3] to-[#06b6d4] p-5 rounded-2xl shadow-2xl">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Custom Formulation Available
                </h3>
                <p className="text-xl text-purple-200 leading-relaxed">
                  Any active substance can be impregnated in the wet wipe to
                  meet your specific requirements and applications. Our flexible
                  manufacturing process allows for customized solutions tailored
                  to your needs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Manufacturing Process */}
        <motion.div
          className="rounded-3xl bg-white shadow-xl border border-slate-200 p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl font-black mb-8 text-center"
            style={{ color: brandColors.primary }}
          >
            Manufacturing Process
          </h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              {
                step: 1,
                title: "Material Preparation",
                desc: "High-quality substrates prepared to specifications",
              },
              {
                step: 2,
                title: "Folding & Moisturizing",
                desc: "Wipes folded and treated with active solution",
              },
              {
                step: 3,
                title: "Hygienic Packaging",
                desc: "Sealed in 10 or 20-piece packs for safety",
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                className="relative text-center group"
                variants={cardVariants}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-purple-400/0 group-hover:from-blue-400/5 group-hover:to-purple-400/5 rounded-3xl transition-all duration-300"
                  whileHover={{ opacity: 1 }}
                />
                <div className="relative">
                  <motion.div
                    className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#06b6d4] via-[#434C9A] to-[#6D77B3] rounded-full shadow-xl mb-6 text-white text-3xl font-black"
                    whileHover={{ scale: 1.1, rotateY: 10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    {process.step}
                  </motion.div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {process.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {process.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
