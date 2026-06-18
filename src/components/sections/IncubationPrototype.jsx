import React from "react";
import { brandColors, grad, gradText } from "../common/brand";
import Eyebrow from "../common/Eyebrow";
import { motion } from "framer-motion";
import { Award, BookOpen, Download, Users } from "lucide-react";

const incProData = [
  {
    title: "Complete Nonwoven Needle Punching Line",
    pdf: "/docs/inc-pro/Pilot Production Needlepunching.docx",
    color: "from-gray-400 to-gray-600",
  },
  {
    title: "Thermal Bonding (Nonwoven)",
    pdf: "/docs/inc-pro/Pilot Production Thermal Bonding.pdf",
    color: "from-green-400 to-green-600",
  },
  {
    title: "Through Air Bonding (Nonwoven)",
    pdf: "/docs/inc-pro/Pilot Production TA Bonding.pdf",
    color: "from-purple-400 to-purple-600",
  },
  {
    title: "Needlepunching (Nonwoven)",
    pdf: "/docs/inc-pro/Stand alone Needlepunching Bonding.pdf",
    color: "from-yellow-400 to-yellow-600",
  },
  {
    title: "Filament or Tow Cutting Machine",
    pdf: "/docs/inc-pro/Filament or Tow Cutting Machine.pdf",
    color: "from-orange-400 to-orange-600",
  },
  {
    title: "Dip or Padding Mangle (Coating)",
    pdf: "/docs/inc-pro/Pilot Coating Capabilities.pdf",
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "Knife on Roll & Knife on Air (Coating)",
    pdf: "/docs/inc-pro/Pilot Coating Capabilities.pdf",
    color: "from-red-400 to-red-600",
  },
];

/* ── Reusable Components ─────────────────────────────────── */

const SectionHeading = ({ children, align = "center" }) => (
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`text-3xl md:text-4xl font-bold text-gray-900 mb-8 ${
      align === "center" ? "text-center" : "text-left"
    }`}
  >
    {children}
  </motion.h2>
);

const Card = ({ children, className = "" }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={`bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 ${className}`}
  >
    {children}
  </motion.div>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function IncubationPrototype() {
  return (
    <section className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* ── Hero Section ─────────────────────────────────── */}
      <section className="relative pt-20 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-indigo-50/50 to-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-[20%] left-[-10%] w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Eyebrow>Innovation driven</Eyebrow>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-slate-900 mb-4 lg:mb-6"
          >
            Incubation & <span style={gradText}>Prototyping</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-md sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto"
          >
            Our incubation centre accelerates innovation by providing research,
            prototype facilities and mentorship. We nurture new technologies from
            concept to market, empowering entrepreneurs in India and beyond.
          </motion.p>
        </div>
      </section>
      {/* Mission & Stratergy Content */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-4 lg:space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                Mission
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Accelerate venture development in industrial textiles through
                innovation, research and collaboration within PSG Tech and its
                extended community.
              </p>
            </div>

            <div className="space-y-4 lg:space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                Strategy
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Establish a full‑featured incubation hub offering prototyping for
                filters, insulation, coated fabrics, composites, and more. Post
                setup, we mentor enterprises to commercialize products and
                navigate markets with COE Indutech support until launch.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Training Items Grid ─────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" id="programs">
        <div className="max-w-7xl mx-auto">
          <SectionHeading align="left">
            COE Indutech current prototyping capabilities
          </SectionHeading>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {incProData.map((item, index) => {
              const icon =
                index % 3 === 0 ? (
                  <BookOpen size={24} />
                ) : index % 3 === 1 ? (
                  <Award size={24} />
                ) : (
                  <Users size={24} />
                );
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative"
                >
                  <a
                    href={item.pdf || "#"}
                    target={item.pdf ? "_blank" : undefined}
                    rel={item.pdf ? "noopener noreferrer" : undefined}
                    className="block h-full rounded-2xl focus:outline-none"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300 transform scale-95 group-hover:scale-100`}
                    />
                    <div className="relative h-full bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden focus:ring-4 focus:ring-offset-2 focus:ring-indigo-300">
                      {/* Top stripe */}
                      <div
                        className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${item.color}`}
                      />

                      <div className="mb-4">
                        <div
                          className={`w-12 h-12 mb-5 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow`}
                        >
                          {icon}
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 leading-snug">
                          {item.title}
                        </h3>
                      </div>

                      {item.pdf && (
                        <span className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 group-hover:text-indigo-800 transition-colors">
                          Download brochure
                          <Download size={16} />
                        </span>
                      )}
                    </div>
                  </a>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </section>
  );
}
