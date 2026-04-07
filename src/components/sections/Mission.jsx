import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion";
import {
  FaBook, FaIndustry, FaFlask, FaTools,
  FaChalkboardTeacher, FaHandshake, FaVial
} from "react-icons/fa";

/* ─────────────────────────────────────────────────────────────────
   CONSTANTS
   ───────────────────────────────────────────────────────────────── */
const HEX = "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";

const ITEMS = [
  { id: 0, short: "Resource\nCenter",      label: "Resource Center",       color: "#9C0060", light: "#E91E8C", icon: <FaBook />,             desc: "Centralized hub for research, data & industry knowledge." },
  { id: 1, short: "Pilot\nFacility",       label: "Pilot Facility",        color: "#5C1191", light: "#AB47BC", icon: <FaIndustry />,         desc: "State-of-the-art infrastructure to prototype & validate innovations." },
  { id: 2, short: "Incubation\nCenter",    label: "Incubation Center",     color: "#006A77", light: "#00BCD4", icon: <FaFlask />,            desc: "Nurturing early-stage ventures with mentorship & resources." },
  { id: 3, short: "BIS Test\nStandards",   label: "Support BIS Standards", color: "#1B5E20", light: "#43A047", icon: <FaVial />,             desc: "Collaborating with BIS to shape next-gen quality benchmarks." },
  { id: 4, short: "Training &\nWorkshops", label: "Training & Workshops",  color: "#B74800", light: "#FF7043", icon: <FaChalkboardTeacher />, desc: "Expert-led programs designed to upskill industry professionals." },
  { id: 5, short: "Testing\nCapabilities", label: "Testing Capabilities",  color: "#880E1F", light: "#EF5350", icon: <FaTools />,            desc: "Advanced testing infrastructure for robust product validation." },
  { id: 6, short: "Consultancy",           label: "Consultancy",           color: "#C45E00", light: "#F47920", icon: <FaHandshake />,        desc: "Strategic advisory driving operational excellence & growth." },
];

const HEX_POS = [
  { left: "32.14%", top: "0.89%"  },
  { left: "58.93%", top: "14.76%" },
  { left: "58.93%", top: "42.66%" },
  { left: "32.14%", top: "56.69%" },
  { left:  "5.36%", top: "42.66%" },
  { left:  "5.36%", top: "14.76%" },
  { left: "58.93%", top: "70.56%" },
];
const CENTER_POS = { left: "32.14%", top: "28.79%" };
const HEX_W  = "35.71%";
const HEX_AR = "200 / 173";
const CONT_AR = "560 / 624";

const S = {
  bg:    "#0A1628",
  bgAlt: "#0D1B2E",
  cyan:  "#29ABE2",
  text:  "#F0F6FF",
  muted: "#5B7A99",
};

/* ─────────────────────────────────────────────────────────────────
   PARTICLE FIELD (canvas-based)
   ───────────────────────────────────────────────────────────────── */
const ParticleField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let W, H;
    const DOTS = 55;

    const dots = Array.from({ length: DOTS }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: 0.4 + Math.random() * 1.2,
      vx: (Math.random() - 0.5) * 0.00012,
      vy: (Math.random() - 0.5) * 0.00012,
      alpha: 0.15 + Math.random() * 0.3,
    }));

    const resize = () => {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      dots.forEach((d) => {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0) d.x = 1; if (d.x > 1) d.x = 0;
        if (d.y < 0) d.y = 1; if (d.y > 1) d.y = 0;
        ctx.beginPath();
        ctx.arc(d.x * W, d.y * H, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(41,171,226,${d.alpha})`;
        ctx.fill();
      });

      // Connection lines
      for (let i = 0; i < DOTS; i++) {
        for (let j = i + 1; j < DOTS; j++) {
          const dx = (dots[i].x - dots[j].x) * W;
          const dy = (dots[i].y - dots[j].y) * H;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x * W, dots[i].y * H);
            ctx.lineTo(dots[j].x * W, dots[j].y * H);
            ctx.strokeStyle = `rgba(41,171,226,${0.06 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }}
    />
  );
};

/* ─────────────────────────────────────────────────────────────────
   SCANLINE OVERLAY
   ───────────────────────────────────────────────────────────────── */
const ScanlineOverlay = () => (
  <div
    style={{
      position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
      backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.04) 2px, rgba(0,0,0,0.04) 4px)",
    }}
  />
);

/* ─────────────────────────────────────────────────────────────────
   DESKTOP HEX CELL
   ───────────────────────────────────────────────────────────────── */
