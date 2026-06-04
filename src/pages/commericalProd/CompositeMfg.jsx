import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Mail, Zap } from "lucide-react";
import { hotPressFeatures } from "../../components/data/CompositeMfgData";
import { brandColors, grad, borderColor } from "../../components/common/brand";
import img1 from "/images/hotpress/BigPress/img1.jpg";
import img2 from "/images/hotpress/BigPress/img2.jpg";
import img3 from "/images/hotpress/BigPress/img3.jpg";

/* -- Animation Variants ------------------------------------------ */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 90, damping: 18 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const quickItems = [
  {
    label: "High accuracy",
    value: "Even pressure across the platen",
  },
  {
    label: "Flexible sizes",
    value: "Supports fibreboard, plywood, and laminates",
  },
  {
    label: "Consistent output",
    value: "Repeatable cycle performance",
  },
  {
    label: "Fast warm-up",
    value: "Efficient heat-up with stable control",
  },
];

const benefits = [
  "Precision temperature and pressure control for repeatable finishes",
  "Heavy-duty construction for continuous production",
  "User-friendly controls with easy maintenance access",
  "Versatile platen sizes for multiple material formats",
];

const highlightSpecs = [
  {
    label: "Cycle Stability",
    value: "Stable heat and pressure through every run",
  },
  {
    label: "Panel Capacity",
    value: "Supports wide boards and laminated sheets",
  },
  {
    label: "Finish Quality",
    value: "Uniform bonding with minimal surface variation",
  },
];

const prodImages = [img1, img2, img3];

export default function CompositeMfg() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(180deg,#f8f9ff,#eef6ff)" }}
    >
      <section className="relative overflow-hidden py-24">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at top left, rgba(59,130,246,0.14), transparent 32%), radial-gradient(circle at bottom right, rgba(16,185,129,0.10), transparent 32%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-xl"
            >
              <p className="text-sm uppercase tracking-[0.36em] font-semibold text-slate-500 mb-4">
                Hot Press Composite Manufacturing
              </p>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
                style={{ color: brandColors.primary }}
              >
                Large scale Hydraulic press for better  boards.
              </h1>
              <p className="mt-6 text-slate-600 text-base leading-relaxed max-w-xl">
                Our hot press machine delivers consistent heat and pressure for
                laminating fibreboards, decorative papers, plywood and composite
                panels with premium surface finish and industrial reliability.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {quickItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-3xl border p-5"
                    style={{
                      background: "rgba(255,255,255,0.92)",
                      border: `1px solid ${borderColor()}`,
                    }}
                  >
                    <p className="text-sm font-semibold text-slate-500">
                      {item.label}
                    </p>
                    <p
                      className="mt-3 text-base font-bold"
                      style={{ color: brandColors.primary }}
                    >
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center lg:justify-end"
            >
              <div
                className="overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-slate-200"
                style={{ background: "#ffffff" }}
              >
                <img
                  src="/images/hotpress/BigPress/bigpress.jpg"
                  alt="Hot Press Machine"
                  className="w-full h-full object-cover min-h-[420px]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-12 space-y-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="rounded-3xl p-8 md:p-10 shadow-xl"
          style={{
            background: `${brandColors.primary}06`,
            border: `1px solid ${borderColor()}`,
          }}
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <h2
                className="text-3xl md:text-4xl font-extrabold"
                style={{ color: brandColors.primary }}
              >
                Hot Press Unit
              </h2>
              <p className="mt-4 text-slate-600 text-base leading-relaxed max-w-3xl">
                Designed for industrial composite manufacturing, this hot press
                ensures precise lamination of fibreboards, decorative papers,
                plywood and other sheet materials with superior surface finish.
              </p>
            </div>
            <div
              className="rounded-3xl bg-white p-5 shadow-sm border"
              style={{ borderColor: borderColor() }}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                By design
              </p>
              <p
                className="mt-3 text-3xl font-black"
                style={{ color: brandColors.primary }}
              >
                Fast setup Stable control High yield
              </p>
            </div>
          </div>
        </motion.div>

        <div>
          <h3
            className="text-2xl font-black mb-6"
            style={{ color: brandColors.primary }}
          >
            Key Features
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {hotPressFeatures.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  whileHover={{
                    y: -6,
                    boxShadow: `0 18px 36px ${brandColors.accent}22`,
                  }}
                  transition={{ type: "spring", stiffness: 280, damping: 24 }}
                  className="relative overflow-hidden rounded-[2rem] p-7 shadow-md"
                  style={{
                    background: "rgba(255,255,255,0.9)",
                    border: `1px solid ${borderColor()}`,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ background: grad.subtle }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4
                        className="text-base font-bold"
                        style={{ color: brandColors.primary }}
                      >
                        {feat.title}
                      </h4>
                      <p className="text-sm text-slate-600 mt-2">{feat.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Product Images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16 px-4">
          {prodImages.map((img, idx) => (
            <div key={idx} className="rounded-[2rem] overflow-hidden shadow-md">
              <img
                src={img}
                alt={`Product ${idx + 1}`}
                className="w-full h-56 sm:h-64 object-cover transition-transform duration-300 group-hover:scale-105 will-change-transform"
              />
            </div>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 lg:grid-cols-[1.4fr_1fr]"
        >
          <div
            className="rounded-[2rem] p-8 bg-white shadow-md border"
            style={{ borderColor: borderColor() }}
          >
            <h3
              className="text-2xl font-extrabold mb-4"
              style={{ color: brandColors.primary }}
            >
              Why choose our hot press
            </h3>
            <ul className="space-y-4">
              {benefits.map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <CheckCircle
                    className="w-5 h-5 mt-1 shrink-0"
                    style={{ color: brandColors.accent }}
                  />
                  <span className="text-sm text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-[2rem] p-8 bg-[rgba(255,255,255,0.92)] shadow-md border"
            style={{ borderColor: borderColor() }}
          >
            <h3
              className="text-xl font-bold mb-4"
              style={{ color: brandColors.primary }}
            >
              Production highlights
            </h3>
            <div className="space-y-4">
              {highlightSpecs.map((item, idx) => (
                <div key={idx}>
                  <p className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-500">
                    {item.label}
                  </p>
                  <p className="mt-2 text-base font-semibold text-slate-700">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-[2rem] p-8 text-center shadow-lg"
          style={{
            background: `${brandColors.accent}12`,
            border: `1px solid ${borderColor()}`,
          }}
        >
          <p
            className="text-base font-bold"
            style={{ color: brandColors.primary }}
          >
            Optimized for industrial composite production with reliable
            lamination, high uptime and cleaner operation.
          </p>
        </motion.div>
      </main>
      {/* Contact Information */}
      <div className="mt-10 sm:mt-20 py-8 sm:py-16 border-t border-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <p className="font-medium mb-2">For any enquiries, please contact:</p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-4 sm:px-6 py-2 sm:py-3 w-full sm:w-auto">
              <p
                className="text-base font-bold flex items-center justify-center gap-2"
                style={{ color: brandColors.primary }}
              >
                <Zap className="w-4 h-4" />
              </p>
              <div className="flex flex-col items-center justify-center mt-3 space-y-2 text-gray-700">
                <div className="flex items-center gap-2">
                  <Mail
                    className="w-4 h-4"
                    style={{ color: brandColors.secondary }}
                  />
                  <a
                    href="mailto:mfr1.int@psgtech.ac.in"
                    className="font-medium transition-all"
                    style={{ color: brandColors.secondary }}
                  >
                    mfr1.int@psgtech.ac.in
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
