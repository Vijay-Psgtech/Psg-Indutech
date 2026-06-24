import { useState, useEffect, useRef, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

/* ─────────────────────────────────────────────────────────────────
   CONSTANTS
───────────────────────────────────────────────────────────────── */
const HEX_CLIP =
  "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";

const ITEMS = [
  { id: 0, short: "Resource\nCenter",      label: "Resource Center",       color: "#9C0060", light: "#E91E8C", desc: "Centralized hub for research, data & industry knowledge." },
  { id: 1, short: "Pilot\nFacility",       label: "Pilot Facility",        color: "#5C1191", light: "#AB47BC", desc: "State-of-the-art infrastructure to prototype & validate innovations." },
  { id: 2, short: "Incubation\nCenter",    label: "Incubation Center",     color: "#006A77", light: "#00BCD4", desc: "Nurturing early-stage ventures with mentorship & resources." },
  { id: 3, short: "BIS Test\nStandards",   label: "Support BIS Standards", color: "#1B5E20", light: "#43A047", desc: "Collaborating with BIS to shape next-gen quality benchmarks." },
  { id: 4, short: "Training &\nWorkshops", label: "Training & Workshops",  color: "#B74800", light: "#FF7043", desc: "Expert-led programs designed to upskill industry professionals." },
  { id: 5, short: "Testing\nCapabilities", label: "Testing Capabilities",  color: "#880E1F", light: "#EF5350", desc: "Advanced testing infrastructure for robust product validation." },
  { id: 6, short: "Consultancy",           label: "Consultancy",           color: "#C45E00", light: "#F47920", desc: "Strategic advisory driving operational excellence & growth." },
];

const ICONS = [
  <svg key={0} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: "1em", height: "1em" }}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>,
  <svg key={1} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: "1em", height: "1em" }}><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>,
  <svg key={2} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: "1em", height: "1em" }}><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18" /></svg>,
  <svg key={3} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: "1em", height: "1em" }}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /></svg>,
  <svg key={4} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: "1em", height: "1em" }}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>,
  <svg key={5} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: "1em", height: "1em" }}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>,
  <svg key={6} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: "1em", height: "1em" }}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
];

/* ── Color palette ── */
const S = {
  bg: "#EDF2FA",
  blue: "#1A7EC8",
  dark: "#0B1F3A",
  muted: "#6B8AAA",
};

/* ─────────────────────────────────────────────────────────────────
   HOOK — measure container width via ResizeObserver
───────────────────────────────────────────────────────────────── */
function useContainerWidth(ref) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([e]) => setWidth(e.contentRect.width));
    ro.observe(ref.current);
    setWidth(ref.current.offsetWidth);
    return () => ro.disconnect();
  }, [ref]);
  return width;
}

