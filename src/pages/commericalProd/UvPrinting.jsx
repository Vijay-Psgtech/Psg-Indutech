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
  quickStats,
  techSpecs,
  benefits,
  sections,
} from "../../components/data/UvPrintingData";
import { brandColors, grad } from "../../components/common/brand";

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
  const [activeSection, setActiveSection] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      <style>
        {`
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
        .animate-slide-right { animation: slideInRight 0.6s ease-out; }`}
      </style>
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
                <Printer className="w-14 h-14 text-white" strokeWidth={2.5} />
              </div>
            </motion.div>
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-2 leading-tight">
                UV Printing
              </h1>
              <p className="text-lg text-cyan-100">
                UV Flatbed Digital Printing | Vibrant, Durable, Versatile |
                Custom Signage, Decor & More
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
                    UV PRINTING
                  </h2>

                  <div className="space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
                    <p>
                      The{" "}
                      <span className="font-semibold text-slate-800">
                        UV printing
                      </span>{" "}
                      machine uses a digital printing technology that uses{" "}
                      <span className="font-semibold text-slate-800">
                        ultraviolet (UV)
                      </span>
                      light to instantly dry or cure the ink as it is printed.
                      As the printer deposits ink onto the surface of the
                      material (referred to as the substrate), specially
                      designed{" "}
                      <span className="font-semibold text-slate-800">
                        UV lamps
                      </span>{" "}
                      follow immediately behind, curing the ink instantaneously.
                      This process enables{" "}
                      <span className="font-semibold text-slate-800">
                        high-quality printing with sharp images, excellent color
                        accuracy, and strong ink adhesion
                      </span>{" "}
                      on a wide range of substrates.
                    </p>

                    <p>
                      The machine supports a maximum print size of 8 feet × 10
                      feet and can handle materials with a thickness of up to
                      100 mm. It is capable of printing on any smooth, flat
                      surface, including glass, aluminium sheets, foam boards,
                      plastic boards, wood, tiles, acrylic sheets, and similar
                      materials.
                    </p>

                    <p>
                      An accurate combination of Cyan, Magenta, Yellow, Black,
                      and Varnish hybrid UV inks delivers high-resolution prints
                      with superior adhesion and durability on the substrate.
                    </p>
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
          </main>
        </div>
      </div>
    </div>
  );
}