const HexCell = ({ item, pos, active, onHover, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      onMouseEnter={() => onHover(item.id)}
      onMouseLeave={() => onHover(null)}
      initial={{ opacity: 0, scale: 0.5, rotate: -12 }}
      animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
      transition={{
        duration: 0.65,
        delay: 0.08 + index * 0.09,
        ease: [0.34, 1.56, 0.64, 1],
      }}
      whileHover={{ scale: 1.12, zIndex: 20 }}
      style={{
        position: "absolute",
        width: HEX_W,
        aspectRatio: HEX_AR,
        ...pos,
        cursor: "pointer",
        zIndex: active ? 10 : 2,
      }}
    >
      {/* Glow ring on hover */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.15 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "absolute", inset: "-10%",
              clipPath: HEX,
              background: `radial-gradient(circle, ${item.light}33 0%, transparent 70%)`,
              filter: `blur(8px)`,
              pointerEvents: "none",
            }}
          />
        )}
      </AnimatePresence>

      {/* Outer border shell */}
      <motion.div
        animate={{
          background: active
            ? `linear-gradient(145deg, ${item.light}88, ${item.color}55)`
            : "rgba(255,255,255,0.14)",
        }}
        transition={{ duration: 0.3 }}
        style={{ position: "absolute", inset: 0, clipPath: HEX }}
      />

      {/* Inner colored hex */}
      <motion.div
        animate={{
          filter: active
            ? `brightness(1.25) drop-shadow(0 0 16px ${item.light}99)`
            : "brightness(0.92)",
        }}
        transition={{ duration: 0.3 }}
        style={{
          position: "absolute", top: "8%", left: "8%", right: "8%", bottom: "8%",
          clipPath: HEX,
          background: `linear-gradient(145deg, ${item.light}, ${item.color})`,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", gap: "6%",
        }}
      >
        {/* Shimmer sweep */}
        <motion.div
          animate={{ x: ["-120%", "200%"] }}
          transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 4 + index * 0.7, ease: "easeInOut" }}
          style={{
            position: "absolute", top: 0, left: 0, width: "40%", height: "100%",
            background: "linear-gradient(105deg, transparent, rgba(255,255,255,0.18), transparent)",
            pointerEvents: "none",
          }}
        />

        <motion.div
          animate={{ scale: active ? 1.25 : 1, rotate: active ? [0, -8, 8, 0] : 0 }}
          transition={{ duration: 0.4 }}
          style={{
            fontSize: "clamp(14px, 2.4vw, 24px)", color: "white",
            filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.5))",
            position: "relative", zIndex: 1,
          }}
        >
          {item.icon}
        </motion.div>

        <p style={{
          margin: 0, fontWeight: 700, color: "white", textAlign: "center",
          whiteSpace: "pre-line", lineHeight: 1.25, padding: "0 8%",
          fontSize: "clamp(5px, 0.9vw, 13px)",
          textShadow: "0 1px 5px rgba(0,0,0,0.5)",
          position: "relative", zIndex: 1,
          fontFamily: "'Outfit', sans-serif",
        }}>
          {item.short}
        </p>
      </motion.div>
    </motion.div>
  );
};

/* ─────────────────────────────────────────────────────────────────
   CENTER HUB
   ───────────────────────────────────────────────────────────────── */
