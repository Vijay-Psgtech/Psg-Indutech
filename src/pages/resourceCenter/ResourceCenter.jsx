import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useInView } from "framer-motion";
import { Mail, User, CheckCircle, ChevronDown, ChevronUp, ArrowUpRight, Sparkles } from "lucide-react";
import {
  resourceImages,
  resourceItems,
} from "../../components/data/ResourceCenterData.js";
import { grad, gradText } from "../../components/common/brand.js";
import Eyebrow from "../../components/common/Eyebrow";
import {
  Book,
  FileText,
  Archive,
  Building2,
  Factory,
  BadgeCheck,
  Percent,
  BookOpen,
  Lightbulb,
  RefreshCw,
} from "lucide-react";
import usePageTitle from "../../hooks/usePageTitle.jsx";

/* ── Membership Benefits ─────────────────────────────────────────── */
const membershipBenefits = [
  {
    icon: BadgeCheck,
    text: "Technical consultancy, testing & prototype development at concessional charges (up to 10% discount)",
  },
  {
    icon: BookOpen,
    text: "Access to Resource Centre & Library — borrow up to 2 books on a conditional basis",
  },
  {
    icon: Percent,
    text: "25% discount on training programmes, workshops & seminars organized by the COE",
  },
  {
    icon: Lightbulb,
    text: "Guidance & support for registration of Technical Textile products with the Ministry of Textiles",
  },
  {
    icon: RefreshCw,
    text: "One-year free renewal of associateship for members who introduce a new entrepreneur to the scheme",
  },
];

const membershipTiers = [
  {
    id: "msme",
    type: "MSME",
    icon: Building2,
    color: "from-indigo-500 to-blue-600",
    lightColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
    accentColor: "text-indigo-700",
    badgeColor: "bg-indigo-100 text-indigo-700",
    membership5yr: "₹10,000",
    renewalPerYear: "₹1,000",
    note: "GST 18% extra",
    glowColor: "rgba(99,102,241,0.15)",
  },
  {
    id: "large",
    type: "Large Scale Industry",
    icon: Factory,
    color: "from-violet-500 to-purple-600",
    lightColor: "bg-violet-50",
    borderColor: "border-violet-200",
    accentColor: "text-violet-700",
    badgeColor: "bg-violet-100 text-violet-700",
    membership5yr: "₹25,000",
    renewalPerYear: "₹2,500",
    note: "GST 18% extra",
    glowColor: "rgba(139,92,246,0.15)",
  },
];

/* ── Animation Variants ──────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.025,
    y: -6,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

/* ── Floating Orb Background ─────────────────────────────────────── */
const FloatingOrbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
    {[
      { cx: "10%", cy: "15%", r: 320, color: "rgba(99,102,241,0.07)", delay: 0 },
      { cx: "85%", cy: "25%", r: 260, color: "rgba(139,92,246,0.07)", delay: 2 },
      { cx: "60%", cy: "70%", r: 200, color: "rgba(59,130,246,0.06)", delay: 4 },
      { cx: "20%", cy: "80%", r: 180, color: "rgba(99,102,241,0.05)", delay: 1 },
    ].map((orb, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          left: orb.cx,
          top: orb.cy,
          width: orb.r,
          height: orb.r,
          background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 8 + i * 2,
          repeat: Infinity,
          delay: orb.delay,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

/* ── Animated Counter ────────────────────────────────────────────── */
const AnimatedCounter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = numericValue / 40;
    const timer = setInterval(() => {
      start += step;
      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);
    return () => clearInterval(timer);
  }, [isInView, numericValue]);

  const prefix = value.match(/^[^0-9]*/)?.[0] || "";
  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
};

/* ── Shimmer Skeleton ────────────────────────────────────────────── */
const shimmer = {
  animate: {
    backgroundPosition: ["200% 0", "-200% 0"],
    transition: { duration: 2, repeat: Infinity, ease: "linear" },
  },
};

/* ── Section Divider ─────────────────────────────────────────────── */
const SectionDivider = () => (
  <div className="flex items-center gap-4 my-8 max-w-6xl mx-auto">
    <div className="flex-1 h-px bg-linear-to-r from-transparent via-indigo-200 to-transparent" />
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      className="w-6 h-6 rounded-full border-2 border-indigo-300 border-t-indigo-600 shrink-0"
    />
    <div className="flex-1 h-px bg-linear-to-r from-transparent via-indigo-200 to-transparent" />
  </div>
);

/* ── Magnetic Button ─────────────────────────────────────────────── */
const MagneticButton = ({ children, className, ...props }) => {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setPos({ x: (e.clientX - cx) * 0.3, y: (e.clientY - cy) * 0.3 });
  };
  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  return (
    <motion.a
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={className}
      {...props}
    >
      {children}
    </motion.a>
  );
};

