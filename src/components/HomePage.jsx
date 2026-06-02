import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";

import HeroBanner from "./sections/HeroBanner.jsx";
import FixedProductBar from "./sections/FixedproductBar.jsx";
import AboutSection from "./sections/AboutSection.jsx";
import VisionSection from "./sections/VisionSection.jsx";
import MissionHoneyComb from "./sections/Mission.jsx";
import WhyChooseUs from "./sections/WhyChooseUs.jsx";
import ProductModal from "././Productmodal.jsx";

// ⬇️ Import your product showcase image
// Replace with your actual image path
const PRODUCT_SHOWCASE_IMAGE = "/images/popup/popup.png"; // Update this path

/* ─────────────────────────────────────────────────────────────────
   SCROLL PROGRESS BAR
   ───────────────────────────────────────────────────────────────── */
const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "left" }}
      className="fixed top-0 left-0 right-0 h-[3px] z-9999 bg-linear-to-r from-indigo-500 via-violet-500 to-blue-500"
    />
  );
};

/* ─────────────────────────────────────────────────────────────────
   FLOATING NAV DOTS (section indicator)
   ───────────────────────────────────────────────────────────────── */
const NAV_SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "vision", label: "Vision" },
  { id: "mission", label: "Mission" },
  { id: "why", label: "Why Us" },
];

