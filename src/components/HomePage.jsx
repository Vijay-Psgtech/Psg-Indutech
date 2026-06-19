import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";

import HeroBanner from "./sections/HeroBanner.jsx";
import FixedProductBar from "./sections/FixedproductBar.jsx";
import AboutSection from "./sections/AboutSection.jsx";
import VisionSection from "./sections/VisionSection.jsx";
import MissionHoneyComb from "./sections/Mission.jsx";
import WhyChooseUs from "./sections/WhyChooseUs.jsx";
import ProductModal from "././Productmodal.jsx";
import usePageTitle from "../hooks/usePageTitle.jsx";

// const PRODUCT_SHOWCASE_IMAGE = "/images/popup/popup.png";

/* ─────────────────────────────────────────────────────────────────
   FLOATING PARTICLES SYSTEM — Trending animated background
   ───────────────────────────────────────────────────────────────── */
const FloatingParticles = () => {
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    delay: Math.random() * 2,
    duration: 8 + Math.random() * 4,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 2 + Math.random() * 4,
    opacity: 0.3 + Math.random() * 0.4,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none -z-10">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-linear-to-br from-indigo-400 to-violet-400"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, 20, 0],
            opacity: [p.opacity * 0.5, p.opacity, p.opacity * 0.5],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────
   SCROLL PROGRESS BAR — Enhanced with glow effect
   ───────────────────────────────────────────────────────────────── */
const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <>
      <motion.div
        style={{ scaleX, transformOrigin: "left" }}
        className="fixed top-0 left-0 right-0 h-1 z-9999 bg-linear-to-r from-indigo-500 via-violet-500 to-blue-500"
      />
      <motion.div
        style={{ scaleX, transformOrigin: "left" }}
        className="fixed top-0 left-0 right-0 h-1 z-9998 bg-linear-to-r from-indigo-500 via-violet-500 to-blue-500 blur-xl opacity-50"
      />
    </>
  );
};

/* ─────────────────────────────────────────────────────────────────
   MAGNETIC BUTTON WRAPPER — Modern hover effect
   ───────────────────────────────────────────────────────────────── */
const MagneticButton = ({ children, href, target, className = "" }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setPosition({
      x: x * 0.25,
      y: y * 0.25,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const Tag = href ? "a" : "button";

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={position}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="inline-block"
    >
      <Tag href={href} target={target} className={className}>
        {children}
      </Tag>
    </motion.div>
  );
};

/* ─────────────────────────────────────────────────────────────────
   FLOATING NAV DOTS — Enhanced with blur effect
   ───────────────────────────────────────────────────────────────── */
const NAV_SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "vision", label: "Vision" },
  { id: "mission", label: "Mission" },
  { id: "why", label: "Why Us" },
];

