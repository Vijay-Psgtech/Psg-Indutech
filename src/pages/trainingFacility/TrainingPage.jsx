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
  Mail,
} from "lucide-react";
import {
  trainingData,
  trainingItems,
} from "../../components/data/TrainingFacilityData.js";
import TrainImg from "/images/Training/TrainC2.png";
import Eyebrow from "../../components/common/Eyebrow";
import usePageTitle from "../../hooks/usePageTitle.jsx";

/* ─────────────────────────────────────────────────────────────
   BRAND PALETTE — light theme (COE INDUTECH)
   BG:        #f4f6fb  (page background)
   SURFACE:   #ffffff  (cards)
   SURFACE2:  #eef1f9  (tinted panels / sections)
   NAVY:      #1a237e  (headings / primary text)
   TEAL:      #00acc1  (accent)
   TEALLT:    #e0f7fa  (teal tint bg)
   BODY:      #4a5568  (body text)
   MUTED:     #8a97b0  (labels / secondary)
   DIV:       #e2e8f0  (dividers / borders)
   SCROLLBG:  #1a237e  (dark marquee bar)
───────────────────────────────────────────────────────────── */

const BG       = "#f4f6fb";
const SURFACE  = "#ffffff";
const SURFACE2 = "#eef1f9";
const NAVY     = "#1a237e";
const NAVYMID  = "#283593";
const TEAL     = "#00acc1";
const TEALLT   = "#e0f7fa";
const BODY     = "#4a5568";
const MUTED    = "#8a97b0";
const DIV      = "#e2e8f0";
const SCROLLBG = "#1a237e";

/* ── Icon cycle ──────────────────────────────────────────── */
const getModuleIcon = (index) => {
  const icons = [<BookOpen size={20} />, <Award size={20} />, <Users size={20} />];
  return icons[index % 3];
};

