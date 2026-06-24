import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  testNotifications,
  testingItems,
} from "../../components/data/TestingData.js";
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
  Mail,
} from "lucide-react";

import Eyebrow from "../../components/common/Eyebrow";
import usePageTitle from "../../hooks/usePageTitle.jsx";

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

const getLabImage = (title) => {
  const t = title.toLowerCase();
  if (t.includes("physical"))   return "/images/products/physicaltesting.jpg";
  if (t.includes("analytical")) return "/images/products/analyticaltesting.jpg";
  if (t.includes("fire"))       return "/images/products/firetesting.webp";
  if (t.includes("surface"))    return "/images/products/surface.jpg";
  if (t.includes("wet"))        return "/images/products/wettesting.jpg";
  if (t.includes("filter"))     return "/images/products/filtertesting.jpg";
  if (t.includes("insulation")) return "/images/products/insulationtesting.jpg";
  if (t.includes("fesem"))      return "/images/products/fesemedax.jpg";
  return "/images/products/physicaltesting.jpg";
};

const getIcon = (title) => {
  const t = title.toLowerCase();
  if (t.includes("physical"))   return <Layers size={22} />;
  if (t.includes("analytical")) return <FlaskConical size={22} />;
  if (t.includes("fire"))       return <Flame size={22} />;
  if (t.includes("surface"))    return <Microscope size={22} />;
  if (t.includes("wet"))        return <Droplets size={22} />;
  if (t.includes("filter"))     return <Filter size={22} />;
  if (t.includes("insulation")) return <Zap size={22} />;
  if (t.includes("fesem"))      return <Cpu size={22} />;
  return <Microscope size={22} />;
};

