import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { brandColors, grad } from "../common/brand.js";

/* ── banner image imports  ── */
import bannerImg1 from "../../assets/images/img4.jpg";
import bannerImg2 from "../../assets/images/img5.jpg";
import bannerImg3 from "../../assets/images/img6.jpg";
import bannerImg4 from "../../assets/images/img7.jpg";
import bannerImg5 from "../../assets/images/img8.jpg";

import bannerImg6 from "../../assets/images/img9.jpg";
import bannerImg7 from "../../assets/images/img10.jpg";
import bannerImg8 from "../../assets/images/img11.jpg";
import bannerImg9 from "../../assets/images/img12.jpg";
import bannerImg10 from "../../assets/images/img13.jpg";

const banners = [
  bannerImg1,
  bannerImg2,
  bannerImg3,
  bannerImg4,
  bannerImg5,
  bannerImg6,
  bannerImg7,
  bannerImg8,
  bannerImg9,
  bannerImg10,
];

function CTAButton({ children, href, target }) {
  const Tag = href ? "a" : "button";
  return (
    <Tag
      href={href}
      target={target}
      className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white text-base font-bold tracking-wide transition-all duration-300"
      style={{
        background: grad.subtle,
        boxShadow: `0 4px 18px ${brandColors.accent}40`,
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.boxShadow = `0 6px 28px ${brandColors.accent}60`)
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.boxShadow = `0 4px 18px ${brandColors.accent}40`)
      }
    >
      {children}
      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
    </Tag>
  );
}

export { CTAButton };  

const HeroBanner = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const t = setInterval(
      () => setCurrent((p) => (p + 1) % banners.length),
      4500,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "100vh", maxHeight: 900 }}
    >
      {/* ── image stack ── */}
      {banners.map((img, i) => (
        <motion.img
          key={i}
          src={img}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          animate={{ opacity: current === i ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      ))}

      {/* ── gradient overlay: darker at left, transparent at right ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(20,20,60,0.72) 0%, rgba(20,20,60,0.45) 50%, rgba(20,20,60,0.15) 100%)",
        }}
      />

      {/* ── left content ── */}
      <div className="absolute inset-0 flex items-center">
        <div className="relative z-10 max-w-2xl px-8 sm:px-14">
          {/* eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
            style={{
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.25)",
              backdropFilter: "blur(6px)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: brandColors.accent }}
            />
            <span className="text-white text-xs font-bold uppercase tracking-widest">
              Ministry of Textiles, Govt. of India
            </span>
          </motion.div>

          {/* heading */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.3,
              type: "spring",
              stiffness: 60,
            }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight"
          >
            Centre of <span style={{ color: brandColors.accent }}>Excellence</span>
            <br />
            <span
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold"
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              Industrial Textiles
            </span>
          </motion.h1>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-8"
          >
            <CTAButton>Explore More</CTAButton>
          </motion.div>
        </div>
      </div>

      {/* ── dot indicators ── */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
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

      {/* ── scroll caret ── */}
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
