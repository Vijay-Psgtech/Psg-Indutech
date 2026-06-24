import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const banners = [
  "/images/banner/img13.jpg",
  "/images/banner/img2.jpg",
  "/images/banner/img3.JPG",
  "/images/banner/img4.JPG",
  "/images/banner/img5.jpg",
];

const HeroBannerModern = ({ onExploreClick }) => {
  const [current, setCurrent] = useState(0);
  const [hoveredDot, setHoveredDot] = useState(null);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    if (!isAutoplay) return;
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % banners.length),
      7000,
    );
    return () => clearInterval(timer);
  }, [isAutoplay]);

  const handleDotClick = (index) => {
    setCurrent(index);
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(true), 10000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const slideVariants = {
    enter: { opacity: 0, scale: 1.06 },
    center: {
      zIndex: 1,
      opacity: 1,
      scale: 1,
      transition: { duration: 1.6, ease: "easeInOut" },
    },
    exit: {
      zIndex: 0,
      opacity: 0,
      scale: 0.97,
      transition: { duration: 1.6, ease: "easeInOut" },
    },
  };

  return (
    <section className="relative w-full h-screen min-h-[600px] max-h-[800px] overflow-hidden bg-slate-950">

      {/* ── Background Image Carousel ── */}
      <div className="absolute inset-0 w-full h-full">
        {banners.map((img, i) => (
          <motion.div
            key={i}
            variants={slideVariants}
            initial="enter"
            animate={current === i ? "center" : "exit"}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={img}
              alt={`Banner slide ${i + 1}`}
              className="w-full h-full object-cover object-center"
              loading={i === 0 ? "eager" : "lazy"}
            />
          </motion.div>
        ))}

        {/* ── Overlays: dark + left-to-right fade ── */}
        {/* Base darkening layer so images never overpower text */}
        <div className="absolute inset-0 bg-slate-950/55" />
        {/* Left-side gradient for text readability */}
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/90 via-slate-950/50 to-transparent" />
        {/* Bottom vignette */}
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent" />
      </div>

      {/* ── Ambient Glow Blobs ── */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(34,211,238,0.12), transparent 70%)" }}
        animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -left-40 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.10), transparent 70%)" }}
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── Main Content ── */}
      <div className="relative z-20 w-full h-full flex items-center">
        <div className="w-full px-6 sm:px-10 lg:px-16 max-w-7xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl space-y-7"
          >

            {/* Eyebrow Badge */}
            {/* <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs font-semibold text-cyan-300 tracking-widest uppercase">
                  PSG Tech — Industrial &amp; Home Textiles
                </span>
              </div>
            </motion.div> */}

            {/* Main Heading */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="font-bold leading-tight tracking-tight">
                {/* "Center of" — plain white, large */}
                <span className="block text-4xl sm:text-5xl lg:text-6xl text-white drop-shadow-lg">
                  Center of
                </span>
                {/* "Excellence" — gradient accent, larger */}
                <span
                  className="block text-5xl sm:text-6xl lg:text-7xl"
                  style={{
                    background: "linear-gradient(90deg, #67e8f9 0%, #38bdf8 40%, #a5f3fc 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    filter: "drop-shadow(0 2px 12px rgba(34,211,238,0.35))",
                  }}
                >
                  Excellence
                </span>
              </h1>
            </motion.div>

            {/* Sub-heading & Body */}
            <motion.div variants={itemVariants} className="space-y-2 max-w-xl">
              <h2 className="text-base sm:text-lg font-extrabold text-white tracking-widest uppercase">
                Industrial &amp; Home Textiles
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium">
                Crafting premium fabrics with innovation, precision, and decades
                of expertise in every thread.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants} className="pt-2">
              <motion.button
                onClick={onExploreClick}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg font-semibold text-base text-white overflow-hidden shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
                  boxShadow: "0 8px 32px rgba(6,182,212,0.35)",
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Collection  
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </span>
                {/* Hover shimmer */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(135deg, #22d3ee, #60a5fa)" }}
                />
              </motion.button>
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* ── Bottom-left: slide counter + progress ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-8 z-30 flex items-center gap-4"
      >
        <div className="text-center">
          <div className="text-2xl font-bold text-cyan-400 tabular-nums">
            {String(current + 1).padStart(2, "0")}
          </div>
          <div className="text-xs text-slate-400 mt-0.5">
            of {String(banners.length).padStart(2, "0")}
          </div>
        </div>
        <div className="hidden sm:block w-28 h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: "linear-gradient(90deg, #22d3ee, #3b82f6)" }}
            animate={{ width: `${((current + 1) / banners.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </motion.div>

      {/* ── Bottom-center: nav dots ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
      >
        <div className="flex gap-3 bg-white/5 backdrop-blur-md rounded-full px-5 py-3 border border-white/10">
          {banners.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => handleDotClick(i)}
              onMouseEnter={() => setHoveredDot(i)}
              onMouseLeave={() => setHoveredDot(null)}
              className="group relative p-2"
              aria-label={`Go to slide ${i + 1}`}
            >
              <motion.div
                animate={{
                  scale: current === i ? 1.4 : hoveredDot === i ? 1.2 : 1,
                }}
                className={`absolute inset-0 rounded-full border-2 transition-colors duration-300 ${
                  current === i ? "border-cyan-400" : "border-white/30"
                }`}
              />
              <motion.div
                animate={{ scale: current === i ? 1.2 : 1, opacity: current === i ? 1 : 0.45 }}
                className="relative w-2 h-2 rounded-full"
                style={{ background: "linear-gradient(135deg, #22d3ee, #3b82f6)" }}
              />
            </motion.button>
          ))}  
        </div>
      </motion.div>

      {/* ── Bottom-right: scroll hint ── */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 right-8 z-30 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
      >
        <span className="text-xs text-slate-400 tracking-widest uppercase font-medium">
          Scroll
        </span>
        <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown className="w-5 h-5 text-cyan-400" />
        </motion.div>
      </motion.div>

      {/* ── Top-right: autoplay toggle ── */}
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        onClick={() => setIsAutoplay(!isAutoplay)}
        className="absolute top-8 right-8 z-30 p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg hover:border-white/25 transition-all"
        aria-label={isAutoplay ? "Pause autoplay" : "Play autoplay"}
      >
        {isAutoplay ? (
          <motion.svg
            className="w-5 h-5 text-cyan-400"
            fill="currentColor"
            viewBox="0 0 24 24"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </motion.svg>
        ) : (
          <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </motion.button>
    </section>
  );
};

export default HeroBannerModern;