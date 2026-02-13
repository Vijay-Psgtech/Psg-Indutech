import React, { useState } from "react";
import {
  sections,
  specifications,
  wipeTypes,
  keyFeatures,
  quickStats,
  techSpecs,
  processSteps,
} from "../../components/data/WipesManufacturingData";
import { Droplets, Mail, Package, Sparkles, User } from "lucide-react";
import { motion } from "framer-motion";
import { brandColors, grad } from "../../components/common/brand";

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
  const [activeSection, setActiveSection] = useState("overview");
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
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-2">
                Wipes Manufacturing
              </h1>
              <p className="text-lg text-cyan-100">
                Chungda Machinery Ltd | Premium Disposable Cleaning Solutions
              </p>
            </motion.div>
          </div>
        </div>
      </div>
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
                    onClick={() => {
                      setActiveSection(section.id);
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }}
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
            {/*Overview Section */}
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
                    WIPES MANUFACTURING PLANT
                  </h2>
                  <div className="space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
                    <p>
                      The wet wipe manufacturing machine used for the production
                      of various types of wet wipes. The raw materials used
                      include viscose, polyester, and their blends, with fabric
                      GSM ranging from 45 to 80. The wipe sizes produced vary
                      between 150 × 150 mm and 220 × 220 mm.
                    </p>

                    <p>
                      <span className="font-semibold text-slate-800">
                        Wet wipes
                      </span>{" "}
                      are disposable cleaning products made from wet-strength,
                      soft-fibre, and high-permeability substrates. The wipes
                      are folded, moisturized, and hygienically packaged to
                      ensure convenience and safety during use.
                    </p>

                    <p>
                      The manufacturing plant produces the following types of
                      wet wipes, typically packed in 10 or 20 pieces per pack.
                      Any active substance can be impregnated in the wetwipe.
                    </p>

                    {/* Spec List */}
                    <ul className="list-disc list-inside pl-2 sm:pl-4 text-slate-700 space-y-1 sm:space-y-2">
                      <li>
                        <strong>Multi-surface wipes</strong>
                      </li>
                      <li>
                        <strong>Hand and Face cleaning wipes</strong>
                      </li>
                      <li>
                        <strong>Baby wipes</strong>
                      </li>
                      <li>
                        <strong>Leather wipes</strong>
                      </li>
                    </ul>
                  </div>
                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mt-4">
                    {quickStats.map((stat, idx) => (
                      <div
                        key={idx}
                        className="bg-white/10 backdrop-blur-sm border border-black/30 rounded-xl p-2 sm:p-4"
                      >
                        <div className="text-black text-sm font-semibold mb-1">
                          {stat.label}
                        </div>
                        <div
                          className="text-2xl font-black"
                          style={{ color: brandColors.secondary }}
                        >
                          {stat.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Process Section */}
            {activeSection === "process" && (
              <div className="space-y-6 sm:space-y-10 animate-slide-right">
                <div>
                  <h2
                    className="text-2xl sm:text-4xl font-black mb-2 sm:mb-4"
                    style={{ color: brandColors.primary }}
                  >
                    Manufacturing Process
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600">
                    Mechanical interlocking without additional bonding materials
                  </p>
                </div>

                {/* Timeline Style Process */}
                <div className="relative">
                  {processSteps.map((step, idx) => {
                    const Icon = step.icon;
                    const isLast = idx === processSteps.length - 1;

                    return (
                      <div key={step.id} className="relative pb-10 last:pb-0">
                        {!isLast && (
                          <div
                            className="absolute left-6 top-14 w-0.5 h-full -ml-px"
                            style={{
                              backgroundColor: `${brandColors.tertiary}40`,
                            }}
                          />
                        )}

                        <div className="relative flex flex-col sm:flex-row items-start gap-3 sm:gap-6">
                          <div
                            className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center smooth-all"
                            style={{
                              background: `${grad.subtle}`,
                              boxShadow: `0 4px 12px ${brandColors.accent}40`,
                            }}
                          >
                            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                          </div>

                          <div className="flex-1 pt-1">
                            <div
                              className="bg-white rounded-2xl p-4 sm:p-6 border-2 smooth-all hover:shadow-lg"
                              style={{
                                borderColor: `${brandColors.tertiary}40`,
                              }}
                            >
                              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 sm:mb-3 gap-1 sm:gap-0">
                                <h3
                                  className="text-base sm:text-xl font-bold"
                                  style={{ color: brandColors.primary }}
                                >
                                  {step.name}
                                </h3>
                                <span
                                  className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-bold text-white"
                                  style={{
                                    backgroundColor: brandColors.accent,
                                  }}
                                >
                                  STEP {step.id}
                                </span>
                              </div>
                              <p className="text-slate-600 leading-relaxed break-words">
                                {step.desc}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
      {/* Bottom CTA */}
      <div className="mt-10 sm:mt-20 py-8 sm:py-16 border-t border-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <p className="font-medium mb-2">For any enquiries, please contact:</p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-4 sm:px-6 py-2 sm:py-3 w-full sm:w-auto">
              <p className="text-base font-bold text-[var(--color-indigo)] flex items-center justify-center gap-2">
                <User className="w-4 h-4 text-[var(--color-purple)]" /> Mr. V.
                Muthu Kumar — QC Manager
              </p>
              <div className="flex flex-col items-center justify-center mt-3 space-y-2 text-gray-700">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[var(--color-purple)]" />
                  <a
                    href="mailto:info.int@psgtech.ac.in"
                    className="text-[var(--color-indigo)] font-medium hover:text-[var(--color-purple)] transition-all"
                  >
                    info.int@psgtech.ac.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
