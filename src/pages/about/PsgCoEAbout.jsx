import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence, useSpring } from "framer-motion";
import {
  CheckCircle2, ArrowRight, Target, Lightbulb, Users,
  Award, Building2, BookOpen, Zap, ArrowUpRight,
  Globe, Shield, MessageSquare, Factory, Layers,
} from "lucide-react";
import { brandColors, grad, gradText, borderColor } from "../../components/common/brand";
import usePageTitle from "../../hooks/usePageTitle.jsx";

/* ─────────────────────────────────────────────────────────────────
   ANIMATION VARIANTS
   ───────────────────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

/* ─────────────────────────────────────────────────────────────────
   ANIMATED COUNTER
   ───────────────────────────────────────────────────────────────── */
const AnimatedCounter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const numeric = parseInt(value.replace(/\D/g, ""), 10);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = numeric / 50;
    const timer = setInterval(() => {
      start += step;
      if (start >= numeric) { setCount(numeric); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 28);
    return () => clearInterval(timer);
  }, [inView, numeric]);

  const prefix = value.match(/^[^0-9]*/)?.[0] || "";
  return <span ref={ref}>{prefix}{count.toLocaleString("en-IN")}{suffix}</span>;
};

/* ─────────────────────────────────────────────────────────────────
   SAFE IMAGE — shows gradient placeholder if src 404s
   ───────────────────────────────────────────────────────────────── */
const SafeImage = ({ src, alt, className, style, fallbackGradient = "linear-gradient(135deg,#1e3a5f,#0f2027)" }) => {
  const [errored, setErrored] = useState(false);
  return errored ? (
    <div className={className} style={{ ...style, background: fallbackGradient, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 13, fontFamily: "sans-serif" }}>{alt}</span>
    </div>
  ) : (
    <img src={src} alt={alt} className={className} style={style} onError={() => setErrored(true)} />
  );
};

/* ─────────────────────────────────────────────────────────────────
   FLOATING ORB BACKGROUND
   ───────────────────────────────────────────────────────────────── */
const FloatingOrbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
    {[
      { left: "8%",  top: "20%", size: 320, color: "rgba(99,102,241,0.06)", dur: 10 },
      { left: "80%", top: "10%", size: 260, color: "rgba(16,185,129,0.05)", dur: 13 },
      { left: "55%", top: "65%", size: 200, color: "rgba(59,130,246,0.05)", dur: 9  },
    ].map((o, i) => (
      <motion.div key={i}
        className="absolute rounded-full"
        style={{ left: o.left, top: o.top, width: o.size, height: o.size,
          background: `radial-gradient(circle, ${o.color} 0%, transparent 70%)`,
          transform: "translate(-50%,-50%)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: o.dur, repeat: Infinity, ease: "easeInOut", delay: i * 2 }}
      />
    ))}
  </div>
);

/* ─────────────────────────────────────────────────────────────────
   SECTION LABEL
   ───────────────────────────────────────────────────────────────── */
const SectionLabel = ({ icon: Icon, label, color }) => (
  <motion.div
    variants={fadeUp}
    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
    style={{ background: grad.card ?? "#eef2ff", border: `1.5px solid ${borderColor()}` }}
  >
    {Icon && <Icon className="w-3.5 h-3.5" style={{ color: color ?? brandColors.accent }} />}
    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: brandColors.secondary }}>
      {label}
    </span>
  </motion.div>
);

/* ─────────────────────────────────────────────────────────────────
   SHIMMER CARD WRAPPER
   ───────────────────────────────────────────────────────────────── */