const CenterHex = ({ pos, activeItem }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.3 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
      style={{ position: "absolute", width: HEX_W, aspectRatio: HEX_AR, ...pos, zIndex: 5 }}
    >
      {/* Triple pulse rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{ scale: [1, 1.18, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 1, ease: "easeInOut" }}
          style={{
            position: "absolute", inset: "-6%", clipPath: HEX,
            background: `rgba(41,171,226,0.07)`,
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Border */}
      <div style={{ position: "absolute", inset: 0, clipPath: HEX, background: "rgba(41,171,226,0.18)" }} />

      {/* Inner dark hex */}
      <div style={{
        position: "absolute", top: "8%", left: "8%", right: "8%", bottom: "8%",
        clipPath: HEX,
        background: "linear-gradient(160deg, #1E3450, #080E1A)",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", gap: "6%",
      }}>
        <AnimatePresence mode="wait">
          {activeItem ? (
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, scale: 0.6, rotate: -15 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.6, rotate: 15 }}
              transition={{ duration: 0.28, ease: [0.34, 1.56, 0.64, 1] }}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10%" }}
            >
              <div style={{ fontSize: "clamp(12px, 1.8vw, 18px)", color: activeItem.light }}>
                {activeItem.icon}
              </div>
              <p style={{
                margin: 0, fontSize: "clamp(5px, 0.72vw, 11px)", fontWeight: 700,
                color: activeItem.light, textAlign: "center",
                padding: "0 10%", lineHeight: 1.3, whiteSpace: "pre-line",
                fontFamily: "'Outfit', sans-serif",
              }}>
                {activeItem.label}
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="default"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8%" }}
            >
              {/* Rotating hex icon */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                style={{
                  width: "28%", aspectRatio: "1",
                  border: `1.5px solid rgba(41,171,226,0.4)`,
                  clipPath: HEX,
                }}
              />
              <p style={{
                margin: 0, fontSize: "clamp(5.5px, 1.1vw, 11px)", fontWeight: 800,
                color: S.cyan, letterSpacing: "0.12em", textTransform: "uppercase",
                fontFamily: "'Outfit', sans-serif",
              }}>MISSION</p>
              <div style={{ width: "30%", height: 1, background: "rgba(41,171,226,0.3)", borderRadius: 99 }} />
              <p style={{
                margin: 0, fontSize: "clamp(3.5px, 0.52vw, 5.5px)", color: "rgba(255,255,255,0.3)",
                textAlign: "center", padding: "0 12%", lineHeight: 1.5, letterSpacing: "0.08em",
                fontFamily: "'Outfit', sans-serif",
              }}>CORE HUB</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

/* ─────────────────────────────────────────────────────────────────
   DESCRIPTION STRIP
   ───────────────────────────────────────────────────────────────── */
const DescriptionStrip = ({ activeItem }) => (
  <div style={{ minHeight: 70, display: "flex", alignItems: "center", justifyContent: "center", marginTop: 12 }}>
    <AnimatePresence mode="wait">
      {activeItem ? (
        <motion.div
          key={activeItem.id}
          initial={{ opacity: 0, y: 10, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.97 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: "inline-flex", alignItems: "center", gap: 12,
            background: `linear-gradient(135deg, ${activeItem.light}14, ${activeItem.color}0a)`,
            border: `1px solid ${activeItem.light}44`,
            borderRadius: 14, padding: "12px 24px", maxWidth: 520,
            backdropFilter: "blur(10px)",
          }}
        >
          {/* Colored dot */}
          <motion.div
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{
              width: 8, height: 8, borderRadius: "50%",
              background: activeItem.light, flexShrink: 0,
              boxShadow: `0 0 10px ${activeItem.light}`,
            }}
          />
          <span style={{ color: activeItem.light, fontSize: 17, flexShrink: 0 }}>{activeItem.icon}</span>
          <p style={{ margin: 0, fontSize: 13, color: S.text, lineHeight: 1.6, fontFamily: "'Outfit', sans-serif" }}>
            <strong style={{ color: activeItem.light, fontWeight: 700 }}>{activeItem.label}:</strong>{" "}
            <span style={{ color: S.muted }}>{activeItem.desc}</span>
          </p>
        </motion.div>
      ) : (
        <motion.p
          key="hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            margin: 0, fontSize: 12, color: "rgba(91,122,153,0.45)",
            letterSpacing: "0.1em", textTransform: "uppercase",
            fontFamily: "'Outfit', sans-serif",
          }}
        >
          ◆ &nbsp; Hover a hexagon to explore
        </motion.p>
      )}
    </AnimatePresence>
  </div>
);

/* ─────────────────────────────────────────────────────────────────
   MOBILE TILE
   ───────────────────────────────────────────────────────────────── */
const MobileTile = ({ item, active, onTap, index }) => (
  <motion.div
    onClick={() => onTap(active ? null : item.id)}
    initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.55, delay: index * 0.07, ease: [0.34, 1.56, 0.64, 1] }}
    whileTap={{ scale: 0.94 }}
    style={{ aspectRatio: HEX_AR, position: "relative", cursor: "pointer" }}
  >
    <motion.div
      animate={{ scale: active ? 1.08 : 1 }}
      transition={{ type: "spring", stiffness: 280, damping: 20 }}
      style={{ position: "absolute", inset: 0 }}
    >
      {/* Glow */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "absolute", inset: "-8%", clipPath: HEX,
              background: `radial-gradient(circle, ${item.light}44, transparent 70%)`,
              filter: "blur(6px)", pointerEvents: "none",
            }}
          />
        )}
      </AnimatePresence>

      <div style={{ position: "absolute", inset: 0, clipPath: HEX, background: "rgba(255,255,255,0.14)" }} />
      <motion.div
        animate={{ filter: active ? `brightness(1.2) drop-shadow(0 0 10px ${item.light}88)` : "brightness(0.9)" }}
        style={{
          position: "absolute", top: "8%", left: "8%", right: "8%", bottom: "8%",
          clipPath: HEX,
          background: `linear-gradient(145deg, ${item.light}, ${item.color})`,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", gap: 5,
        }}
      >
        {/* Shimmer */}
        <motion.div
          animate={{ x: ["-120%", "200%"] }}
          transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 + index * 0.5 }}
          style={{
            position: "absolute", top: 0, left: 0, width: "40%", height: "100%",
            background: "linear-gradient(105deg, transparent, rgba(255,255,255,0.18), transparent)",
            pointerEvents: "none",
          }}
        />
        <div style={{ fontSize: 18, color: "white", filter: "drop-shadow(0 1px 4px rgba(0,0,0,0.4))", zIndex: 1 }}>
          {item.icon}
        </div>
        <p style={{
          margin: 0, fontSize: 11, fontWeight: 700, color: "white",
          textAlign: "center", whiteSpace: "pre-line", lineHeight: 1.2, padding: "0 10%",
          textShadow: "0 1px 4px rgba(0,0,0,0.4)", zIndex: 1,
          fontFamily: "'Outfit', sans-serif",
        }}>
          {item.short}
        </p>
      </motion.div>
    </motion.div>
  </motion.div>
);

