import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Layers,
  Settings,
  Package,
  TrendingUp,
  Zap,
  ArrowRight,
  Factory,
  Cpu,
  Gauge,
} from "lucide-react";
import {
  keyMetrics,
  applications,
  productApplications,
  materials,
  advantages,
  specifications,
  equipFeatures,
  orderInfo,
  rawMaterials,
} from "../../components/data/LaminatingMachineData.js";
import { brandColors, grad } from "../../components/common/brand.js";

export default function LaminatingMachine() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <header
        className="relative overflow-hidden"
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-white/20 blur-xl" />
              <div className="relative p-5 rounded-2xl shadow-2xl bg-white/20 backdrop-blur-sm border-2 border-white/40">
                <Layers className="w-14 h-14 text-white" strokeWidth={2.5} />
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1"
            >
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 mb-3">
                <Package className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-bold uppercase tracking-wider">
                  Industrial Equipment
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-2 leading-tight">
                Laminating & Coating Machine
              </h1>
              <p className="text-lg text-cyan-100">
                LACOM MPBL2400 CV – 2015 Model | Professional Grade
              </p>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16">
        {/* Technology Overview */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Main Info Card */}
            <div
              className="rounded-3xl p-8 md:p-10 text-white shadow-2xl"
              style={{
                background: `linear-gradient(135deg, ${brandColors.primary}, ${brandColors.secondary})`,
              }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
                    Advanced Bonding Technology
                  </h2>
                  <div className="h-1 w-20 bg-yellow-400 rounded-full"></div>
                </div>
              </div>

              <p className="text-lg text-blue-100 leading-relaxed mb-6">
                State-of-the-art bonding system using hot-melt adhesive under
                controlled temperature conditions with drum melter or extruder
                technology. COE INDUTECH utilizes a compact Lacom coating and
                lamination machine with exceptional precision.
              </p>

              <div className="flex items-center gap-2 text-cyan-200">
                <TrendingUp className="w-5 h-5" />
                <span className="font-semibold">
                  Production: 2000-15,000 meters per shift
                </span>
              </div>
            </div>

            {/* Advantages Grid */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3
                className="text-2xl font-bold mb-6 flex items-center gap-3"
                style={{ color: brandColors.primary }}
              >
                <Zap className="w-7 h-7 text-yellow-500" />
                Key Advantages
              </h3>

              <div className="space-y-3">
                {advantages.map((adv, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-blue-50 transition-colors duration-300"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{adv}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Applications Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <h2
              className="text-3xl md:text-4xl font-extrabold mb-3"
              style={{ color: brandColors.primary }}
            >
              Applications & Products
            </h2>
          </div>

          {/* Key Applications */}
          <div
            className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 mb-8"
            style={{ borderColor: `${brandColors.tertiary}30` }}
          >
            <h3
              className="text-xl font-bold mb-6"
              style={{ color: brandColors.primary }}
            >
              Key Applications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {applications.map((app, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="group rounded-2xl p-6 border-2 transition-all shadow-md"
                  style={{
                    background: `linear-gradient(135deg, ${brandColors.primary}05, ${brandColors.accent}05)`,
                    borderColor: `${brandColors.tertiary}40`,
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="p-3 rounded-xl transition-transform group-hover:scale-110"
                      style={{ background: `${grad.subtle}` }}
                    >
                      <CheckCircle
                        className="w-6 h-6 text-white"
                        strokeWidth={2.5}
                      />
                    </div>
                    <span
                      className="font-bold text-lg"
                      style={{ color: brandColors.primary }}
                    >
                      {app}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Product Applications */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 md:p-10 border border-gray-200">
            <h3
              className="text-xl font-bold mb-6"
              style={{ color: brandColors.primary }}
            >
              Product Range
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {productApplications.map((product, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.02 }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="bg-white rounded-xl p-4 text-center border border-gray-200 hover:border-[#0052ab] hover:shadow-md transition-all duration-300"
                >
                  <span className="text-sm font-semibold text-gray-700">
                    {product}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Specifications Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <h2
              className="text-3xl md:text-4xl font-extrabold mb-3"
              style={{ color: brandColors.primary }}
            >
              Technical Specifications
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Specifications Card */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <Cpu className="w-7 h-7 text-[#0052ab]" />
                <h3
                  className="text-xl font-bold"
                  style={{ color: brandColors.primary }}
                >
                  Machine Specifications
                </h3>
              </div>
              <div className="space-y-3">
                {specifications.map((spec, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-gray-600 font-medium">
                      {spec.label}:
                    </span>
                    <span
                      className="font-bold"
                      style={{ color: brandColors.primary }}
                    >
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Equipment Features */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <Factory className="w-7 h-7 text-[#0052ab]" />
                <h3
                  className="text-xl font-bold"
                  style={{ color: brandColors.primary }}
                >
                  Equipment Features
                </h3>
              </div>
              <div className="space-y-3">
                {equipFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Gauge className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Materials Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-8 md:p-10 text-white shadow-2xl"
          style={{
            background: `linear-gradient(135deg, ${brandColors.primary}, ${brandColors.secondary})`,
          }}
        >
          <h2 className="text-3xl font-extrabold mb-8 text-center">
            Materials & Raw Materials
          </h2>

          {/* Materials Grid */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-cyan-100">
              Compatible Materials
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {materials.map((mat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all"
                >
                  <span className="font-semibold">{mat}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Raw Materials */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-cyan-100">
              Raw Materials
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {rawMaterials.map((raw, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all"
                >
                  <span className="font-bold text-lg">{raw}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Order Information */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100"
        >
          <div className="flex items-start gap-4 mb-6">
            <div
              className="p-3 rounded-xl"
              style={{ backgroundColor: `${brandColors.secondary}` }}
            >
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h2
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{ color: brandColors.primary }}
              >
                Order Information
              </h2>
              <div className="space-y-4">
                {orderInfo.map((info, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-blue-50 rounded-xl border-l-4 border-[#0052ab]"
                  >
                    <p className="text-gray-700 leading-relaxed">
                      <span
                        className="font-semibold "
                        style={{ color: brandColors.primary }}
                      >
                        {info.label}:
                      </span>{" "}
                      {info.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Bottom Spacer */}
      <div className="h-16"></div>
    </div>
  );
}