const ShimmerCard = ({ children, className = "", style = {} }) => (
  <motion.div
    whileHover={{ y: -5, boxShadow: "0 24px 60px rgba(99,102,241,0.12)" }}
    transition={{ type: "spring", stiffness: 200, damping: 20 }}
    className={`relative overflow-hidden rounded-3xl bg-white shadow-xl border-2 ${className}`}
    style={{ borderColor: borderColor(), ...style }}
  >
    {/* Top shimmer sweep */}
    <motion.div
      className="absolute top-0 left-0 right-0 h-full pointer-events-none"
      style={{ background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.4) 50%, transparent 60%)", zIndex: 20 }}
      animate={{ x: ["-100%", "200%"] }}
      transition={{ duration: 3, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
    />
    {children}
  </motion.div>
);

/* ─────────────────────────────────────────────────────────────────
   STAT CARD
   ───────────────────────────────────────────────────────────────── */
const StatCard = ({ value, label, icon: Icon, color, delay = 0 }) => (
  <motion.div
    variants={scaleIn}
    transition={{ delay }}
    whileHover={{ y: -6, scale: 1.03 }}
    className="relative bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center overflow-hidden group"
  >
    <motion.div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{ background: `radial-gradient(circle at 50% 100%, ${color}10, transparent 70%)` }}
    />
    <div className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md"
      style={{ background: `${color}15` }}>
      <Icon className="w-5 h-5" style={{ color }} />
    </div>
    <p className="text-3xl font-black mb-1" style={{ color: brandColors.primary }}>
      <AnimatedCounter value={value} />
    </p>
    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{label}</p>
  </motion.div>
);

/* ─────────────────────────────────────────────────────────────────
   HIGHLIGHT ROW
   ───────────────────────────────────────────────────────────────── */
const Highlight = ({ text, color = brandColors.accent, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, x: -16 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="flex items-start gap-3 group"
  >
    <motion.div whileHover={{ scale: 1.3, rotate: 360 }} transition={{ duration: 0.4 }}>
      <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color }} />
    </motion.div>
    <span className="text-sm font-semibold text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors">{text}</span>
  </motion.div>
);