/* ── Parallax Image ──────────────────────────────────────────────── */
const ParallaxImage = ({ src, alt, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500 bg-white group relative"
    >
      <motion.div style={{ y }} className="will-change-transform">
        <img
          src={src}
          alt={alt}
          className="w-full h-40 object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
      </motion.div>
      {/* Overlay shimmer on hover */}
      <div className="absolute inset-0 bg-linear-to-t from-indigo-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-white/90 backdrop-blur-sm rounded-full p-1.5 shadow">
          <ArrowUpRight className="w-4 h-4 text-indigo-600" />
        </div>
      </div>
    </motion.div>
  );
};

/* ── Resource Card ───────────────────────────────────────────────── */
const ResourceCard = ({ item, index }) => {
  const icon = item.title.toLowerCase().includes("book") ? (
    <Book className="w-6 h-6" />
  ) : item.title.toLowerCase().includes("journal") ? (
    <FileText className="w-6 h-6" />
  ) : (
    <Archive className="w-6 h-6" />
  );

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.96 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { type: "spring", stiffness: 60, delay: index * 0.08 },
        },
      }}
      whileHover="hover"
      initial="rest"
      animate="rest"
      className="group relative bg-white rounded-2xl p-5 shadow-sm border border-slate-100 overflow-hidden cursor-pointer"
      style={{ isolation: "isolate" }}
    >
      {/* Animated background blob */}
      <motion.div
        className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}
      />

      {/* Corner accent */}
      <motion.div
        className="absolute top-0 right-0 w-28 h-28 bg-indigo-50 rounded-bl-full -mr-10 -mt-10"
        initial={{ scale: 1, opacity: 0.5 }}
        whileHover={{ scale: 1.6, opacity: 0.8 }}
        transition={{ duration: 0.5 }}
      />

      {/* Hover shadow glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          boxShadow: "0 20px 60px rgba(99,102,241,0.15)",
          pointerEvents: "none",
        }}
      />

      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          className={`w-13 h-13 rounded-xl flex items-center justify-center mb-3 text-white shadow-lg bg-linear-to-br ${item.color}`}
          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
          transition={{ duration: 0.4 }}
          style={{ width: 52, height: 52 }}
        >
          {icon}
        </motion.div>

        <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-indigo-700 transition-colors line-clamp-2 min-h-12 flex items-center">
          {item.title}
        </h3>

        <a
          href={item.doc}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 mt-3 group/link"
        >
          View List
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ArrowUpRight className="w-4 h-4" />
          </motion.span>
        </a>
      </div>
    </motion.div>
  );
};

/* ── Membership Tier Card ────────────────────────────────────────── */
const TierCard = ({ tier }) => {
  const Icon = tier.icon;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, transition: { type: "spring", stiffness: 200, damping: 18 } }}
      className={`relative bg-white rounded-3xl border-2 ${tier.borderColor} shadow-md overflow-hidden`}
      style={{
        boxShadow: `0 0 0 1px transparent`,
      }}
    >
      {/* Animated glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          boxShadow: `0 0 60px 20px ${tier.glowColor}`,
        }}
      />

      {/* Top gradient band with animated shimmer */}
      <div className={`h-2.5 w-full bg-linear-to-r ${tier.color} relative overflow-hidden`}>
        <motion.div
          className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent"
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
        />
      </div>

      <div className="p-6">
        {/* Icon + Title */}
        <div className="flex items-center gap-3 mb-4">
          <motion.div
            className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-xl bg-linear-to-br ${tier.color} relative overflow-hidden`}
            whileHover={{ rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.4 }}
          >
            <Icon className="w-8 h-8 relative z-10" />
            <motion.div
              className="absolute inset-0 bg-white/20"
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          <div className="text-left">
            <h3 className="text-xl font-black text-slate-900">{tier.type}</h3>
            <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${tier.badgeColor} tracking-wide`}>
              {tier.note}
            </span>
          </div>
        </div>

        {/* Pricing with animated counters */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          {[
            { label: "5-Year Membership", val: tier.membership5yr },
            { label: "Annual Renewal", val: tier.renewalPerYear },
          ].map((item, i) => (
            <motion.div
              key={i}
              className={`${tier.lightColor} rounded-2xl p-3 text-center border border-transparent hover:border-indigo-200 transition-colors`}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-xs font-semibold text-slate-500 mb-1">{item.label}</p>
              <p className={`text-xl font-black ${tier.accentColor}`}>
                <AnimatedCounter value={item.val} />
              </p>
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <div className={tier.id === "large" ? `${tier.lightColor} rounded-2xl p-4` : ""}>
          {tier.id === "large" && (
            <p className="text-xs font-bold text-slate-700 mb-2">All membership benefits apply:</p>
          )}
          <div className="space-y-1.5">
            {membershipBenefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
                className="flex items-start gap-2"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.4 }}
                  className="shrink-0 mt-0.5"
                >
                  <CheckCircle className={`w-3.5 h-3.5 ${tier.accentColor}`} />
                </motion.div>
                <span className={`${tier.id === "large" ? "text-xs" : "text-xs"} text-slate-600 text-left leading-snug`}>
                  {benefit.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ══════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════════════════════════ */
const ResourceCenterCapabilities = () => {
  usePageTitle("Resource Center");
  const [showForm, setShowForm] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section className="relative min-h-screen py-16 px-6 overflow-hidden bg-linear-to-b from-indigo-50/80 via-white to-indigo-50/60">
      {/* Floating background orbs */}
      <FloatingOrbs />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "63px 64px",
        }}
      />

      <div className="max-w-3xl mx-auto relative z-22">

        {/* ── Hero Title ── */}
        <motion.div
          ref={heroRef}
          style={{ y: heroY, opacity: heroOpacity }}
          className="text-center mb-7"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Eyebrow>Resource Center</Eyebrow>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight text-slate-900 mt-5"
          >
            Resource{" "}
            <span
              style={gradText}
              className="relative inline-block"
            >
              Center
              {/* Animated underline */}
              <motion.div
                className="absolute -bottom-2 left-0 h-1 rounded-full bg-linear-to-r from-indigo-500 to-violet-500"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              />
            </span>{" "}
            Capabilities
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-4 text-base sm:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed"
          >
            COE Indutech's Resource Center houses a rich collection of books,
            journals, and industry standards for technical textiles. Open to
            researchers and the public — simply click to view the PDF.
          </motion.p>

          {/* Decorative dots */}
          <motion.div
            className="flex justify-center gap-2 mt-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-indigo-400"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* ── Resource Grid ── */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-4xl mx-auto mb-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          {resourceItems.map((item, idx) => (
            <ResourceCard key={idx} item={item} index={idx} />
          ))}
        </motion.div>

        {/* ── Photo Gallery ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 max-w-6xl mx-auto mb-8"
        >
          {resourceImages.map((img, index) => (
            <ParallaxImage
              key={index}
              src={img}
              alt={`Resource center ${index + 1}`}
              index={index}
            />
          ))}
        </motion.div>

        {/* ── Library Membership Fee ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-4"
        >
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative overflow-hidden bg-amber-50 border-l-4 border-amber-400 p-5 rounded-xl"
          >
            <motion.div
              className="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-full -mr-12 -mt-12"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <p className="font-bold text-amber-900 text-base">Library Membership Fee</p>
              </div>
              <p className="text-xs text-amber-800 leading-relaxed">
                A life-time membership fee of{" "}
                <strong className="text-amber-900 text-sm">₹500</strong> is applicable for
                utilizing the PSGTECHS COE INDUTECH Resource Center facility. Payment should be
                made via DD in favour of{" "}
                <em className="font-semibold">"coeindutech psgct"</em>, payable at Coimbatore.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <SectionDivider />

        {/* ════════════════════════════════════════════════════════════
            INDUSTRIAL ASSOCIATE MEMBERSHIP
            ════════════════════════════════════════════════════════════ */}
        <div className="max-w-6xl mx-auto mb-12">

          {/* Section Header */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-3"
            >
              <Building2 className="w-3.5 h-3.5" />
              Industry Associateship Scheme
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-black text-slate-900 mb-3 leading-tight"
            >
              Industrial Associate{" "}
              <span className="relative">
                Membership
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-linear-to-r from-indigo-400 to-violet-400 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                />
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-slate-500 max-w-2xl mx-auto text-sm leading-relaxed"
            >
              A Centre of Excellence on{" "}
              <strong className="text-slate-700">Industrial Textiles and Home Textiles</strong> at
              PSG College of Technology, sponsored by the Ministry of Textiles, Government of India.
            </motion.p>
          </motion.div>

          {/* Membership Tier Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
            {membershipTiers.map((tier) => (
              <TierCard key={tier.id} tier={tier} />
            ))}
          </div>

          {/* Payment Info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-linear-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-3xl p-5 mb-5 max-w-3xl mx-auto relative overflow-hidden"
          >
            <motion.div
              className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full opacity-50"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2 text-base relative">
              <BadgeCheck className="w-5 h-5 text-blue-600" />
              Payment Instructions
            </h4>
            <ul className="space-y-1.5 relative">
              {[
                <>Payment via DD in favour of <strong>"PSG INDUSTRIAL INSTITUTE"</strong>, payable at Coimbatore</>,
                <>GST @ 18% is applicable extra on all membership charges</>,
                <>Enclose: GST certificate, 2 passport photos, self-declaration certificate</>,
                <>Copy of industry registration certificate must be submitted with the application</>,
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-2 text-xs text-blue-800"
                >
                  <motion.div
                    className="w-4 h-4 rounded-full bg-blue-200 flex items-center justify-center shrink-0 mt-0.5 text-blue-700 font-bold text-xs"
                    whileHover={{ scale: 1.2, backgroundColor: "#3b82f6", color: "#fff" }}
                  >
                    {i + 1}
                  </motion.div>
                  <span className="leading-snug">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Application Form Toggle */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <motion.button
              onClick={() => setShowForm(!showForm)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full flex items-center justify-between px-6 py-4 rounded-2xl bg-white border-2 border-indigo-200 shadow-md hover:shadow-lg hover:border-indigo-400 transition-all duration-300 group"
            >
              <span className="font-bold text-slate-800 text-base group-hover:text-indigo-700 transition-colors">
                Application for Industrial Associate Membership
              </span>
              <motion.div
                animate={{ rotate: showForm ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <ChevronDown className="w-5 h-5 text-indigo-600" />
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {showForm && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: -10 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -10 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="bg-white border border-indigo-100 rounded-3xl shadow-xl mt-2 p-6 text-left">
                    <div className="space-y-4">

                      {/* Industry Type */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.05 }}
                      >
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                          Type of Industry *
                        </label>
                        <div className="flex gap-4">
                          {["MSME", "Large Scale"].map((opt) => (
                            <label
                              key={opt}
                              className="flex items-center gap-2 cursor-pointer group/radio"
                            >
                              <input
                                type="radio"
                                name="industryType"
                                value={opt}
                                className="accent-indigo-600 w-4 h-4"
                              />
                              <span className="text-xs font-semibold text-slate-700 group-hover/radio:text-indigo-700 transition-colors">
                                {opt}
                              </span>
                            </label>
                          ))}
                        </div>
                      </motion.div>

                      {/* Text fields */}
                      {[
                        { label: "Name of the Industry *", placeholder: "Enter industry name", type: "text", delay: 0.1 },
                      ].map((field, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: field.delay }}
                        >
                          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                            {field.label}
                          </label>
                          <input
                            type={field.type}
                            placeholder={field.placeholder}
                            className="w-full border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 transition-all bg-slate-50 focus:bg-white"
                          />
                        </motion.div>
                      ))}

                      {/* Address */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                      >
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                          Address *
                        </label>
                        <textarea
                          rows={2}
                          placeholder="Full address"
                          className="w-full border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 transition-all resize-none bg-slate-50 focus:bg-white"
                        />
                      </motion.div>

                      {/* Phone & Mobile */}
                      <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {[
                          { label: "Telephone / Fax No.", placeholder: "044-XXXXXXXX" },
                          { label: "Mobile Number *", placeholder: "+91 XXXXX XXXXX" },
                        ].map((f, i) => (
                          <div key={i}>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                              {f.label}
                            </label>
                            <input
                              type="tel"
                              placeholder={f.placeholder}
                              className="w-full border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 transition-all bg-slate-50 focus:bg-white"
                            />
                          </div>
                        ))}
                      </motion.div>

                      {/* Contact Person */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                      >
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                          Contact Person with Designation *
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Mr. John Doe — Manager"
                          className="w-full border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 transition-all bg-slate-50 focus:bg-white"
                        />
                      </motion.div>

                      {/* Activity */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                          Major Area of Activity / Products Manufactured *
                        </label>
                        <textarea
                          rows={2}
                          placeholder="Brief description of products / activities"
                          className="w-full border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 transition-all resize-none bg-slate-50 focus:bg-white"
                        />
                      </motion.div>

                      {/* Library Authorized Persons */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 }}
                      >
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                          Persons Authorized to Use Library
                        </label>
                        <div className="space-y-1.5">
                          {["Person 1 name", "Person 2 name"].map((ph, i) => (
                            <input
                              key={i}
                              type="text"
                              placeholder={ph}
                              className="w-full border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 transition-all bg-slate-50 focus:bg-white"
                            />
                          ))}
                        </div>
                      </motion.div>

                      {/* DD Details */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-indigo-50 rounded-xl p-4"
                      >
                        <p className="text-xs font-bold text-indigo-700 uppercase tracking-wider mb-3">
                          DD Details
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {[
                            { label: "DD Number", placeholder: "DD No.", type: "text" },
                            { label: "DD Date", placeholder: "", type: "date" },
                          ].map((f, i) => (
                            <div key={i}>
                              <label className="block text-xs font-semibold text-slate-500 mb-1">
                                {f.label}
                              </label>
                              <input
                                type={f.type}
                                placeholder={f.placeholder}
                                className="w-full border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 transition-all bg-white"
                              />
                            </div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Enclosures note */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45 }}
                        className="bg-amber-50 border-l-4 border-amber-400 p-3 rounded text-amber-900 text-xs"
                      >
                        <strong>Enclosures required:</strong> GST certificate, 2 passport-size photos,
                        self-declaration certificate, copy of industry registration certificate.
                      </motion.div>

                      {/* Submit */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center justify-between pt-2"
                      >
                        <p className="text-xs text-slate-400">* Required fields</p>
                        <MagneticButton
                          href="mailto:Admin.int@psgtech.ac.in?subject=Industrial Associate Membership Application"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          Submit via Email
                        </MagneticButton>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* ── Contact Info ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="pt-2 max-w-3xl mx-auto"
        >
          <motion.div
            whileHover={{ y: -4, boxShadow: "0 30px 80px rgba(99,102,241,0.15)" }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="bg-white rounded-3xl p-6 shadow-lg border border-indigo-50 relative overflow-hidden"
          >
            {/* Decorative bg element */}
            <div className="absolute inset-0 bg-linear-to-br from-indigo-50/50 via-transparent to-violet-50/30 rounded-3xl" />
            <motion.div
              className="absolute -bottom-8 -right-8 w-32 h-32 bg-indigo-100 rounded-full"
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative flex flex-col items-center space-y-3">
              <motion.div
                className="w-14 h-14 rounded-xl bg-indigo-100 flex items-center justify-center"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.4 }}
              >
                <User className="w-7 h-7 text-indigo-600" />
              </motion.div>

              <h2 className="text-xl font-black text-slate-900">
                Contact Resource Center
              </h2>
              <p className="text-center text-slate-500 text-xs leading-relaxed max-w-sm">
                For enquiries regarding membership or access, please reach out to our admin team.
              </p>

              <MagneticButton
                href="mailto:Admin.int@psgtech.ac.in"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 font-semibold text-xs"
              >
                <Mail className="w-4 h-4" />
                Admin.int@psgtech.ac.in
              </MagneticButton>

              <div className="flex items-center gap-2 text-xs text-slate-500">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span>
                  <span className="font-semibold text-slate-700">Contact Person:</span>{" "}
                  Mr. V. Muthu Kumar — Admin
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default ResourceCenterCapabilities;