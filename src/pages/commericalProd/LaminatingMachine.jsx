import React, { useState } from "react";
import { CheckCircle, Layers, Zap, Settings, Package, TrendingUp, Info, ArrowRight } from "lucide-react";
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
import { motion } from "framer-motion";

export default function LaminatingMachine() {
  const [activeTab, setActiveTab] = useState("overview");

  const brandColors = {
    primary: '#22227A',
    secondary: '#434C9A',
    tertiary: '#6D77B3',
    accent: '#06b6d4'
  };

  const tabs = ["overview", "specifications", "applications"];

  const cardAnim = { 
    initial: { opacity: 0, y: 20 }, 
    animate: { opacity: 1, y: 0 } 
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <style>{`
        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        .stat-card {
          transition: all 0.3s ease;
        }
        .stat-card:hover {
          transform: scale(1.05);
        }
      `}</style>

      {/* Header */}
      <header className="relative overflow-hidden"
              style={{ 
                background: `linear-gradient(135deg, ${brandColors.primary} 0%, ${brandColors.secondary} 50%, ${brandColors.accent} 100%)` 
              }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
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

      {/* Tabs Navigation */}
      <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex gap-2 py-3 overflow-x-auto">
            {tabs.map((tab) => {
              const active = activeTab === tab;
              return (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  whileTap={{ scale: 0.97 }}
                  className={`relative px-6 py-3 rounded-xl font-bold text-sm transition-all whitespace-nowrap ${
                    active 
                      ? "text-white shadow-lg" 
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                  style={active ? {
                    background: `linear-gradient(135deg, ${brandColors.primary}, ${brandColors.accent})`
                  } : {}}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  {active && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-1 rounded-t-full"
                      style={{ backgroundColor: brandColors.accent }}
                    />
                  )}
                </motion.button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-10">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <motion.div 
            key="overview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            {/* Hero Card */}
            <motion.div 
              {...cardAnim} 
              transition={{ duration: 0.4 }}
              className="rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative"
              style={{ 
                background: `linear-gradient(135deg, ${brandColors.primary}, ${brandColors.secondary})` 
              }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl" />
              
              <div className="relative flex flex-col md:flex-row gap-8 md:items-start">
                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <Settings className="w-12 h-12 text-white" strokeWidth={2} />
                </div>
                
                <div className="flex-1 space-y-6">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                      Advanced Bonding Technology
                    </h2>
                    <p className="text-lg text-blue-100 leading-relaxed">
                      State-of-the-art bonding system using hot-melt adhesive under controlled
                      temperature conditions with drum melter or extruder technology. COE INDUTECH 
                      utilizes a compact Lacom coating and lamination machine with exceptional precision.
                    </p>
                  </div>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {keyMetrics.map((stat, idx) => {
                      const Icon = stat.icon;
                      return (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.05 }}
                          className="stat-card rounded-2xl p-5 bg-white/10 backdrop-blur-sm border border-white/20"
                        >
                          <Icon className="w-6 h-6 text-cyan-300 mb-2" />
                          <div className="text-3xl font-black text-white">{stat.value}</div>
                          <div className="text-cyan-200 text-sm mt-1 font-medium">{stat.label}</div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Equipment Features */}
              <motion.div 
                {...cardAnim} 
                transition={{ delay: 0.1 }}
                className="bg-white rounded-3xl shadow-xl p-8 border-2 hover-lift"
                style={{ borderColor: `${brandColors.tertiary}30` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl" style={{ backgroundColor: `${brandColors.accent}15` }}>
                    <Zap className="w-7 h-7" style={{ color: brandColors.accent }} />
                  </div>
                  <h3 className="text-2xl font-bold" style={{ color: brandColors.primary }}>
                    Equipment Features
                  </h3>
                </div>
                
                <ul className="space-y-4">
                  {equipFeatures.map((feature, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + i * 0.05 }}
                      className="flex items-start gap-3 group"
                    >
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 transition-colors"
                                   style={{ color: brandColors.accent }} />
                      <span className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Compatible Materials */}
              <motion.div 
                {...cardAnim} 
                transition={{ delay: 0.15 }}
                className="rounded-3xl shadow-xl p-8 border-2 hover-lift"
                style={{ 
                  background: `linear-gradient(135deg, ${brandColors.primary}05, ${brandColors.accent}05)`,
                  borderColor: `${brandColors.tertiary}30`
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl" style={{ backgroundColor: `${brandColors.secondary}15` }}>
                    <Package className="w-7 h-7" style={{ color: brandColors.secondary }} />
                  </div>
                  <h3 className="text-2xl font-bold" style={{ color: brandColors.primary }}>
                    Compatible Materials
                  </h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {materials.map((material, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.03 }}
                      className="rounded-xl p-4 text-center font-medium text-sm border-2 transition-all"
                      style={{ 
                        backgroundColor: 'white',
                        borderColor: `${brandColors.tertiary}40`,
                        color: brandColors.primary
                      }}
                    >
                      {material}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Key Advantages */}
            <motion.div 
              {...cardAnim} 
              transition={{ delay: 0.2 }}
              className="rounded-3xl p-8 border-2 shadow-lg hover-lift"
              style={{ 
                background: `linear-gradient(135deg, ${brandColors.accent}08, transparent)`,
                borderColor: `${brandColors.accent}30`
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl" style={{ backgroundColor: `${brandColors.accent}20` }}>
                  <TrendingUp className="w-7 h-7" style={{ color: brandColors.accent }} />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: brandColors.primary }}>
                  Key Advantages
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {advantages.map((adv, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 + idx * 0.05 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white/60 border border-white/60 hover:shadow-md transition-all group"
                  >
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5"
                                 style={{ color: brandColors.accent }} />
                    <span className="text-slate-700 font-medium leading-relaxed group-hover:text-slate-900 transition-colors">
                      {adv}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Order Information */}
            <motion.div 
              {...cardAnim} 
              transition={{ delay: 0.25 }}
              className="rounded-3xl p-8 border-2 shadow-lg"
              style={{ 
                backgroundColor: `${brandColors.tertiary}08`,
                borderColor: `${brandColors.tertiary}30`
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Info className="w-6 h-6" style={{ color: brandColors.secondary }} />
                <h3 className="text-2xl font-bold" style={{ color: brandColors.primary }}>
                  Order Information
                </h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {orderInfo.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-6 shadow-md hover-lift">
                    <div className="text-sm font-semibold text-slate-600 mb-2 uppercase tracking-wide">
                      {item.label}
                    </div>
                    <div className="text-3xl font-black" style={{ color: brandColors.primary }}>
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Specifications Tab */}
        {activeTab === "specifications" && (
          <motion.div
            key="specifications"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            {/* Main Specs Card */}
            <motion.div 
              {...cardAnim}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2"
              style={{ borderColor: `${brandColors.tertiary}30` }}
            >
              <div className="px-8 py-6"
                   style={{ 
                     background: `linear-gradient(135deg, ${brandColors.primary}, ${brandColors.accent})` 
                   }}>
                <h2 className="text-3xl font-black text-white mb-2">Technical Specifications</h2>
                <p className="text-cyan-100">LACOM MPBL2400 CV – 2015</p>
              </div>
              
              <div className="divide-y divide-slate-200">
                {specifications.map((spec, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="px-8 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 hover:bg-slate-50 transition-colors group"
                  >
                    <span className="font-bold text-slate-700 group-hover:text-slate-900 transition-colors">
                      {spec.label}
                    </span>
                    <span className="text-lg font-black px-5 py-2.5 rounded-xl"
                          style={{ 
                            backgroundColor: `${brandColors.accent}10`,
                            color: brandColors.primary
                          }}>
                      {spec.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Raw Materials */}
            <motion.div 
              {...cardAnim}
              transition={{ delay: 0.1 }}
              className="rounded-3xl p-8 border-2 shadow-lg"
              style={{ 
                background: `linear-gradient(135deg, ${brandColors.secondary}08, ${brandColors.accent}05)`,
                borderColor: `${brandColors.tertiary}30`
              }}
            >
              <h3 className="text-2xl font-bold mb-6" style={{ color: brandColors.primary }}>
                Raw Materials
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {rawMaterials.map((mat, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="rounded-2xl p-6 text-center shadow-md border-2"
                    style={{ 
                      backgroundColor: 'white',
                      borderColor: `${brandColors.accent}40`
                    }}
                  >
                    <span className="text-xl font-black" style={{ color: brandColors.primary }}>
                      {mat}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Production Note */}
            <motion.div 
              {...cardAnim}
              transition={{ delay: 0.15 }}
              className="rounded-3xl p-8 border-2 shadow-lg"
              style={{ 
                backgroundColor: `${brandColors.primary}05`,
                borderColor: `${brandColors.tertiary}30`
              }}
            >
              <h3 className="text-2xl font-bold mb-4" style={{ color: brandColors.primary }}>
                Production Note
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                Production capacity varies from 2000 to 15,000 meters per shift depending on the 
                fabric type being processed. This flexibility allows for optimized production across 
                various material specifications.
              </p>
            </motion.div>
          </motion.div>
        )}

        {/* Applications Tab */}
        {activeTab === "applications" && (
          <motion.div
            key="applications"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            {/* Key Applications */}
            <motion.div 
              {...cardAnim}
              className="bg-white rounded-3xl shadow-2xl p-8 border-2"
              style={{ borderColor: `${brandColors.tertiary}30` }}
            >
              <h2 className="text-3xl font-black mb-8" style={{ color: brandColors.primary }}>
                Key Applications
              </h2>
              
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
                      borderColor: `${brandColors.tertiary}40`
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl transition-transform group-hover:scale-110"
                           style={{ background: `linear-gradient(135deg, ${brandColors.primary}, ${brandColors.accent})` }}>
                        <CheckCircle className="w-6 h-6 text-white" strokeWidth={2.5} />
                      </div>
                      <span className="font-bold text-lg" style={{ color: brandColors.primary }}>
                        {app}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Product Applications */}
            <motion.div 
              {...cardAnim}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl shadow-2xl p-8 border-2"
              style={{ borderColor: `${brandColors.tertiary}30` }}
            >
              <h2 className="text-3xl font-black mb-8" style={{ color: brandColors.primary }}>
                Product Applications
              </h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {productApplications.map((product, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.03 }}
                    whileHover={{ y: -6, scale: 1.05 }}
                    className="group rounded-xl p-4 text-center border-2 transition-all"
                    style={{ 
                      backgroundColor: `${brandColors.accent}05`,
                      borderColor: `${brandColors.tertiary}30`
                    }}
                  >
                    <span className="font-semibold text-sm group-hover:text-base transition-all"
                          style={{ color: brandColors.primary }}>
                      {product}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Market Segment */}
            <motion.div 
              {...cardAnim}
              transition={{ delay: 0.15 }}
              className="rounded-3xl p-8 border-2 shadow-lg"
              style={{ 
                background: `linear-gradient(135deg, ${brandColors.secondary}08, ${brandColors.accent}08)`,
                borderColor: `${brandColors.accent}40`
              }}
            >
              <div className="flex items-start gap-4">
                <ArrowRight className="w-8 h-8 flex-shrink-0" style={{ color: brandColors.accent }} />
                <div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: brandColors.primary }}>
                    Domestic & Industrial Use
                  </h3>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    Products manufactured using this machine cater to both domestic and industrial 
                    applications, providing versatility for various market segments. From home textiles 
                    to industrial-grade materials, our laminating technology delivers consistent quality 
                    across all applications.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </main>

      {/* Bottom Spacer */}
      <div className="h-20"></div>
    </div>
  );
}