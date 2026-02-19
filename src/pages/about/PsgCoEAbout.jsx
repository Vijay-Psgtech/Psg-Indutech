import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Download } from "lucide-react";
import image from "/images/about/img1.jpg";
import image2 from "/logo1.png"; // You can add more images
import logo from "/logo1.png";
import {
  brandColors,
  grad,
  gradText,
  borderColor,
} from "../../components/common/brand.js";

/* ── shared motion presets ──────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};
const fadeRight = {
  hidden: { opacity: 0, x: 36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ── Circular Stats Component ──────────────────────────────── */
function CircularStat({ percentage, label }) {
  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-28 h-28">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke={borderColor()}
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke={brandColors.secondary}
            strokeWidth="2.5"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 1s ease" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="text-3xl font-black"
            style={{ color: brandColors.secondary }}
          >
            {percentage}%
          </span>
        </div>
      </div>
      <p className="text-sm font-semibold text-slate-600 text-center">
        {label}
      </p>
    </div>
  );
}

/* ── Vision/Mission Item ───────────────────────────────────── */
function VisionMissionItem({ icon, title, items }) {
  return (
    <div>
      <h4
        className="text-lg font-bold mb-4"
        style={{ color: brandColors.primary }}
      >
        {title}
      </h4>
      <div className="space-y-3">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <CheckCircle2
              className="w-5 h-5 shrink-0 mt-0.5"
              style={{ color: brandColors.secondary }}
            />
            <p className="text-sm text-slate-600">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PsgCoEAbout() {
  const stats = [
    { percentage: 95, label: "Factory Experience" },
    { percentage: 97, label: "Textile Material" },
    { percentage: 96, label: "Worker Skills" },
    { percentage: 93, label: "Machinery & Equipment" },
  ];

  const visionItems = [
    "To be a dynamic, competitive and world class ‘Centre of Excellence’ for Industrial Textiles",
    "Research dedicated to the aspirations of the Indian technical textile industry",
  ];

  const missionItems = [
    "Resource Center",
    "Pilot Facility",
    "Incubation Center",
    "Support BIS for development of new test standards",
    "Training & Workshops",
    "Consultancy",
  ];

  return (
    <section className="relative w-full bg-white">
      {/* ═══  HERO SECTION WITH DARK OVERLAY ═══ */}
      <div
        className="relative h-80 md:h-96 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(20, 20, 60, 0.5)" }}
        />

        {/* Content */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="absolute inset-0 flex flex-col items-start justify-center px-6 md:px-12 lg:px-20"
        >
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">
            About <span style={gradText}>COE INDUTECH</span>
          </h1>
          <div className="flex items-center gap-2 mt-4 text-white/80">
            <span>Home</span>
            <span>/</span>
            <span>About Us</span>
          </div>
        </motion.div>
      </div>

      {/* ═══  MAIN CONTENT ═══ */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* ─── INTRO TEXT + IMAGE GALLERY ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          {/* Left: Overlapping Images */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative h-96"
          >
            {/* Large main image */}
            <div
              className="absolute top-0 left-8 w-64 h-72 rounded-2xl overflow-hidden shadow-lg"
              style={{ border: `3px solid ${borderColor()}` }}
            >
              <img
                src={image}
                alt="COE Indutech Main"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Small overlapping image */}
            <div
              className="absolute bottom-0 right-0 w-48 h-48 rounded-2xl overflow-hidden shadow-lg"
              style={{ border: `3px solid ${borderColor()}` }}
            >
              <img
                src={image2}
                alt="COE Indutech Detail"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <div>
              <Eyebrow>About Indutech</Eyebrow>
              <h2
                className="text-3xl md:text-4xl font-black mt-3 leading-tight"
                style={{ color: brandColors.primary }}
              >
                You Can Find All Kinds of Services Here
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed">
              PSGTECHS COE INDUTECH, Center of Excellence for Industrial and
              Home Textiles project sponsored by the Ministry of Textiles, Govt.
              of India under the scheme Technology Mission for Technical
              Textiles (TMTT) and is implemented by the Departments of Textile
              Technology and Automobile Engineering, PSG College of Technology
              and the COE is located within the premises of the PSG campus at
              Neelambur, Coimbatore. The PSGTECHS COE INDUTECH is committed to
              being a dynamic, competitive, and world-class “Center of
              Excellence” for developing, manufacturing, and testing new
              industrial and home textiles.
            </p>

            <p className="text-slate-600 leading-relaxed">
              PSGTECHS COE INDUTECH, being the Centre of Excellence for
              Industrial Textiles and Home Textiles, focus on activities to
              promote Technical Textiles in general and more specifically
              Industrial Textiles and Home Textiles in our country.
            </p>

            <button
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white transition-all duration-300"
              style={{
                background: grad.subtle,
                boxShadow: `0 4px 18px ${brandColors.accent}40`,
              }}
            >
              Our Services
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

        {/* ─── VISION & MISSION SECTION ─── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 p-12 rounded-2xl"
          style={{
            background: `linear-gradient(135deg, ${brandColors.primary}05, ${brandColors.accent}05)`,
            border: `2px solid ${borderColor()}`,
          }}
        >
          <VisionMissionItem title="Our Vision" items={visionItems} />
          <VisionMissionItem title="Our Mission" items={missionItems} />
        </motion.div>

        {/* ─── STATS SECTION ─── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <Eyebrow>Why Choose COE INDUTECH</Eyebrow>
            <h2
              className="text-3xl md:text-4xl font-black mt-3"
              style={{ color: brandColors.primary }}
            >
              Lowest Quality Standards,
              <br />
              Excellence Guaranteed
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              With decades of experience, state-of-the-art facilities, and a
              dedicated team of experts, we ensure the highest quality in every
              project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <CircularStat percentage={stat.percentage} label={stat.label} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ─── DETAILED INFO CARDS ─── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <InfoCard
            title="Industrial Textiles (INDUTECH)"
            subtitle="Technical Solutions for Manufacturing"
            items={[
              "The term Industrial Textiles refers to a subgroup of a wider category of Technical Textiles, referring specifically to those textile products used in the course of manufacturing operations (such as filters, conveyor belts, abrasive substrates) or which are incorporated into other industrial products (such as electrical components, cables, flexible seals, acoustic and thermal insulation of industrial appliances). The rate of growth for Industrial Textile Products are expected to be over 12% per annum, which is quite healthy and presents an opportunity to a new entrant the scope and space to establish himself.",
            ]}
          />
          <InfoCard
            title="Home Textiles (HOMETECH)"
            subtitle="Consumer & Domestic Applications"
            items={[
              "Hometech segment of technical textiles comprises of the textile components used in the domestic environment-interior decoration and furniture, carpeting, protection against the sun,cushion materials, fireproofing, floor and wall coverings, textile reinforced structures / fittings,filter products for vacuum cleaners. They are made of both natural and synthetic fibres. Compound Annual Growth Rate (CAGR) of approximately 5-6.4% through 2030. Fiberfil and pillow and mattress components together constitute over 50% of the technical textile usage under the Hometech segment followed by blinds, Carpet backing and others.",
            ]}
          />
        </motion.div>
      </div>

      {/* ═══  BOTTOM CTA SECTION ═══ */}
      {/* <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="relative py-16 px-4"
        style={{ background: grad.hero }}
      >
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="text-3xl md:text-4xl font-black mb-4">
            Explore Events & Training
          </h3>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Stay updated with the latest workshops, seminars, and skill-development
            programmes offered by COE INDUTECH.
          </p>
          <button
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold bg-white"
            style={{ color: brandColors.primary }}
          >
            View All Programs
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div> */}
    </section>
  );
}

/* ── Helper Components ────────────────────────────────────── */
function Eyebrow({ children }) {
  return (
    <span
      className="text-xs font-bold uppercase tracking-widest"
      style={{ color: brandColors.secondary }}
    >
      {children}
    </span>
  );
}

function InfoCard({ title, subtitle, items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="p-8 rounded-2xl"
      style={{
        background: "white",
        border: `2px solid ${borderColor()}`,
        boxShadow: "0 4px 24px -4px rgba(34,34,122,0.10)",
      }}
    >
      <h3
        className="text-xl font-bold mb-2"
        style={{ color: brandColors.primary }}
      >
        {title}
      </h3>
      <p className="text-lg text-slate-500 font-semibold mb-5">{subtitle}</p>
      <ul className="space-y-3">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <div
              className="w-1.5 h-1.5 rounded-full shrink-0 mt-2"
              style={{ background: brandColors.secondary }}
            />
            <span className="text-md text-slate-600">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
