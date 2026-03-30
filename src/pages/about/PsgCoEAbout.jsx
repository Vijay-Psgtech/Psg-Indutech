import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  Target,
  Lightbulb,
  Users,
  Award,
  TrendingUp,
  Building2,
  BookOpen,
  Zap,
  MessageSquare,
  ArrowUpRight,
  Globe,
  Shield,
  Zap as ZapIcon,
} from "lucide-react";
import {
  brandColors,
  grad,
  gradText,
  borderColor,
} from "../../components/common/brand";

/* ── Animation Variants ────────────────────────────────────────── */
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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const containerStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

/* ══════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════════════════════════ */
export default function PsgCoEAbout() {
  const visionItems = [
    "To be a dynamic, competitive and world class 'Centre of Excellence' for Industrial Textiles",
    "Research dedicated to the aspirations of the Indian technical textile industry",
  ];

  const missionItems = [
    { icon: BookOpen, text: "Resource Center", color: "#0891b2" },
    { icon: Building2, text: "Pilot Facility", color: "#10b981" },
    { icon: Lightbulb, text: "Incubation Center", color: "#f59e0b" },
    { icon: Award, text: "Support BIS for development of new test standards", color: "#8b5cf6" },
    { icon: Users, text: "Training & Workshops", color: "#06b6d4" },
    { icon: Zap, text: "Consultancy", color: "#10b981" },
  ];

  const statsData = [
    { number: "20+", label: "Collaborations", icon: Globe },
    { number: "500+", label: "Projects Completed", icon: CheckCircle2 },
    { number: "100%", label: "Quality Certified", icon: Shield },
    { number: "15+", label: "Years Experience", icon: Award },
  ];

  const galleryImages = [
    { src: "/images/about/img1.jpg", alt: "COE Facility 1", span: "col-span-2" },
    { src: "/images/about/img2.jpg", alt: "COE Facility 2", span: "col-span-1" },
    { src: "/images/about/img3.jpg", alt: "COE Facility 3", span: "col-span-1" },
  ];

  return (
    <div className="min-h-screen" style={{ background: "#f8fafc" }}>
      {/* ═══ MODERN HERO SECTION ═══ */}
      <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
        <img
          src="/images/about/coe-banner.png"
          alt="COE Indutech Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* dark overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-slate-900/85 via-slate-900/70 to-slate-900/40" />

        <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-3xl text-white"
          >
            <p className="uppercase tracking-widest text-sm text-cyan-300 mb-4">
              Centre of Excellence – Industrial & Home Textiles
            </p>

            <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
              About COE INDUTECH
            </h1>

            <p className="text-lg text-white/85 leading-relaxed">
              Advancing research, innovation, testing, and incubation for the
              next generation of Technical Textiles in India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ MAIN CONTENT ═══ */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-24">
        {/* ─── INTRO TEXT + IMAGE GALLERY ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Left: Image Gallery with Statistics Overlay */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4 h-full">
              {/* Large main image - spans 2 rows */}
              <div
                className="col-span-2 relative overflow-hidden rounded-2xl shadow-lg group"
                style={{ aspectRatio: "16/10" }}
              >
                <img
                  src="/images/about/img1.jpg"
                  alt="COE Indutech Main Facility"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent" />
              </div>

              {/* Secondary images */}
              <div className="col-span-1 relative overflow-hidden rounded-2xl shadow-lg group">
                <img
                  src="/images/about/img2.jpg"
                  alt="Testing Facility"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 via-transparent to-transparent" />
              </div>

              <div className="col-span-1 relative overflow-hidden rounded-2xl shadow-lg group">
                <img
                  src="/images/about/img3.jpg"
                  alt="Equipment"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 via-transparent to-transparent" />
              </div>
            </div>

            {/* Statistics Overlay */}
            <motion.div
              variants={containerStagger}
              className="absolute bottom-6 left-6 right-6 flex gap-4"
            >
              <motion.div
                variants={scaleIn}
                className="flex-1 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-lg"
              >
                <div className="text-center">
                  <p className="text-3xl font-black" style={{ color: brandColors.primary }}>
                    20+
                  </p>
                  <p className="text-xs font-semibold text-slate-600 mt-1">
                    Collaborations
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="flex-1 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-lg"
              >
                <div className="text-center">
                  <p className="text-3xl font-black" style={{ color: brandColors.accent }}>
                    500+
                  </p>
                  <p className="text-xs font-semibold text-slate-600 mt-1">
                    Projects
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6 flex flex-col justify-center"
          >
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
                style={{
                  background: grad.card,
                  border: `1.5px solid ${borderColor()}`,
                }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: brandColors.accent }}
                />
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: brandColors.secondary }}
                >
                  About Indutech
                </span>
              </div>

              <h2
                className="text-3xl sm:text-4xl font-black leading-tight mb-4"
                style={{ color: brandColors.primary }}
              >
                All Services. <span style={gradText}>One Destination.</span>
              </h2>
            </div>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                <strong
                  className="font-bold"
                  style={{ color: brandColors.primary }}
                >
                  PSGTECHS COE INDUTECH
                </strong>
                , Center of Excellence for Industrial and Home Textiles project
                sponsored by the Ministry of Textiles, Govt. of India under the
                scheme Technology Mission for Technical Textiles (TMTT) and is
                implemented by the Departments of Textile Technology and
                Automobile Engineering, PSG College of Technology.
              </p>

              <p>
                The COE is located within the premises of the PSG campus at
                Neelambur, Coimbatore. We are committed to being a dynamic,
                competitive, and world-class "Center of Excellence" for
                developing, manufacturing, and testing new industrial and home
                textiles.
              </p>

              <p>
                As the Centre of Excellence for Industrial Textiles and Home
                Textiles, we focus on activities to promote Technical Textiles
                in general and more specifically Industrial Textiles and Home
                Textiles in our country.
              </p>
            </div>

            <button
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white transition-all duration-300 w-fit"
              style={{
                background: grad.subtle,
                boxShadow: `0 4px 18px ${brandColors.accent}40`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = `0 6px 28px ${brandColors.accent}50`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = `0 4px 18px ${brandColors.accent}40`;
              }}
            >
              Our Services
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>

        {/* ─── VISION & MISSION SECTION ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Vision Card */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-xl border-2"
            style={{ borderColor: borderColor() }}
          >
            {/* Top accent bar */}
            <div
              className="absolute top-0 left-0 w-full h-1.5 rounded-b-full"
              style={{ background: grad.subtle }}
            />

            {/* Icon badge */}
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 shadow-lg"
              style={{ background: grad.subtle }}
            >
              <Target className="w-7 h-7 text-white" />
            </div>

            <h3
              className="text-2xl font-black mb-6"
              style={{ color: brandColors.primary }}
            >
              Our Vision
            </h3>

            <div className="space-y-4">
              {visionItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 shrink-0 mt-0.5"
                    style={{ color: brandColors.accent }}
                  />
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-xl border-2"
            style={{ borderColor: borderColor() }}
          >
            {/* Top accent bar */}
            <div
              className="absolute top-0 left-0 w-full h-1.5 rounded-b-full"
              style={{
                background: `linear-gradient(135deg, #10b981, #059669)`,
              }}
            />

            {/* Icon badge */}
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 shadow-lg"
              style={{
                background: `linear-gradient(135deg, #10b981, #059669)`,
              }}
            >
              <Lightbulb className="w-7 h-7 text-white" />
            </div>

            <h3
              className="text-2xl font-black mb-6"
              style={{ color: brandColors.primary }}
            >
              Our Mission
            </h3>

            <motion.div
              variants={containerStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {missionItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={fadeUp}
                    className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-slate-50"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 shadow-sm"
                      style={{ background: `${item.color}20`, color: item.color }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <p className="text-sm font-semibold text-slate-700">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>

        {/* ─── STATS SECTION ─── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
            style={{
              background: grad.wash,
              border: `1.5px solid ${borderColor()}`,
            }}
          >
            <Award className="w-4 h-4" style={{ color: brandColors.accent }} />
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: brandColors.secondary }}
            >
              Why Choose Us
            </span>
          </div>

          <h2
            className="text-3xl sm:text-4xl font-black mb-3"
            style={{ color: brandColors.primary }}
          >
            Highest Quality Standards,{" "}
            <span style={gradText}>Excellence Guaranteed</span>
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12">
            With decades of experience, state-of-the-art facilities, and a
            dedicated team of experts, we ensure the highest quality in every
            project we undertake.
          </p>
        </motion.div>

        {/* ─── STATS CARDS ─── */}
        {/* <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {statsData.map((stat, idx) => {
            const StatIcon = stat.icon;
            return (
              <motion.div
                key={idx}
                variants={scaleIn}
                whileHover={{ y: -8 }}
                className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg border border-slate-200 transition-all duration-300 text-center group"
              >
                
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                  style={{ background: grad.subtle }}
                />

                <div className="relative z-10">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-md"
                    style={{ background: grad.wash }}
                  >
                    <StatIcon
                      className="w-6 h-6"
                      style={{ color: brandColors.accent }}
                    />
                  </div>

                  <p
                    className="text-4xl font-black mb-2"
                    style={{ color: brandColors.primary }}
                  >
                    {stat.number}
                  </p>
                  <p className="text-sm font-semibold text-slate-600">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div> */}

        {/* ─── DETAILED INFO CARDS ─── */}
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-12"
        >
          {/* Industrial Textiles Card - Image Left */}
          <motion.div variants={fadeUp}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Image Section */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                <div
                  className="relative h-[400px] bg-linear-to-br from-slate-900 to-slate-800 flex items-center justify-center overflow-hidden"
                >
                  <img
                    src="public/images/about/industrial.webp"
                    alt="Industrial Textiles"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay accent */}
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent" />
                  
                  {/* Glow effect on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${brandColors.accent}20, transparent)`,
                    }}
                  />
                </div>

                {/* Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full">
                  <p className="text-xs font-black" style={{ color: brandColors.primary }}>
                    INDUTECH
                  </p>
                </div>
              </div>

              {/* Content Section */}
              <motion.div variants={fadeRight} className="space-y-6">
                <div>
                  <h3
                    className="text-3xl font-black mb-2"
                    style={{ color: brandColors.primary }}
                  >
                    Industrial Textiles
                  </h3>
                  <p className="text-base font-semibold text-slate-600">
                    Technical Solutions for Manufacturing
                  </p>
                </div>

                <p className="text-slate-600 leading-relaxed">
                  The term Industrial Textiles refers to a subgroup of Technical
                  Textiles, specifically those used in manufacturing operations
                  or incorporated into industrial products. The rate of growth for
                  Industrial Textile Products is expected to be over 12% per
                  annum, presenting significant opportunities for new entrants.
                </p>

                <div className="space-y-3">
                  {[
                    "Textile products for manufacturing operations",
                    "Filters, conveyor belts, abrasive substrates",
                    "Electrical components and cable insulation",
                    "12% annual growth rate expected",
                  ].map((highlight, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2
                        className="w-5 h-5 shrink-0 mt-0.5"
                        style={{ color: brandColors.accent }}
                      />
                      <span className="text-sm font-semibold text-slate-700">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white mt-4"
                  style={{
                    background: grad.subtle,
                    boxShadow: `0 4px 18px ${brandColors.accent}40`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  Learn More
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* Home Textiles Card - Image Right */}
          <motion.div variants={fadeUp}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Content Section */}
              <motion.div variants={fadeLeft} className="space-y-6 lg:order-2">
                <div>
                  <h3
                    className="text-3xl font-black mb-2"
                    style={{ color: brandColors.primary }}
                  >
                    Home Textiles
                  </h3>
                  <p className="text-base font-semibold text-slate-600">
                    Consumer & Domestic Applications
                  </p>
                </div>

                <p className="text-slate-600 leading-relaxed">
                  Hometech comprises textile components used in domestic
                  environments including interior decoration, furniture,
                  carpeting, and protection. Fiberfil and pillow components
                  together constitute over 50% of usage. Expected CAGR of 5-6.4%
                  through 2030.
                </p>

                <div className="space-y-3">
                  {[
                    "Interior decoration and furniture",
                    "Carpeting and floor coverings",
                    "Fireproofing and thermal insulation",
                    "5-6.4% CAGR through 2030",
                  ].map((highlight, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2
                        className="w-5 h-5 shrink-0 mt-0.5"
                        style={{ color: "#10b981" }}
                      />
                      <span className="text-sm font-semibold text-slate-700">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white mt-4"
                  style={{
                    background: `linear-gradient(135deg, #10b981, #059669)`,
                    boxShadow: `0 4px 18px #10b98140`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  Learn More
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </motion.div>

              {/* Image Section */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group lg:order-1">
                <div
                  className="relative h-[400px] bg-linear-to-br from-green-900 to-green-800 flex items-center justify-center overflow-hidden"
                >
                  <img
                    src="public/images/about/Home.webp"
                    alt="Home Textiles"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-green-900/60 via-transparent to-transparent" />
                  
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, #10b98120, transparent)`,
                    }}
                  />
                </div>

                {/* Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full">
                  <p className="text-xs font-black" style={{ color: "#10b981" }}>
                    HOMETECH
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ─── CTA SECTION ─── */}
        {/* <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative overflow-hidden rounded-3xl py-16 px-8 text-center"
          style={{
            background: `linear-gradient(135deg, rgba(2,44,34,0.95), rgba(15,23,42,0.95))`,
            backdropFilter: "blur(10px)",
          }}
        >
          
          <div
            className="absolute top-0 right-0 w-96 h-96 opacity-20"
            style={{
              background: `radial-gradient(circle, ${brandColors.accent}, transparent)`,
              filter: "blur(60px)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-96 h-96 opacity-20"
            style={{
              background: `radial-gradient(circle, ${brandColors.primary}, transparent)`,
              filter: "blur(60px)",
            }}
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Ready to Innovate Together?
            </h2>

            <p className="text-white/80 mb-8 leading-relaxed">
              Join us in shaping the future of industrial and home textiles. Let's
              collaborate to drive innovation and create sustainable solutions for
              tomorrow's challenges.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-white transition-all duration-300"
                style={{
                  background: grad.subtle,
                  boxShadow: `0 6px 20px ${brandColors.accent}30`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = `0 8px 30px ${brandColors.accent}50`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = `0 6px 20px ${brandColors.accent}30`;
                }}
              >
                Partner With Us
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-white border-2 border-white/30 transition-all duration-300 hover:bg-white/10"
              >
                <MessageSquare className="w-4 h-4" />
                Get in Touch
              </button>
            </div>
          </div>
        </motion.div> */}
      </main>
    </div>
  );
}

/* ── Helper Functions ────────────────────────────────────────── */
// Statistics Counter Component (Optional Enhancement)
export function CounterCard({ number, label, icon: Icon, delay = 0 }) {
  const [count, setCount] = React.useState(0);
  const finalNumber = parseInt(number);
  const isPercentage = number.includes("%");

  React.useEffect(() => {
    let start = 0;
    const end = finalNumber;
    const duration = 2000;
    const increment = end / (duration / 16);

    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(interval);
  }, [finalNumber]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div
        className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4"
        style={{ background: grad.wash }}
      >
        <Icon className="w-6 h-6" style={{ color: brandColors.accent }} />
      </div>
      <p className="text-4xl font-black" style={{ color: brandColors.primary }}>
        {count}
        {isPercentage ? "%" : "+"}
      </p>
      <p className="text-sm font-semibold text-slate-600 mt-2">{label}</p>
    </motion.div>
  );
}
