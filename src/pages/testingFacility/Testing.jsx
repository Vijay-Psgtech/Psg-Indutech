import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  testNotifications,
  testingItems,
} from "../../components/data/TestingData.js";
import {
  brandColors,
  grad,
  gradText,
  borderColor,
} from "../../components/common/brand.js";
import {
  FlaskConical,
  Microscope,
  Flame,
  Layers,
  Droplets,
  Filter,
  Zap,
  Cpu,
  ArrowUpRight,
} from "lucide-react";

import Eyebrow from "../../components/common/Eyebrow";

/* ── Lab Background Images ────────────────────────────────────
   References public/images/products/ folder
   Vite serves these directly without bundling
───────────────────────────────────────────────────────────── */

/**
 * Maps a lab card title to its background image.
 * Matches by keyword so it works regardless of
 * exact casing or word order in testingItems.
 */
const getLabImage = (title) => {
  const t = title.toLowerCase();
  if (t.includes("physical")) return "/images/products/physicaltesting.jpg";
  if (t.includes("analytical")) return "/images/products/analyticaltesting.jpg";
  if (t.includes("fire")) return "/images/products/firetesting.webp";
  if (t.includes("surface")) return "/images/products/surface.jpg";
  if (t.includes("wet")) return "/images/products/wettesting.jpg";
  if (t.includes("filter")) return "/images/products/filtertesting.jpg";
  if (t.includes("insulation")) return "/images/products/insulationtesting.jpg";
  if (t.includes("fesem")) return "/images/products/fesemedax.jpg";
  return "/images/products/physicaltesting.jpg"; // safe fallback
};

/* ── Icon Map ─────────────────────────────────── */
const getIcon = (title) => {
  const t = title.toLowerCase();
  if (t.includes("physical")) return <Layers size={22} />;
  if (t.includes("analytical")) return <FlaskConical size={22} />;
  if (t.includes("fire")) return <Flame size={22} />;
  if (t.includes("surface")) return <Microscope size={22} />;
  if (t.includes("wet")) return <Droplets size={22} />;
  if (t.includes("filter")) return <Filter size={22} />;
  if (t.includes("insulation")) return <Zap size={22} />;
  if (t.includes("fesem")) return <Cpu size={22} />;
  return <Microscope size={22} />;
};