/* ── Main Component ──────────────────────────────────────── */
const TrainingPage = () => {
  usePageTitle("Training Facility");
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
    visible: { opacity: 1, transition: { staggerChildren: 0.09 } },
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
      className="min-h-screen"
      style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif", background: BG, color: NAVY }}
    >
      {/* ── Global Styles ──────────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,700;9..40,900&family=DM+Serif+Display:ital@0;1&display=swap');

        @keyframes scroll-text {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-text {
          animation: scroll-text 45s linear infinite;
          display: flex;
        }
        .animate-scroll-text:hover { animation-play-state: paused; }

        @keyframes skill-pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.25; }
        }
        .skill-dot { animation: skill-pulse 1.5s ease-in-out infinite; }

        .serif { font-family: 'DM Serif Display', Georgia, serif; }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        .hero-float { animation: float 6s ease-in-out infinite; }

        /* ── Training Module Cards ── */
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
          opacity: 0.045;
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
          background: rgba(0,172,193,0.18);
          border: 1px solid rgba(0,172,193,0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.7);
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
          background: rgba(0,172,193,0.3) !important;
          border-color: rgba(0,172,193,0.5) !important;
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
          border-left: 3px solid ${TEAL};
        }
        .event-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 40px rgba(26,35,126,0.1);
        }

        /* ── Category pill ── */
        .cat-pill {
          transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
        }
        .cat-pill.active {
          background: ${NAVY};
          color: #fff;
          transform: scale(1.04);
        }
        .cat-pill:not(.active) {
          background: ${SURFACE2};
          color: ${BODY};
          border: 1px solid ${DIV};
        }
        .cat-pill:not(.active):hover {
          background: ${DIV};
        }

        /* ── Audience check items ── */
        .check-item {
          transition: background 0.2s ease;
          border-radius: 8px;
          padding: 6px 10px 6px 0;
        }

        /* ── Stat card ── */
        .stat-card {
          transition: box-shadow 0.25s ease, transform 0.25s ease;
        }
        .stat-card:hover {
          box-shadow: 0 8px 28px rgba(26,35,126,0.1);
          transform: translateY(-2px);
        }

        /* ── Enquiry card ── */
        .enquiry-card {
          transition: box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .enquiry-card:hover {
          box-shadow: 0 6px 24px rgba(0,172,193,0.1);
          border-color: rgba(0,172,193,0.35) !important;
        }

        /* ── Email rows ── */
        .email-row {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 0;
          border-bottom: 1px solid ${DIV};
          text-decoration: none;
          color: ${NAVY};
          font-size: 13px;
          font-weight: 500;
          transition: color 0.2s ease;
        }
        .email-row:last-child { border-bottom: none; }
        .email-row:hover { color: ${TEAL}; }
        .email-row svg { flex-shrink: 0; color: ${TEAL}; }
      `}</style>

      {/* ── Skill Dev Bar ──────────────────────────────── */}
      <div
        style={{
          background: NAVY,
          padding: "5px 32px",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span
          className="skill-dot"
          style={{ width: 6, height: 6, borderRadius: "50%", background: TEAL, display: "inline-block" }}
        />
        <span style={{ color: "rgba(255,255,255,0.65)", fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>
          Skill Development Centre
        </span>
      </div>

      {/* ── Hero ──────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          padding: "64px 32px 56px",
          background: `linear-gradient(160deg, #eef1fb 0%, #f4f6fb 55%, #e8f5f8 100%)`,
          borderBottom: `1px solid ${DIV}`,
        }}
      >
        {/* Soft teal shape — right */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 480,
            height: "100%",
            background: `linear-gradient(150deg, rgba(0,172,193,0.09) 0%, rgba(0,172,193,0.03) 100%)`,
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
            width: 68,
            height: 68,
            background: "rgba(0,172,193,0.12)",
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
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              style={{ marginBottom: 16 }}
            >
              <span style={{
                display: "inline-block",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: TEAL,
                border: `1px solid rgba(0,172,193,0.3)`,
                borderRadius: 4,
                padding: "4px 10px",
                background: TEALLT,
              }}>
                Skill Development
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="serif"
              style={{
                fontSize: "clamp(36px, 5vw, 58px)",
                fontWeight: 400,
                lineHeight: 1.07,
                letterSpacing: "-0.025em",
                color: NAVY,
                margin: "0 0 6px",
              }}
            >
              Training Program
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.14 }}
              className="serif"
              style={{
                fontSize: "clamp(36px, 5vw, 58px)",
                fontWeight: 400,
                lineHeight: 1.07,
                letterSpacing: "-0.025em",
                color: TEAL,
                fontStyle: "italic",
                margin: "0 0 22px",
              }}
            >
              Capabilities.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ fontSize: 14, lineHeight: 1.75, color: BODY, margin: "0 0 28px" }}
            >
              Empowering the future of textiles through comprehensive training
              programs. We bridge the knowledge gap for students, researchers,
              and industry professionals.
            </motion.p>

            {/* Audience list */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 30 }}
            >
              {[
                "Students & Research Scholars",
                "Professors & Academicians",
                "Industry Personnel & Entrepreneurs",
              ].map((item, i) => (
                <div key={i} className="check-item" style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: TEALLT,
                    border: `1px solid rgba(0,172,193,0.3)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <CheckCircle2 size={12} color={TEAL} strokeWidth={3} />
                  </div>
                  <span style={{ fontSize: 14, fontWeight: 500, color: BODY }}>{item}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA + contact */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.26 }}
              style={{
                borderTop: `1px solid ${DIV}`,
                paddingTop: 22,
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "0 28px",
                alignItems: "center",
              }}
            >
              <button
                onClick={() => document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" })}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: NAVY,
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
                <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: MUTED, margin: "0 0 5px" }}>
                  Training Enquiries
                </p>
                <a
                  href="mailto:Admin.int@psgtech.ac.in"
                  style={{ display: "block", fontSize: 13, fontWeight: 600, color: NAVY, textDecoration: "none" }}
                >
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
                width: 380,
                height: 540,
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: `0 0 0 4px ${TEALLT}, 0 28px 72px rgba(26,35,126,0.18)`,
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

      {/* ── Scrolling Marquee ─────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{
          background: SCROLLBG,
          overflow: "hidden",
          padding: "10px 0",
          borderBottom: `3px solid ${TEAL}`,
        }}
      >
        <div className="animate-scroll-text whitespace-nowrap">
          {[
            "Centre of Excellence for Technical Textiles",
            "Specialized Knowledge on Technical Textile Products",
            "Hands-on Training for Industry Personnel",
            "Research-backed Curriculum for Scholars",
            "Workshops · Seminars · Industry Programs",
            "Centre of Excellence for Technical Textiles",
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
                color: "rgba(255,255,255,0.65)",
                fontSize: 12,
                padding: "0 36px",
                whiteSpace: "nowrap",
                borderRight: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span style={{ color: TEAL, fontWeight: 700, fontSize: 10 }}>▶</span>
              {text}
            </span>
          ))}
        </div>
      </motion.div>

      {/* ── Training Modules Grid ──────────────────────── */}
      <section style={{ padding: "72px 32px", background: BG }} id="programs">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 40,
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <div style={{ width: 32, height: 3, background: TEAL, borderRadius: 2 }} />
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: TEAL }}>
                  Our Programs
                </span>
              </div>
              <h2
                className="serif"
                style={{
                  fontSize: "clamp(24px, 3vw, 36px)",
                  fontWeight: 400,
                  color: NAVY,
                  margin: "0 0 8px",
                  letterSpacing: "-0.02em",
                }}
              >
                Our Training Modules
              </h2>
              <p style={{ fontSize: 13, color: BODY, maxWidth: 420, lineHeight: 1.65, margin: 0 }}>
                Comprehensive programs bridging the knowledge gap for students,
                researchers, and industry professionals.
              </p>
            </div>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: MUTED }}>
              {trainingItems.length} Modules
            </span>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-5"
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
                  padding: "24px 20px",
                  boxShadow: `0 2px 12px rgba(26,35,126,0.1), 0 0 0 1px ${DIV}`,
                }}
              >
                <div
                  className={`train-card-bg bg-linear-to-br ${item.color}`}
                  style={{ opacity: 0.92 }}
                />
                <div className="train-card-grain" />
                <div className="train-card-arrow">
                  <ArrowUpRight size={14} />
                </div>

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
                  <div
                    className="train-card-icon"
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: 10,
                      background: "rgba(0,172,193,0.22)",
                      border: "1px solid rgba(0,172,193,0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      flexShrink: 0,
                    }}
                  >
                    {getModuleIcon(index)}
                  </div>

                  <div>
                    <h3
                      className="serif"
                      style={{
                        fontSize: 20,
                        fontWeight: 400,
                        lineHeight: 1.2,
                        color: "#fff",
                        margin: 0,
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
                          color: TEAL,
                          borderBottom: `1px solid rgba(0,172,193,0.45)`,
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
                          color: TEAL,
                          borderBottom: `1px solid rgba(0,172,193,0.35)`,
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

      {/* ── Workshops & Seminars ───────────────────────── */}
      <section
        style={{ padding: "72px 32px", background: SURFACE2, borderTop: `1px solid ${DIV}` }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 40,
              flexWrap: "wrap",
              gap: 20,
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <div style={{ width: 32, height: 3, background: TEAL, borderRadius: 2 }} />
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: TEAL }}>
                  Past Events
                </span>
              </div>
              <h2
                className="serif"
                style={{
                  fontSize: "clamp(24px, 3vw, 36px)",
                  fontWeight: 400,
                  color: NAVY,
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
                    padding: "7px 16px",
                    borderRadius: 999,
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    textTransform: "capitalize",
                    border: filter === cat ? "none" : `1px solid ${DIV}`,
                    cursor: "pointer",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Event cards */}
          <motion.div layout style={{ display: "flex", flexDirection: "column", gap: 14 }}>
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
                    background: SURFACE,
                    borderRadius: 14,
                    padding: "22px 26px",
                    display: "flex",
                    gap: 26,
                    alignItems: "flex-start",
                    boxShadow: `0 2px 10px rgba(26,35,126,0.06)`,
                  }}
                >
                  {/* Date block */}
                  <div style={{ flexShrink: 0, width: 60, textAlign: "center", paddingTop: 4 }}>
                    <div
                      className="serif"
                      style={{
                        fontSize: 36,
                        fontWeight: 400,
                        lineHeight: 1,
                        color: "#c8d4e8",
                        marginBottom: 4,
                      }}
                    >
                      {new Date(item.date).getDate()}
                    </div>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: MUTED }}>
                      {new Date(item.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                    </div>
                  </div>

                  {/* Divider */}
                  <div style={{ width: 1, background: DIV, alignSelf: "stretch", flexShrink: 0 }} />

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
                            item.category === "Workshop" ? "#ede9fe" :
                            item.category === "Training"  ? "#dbeafe" : TEALLT,
                          color:
                            item.category === "Workshop" ? "#5b21b6" :
                            item.category === "Training"  ? "#1e40af" : "#006d82",
                        }}
                      >
                        {item.category}
                      </span>
                      <div style={{ display: "flex", alignItems: "center", gap: 4, color: MUTED, fontSize: 12 }}>
                        <MapPin size={12} />
                        {item.location}
                      </div>
                    </div>

                    <h3
                      className="serif"
                      style={{
                        fontSize: "clamp(16px, 2vw, 21px)",
                        fontWeight: 400,
                        color: NAVY,
                        margin: "0 0 8px",
                        letterSpacing: "-0.01em",
                        lineHeight: 1.2,
                      }}
                    >
                      {item.title}
                    </h3>

                    <p style={{ fontSize: 13, color: BODY, lineHeight: 1.65, margin: "0 0 12px" }}>
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
                          color: TEAL,
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
              <div style={{ textAlign: "center", padding: "64px 0", color: MUTED, fontSize: 15 }}>
                No events found for this category.
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── Contact Enquiries ─────────────────────────── */}
      <section
        style={{
          background: SURFACE2,
          borderTop: `1px solid ${DIV}`,
          padding: "52px 32px 48px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
            <div style={{ width: 28, height: 3, background: TEAL, borderRadius: 2 }} />
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: TEAL }}>
              Enquiries
            </span>
          </div>

          <h2
            className="serif"
            style={{
              fontSize: "clamp(20px, 2.5vw, 26px)",
              fontWeight: 400,
              color: NAVY,
              margin: "0 0 6px",
              letterSpacing: "-0.02em",
            }}
          >
            Contact the Training Facility
          </h2>
          <p style={{ fontSize: 13, color: BODY, margin: "0 0 28px", lineHeight: 1.6, maxWidth: 420 }}>
            For program registration, schedule details, or general training enquiries,
            reach our coordinators directly.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, maxWidth: 760 }}>

            {/* Training Enquiries */}
            <div
              className="enquiry-card"
              style={{
                background: SURFACE,
                border: `1px solid ${DIV}`,
                borderRadius: 14,
                padding: "22px 24px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: TEALLT, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Mail size={15} color={TEAL} />
                </div>
                <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: NAVY, margin: 0 }}>
                  Training Enquiries
                </p>
              </div>
              <a href="mailto:Admin.int@psgtech.ac.in" className="email-row">
                <Mail size={14} />
                Admin.int@psgtech.ac.in
              </a>
            </div>

            {/* General Admin */}
            <div
              className="enquiry-card"
              style={{
                background: SURFACE,
                border: `1px solid ${DIV}`,
                borderRadius: 14,
                padding: "22px 24px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: TEALLT, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Mail size={15} color={TEAL} />
                </div>
                <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: NAVY, margin: 0 }}>
                  General Contact
                </p>
              </div>
              <a href="mailto:coe@psgtech.ac.in" className="email-row">
                <Mail size={14} />
                coe@psgtech.ac.in
              </a>
            </div>

          </div>

          {/* Bottom strip */}
          <div
            style={{
              marginTop: 32,
              paddingTop: 20,
              borderTop: `1px solid ${DIV}`,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 8,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span
                className="skill-dot"
                style={{ width: 6, height: 6, borderRadius: "50%", background: TEAL, display: "inline-block" }}
              />
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: TEAL }}>
                Skill Development Centre
              </span>
            </div>
            <span style={{ fontSize: 11, color: MUTED }}>
              PSG College of Technology — Centre of Excellence for Industrial and Home Textiles
            </span>
          </div>

        </div>
      </section>

    </div>
  );
};

export default TrainingPage;