import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  brandColors,
  grad,
  gradText,
  borderColor,
} from "../../components/common/brand.js";
import {
  Droplet,
  Flame,
  Shield,
  Layers,
  Thermometer,
  Gauge,
  Settings,
  ChevronDown,
  ChevronRight,
  CheckCircle,
  Info,
  Zap,
} from "lucide-react";

/* ── Data ──────────────────────────────────────────────────────── */
const coatingTechnologies = [
  { name: "Dip Coating", icon: Droplet },
  { name: "Knife-on-Roll Coating", icon: Settings },
  { name: "Knife-on-Air Coating", icon: Layers },
  { name: "Foam Coating", icon: Droplet },
  { name: "Hand Spray Adhesive System", icon: Zap },
  { name: "Hot Calendar Roll", icon: Thermometer },
];

const availableFinishes = [
  { name: "Water Repellent", icon: Droplet, color: brandColors.accent },
  { name: "Fire Retardant", icon: Flame, color: "#ef4444" },
  { name: "Antimicrobial", icon: Shield, color: "#10b981" },
  { name: "Slip Resistance", icon: Shield, color: "#8b5cf6" },
  { name: "PU and PV Coatings", icon: Layers, color: brandColors.secondary },
  { name: "Stiffening Agents", icon: Settings, color: brandColors.tertiary },
  { name: "Abrasion Resistance", icon: Shield, color: "#f59e0b" },
];

const coatingSpecs = [
  { label: "Working Width", value: "0.6 meters" },
  { label: "Oven Temperature", value: "Up to 200°C" },
  { label: "Fabric Types", value: "Woven, Knitted, Nonwoven" },
  { label: "Purpose", value: "R&D, Product Development, Trials" },
];

const thermalSpecs = [
  { label: "Fiber Fineness Range", value: "1.5 – 6.0 denier" },
  { label: "Fiber Cut Lengths", value: "38 – 61 mm" },
  { label: "Minimum Raw Material", value: "5 kg" },
  { label: "GSM Range", value: "40 – 200 gsm" },
  { label: "Maximum Web Width", value: "0.6 m" },
  { label: "Maximum Thickness", value: "30 – 40 mm" },
];

const thermalFiberTypes = [
  "Polypropylene (PP)",
  "Bi-component Fibers",
  "Polyester (PET)",
  "Nylon",
  "Cotton",
  "Jute",
  "Flax",
  "Recycled Shoddy Fibers",
];