/* ─────────────────────────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────────────────────────── */
export default function PsgCoEAbout() {
  usePageTitle("About Us");
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY   = useTransform(heroScroll, [0, 1], ["0%", "30%"]);
  const heroO   = useTransform(heroScroll, [0, 0.8], [1, 0]);

  const visionItems = [
    "To be a dynamic, competitive and world class 'Centre of Excellence' for Industrial Textiles",
    "Research dedicated to the aspirations of the Indian technical textile industry",
  ];

  const missionItems = [
    { icon: BookOpen,  text: "Resource Center",                            color: "#0891b2" },
    { icon: Building2, text: "Pilot Facility",                             color: "#10b981" },
    { icon: Lightbulb, text: "Incubation Center",                          color: "#f59e0b" },
    { icon: Award,     text: "Support BIS for development of test standards", color: "#8b5cf6" },
    { icon: Users,     text: "Training & Workshops",                       color: "#06b6d4" },
    { icon: Zap,       text: "Consultancy",                                color: "#10b981" },
  ];

  const statsData = [
    { value: "20+",  label: "Collaborations",     icon: Globe,        color: "#6366f1" },
    { value: "500+", label: "Projects Completed", icon: CheckCircle2, color: "#10b981" },
    { value: "100%", label: "Quality Certified",  icon: Shield,       color: "#f59e0b" },
    { value: "15+",  label: "Years Experience",   icon: Award,        color: "#ec4899" },
  ];

  return (
    <div className="min-h-screen" style={{ background: "#f8fafc" }}>

      {/* ══════════════════════════════════════════════════════════
          HERO SECTION — parallax + animated text
          ══════════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative h-[72vh] min-h-[540px] w-full overflow-hidden">
        {/* Parallax image */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 w-full h-[115%] -top-[7%]">
          <SafeImage
            src="/images/banner/img5.jpg"
            alt="COE Indutech Banner"
            className="w-full h-full object-cover"
            fallbackGradient="linear-gradient(135deg,#0D1B2E 0%,#1B3A5C 50%,#0D1B2E 100%)"
          />
        </motion.div>

        {/* Layered overlays */}
        <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-900/65 to-slate-900/35" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/50 via-transparent to-transparent" />

        {/* Animated grid overlay */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.015) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Content */}
        <motion.div
          style={{ opacity: heroO }}
          className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center px-6"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl text-white"
          >
            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
              <motion.div
                animate={{ scaleX: [0, 1] }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{ width: 32, height: 2, background: "#29ABE2", borderRadius: 99, transformOrigin: "left" }}
              />
              <p className="uppercase tracking-[0.22em] text-xs font-bold text-cyan-300">
                Centre of Excellence – Industrial & Home Textiles
              </p>
            </motion.div>

            {/* Title */}
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-5">
              About{" "}
              <span style={{ background: "linear-gradient(135deg,#29ABE2,#7dd3fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                COE
              </span>{" "}
              INDUTECH
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg text-white/80 leading-relaxed max-w-xl">
              Advancing research, innovation, testing, and incubation for the
              next generation of Technical Textiles in India.
            </motion.p>

            {/* CTA row */}
            <motion.div variants={fadeUp} className="flex items-center gap-4 mt-8">
              <motion.a
                href="#about-intro"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white shadow-lg"
                style={{ background: "linear-gradient(135deg,#29ABE2,#0891b2)", boxShadow: "0 8px 28px rgba(41,171,226,0.35)" }}
              >
                Explore More <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.04, y: -2 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white border border-white/30 hover:bg-white/10 transition-colors"
              >
                <MessageSquare className="w-4 h-4" /> Contact Us
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40"
        >
          <div className="w-px h-8 bg-linear-to-b from-transparent to-white/40" />
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          MAIN CONTENT
          ══════════════════════════════════════════════════════════ */}
      <main id="about-intro" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 space-y-28">

        {/* ── INTRO + IMAGE GALLERY ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">

          {/* Left: Image Gallery */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4 h-full">
              {/* Main large image */}
              <div className="col-span-2 relative overflow-hidden rounded-2xl shadow-xl group mt-4" style={{ aspectRatio: "21/18" }}>
                <SafeImage
                  src="/images/about/img1.jpg"
                  alt="COE Indutech Main Facility"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  style={{ transition: "transform 0.7s cubic-bezier(0.22,1,0.36,1)" }}
                  fallbackGradient="linear-gradient(135deg,#1e3a5f,#0f2027)"
                />
                {/* <div className="absolute inset-0 bg-linear-to-t from-slate-900/50 via-transparent to-transparent" /> */}
                {/* Hover overlay */}
                {/* <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at 50% 80%, ${brandColors.accent}25, transparent 70%)` }}
                /> */}
              </div>

              {/* Secondary images */}
              
            </div>

            {/* Stats overlay on image grid */}
            {/* <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="absolute bottom-4 left-4 right-4 flex gap-3"
            >
              {[
                { val: "20+", label: "Collaborations", color: brandColors.accent },
                { val: "500+", label: "Projects", color: "#10b981" },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  className="flex-1 bg-white/96 backdrop-blur-md rounded-xl p-4 shadow-xl text-center"
                >
                  <p className="text-2xl font-black" style={{ color: s.color }}>
                    <AnimatedCounter value={s.val} />
                  </p>
                  <p className="text-xs font-semibold text-slate-500 mt-0.5">{s.label}</p>
                </motion.div>
              ))}
            </motion.div> */}
          </motion.div>

          {/* Right: Text */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6 flex flex-col justify-center"
          >
            <SectionLabel icon={Building2} label="About Indutech" />

            <h2 className="text-3xl sm:text-4xl font-black leading-tight" style={{ color: brandColors.primary }}>
              All Services.{" "}
              <span style={gradText}>One Destination.</span>
            </h2>

            <div className="space-y-4 text-slate-600 leading-relaxed text-[15px]">
              <p>
                <strong className="font-bold" style={{ color: brandColors.primary }}>PSGTECHS COE INDUTECH</strong>,
                Center of Excellence for Industrial and Home Textiles, is a project
                sponsored by the Ministry of Textiles, Govt. of India under the
                scheme Technology Mission for Technical Textiles (TMTT). It is
                implemented by the Departments of Textile Technology and
                Automobile Engineering, PSG College of Technology.
              </p>
              <p>
                Located within the PSG campus at Neelambur, Coimbatore, we are
                committed to being a dynamic, competitive, and world-class center
                for developing, manufacturing, and testing new industrial and home
                textiles.
              </p>
              <p>
                We focus on activities to promote Technical Textiles, specifically
                Industrial Textiles and Home Textiles, across India.
              </p>
            </div>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.04, y: -2, boxShadow: `0 12px 32px ${brandColors.accent}45` }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white w-fit shadow-lg"
              style={{ background: grad.subtle, boxShadow: `0 6px 20px ${brandColors.accent}35` }}
            >
              Our Services
              <motion.span initial={{ x: 0 }} whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }}>
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </motion.a>
          </motion.div>
        </div>

        {/* ── STATS ROW ── */}
        {/* <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-5"
        >
          {statsData.map((s, i) => (
            <StatCard key={i} {...s} delay={i * 0.08} />
          ))}
        </motion.div> */}

        {/* ── VISION & MISSION ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Vision */}
          {/* <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <ShimmerCard className="p-8 h-full">
              <div className="absolute top-0 left-0 w-full h-1.5 rounded-b-full" style={{ background: grad.subtle }} />

              <motion.div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-lg"
                style={{ background: grad.subtle }}
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.4 }}
              >
                <Target className="w-7 h-7 text-white" />
              </motion.div>

              <h3 className="text-2xl font-black mb-6" style={{ color: brandColors.primary }}>Our Vision</h3>

              {/* <div className="space-y-4">
                {visionItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <motion.div whileHover={{ scale: 1.3 }} transition={{ type: "spring", stiffness: 400 }}>
                      <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: brandColors.accent }} />
                    </motion.div>
                    <p className="text-sm text-slate-600 leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div> */}
            {/* </ShimmerCard>
          </motion.div> } */}

          {/* Mission */}
          {/* <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <ShimmerCard className="p-8 h-full">
              <div className="absolute top-0 left-0 w-full h-1.5 rounded-b-full"
                style={{ background: "linear-gradient(135deg,#10b981,#059669)" }} />

              <motion.div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-lg"
                style={{ background: "linear-gradient(135deg,#10b981,#059669)" }}
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.4 }}
              >
                <Lightbulb className="w-7 h-7 text-white" />
              </motion.div>

              <h3 className="text-2xl font-black mb-6" style={{ color: brandColors.primary }}>Our Mission</h3>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-2"
              >
                {missionItems.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      whileHover={{ x: 4, backgroundColor: "#f8fafc" }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="flex items-center gap-3 p-3 rounded-xl transition-colors cursor-default"
                    >
                      <motion.div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-sm"
                        style={{ background: `${item.color}18`, color: item.color }}
                        whileHover={{ scale: 1.15, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Icon className="w-4 h-4" />
                      </motion.div>
                      <p className="text-sm font-semibold text-slate-700">{item.text}</p>
                      <motion.div
                        className="ml-auto opacity-0 group-hover:opacity-100"
                        style={{ color: item.color }}
                      >
                        →
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </ShimmerCard>
          </motion.div> */}
        </div>

        {/* ── WHY CHOOSE US HEADER ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center relative"
        >
          {/* <FloatingOrbs /> */}
          {/* <SectionLabel icon={Award} label="Why Choose Us" /> */}
          {/* <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-5xl font-black mb-4"
            style={{ color: brandColors.primary }}
          >
            Highest Quality Standards,{" "}
            <span style={gradText}>Excellence Guaranteed</span>
          </motion.h2> */}
          <motion.div
            variants={fadeUp}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mb-4 h-1 rounded-full"
            style={{ width: 60, background: grad.subtle, transformOrigin: "left" }}
          />
          <motion.p variants={fadeUp} className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            With decades of experience, state-of-the-art facilities, and a
            dedicated team of experts, we ensure the highest quality in every
            project we undertake.
          </motion.p>
        </motion.div>

        {/* ── INDUSTRIAL TEXTILES ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Image */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
              <div className="relative h-[420px] overflow-hidden">
                <SafeImage
                  src="/images/about/industrial.webp"
                  alt="Industrial Textiles"
                  className="w-full h-full object-cover"
                  style={{ transition: "transform 0.8s cubic-bezier(0.22,1,0.36,1)" }}
                  fallbackGradient="linear-gradient(135deg,#1e3a5f 0%,#0f2027 50%,#162032 100%)"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent" />
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at 50% 50%, ${brandColors.accent}20, transparent)` }}
                />
                {/* Hover zoom via CSS */}
                <style>{`.group:hover img { transform: scale(1.07); }`}</style>
              </div>

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="absolute top-4 right-4 bg-white/96 backdrop-blur-md px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
              >
                <Factory className="w-3.5 h-3.5" style={{ color: brandColors.accent }} />
                <p className="text-xs font-black" style={{ color: brandColors.primary }}>INDUTECH</p>
              </motion.div>

              {/* Growth chip */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-4 left-4 bg-white/96 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-lg"
              >
                <p className="text-xs text-slate-500 font-medium">Expected growth</p>
                <p className="text-lg font-black" style={{ color: brandColors.accent }}>12% / year</p>
              </motion.div>
            </div>

            {/* Content */}
            <motion.div variants={fadeRight} className="space-y-6">
              <div>
                <h3 className="text-3xl font-black mb-1" style={{ color: brandColors.primary }}>
                  Industrial Textiles
                </h3>
                <p className="text-base font-semibold text-slate-500">Technical Solutions for Manufacturing</p>
              </div>

              <p className="text-slate-600 leading-relaxed">
                The term Industrial Textiles refers to a subgroup of Technical
                Textiles specifically used in manufacturing operations or incorporated
                into industrial products. The rate of growth for Industrial Textile
                Products is expected to be over 12% per annum, presenting significant
                opportunities for new entrants.
              </p>

              <div className="space-y-3">
                {[
                  "Textile products for manufacturing operations",
                  "Filters, conveyor belts, abrasive substrates",
                  "Electrical components and cable insulation",
                  "12% annual growth rate expected",
                ].map((h, i) => (
                  <Highlight key={i} text={h} color={brandColors.accent} delay={i * 0.08} />
                ))}
              </div>

              <motion.a
                href="/testing"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white shadow-lg"
                style={{ background: grad.subtle, boxShadow: `0 6px 22px ${brandColors.accent}35` }}
              >
                Learn More <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* ── HOME TEXTILES ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Content (left on desktop) */}
            <motion.div variants={fadeLeft} className="space-y-6 lg:order-1 order-2">
              <div>
                <h3 className="text-3xl font-black mb-1" style={{ color: brandColors.primary }}>
                  Home Textiles
                </h3>
                <p className="text-base font-semibold text-slate-500">Consumer & Domestic Applications</p>
              </div>

              <p className="text-slate-600 leading-relaxed">
                Hometech comprises textile components used in domestic
                environments including interior decoration, furniture, carpeting,
                and protection. Fiberfil and pillow components together constitute
                over 50% of usage. Expected CAGR of 5–6.4% through 2030.
              </p>

              <div className="space-y-3">
                {[
                  "Interior decoration and furniture",
                  "Carpeting and floor coverings",
                  "Fireproofing and thermal insulation",
                  "5–6.4% CAGR through 2030",
                ].map((h, i) => (
                  <Highlight key={i} text={h} color="#10b981" delay={i * 0.08} />
                ))}
              </div>

              <motion.a
                href="/training"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white shadow-lg"
                style={{ background: "linear-gradient(135deg,#10b981,#059669)", boxShadow: "0 6px 22px #10b98135" }}
              >
                Learn More <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </motion.div>

            {/* Image (right on desktop) */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group lg:order-2 order-1">
              <div className="relative h-[420px] overflow-hidden">
                <SafeImage
                  src="/images/about/Home.webp"
                  alt="Home Textiles"
                  className="w-full h-full object-cover"
                  style={{ transition: "transform 0.8s cubic-bezier(0.22,1,0.36,1)" }}
                  fallbackGradient="linear-gradient(135deg,#1a2f1a 0%,#0d1f0d 50%,#102010 100%)"
                />
                <div className="absolute inset-0 bg-linear-to-t from-green-900/50 via-transparent to-transparent" />
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "radial-gradient(circle at 50% 50%,rgba(16,185,129,0.18),transparent)" }}
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="absolute top-4 right-4 bg-white/96 backdrop-blur-md px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
              >
                <Layers className="w-3.5 h-3.5" style={{ color: "#10b981" }} />
                <p className="text-xs font-black" style={{ color: "#10b981" }}>HOMETECH</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-4 left-4 bg-white/96 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-lg"
              >
                <p className="text-xs text-slate-500 font-medium">CAGR through 2030</p>
                <p className="text-lg font-black" style={{ color: "#10b981" }}>5–6.4%</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* ── CTA BANNER ── */}
        {/* <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative overflow-hidden rounded-3xl py-16 px-8 text-center"
          style={{ background: "linear-gradient(135deg,rgba(2,44,34,0.97),rgba(15,23,42,0.97))" }}
        > */}
          {/* Glows */}
          {/* {[
            { top: -60, right: -60, color: brandColors.accent },
            { bottom: -60, left: -60, color: brandColors.primary },
          ].map((g, i) => (
            <motion.div key={i}
              animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
              transition={{ duration: 6 + i * 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-80 h-80 rounded-full pointer-events-none"
              style={{ ...g, background: `radial-gradient(circle,${g.color},transparent)`, filter: "blur(50px)" }}
            />
          ))} */}

          {/* Grid texture */}
          {/* <div className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          /> */}

          {/* <div className="relative z-10 max-w-2xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-black text-white mb-4"
            >
              Ready to Innovate Together?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/70 mb-8 leading-relaxed"
            >
              Join us in shaping the future of industrial and home textiles.
              Let's collaborate to drive innovation and create sustainable
              solutions for tomorrow's challenges.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white shadow-xl"
                style={{ background: grad.subtle, boxShadow: `0 8px 28px ${brandColors.accent}30` }}
              >
                Partner With Us
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, y: -2, backgroundColor: "rgba(255,255,255,0.12)" }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white border-2 border-white/25 transition-colors"
              >
                <MessageSquare className="w-4 h-4" /> Get in Touch
              </motion.a>
            </motion.div>
          </div> */}
        {/* </motion.div> */}

      </main>
    </div>
  );
}