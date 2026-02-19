import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { brandColors, grad } from "../common/brand.js";

const banners = [
  "/images/banner/img1.JPG",
  "/images/banner/img2.jpg",
  "/images/banner/img3.JPG",
  "/images/banner/img4.JPG",
  "/images/banner/img5.jpg",
];

const HeroBanner = ({ onExploreClick }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setCurrent((p) => (p + 1) % banners.length),
      5000,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative max-h-[720px] min-h-[500px] flex items-center overflow-hidden font-sans">
      {/* ── Image Stack ── */}
      {banners.map((img, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{
            opacity: current === i ? 1 : 0,
            scale: current === i ? 1 : 1.1,
          }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={img}
            alt={`banner ${i + 1}`}
            className="w-full h-full object-cover"
            fetchPriority={i === 0 ? "high" : "auto"}
            loading={i === 0 ? "eager" : "lazy"}
          />
          {/* Darker overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      ))}

      {/* ── Gradient Overlay ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(20,20,60,0.7) 0%, rgba(20,20,60,0.45) 50%, rgba(20,20,60,0.15) 100%)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-12 h-full flex flex-col justify-center">
        <div className="max-w-3xl space-y-6 md:space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight drop-shadow-lg mb-4">
              Centre of Excellence
              <span className="block text-cyan-400 mt-2">
                Industrial & Home Textiles
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={onExploreClick}
              className="group relative px-8 py-4 bg-white text-indigo-900 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore More
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <a
              href="/contact"
              className="px-8 py-4 rounded-full border border-white/30 text-white font-semibold text-lg hover:bg-white/10 hover:border-white/60 transition-all duration-300 backdrop-blur-sm"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── Indicators ── */}
      <div className="absolute bottom-10 right-4 sm:right-12 z-20 flex flex-col gap-3">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-500 border border-white/50 ${
              current === i
                ? "bg-cyan-400 scale-125"
                : "bg-transparent hover:bg-white/30"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-70"
      >
        <span className="text-white/80 text-[12px] tracking-[0.2em] uppercase">
          Scroll
        </span>
        <ChevronDown className="w-6 h-6 text-white" />
      </motion.div>
    </section>
  );
};

export default HeroBanner;