/* ══════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════════════════════════ */
export default function PilotScaleMachines() {
  const [activeTab, setActiveTab] = useState("coating"); // "coating" | "thermal"

  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(180deg,#f8fafc, #eef2ff)" }}
    >
      {/* Modern Hero */}
      <section className="relative overflow-hidden py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <h1
                className="text-4xl md:text-5xl font-extrabold"
                style={{ color: brandColors.primary }}
              >
                Pilot Scale Machines — Modern Lab
              </h1>

              <div className="flex gap-3">
                <button
                  onClick={() => setActiveTab("coating")}
                  className={`px-4 py-2 rounded-full font-bold transition-colors ${activeTab === "coating" ? "text-white" : "text-slate-700"} hover:cursor-pointer`}
                  style={{
                    background:
                      activeTab === "coating" ? grad.subtle : "transparent",
                    border: `1px solid ${borderColor()}`,
                  }}
                >
                  Coating
                </button>
                <button
                  onClick={() => setActiveTab("thermal")}
                  className={`px-4 py-2 rounded-full font-bold transition-colors ${activeTab === "thermal" ? "text-white" : "text-slate-700"} hover:cursor-pointer`}
                  style={{
                    background:
                      activeTab === "thermal" ? grad.subtle : "transparent",
                    border: `1px solid ${borderColor()}`,
                  }}
                >
                  Thermal
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div
                className="rounded-3xl p-8 shadow-2xl"
                style={{
                  background: `${brandColors.primary}0D`,
                  border: `1px solid ${borderColor()}`,
                }}
              >
                <div className="h-48 rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-50 to-cyan-50 flex items-center justify-center">
                  <div className="text-center">
                    <div
                      className="text-sm font-bold"
                      style={{ color: brandColors.primary }}
                    >
                      Coating machine Image Preview
                    </div>
                    <div className="text-xs text-slate-600 mt-1">
                      Interactive mockup area
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* ────────────────────────────────────────────────────────────
           COATING MACHINE
           ──────────────────────────────────────────────────────────── */}
        {activeTab === "coating" && (
          <motion.div
            key="coating"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div
                className="lg:col-span-2 rounded-2xl p-6 backdrop-blur-sm"
                style={{
                  background: `${brandColors.primary}08`,
                  border: `1px solid ${borderColor()}`,
                }}
              >
                <h2
                  className="text-2xl font-extrabold mb-3"
                  style={{ color: brandColors.primary }}
                >
                  Pilot Scale Coating Machine
                </h2>
                <p className="text-slate-600 mb-6">
                  To develop materials with enhanced functional properties
                  imparted through various chemical treatments, COE Indutech has
                  established a pilot-scale coating machine with a working width
                  of 0.6 meters and an oven temperature capability of up to 200
                  °C.
                </p>

                <p className="text-slate-600 mb-6">
                  These pilot coating machines are suitable for processing
                  woven, knitted, and nonwoven fabrics, and they support
                  research activities, product development, and application
                  trials.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {coatingSpecs.map((spec, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-4 rounded-xl"
                      style={{
                        background: "white",
                        border: `1px solid ${borderColor()}`,
                      }}
                    >
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                        style={{ background: grad.card }}
                      >
                        <Droplet
                          className="w-5 h-5"
                          style={{ color: brandColors.accent }}
                        />
                      </div>
                      <div>
                        <div
                          className="text-xs uppercase font-bold"
                          style={{ color: brandColors.tertiary }}
                        >
                          {spec.label}
                        </div>
                        <div
                          className="font-black"
                          style={{ color: brandColors.primary }}
                        >
                          {spec.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="rounded-2xl p-6"
                style={{
                  background: "white",
                  border: `1px solid ${borderColor()}`,
                }}
              >
                <h3
                  className="text-lg font-bold mb-4"
                  style={{ color: brandColors.primary }}
                >
                  Available Finishes
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {availableFinishes.slice(0, 4).map((f, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-lg"
                      style={{ border: `1px solid ${borderColor()}` }}
                    >
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{ background: `${f.color}20` }}
                      >
                        <f.icon
                          className="w-5 h-5"
                          style={{ color: f.color }}
                        />
                      </div>
                      <div
                        className="font-bold"
                        style={{ color: brandColors.primary }}
                      >
                        {f.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3
                className="text-xl font-extrabold mb-4"
                style={{ color: brandColors.primary }}
              >
                Coating Technologies
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {coatingTechnologies.map((tech, i) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={i}
                      className="p-4 rounded-2xl flex items-center gap-4"
                      style={{
                        background: "white",
                        border: `1px solid ${borderColor()}`,
                      }}
                    >
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                        style={{ background: grad.card }}
                      >
                        <Icon
                          className="w-6 h-6"
                          style={{ color: brandColors.accent }}
                        />
                      </div>
                      <div
                        className="font-bold"
                        style={{ color: brandColors.primary }}
                      >
                        {tech.name}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}

        {/* ────────────────────────────────────────────────────────────
           THERMAL BONDING MACHINE
           ──────────────────────────────────────────────────────────── */}
        {activeTab === "thermal" && (
          <motion.div
            key="thermal"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div
                className="lg:col-span-2 rounded-2xl p-6 backdrop-blur-sm"
                style={{
                  background: `${brandColors.primary}08`,
                  border: `1px solid ${borderColor()}`,
                }}
              >
                <h2
                  className="text-2xl font-extrabold mb-3"
                  style={{ color: brandColors.primary }}
                >
                  Pilot Scale Thermal Bonding Machine
                </h2>
                <p className="text-slate-600 mb-4">
                  To develop and conduct research on High Loft nonwoven
                  materials, COE Indutech has established a full-scale pilot
                  Through-Air Bonded (TAB) production line. This pilot machine
                  is capable of processing fibers with fineness ranging from 1.5
                  denier to 6.0 denier and cut lengths between 38 mm and 61 mm.
                </p>

                <p className="text-slate-600 mb-4">
                  As the system is intended for product development and
                  research, it has been designed to be highly versatile and can
                  handle a wide variety of fiber types, including Polypropylene
                  (PP), Bi-component fibers, Polyester (PET), Nylon, Cotton,
                  Jute, Flax, Recycled shoddy fibers, and others.
                </p>

                <p className="text-slate-600 mb-4">
                  The machine can operate with as little as 5 kg of raw
                  material, enabling economical trials and sample development.
                  It is capable of producing high-loft nonwovens in the range of
                  40 gsm to 200 gsm, with a maximum web width of 0.6 m and a
                  maximum thickness of 30–40 mm.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {thermalSpecs.map((spec, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-4 rounded-xl"
                      style={{
                        background: "white",
                        border: `1px solid ${borderColor()}`,
                      }}
                    >
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                        style={{ background: grad.card }}
                      >
                        <Thermometer
                          className="w-5 h-5"
                          style={{ color: brandColors.accent }}
                        />
                      </div>
                      <div>
                        <div
                          className="text-xs uppercase font-bold"
                          style={{ color: brandColors.tertiary }}
                        >
                          {spec.label}
                        </div>
                        <div
                          className="font-black"
                          style={{ color: brandColors.primary }}
                        >
                          {spec.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="rounded-2xl p-6"
                style={{
                  background: "white",
                  border: `1px solid ${borderColor()}`,
                }}
              >
                <h3
                  className="text-lg font-bold mb-4"
                  style={{ color: brandColors.primary }}
                >
                  Compatible Fibers
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {thermalFiberTypes.slice(0, 6).map((f, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-2 rounded-md"
                      style={{ border: `1px solid ${borderColor()}` }}
                    >
                      <CheckCircle
                        className="w-4 h-4"
                        style={{ color: brandColors.accent }}
                      />
                      <div
                        className="font-bold"
                        style={{ color: brandColors.primary }}
                      >
                        {f}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3
                className="text-xl font-extrabold mb-4"
                style={{ color: brandColors.primary }}
              >
                Production Capabilities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { label: "GSM Range", value: "40 – 200 gsm", icon: Gauge },
                  {
                    label: "Maximum Web Width",
                    value: "0.6 meters",
                    icon: Layers,
                  },
                  {
                    label: "Maximum Thickness",
                    value: "30 – 40 mm",
                    icon: Settings,
                  },
                ].map((cap, i) => {
                  const Icon = cap.icon;
                  return (
                    <div
                      key={i}
                      className="p-4 rounded-2xl flex items-start gap-4"
                      style={{
                        background: "white",
                        border: `1px solid ${borderColor()}`,
                      }}
                    >
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                        style={{ background: grad.card }}
                      >
                        <Icon
                          className="w-6 h-6"
                          style={{ color: brandColors.accent }}
                        />
                      </div>
                      <div>
                        <div
                          className="text-xs uppercase font-bold"
                          style={{ color: brandColors.tertiary }}
                        >
                          {cap.label}
                        </div>
                        <div
                          className="text-lg font-black"
                          style={{ color: brandColors.primary }}
                        >
                          {cap.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
}
