import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";
import { productsData } from "../data/ProductsData";
import { ArrowUpRight, ArrowRight, ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

/* ─────────────────────────────────────────
   Helpers
───────────────────────────────────────── */
const getMaterial = (m) => {
  if (!m || typeof m !== "string") return "Textile";
  return m.split(" ")[0].toUpperCase();
};
const pad = (n) => String(n).padStart(2, "0");

/* ─────────────────────────────────────────
   Animated Background Element
───────────────────────────────────────── */
function AnimatedBackground() {
  return (
    <motion.div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {/* Large subtle blur orbs */}
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, 30, 0],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)",
          filter: "blur(100px)",
          top: -150,
          right: -150,
        }}
      />

      <motion.div
        animate={{
          x: [-80, 0, -80],
          y: [40, -40, 40],
          opacity: [0.06, 0.12, 0.06],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          width: 450,
          height: 450,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(100, 116, 139, 0.15) 0%, transparent 70%)",
          filter: "blur(90px)",
          bottom: -100,
          left: -100,
        }}
      />

      {/* Subtle grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(59, 130, 246, 0.02) 25%, rgba(59, 130, 246, 0.02) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, 0.02) 75%, rgba(59, 130, 246, 0.02) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(59, 130, 246, 0.02) 25%, rgba(59, 130, 246, 0.02) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, 0.02) 75%, rgba(59, 130, 246, 0.02) 76%, transparent 77%, transparent)
          `,
          backgroundSize: "70px 70px",
        }}
      />
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   Enhanced Product Card - Refined Luxury
───────────────────────────────────────── */
function ProductCard({ product, index }) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef(null);
  const color = product.color || "#3b82f6";
  const img = product.image || "/placeholder.jpg";
  const name = product.name || "Product";
  const mat = getMaterial(product.material);

  const containerVariants = {
    initial: { opacity: 0, x: 40, y: 15 },
    inView: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: Math.min(index * 0.07, 0.4),
      },
    },
  };

  return (
    <Link to={`/products/${product.id}`} style={{ textDecoration: "none", flexShrink: 0 }}>
      <motion.div
        ref={cardRef}
        variants={containerVariants}
        initial="initial"
        whileInView="inView"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        style={{
          width: 300,
          background: "#ffffff",
          borderRadius: 20,
          overflow: "hidden",
          border: hovered
            ? `1px solid ${color}40`
            : "1px solid rgba(59, 130, 246, 0.1)",
          boxShadow: hovered
            ? `0 20px 50px rgba(59, 130, 246, 0.15), inset 0 1px 0 rgba(255,255,255,0.9)`
            : "0 4px 20px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8)",
          cursor: "pointer",
          transition: "box-shadow 0.5s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.5s ease",
          position: "relative",
          willChange: "transform",
          transform: hovered ? "translateY(-6px)" : "translateY(0)",
        }}
      >
        {/* Subtle top gradient border on hover */}
        <motion.div
          animate={{
            scaleX: hovered ? 1 : 0,
            opacity: hovered ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background: `linear-gradient(90deg, ${color}, rgba(100, 116, 139, 0.5), ${color})`,
            transformOrigin: "left",
            zIndex: 5,
            boxShadow: `0 2px 8px ${color}25`,
          }}
        />

        {/* Image area */}
        <div
          style={{
            height: 340,
            background: `linear-gradient(135deg, ${color}08 0%, ${color}02 100%)`,
            position: "relative",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Subtle background pattern */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.05,
              backgroundImage: `
                repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(59, 130, 246, 0.1) 10px, rgba(59, 130, 246, 0.1) 20px)
              `,
            }}
          />

          {/* Number badge - refined */}
          <motion.span
            animate={{
              scale: hovered ? 1.08 : 1,
              backgroundColor: hovered ? `${color}15` : "rgba(255,255,255,0.95)",
            }}
            transition={{ duration: 0.4 }}
            style={{
              position: "absolute",
              top: 14,
              left: 14,
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.15em",
              color: hovered ? color : "rgba(0,0,0,0.3)",
              padding: "6px 12px",
              borderRadius: 8,
              fontFamily: "'Outfit', sans-serif",
              border: `1px solid ${hovered ? color + "25" : "rgba(0,0,0,0.08)"}`,
              zIndex: 4,
              transition: "color 0.3s ease",
              textTransform: "uppercase",
              backdropFilter: "blur(8px)",
            }}
          >
            {pad(index + 1)}
          </motion.span>

          {/* Arrow icon on hover - refined design */}
          <motion.div
            animate={{
              opacity: hovered ? 1 : 0,
              scale: hovered ? 1 : 0.3,
              rotate: hovered ? 45 : -45,
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "absolute",
              top: 14,
              right: 14,
              width: 36,
              height: 36,
              borderRadius: 12,
              background: `linear-gradient(135deg, ${color}, rgba(100, 116, 139, 0.6))`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 4,
              boxShadow: `0 8px 24px ${color}35`,
              backdropFilter: "blur(10px)",
              border: `1px solid rgba(255,255,255,0.3)`,
            }}
          >
            <ArrowUpRight size={14} color="#fff" strokeWidth={2} />
          </motion.div>

          {/* Glow effect on hover */}
          <motion.div
            animate={{
              opacity: hovered ? 1 : 0,
              scale: hovered ? 1 : 0.6,
            }}
            transition={{ duration: 0.5 }}
            style={{
              position: "absolute",
              inset: 0,
              background: `radial-gradient(circle at 50% 50%, ${color}30, transparent 60%)`,
              pointerEvents: "none",
              filter: "blur(40px)",
            }}
          />

          {/* Product image - smooth animation */}
          <motion.img
            src={img}
            alt={name}
            animate={{
              scale: hovered ? 1.1 : 1,
              y: hovered ? -3 : 0,
              filter: hovered ? "brightness(1.08)" : "brightness(1)",
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              padding: "24px",
              willChange: "transform, filter",
              position: "relative",
              zIndex: 2,
            }}
            loading="lazy"
          />
        </div>

        {/* Info area - refined typography */}
        <div style={{ padding: "18px 16px 16px", position: "relative", zIndex: 2 }}>
          {/* Category label - animated */}
          <motion.span
            animate={{
              color: hovered ? color : color + "99",
              letterSpacing: hovered ? "0.25em" : "0.18em",
            }}
            transition={{ duration: 0.4 }}
            style={{
              fontSize: 9,
              fontWeight: 700,
              textTransform: "uppercase",
              fontFamily: "'Outfit', sans-serif",
              display: "block",
              marginBottom: 8,
              transition: "color 0.4s ease",
            }}
          >
            {product.category || "Textile"}
          </motion.span>

          {/* Product name - serif for elegance */}
          <h3
            style={{
              fontFamily: "'Crimson Text', Georgia, serif",
              fontSize: 18,
              fontWeight: 600,
              color: "#0f172a",
              lineHeight: 1.3,
              margin: "0 0 12px",
              letterSpacing: "-0.01em",
              minHeight: 44,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {name}
          </h3>

          {/* Material tag + CTA row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 8,
            }}
          >
            <motion.span
              animate={{
                background: hovered ? `${color}18` : `${color}10`,
                borderColor: hovered ? `${color}60` : `${color}35`,
              }}
              transition={{ duration: 0.4 }}
              style={{
                fontSize: 8,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "5px 10px",
                borderRadius: 6,
                color: color,
                border: `1px solid ${color}35`,
                fontFamily: "'Outfit', sans-serif",
                whiteSpace: "nowrap",
              }}
            >
              {mat}
            </motion.span>

            <motion.span
              animate={{
                x: hovered ? 4 : 0,
                opacity: hovered ? 1 : 0.6,
              }}
              transition={{ duration: 0.4 }}
              style={{
                fontSize: 9,
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#0f172a",
                fontFamily: "'Outfit', sans-serif",
                display: "flex",
                alignItems: "center",
                gap: 3,
                whiteSpace: "nowrap",
              }}
            >
              View
              <ArrowUpRight size={11} color={color} strokeWidth={2.2} />
            </motion.span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

/* ─────────────────────────────────────────
   Scroll Progress Indicator
───────────────────────────────────────── */
function ScrollProgress({ trackRef }) {
  const [progress, setProgress] = useState(0);

  const updateProgress = () => {
    const el = trackRef.current;
    if (!el) return;
    const scrollPercent =
      (el.scrollLeft / (el.scrollWidth - el.clientWidth)) * 100;
    setProgress(Math.min(scrollPercent, 100));
  };

  return (
    <motion.div
      style={{
        height: 2,
        background: "rgba(59, 130, 246, 0.1)",
        borderRadius: 999,
        overflow: "hidden",
        marginTop: 16,
      }}
      onMouseEnter={() => trackRef.current?.addEventListener("scroll", updateProgress)}
      onMouseLeave={() => trackRef.current?.removeEventListener("scroll", updateProgress)}
    >
      <motion.div
        animate={{ scaleX: progress / 100 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{
          height: "100%",
          background: `linear-gradient(90deg, #3b82f6, #60a5fa)`,
          transformOrigin: "left",
          borderRadius: 999,
          boxShadow: "0 0 8px #3b82f630",
        }}
      />
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   Main Enhanced Component
───────────────────────────────────────── */
const ProductBarModern = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);

  const products = Array.isArray(productsData) ? productsData.filter(Boolean) : [];

  const updateArrows = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  };

  const scroll = (dir) => {
    const el = trackRef.current;
    if (!el || isScrolling) return;
    setIsScrolling(true);
    el.scrollBy({ left: dir * 500, behavior: "smooth" });
    setTimeout(() => {
      updateArrows();
      setIsScrolling(false);
    }, 400);
  };

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, []);

  if (products.length === 0) return null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600&family=Outfit:wght@400;600;700;800&display=swap');

        .pb-track {
          display: flex;
          gap: 16px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          padding: 8px 4px 16px;
        }
        .pb-track::-webkit-scrollbar { display: none; }
        .pb-track > * { scroll-snap-align: start; }

        .pb-nav-btn {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          border: 1px solid rgba(59, 130, 246, 0.2);
          background: rgba(255, 255, 255, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.06);
          backdrop-filter: blur(10px);
        }

        .pb-nav-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(59, 130, 246, 0.08);
          border-radius: 10px;
          transform: scale(0);
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          z-index: -1;
        }

        .pb-nav-btn:hover::before {
          transform: scale(1);
        }

        .pb-nav-btn:hover {
          border-color: rgba(59, 130, 246, 0.4);
          box-shadow: 0 8px 20px rgba(59, 130, 246, 0.12);
        }

        .pb-nav-btn:hover svg {
          color: #3b82f6 !important;
          transition: color 0.3s ease;
        }

        .pb-nav-btn:disabled {
          opacity: 0.25;
          cursor: not-allowed;
        }

        .pb-nav-btn:disabled:hover {
          background: rgba(255, 255, 255, 0.95);
          border-color: rgba(59, 130, 246, 0.2);
          box-shadow: 0 4px 12px rgba(0,0,0,0.06);
        }

        .pb-nav-btn:disabled:hover svg {
          color: #0f172a !important;
        }

        @media (prefers-reduced-motion: no-preference) {
          .pb-track {
            scroll-behavior: smooth;
          }
        }
      `}</style>

      <motion.section
        ref={sectionRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          width: "100%",
          background: "linear-gradient(to bottom, #f8fafc, #ffffff)",
          padding: "64px 0 56px",
          fontFamily: "'Outfit', sans-serif",
          borderTop: "1px solid rgba(59, 130, 246, 0.1)",
          borderBottom: "1px solid rgba(59, 130, 246, 0.1)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated background */}
        <AnimatedBackground />

        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", position: "relative", zIndex: 1 }}>
          {/* ── Header Section ── */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              marginBottom: 40,
              gap: 20,
              flexWrap: "wrap",
            }}
          >
            {/* Left: Label + Heading */}
            <div style={{ flex: 1, minWidth: 280 }}>
              {/* Animated label */}
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(59, 130, 246, 0.06)",
                  border: "1px solid rgba(59, 130, 246, 0.2)",
                  borderRadius: 10,
                  padding: "6px 14px",
                  marginBottom: 14,
                  backdropFilter: "blur(12px)",
                }}
              >
                <motion.span
                  animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.3, 1] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: "#3b82f6",
                    display: "inline-block",
                    boxShadow: "0 0 10px #3b82f640",
                  }}
                />
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#3b82f6",
                    fontFamily: "'Outfit', sans-serif",
                  }}
                >
                  Premium Collection
                </span>
              </motion.div>

              {/* Main heading - elegant serif */}
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  fontFamily: "'Crimson Text', Georgia, serif",
                  fontSize: "clamp(32px, 5vw, 42px)",
                  fontWeight: 600,
                  color: "#0f172a",
                  margin: 0,
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                }}
              >
                Explore Our{" "}
                <motion.em
                  initial={{ color: "#0f172a", opacity: 0 }}
                  whileInView={{ color: "#3b82f6", opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3,
                  }}
                  style={{
                    fontStyle: "italic",
                    display: "inline",
                    fontWeight: 600,
                  }}
                >
                  Textile
                </motion.em>{" "}
                Range
              </motion.h2>
            </div>

            {/* Right: Count + Navigation + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                flexWrap: "wrap",
              }}
            >
              {/* Item count */}
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#64748b",
                  fontFamily: "'Outfit', sans-serif",
                  minWidth: "max-content",
                }}
              >
                {products.length} Products
              </motion.span>

              {/* Navigation buttons */}
              <div style={{ display: "flex", gap: 10 }}>
                <motion.button
                  className="pb-nav-btn"
                  onClick={() => scroll(-1)}
                  disabled={!canScrollLeft}
                  whileHover={canScrollLeft ? { scale: 1.08 } : {}}
                  whileTap={canScrollLeft ? { scale: 0.92 } : {}}
                  aria-label="Scroll left"
                >
                  <ArrowLeft size={16} color="#0f172a" strokeWidth={2.2} />
                </motion.button>
                <motion.button
                  className="pb-nav-btn"
                  onClick={() => scroll(1)}
                  disabled={!canScrollRight}
                  whileHover={canScrollRight ? { scale: 1.08 } : {}}
                  whileTap={canScrollRight ? { scale: 0.92 } : {}}
                  aria-label="Scroll right"
                >
                  <ArrowRight size={16} color="#0f172a" strokeWidth={2.2} />
                </motion.button>
              </div>

              {/* View all CTA */}
              <Link to="/products" style={{ textDecoration: "none" }}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "11px 22px",
                    background: "#3b82f6",
                    borderRadius: 10,
                    color: "#fff",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontFamily: "'Outfit', sans-serif",
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                    boxShadow: "0 6px 20px rgba(59, 130, 246, 0.25)",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  <span style={{ position: "relative", zIndex: 2 }}>See All</span>
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                    style={{ position: "relative", zIndex: 2 }}
                  >
                    <ArrowUpRight size={13} color="#fff" strokeWidth={2} />
                  </motion.div>
                </motion.div>
              </Link>
            </motion.div>
          </div>

          {/* ── Horizontal Scroll Track ── */}
          <div ref={trackRef} className="pb-track" onScroll={updateArrows}>
            {products.map((prod, i) =>
              prod && prod.id ? (
                <ProductCard key={prod.id} product={prod} index={i} />
              ) : null
            )}

            {/* Browse All Card */}
            <Link to="/products" style={{ textDecoration: "none", flexShrink: 0 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: Math.min(products.length * 0.07 + 0.3, 0.9),
                }}
                whileHover={{ scale: 1.04, y: -6 }}
                style={{
                  width: 140,
                  height: "100%",
                  minHeight: 370,
                  background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
                  borderRadius: 16,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 14,
                  cursor: "pointer",
                  border: "1px solid rgba(59, 130, 246, 0.15)",
                  padding: "0 16px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Shimmer effect */}
                <motion.div
                  animate={{
                    x: [-140, 300],
                    opacity: [0, 0.4, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
                    pointerEvents: "none",
                  }}
                />

                {/* Icon */}
                <motion.div
                  animate={{ scale: [1, 1.15, 1], rotate: [0, 5, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "12px",
                    background: "rgba(59, 130, 246, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    zIndex: 1,
                    border: "1px solid rgba(59, 130, 246, 0.3)",
                  }}
                >
                  <ArrowUpRight size={22} color="#60a5fa" strokeWidth={2} />
                </motion.div>

                {/* Text */}
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#fff",
                    fontFamily: "'Outfit', sans-serif",
                    textAlign: "center",
                    lineHeight: 1.4,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  View All{" "}
                  <br />
                  Products
                </span>
                <span
                  style={{
                    fontSize: 10,
                    color: "rgba(255,255,255,0.5)",
                    fontFamily: "'Outfit', sans-serif",
                    textAlign: "center",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {products.length}+ Items
                </span>
              </motion.div>
            </Link>
          </div>

          {/* ── Progress Indicator ── */}
          <ScrollProgress trackRef={trackRef} />

          {/* ── Scroll Hint ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
              marginTop: 20,
            }}
          >
            <span
              style={{
                fontSize: 10,
                color: "#94a3b8",
                fontWeight: 500,
                letterSpacing: "0.05em",
              }}
            >
              Swipe to explore
            </span>
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3], x: [0, 2, 0] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: "#3b82f6",
              }}
            />
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default ProductBarModern;