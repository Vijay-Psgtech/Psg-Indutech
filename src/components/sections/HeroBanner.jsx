import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { brandColors, grad } from "../common/brand.js";

const banners = [
  "/images/banner/img1.JPG",
  "/images/banner/img2.jpg",
  "/images/banner/img3.JPG",
  "/images/banner/img4.JPG",
  "/images/banner/img5.jpg"
];

const HeroBanner = ({ onExploreClick }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % banners.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden"
      // 🧩 reduced height for better layout balance
      style={{
        height: "80vh",
        maxHeight: 720,
        minHeight: 480,
      }}
    >
      {/* ── image stack ── */}
      {banners.map((img, i) => (
        <motion.img
          key={i}
          src={img}
          alt={`banner ${i + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          fetchpriority={i === 0 ? "high" : "auto"}
          loading={i === 0 ? "eager" : "lazy"} 
          decoding="async"
          animate={{ opacity: current === i ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      ))}

      {/* ── Gradient Overlay ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(20,20,60,0.7) 0%, rgba(20,20,60,0.45) 50%, rgba(20,20,60,0.15) 100%)",
        }}
      />

      {/* ── Left Content ── */}
      <div className="absolute inset-0 flex items-center">
        <div className="relative z-10 max-w-2xl px-8 sm:px-14">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, type: "spring", stiffness: 60 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight"
          >
            Centre of Excellence
            <br />
            <span
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold"
              style={{ color: "rgba(255,255,255,0.9)" }}
            >
              Industrial & Home Textiles
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-6 sm:mt-8"
          >
            <button
              className="group inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-white text-base font-bold tracking-wide transition-all duration-300"
              style={{
                background: grad.subtle,
                boxShadow: `0 4px 18px ${brandColors.accent}40`,
              }}
              onClick={onExploreClick}
            >
              Explore More
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* ── Dot Indicators ── */}
      <div className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="rounded-full transition-all duration-500"
            style={{
              width: current === i ? 28 : 10,
              height: 10,
              background:
                current === i ? brandColors.accent : "rgba(255,255,255,0.45)",
            }}
          />
        ))}
      </div>

      {/* ── Scroll Caret ── */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
      >
        <span className="text-white/50 text-xs font-semibold uppercase tracking-widest">
          Scroll
        </span>
        <ChevronDown className="w-6 h-6 text-white/60" />
      </motion.div>
    </section>
  );
};

export default HeroBanner;