const Testing = () => {
  usePageTitle("Testing Facility");
  const navigate = useNavigate();

  // General testing enquiry
  const handleTestingEnquiry = () => {
    navigate("/contact", {
      state: {
        recipientEmail: "testing.int@psgtech.ac.in",
        service: "Testing Facility",
        source: "Testing Facility Page",
      },
    });
  };

  // FESEM EDAX enquiry
  const handleFesemEnquiry = () => {
    navigate("/contact", {
      state: {
        recipientEmail: "semedaxlab@psgtech.ac.in",
        service: "FESEM EDAX Testing",
        source: "Testing Facility Page",
      },
    });
  };

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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,700;9..40,900&family=DM+Serif+Display:ital@0;1&display=swap');

        @keyframes scroll-text {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-text {
          animation: scroll-text 40s linear infinite;
          display: flex;
        }
        .animate-scroll-text:hover { animation-play-state: paused; }

        @keyframes nabl-pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.25; }
        }
        .nabl-dot { animation: nabl-pulse 1.5s ease-in-out infinite; }

        .serif { font-family: 'DM Serif Display', Georgia, serif; }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        .hero-float { animation: float 6s ease-in-out infinite; }

        .lab-card-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          z-index: 0;
          filter: brightness(0.35) saturate(0.5);
          transform: scale(1);
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), filter 0.5s ease;
        }
        .lab-card:hover .lab-card-bg {
          transform: scale(1.07);
          filter: brightness(0.18) saturate(0.4);
        }
        .lab-card-wash {
          position: absolute;
          inset: 0;
          z-index: 1;
          opacity: 0;
          transition: opacity 0.45s ease;
          background: linear-gradient(135deg, #1a237e 0%, #00acc1 100%);
        }
        .lab-card:hover .lab-card-wash { opacity: 0.72; }
        .lab-card-grain {
          position: absolute;
          inset: 0;
          z-index: 2;
          opacity: 0.04;
          pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 120px 120px;
        }
        .lab-card-arrow {
          position: absolute;
          top: 16px;
          right: 16px;
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
          transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), background 0.2s ease;
        }
        .lab-card:hover .lab-card-arrow {
          opacity: 1;
          transform: scale(1) rotate(0deg);
        }
        .lab-card-icon {
          transition: transform 0.35s ease, background 0.35s ease, border-color 0.35s ease;
        }
        .lab-card:hover .lab-card-icon {
          transform: scale(1.08);
          background: rgba(0,172,193,0.28) !important;
          border-color: rgba(0,172,193,0.5) !important;
        }
        .lab-card-cta {
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.28s ease 0.06s, transform 0.28s ease 0.06s;
        }
        .lab-card:hover .lab-card-cta {
          opacity: 1;
          transform: translateY(0);
        }

        /* Email button rows */
        .email-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 0;
          border-bottom: 1px solid #e2e8f0;
          background: none;
          border-left: none;
          border-right: none;
          border-top: none;
          text-align: left;
          width: 100%;
          color: #1a237e;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: color 0.2s ease;
          font-family: inherit;
        }
        .email-btn:last-child { border-bottom: none; }
        .email-btn:hover { color: #00acc1; }
        .email-btn svg { flex-shrink: 0; color: #00acc1; }

        .stat-card {
          transition: box-shadow 0.25s ease, transform 0.25s ease;
        }
        .stat-card:hover {
          box-shadow: 0 8px 28px rgba(26,35,126,0.1);
          transform: translateY(-2px);
        }
        .enquiry-card {
          transition: box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .enquiry-card:hover {
          box-shadow: 0 6px 24px rgba(0,172,193,0.1);
          border-color: rgba(0,172,193,0.35) !important;
        }
      `}</style>

      {/* NABL Bar */}
      <div style={{ background: NAVY, padding: "5px 32px", display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 8 }}>
        <span className="nabl-dot" style={{ width: 6, height: 6, borderRadius: "50%", background: TEAL, display: "inline-block" }} />
        <span style={{ color: "rgba(255,255,255,0.65)", fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>
          NABL Accredited
        </span>
      </div>

      {/* Scrolling Notifications */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{ background: SCROLLBG, overflow: "hidden", padding: "9px 0", borderBottom: `3px solid ${TEAL}` }}
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
                color: "rgba(255,255,255,0.72)",
                fontSize: 12,
                textDecoration: "none",
                padding: "0 32px",
                whiteSpace: "nowrap",
                borderRight: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <span style={{ color: TEAL, fontWeight: 700, fontSize: 10 }}>▶</span>
              {note.text}
              {note.pdf && <ArrowUpRight size={12} style={{ opacity: 0.45 }} />}
            </a>
          ))}
        </div>
      </motion.div>

      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          padding: "60px 32px 52px",
          background: `linear-gradient(160deg, #eef1fb 0%, #f4f6fb 55%, #e8f5f8 100%)`,
          borderBottom: `1px solid ${DIV}`,
        }}
      >
        <div style={{ position: "absolute", top: 0, right: 0, width: 480, height: "100%", background: `linear-gradient(150deg, rgba(0,172,193,0.08) 0%, rgba(0,172,193,0.03) 100%)`, clipPath: "polygon(28% 0%, 100% 0%, 100% 100%, 58% 100%)", zIndex: 0, pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 0, right: 0, width: 68, height: 68, background: "rgba(0,172,193,0.12)", zIndex: 0, pointerEvents: "none" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center", gap: 48, position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: 540 }}>
            <motion.div initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} style={{ marginBottom: 16 }}>
              <span style={{ display: "inline-block", fontSize: 10, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: TEAL, border: `1px solid rgba(0,172,193,0.3)`, borderRadius: 4, padding: "4px 10px", background: TEALLT }}>
                Testing Services
              </span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="serif" style={{ fontSize: "clamp(36px, 5vw, 54px)", fontWeight: 400, lineHeight: 1.07, letterSpacing: "-0.025em", color: NAVY, margin: "0 0 8px" }}>
              Advanced Testing
            </motion.h1>
            <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.14 }} className="serif" style={{ fontSize: "clamp(36px, 5vw, 54px)", fontWeight: 400, lineHeight: 1.07, letterSpacing: "-0.025em", color: TEAL, fontStyle: "italic", margin: "0 0 20px" }}>
              Facility.
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} style={{ fontSize: 14, lineHeight: 1.75, color: BODY, margin: "0 0 32px" }}>
              PSG Tech's COE Indutech offers state-of-the-art instruments for comprehensive material evaluation. Explore our specialized laboratories below for detailed testing capabilities.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.26 }} style={{ display: "flex", gap: 16, flexWrap: "wrap", paddingTop: 20, borderTop: `1px solid ${DIV}` }}>
              {[
                { value: "8+", label: "Specialized Labs" },
                { value: "NABL", label: "Accredited" },
                { value: "200+", label: "Test Parameters" },
              ].map((stat) => (
                <div key={stat.label} className="stat-card" style={{ background: SURFACE, border: `1px solid ${DIV}`, borderRadius: 10, padding: "12px 20px", minWidth: 100 }}>
                  <p style={{ fontSize: 22, fontWeight: 700, color: NAVY, margin: 0, lineHeight: 1 }}>{stat.value}</p>
                  <p style={{ fontSize: 10, color: MUTED, margin: "4px 0 0", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }} className="hero-float" style={{ flexShrink: 0 }}>
            <div style={{ width: 240, height: 240, borderRadius: 16, overflow: "hidden", boxShadow: `0 0 0 4px ${TEALLT}, 0 24px 64px rgba(26,35,126,0.18)` }}>
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=530&h=530&fit=crop&crop=center" alt="Industrial fibers" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Labs Grid */}
      <section style={{ padding: "64px 32px", background: BG }} id="labs">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 36 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <div style={{ width: 32, height: 3, background: TEAL, borderRadius: 2 }} />
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: TEAL }}>Our Laboratories</span>
              </div>
              <h2 className="serif" style={{ fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 400, color: NAVY, margin: "0 0 8px", letterSpacing: "-0.02em" }}>
                Core Laboratories
              </h2>
              <p style={{ fontSize: 13, color: BODY, maxWidth: 400, lineHeight: 1.65, margin: 0 }}>
                Specialized cells, each equipped with calibrated high-precision instrumentation for specific material properties.
              </p>
            </div>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: TEAL, cursor: "pointer", userSelect: "none", border: `1px solid rgba(0,172,193,0.3)`, borderRadius: 6, padding: "6px 12px", background: TEALLT }}>
              Filter Labs ▾
            </span>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {testingItems.map((item, index) => (
              <motion.a
                key={index}
                variants={itemVariants}
                href={item.doc}
                target="_blank"
                rel="noopener noreferrer"
                className="lab-card"
                style={{ position: "relative", display: "flex", flexDirection: "column", minHeight: 220, borderRadius: 16, overflow: "hidden", textDecoration: "none", color: "#fff", cursor: "pointer", padding: "20px 18px", boxShadow: `0 2px 12px rgba(26,35,126,0.1), 0 0 0 1px ${DIV}` }}
              >
                <div className="lab-card-bg" style={{ backgroundImage: `url(${getLabImage(item.title)})` }} />
                <div className="lab-card-wash" />
                <div className="lab-card-grain" />
                <div className="lab-card-arrow"><ArrowUpRight size={14} /></div>
                <div style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", flex: 1, justifyContent: "space-between" }}>
                  <div className="lab-card-icon" style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(0,172,193,0.2)", border: "1px solid rgba(0,172,193,0.35)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", flexShrink: 0 }}>
                    {getIcon(item.title)}
                  </div>
                  <div>
                    <h3 className="serif" style={{ fontSize: 19, fontWeight: 400, lineHeight: 1.1, color: "#fff", margin: 0, letterSpacing: "-0.01em" }}>{item.title}</h3>
                    <div className="lab-card-cta" style={{ marginTop: 10, display: "inline-flex", alignItems: "center", gap: 5, fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: TEAL, borderBottom: `1px solid rgba(0,172,193,0.45)`, paddingBottom: 2 }}>
                      Download Specs <ArrowUpRight size={11} />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Enquiries */}
      <section style={{ background: SURFACE2, borderTop: `1px solid ${DIV}`, padding: "52px 32px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
            <div style={{ width: 28, height: 3, background: TEAL, borderRadius: 2 }} />
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: TEAL }}>Enquiries</span>
          </div>
          <h2 className="serif" style={{ fontSize: "clamp(20px, 2.5vw, 26px)", fontWeight: 400, color: NAVY, margin: "0 0 6px", letterSpacing: "-0.02em" }}>
            Contact the Testing Facility
          </h2>
          <p style={{ fontSize: 13, color: BODY, margin: "0 0 32px", lineHeight: 1.6, maxWidth: 420 }}>
            For test requests, instrument bookings, or technical enquiries, reach our lab coordinators directly via the addresses below.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>

            {/* General Testing */}
            <div className="enquiry-card" style={{ background: SURFACE, border: `1px solid ${DIV}`, borderRadius: 14, padding: "24px 26px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: TEALLT, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Mail size={15} color={TEAL} />
                </div>
                <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: NAVY, margin: 0 }}>
                  For Testing Enquiries
                </p>
              </div>
              {/* ✅ Navigate to contact page with prefilled email */}
              {["testing.int@psgtech.ac.in", "testing1.int@psgtech.ac.in"].map((email) => (
                <button
                  key={email}
                  onClick={handleTestingEnquiry}
                  className="email-btn"
                >
                  <Mail size={14} />
                  {email}
                </button>
              ))}
            </div>

            {/* FESEM EDAX */}
            <div className="enquiry-card" style={{ background: SURFACE, border: `1px solid ${DIV}`, borderRadius: 14, padding: "24px 26px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: TEALLT, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Mail size={15} color={TEAL} />
                </div>
                <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: NAVY, margin: 0 }}>
                  For FESEM EDAX Test Enquiries
                </p>
              </div>
              {/* ✅ Navigate to contact page with FESEM email */}
              <button onClick={handleFesemEnquiry} className="email-btn">
                <Mail size={14} />
                semedaxlab@psgtech.ac.in
              </button>
            </div>

          </div>

          {/* Bottom strip */}
          <div style={{ marginTop: 32, paddingTop: 20, borderTop: `1px solid ${DIV}`, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span className="nabl-dot" style={{ width: 6, height: 6, borderRadius: "50%", background: TEAL, display: "inline-block" }} />
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: TEAL }}>NABL Accredited</span>
            </div>
            <span style={{ fontSize: 11, color: MUTED }}>PSG College of Technology — Centre of Excellence for Industrial and Home Textiles</span>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Testing;