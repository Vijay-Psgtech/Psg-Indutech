import React, { useState } from "react";
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
  sections,
} from "../../components/data/LaminatingMachineData.js";
import { brandColors, grad } from "../../components/common/brand.js";

export default function LaminatingMachine() {
  const [activeSection, setActiveSection] = useState("overview");
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <style>{`
        .smooth-all { transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
        .hover-scale:hover { transform: scale(1.02); }
        .hover-glow:hover { box-shadow: 0 0 30px rgba(6, 182, 212, 0.3); }
        
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        .animate-slide-left { animation: slideInLeft 0.6s ease-out; }
        .animate-slide-right { animation: slideInRight 0.6s ease-out; }
      `}</style>
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
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-2 leading-tight">
                Laminating & Coating Machine
              </h1>
              <p className="text-lg text-cyan-100">
                LACOM MPBL-2400 CV – 2015 Model | Professional Grade
              </p>
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
                    onClick={() => setActiveSection(section.id)}
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
                    Hot Melt Coating & Lamination Machine 
                  </h2>

                  <div className="space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
                    <p>
                      The process involves bonding two substrates using hot-melt adhesive, applied under controlled temperature conditions with the help of a drum melter or extruder. <span className="font-semibold text-slate-800">COE INDUTECH</span>{" "} is equipped with a compact model coating and lamination machine supplied by <span className="font-semibold text-slate-800">Lacom, Germany,</span> with a working width of 2000 mm.
                    </p>

                    <p>
                      The machine is equipped with an IR heater, drum melters (20 kg and 200 kg capacities), and an extruder, enabling precise control of adhesive application. This system is capable of processing a wide range of materials, including woven fabrics, knitted fabrics, polar fleece, terry fabrics, nonwoven materials, mesh fabrics, foams, and similar substrates.
                    </p>

                    <p>
                      The machine is fitted with positive and negative blades, allowing coating thickness control up to 20 g/m². A multi-blade system is available for full-surface coating applications. Products manufactured using this machine cater to both domestic and industrial applications
                    </p>

                  </div>
                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mt-4">
                    {keyMetrics.map((stat, idx) => (
                      <div
                        key={idx}
                        className="bg-white/10 backdrop-blur-sm border border-black/30 rounded-xl p-2 sm:p-4"
                        
                      >
                        <div className="text-black text-sm font-semibold mb-1">
                          {stat.label}
                        </div>
                        <div className="text-2xl font-black" style={{ color: brandColors.secondary}}>
                          {stat.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Bottom Spacer */}
      <div className="h-16"></div>
    </div>
  );
}
