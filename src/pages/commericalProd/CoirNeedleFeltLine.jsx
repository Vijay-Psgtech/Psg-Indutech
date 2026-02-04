import React, { useState } from "react";
import {
  Leaf,
  Sprout,
  TreePine,
  Droplet,
  Mountain,
  Wind,
  Target,
  CheckCircle,
  Layers,
  Factory,
  Zap,
} from "lucide-react";

import {
  quickStats,
  sections,
  benefits,
  processSteps,
  applications,
  specGrids,
  specifications,
} from "../../components/data/CoirNeedleData";
import { brandColors, grad } from "../../components/common/brand";

export default function CoirNeedleFeltLine() {
  const [activeSection, setActiveSection] = useState("overview");
  const [selectedApp, setSelectedApp] = useState(null);

  return (
    <div className="min-h-screen bg-white">
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
      {/* Top Banner */}
      <div className="relative overflow-hidden" 
           style={{ background: `linear-gradient(135deg, ${brandColors.primary}, ${brandColors.secondary}, ${brandColors.accent})` }}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-16">
          <div className="flex items-center gap-6 mb-8">
            <div className="p-5 bg-white/20 backdrop-blur-sm rounded-2xl border-2 border-white/40">
              <Leaf className="w-12 h-12 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full border border-white/30 mb-3">
                <Sprout className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-bold uppercase tracking-wider">Natural Fiber Technology</span>
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-2">
                Coir Needle Felt Line
              </h1>
              <p className="text-base sm:text-xl text-cyan-100">
                100% Natural Geotextile Solutions for Erosion Control
              </p>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
            {[
              { label: 'Working Width', value: '2000mm' },
              { label: 'Capacity', value: '1 ton/shift' },
              { label: 'GSM', value: '800-1200' },
              { label: 'Thickness', value: '10-15mm' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl p-2 sm:p-4">
                <div className="text-cyan-300 text-sm font-semibold mb-1">{stat.label}</div>
                <div className="text-2xl font-black text-white">{stat.value}</div>
              </div>
            ))}
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
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl smooth-all text-left ${
                      activeSection === section.id
                        ? 'text-white shadow-lg'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                    style={activeSection === section.id ? {
                      background: `${grad.subtle}`
                    } : {}}
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
                        ? 'text-white shadow-lg'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                    style={activeSection === section.id ? {
                      background: `${grad.subtle}`
                    } : {}}
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
            {activeSection === 'overview' && (
              <div className="space-y-6 sm:space-y-10 animate-slide-right">
                {/* Hero Card */}
                <div className="rounded-3xl p-4 sm:p-10 border-2"
                     style={{ 
                       background: `linear-gradient(135deg, ${brandColors.primary}05, ${brandColors.accent}05)`,
                       borderColor: `${brandColors.tertiary}40`
                     }}>
                  <h2 className="text-2xl sm:text-4xl font-black mb-2 sm:mb-4" style={{ color: brandColors.primary }}>
                    Natural Erosion Control Solution
                  </h2>
                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4 sm:mb-8 break-words">
                    Coir is a natural material widely used for erosion control. When manufactured into 
                    nonwoven geotextiles and placed on vulnerable areas, coir geotextiles help retain 
                    water, prevent the topsoil from drying out, and promote the growth of new vegetation.
                  </p>
                  
                  <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full border-2 w-full sm:w-auto"
                       style={{ 
                         backgroundColor: `${brandColors.accent}10`,
                         borderColor: brandColors.accent 
                       }}>
                    <Leaf className="w-5 h-5" style={{ color: brandColors.accent }} />
                    <span className="font-bold" style={{ color: brandColors.primary }}>
                      100% Natural Process - No Bonding Agents
                    </span>
                  </div>
                </div>

                {/* Benefits Grid - Asymmetric */}
                <div className="space-y-4 sm:space-y-6">
                  <h3 className="text-xl sm:text-3xl font-black" style={{ color: brandColors.primary }}>
                    Environmental Benefits
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {benefits.map((benefit, idx) => {
                      const Icon = benefit.icon;
                      const colors = [brandColors.primary, brandColors.secondary, brandColors.tertiary, brandColors.accent];
                      const color = colors[idx % colors.length];
                      
                      return (
                        <div
                          key={idx}
                          className="group p-4 sm:p-8 rounded-2xl border-2 smooth-all hover-scale hover-glow cursor-pointer"
                          style={{ borderColor: `${color}30` }}
                        >
                          <div className="flex items-start gap-3 sm:gap-5">
                            <div className="p-2 sm:p-4 rounded-xl smooth-all"
                                 style={{ backgroundColor: `${color}15` }}>
                              <Icon className="w-8 h-8" style={{ color }} />
                            </div>
                            <div>
                              <h4 className="text-base sm:text-xl font-bold mb-1 sm:mb-2" style={{ color: brandColors.primary }}>
                                {benefit.title}
                              </h4>
                              <p className="text-slate-600 leading-relaxed break-words">{benefit.desc}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Supplier Info */}
                <div className="p-4 sm:p-8 rounded-2xl border-2 bg-slate-50"
                     style={{ borderColor: `${brandColors.tertiary}40` }}>
                  <div className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-3">
                    <Factory className="w-6 h-6" style={{ color: brandColors.accent }} />
                    <span className="font-bold text-sm uppercase tracking-wider text-slate-600">
                      Equipment Supplier
                    </span>
                  </div>
                  <p className="text-lg sm:text-2xl font-black" style={{ color: brandColors.primary }}>
                    {specifications.supplier}
                  </p>
                </div>
              </div>
            )}

            {/* Process Section */}
            {activeSection === 'process' && (
              <div className="space-y-6 sm:space-y-10 animate-slide-right">
                <div>
                  <h2 className="text-2xl sm:text-4xl font-black mb-2 sm:mb-4" style={{ color: brandColors.primary }}>
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
                          <div className="absolute left-6 top-14 w-0.5 h-full -ml-px"
                               style={{ backgroundColor: `${brandColors.tertiary}40` }} />
                        )}
                        
                        <div className="relative flex flex-col sm:flex-row items-start gap-3 sm:gap-6">
                          <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center smooth-all"
                               style={{ 
                                 background: `${grad.subtle}`,
                                 boxShadow: `0 4px 12px ${brandColors.accent}40`
                               }}>
                            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                          </div>
                          
                          <div className="flex-1 pt-1">
                            <div className="bg-white rounded-2xl p-4 sm:p-6 border-2 smooth-all hover:shadow-lg"
                                 style={{ borderColor: `${brandColors.tertiary}40` }}>
                              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 sm:mb-3 gap-1 sm:gap-0">
                                <h3 className="text-base sm:text-xl font-bold" style={{ color: brandColors.primary }}>
                                  {step.name}
                                </h3>
                                <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-bold text-white"
                                      style={{ backgroundColor: brandColors.accent }}>
                                  STEP {step.id}
                                </span>
                              </div>
                              <p className="text-slate-600 leading-relaxed break-words">{step.desc}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Additional Equipment */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="p-4 sm:p-8 rounded-2xl border-2"
                       style={{ 
                         background: `linear-gradient(135deg, ${brandColors.primary}05, transparent)`,
                         borderColor: `${brandColors.tertiary}40`
                       }}>
                    <Droplet className="w-7 h-7 sm:w-10 sm:h-10 mb-2 sm:mb-4" style={{ color: brandColors.accent }} />
                    <h4 className="text-base sm:text-xl font-bold mb-1 sm:mb-2" style={{ color: brandColors.primary }}>
                      Spraying Unit
                    </h4>
                    <p className="text-slate-600">
                      For applying various adhesives to create composite boards and garden articles
                    </p>
                  </div>
                  
                  <div className="p-4 sm:p-8 rounded-2xl border-2"
                       style={{ 
                         background: `linear-gradient(135deg, ${brandColors.accent}05, transparent)`,
                         borderColor: `${brandColors.tertiary}40`
                       }}>
                    <Wind className="w-7 h-7 sm:w-10 sm:h-10 mb-2 sm:mb-4" style={{ color: brandColors.secondary }} />
                    <h4 className="text-base sm:text-xl font-bold mb-1 sm:mb-2" style={{ color: brandColors.primary }}>
                      Dryer Unit
                    </h4>
                    <p className="text-slate-600">
                      Ensures proper curing and finishing of the final product
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Applications Section */}
            {activeSection === 'applications' && (
              <div className="space-y-10 animate-slide-right">
                <div>
                  <h2 className="text-2xl sm:text-4xl font-black mb-2 sm:mb-4" style={{ color: brandColors.primary }}>
                    Applications
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600">
                    Versatile solutions for erosion control, agriculture, and environmental protection
                  </p>
                </div>

                {/* Interactive Application Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {applications.map((app, idx) => {
                    const Icon = app.icon;
                    const isSelected = selectedApp === idx;
                    
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedApp(isSelected ? null : idx)}
                        className="group cursor-pointer"
                      >
                        <div className={`relative overflow-hidden rounded-2xl p-4 sm:p-6 border-2 smooth-all ${
                          isSelected ? 'shadow-2xl' : 'hover:shadow-lg'
                        }`}
                             style={{ 
                               borderColor: isSelected ? brandColors.accent : `${brandColors.tertiary}40`,
                               background: isSelected ? `linear-gradient(135deg, ${brandColors.primary}05, ${brandColors.accent}05)` : 'white'
                             }}>
                          <div className="flex items-start justify-between mb-2 sm:mb-4">
                            <div className="p-2 sm:p-3 rounded-xl smooth-all"
                                 style={{ backgroundColor: `${brandColors.accent}15` }}>
                              <Icon className="w-5 h-5 sm:w-7 sm:h-7" style={{ color: brandColors.accent }} />
                            </div>
                            {isSelected && (
                              <CheckCircle className="w-6 h-6" style={{ color: brandColors.accent }} />
                            )}
                          </div>
                          
                          <h3 className="text-base sm:text-xl font-bold mb-1 sm:mb-2" style={{ color: brandColors.primary }}>
                            {app.name}
                          </h3>
                          <p className="text-slate-600 text-xs sm:text-sm mb-2 sm:mb-4 break-words">{app.desc}</p>
                          
                          {isSelected && (
                            <div className="pt-2 sm:pt-4 border-t space-y-1 sm:space-y-2"
                                 style={{ borderColor: `${brandColors.tertiary}30` }}>
                              {app.benefits.map((benefit, bidx) => (
                                <div key={bidx} className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full"
                                       style={{ backgroundColor: brandColors.accent }} />
                                  <span className="text-xs sm:text-sm text-slate-700 break-words">{benefit}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Specifications Section */}
            {activeSection === 'specifications' && (
              <div className="space-y-10 animate-slide-right">
                <div>
                  <h2 className="text-4xl font-black mb-4" style={{ color: brandColors.primary }}>
                    Technical Specifications
                  </h2>
                  <p className="text-lg text-slate-600">
                    Complete machine specifications and capabilities
                  </p>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {[
                    { label: 'Working Width', value: specifications.workingWidth, icon: Layers },
                    { label: 'Production Capacity', value: specifications.capacity, icon: Factory },
                    { label: 'GSM Range', value: specifications.gsm, icon: Target },
                    { label: 'Thickness', value: specifications.thickness, icon: Mountain },
                    { label: 'Needle Boards', value: specifications.needleBoards, icon: Zap },
                    { label: 'Minimum Order', value: specifications.moq, icon: CheckCircle }
                  ].map((spec, idx) => {
                    const Icon = spec.icon;
                    
                    return (
                      <div key={idx} 
                          className="p-4 sm:p-6 rounded-2xl border-2 smooth-all hover:shadow-lg"
                           style={{ 
                             borderColor: `${brandColors.tertiary}40`,
                             background: `linear-gradient(135deg, ${brandColors.primary}03, ${brandColors.accent}03)`
                           }}>
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-4" style={{ color: brandColors.accent }} />
                        <div className="text-xs sm:text-sm font-bold text-slate-600 mb-1 sm:mb-2 uppercase tracking-wider">
                          {spec.label}
                        </div>
                        <div className="text-lg sm:text-3xl font-black" style={{ color: brandColors.primary }}>
                          {spec.value}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Raw Materials */}
                <div className="rounded-2xl p-4 sm:p-8 border-2"
                     style={{ borderColor: `${brandColors.tertiary}40` }}>
                  <h3 className="text-lg sm:text-2xl font-black mb-3 sm:mb-6" style={{ color: brandColors.primary }}>
                    Natural Raw Materials
                  </h3>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
                    {specifications.materials.map((material, idx) => (
                      <div key={idx} 
                          className="p-2 sm:p-6 rounded-xl text-center smooth-all hover:shadow-lg hover-scale"
                           style={{ 
                             background: `linear-gradient(135deg, ${brandColors.primary}08, ${brandColors.accent}08)`,
                             border: `2px solid ${brandColors.tertiary}30`
                           }}>
                        <div className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: `${brandColors.accent}20` }}>
                          <Leaf className="w-4 h-4 sm:w-6 sm:h-6" style={{ color: brandColors.accent }} />
                        </div>
                        <div className="text-xs sm:text-base font-bold break-words" style={{ color: brandColors.primary }}>
                          {material}
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

      {/* Bottom CTA */}
      <div className="mt-10 sm:mt-20 py-8 sm:py-16"
           style={{ background: `linear-gradient(135deg, ${brandColors.primary}, ${brandColors.secondary}, ${brandColors.accent})` }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <Leaf className="w-10 h-10 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 text-white" />
          <h3 className="text-xl sm:text-3xl md:text-4xl font-black text-white mb-2 sm:mb-4">
            Sustainable Geotextile Solutions
          </h3>
          <p className="text-base sm:text-xl text-cyan-100 mb-4 sm:mb-8">
            100% natural, environmentally friendly erosion control technology
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-4 sm:px-6 py-2 sm:py-3 w-full sm:w-auto">
              <div className="text-cyan-300 text-xs sm:text-sm font-semibold mb-1">Min. Order</div>
              <div className="text-lg sm:text-2xl font-black text-white">{specifications.moq}</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-4 sm:px-6 py-2 sm:py-3 w-full sm:w-auto">
              <div className="text-cyan-300 text-xs sm:text-sm font-semibold mb-1">Capacity</div>
              <div className="text-lg sm:text-2xl font-black text-white">{specifications.capacity}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
