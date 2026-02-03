import React, { useState, useEffect } from "react";
import {
  Printer,
  Zap,
  Maximize,
  Layers,
  Sun,
  Palette,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  specifications,
  inkColors,
  materials,
  features,
  applications,
  keySpecs,
  techSpecs,
  benefits,
} from "../../components/data/UvPrintingData";

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

const scaleVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function UVPrinting() {
  const [activeFeature, setActiveFeature] = useState(0);

  const brandColors = {
    primary: "#22227A",
    secondary: "#434C9A",
    tertiary: "#6D77B3",
    accent: "#06b6d4",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
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
                <Printer className="w-16 h-16 text-white" strokeWidth={1.5} />
              </div>
            </motion.div>
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 mb-3">
                <Sun className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-bold uppercase tracking-wider">
                  Advanced Technology
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-3">
                <span className="bg-gradient-to-r font-black text-white bg-clip-text text-transparent">
                  UV Flatbed
                </span>
              </h1>
              <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Digital Printing
              </h2>
              <p className="text-base sm:text-lg text-cyan-100 max-w-2xl">
                Instant-curing technology for sharp images, superior adhesion,
                and exceptional durability
              </p>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16 space-y-10 sm:space-y-20">
        {/* Hero Technology Section */}
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-white p-6 sm:p-10 md:p-12 lg:p-16 border border-[#e0e7ff] shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#434C9A]/10 to-[#6D77B3]/10 rounded-full blur-3xl" />

          <div className="relative">
            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 sm:mb-10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Sun className="w-12 h-12 text-[#434C9A] animate-spin-slow" />
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#22227A]">
                UV Printing Technology
              </h2>
            </motion.div>

            <motion.p
              className="text-base sm:text-xl text-slate-700 leading-relaxed mb-8 sm:mb-12 max-w-4xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              UV printing uses ultraviolet light to instantly dry or cure ink as
              it is printed. As the printer deposits ink onto the substrate,
              specially designed UV lamps follow immediately behind, curing the
              ink instantaneously. This process enables high-quality printing
              with sharp images, excellent color accuracy, and strong ink
              adhesion on a wide range of substrates.
            </motion.p>

            {/* Key Specs Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {keySpecs.map((spec, index) => {
                const Icon = spec.icon;
                return (
                  <motion.div
                    key={index}
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#eef2ff] to-white border border-[#e0e7ff] hover:border-[#434C9A] transition-all duration-300 p-6"
                    variants={cardVariants}
                    whileHover={{
                      y: -5,
                      boxShadow: "0 20px 25px -5px rgba(67, 76, 154, 0.1)",
                    }}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${spec.color} opacity-0 group-hover:opacity-5 transition-opacity`}
                    />
                    <div className="relative">
                      <div
                        className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${spec.color} mb-4`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-sm text-slate-600 mb-2 uppercase tracking-wide font-semibold">
                        {spec.label}
                      </div>
                      <div
                        className={`text-3xl font-bold bg-gradient-to-r ${spec.color} bg-clip-text text-transparent`}
                      >
                        {spec.value}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>

        {/* CMYK + Varnish Section */}
        <div className="space-y-6 sm:space-y-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#22227A] mb-2 sm:mb-4">
              CMYK + Varnish Hybrid Inks
            </h2>
            <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto">
              Accurate color combination delivering high-resolution prints with
              superior adhesion
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {inkColors.map((ink, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white border-2 border-[#e0e7ff] hover:border-[#434C9A] transition-all duration-300"
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${ink.color} opacity-5 group-hover:opacity-15 transition-opacity`}
                />
                <div className="relative p-6 text-center">
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${ink.color} shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  />
                  <h3 className="text-lg font-bold text-[#22227A] mb-2">
                    {ink.name}
                  </h3>
                  <code className="text-xs text-slate-500 font-mono">
                    {ink.hex}
                  </code>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Key Features */}
        <div className="space-y-6 sm:space-y-10">
          <motion.h2
            className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#22227A] text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Special Features
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`group relative overflow-hidden rounded-3xl bg-white border-2 cursor-pointer transition-all duration-500 ${
                    activeFeature === index
                      ? "border-[#434C9A] shadow-xl shadow-[#434C9A]/20"
                      : "border-[#e0e7ff] hover:border-[#6D77B3]"
                  }`}
                  variants={cardVariants}
                  whileHover={{ y: -8 }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}
                  />

                  <div className="relative p-8">
                    <motion.div
                      className={`inline-flex p-3 sm:p-5 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg mb-4 sm:mb-6`}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 10,
                      }}
                    >
                      <Icon
                        className="w-10 h-10 text-white"
                        strokeWidth={1.5}
                      />
                    </motion.div>
                    <h3 className="text-lg sm:text-2xl font-bold text-[#22227A] mb-2 sm:mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Printable Materials */}
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-white p-6 sm:p-10 md:p-14 border border-[#e0e7ff] shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#434C9A]/10 to-[#6D77B3]/10 rounded-full blur-3xl" />

          <div className="relative">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#22227A] mb-2 sm:mb-4">
              Printable Materials
            </h2>
            <p className="text-base sm:text-xl text-slate-600 mb-6 sm:mb-10">
              Direct printing on any smooth, flat surface
            </p>

            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {materials.map((material, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#eef2ff] to-white border border-[#e0e7ff] hover:border-[#434C9A] p-4 text-center transition-all duration-300"
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, y: -4 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#434C9A]/0 to-[#6D77B3]/0 group-hover:from-[#434C9A]/5 group-hover:to-[#6D77B3]/5 transition-all" />
                  <div className="relative">
                    <CheckCircle2 className="w-5 h-5 text-[#434C9A] mx-auto mb-2" />
                    <span className="text-[#22227A] font-semibold text-sm">
                      {material}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Applications Grid */}
        <div className="space-y-6 sm:space-y-10">
          <motion.h2
            className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#22227A] text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Applications
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {applications.map((app, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white border border-[#e0e7ff] hover:border-[#434C9A] transition-all duration-300"
                variants={cardVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(67, 76, 154, 0.1)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#434C9A]/0 to-[#6D77B3]/0 group-hover:from-[#434C9A]/5 group-hover:to-[#6D77B3]/5 transition-all" />

                <div className="relative p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#434C9A] to-[#6D77B3]" />
                    <h3 className="text-lg font-bold text-[#22227A] uppercase tracking-wider">
                      {app.category}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {app.items.map((item, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-2 text-slate-600 hover:text-[#434C9A] transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#434C9A]" />
                        <span className="text-sm break-words">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Technical Specs Table */}
        <motion.div
          className="rounded-3xl bg-white border border-[#e0e7ff] overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="px-4 sm:px-8 py-4 sm:py-6"
            style={{
              background: `linear-gradient(135deg, ${brandColors.primary}, ${brandColors.accent})`,
            }}
          >
            <h2 className="text-3xl font-bold text-white">
              Technical Specifications
            </h2>
          </div>

          <div className="p-4 sm:p-8">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {techSpecs.map((spec, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-between p-3 sm:p-5 rounded-xl bg-gradient-to-br from-[#eef2ff] to-white border border-[#e0e7ff] hover:border-[#434C9A] transition-colors"
                  variants={cardVariants}
                  whileHover={{ x: 4 }}
                >
                  <span className="text-slate-700 font-semibold text-sm sm:text-base">
                    {spec.label}
                  </span>
                  <span className="text-[#22227A] font-bold text-base sm:text-lg">
                    {spec.value}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

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

        {/* CTA Section */}
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-white p-6 sm:p-10 md:p-14 border border-[#e0e7ff] shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#434C9A]/10 to-[#6D77B3]/10 rounded-full blur-3xl" />

          <div className="relative">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#22227A] mb-4 sm:mb-6 text-center">
              Ready to Elevate Your Printing?
            </h2>
            <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto text-center mb-6 sm:mb-10">
              Discover how UV flatbed printing can transform your business with
              superior quality, speed, and versatility.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.button
                className="group relative w-full sm:w-auto max-w-xs sm:max-w-none px-6 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-[#22227A] via-[#434C9A] to-[#6D77B3] text-white font-bold text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                <div className="relative flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Request Quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.button>

              <motion.button
                className="group w-full sm:w-auto max-w-xs sm:max-w-none px-6 sm:px-10 py-3 sm:py-4 bg-white text-[#22227A] font-bold text-base sm:text-lg rounded-xl border-2 border-[#434C9A] hover:bg-[#eef2ff] transition-colors shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Contact Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
