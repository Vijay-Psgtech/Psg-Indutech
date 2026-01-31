import React, { useState } from "react";
import { Flame, Box, ArrowRight, Sparkles } from "lucide-react";
import {
  specifications,
  processFeatures,
  applications,
  processSequence,
  keyBenefits,
} from "../../components/data/ThermalWaddingData.js";

export default function ThermalBonding() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl -top-48 -left-48 animate-pulse"
          style={{ backgroundColor: "#434C9A" }}
        />
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse"
          style={{ backgroundColor: "#6D77B3", animationDelay: "1s" }}
        />
      </div>

      {/* Header */}
      <header className="relative backdrop-blur-sm bg-white/70 border-b border-indigo-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="relative">
              <div
                className="absolute inset-0 blur-xl opacity-50"
                style={{
                  background:
                    "linear-gradient(to bottom right, #434C9A, #22227A)",
                }}
              />
              <div
                className="relative p-5 rounded-2xl shadow-xl"
                style={{
                  background:
                    "linear-gradient(to bottom right, #434C9A, #22227A)",
                }}
              >
                <Flame className="w-12 h-12 text-white" strokeWidth={2} />
              </div>
            </div>
            <div className="flex-1">
              <h1
                className="text-5xl font-bold bg-clip-text text-transparent mb-2"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #22227A, #434C9A, #6D77B3)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Thermal Bonding
              </h1>
              <p className="text-slate-600 text-lg">
                Heat & Melt Bonding Technology
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative max-w-6xl mx-auto px-6 py-12 space-y-12">
        {/* Hero Section */}
        <div
          className="relative overflow-hidden rounded-3xl bg-white p-8 md:p-12 shadow-2xl"
          style={{ borderColor: "#eef2ff", borderWidth: "1px" }}
        >
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl"
            style={{ backgroundColor: "rgba(67, 76, 154, 0.1)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl"
            style={{ backgroundColor: "rgba(34, 34, 122, 0.1)" }}
          />

          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-1.5 h-12 rounded-full"
                style={{
                  background: "linear-gradient(to bottom, #434C9A, #6D77B3)",
                }}
              />
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-md"
                style={{ borderColor: "#eef2ff", borderWidth: "1px" }}
              >
                <div
                  className="text-sm font-semibold mb-2 uppercase tracking-wide"
                  style={{ color: "#434C9A" }}
                >
                  Temperature Range
                </div>
                <div
                  className="text-3xl font-bold bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #434C9A, #22227A)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  120-200°C
                </div>
              </div>
              <div
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-md"
                style={{ borderColor: "#eef2ff", borderWidth: "1px" }}
              >
                <div
                  className="text-sm font-semibold mb-2 uppercase tracking-wide"
                  style={{ color: "#6D77B3" }}
                >
                  Chamber Length
                </div>
                <div
                  className="text-3xl font-bold bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #6D77B3, #434C9A)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  3 meters
                </div>
              </div>
              <div
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-md"
                style={{ borderColor: "#eef2ff", borderWidth: "1px" }}
              >
                <div
                  className="text-sm font-semibold mb-2 uppercase tracking-wide"
                  style={{ color: "#22227A" }}
                >
                  Capacity
                </div>
                <div
                  className="text-3xl font-bold bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #22227A, #6D77B3)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  40 kg/hr
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Features Grid */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">
            Process Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {processFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg border-2 transition-all duration-300 ${
                    hoveredCard === index
                      ? "shadow-2xl scale-105"
                      : "hover:shadow-lg"
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    borderColor: hoveredCard === index ? "#434C9A" : "#e2e8f0",
                  }}
                >
                  {hoveredCard === index && (
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        background:
                          "linear-gradient(to bottom right, #434C9A, #6D77B3)",
                      }}
                    />
                  )}

                  <div className="relative">
                    <div
                      className="inline-flex p-4 rounded-2xl shadow-lg mb-4"
                      style={{
                        background:
                          "linear-gradient(to bottom right, #434C9A, #6D77B3)",
                      }}
                    >
                      <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="rounded-3xl bg-white shadow-xl border border-slate-200 overflow-hidden">
          <div
            className="px-8 py-6"
            style={{
              background:
                "linear-gradient(to right, #22227A, #434C9A, #6D77B3)",
            }}
          >
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Box className="w-8 h-8" />
              Technical Specifications
            </h2>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-5">
                <div
                  className="flex items-center justify-between p-4 rounded-xl border"
                  style={{ backgroundColor: "#f8fafc", borderColor: "#eef2ff" }}
                >
                  <span className="font-semibold" style={{ color: "#374151" }}>
                    Production Capacity
                  </span>
                  <span
                    className="font-bold text-lg"
                    style={{ color: "#22227A" }}
                  >
                    {specifications.capacity}
                  </span>
                </div>
                <div
                  className="flex items-center justify-between p-4 rounded-xl border"
                  style={{ backgroundColor: "#f8fafc", borderColor: "#eef2ff" }}
                >
                  <span className="font-semibold" style={{ color: "#374151" }}>
                    Fiber Denier
                  </span>
                  <span
                    className="font-bold text-lg"
                    style={{ color: "#434C9A" }}
                  >
                    {specifications.denier}
                  </span>
                </div>
                <div
                  className="flex items-center justify-between p-4 rounded-xl border"
                  style={{ backgroundColor: "#f8fafc", borderColor: "#eef2ff" }}
                >
                  <span className="font-semibold" style={{ color: "#374151" }}>
                    GSM Range
                  </span>
                  <span
                    className="font-bold text-lg"
                    style={{ color: "#6D77B3" }}
                  >
                    {specifications.gsm}
                  </span>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-5">
                <div
                  className="flex items-center justify-between p-4 rounded-xl border"
                  style={{ backgroundColor: "#f8fafc", borderColor: "#eef2ff" }}
                >
                  <span className="font-semibold" style={{ color: "#374151" }}>
                    Temperature Range
                  </span>
                  <span
                    className="font-bold text-lg"
                    style={{ color: "#22227A" }}
                  >
                    {specifications.temperature}
                  </span>
                </div>
                <div
                  className="flex items-center justify-between p-4 rounded-xl border"
                  style={{ backgroundColor: "#f8fafc", borderColor: "#eef2ff" }}
                >
                  <span className="font-semibold" style={{ color: "#374151" }}>
                    Chamber Length
                  </span>
                  <span
                    className="font-bold text-lg"
                    style={{ color: "#434C9A" }}
                  >
                    {specifications.chamberLength}
                  </span>
                </div>
                <div
                  className="flex items-center justify-between p-4 rounded-xl border"
                  style={{ backgroundColor: "#f8fafc", borderColor: "#eef2ff" }}
                >
                  <span className="font-semibold" style={{ color: "#374151" }}>
                    Minimum Order
                  </span>
                  <span
                    className="font-bold text-lg"
                    style={{ color: "#6D77B3" }}
                  >
                    {specifications.moq}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Raw Materials */}
        <div
          className="rounded-3xl p-8 shadow-lg"
          style={{
            backgroundColor: "#eef2ff",
            borderColor: "#e0e7ff",
            borderWidth: "1px",
          }}
        >
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Raw Materials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {specifications.materials.map((material, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md border-2 transition-all duration-300 hover:scale-105"
                style={{ borderColor: "transparent" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "#434C9A")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "transparent")
                }
              >
                <div className="absolute inset-0 transition-all duration-300" />
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
              </div>
            ))}
          </div>
        </div>

        {/* Process Flow */}
        <div className="rounded-3xl bg-white shadow-xl border border-slate-200 p-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">
            Process Sequence
          </h2>

          <div className="space-y-6">
            {processSequence.map((item, index) => (
              <div key={index} className="flex items-start gap-6 group">
                <div className="relative flex-shrink-0">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
                    style={{
                      background:
                        "linear-gradient(to bottom right, #434C9A, #6D77B3)",
                    }}
                  >
                    <span className="text-white font-bold text-lg">
                      {item.step}
                    </span>
                  </div>
                  {index < 4 && (
                    <div
                      className="absolute top-14 left-1/2 -translate-x-1/2 w-0.5 h-12"
                      style={{
                        background:
                          "linear-gradient(to bottom, #434C9A, #6D77B3)",
                      }}
                    />
                  )}
                </div>
                <div className="flex-1 pt-2">
                  <h3
                    className="text-xl font-bold mb-2 transition-colors"
                    style={{ color: "#22227A" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#434C9A")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#22227A")
                    }
                  >
                    {item.title}
                  </h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Applications */}
        <div
          className="rounded-3xl p-8 shadow-lg"
          style={{
            backgroundColor: "#eef2ff",
            borderColor: "#e0e7ff",
            borderWidth: "1px",
          }}
        >
          <h2 className="text-3xl font-bold text-slate-800 mb-8">
            Applications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {applications.map((app, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <div className="absolute inset-0 transition-all duration-300" />
                <div className="relative flex items-center gap-3">
                  <ArrowRight
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    style={{ color: "#434C9A" }}
                  />
                  <span className="font-semibold" style={{ color: "#22227A" }}>
                    {app}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Benefits */}
        <div
          className="rounded-3xl p-8 shadow-lg"
          style={{
            backgroundColor: "#eef2ff",
            borderColor: "#e0e7ff",
            borderWidth: "1px",
          }}
        >
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {keyBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md"
                style={{ borderColor: "#e0e7ff", borderWidth: "1px" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg"
                  style={{
                    background:
                      "linear-gradient(to bottom right, #434C9A, #6D77B3)",
                  }}
                >
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-slate-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Equipment Note */}
        <div
          className="rounded-3xl p-8 text-white shadow-2xl"
          style={{ background: "linear-gradient(to right, #22227A, #434C9A)" }}
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                style={{
                  background:
                    "linear-gradient(to bottom right, #434C9A, #6D77B3)",
                }}
              >
                <Flame className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">
                Wadding Machine Configuration
              </h3>
              <p className="text-slate-300 leading-relaxed">
                This configuration ensures uniform bonding across the web, while
                maintaining process safety, energy efficiency, and consistent
                fabric quality. The single-chamber oven with a 3-meter chamber
                length provides optimal heat distribution for superior results.
              </p>
            </div>
          </div>
        </div>
      </main>
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }
        .animate-pulse {
          animation: pulse 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
