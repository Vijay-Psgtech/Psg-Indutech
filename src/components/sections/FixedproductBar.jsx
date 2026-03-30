import React, { useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { productsData } from "../data/ProductsData";
import {
  Shirt,
  Home,
  ShoppingBag,
  Sparkles,
  ChevronRight,
  ArrowUpRight,
  Grid3x3,
  Archive,
  Database,
} from "lucide-react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Link } from "react-router-dom";

/* ── Categories ─────────────────────────────────── */
const categories = [
  { id: "all",       label: "All Products",   icon: Grid3x3   },
  { id: "apparel",   label: "Apparel",         icon: Shirt      },
  // { id: "home",      label: "Home Textiles",   icon: Home       },
  // { id: "specialty", label: "Specialty",       icon: ShoppingBag },
];

/* ── Helpers ─────────────────────────────────── */
const getMaterialBadge = (material) => {
  if (!material || typeof material !== "string") return "Textile";
  return material.split(" ")[0].toUpperCase();
};

const hasPattern = (pattern) =>
  pattern && pattern !== "Solid" && typeof pattern === "string";

const getSeriesCode = (id, idx) => {
  const n = String(idx + 1).padStart(3, "0");
  const prefix = id
    ? String(id)[0].toUpperCase()
    : ["A", "B", "S", "C", "D"][idx % 5];
  return `SERIES ${prefix}-${n}`;
};

/* ── Animation variants ─────────────────────────── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden:   { opacity: 0, y: 28, scale: 0.94 },
  visible:  { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit:     { opacity: 0, y: -10, scale: 0.96, transition: { duration: 0.25 } },
};

/* ══════════════════════════════════════════════════════════
   Main Component
══════════════════════════════════════════════════════════ */
const ProductBarModern = () => {
  const [activeCategory, setActiveCategory]   = useState("all");
  const [hoveredProduct, setHoveredProduct]   = useState(null);
  const [expandedView, setExpandedView]       = useState(false);
  const [autoplayActive, setAutoplayActive]   = useState(true);

  const filteredProducts = useMemo(() => {
    if (!productsData || !Array.isArray(productsData)) return [];
    if (activeCategory === "all") return productsData;
    return productsData.filter((p) => p && p.category === activeCategory);
  }, [activeCategory]);

  if (!productsData || productsData.length === 0) {
    return (
      <div className="w-full bg-white py-12 text-center text-gray-500">
        No products available.
      </div>
    );
  }

  return (
    <div
      className="w-full bg-white"
      style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,700;9..40,900&family=DM+Serif+Display:ital@0;1&display=swap');

        .serif { font-family: 'DM Serif Display', Georgia, serif; }

        /* ── Category pill ── */
        .cat-pill {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 9px 20px; border-radius: 999px; font-size: 13px;
          font-weight: 600; border: 1.5px solid; cursor: pointer;
          transition: background 0.22s ease, color 0.22s ease,
                      border-color 0.22s ease, transform 0.18s ease,
                      box-shadow 0.22s ease;
          white-space: nowrap;
        }
        .cat-pill.active {
          background: #0d1117; color: #fff; border-color: #0d1117;
          box-shadow: 0 4px 14px rgba(0,0,0,0.18);
        }
        .cat-pill:not(.active) {
          background: #fff; color: #555; border-color: #dde1e7;
        }
        .cat-pill:not(.active):hover {
          border-color: #0d1117; color: #0d1117; transform: translateY(-1px);
        }

        /* ── Product card ── */
        .prod-card {
          position: relative; border-radius: 20px; overflow: hidden;
          border: 1.5px solid #e4e8ec; background: #fff;
          transition: transform 0.38s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.38s ease, border-color 0.3s ease;
          cursor: pointer; display: flex; flex-direction: column;
          height: 360px;
        }
        .prod-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 56px rgba(0,0,0,0.13);
          border-color: #c4c9d4;
        }

        /* image fills top 3/4 */
        .prod-card-img {
          flex: 1; overflow: hidden; position: relative;
          transition: all 0.4s ease;
        }
        .prod-card-img img {
          width: 100%; height: 100%; object-fit: contain;
          padding: 24px;
          transition: transform 0.5s cubic-bezier(0.22,1,0.36,1);
        }
        .prod-card:hover .prod-card-img img { transform: scale(1.1); }

        /* series badge top-left */
        .series-badge {
          position: absolute; top: 14px; left: 14px; z-index: 10;
          font-size: 9px; font-weight: 800; letter-spacing: 0.12em;
          text-transform: uppercase; color: #0d1117;
          background: rgba(255,255,255,0.9);
          border: 1px solid rgba(0,0,0,0.1);
          padding: 4px 10px; border-radius: 999px;
          backdrop-filter: blur(4px);
        }

        /* bottom info strip */
        .prod-card-info {
          padding: 14px 18px 16px;
          border-top: 1px solid #ebebeb;
          background: #fff;
          flex-shrink: 0;
        }

        /* arrow on hover */
        .prod-card-arrow {
          position: absolute; top: 14px; right: 14px; z-index: 10;
          width: 28px; height: 28px; border-radius: 50%;
          background: rgba(255,255,255,0.85);
          border: 1px solid rgba(0,0,0,0.1);
          display: flex; align-items: center; justify-content: center;
          color: #555;
          opacity: 0; transform: scale(0.7) rotate(-45deg);
          transition: opacity 0.25s ease, transform 0.25s cubic-bezier(0.22,1,0.36,1);
        }
        .prod-card:hover .prod-card-arrow {
          opacity: 1; transform: scale(1) rotate(0deg);
        }

        /* archive card */
        .archive-card {
          height: 360px; border-radius: 20px; overflow: hidden;
          background: #0d1117;
          border: 1.5px solid #1e2532;
          display: flex; flex-direction: column;
          align-items: center; justify-content: space-between;
          padding: 32px 28px;
          transition: transform 0.38s ease, box-shadow 0.38s ease;
          cursor: pointer;
        }
        .archive-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 56px rgba(26,156,110,0.18);
        }

        /* research strip */
        .research-strip {
          background: #f7f8fa;
          border-top: 1px solid #ebebeb;
          padding: 56px 32px;
        }

        /* stat item */
        .stat-item { display: flex; flex-direction: column; gap: 4px; }
        .stat-value {
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 900; color: #0d1117; line-height: 1;
          letter-spacing: -0.03em;
        }
        .stat-label {
          font-size: 9px; font-weight: 700; letter-spacing: 0.14em;
          text-transform: uppercase; color: #aaa;
        }

        /* carousel slide */
        .swiper-slide { height: auto !important; }
      `}</style>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>

        {/* ════════════════════════════════════════════
            SECTION HEADER
        ════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ paddingTop: 64, paddingBottom: 48 }}
        >
          {/* Top row — eyebrow + nav arrows */}
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 28 }}>
            <div>
              {/* Eyebrow */}
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ width: 8, height: 8, borderRadius: "50%", background: "#1a9c6e", flexShrink: 0 }}
                />
                <span style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: "0.16em",
                  textTransform: "uppercase", color: "#1a9c6e",
                  border: "1.5px solid #1a9c6e", borderRadius: 999,
                  padding: "4px 14px",
                }}>
                  Current Innovation Phase
                </span>
              </div>

              {/* Main heading */}
              <h2
                className="serif"
                style={{
                  fontSize: "clamp(36px, 5vw, 62px)",
                  fontWeight: 400,
                  color: "#0d1117",
                  margin: "0 0 14px",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.06,
                }}
              >
                Featured Collection
              </h2>

              {/* Sub-copy */}
              <p style={{ fontSize: 14, color: "#777", lineHeight: 1.7, maxWidth: 340, margin: 0 }}>
                Systematic analysis of advanced polymers and bio-synthetic weaves.
                Engineered for high-performance industrial application.
              </p>
            </div>

            {/* Nav arrows */}
            <div style={{ display: "flex", gap: 8, paddingTop: 8, flexShrink: 0 }}>
              {[true, false].map((isLeft) => (
                <button
                  key={String(isLeft)}
                  style={{
                    width: 40, height: 40, borderRadius: 10,
                    border: "1.5px solid #dde1e7", background: "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    cursor: "pointer", color: "#555",
                    transition: "border-color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#0d1117"; e.currentTarget.style.color = "#0d1117"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#dde1e7"; e.currentTarget.style.color = "#555"; }}
                >
                  <ChevronRight size={16} style={{ transform: isLeft ? "rotate(180deg)" : "none" }} />
                </button>
              ))}
            </div>
          </div>

          {/* Category filter pills */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  className={`cat-pill ${isActive ? "active" : ""}`}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setExpandedView(true);
                  }}
                >
                  <Icon size={14} />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ════════════════════════════════════════════
            PRODUCTS AREA
        ════════════════════════════════════════════ */}
        <div style={{ paddingBottom: 64 }}>
          <AnimatePresence mode="wait">

            {/* ── Grid View (after category click) ── */}
            {expandedView && filteredProducts.length > 0 ? (
              <motion.div
                key="grid"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: 18,
                  }}
                >
                  {filteredProducts.map((prod, idx) => {
                    if (!prod || !prod.id) return null;
                    const color  = prod.color   || "#e8d5c4";
                    const img    = prod.image    || "/placeholder.jpg";
                    const name   = prod.name     || "Product";
                    const mat    = getMaterialBadge(prod.material);
                    const pat    = prod.pattern  || "Solid";
                    const series = getSeriesCode(prod.id, idx);

                    return (
                      <motion.div key={prod.id} variants={itemVariants}>
                        <Link to={`/products/${prod.id}`} style={{ textDecoration: "none" }}>
                          <div
                            className="prod-card"
                            onMouseEnter={() => setHoveredProduct(prod.id)}
                            onMouseLeave={() => setHoveredProduct(null)}
                          >
                            {/* Series badge */}
                            <div className="series-badge">{series}</div>

                            {/* Arrow */}
                            <div className="prod-card-arrow">
                              <ArrowUpRight size={13} />
                            </div>

                            {/* Image */}
                            <div
                              className="prod-card-img"
                              style={{ background: `linear-gradient(135deg, ${color}18 0%, ${color}08 100%)` }}
                            >
                              <img src={img} alt={name} loading="lazy" />
                            </div>

                            {/* Info strip */}
                            <div className="prod-card-info">
                              <p style={{ fontSize: 13, fontWeight: 700, color: "#0d1117", margin: "0 0 8px", lineHeight: 1.3 }}>
                                {name}
                              </p>
                              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                                <span style={{
                                  fontSize: 10, fontWeight: 700, padding: "3px 10px",
                                  borderRadius: 999, background: "#e4f5ef", color: "#1a9c6e",
                                  border: "1px solid #c2e8d8",
                                }}>
                                  {mat}
                                </span>
                                {hasPattern(pat) && (
                                  <span style={{
                                    fontSize: 10, fontWeight: 700, padding: "3px 10px",
                                    borderRadius: 999, background: "#f1f3f5", color: "#555",
                                    border: "1px solid #dde1e7",
                                  }}>
                                    {pat.toUpperCase()}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}

                  {/* Archive card */}
                  <motion.div variants={itemVariants}>
                    <Link to="/products" style={{ textDecoration: "none" }}>
                      <div className="archive-card">
                        {/* Floating icon */}
                        <motion.div
                          animate={{ y: [0, -8, 0] }}
                          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                          style={{
                            width: 56, height: 56, borderRadius: 14,
                            border: "1.5px solid rgba(26,156,110,0.35)",
                            background: "rgba(26,156,110,0.08)",
                            display: "flex", alignItems: "center", justifyContent: "center",
                          }}
                        >
                          <Database size={24} color="#1a9c6e" />
                        </motion.div>

                        {/* Text */}
                        <div style={{ textAlign: "center" }}>
                          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8892a4", marginBottom: 12 }}>
                            Database Access
                          </div>
                          <h3
                            className="serif"
                            style={{ fontSize: 30, fontWeight: 400, color: "#fff", margin: "0 0 10px", lineHeight: 1.1 }}
                          >
                            500+<br />Innovations
                          </h3>
                          <p style={{ fontSize: 13, color: "#8892a4", lineHeight: 1.6, margin: 0 }}>
                            Our exhaustive technical library spanning three decades of proprietary textile development and fiber research.
                          </p>
                        </div>

                        {/* Progress bar */}
                        <div style={{ width: "100%" }}>
                          <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#8892a4", marginBottom: 6 }}>
                            Database Access
                          </div>
                          <div style={{ height: 3, background: "#1e2532", borderRadius: 999, overflow: "hidden", marginBottom: 14 }}>
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "72%" }}
                              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                              style={{ height: "100%", background: "linear-gradient(90deg, #1a9c6e, #2dd4bf)", borderRadius: 999 }}
                            />
                          </div>
                          <motion.div
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                          >
                            <Link
                              to="/products"
                              style={{
                                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                                padding: "11px 0", borderRadius: 10, width: "100%",
                                background: "linear-gradient(135deg, #1a9c6e, #2dd4bf)",
                                color: "#0d1117", fontWeight: 700, fontSize: 13,
                                textDecoration: "none", letterSpacing: "0.02em",
                              }}
                            >
                              View All Products
                              <Archive size={15} />
                            </Link>
                          </motion.div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>

            ) : (
              /* ── Coverflow Carousel (initial state) ── */
              <motion.div
                key="carousel"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Featured product row — 3 highlighted + archive */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr) 280px", gap: 18 }}>
                  {productsData.slice(0, 3).map((prod, idx) => {
                    if (!prod || !prod.id) return null;
                    const color  = prod.color  || "#e8d5c4";
                    const img    = prod.image   || "/placeholder.jpg";
                    const name   = prod.name    || "Product";
                    const mat    = getMaterialBadge(prod.material);
                    const series = getSeriesCode(prod.id, idx);

                    return (
                      <Link key={prod.id} to={`/products/${prod.id}`} style={{ textDecoration: "none" }}>
                        <motion.div
                          className="prod-card"
                          whileHover={{ y: -8 }}
                          onMouseEnter={() => setHoveredProduct(prod.id)}
                          onMouseLeave={() => setHoveredProduct(null)}
                        >
                          <div className="series-badge">{series}</div>
                          <div className="prod-card-arrow"><ArrowUpRight size={13} /></div>

                          {/* Image fills most of card */}
                          <div
                            style={{
                              flex: 1, overflow: "hidden", position: "relative",
                              background: `linear-gradient(135deg, ${color}22 0%, ${color}0a 100%)`,
                            }}
                          >
                            <img
                              src={img}
                              alt={name}
                              loading="lazy"
                              style={{
                                width: "100%", height: "100%", objectFit: "cover",
                                transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1)",
                              }}
                            />
                            {/* Dark bottom overlay with name */}
                            <div style={{
                              position: "absolute", bottom: 0, left: 0, right: 0,
                              padding: "48px 20px 20px",
                              background: "linear-gradient(0deg, rgba(0,0,0,0.72) 0%, transparent 100%)",
                            }}>
                              <h4 style={{ fontSize: 18, fontWeight: 700, color: "#fff", margin: "0 0 4px", lineHeight: 1.2 }}>
                                {name}
                              </h4>
                              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", margin: 0 }}>
                                {mat}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      </Link>
                    );
                  })}

                  {/* Archive card in 4th column */}
                  <Link to="/products" style={{ textDecoration: "none" }}>
                    <div className="archive-card">
                      <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                        style={{
                          width: 56, height: 56, borderRadius: 14,
                          border: "1.5px solid rgba(26,156,110,0.35)",
                          background: "rgba(26,156,110,0.08)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                        }}
                      >
                        <Database size={24} color="#1a9c6e" />
                      </motion.div>

                      <div style={{ textAlign: "center" }}>
                        <h3 className="serif" style={{ fontSize: 28, fontWeight: 400, color: "#fff", margin: "0 0 10px", lineHeight: 1.1 }}>
                          500+<br />Innovations
                        </h3>
                        <p style={{ fontSize: 12, color: "#8892a4", lineHeight: 1.6, margin: 0 }}>
                          Our exhaustive technical library spanning three decades of proprietary textile development and fiber research.
                        </p>
                      </div>

                      <div style={{ width: "100%" }}>
                        <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#8892a4", marginBottom: 6 }}>
                          Database Access
                        </div>
                        <div style={{ height: 3, background: "#1e2532", borderRadius: 999, marginBottom: 14, overflow: "hidden" }}>
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "72%" }}
                            transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
                            style={{ height: "100%", background: "linear-gradient(90deg, #1a9c6e, #2dd4bf)", borderRadius: 999 }}
                          />
                        </div>
                        <div style={{
                          display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                          padding: "11px 0", borderRadius: 10,
                          background: "linear-gradient(135deg, #1a9c6e, #2dd4bf)",
                          color: "#0d1117", fontWeight: 700, fontSize: 13, letterSpacing: "0.02em",
                        }}>
                          View All Products <Archive size={14} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ════════════════════════════════════════════
          RESEARCH HIGHLIGHT STRIP
      ════════════════════════════════════════════ */}
      
    </div>
  );
};

export default ProductBarModern;