/* ── Main Component ─────────────────────────────────── */
const Testing = () => {
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
          animation: scroll-text 40s linear infinite;
          display: flex;
        }
        .animate-scroll-text:hover { animation-play-state: paused; }

        /* ── NABL dot ── */
        @keyframes nabl-pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.2; }
        }
        .nabl-dot { animation: nabl-pulse 1.5s ease-in-out infinite; }

        /* ── Fonts ── */
        .serif { font-family: 'DM Serif Display', Georgia, serif; }

        /* ── Hero image float ── */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        .hero-float { animation: float 6s ease-in-out infinite; }

        /* ── Accent colour ── */
        .text-brand { color: #1a9c6e; }

        /* ════════════════════════════════════
           LAB CARD SYSTEM
           Layer order (z-index):
             0 — bg photo (always visible, darkened)
             1 — gradient colour wash (fades in on hover)
             2 — grain texture
             3 — top-right arrow button
            10 — icon + text content
        ════════════════════════════════════ */

        /* Background photo */
        .lab-card-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          z-index: 0;
          /* dark at rest so text is always legible */
          filter: brightness(0.4) saturate(0.65);
          transform: scale(1);
          transition:
            transform  0.6s cubic-bezier(0.22, 1, 0.36, 1),
            filter     0.5s ease;
        }
        /* Zoom + darken further on hover so gradient shows */
        .lab-card:hover .lab-card-bg {
          transform: scale(1.07);
          filter: brightness(0.22) saturate(0.5);
        }

        /* Gradient colour wash — uses item.color tailwind classes */
        .lab-card-wash {
          position: absolute;
          inset: 0;
          z-index: 1;
          opacity: 0;
          transition: opacity 0.45s ease;
        }
        .lab-card:hover .lab-card-wash { opacity: 0.75; }

        /* Subtle grain */
        .lab-card-grain {
          position: absolute;
          inset: 0;
          z-index: 2;
          opacity: 0.055;
          pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 120px 120px;
        }

        /* Top-right arrow */
        .lab-card-arrow {
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
          transition:
            opacity   0.3s ease,
            transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
            background 0.2s ease;
        }
        .lab-card:hover .lab-card-arrow {
          opacity: 1;
          transform: scale(1) rotate(0deg);
        }
        .lab-card-arrow:hover {
          background: rgba(255,255,255,0.22) !important;
          color: #fff !important;
        }

        /* Icon container */
        .lab-card-icon {
          transition: transform 0.35s ease, background 0.35s ease, border-color 0.35s ease;
        }
        .lab-card:hover .lab-card-icon {
          transform: scale(1.08);
          background: rgba(255,255,255,0.15) !important;
          border-color: rgba(255,255,255,0.28) !important;
        }

        /* CTA link */
        .lab-card-cta {
          opacity: 0;
          transform: translateY(10px);
          transition:
            opacity   0.28s ease 0.06s,
            transform 0.28s ease 0.06s;
        }
        .lab-card:hover .lab-card-cta {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* ── NABL Accredited Bar ─────────────────────────────────── */}
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
          className="nabl-dot"
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
          NABL Accredited
        </span>
      </div>

      {/* ── Hero Section ─────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ padding: "72px 32px 64px" }}
      >
        {/* Teal geometric shape — right side */}
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
          <div style={{ maxWidth: 520 }}>
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ marginBottom: 20 }}
            >
              <Eyebrow>Testing Services</Eyebrow>
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
              Advanced Testing
              <br />
              <em
                className="text-brand"
                style={{ fontStyle: "italic", color: "black" }}
              >
                Facility.
              </em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: 15,
                lineHeight: 1.75,
                color: "#555",
                margin: "0 0 36px",
              }}
            >
              PSG Tech's COE Indutech offers state-of-the-art instruments for
              comprehensive material evaluation. Explore our specialized
              laboratories below for detailed testing capabilities.
            </motion.p>

            {/* Contact grid */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0 24px",
                borderTop: "1px solid #e4e8ec",
                paddingTop: 22,
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.13em",
                    textTransform: "uppercase",
                    color: "#b0b8c4",
                    margin: "0 0 6px",
                  }}
                >
                  For Testing Enquiries
                </p>
                <a
                  href="mailto:testing.int@psgtech.ac.in"
                  style={{
                    display: "block",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#0d1117",
                    textDecoration: "none",
                    marginBottom: 3,
                  }}
                >
                  testing.int@psgtech.ac.in
                </a>
                <a
                  href="mailto:testing1.int@psgtech.ac.in"
                  style={{
                    display: "block",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#0d1117",
                    textDecoration: "none",
                  }}
                >
                  testing1.int@psgtech.ac.in
                </a>
              </div>
              <div>
                <p
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.13em",
                    textTransform: "uppercase",
                    color: "#b0b8c4",
                    margin: "0 0 6px",
                  }}
                >
                  For Fesem Edax Test Enquiries
                </p>
                <a
                  href="mailto:semedaxlab@psgtech.ac.in"
                  style={{
                    display: "block",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#0d1117",
                    textDecoration: "none",
                  }}
                >
                  semedaxlab@psgtech.ac.in
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right — floating hero image */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="hero-float"
            style={{ flexShrink: 0 }}
          >
            <div
              style={{
                width: 265,
                height: 265,
                borderRadius: 12,
                overflow: "hidden",
                boxShadow: "0 28px 72px rgba(0,0,0,0.18)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=530&h=530&fit=crop&crop=center"
                alt="Industrial fibers"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Scrolling Notifications ─────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{ background: "#0d1117", overflow: "hidden", padding: "13px 0" }}
      >
        <div className="animate-scroll-text whitespace-nowrap">
          {[...testNotifications, ...testNotifications].map((note, index) => (
            <a
              key={index}
              href={note.pdf}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                color: "#8892a4",
                fontSize: 13,
                textDecoration: "none",
                padding: "0 40px",
                whiteSpace: "nowrap",
                borderRight: "1px solid #1e2532",
              }}
            >
              <span style={{ color: "#1a9c6e", fontWeight: 700, fontSize: 10 }}>
                ▶
              </span>
              {note.text}
              {note.pdf && <ArrowUpRight size={12} style={{ opacity: 0.4 }} />}
            </a>
          ))}
        </div>
      </motion.div>

      {/* ── Labs Grid Section ─────────────────────────────────── */}
      <section style={{ padding: "80px 32px", background: "#fff" }} id="labs">
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
                Core Laboratories
              </h2>
              <p
                style={{
                  fontSize: 14,
                  color: "#777",
                  maxWidth: 380,
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                Our testing infrastructure is categorized into specialized
                cells, each equipped with calibrated high-precision
                instrumentation for specific material properties.
              </p>
            </div>
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#b0b8c4",
                cursor: "pointer",
                userSelect: "none",
              }}
            >
              Filter Labs ▾
            </span>
          </motion.div>

          {/* ── Cards Grid ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
           className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {testingItems.map((item, index) => (
              <motion.a
                key={index}
                variants={itemVariants}
                href={item.doc}
                target="_blank"
                rel="noopener noreferrer"
                className="lab-card"
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  minHeight: 240,
                  borderRadius: 16,
                  overflow: "hidden",
                  textDecoration: "none",
                  color: "#fff",
                  cursor: "pointer",
                  padding: "26px 22px",
                  /* thin border so cards are distinct at rest */
                  boxShadow: "0 0 0 1px rgba(0,0,0,0.1)",
                }}
              >
                {/* Layer 0 — background photo */}
                <div
                  className="lab-card-bg"
                  style={{ backgroundImage: `url(${getLabImage(item.title)})` }}
                />

                {/* Layer 1 — gradient colour wash from item.color */}
                <div
                  className={`lab-card-wash bg-linear-to-br ${item.color}`}
                />

                {/* Layer 2 — grain texture */}
                <div className="lab-card-grain" />

                {/* Layer 3 — top-right arrow */}
                <div className="lab-card-arrow">
                  <ArrowUpRight size={14} />
                </div>

                {/* Layer 10 — main content */}
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
                    className="lab-card-icon"
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: 10,
                      background: "rgba(255,255,255,0.12)",
                      border: "1px solid rgba(255,255,255,0.22)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      flexShrink: 0,
                    }}
                  >
                    {getIcon(item.title)}
                  </div>

                  {/* Title + CTA */}
                  <div>
                    <h3
                      className="serif"
                      style={{
                        fontSize: 22,
                        fontWeight: 400,
                        lineHeight: 1.15,
                        color: "#fff",
                        margin: 0,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {item.title}
                    </h3>

                    <div
                      className="lab-card-cta"
                      style={{
                        marginTop: 12,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 5,
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: "0.09em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.8)",
                        borderBottom: "1px solid rgba(255,255,255,0.28)",
                        paddingBottom: 2,
                      }}
                    >
                      Download Specs <ArrowUpRight size={12} />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testing;