const FloatingNavDots = ({ activeSection }) => (
  <div className="fixed right-5 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 lg:flex">
    {NAV_SECTIONS.map((sec) => {
      const isActive = activeSection === sec.id;
      return (
        <motion.a
          key={sec.id}
          href={`#${sec.id}`}
          title={sec.label}
          animate={{
            scale: isActive ? 1 : 0.7,
            opacity: isActive ? 1 : 0.4,
          }}
          whileHover={{ scale: 1.4, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative flex items-center justify-end gap-2 group"
        >
          {/* Label tooltip */}
          <span className="absolute right-6 bg-white text-slate-700 text-xs font-semibold px-2 py-1 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {sec.label}
          </span>
          <div
            className={`rounded-full transition-all duration-300 ${
              isActive
                ? "w-3 h-3 bg-indigo-600 shadow-[0_0_10px_rgba(99,102,241,0.6)]"
                : "w-2 h-2 bg-slate-300"
            }`}
          />
        </motion.a>
      );
    })}
  </div>
);

/* ─────────────────────────────────────────────────────────────────
   BACKGROUND CANVAS — animated mesh gradient
   ───────────────────────────────────────────────────────────────── */
const MeshBackground = () => {
  const orbs = [
    { x: "5%",  y: "8%",  size: 500, color: "rgba(99,102,241,0.06)",  dur: 12, delay: 0 },
    { x: "80%", y: "15%", size: 400, color: "rgba(139,92,246,0.05)",  dur: 15, delay: 3 },
    { x: "50%", y: "50%", size: 600, color: "rgba(59,130,246,0.04)",  dur: 18, delay: 6 },
    { x: "20%", y: "75%", size: 350, color: "rgba(99,102,241,0.05)",  dur: 10, delay: 1 },
    { x: "85%", y: "80%", size: 450, color: "rgba(167,139,250,0.04)", dur: 14, delay: 4 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10" aria-hidden>
      {/* Dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(99,102,241,0.12) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
        }}
      />
      {/* Orbs */}
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
      {/* Noise grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
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
   SECTION WRAPPER — handles reveal + id anchoring
   ───────────────────────────────────────────────────────────────── */
const SectionReveal = ({ id, children, delay = 0, className = "" }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 48 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{
      duration: 0.85,
      delay,
      ease: [0.22, 1, 0.36, 1],
    }}
    className={`relative ${className}`}
  >
    {children}
  </motion.section>
);

/* ─────────────────────────────────────────────────────────────────
   SECTION DIVIDER — animated wave line
   ───────────────────────────────────────────────────────────────── */
const WaveDivider = ({ flip = false }) => (
  <div className={`relative h-20 overflow-hidden pointer-events-none ${flip ? "scale-y-[-1]" : ""}`}>
    <svg
      viewBox="0 0 1440 80"
      className="absolute bottom-0 w-full"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
        fill="rgba(99,102,241,0.04)"
        animate={{ d: [
          "M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z",
          "M0,20 C240,60 480,20 720,20 C960,20 1200,60 1440,20 L1440,80 L0,80 Z",
          "M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z",
        ]}}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  </div>
);

/* ─────────────────────────────────────────────────────────────────
   FLOATING SCROLL-TO-TOP BUTTON
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
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-6 z-50 w-11 h-11 rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-300 flex items-center justify-center hover:bg-indigo-700 active:scale-95 transition-colors"
          aria-label="Scroll to top"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

/* ─────────────────────────────────────────────────────────────────
   SECTION TRANSITION STRIPE — decorative between sections
   ───────────────────────────────────────────────────────────────── */
const SectionStripe = ({ label }) => (
  <motion.div
    initial={{ opacity: 0, scaleX: 0 }}
    whileInView={{ opacity: 1, scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    className="relative flex items-center gap-5 max-w-7xl mx-auto px-6 py-2"
    style={{ transformOrigin: "left" }}
  >
    <motion.div
      className="flex-1 h-px bg-linear-to-r from-indigo-200 via-violet-200 to-transparent"
    />
    {label && (
      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-400 shrink-0">
        {label}
      </span>
    )}
    <motion.div
      className="flex-1 h-px bg-linear-to-l from-indigo-200 via-violet-200 to-transparent"
    />
  </motion.div>
);

/* ─────────────────────────────────────────────────────────────────
   SECTION COUNT BADGE — "01", "02", etc.
   ───────────────────────────────────────────────────────────────── */
const SectionBadge = ({ number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="hidden xl:flex absolute -left-16 top-8 flex-col items-center gap-1.5 select-none pointer-events-none"
    aria-hidden
  >
    <span className="text-[11px] font-black text-indigo-300 tracking-[0.2em]">{number}</span>
    <div className="w-px h-10 bg-linear-to-b from-indigo-200 to-transparent" />
  </motion.div>
);

/* ─────────────────────────────────────────────────────────────────
   PAGE ENTER CURTAIN
   ───────────────────────────────────────────────────────────────── */
const PageCurtain = () => {
  const [done, setDone] = useState(false);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-99999 bg-indigo-600 flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          onAnimationComplete={() => {}}
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            onAnimationComplete={() => setDone(true)}
            className="w-24 h-1 bg-white rounded-full"
            style={{ transformOrigin: "left" }}
          />
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
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
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
   MAIN COMPONENT
   ───────────────────────────────────────────────────────────────── */
export default function HomePage() {
  const aboutRef = useRef(null);
  const scrollToAbout = () => aboutRef.current?.scrollIntoView({ behavior: "smooth" });

  const sectionIds = NAV_SECTIONS.map((s) => s.id);
  const activeSection = useActiveSection(sectionIds);

  return (
    <>
      {/* Page enter curtain */}
      <PageCurtain />

      {/* ⭐ PRODUCT MODAL - Shows on page load */}
      <ProductModal 
        imageSrc={PRODUCT_SHOWCASE_IMAGE} 
        delay={1.5} // Delay before showing (in seconds)
        autoOpen={true} // Set to false to disable auto-open
      />

      {/* Persistent UI */}
      <ScrollProgressBar />
      <FloatingNavDots activeSection={activeSection} />
      <ScrollToTopButton />

      {/* Ambient background mesh */}
      <MeshBackground />

      {/* Page wrapper */}
      <div
        className="relative text-gray-900 bg-transparent"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >

        {/* ── HERO ── */}
        <motion.div
          id="hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="relative"
        >
          <HeroBanner onExploreClick={scrollToAbout} />
          {/* Hero exit fade at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white/60 to-transparent pointer-events-none" />
        </motion.div>

        <WaveDivider />

        {/* ── ABOUT ── */}
        <div className="relative max-w-7xl mx-auto">
          <SectionBadge number="01" />
        </div>
        <SectionStripe label="Who We Are" />

        <SectionReveal id="about" delay={0}>
          <div ref={aboutRef}>
            <AboutSection refProp={aboutRef} />
          </div>
        </SectionReveal>

        {/* ── FIXED PRODUCT BAR ── */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <FixedProductBar />
        </motion.div> */}

        <WaveDivider flip />

        {/* ── VISION ── */}
        <div className="relative max-w-7xl mx-auto">
          <SectionBadge number="02" />
        </div>
        <SectionStripe label="Our Vision" />

        <SectionReveal id="vision" delay={0.05}>
          <VisionSection />
        </SectionReveal>

        {/* Diagonal separator */}
        <div
          className="h-16 w-full pointer-events-none"
          style={{
            background: "linear-gradient(170deg, transparent 49.5%, rgba(99,102,241,0.04) 49.5%)",
          }}
        />

        {/* ── MISSION ── */}
        <div className="relative max-w-7xl mx-auto">
          <SectionBadge number="03" />
        </div>
        <SectionStripe label="Our Mission" />

        <SectionReveal id="mission" delay={0.05}>
          <MissionHoneyComb />
        </SectionReveal>

        <WaveDivider />

        {/* ── WHY CHOOSE US ── */}
        <div className="relative max-w-7xl mx-auto">
          <SectionBadge number="04" />
        </div>
        <SectionStripe label="Why Us" />

        <SectionReveal id="why" delay={0.05}>
          <WhyChooseUs />
        </SectionReveal>

        {/* Bottom page glow */}
        <div className="h-32 bg-linear-to-t from-indigo-50/60 to-transparent pointer-events-none" />
      </div>
    </>
  );
}