/* ─────────────────────────────────────────────────────────────────
   MAIN EXPORT
   ───────────────────────────────────────────────────────────────── */
export default function MissionHoneycomb7() {
  const [active, setActive] = useState(null);
  const [mobile, setMobile] = useState(false);
  const sectionRef = useRef(null);
  const headerRef  = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  useEffect(() => {
    const chk = () => setMobile(window.innerWidth < 640);
    chk();
    window.addEventListener("resize", chk);
    return () => window.removeEventListener("resize", chk);
  }, []);

  const activeItem = active !== null ? ITEMS[active] : null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800&family=Cormorant+Garamond:ital,wght@1,600;1,700&display=swap');
      `}</style>

      <section
        ref={sectionRef}
        style={{
          background: S.bg, fontFamily: "'Outfit', sans-serif",
          padding: mobile ? "56px 16px 72px" : "72px 24px 88px",
          position: "relative", overflow: "hidden",
        }}
      >
        {/* Layered backgrounds */}
        <ScanlineOverlay />
        <ParticleField />

        {/* Radial gradient center glow */}
        <motion.div
          style={{ y: bgY }}
          aria-hidden
          className="pointer-events-none"
          sx={{ position: "absolute", inset: 0 }}
        >
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse 700px 400px at 50% 50%, rgba(41,171,226,0.07), transparent 70%)",
            pointerEvents: "none",
          }} />
        </motion.div>

        {/* Hex grid texture */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: `
            linear-gradient(rgba(41,171,226,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(41,171,226,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }} />

        {/* Corner accent glows */}
        {[
          { left: "-80px", top: "-80px", color: "rgba(41,171,226,0.07)" },
          { right: "-80px", bottom: "-60px", color: "rgba(233,30,140,0.06)" },
        ].map((g, i) => (
          <motion.div
            key={i}
            aria-hidden
            animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 8 + i * 3, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute", width: 320, height: 320, borderRadius: "50%",
              background: `radial-gradient(circle, ${g.color} 0%, transparent 70%)`,
              pointerEvents: "none", ...g,
            }}
          />
        ))}

        {/* ── HEADER ── */}
        <div ref={headerRef} style={{ textAlign: "center", marginBottom: mobile ? 32 : 48, position: "relative", zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Eyebrow */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              marginBottom: 16,
            }}>
              <motion.div
                animate={{ scaleX: [0, 1] }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ width: 28, height: 1, background: `linear-gradient(90deg, transparent, ${S.cyan})`, borderRadius: 99 }}
              />
              <span style={{
                fontSize: 10, fontWeight: 800, letterSpacing: "0.25em",
                textTransform: "uppercase", color: S.cyan,
              }}>
                What We Deliver
              </span>
              <motion.div
                animate={{ scaleX: [0, 1] }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ width: 28, height: 1, background: `linear-gradient(90deg, ${S.cyan}, transparent)`, borderRadius: 99 }}
              />
            </div>

            {/* Title */}
            <h2 style={{
              margin: 0, fontWeight: 700, letterSpacing: "-0.02em",
              color: S.text, lineHeight: 1.15,
              fontSize: "clamp(26px, 4vw, 46px)",
            }}>
              Our{" "}
              <em style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                color: S.cyan,
                fontWeight: 600,
              }}>
                Mission
              </em>
            </h2>

            {/* Animated underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={headerInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{
                margin: "10px auto 0",
                width: 60, height: 2,
                background: `linear-gradient(90deg, ${S.cyan}, rgba(41,171,226,0.2))`,
                borderRadius: 99, transformOrigin: "left",
              }}
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={headerInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              style={{
                marginTop: 14, fontSize: 14, color: S.muted,
                maxWidth: 440, lineHeight: 1.75, fontWeight: 300,
                marginLeft: "auto", marginRight: "auto",
              }}
            >
              {mobile
                ? "Tap any hexagon · 7 pillars of our core mission"
                : "Hover any hexagon · 7 interconnected pillars forming our mission"}
            </motion.p>
          </motion.div>
        </div>

        {/* ── DESKTOP HONEYCOMB ── */}
        {!mobile && (
          <div style={{ maxWidth: 580, margin: "0 auto", position: "relative", zIndex: 2 }}>
            <div style={{ position: "relative", width: "100%", aspectRatio: CONT_AR }}>
              {ITEMS.map((item, i) => (
                <HexCell
                  key={item.id}
                  item={item}
                  pos={HEX_POS[i]}
                  active={active === item.id}
                  onHover={setActive}
                  index={i}
                />
              ))}
              <CenterHex pos={CENTER_POS} activeItem={activeItem} />

              {/* Edge connector between hex[2] and hex[6] */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.5 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                style={{
                  position: "absolute", left: "58.93%", top: "57.32%",
                  width: HEX_W, height: "3.5%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  pointerEvents: "none",
                }}
              >
                <div style={{
                  width: "30%", height: "1.5px",
                  background: `linear-gradient(90deg, ${ITEMS[6].light}, ${ITEMS[6].color})`,
                  borderRadius: 99,
                }} />
              </motion.div>
            </div>

            <DescriptionStrip activeItem={activeItem} />
          </div>
        )}

        {/* ── MOBILE ── */}
        {mobile && (
          <div style={{ maxWidth: 390, margin: "0 auto", position: "relative", zIndex: 2 }}>
            {/* Mission badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              style={{ textAlign: "center", marginBottom: 20 }}
            >
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: "linear-gradient(135deg, #1A2F4A, #0A1520)",
                border: `1.5px solid ${S.cyan}44`, borderRadius: 999,
                padding: "9px 26px",
                boxShadow: `0 0 24px ${S.cyan}22, inset 0 1px 0 rgba(255,255,255,0.06)`,
              }}>
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ width: 7, height: 7, borderRadius: "50%", background: S.cyan }}
                />
                <span style={{ fontSize: 14, fontWeight: 800, color: S.cyan, letterSpacing: "0.12em" }}>
                  MISSION
                </span>
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  style={{ width: 7, height: 7, borderRadius: "50%", background: S.cyan }}
                />
              </div>
            </motion.div>

            {/* 2-col hex grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 4px" }}>
              {ITEMS.slice(0, 6).map((item, i) => (
                <MobileTile key={item.id} item={item} active={active === item.id} onTap={setActive} index={i} />
              ))}
            </div>
            {/* 7th centered */}
            <div style={{ display: "flex", justifyContent: "center", marginTop: 4 }}>
              <div style={{ width: "47%" }}>
                <MobileTile item={ITEMS[6]} active={active === 6} onTap={setActive} index={6} />
              </div>
            </div>

            {/* Mobile description */}
            <AnimatePresence mode="wait">
              {activeItem && (
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, y: 12, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.97 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    marginTop: 16,
                    background: `linear-gradient(135deg, ${activeItem.light}12, ${activeItem.color}08)`,
                    border: `1px solid ${activeItem.light}44`,
                    borderRadius: 14, padding: "14px 16px",
                    display: "flex", alignItems: "flex-start", gap: 12,
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, flexShrink: 0 }}>
                    <span style={{ color: activeItem.light, fontSize: 20 }}>{activeItem.icon}</span>
                    <motion.div
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      style={{ width: 6, height: 6, borderRadius: "50%", background: activeItem.light }}
                    />
                  </div>
                  <div>
                    <p style={{
                      margin: "0 0 5px", fontSize: 13, fontWeight: 700, color: activeItem.light,
                      fontFamily: "'Outfit', sans-serif",
                    }}>
                      {activeItem.label}
                    </p>
                    <p style={{
                      margin: 0, fontSize: 12, color: S.muted, lineHeight: 1.65,
                      fontFamily: "'Outfit', sans-serif",
                    }}>
                      {activeItem.desc}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Bottom fade */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: 60,
          background: `linear-gradient(to top, ${S.bg}, transparent)`,
          pointerEvents: "none",
        }} />
      </section>
    </>
  );
}