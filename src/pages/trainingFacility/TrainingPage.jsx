import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MapPin,
  Download,
  ArrowRight,
  Filter,
  CheckCircle2,
  BookOpen,
  Award,
  Users,
  ArrowUpRight,
} from "lucide-react";
import {
  trainingData,
  trainingItems,
} from "../../components/data/TrainingFacilityData.js";
import {
  brandColors,
  grad,
  gradText,
  borderColor,
} from "../../components/common/brand.js";
import TrainImg from "/images/Training/TrainC2.png";
import Eyebrow from "../../components/common/Eyebrow";

/* ── Icon cycle for training module cards ─────────────────── */
const getModuleIcon = (index) => {
  const icons = [<BookOpen size={20} />, <Award size={20} />, <Users size={20} />];
  return icons[index % 3];
};

/* ── Main Component ─────────────────────────────────── */
const TrainingPage = () => {
  const [filter, setFilter] = useState("all");
  const categories = [
    "all",
    ...Array.from(new Set(trainingData.map((e) => e.category))),
  ];

  const filtered =
    filter === "all"
      ? trainingData
      : trainingData.filter((e) => e.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div
      className="min-h-screen bg-white text-gray-900"
      style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" }}
    >
      {/* ── Global Styles ─────────────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,700;9..40,900&family=DM+Serif+Display:ital@0;1&display=swap');

        /* ── Marquee ── */
        @keyframes scroll-text {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-text {
          animation: scroll-text 45s linear infinite;
          display: flex;
        }
        .animate-scroll-text:hover { animation-play-state: paused; }

        /* ── Skill dev dot ── */
        @keyframes skill-pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.2; }
        }
        .skill-dot { animation: skill-pulse 1.5s ease-in-out infinite; }

        /* ── Fonts ── */
        .serif { font-family: 'DM Serif Display', Georgia, serif; }

        /* ── Hero image float ── */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        .hero-float { animation: float 6s ease-in-out infinite; }

        /* ── Accent ── */
        .text-brand { color: #1a9c6e; }

        /* ════════════════════════════════════
           TRAINING MODULE CARD SYSTEM
           Same layered approach as Testing cards:
             0 — gradient bg
             1 — grain texture
             2 — top-right arrow
            10 — icon + text content
        ════════════════════════════════════ */

        .train-card-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          transition: opacity 0.4s ease;
        }

        .train-card-grain {
          position: absolute;
          inset: 0;
          z-index: 1;
          opacity: 0.055;
          pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 120px 120px;
        }

        .train-card-arrow {
          position: absolute;
          top: 18px;
          right: 18px;
          z-index: 10;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.55);
          opacity: 0;
          transform: scale(0.75) rotate(-45deg);
          transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.22,1,0.36,1), background 0.2s ease;
        }
        .train-card:hover .train-card-arrow {
          opacity: 1;
          transform: scale(1) rotate(0deg);
        }

        .train-card-icon {
          transition: transform 0.35s ease, background 0.35s ease, border-color 0.35s ease;
        }
        .train-card:hover .train-card-icon {
          transform: scale(1.08);
          background: rgba(255,255,255,0.2) !important;
          border-color: rgba(255,255,255,0.35) !important;
        }

        .train-card-cta {
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.28s ease 0.06s, transform 0.28s ease 0.06s;
        }
        .train-card:hover .train-card-cta {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Event card ── */
        .event-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-left: 3px solid #1a9c6e;
        }
        .event-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.09);
        }

        /* ── Category pill ── */
        .cat-pill {
          transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
        }
        .cat-pill.active {
          background: #0d1117;
          color: #fff;
          transform: scale(1.04);
        }
        .cat-pill:not(.active) {
          background: #f1f3f5;
          color: #555;
        }
        .cat-pill:not(.active):hover {
          background: #e4e8ec;
        }
      `}</style>

      {/* ── Skill Dev Accreditation Bar ─────────────────────── */}
      <div
        style={{
          background: "#0d1117",
          padding: "8px 32px",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span
          className="skill-dot"
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#1a9c6e",
            display: "inline-block",
          }}
        />
        <span
          style={{
            color: "#8892a4",
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          Skill Development Centre
        </span>
      </div>

      {/* ── Hero Section ─────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ padding: "72px 32px 64px" }}>
        {/* Teal geometric shape — right */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 440,
            height: "100%",
            background: "linear-gradient(150deg, #e4f5ef 0%, #cceee3 100%)",
            clipPath: "polygon(28% 0%, 100% 0%, 100% 100%, 58% 100%)",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 72,
            height: 72,
            background: "#b4e8d4",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "center",
            gap: 56,
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Left — text */}
          <div style={{ maxWidth: 540 }}>
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ marginBottom: 20 }}
            >
              <Eyebrow>Skill Development</Eyebrow>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="serif"
              style={{
                fontSize: "clamp(38px, 5vw, 66px)",
                fontWeight: 400,
                lineHeight: 1.06,
                letterSpacing: "-0.025em",
                color: "indigo",
                margin: "0 0 22px",
              }}
            >
              Training Program
              <br />
              <em className="text-brand" style={{ fontStyle: "italic", color:"black" }}>
                Capabilities.
              </em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ fontSize: 15, lineHeight: 1.75, color: "#555", margin: "0 0 36px" }}
            >
              Empowering the future of textiles through comprehensive training
              programs. We bridge the knowledge gap for students, researchers,
              and industry professionals.
            </motion.p>

            {/* Audience list */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}
            >
              {["Students & Research Scholars", "Professors & Academicians", "Industry Personnel & Entrepreneurs"].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#e4f5ef", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <CheckCircle2 size={12} color="#1a9c6e" strokeWidth={3} />
                  </div>
                  <span style={{ fontSize: 14, fontWeight: 500, color: "#444" }}>{item}</span>
                </div>
              ))}
            </motion.div>

            {/* Contact + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              style={{
                borderTop: "1px solid #e4e8ec",
                paddingTop: 22,
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "0 32px",
                alignItems: "start",
              }}
            >
              <button
                onClick={() => document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" })}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "#0d1117",
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: 700,
                  padding: "12px 22px",
                  borderRadius: 8,
                  border: "none",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  letterSpacing: "0.02em",
                }}
              >
                View Programs <ArrowRight size={15} />
              </button>
              <div>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: "#b0b8c4", margin: "0 0 5px" }}>
                  Training Enquiries
                </p>
                <a href="mailto:Admin.int@psgtech.ac.in" style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#0d1117", textDecoration: "none" }}>
                  Admin.int@psgtech.ac.in
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right — floating hero image */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="hero-float"
            style={{ flexShrink: 0 }}
          >
            <div
              style={{
                width: 425,
                height: 600,
                borderRadius: 12,
                overflow: "hidden",
                boxShadow: "0 28px 72px rgba(0,0,0,0.18)",
              }}
            >
              <img
                src={TrainImg}
                alt="Training Facility"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Scrolling Marquee — Overview highlights ──────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{ background: "#0d1117", overflow: "hidden", padding: "13px 0" }}
      >
        <div className="animate-scroll-text whitespace-nowrap">
          {[
            "Center of Excellence for Technical Textiles",
            "Specialized Knowledge on Technical Textile Products",
            "Hands-on Training for Industry Personnel",
            "Research-backed Curriculum for Scholars",
            "Workshops · Seminars · Industry Programs",
            "Center of Excellence for Technical Textiles",
            "Specialized Knowledge on Technical Textile Products",
            "Hands-on Training for Industry Personnel",
            "Research-backed Curriculum for Scholars",
            "Workshops · Seminars · Industry Programs",
          ].map((text, index) => (
            <span
              key={index}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                color: "#8892a4",
                fontSize: 13,
                padding: "0 40px",
                whiteSpace: "nowrap",
                borderRight: "1px solid #1e2532",
              }}
            >
              <span style={{ color: "#1a9c6e", fontWeight: 700, fontSize: 10 }}>▶</span>
              {text}
            </span>
          ))}
        </div>
      </motion.div>

      {/* ── Training Modules Grid ─────────────────────────────────── */}
      <section style={{ padding: "80px 32px", background: "#fff" }} id="programs">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 44,
            }}
          >
            <div>
              <h2
                className="serif"
                style={{
                  fontSize: "clamp(24px, 3vw, 38px)",
                  fontWeight: 400,
                  color: "#0d1117",
                  margin: "0 0 10px",
                  letterSpacing: "-0.02em",
                }}
              >
                Our Training Modules
              </h2>
              <p style={{ fontSize: 14, color: "#777", maxWidth: 400, lineHeight: 1.65, margin: 0 }}>
                Comprehensive programs bridging the knowledge gap for students,
                researchers, and industry professionals.
              </p>
            </div>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#b0b8c4" }}>
              {trainingItems.length} Modules
            </span>
          </motion.div>

          {/* Cards — same grid + card system as Testing */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6"
          >
            {trainingItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="train-card"
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  minHeight: 240,
                  borderRadius: 16,
                  overflow: "hidden",
                  color: "#fff",
                  cursor: "pointer",
                  padding: "26px 22px",
                  boxShadow: "0 0 0 1px rgba(0,0,0,0.08)",
                }}
              >
                {/* Layer 0 — gradient bg using item.color */}
                <div
                  className={`train-card-bg bg-linear-to-br ${item.color}`}
                  style={{ opacity: 0.88 }}
                />

                {/* Layer 1 — grain */}
                <div className="train-card-grain" />

                {/* Layer 2 — arrow */}
                <div className="train-card-arrow">
                  <ArrowUpRight size={14} />
                </div>

                {/* Layer 10 — content */}
                <div
                  style={{
                    position: "relative",
                    zIndex: 10,
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    justifyContent: "space-between",
                  }}
                >
                  {/* Icon */}
                  <div
                    className="train-card-icon"
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: 10,
                      background: "rgba(255,255,255,0.15)",
                      border: "1px solid rgba(255,255,255,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      flexShrink: 0,
                    }}
                  >
                    {getModuleIcon(index)}
                  </div>

                  {/* Title + CTA */}
                  <div>
                    <h3
                      className="serif"
                      style={{
                        fontSize: 20,
                        fontWeight: 400,
                        lineHeight: 1.2,
                        color: "#fff",
                        margin: "0 0 0",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {item.title}
                    </h3>

                    {item.doc ? (
                      <a
                        href={item.doc}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="train-card-cta"
                        style={{
                          marginTop: 12,
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 5,
                          fontSize: 11,
                          fontWeight: 700,
                          letterSpacing: "0.09em",
                          textTransform: "uppercase",
                          color: "rgba(255,255,255,0.85)",
                          borderBottom: "1px solid rgba(255,255,255,0.3)",
                          paddingBottom: 2,
                          textDecoration: "none",
                        }}
                      >
                        Download Brochure <Download size={11} />
                      </a>
                    ) : (
                      <div
                        className="train-card-cta"
                        style={{
                          marginTop: 12,
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 5,
                          fontSize: 11,
                          fontWeight: 700,
                          letterSpacing: "0.09em",
                          textTransform: "uppercase",
                          color: "rgba(255,255,255,0.7)",
                          borderBottom: "1px solid rgba(255,255,255,0.25)",
                          paddingBottom: 2,
                        }}
                      >
                        Learn More <ArrowUpRight size={11} />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Workshops & Seminars ─────────────────────────────────── */}
      <section
        style={{ padding: "80px 32px", background: "#f7f8fa", borderTop: "1px solid #ebebeb" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 44,
              flexWrap: "wrap",
              gap: 20,
            }}
          >
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: "#1a9c6e", margin: "0 0 8px" }}>
                Past Events
              </p>
              <h2
                className="serif"
                style={{
                  fontSize: "clamp(24px, 3vw, 38px)",
                  fontWeight: 400,
                  color: "#0d1117",
                  margin: 0,
                  letterSpacing: "-0.02em",
                }}
              >
                Workshops &amp; Seminars
              </h2>
            </div>

            {/* Filter pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`cat-pill ${filter === cat ? "active" : ""}`}
                  style={{
                    padding: "8px 18px",
                    borderRadius: 999,
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    textTransform: "capitalize",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Event cards */}
          <motion.div layout style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <AnimatePresence mode="popLayout">
              {filtered.map((item, index) => (
                <motion.div
                  layout
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="event-card"
                  style={{
                    background: "#fff",
                    borderRadius: 14,
                    padding: "24px 28px",
                    display: "flex",
                    gap: 28,
                    alignItems: "flex-start",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                  }}
                >
                  {/* Date block */}
                  <div
                    style={{
                      flexShrink: 0,
                      width: 64,
                      textAlign: "center",
                      paddingTop: 4,
                    }}
                  >
                    <div
                      className="serif"
                      style={{
                        fontSize: 38,
                        fontWeight: 400,
                        lineHeight: 1,
                        color: "#d0d8e4",
                        marginBottom: 4,
                        transition: "color 0.3s ease",
                      }}
                    >
                      {new Date(item.date).getDate()}
                    </div>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#aaa" }}>
                      {new Date(item.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                    </div>
                  </div>

                  {/* Divider */}
                  <div style={{ width: 1, background: "#ebebeb", alignSelf: "stretch", flexShrink: 0 }} />

                  {/* Content */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, flexWrap: "wrap" }}>
                      <span
                        style={{
                          padding: "3px 10px",
                          borderRadius: 999,
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          background:
                            item.category === "Workshop" ? "#f0eeff" :
                            item.category === "Training"  ? "#e8f4fe" : "#e8f8f2",
                          color:
                            item.category === "Workshop" ? "#6c47d4" :
                            item.category === "Training"  ? "#1a6fcf" : "#1a9c6e",
                        }}
                      >
                        {item.category}
                      </span>
                      <div style={{ display: "flex", alignItems: "center", gap: 4, color: "#aaa", fontSize: 12 }}>
                        <MapPin size={12} />
                        {item.location}
                      </div>
                    </div>

                    <h3
                      className="serif"
                      style={{
                        fontSize: "clamp(16px, 2vw, 22px)",
                        fontWeight: 400,
                        color: "#0d1117",
                        margin: "0 0 8px",
                        letterSpacing: "-0.01em",
                        lineHeight: 1.2,
                      }}
                    >
                      {item.title}
                    </h3>

                    <p style={{ fontSize: 14, color: "#666", lineHeight: 1.65, margin: "0 0 12px" }}>
                      {item.excerpt}
                    </p>

                    {item.pdf && (
                      <a
                        href={item.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 5,
                          fontSize: 12,
                          fontWeight: 700,
                          color: "#1a9c6e",
                          textDecoration: "none",
                          letterSpacing: "0.04em",
                        }}
                      >
                        <Download size={13} />
                        Download Report
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {filtered.length === 0 && (
              <div style={{ textAlign: "center", padding: "64px 0", color: "#aaa", fontSize: 15 }}>
                No events found for this category.
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TrainingPage;