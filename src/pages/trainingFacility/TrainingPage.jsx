import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MapPin,
  Download,
  ArrowRight,
  Filter,
  CheckCircle2,
  BookOpen,
  Award,
  Users,
} from "lucide-react";
import {
  trainingData,
  trainingItems,
} from "../../components/data/TrainingFacilityData.js";
import {
  brandColors,
  grad,
  gradText,
  borderColor,
} from "../../components/common/brand.js";
import TrainImg from "/images/Training/TrainC1.jpg";
import Eyebrow from "../../components/common/EyeBrow";

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

/* ── Main Component ─────────────────────────────────── */

const TrainingPage = () => {
  const [filter, setFilter] = useState("all");
  const categories = [
    "all",
    ...Array.from(new Set(trainingData.map((e) => e.category))),
  ];

  const filtered =
    filter === "all"
      ? trainingData
      : trainingData.filter((e) => e.category === filter);

  // Animation variants
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

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* ── Hero Section ─────────────────────────────────── */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 bg-gradient-to-b from-indigo-50/50 to-white overflow-hidden">
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
            <Eyebrow>Skill Development</Eyebrow>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight text-slate-900 mb-6"
          >
            Training Program <span style={gradText}>Capabilities</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto"
          >
            Empowering the future of textiles through comprehensive training
            programs. We bridge the knowledge gap for students, researchers, and
            industry professionals.
          </motion.p>
        </div>
      </section>

      {/* ── Overview & Image Section ─────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                Center of Excellence for{" "}
                <span style={gradText}>Technical Textiles</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                As a Center of Excellence for Technical Textiles, one of our
                core missions is to impart specialized knowledge on technical
                textile products. We cater to a diverse audience including:
              </p>
              <ul className="space-y-3">
                {[
                  "Students & Research Scholars",
                  "Professors & Academicians",
                  "Industry Personnel & Entrepreneurs",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center gap-3 text-gray-700 font-medium"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                      <CheckCircle2 size={14} strokeWidth={3} />
                    </div>
                    {item}
                  </motion.li>
                ))}
              </ul>
              <div className="pt-4">
                <button
                  onClick={() =>
                    document
                      .getElementById("programs")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                  className="px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold shadow-lg hover:bg-slate-800 transition transform hover:-translate-y-0.5 flex items-center gap-2 group"
                >
                  View Programs
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
                <p className="mt-6 text-sm text-gray-500 font-medium">
                  For Training Enquiries:{" "}
                  <a
                    href="mailto:marketing.int@psgtech.ac.in"
                    className="text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    marketing.int@psgtech.ac.in
                  </a>
                </p>
              </div>
            </motion.div>

            {/* Image Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-2xl transform translate-x-4 translate-y-4 -z-10"></div>
              <img
                src={TrainImg}
                alt="Training Facility"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Training Items Grid ─────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 bg-gray-50" id="programs">
        <div className="max-w-7xl mx-auto">
          <SectionHeading>Our Training Modules</SectionHeading>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {trainingItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 transform -rotate-1 group-hover:rotate-0`}
                />
                <div className="relative h-full bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl hover:border-transparent transition-all duration-300 flex flex-col justify-between overflow-hidden">
                  {/* Decorative Top Border */}
                  <div
                    className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${item.color}`}
                  />

                  <div className="mb-4">
                    <div
                      className={`w-12 h-12 mb-6 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-md`}
                    >
                      {index % 3 === 0 ? (
                        <BookOpen size={20} />
                      ) : index % 3 === 1 ? (
                        <Award size={20} />
                      ) : (
                        <Users size={20} />
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                      {item.title}
                    </h3>
                  </div>

                  {item.doc ? (
                    <a
                      href={item.doc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 text-sm font-semibold  hover:underline mt-4`}
                      style={{ color: "inherit" }} // Simplification, could use dynamic color based on item.color
                    >
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-900">
                        Download Brochure
                      </span>
                      <Download size={14} className="text-gray-600" />
                    </a>
                  ) : (
                    <div className="h-4"></div> /* Spacer if no doc */
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Training Data (Events) ─────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="text-left">
              <span className="text-indigo-600 font-semibold tracking-wider uppercase text-sm">
                Past Events
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                Workshops & Seminars
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize ${
                    filter === cat
                      ? "bg-slate-900 text-white shadow-lg transform scale-105"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="grid gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, index) => (
                <motion.div
                  layout
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 group border-l-4 border-l-indigo-500">
                    {/* Date Block */}
                    <div className="flex-shrink-0 flex md:flex-col items-center justify-center md:justify-start gap-2 md:gap-0 md:w-24 text-center">
                      <div className="text-3xl md:text-4xl font-black text-indigo-600/20 group-hover:text-indigo-600 transition-colors duration-300">
                        {new Date(item.date).getDate()}
                      </div>
                      <div className="text-xs font-bold uppercase tracking-wider text-gray-400">
                        {new Date(item.date).toLocaleDateString("en-US", {
                          month: "short",
                          year: "numeric",
                        })}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span
                          className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                            item.category === "Workshop"
                              ? "bg-purple-100 text-purple-700"
                              : item.category === "Training"
                                ? "bg-blue-100 text-blue-700"
                                : "bg-emerald-100 text-emerald-700"
                          }`}
                        >
                          {item.category}
                        </span>
                        <div className="flex items-center gap-1 text-gray-400 text-xs">
                          <MapPin size={12} />
                          {item.location}
                        </div>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-700 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                        {item.excerpt}
                      </p>

                      {item.pdf && (
                        <a
                          href={item.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-indigo-600 font-semibold text-sm hover:text-indigo-800 transition-colors"
                        >
                          <Download size={16} />
                          Download Report
                        </a>
                      )}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>

            {filtered.length === 0 && (
              <div className="text-center py-20 text-gray-400">
                No events found for this category.
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TrainingPage;
