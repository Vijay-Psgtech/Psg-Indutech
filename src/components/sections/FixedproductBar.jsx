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
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, #1a9c6e 0%, transparent 70%)",
          filter: "blur(80px)",
          top: -100,
          right: -100,
        }}
      />

      <motion.div
        animate={{
          x: [-100, -50, -100],
          y: [50, -50, 50],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          width: 350,
          height: 350,
          borderRadius: "50%",
          background: "radial-gradient(circle, #2dd4bf 0%, transparent 70%)",
          filter: "blur(70px)",
          bottom: -50,
          left: -50,
        }}
      />

      {/* Grid overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 1 }}
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(26,156,110,0.05) 25%, rgba(26,156,110,0.05) 26%, transparent 27%, transparent 74%, rgba(26,156,110,0.05) 75%, rgba(26,156,110,0.05) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(26,156,110,0.05) 25%, rgba(26,156,110,0.05) 26%, transparent 27%, transparent 74%, rgba(26,156,110,0.05) 75%, rgba(26,156,110,0.05) 76%, transparent 77%, transparent)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   Enhanced Product Card
───────────────────────────────────────── */
function ProductCard({ product, index }) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef(null);
  const color = product.color || "#1a9c6e";
  const img = product.image || "/placeholder.jpg";
  const name = product.name || "Product";
  const mat = getMaterial(product.material);

  const containerVariants = {
    initial: { opacity: 0, x: 30, y: 10 },
    inView: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: Math.min(index * 0.08, 0.5),
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
          width: 320,
          background: "#fff",
          borderRadius: 22,
          overflow: "hidden",
          border: hovered
            ? `1px solid ${color}55`
            : "1px solid rgba(0,0,0,0.07)",
          boxShadow: hovered
            ? `0 20px 60px rgba(0,0,0,0.14), 0 0 1px 1px ${color}15, inset 0 1px 0 rgba(255,255,255,0.8)`
            : "0 2px 12px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.6)",
          cursor: "pointer",
          transition: "box-shadow 0.4s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.4s ease",
          position: "relative",
          willChange: "transform",
          transform: hovered ? "translateY(-4px)" : "translateY(0)",
        }}
      >
        {/* Shimmer overlay on hover */}
        <motion.div
          animate={{ opacity: hovered ? 0.4 : 0, x: hovered ? 320 : -320 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(90deg, transparent, ${color}20, transparent)`,
            pointerEvents: "none",
            zIndex: 3,
          }}
        />

        {/* Top accent stripe - animated */}
        <motion.div
          animate={{
            scaleX: hovered ? 1 : 0,
            opacity: hovered ? 1 : 0,
          }}
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: `linear-gradient(90deg, ${color}, #2dd4bf, ${color})`,
            transformOrigin: "left",
            zIndex: 5,
            boxShadow: `0 4px 12px ${color}30`,
          }}
        />

        {/* Image area */}
        <div
          style={{
            height: 360,
            background: `linear-gradient(135deg, ${color}10 0%, ${color}04 100%)`,
            position: "relative",
            overflow: "hidden",
            display: "flex",
            alignItems: "end",
            justifyContent: "flex-start",
          }}
        >
          {/* Number badge - animated */}
          <motion.span
            animate={{
              scale: hovered ? 1.1 : 1,
              backgroundColor: hovered ? `${color}20` : "rgba(255,255,255,0.9)",
            }}
            transition={{ duration: 0.3 }}
            style={{
              position: "absolute",
              top: 10,
              left: 10,
              fontSize: 9,
              fontWeight: 800,
              letterSpacing: "0.12em",
              color: hovered ? color : "rgba(0,0,0,0.25)",
              padding: "4px 10px",
              borderRadius: 999,
              fontFamily: "'Outfit', sans-serif",
              border: `1px solid ${hovered ? color + "30" : "rgba(0,0,0,0.06)"}`,
              zIndex: 4,
              transition: "color 0.3s ease",
            }}
          >
            {pad(index + 1)}
          </motion.span>

          {/* Arrow on hover - enhanced */}
          <motion.div
            animate={{
              opacity: hovered ? 1 : 0,
              scale: hovered ? 1 : 0.4,
              rotate: hovered ? 0 : -180,
            }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              width: 28,
              height: 28,
              borderRadius: "50%",
              background: color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 4,
              boxShadow: `0 6px 20px ${color}40`,
            }}
          >
            <ArrowUpRight size={13} color="#fff" strokeWidth={2.5} />
          </motion.div>

          {/* Dynamic glow on hover */}
          <motion.div
            animate={{
              opacity: hovered ? 0.8 : 0,
              scale: hovered ? 1 : 0.8,
            }}
            transition={{ duration: 0.4 }}
            style={{
              position: "absolute",
              inset: 0,
              background: `radial-gradient(circle at 50% 60%, ${color}35, transparent 70%)`,
              pointerEvents: "none",
              filter: "blur(20px)",
            }}
          />

          {/* Product image - enhanced animation */}
          <motion.img
            src={img}
            alt={name}
            animate={{
              scale: hovered ? 1.12 : 1,
              y: hovered ? -5 : 0,
              filter: hovered ? "brightness(1.1)" : "brightness(1)",
            }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              padding: "20px 20px 16px",
              willChange: "transform, filter",
            }}
            loading="lazy"
          />
        </div>

        {/* Info area */}
        <div style={{ padding: "14px 16px 16px", position: "relative", zIndex: 2 }}>
          {/* Category - animated */}
          <motion.span
            animate={{
              color: hovered ? color : color + "80",
              letterSpacing: hovered ? "0.2em" : "0.16em",
            }}
            transition={{ duration: 0.3 }}
            style={{
              fontSize: 8,
              fontWeight: 800,
              textTransform: "uppercase",
              fontFamily: "'Outfit', sans-serif",
              display: "block",
              marginBottom: 6,
            }}
          >
            {product.category || "Textile"}
          </motion.span>

          {/* Name */}
          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 15,
              fontWeight: 600,
              color: "#111",
              lineHeight: 1.3,
              margin: "0 0 12px",
              letterSpacing: "-0.01em",
              minHeight: 38,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              transition: "color 0.3s ease",
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
                background: hovered ? `${color}20` : `${color}12`,
                borderColor: hovered ? `${color}50` : `${color}30`,
              }}
              transition={{ duration: 0.3 }}
              style={{
                fontSize: 8,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "4px 10px",
                borderRadius: 999,
                color: color,
                border: `1px solid ${color}30`,
                fontFamily: "'Outfit', sans-serif",
                whiteSpace: "nowrap",
              }}
            >
              {mat}
            </motion.span>

            <motion.span
              animate={{
                x: hovered ? 3 : 0,
                opacity: hovered ? 1 : 0.5,
              }}
              transition={{ duration: 0.3 }}
              style={{
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#111",
                fontFamily: "'Outfit', sans-serif",
                display: "flex",
                alignItems: "center",
                gap: 4,
                whiteSpace: "nowrap",
              }}
            >
              View
              <ArrowUpRight size={11} color={color} strokeWidth={2.5} />
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
        background: "#f0f0f0",
        borderRadius: 999,
        overflow: "hidden",
        marginTop: 12,
      }}
      onMouseEnter={() => trackRef.current?.addEventListener("scroll", updateProgress)}
      onMouseLeave={() => trackRef.current?.removeEventListener("scroll", updateProgress)}
    >
      <motion.div
        animate={{ scaleX: progress / 100 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{
          height: "100%",
          background: `linear-gradient(90deg, #1a9c6e, #2dd4bf)`,
          transformOrigin: "left",
          borderRadius: 999,
          boxShadow: "0 0 12px #1a9c6e80",
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
    el.scrollBy({ left: dir * 480, behavior: "smooth" });
    setTimeout(() => {
      updateArrows();
      setIsScrolling(false);
    }, 350);
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
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Outfit:wght@400;600;700;800&display=swap');

        .pb-track {
          display: flex;
          gap: 14px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          padding: 8px 4px 16px;
        }
        .pb-track::-webkit-scrollbar { display: none; }
        .pb-track > * { scroll-snap-align: start; }

        .pb-nav-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid rgba(0,0,0,0.12);
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
          position: relative;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }

        .pb-nav-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #0a0a0f;
          border-radius: 50%;
          transform: scale(0);
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          z-index: -1;
        }

        .pb-nav-btn:hover::before {
          transform: scale(1);
        }

        .pb-nav-btn:hover {
          border-color: #0a0a0f;
          box-shadow: 0 6px 16px rgba(0,0,0,0.12);
        }

        .pb-nav-btn:hover svg {
          color: #fff !important;
          transition: color 0.3s ease;
        }

        .pb-nav-btn:disabled {
          opacity: 0.2;
          cursor: not-allowed;
        }

        .pb-nav-btn:disabled:hover {
          background: #fff;
          border-color: rgba(0,0,0,0.12);
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }

        .pb-nav-btn:disabled:hover svg {
          color: #111 !important;
        }

        /* Smooth scroll behavior */
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
          background: "#f7f6f3",
          padding: "60px 0 56px",
          fontFamily: "'Outfit', sans-serif",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated background */}
        <AnimatedBackground />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 28px", position: "relative", zIndex: 1 }}>
          {/* ── Header row with animations ── */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 32,
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            {/* Left: label + title */}
            <div style={{ flex: 1, minWidth: 250 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(26,156,110,0.08)",
                  border: "1px solid rgba(26,156,110,0.22)",
                  borderRadius: 999,
                  padding: "5px 14px",
                  marginBottom: 12,
                  backdropFilter: "blur(10px)",
                }}
              >
                <motion.span
                  animate={{ opacity: [1, 0.4, 1], scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#1a9c6e",
                    display: "inline-block",
                    boxShadow: "0 0 8px #1a9c6e80",
                  }}
                />
                <span
                  style={{
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#1a9c6e",
                    fontFamily: "'Outfit', sans-serif",
                  }}
                >
                  Our Collection
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "clamp(26px, 4vw, 36px)",
                  fontWeight: 700,
                  color: "#0a0a0f",
                  margin: 0,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  textRendering: "optimizeLegibility",
                }}
              >
                Featured{" "}
                <motion.em
                  initial={{ color: "#0a0a0f", opacity: 0 }}
                  whileInView={{ color: "#1a9c6e", opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: 0.3,
                  }}
                  style={{
                    fontStyle: "italic",
                    display: "inline",
                  }}
                >
                  Textile
                </motion.em>{" "}
                Collection
              </motion.h2>
            </div>

            {/* Right: count + nav + CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                flexWrap: "wrap",
              }}
            >
              {/* Product count */}
              <motion.span
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#999",
                  fontFamily: "'Outfit', sans-serif",
                  minWidth: "max-content",
                }}
              >
                {products.length} items
              </motion.span>

              {/* Nav arrows */}
              <div style={{ display: "flex", gap: 8 }}>
                <motion.button
                  className="pb-nav-btn"
                  onClick={() => scroll(-1)}
                  disabled={!canScrollLeft}
                  whileHover={canScrollLeft ? { scale: 1.1 } : {}}
                  whileTap={canScrollLeft ? { scale: 0.95 } : {}}
                  aria-label="Scroll left"
                >
                  <ArrowLeft size={15} color="#111" strokeWidth={2.2} />
                </motion.button>
                <motion.button
                  className="pb-nav-btn"
                  onClick={() => scroll(1)}
                  disabled={!canScrollRight}
                  whileHover={canScrollRight ? { scale: 1.1 } : {}}
                  whileTap={canScrollRight ? { scale: 0.95 } : {}}
                  aria-label="Scroll right"
                >
                  <ArrowRight size={15} color="#111" strokeWidth={2.2} />
                </motion.button>
              </div>

              {/* View all CTA */}
              <Link to="/products" style={{ textDecoration: "none" }}>
                <motion.div
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 7,
                    padding: "10px 20px",
                    background: "#0a0a0f",
                    borderRadius: 12,
                    color: "#fff",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontFamily: "'Outfit', sans-serif",
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    border: "1px solid rgba(26,156,110,0.1)",
                  }}
                >
                  <span style={{ position: "relative", zIndex: 2 }}>View All</span>
                  <motion.div
                    animate={{ x: [0, 2, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    style={{ position: "relative", zIndex: 2 }}
                  >
                    <ArrowUpRight size={12} color="#1a9c6e" />
                  </motion.div>
                </motion.div>
              </Link>
            </motion.div>
          </div>

          {/* ── Horizontal scroll track ── */}
          <div
            ref={trackRef}
            className="pb-track"
            onScroll={updateArrows}
          >
            {products.map((prod, i) =>
              prod && prod.id ? (
                <ProductCard key={prod.id} product={prod} index={i} />
              ) : null
            )}

            {/* End spacer + "See All" card */}
            <Link to="/products" style={{ textDecoration: "none", flexShrink: 0 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: Math.min(products.length * 0.08 + 0.3, 0.8),
                }}
                whileHover={{ scale: 1.03, y: -4 }}
                style={{
                  width: 160,
                  height: "100%",
                  minHeight: 240,
                  background: "linear-gradient(135deg, #0a0a0f 0%, #1a1a24 100%)",
                  borderRadius: 16,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 12,
                  cursor: "pointer",
                  border: "1px solid rgba(26,156,110,0.15)",
                  padding: "0 20px",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Shimmer effect */}
                <motion.div
                  animate={{
                    x: [-160, 320],
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                    pointerEvents: "none",
                  }}
                />

                <motion.div
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "rgba(26,156,110,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <ArrowUpRight size={20} color="#1a9c6e" />
                </motion.div>

                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 800,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "#fff",
                    fontFamily: "'Outfit', sans-serif",
                    textAlign: "center",
                    lineHeight: 1.4,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  Browse All
                  <br />
                  Products
                </span>
                <span
                  style={{
                    fontSize: 9,
                    color: "rgba(255,255,255,0.4)",
                    fontFamily: "'Outfit', sans-serif",
                    textAlign: "center",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {products.length}+ items
                </span>
              </motion.div>
            </Link>
          </div>

          {/* ── Enhanced scroll progress ── */}
          <ScrollProgress trackRef={trackRef} />

          {/* ── Scroll hint indicator ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
              marginTop: 18,
            }}
          >
            <span
              style={{
                fontSize: 9,
                color: "#999",
                fontWeight: 500,
                letterSpacing: "0.05em",
              }}
            >
              Scroll to explore
            </span>
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{
                width: 4,
                height: 4,
                borderRadius: "50%",
                background: "#1a9c6e",
              }}
            />
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default ProductBarModern;