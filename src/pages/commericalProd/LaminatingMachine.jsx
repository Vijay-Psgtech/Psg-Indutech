import React, { useState } from "react";
import {
  CheckCircle,
  Layers,
  Zap,
  Settings,
  Package,
  TrendingUp,
} from "lucide-react";
import {
  applications,
  productApplications,
  materials,
  advantages,
  specifications,
} from "../../components/data/LaminatingMachineData.js";

export default function LaminatingMachine() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-br from-[#6D77B3] to-indigo-700 p-3 rounded-xl shadow-lg">
              <Layers className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">
                Laminating & Coating Machine
              </h1>
              <p className="text-slate-600 mt-1">
                LACOM MPBL2400 CV – 2015 Model
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex gap-1 overflow-x-auto">
            {["overview", "specifications", "applications"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-all whitespace-nowrap ${
                  activeTab === tab
                    ? "border-[#6D77B3] text-[#22227A]"
                    : "border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-8 animate-fade-in">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-[#22227A] to-[#6D77B3] rounded-2xl p-8 md:p-12 text-white shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <Settings className="w-12 h-12 flex-shrink-0" />
                <div>
                  <h2 className="text-3xl font-bold mb-3">
                    Advanced Bonding Technology
                  </h2>
                  <p className="text-blue-100 text-lg leading-relaxed">
                    The process involves bonding two substrates using hot-melt
                    adhesive, applied under controlled temperature conditions
                    with the help of a drum melter or extruder. COE INDUTECH is
                    equipped with a compact model coating and lamination machine
                    supplied by Lacom, Germany, with a working width of 2000 mm.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl font-bold">2000mm</div>
                  <div className="text-blue-100 text-sm mt-1">
                    Working Width
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl font-bold">40 m/min</div>
                  <div className="text-blue-100 text-sm mt-1">Max Speed</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl font-bold">20 g/m²</div>
                  <div className="text-blue-100 text-sm mt-1">Max Coating</div>
                </div>
              </div>
            </div>

            {/* Equipment Features */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-amber-600" />
                  <h3 className="text-xl font-semibold text-slate-900">
                    Equipment Features
                  </h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      IR heater for precise temperature control
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      Drum melters (20 kg and 200 kg capacities)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      Extruder for precise adhesive application
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      Positive and negative blade system
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      Multi-blade system for full-surface coating
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <Package className="w-6 h-6 text-purple-600" />
                  <h3 className="text-xl font-semibold text-slate-900">
                    Compatible Materials
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {materials.map((material, index) => (
                    <div
                      key={index}
                      className="bg-slate-50 rounded-lg p-3 text-sm text-slate-700 border border-slate-200"
                    >
                      {material}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Advantages */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-green-700" />
                <h3 className="text-xl font-semibold text-slate-900">
                  Key Advantages
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">
                      {advantage}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Information */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-amber-900 mb-3">
                Order Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <div className="text-sm text-slate-600 mb-1">
                    Minimum Order Quantity
                  </div>
                  <div className="text-2xl font-bold text-slate-900">
                    2000 meters
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-sm text-slate-600 mb-1">
                    Sample Quantity
                  </div>
                  <div className="text-2xl font-bold text-slate-900">
                    100 meters
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Specifications Tab */}
        {activeTab === "specifications" && (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200">
              <div className="bg-gradient-to-r from-[#434C9A] to-[#6D77B3] px-6 py-4">
                <h2 className="text-2xl font-bold text-white">
                  Technical Specifications
                </h2>
                <p className="text-blue-100 mt-1">LACOM MPBL2400 CV – 2015</p>
              </div>
              <div className="divide-y divide-slate-200">
                {specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="px-6 py-4 hover:bg-slate-50 transition-colors flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
                  >
                    <span className="font-medium text-slate-700">
                      {spec.label}
                    </span>
                    <span className="text-slate-900 font-semibold bg-slate-100 px-4 py-2 rounded-lg">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Raw Materials
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {["PUR", "TPU Film", "PE Film"].map((material, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200 text-center"
                  >
                    <span className="text-lg font-semibold text-blue-900">
                      {material}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-300">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Production Note
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Production capacity varies from 2000 to 15,000 meters per shift
                depending on the fabric type being processed.
              </p>
            </div>
          </div>
        )}

        {/* Applications Tab */}
        {activeTab === "applications" && (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Key Applications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {applications.map((app, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-[blue-50] to-indigo-50 rounded-lg p-5 border border-blue-200 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-600 rounded-lg p-2">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-medium text-slate-900">{app}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Product Applications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {productApplications.map((product, index) => (
                  <div
                    key={index}
                    className="bg-slate-50 rounded-lg p-4 border border-slate-200 text-center hover:border-blue-400 hover:bg-blue-50 transition-all"
                  >
                    <span className="text-slate-800 font-medium">
                      {product}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Domestic & Industrial Use
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Products manufactured using this machine cater to both domestic
                and industrial applications, providing versatility for various
                market segments.
              </p>
            </div>
          </div>
        )}
      </main>
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
