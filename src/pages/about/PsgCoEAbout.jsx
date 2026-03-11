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

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
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
    { icon: BookOpen, text: "Resource Center" },
    { icon: Building2, text: "Pilot Facility" },
    { icon: Lightbulb, text: "Incubation Center" },
    { icon: Award, text: "Support BIS for development of new test standards" },
    { icon: Users, text: "Training & Workshops" },
    { icon: Zap, text: "Consultancy" },
  ];

  return (
    <div className="min-h-screen" style={{ background: "#f8fafc" }}>
      {/* ═══ MODERN HERO SECTION ═══ */}
      <section
        className="relative overflow-hidden bg-white border-b"
        style={{ borderColor: borderColor() }}
      >
        {/* Gradient Background */}
        <div className="absolute inset-0" style={{ background: grad.hero }} />

        {/* Dot Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            {/* Breadcrumb */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
            >
              <span className="text-sm text-white/80">Home</span>
              <span className="text-white/60">/</span>
              <span className="text-sm font-bold text-white">About Us</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                COE INDUTECH
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
              Empowering innovation through advanced engineering, research, and
              industry collaboration to build the next generation of technology
              leaders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ MAIN CONTENT ═══ */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-24">
        {/* ─── INTRO TEXT + IMAGE GALLERY ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image Gallery with Overlap */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Large main image - spans 2 rows */}
              <div
                className="col-span-2 relative  overflow-hidden "
                style={{ aspectRatio: "16/10" }}
              >
                <img
                  src="/images/about/img1.jpg"
                  alt="COE Indutech Main Facility"
                  className="w-full h-full object-contain"
                />
              </div>
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
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white transition-all duration-300"
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

            <div className="space-y-3">
              {missionItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-slate-50"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: grad.wash }}
                    >
                      <Icon
                        className="w-4 h-4"
                        style={{ color: brandColors.accent }}
                      />
                    </div>
                    <p className="text-sm font-semibold text-slate-700">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* ─── WHY CHOOSE US SECTION ─── */}
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
          <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed">
            With decades of experience, state-of-the-art facilities, and a
            dedicated team of experts, we ensure the highest quality in every
            project we undertake.
          </p>
        </motion.div>

        {/* ─── DETAILED INFO CARDS ─── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Industrial Textiles Card */}
          <InfoCard
            icon={Building2}
            title="Industrial Textiles (INDUTECH)"
            subtitle="Technical Solutions for Manufacturing"
            gradient={grad.subtle}
            highlights={[
              "Textile products for manufacturing operations",
              "Filters, conveyor belts, abrasive substrates",
              "Electrical components and cable insulation",
              "12% annual growth rate expected",
            ]}
            description="The term Industrial Textiles refers to a subgroup of Technical Textiles, specifically those used in manufacturing operations or incorporated into industrial products. The rate of growth for Industrial Textile Products is expected to be over 12% per annum, presenting significant opportunities for new entrants."
          />

          {/* Home Textiles Card */}
          <InfoCard
            icon={TrendingUp}
            title="Home Textiles (HOMETECH)"
            subtitle="Consumer & Domestic Applications"
            gradient={`linear-gradient(135deg, #10b981, #059669)`}
            highlights={[
              "Interior decoration and furniture",
              "Carpeting and floor coverings",
              "Fireproofing and thermal insulation",
              "5-6.4% CAGR through 2030",
            ]}
            description="Hometech comprises textile components used in domestic environments including interior decoration, furniture, carpeting, and protection. Fiberfil and pillow components together constitute over 50% of usage, followed by blinds, carpet backing, and other applications. Expected CAGR of 5-6.4% through 2030."
          />
        </motion.div>
      </main>
    </div>
  );
}

/* ── Helper Components ────────────────────────────────────────── */
function InfoCard({
  icon: Icon,
  title,
  subtitle,
  gradient,
  highlights,
  description,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-3xl bg-white p-8 border-2 shadow-lg transition-all duration-300"
      style={{ borderColor: borderColor() }}
    >
      {/* Top gradient bar */}
      <div
        className="absolute top-0 left-0 w-full h-1.5 rounded-b-full"
        style={{
          background: gradient,
          transform: "scaleX(0.3)",
          transformOrigin: "left",
          transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1)",
        }}
        ref={(el) => {
          if (!el) return;
          const parent = el.parentElement;
          parent.onmouseenter = () => {
            el.style.transform = "scaleX(1)";
          };
          parent.onmouseleave = () => {
            el.style.transform = "scaleX(0.3)";
          };
        }}
      />

      {/* Icon badge */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 shadow-lg"
        style={{ background: gradient }}
      >
        <Icon className="w-7 h-7 text-white" />
      </div>

      {/* Header */}
      <h3
        className="text-xl font-black mb-1"
        style={{ color: brandColors.primary }}
      >
        {title}
      </h3>
      <p className="text-base font-semibold text-slate-500 mb-6">{subtitle}</p>

      {/* Highlights */}
      <div className="space-y-2 mb-6">
        {highlights.map((highlight, i) => (
          <div key={i} className="flex items-start gap-2">
            <div
              className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
              style={{ background: brandColors.accent }}
            />
            <span className="text-sm font-semibold text-slate-700">
              {highlight}
            </span>
          </div>
        ))}
      </div>

      {/* Description */}
      <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}
