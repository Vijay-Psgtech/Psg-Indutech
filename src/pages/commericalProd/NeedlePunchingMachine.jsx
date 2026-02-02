import React, { useState } from "react";
import {
  Factory,
  Filter,
  Layers,
  Zap,
  Settings,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Target,
  UserSearch,
} from "lucide-react";
import { motion } from 'framer-motion';
import {
  specifications,
  processSteps,
  applications,
  materials,
  features,
} from "../../components/data/NeedlePunchingData";

export default function NeedlePunchingMachine() {
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [hoveredProcess, setHoveredProcess] = useState(null);


  const brandColors = {
    primary: "#22227A",
    secondary: "#434C9A",
    tertiary: "#6D77B3",
    accent: "#06b6d4",
  };

  // helper rgba for subtle hover backgrounds
  const accentRgba = (alpha = 0.08) => `rgba(6,182,212,${alpha})`;

  // framer-motion variants for grids and cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.36, ease: "easeOut" } },
    hover: { y: -6, scale: 1.02, transition: { duration: 0.2 } },
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <style>{`
        .brand-gradient {
          background: linear-gradient(135deg, ${brandColors.primary} 0%, ${brandColors.secondary} 50%, ${brandColors.accent} 100%);
        }
        
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        .smooth-transition {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
      `}</style>

      {/* Hero Section */}
      <div className="relative overflow-hidden brand-gradient">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/30">
                <Factory className="w-5 h-5 text-white" />
                <span className="text-white font-semibold text-sm uppercase tracking-wider">
                  Nonwoven Manufacturing
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight">
                Needle Punching
                <br />
                <span className="text-cyan-300">Machine</span>
              </h1>

              <p className="text-xl text-blue-100 leading-relaxed max-w-xl">
                Advanced mechanical fiber entanglement technology for producing
                high-quality nonwoven fabrics
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl px-6 py-4">
                  <div className="text-cyan-300 font-semibold text-sm mb-1">
                    Capacity
                  </div>
                  <div className="text-3xl font-black text-white">40 kg/hr</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl px-6 py-4">
                  <div className="text-cyan-300 font-semibold text-sm mb-1">
                    Width
                  </div>
                  <div className="text-3xl font-black text-white">1.5m</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl px-6 py-4">
                  <div className="text-cyan-300 font-semibold text-sm mb-1">
                    GSM
                  </div>
                  <div className="text-3xl font-black text-white">100-400</div>
                </div>
              </div>
            </div>
            {/* Right Content - Feature Cards (motion-enabled for tap + hover responsiveness) */}
            <motion.div className="grid grid-cols-2 gap-4 sm:gap-6">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div key={i} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} whileHover="hover" whileTap={{ scale: 0.98 }} className="bg-white/10 backdrop-blur-md border border-white/30 rounded-3xl p-6 sm:p-8">
                    <div className="mb-4">
                      <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-300" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{f.title}</h3>
                    <p className="text-blue-100 text-sm">{f.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 space-y-24">
        {/* Process Overview */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-5xl font-black" style={{ color: brandColors.primary }}>
              Manufacturing Process
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Needle punching mechanically entangles fibres through repeated penetration of barbed needles, creating a cohesive nonwoven structure
            </p>
          </div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const active = hoveredProcess === step.id;
              return (
                <motion.div
                  key={step.id}
                  variants={cardVariants}
                  whileHover={{ y: -6, boxShadow: '0 18px 30px rgba(34,34,122,0.06)' }}
                  whileTap={{ scale: 0.995 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setHoveredProcess(prev => prev === step.id ? null : step.id)}
                  onMouseEnter={() => setHoveredProcess(step.id)}
                  onMouseLeave={() => setHoveredProcess(null)}
                  onFocus={() => setHoveredProcess(step.id)}
                  onBlur={() => setHoveredProcess(null)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setHoveredProcess(prev => prev === step.id ? null : step.id); } }}
                  tabIndex={0}
                  role="button"
                  aria-pressed={active}
                  className={`group relative bg-white rounded-3xl p-6 sm:p-8 border-2 smooth-transition`}
                  style={{ borderColor: active ? brandColors.accent : '#e2e8f0' }}
                >
                  <div className="absolute top-6 right-6 text-4xl sm:text-6xl font-black opacity-5" style={{ color: brandColors.primary }}>{step.id}</div>

                  <div className="relative space-y-4">
                    <div className="inline-flex p-3 sm:p-4 rounded-2xl smooth-transition" style={{ backgroundColor: active ? brandColors.accent : `${brandColors.tertiary}20` }}>
                      <Icon className={`w-6 sm:w-8 h-6 sm:h-8 smooth-transition`} style={{ color: active ? 'white' : brandColors.primary }} />
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: brandColors.primary }}>{step.name}</h3>
                      <p className="text-slate-600 font-medium mb-2">{step.desc}</p>
                      <p className="text-sm text-slate-500">{step.detail}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* Technical Specifications */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-5xl font-black" style={{ color: brandColors.primary }}>
              Technical Specifications
            </h2>
            <p className="text-xl text-slate-600">
              Precision engineering for filter and medical applications
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Specs Card */}
            <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
              <div className="brand-gradient p-8">
                <h3 className="text-3xl font-black text-white mb-2">Machine Specifications</h3>
                <p className="text-blue-100">Filter & Medical Grade Production</p>
              </div>
              
              <div className="p-8 space-y-4">
                {[
                  { label: 'Production Capacity', value: specifications.capacity, icon: TrendingUp },
                  { label: 'Fiber Denier Range', value: specifications.denier, icon: Layers },
                  { label: 'Handling Capability', value: specifications.denierRange, icon: Settings },
                  { label: 'GSM Range', value: specifications.gsm, icon: Target },
                  { label: 'Finished Width', value: specifications.width, icon: Zap },
                  { label: 'Minimum Order', value: specifications.moq, icon: CheckCircle2 }
                ].map((spec, index) => {
                  const Icon = spec.icon;
                  return (
                    <motion.div key={index} variants={cardVariants} whileHover={{ scale: 1.01, backgroundColor: accentRgba(0.08), borderColor: brandColors.accent }} whileTap={{ scale: 0.995 }} transition={{ duration: 0.18 }} tabIndex={0} role="button" className="flex items-center justify-between p-4 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-lg smooth-transition group" style={{ borderColor: 'transparent' }}>
                      <div className="flex items-center gap-4">
                        <Icon className="w-6 h-6" style={{ color: brandColors.accent }} />
                        <span className="font-bold text-slate-700">{spec.label}</span>
                      </div>
                      <span className="text-xl sm:text-2xl font-black" style={{ color: brandColors.primary }}>{spec.value}</span>
                    </motion.div>
                  );
                })} 
              </div>
            </div>

            {/* Applications Card */}
            <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
              <div className="p-8 border-b border-slate-200">
                <h3 className="text-2xl font-black mb-2" style={{ color: brandColors.primary }}>
                  Applications
                </h3>
                <p className="text-slate-600">Industrial & Medical Use</p>
              </div>
              
              <div className="p-8 space-y-6">
                {applications.map((app, index) => {
                  const Icon = app.icon;
                  return (
                    <motion.div key={index} variants={cardVariants} whileHover={{ y: -6 }} whileTap={{ scale: 0.985 }} transition={{ duration: 0.18 }} className="group p-4 sm:p-6 rounded-2xl smooth-transition cursor-pointer" style={{ backgroundColor: `${app.color}08` }}>
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl smooth-transition group-hover:scale-110" style={{ backgroundColor: app.color }}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold mb-1" style={{ color: brandColors.primary }}>{app.name}</h4>
                          <motion.div whileHover={{ x: 6 }} transition={{ duration: 0.18 }}>
                            <ArrowRight className="w-5 h-5" style={{ color: app.color }} />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Raw Materials */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-5xl font-black" style={{ color: brandColors.primary }}>
              Raw Materials
            </h2>
            <p className="text-xl text-slate-600">
              Compatible with a wide range of fiber types
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {materials.map((material, index) => (
              <div
                key={index}
                onClick={() => setSelectedMaterial(selectedMaterial === material.name ? null : material.name)}
                className={`relative bg-white rounded-3xl p-8 border-2 smooth-transition hover-lift cursor-pointer group ${
                  selectedMaterial === material.name ? 'ring-4 ring-opacity-20' : ''
                }`}
                style={{
                  borderColor: selectedMaterial === material.name ? material.color : '#e2e8f0',
                  ringColor: material.color
                }}
              >
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-2xl smooth-transition group-hover:scale-110"
                       style={{ backgroundColor: `${material.color}15` }}>
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full smooth-transition group-hover:scale-110"
                           style={{ backgroundColor: material.color }} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: brandColors.primary }}>
                    {material.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final Processing */}
        <section className="bg-white rounded-3xl shadow-xl border border-slate-200 p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full"
                   style={{ backgroundColor: `${brandColors.accent}15` }}>
                <Sparkles className="w-5 h-5" style={{ color: brandColors.accent }} />
                <span className="font-bold text-sm uppercase tracking-wider"
                      style={{ color: brandColors.primary }}>
                  Final Processing
                </span>
              </div>
              
              <h2 className="text-4xl font-black" style={{ color: brandColors.primary }}>
                Calendaring Machine
              </h2>
              
              <p className="text-xl text-slate-600 leading-relaxed">
                Equipped with advanced calendaring system to provide smooth finish to finished goods through controlled heat and pressure application
              </p>
              
              <div className="space-y-4 pt-4">
                {[
                  'Smooth surface finishing',
                  'Controlled heat application',
                  'Precise pressure control',
                  'Consistent quality output'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0" style={{ color: brandColors.accent }} />
                    <span className="text-lg text-slate-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 sm:p-8 border border-slate-200 hover-lift smooth-transition">
                  <div className="text-xs sm:text-sm font-bold text-slate-600 mb-1 sm:mb-2 uppercase tracking-wider">
                    Winder System
                  </div>
                  <div className="text-2xl sm:text-3xl font-black mb-1 sm:mb-2" style={{ color: brandColors.primary }}>
                    4-Needle
                  </div>
                  <p className="text-slate-600 text-sm">Integrated loom with winder</p>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-purple-50 rounded-2xl p-6 sm:p-8 border border-slate-200 hover-lift smooth-transition">
                  <div className="text-xs sm:text-sm font-bold text-slate-600 mb-1 sm:mb-2 uppercase tracking-wider">
                    Materials
                  </div>
                  <div className="text-2xl sm:text-3xl font-black mb-1 sm:mb-2" style={{ color: brandColors.primary }}>
                    5+
                  </div>
                  <p className="text-slate-600 text-sm">Fiber types supported</p>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="bg-gradient-to-br from-slate-50 to-cyan-50 rounded-2xl p-6 sm:p-8 border border-slate-200 hover-lift smooth-transition">
                  <div className="text-xs sm:text-sm font-bold text-slate-600 mb-1 sm:mb-2 uppercase tracking-wider">
                    Flat System
                  </div>
                  <div className="text-2xl sm:text-3xl font-black mb-1 sm:mb-2" style={{ color: brandColors.primary }}>
                    Carding
                  </div>
                  <p className="text-slate-600 text-sm">Advanced alignment</p>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-orange-50 rounded-2xl p-6 sm:p-8 border border-slate-200 hover-lift smooth-transition">
                  <div className="text-xs sm:text-sm font-bold text-slate-600 mb-1 sm:mb-2 uppercase tracking-wider">
                    Quality
                  </div>
                  <div className="text-2xl sm:text-3xl font-black mb-1 sm:mb-2" style={{ color: brandColors.primary }}>
                    Premium
                  </div>
                  <p className="text-slate-600 text-sm">Medical grade output</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden rounded-3xl brand-gradient p-12 lg:p-16">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(45deg, transparent 45%, white 45%, white 55%, transparent 55%),
                               linear-gradient(-45deg, transparent 45%, white 45%, white 55%, transparent 55%)`,
              backgroundSize: '60px 60px'
            }} />
          </div>
          
          <div className="relative max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
              Contact us to learn more about our needle punching technology and how it can benefit your production needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl px-8 py-4">
                <div className="text-cyan-300 font-semibold text-sm mb-1">Minimum Order</div>
                <div className="text-3xl font-black text-white">{specifications.moq}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl px-8 py-4">
                <div className="text-cyan-300 font-semibold text-sm mb-1">Production Rate</div>
                <div className="text-3xl font-black text-white">{specifications.capacity}</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