const FloatingNavDots = ({ activeSection }) => (
  <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-4 hidden lg:flex">
    {NAV_SECTIONS.map((sec, idx) => {
      const isActive = activeSection === sec.id;
      return (
        <motion.div
          key={sec.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.1 }}
        >
          <motion.a
            href={`#${sec.id}`}
            title={sec.label}
            animate={{
              scale: isActive ? 1.2 : 0.8,
              opacity: isActive ? 1 : 0.5,
            }}
            whileHover={{ scale: 1.5, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative flex items-center justify-end gap-3 group"
          >
            <span className="absolute right-8 bg-white/80 backdrop-blur-md text-slate-700 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/20">
              {sec.label}
            </span>
            <motion.div
              className={`rounded-full transition-all duration-300 ${isActive
                ? "w-3.5 h-3.5 bg-indigo-600 shadow-[0_0_16px_rgba(99,102,241,0.8)]"
                : "w-2.5 h-2.5 bg-slate-400"
              }`}
            />
          </motion.a>
        </motion.div>
      );
    })}
  </div>
);

/* ─────────────────────────────────────────────────────────────────
   ENHANCED BACKGROUND — Animated mesh gradient with parallax
   ───────────────────────────────────────────────────────────────── */
const MeshBackground = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);

  const orbs = [
    { x: "5%", y: "8%", size: 500, color: "rgba(99,102,241,0.06)", dur: 12, delay: 0 },
    { x: "80%", y: "15%", size: 400, color: "rgba(139,92,246,0.05)", dur: 15, delay: 3 },
    { x: "50%", y: "50%", size: 600, color: "rgba(59,130,246,0.04)", dur: 18, delay: 6 },
    { x: "20%", y: "75%", size: 350, color: "rgba(99,102,241,0.05)", dur: 10, delay: 1 },
    { x: "85%", y: "80%", size: 450, color: "rgba(167,139,250,0.04)", dur: 14, delay: 4 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10" aria-hidden>
      {/* Parallax grid background */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0"
        aria-hidden
      >
        <div
          style={{
            backgroundImage: `radial-gradient(circle, rgba(99,102,241,0.12) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
          }}
          className="w-full h-full"
        />
      </motion.div>

      {/* Animated orbs */}
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: orb.x,
            top: orb.y,
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            transform: "translate(-50%, -50%)",
            y: i % 2 === 0 ? y1 : y2,
          }}
          animate={{
            scale: [1, 1.2, 0.95, 1],
            x: [0, 30, -20, 0],
            y: [0, -20, 15, 0],
          }}
          transition={{
            duration: orb.dur,
            repeat: Infinity,
            delay: orb.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────
   ENHANCED SECTION REVEAL — Blur-in effect
   ───────────────────────────────────────────────────────────────── */
const SectionReveal = ({ id, children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "start 0.2"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const blur = useTransform(scrollYProgress, [0, 0.5], [10, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [30, 0]);

  return (
    <motion.section
      ref={ref}
      id={id}
      style={{ opacity, filter: blur.get() ? `blur(${blur}px)` : "blur(0px)" }}
      className={`relative ${className}`}
    >
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </motion.section>
  );
};

/* ─────────────────────────────────────────────────────────────────
   ENHANCED WAVE DIVIDER — Smooth morphing waves
   ───────────────────────────────────────────────────────────────── */
const WaveDivider = ({ flip = false }) => (
  <div className={`relative h-24 overflow-hidden pointer-events-none ${flip ? "scale-y-[-1]" : ""}`}>
    <svg
      viewBox="0 0 1440 100"
      className="absolute bottom-0 w-full"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M0,50 C240,100 480,0 720,50 C960,100 1200,0 1440,50 L1440,100 L0,100 Z"
        fill="url(#waveGradient)"
        animate={{
          d: [
            "M0,50 C240,100 480,0 720,50 C960,100 1200,0 1440,50 L1440,100 L0,100 Z",
            "M0,30 C240,80 480,20 720,30 C960,30 1200,80 1440,30 L1440,100 L0,100 Z",
            "M0,50 C240,100 480,0 720,50 C960,100 1200,0 1440,50 L1440,100 L0,100 Z",
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(99,102,241,0.08)" />
          <stop offset="100%" stopColor="rgba(99,102,241,0)" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

/* ─────────────────────────────────────────────────────────────────
   SCROLL TO TOP BUTTON — Enhanced with glow
   ───────────────────────────────────────────────────────────────── */
const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(99,102,241,0.6)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-6 z-50 w-12 h-12 rounded-full bg-linear-to-br from-indigo-500 to-violet-600 text-white shadow-xl flex items-center justify-center hover:shadow-2xl active:scale-95 transition-all"
          aria-label="Scroll to top"
        >
          <motion.svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ y: [2, -2, 2] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <polyline points="18 15 12 9 6 15" />
          </motion.svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

/* ─────────────────────────────────────────────────────────────────
   SECTION STRIPE — Enhanced with gradient
   ───────────────────────────────────────────────────────────────── */
const SectionStripe = ({ label }) => (
  <motion.div
    initial={{ opacity: 0, scaleX: 0 }}
    whileInView={{ opacity: 1, scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    className="relative flex items-center gap-5 max-w-7xl mx-auto px-6 py-3"
    style={{ transformOrigin: "left" }}
  >
    <motion.div className="flex-1 h-px bg-linear-to-r from-indigo-200 via-violet-200 to-transparent" />
    {label && (
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-[10px] font-black uppercase tracking-[0.25em] text-indigo-500 shrink-0"
      >
        {label}
      </motion.span>
    )}
    <motion.div className="flex-1 h-px bg-linear-to-l from-indigo-200 via-violet-200 to-transparent" />
  </motion.div>
);

/* ─────────────────────────────────────────────────────────────────
   SECTION BADGE — Numbered indicator with line
   ───────────────────────────────────────────────────────────────── */
const SectionBadge = ({ number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="hidden xl:flex absolute -left-20 top-8 flex-col items-center gap-2 select-none pointer-events-none"
    aria-hidden
  >
    <motion.span
      className="text-sm font-black text-indigo-400 tracking-[0.2em]"
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      {number}
    </motion.span>
    <motion.div
      className="w-0.5 h-12 bg-linear-to-b from-indigo-300 to-transparent"
      animate={{ height: [40, 50, 40] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  </motion.div>
);

/* ─────────────────────────────────────────────────────────────────
   ENHANCED PAGE CURTAIN — Smooth entrance animation
   ───────────────────────────────────────────────────────────────── */
const PageCurtain = () => {
  const [done, setDone] = useState(false);

   return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-99999 flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #0d1440 0%, #1a237e 60%, #1a3a6e 100%)",
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
          <motion.div className="flex flex-col items-center gap-6">
 
            {/* ── Logo mark ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.82, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}
            >
              {/* Logo image */}
              <img
                src="/images/logo.png"
                alt="PSGTech COE INDUTECH"
                style={{ height: 56, width: "auto", objectFit: "contain", filter: "brightness(0) invert(1)" }}
                onError={(e) => {
                  /* Fallback: text logo if image missing */
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
 
              {/* Fallback text logo (hidden unless image fails) */}
              <div
                style={{
                  display: "none",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 2,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", color: "rgba(255,255,255,0.65)", textTransform: "uppercase" }}>
                  PSGTech's
                </span>
                <span style={{ fontSize: 28, fontWeight: 900, letterSpacing: "0.06em", color: "#ffffff", textTransform: "uppercase", lineHeight: 1 }}>
                  COE <span style={{ color: "#00acc1" }}>INDUTECH</span>
                </span>
                <span style={{ fontSize: 9, fontWeight: 500, letterSpacing: "0.12em", color: "rgba(255,255,255,0.45)", textTransform: "uppercase", marginTop: 3 }}>
                  Centre of Excellence for Industrial and Home Textiles
                </span>
              </div>
            </motion.div>
 
            {/* ── Teal progress bar ── */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onAnimationComplete={() => {
                setTimeout(() => setDone(true), 420);
              }}
              style={{
                width: 120,
                height: 2,
                background: "#00acc1",
                borderRadius: 999,
                transformOrigin: "left",
              }}
            />
 
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* ─────────────────────────────────────────────────────────────────
   ACTIVE SECTION TRACKER
   ───────────────────────────────────────────────────────────────── */
function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.3 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, [ids]);

  return active;
}

/* ─────────────────────────────────────────────────────────────────
   STAGGER CONTAINER — For animated list items
   ───────────────────────────────────────────────────────────────── */
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ─────────────────────────────────────────────────────────────────
   MAIN HOMEPAGE COMPONENT
   ───────────────────────────────────────────────────────────────── */
export default function HomePage() {
  const aboutRef = useRef(null);
  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sectionIds = NAV_SECTIONS.map((s) => s.id);
  const activeSection = useActiveSection(sectionIds);

  usePageTitle("Home");

  return (
    <>
      {/* Page entrance animation */}
      <PageCurtain />

      {/* Product showcase modal */}
      {/* <ProductModal imageSrc={PRODUCT_SHOWCASE_IMAGE} delay={1.8} autoOpen={true} /> */}

      {/* Persistent UI elements */}
      <ScrollProgressBar />
      <FloatingNavDots activeSection={activeSection} />
      <ScrollToTopButton />

      {/* Background layers */}
      <FloatingParticles />
      <MeshBackground />

      {/* Main content */}
      <div
        className="relative text-gray-900 bg-transparent"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {/* ── HERO SECTION ── */}
        <motion.div
          id="hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative"
        >
          <HeroBanner onExploreClick={scrollToAbout} />
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white/80 to-transparent pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          />
        </motion.div>

        <WaveDivider />

        {/* ── ABOUT SECTION ── */}
        <div className="relative max-w-7xl mx-auto">
          <SectionBadge number="01" />
        </div>
        <SectionStripe label="Who We Are" />

        <SectionReveal id="about" delay={0}>
          <div ref={aboutRef}>
            <AboutSection refProp={aboutRef} />
          </div>
        </SectionReveal>

        <WaveDivider flip />

        {/* ── VISION SECTION ── */}
        <div className="relative max-w-7xl mx-auto">
          <SectionBadge number="02" />
        </div>
        <SectionStripe label="Our Vision & Mission" />

        <SectionReveal id="vision" delay={0.05}>
          <VisionSection />
        </SectionReveal>

        {/* Diagonal separator */}
        <motion.div
          className="h-16 w-full pointer-events-none"
          style={{
            background: "linear-gradient(170deg, transparent 49.5%, rgba(99,102,241,0.04) 49.5%)",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        {/* ── MISSION SECTION ── */}
        {/* <div className="relative max-w-7xl mx-auto">
          <SectionBadge number="03" />
        </div> */}
        {/* <SectionStripe label="Our Mission" /> */}

        {/* <SectionReveal id="mission" delay={0.05}>
          <MissionHoneyComb />
        </SectionReveal> */}

        <WaveDivider />

        {/* ── WHY CHOOSE US SECTION ── */}
        <div className="relative max-w-7xl mx-auto">
          <SectionBadge number="04" />
        </div>
        <SectionStripe label="Why Us" />

        <SectionReveal id="why" delay={0.05}>
          <WhyChooseUs />
        </SectionReveal>

        {/* Bottom glow effect */}
        <motion.div
          className="h-40 bg-linear-to-t from-indigo-50/80 via-indigo-50/40 to-transparent pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>
    </>
  );
}