/* ─────────────────────────────────────────────────────────────────
   PARTICLE CANVAS
───────────────────────────────────────────────────────────────── */
const ParticleField = () => {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let id;
    const N = 55;
    const dots = Array.from({ length: N }, () => ({
      x: Math.random(), y: Math.random(),
      r: 0.4 + Math.random() * 1.2,
      vx: (Math.random() - 0.5) * 0.00014,
      vy: (Math.random() - 0.5) * 0.00014,
      a: 0.12 + Math.random() * 0.25,
    }));
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);
    const draw = () => {
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);
      dots.forEach((d) => {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0) d.x = 1; if (d.x > 1) d.x = 0;
        if (d.y < 0) d.y = 1; if (d.y > 1) d.y = 0;
        ctx.beginPath(); ctx.arc(d.x * W, d.y * H, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(26,126,200,${d.a})`; ctx.fill();
      });
      for (let i = 0; i < N; i++) for (let j = i + 1; j < N; j++) {
        const dx = (dots[i].x - dots[j].x) * W, dy = (dots[i].y - dots[j].y) * H;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 110) {
          ctx.beginPath(); ctx.moveTo(dots[i].x * W, dots[i].y * H); ctx.lineTo(dots[j].x * W, dots[j].y * H);
          ctx.strokeStyle = `rgba(26,126,200,${0.06 * (1 - dist / 110)})`; ctx.lineWidth = 0.5; ctx.stroke();
        }
      }
      id = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(id); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} />;
};

/* ─────────────────────────────────────────────────────────────────
   CONNECTOR SVG LINES
───────────────────────────────────────────────────────────────── */
const ConnectorLines = ({ size, activeId }) => {
  const cx = size / 2, cy = size / 2;
  const orbitR = size * 0.45;
  const hubEdge = size * 0.32 * 0.24;
  const hexEdge = size * 0.11 * 0.38;
  return (
    <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", overflow: "visible" }}>
      {ITEMS.map((item, i) => {
        const angle = ((2 * Math.PI) / 7) * i - Math.PI / 2;
        const hx = cx + orbitR * Math.cos(angle), hy = cy + orbitR * Math.sin(angle);
        const x1 = cx + hubEdge * Math.cos(angle), y1 = cy + hubEdge * Math.sin(angle);
        const x2 = hx - hexEdge * Math.cos(angle), y2 = hy - hexEdge * Math.sin(angle);
        const isA = activeId === i;
        return (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke={item.light} strokeWidth={isA ? 2 : 1.5}
            strokeOpacity={isA ? 1 : 0.28}
            strokeDasharray={isA ? "0" : "5 4"}
            style={{ transition: "all 0.3s ease" }}
          />
        );
      })}
    </svg>
  );
};

/* ─────────────────────────────────────────────────────────────────
   HEX CELL
───────────────────────────────────────────────────────────────── */
const HexCell = ({ item, index, arenaSize, active, onHover }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });
  const cx = arenaSize / 2.44, cy = arenaSize / 2;
  const orbitR = arenaSize * 0.44;
  const hexW = arenaSize * 0.22;
  const hexH = hexW * (183 / 200);
  const angle = ((2 * Math.PI) / 7) * index - Math.PI / 2;
  const px = cx + orbitR * Math.cos(angle);
  const py = cy + orbitR * Math.sin(angle);
  const iconSz = Math.max(4, hexW * 0.11);
  const labelSz = Math.max(14, hexW * 0.028);

  return (
    <motion.div
      ref={ref}
      onMouseEnter={() => onHover(item.id)}
      onMouseLeave={() => onHover(null)}
      initial={{ opacity: 0, scale: 0.3, rotate: -18 }}
      animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
      transition={{ duration: 0.65, delay: 0.1 + index * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
      whileHover={{ scale: 1.11, zIndex: 20 }}
      style={{
        position: "absolute", width: hexW, height: hexH,
        left: px, top: py, transform: "translate(-50%,-50%)",
        cursor: "pointer", zIndex: active ? 10 : 2,
      }}
    >
      {/* Glow */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1.22 }} exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "absolute", inset: "-14%", clipPath: HEX_CLIP,
              background: `radial-gradient(circle,${item.light}44 0%,transparent 70%)`,
              filter: "blur(12px)", pointerEvents: "none",
            }}
          />
        )}
      </AnimatePresence>

      {/* Border shell */}
      <motion.div
        animate={{ background: active ? `linear-gradient(145deg,${item.light}88,${item.color}55)` : "rgba(26,126,200,0.2)" }}
        transition={{ duration: 0.3 }}
        style={{ position: "absolute", inset: 0, clipPath: HEX_CLIP }}
      />

      {/* Inner fill */}
      <motion.div
        animate={{ filter: active ? `brightness(1.18) drop-shadow(0 0 16px ${item.light}44)` : "brightness(0.96)" }}
        transition={{ duration: 0.3 }}
        style={{
          position: "absolute", top: "8%", left: "8%", right: "8%", bottom: "8%",
          clipPath: HEX_CLIP,
          background: `linear-gradient(145deg,${item.light},${item.color})`,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "6%",
        }}
      >
        {/* Shimmer sweep */}
        <motion.div
          animate={{ x: ["-150%", "400%"] }}
          transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 4 + index * 0.7, ease: "easeInOut" }}
          style={{
            position: "absolute", top: 0, left: 0, width: "32%", height: "100%",
            background: "linear-gradient(105deg,transparent,rgba(255,255,255,0.2),transparent)",
            pointerEvents: "none",
          }}
        />
        <motion.div
          animate={{ scale: active ? 1.22 : 1 }} transition={{ duration: 0.3 }}
          style={{ fontSize: iconSz, color: "white", filter: "drop-shadow(0 2px 5px rgba(0,0,0,.4))", position: "relative", zIndex: 1, lineHeight: 1 }}
        >
          {ICONS[item.id]}
        </motion.div>
        <p style={{
          margin: 0, fontWeight: 700, color: "white", textAlign: "center",
          whiteSpace: "pre-line", lineHeight: 1.25, padding: "0 8%",
          fontSize: labelSz, textShadow: "0 1px 5px rgba(0,0,0,.4)",
          position: "relative", zIndex: 1, fontFamily: "'Outfit',sans-serif",
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
const CenterHub = ({ arenaSize, activeItem }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const cx = arenaSize / 2.46, cy = arenaSize / 2.46;
  const hubW = arenaSize * 0.22;
  const hubH = hubW * (173 / 200);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.2 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.75, ease: [0.34, 1.56, 0.64, 1] }}
      style={{
        position: "absolute", width: hubW, height: hubH,
        left: cx, top: cy, transform: "translate(-50%,-50%)", zIndex: 5,
      }}
    >
      {[0, 1, 2].map((i) => (
        <motion.div key={i}
          animate={{ scale: [1, 1.22, 1], opacity: [0.12, 0.38, 0.12] }}
          transition={{ duration: 3, repeat: Infinity, delay: i, ease: "easeInOut" }}
          style={{ position: "absolute", inset: "-9%", clipPath: HEX_CLIP, background: "rgba(26,126,200,.1)", pointerEvents: "none" }}
        />
      ))}
      <div style={{ position: "absolute", inset: 0, clipPath: HEX_CLIP, background: "rgba(26,126,200,.28)" }} />
      <div style={{
        position: "absolute", top: "10%", left: "10%", right: "10%", bottom: "10%",
        clipPath: HEX_CLIP,
        background: "linear-gradient(160deg,#1B3560,#060C18)",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8%",
      }}>
        <AnimatePresence mode="wait">
          {activeItem ? (
            <motion.div key={activeItem.id}
              initial={{ opacity: 0, scale: 0.6, rotate: -15 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.6, rotate: 15 }}
              transition={{ duration: 0.28, ease: [0.34, 1.56, 0.64, 1] }}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8%", padding: "0 10%" }}
            >
              <div style={{ fontSize: Math.max(11, hubW * 0.12), color: activeItem.light }}>{ICONS[activeItem.id]}</div>
              <p style={{
                margin: 0, fontSize: Math.max(5, hubW * 0.067), fontWeight: 700,
                color: activeItem.light, textAlign: "center", lineHeight: 1.3,
                fontFamily: "'Outfit',sans-serif",
              }}>{activeItem.label}</p>
            </motion.div>
          ) : (
            <motion.div key="default"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8%", width: "100%" }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                style={{ width: `${hubW * 0.26}px`, height: `${hubW * 0.26}px`, border: "1.5px solid rgba(26,126,200,.5)", clipPath: HEX_CLIP }}
              />
              <p style={{ margin: 0, fontSize: Math.max(7, hubW * 0.08), fontWeight: 900, color: S.blue, letterSpacing: "0.18em", textTransform: "uppercase", fontFamily: "'Outfit',sans-serif" }}>
                MISSION
              </p>
              <div style={{ width: "30%", height: 1, background: "rgba(26,126,200,.3)", borderRadius: 99 }} />
              <p style={{ margin: 0, fontSize: Math.max(5, hubW * 0.05), color: "rgba(255,255,255,.25)", textAlign: "center", letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "'Outfit',sans-serif", padding: "0 12%" }}>
                CORE HUB
              </p>
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
  <div style={{ minHeight: 76, display: "flex", alignItems: "center", justifyContent: "center", marginTop: 71 }}>
    <AnimatePresence mode="wait">
      {activeItem ? (
        <motion.div key={activeItem.id}
          initial={{ opacity: 0, y: 10, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.97 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: "inline-flex", alignItems: "center", gap: 12,
            background: `linear-gradient(135deg,${activeItem.light}12,${activeItem.color}0a)`,
            border: `1px solid ${activeItem.light}44`,
            borderRadius: 14, padding: "12px 22px", maxWidth: 540,
            backdropFilter: "blur(10px)",
          }}
        >
          <motion.div
            animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 1.5, repeat: Infinity }}
            style={{ width: 8, height: 8, borderRadius: "50%", background: activeItem.light, flexShrink: 0, boxShadow: `0 0 10px ${activeItem.light}` }}
          />
          <span style={{ color: activeItem.light, fontSize: 20, flexShrink: 0 }}>{ICONS[activeItem.id]}</span>
          <p style={{ margin: 0, fontSize: 13.5, color: S.text, lineHeight: 1.65, fontFamily: "'Outfit',sans-serif" }}>
            <strong style={{ color: activeItem.light, fontWeight: 700 }}>{activeItem.label}: </strong>
            <span style={{ color: S.muted }}>{activeItem.desc}</span>
          </p>
        </motion.div>
      ) : (
        <motion.p key="hint" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          style={{ margin: 0, fontSize: 11, color: "rgba(138,170,200,.45)", letterSpacing: ".12em", textTransform: "uppercase", fontFamily: "'Outfit',sans-serif" }}
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
    whileTap={{ scale: 0.93 }}
    style={{ aspectRatio: "200/173", position: "relative", cursor: "pointer" }}
  >
    <motion.div animate={{ scale: active ? 1.06 : 1 }} transition={{ type: "spring", stiffness: 280, damping: 20 }} style={{ position: "absolute", inset: 0 }}>
      <AnimatePresence>
        {active && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ position: "absolute", inset: "-8%", clipPath: HEX_CLIP, background: `radial-gradient(circle,${item.light}44,transparent 70%)`, filter: "blur(8px)", pointerEvents: "none" }}
          />
        )}
      </AnimatePresence>
      <div style={{ position: "absolute", inset: 0, clipPath: HEX_CLIP, background: "rgba(26,126,200,.2)" }} />
      <motion.div
        animate={{ filter: active ? `brightness(1.2) drop-shadow(0 0 10px ${item.light}88)` : "brightness(0.95)" }}
        style={{
          position: "absolute", top: "8%", left: "8%", right: "8%", bottom: "8%",
          clipPath: HEX_CLIP, background: `linear-gradient(145deg,${item.light},${item.color})`,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5,
        }}
      >
        <motion.div animate={{ x: ["-120%", "200%"] }} transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 + index * 0.5 }}
          style={{ position: "absolute", top: 0, left: 0, width: "40%", height: "100%", background: "linear-gradient(105deg,transparent,rgba(255,255,255,.18),transparent)", pointerEvents: "none" }}
        />
        <div style={{ fontSize: 18, color: "white", filter: "drop-shadow(0 1px 4px rgba(0,0,0,.4))", zIndex: 1 }}>{ICONS[item.id]}</div>
        <p style={{ margin: 0, fontSize: 11, fontWeight: 700, color: "white", textAlign: "center", whiteSpace: "pre-line", lineHeight: 1.2, padding: "0 10%", textShadow: "0 1px 4px rgba(0,0,0,.4)", zIndex: 1, fontFamily: "'Outfit',sans-serif" }}>
          {item.short}
        </p>
      </motion.div>
    </motion.div>
  </motion.div>
);

/* ─────────────────────────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────────────────────────── */
export default function VisionMissionSection() {
  const [active, setActive] = useState(null);
  const [mobile, setMobile] = useState(false);

  const sectionRef = useRef(null);
  const arenaRef   = useRef(null);
  const headerRef  = useRef(null);
  const quoteRef   = useRef(null);

  const arenaWidth   = useContainerWidth(arenaRef);
  const arenaSize    = arenaWidth || 520;
  const activeItem   = active !== null ? ITEMS[active] : null;

  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const quoteInView  = useInView(quoteRef,  { once: true, margin: "-40px" });

  /* ── Parallax scroll ── */
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });

  // Smooth spring for each parallax layer
  const rawFar  = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const rawMid  = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const rawNear = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const rawGlow = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  const farY  = useSpring(rawFar,  { stiffness: 80, damping: 30 });
  const midY  = useSpring(rawMid,  { stiffness: 80, damping: 30 });
  const nearY = useSpring(rawNear, { stiffness: 80, damping: 30 });

  useEffect(() => {
    const chk = () => setMobile(window.innerWidth < 640);
    chk();
    window.addEventListener("resize", chk);
    return () => window.removeEventListener("resize", chk);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800;900&family=Playfair+Display:ital,wght@0,700;1,600;1,700&display=swap');
        @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; } }
      `}</style>

      <section
        ref={sectionRef}
        style={{
          position: "relative", overflow: "hidden",
          background: `linear-gradient(180deg, ${S.bg} 0%, ${S.bgMid} 48%, ${S.bg} 100%)`,
          fontFamily: "'Outfit', sans-serif",
          padding: mobile ? "0 0 64px" : "0 0 80px",
        }}
      >

        {/* ── PARALLAX LAYER 1: far — particles & orb glows ── */}
        <motion.div style={{ y: farY, position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
          <ParticleField />
          {/* Grid texture */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: `linear-gradient(rgba(26,126,200,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(26,126,200,.04) 1px,transparent 1px)`,
            backgroundSize: "56px 56px",
          }} />
        </motion.div>

        {/* ── PARALLAX LAYER 2: mid — ambient orbs ── */}
        <motion.div style={{ y: midY, position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.85, 0.5] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            style={{ position: "absolute", width: 520, height: 520, top: "-8%", left: "-8%", borderRadius: "50%", background: "radial-gradient(circle,rgba(26,126,200,.1) 0%,transparent 70%)" }}
          />
          <motion.div
            animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.75, 0.4] }}
            transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            style={{ position: "absolute", width: 420, height: 420, bottom: "-4%", right: "-6%", borderRadius: "50%", background: "radial-gradient(circle,rgba(233,30,140,.08) 0%,transparent 70%)" }}
          />
        </motion.div>

        {/* ── PARALLAX LAYER 3: near — center radial glow (moves slowest) ── */}
        <motion.div style={{ y: nearY, position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 700px 500px at 50% 60%,rgba(26,126,200,.07),transparent 70%)" }} />
        </motion.div>

        {/* ══════════════════════════════════════
            VISION HERO STRIP
        ══════════════════════════════════════ */}
        <div
          ref={headerRef}
          style={{
            position: "relative", zIndex: 2,
            display: "flex", flexDirection: "column", alignItems: "center",
            padding: mobile ? "64px 24px 0" : "80px 24px 0",
            textAlign: "center",
          }}
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 18 }}
          >
            <motion.div initial={{ scaleX: 0 }} animate={headerInView ? { scaleX: 1 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
              style={{ width: 32, height: 1.5, background: `linear-gradient(90deg,transparent,${S.blue})`, borderRadius: 99 }} />
            <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: ".25em", textTransform: "uppercase", color: S.blue }}>
              What We Stand For
            </span>
            <motion.div initial={{ scaleX: 0 }} animate={headerInView ? { scaleX: 1 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
              style={{ width: 32, height: 1.5, background: `linear-gradient(90deg,${S.blue},transparent)`, borderRadius: 99 }} />
          </motion.div>

          {/* Main heading */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            style={{ margin: 0, fontWeight: 900, letterSpacing: "-.03em", color: S.text, lineHeight: 1.1, fontSize: "clamp(34px,5.5vw,64px)" }}
          >
            Our{" "}
            <em style={{ fontFamily: "'Playfair Display',serif", fontStyle: "italic", color: S.blue, fontWeight: 700 }}>
              Vision
            </em>{" & "}
            <em style={{ fontFamily: "'Playfair Display',serif", fontStyle: "italic", color: S.blue, fontWeight: 700 }}>
              Mission
            </em>
          </motion.h2>

          {/* Animated underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={headerInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ margin: "14px auto 0", width: 72, height: 2.5, background: `linear-gradient(90deg,${S.blue},rgba(26,126,200,.2))`, borderRadius: 99, transformOrigin: "left" }}
          />

          {/* Quote block */}
          <motion.div
            ref={quoteRef}
            initial={{ opacity: 0, y: 28 }}
            animate={quoteInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: "relative", marginTop: 32, maxWidth: 720 }}
          >
            {/* Decorative quote marks */}
            <span style={{
              position: "absolute", top: -28, left: -16,
              fontSize: 130, fontWeight: 900, lineHeight: 1,
              color: "rgba(26,126,200,.1)", fontFamily: "'Playfair Display',serif",
              userSelect: "none", pointerEvents: "none",
            }}>"</span>
            <p style={{
              fontSize: "clamp(15px,2.2vw,20px)", color: S.blue,
              lineHeight: 1.8, fontWeight: 300, padding: "0 20px",
              fontFamily: "'Outfit',sans-serif", margin: 0,
            }}>
              To be a dynamic, competitive and world-class{" "}
              <strong style={{ fontWeight: 800, fontStyle: "italic", color: S.text }}>
                "Centre of Excellence"
              </strong>{" "}
              for Technical Textiles research with an emphasis on Industrial &amp;
              Home textiles, dedicated to the aspirations of the Indian Technical
              Textile Industry.
            </p>
            <span style={{
              position: "absolute", bottom: -60, right: -12,
              fontSize: 130, fontWeight: 900, lineHeight: 1,
              color: "rgba(26,126,200,.1)", fontFamily: "'Playfair Display',serif",
              userSelect: "none", pointerEvents: "none",
            }}>"</span>
          </motion.div>
        </div>

        {/* ── SECTION DIVIDER ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={quoteInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.65 }}
          style={{
            position: "relative", zIndex: 2,
            display: "flex", alignItems: "center", gap: 16,
            margin: mobile ? "44px auto 0" : "56px auto 0",
            maxWidth: 560, padding: "0 24px",
          }}
        >
          <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg,transparent,rgba(26,126,200,.4),transparent)" }} />
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(26,126,200,.1)", border: "1px solid rgba(26,126,200,.3)",
            borderRadius: 999, padding: "7px 20px",
          }}>
            <motion.div animate={{ scale: [1, 1.5, 1], opacity: [.7, 1, .7] }} transition={{ duration: 2, repeat: Infinity }}
              style={{ width: 6, height: 6, borderRadius: "50%", background: S.blue }} />
            <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: ".2em", color: S.blue, textTransform: "uppercase" }}>
              7 Pillars · Core Mission
            </span>
            <motion.div animate={{ scale: [1, 1.5, 1], opacity: [.7, 1, .7] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              style={{ width: 6, height: 6, borderRadius: "50%", background: S.blue }} />
          </div>
          <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg,transparent,rgba(26,126,200,.4),transparent)" }} />
        </motion.div>

        {/* ══════════════════════════════════════
            DESKTOP HONEYCOMB
        ══════════════════════════════════════ */}
        {!mobile && (
          <div style={{ maxWidth: 580, margin: "32px auto 0", position: "relative", zIndex: 2, padding: "0 16px" }}>
            <div ref={arenaRef} style={{ position: "relative", width: "100%", paddingTop: "100%" }}>
              <div style={{ position: "absolute", inset: 0 }}>
                {arenaSize > 0 && (
                  <>
                    <ConnectorLines size={arenaSize} activeId={active} />
                    {ITEMS.map((item, i) => (
                      <HexCell key={item.id} item={item} index={i} arenaSize={arenaSize} active={active === item.id} onHover={setActive} />
                    ))}
                    <CenterHub arenaSize={arenaSize} activeItem={activeItem} />
                  </>
                )}
              </div>
            </div>
            <DescriptionStrip activeItem={activeItem} />
          </div>
        )}

        {/* ══════════════════════════════════════
            MOBILE
        ══════════════════════════════════════ */}
        {mobile && (
          <div style={{ maxWidth: 390, margin: "28px auto 0", position: "relative", zIndex: 2, padding: "0 16px" }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              style={{ textAlign: "center", marginBottom: 20 }}
            >
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: "rgba(26,126,200,.12)", border: `1.5px solid rgba(26,126,200,.3)`,
                borderRadius: 999, padding: "9px 26px",
                boxShadow: "0 0 24px rgba(26,126,200,.18)",
              }}>
                <motion.div animate={{ scale: [1,1.5,1], opacity: [.7,1,.7] }} transition={{ duration:2, repeat:Infinity }}
                  style={{ width:7, height:7, borderRadius:"50%", background:S.blue }} />
                <span style={{ fontSize:14, fontWeight:900, color:S.blue, letterSpacing:".14em" }}>MISSION</span>
                <motion.div animate={{ scale: [1,1.5,1], opacity: [.7,1,.7] }} transition={{ duration:2, repeat:Infinity, delay:1 }}
                  style={{ width:7, height:7, borderRadius:"50%", background:S.blue }} />
              </div>
            </motion.div>

            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"8px 4px" }}>
              {ITEMS.slice(0,6).map((item,i) => (
                <MobileTile key={item.id} item={item} active={active===item.id} onTap={setActive} index={i} />
              ))}
            </div>
            <div style={{ display:"flex", justifyContent:"center", marginTop:4 }}>
              <div style={{ width:"47%" }}>
                <MobileTile item={ITEMS[6]} active={active===6} onTap={setActive} index={6} />
              </div>
            </div>

            <AnimatePresence mode="wait">
              {activeItem && (
                <motion.div key={activeItem.id}
                  initial={{ opacity:0, y:12, scale:.97 }}
                  animate={{ opacity:1, y:0, scale:1 }}
                  exit={{ opacity:0, y:-12, scale:.97 }}
                  transition={{ duration:.28, ease:[0.22,1,0.36,1] }}
                  style={{
                    marginTop:16,
                    background:`linear-gradient(135deg,${activeItem.light}12,${activeItem.color}08)`,
                    border:`1px solid ${activeItem.light}44`,
                    borderRadius:14, padding:"14px 16px",
                    display:"flex", alignItems:"flex-start", gap:12,
                  }}
                >
                  <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:6, flexShrink:0 }}>
                    <span style={{ color:activeItem.light, fontSize:20 }}>{ICONS[activeItem.id]}</span>
                    <motion.div animate={{ scale:[1,1.5,1], opacity:[.5,1,.5] }} transition={{ duration:1.5, repeat:Infinity }}
                      style={{ width:6, height:6, borderRadius:"50%", background:activeItem.light }} />
                  </div>
                  <div>
                    <p style={{ margin:"0 0 5px", fontSize:13, fontWeight:700, color:activeItem.light, fontFamily:"'Outfit',sans-serif" }}>{activeItem.label}</p>
                    <p style={{ margin:0, fontSize:12, color:S.muted, lineHeight:1.65, fontFamily:"'Outfit',sans-serif" }}>{activeItem.desc}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Bottom fade */}
        <div style={{ position:"absolute", bottom:0, left:0, right:0, height:80, background:`linear-gradient(to top,${S.bg},transparent)`, pointerEvents:"none", zIndex:3 }} />
      </section>
    </>
  );
}