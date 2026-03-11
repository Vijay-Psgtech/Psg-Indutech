import { useState, useEffect, useRef } from "react";
import { FaBook, FaIndustry, FaFlask, FaTools, FaChalkboardTeacher, FaHandshake } from "react-icons/fa";

// ── Site palette extracted from screenshot ──────────────────
const SITE = {
  sectionBg: "#0D1B2E",
  gridLine: "rgba(255,255,255,0.03)",
  cyan: "#29ABE2",
  cyanDim: "#1A7FAD",
  orange: "#F47920",
  orangeDark: "#D4641A",
  textPrimary: "#F0F6FF",
  textMuted: "#5B7A99",
  nodeBorder: "rgba(41,171,226,0.18)",
  nodeHoverBg: "rgba(41,171,226,0.10)",
};

const LEFT_ITEMS = [
  { label: "Resource Center",     color: "#29ABE2", icon: <FaBook />,            desc: "Centralized hub for research, data & industry knowledge." },
  { label: "Testing Capabilities",color: "#F47920", icon: <FaTools />,           desc: "Advanced testing infrastructure for product validation." },
  { label: "Consultancy",         color: "#A78BFA", icon: <FaHandshake />,       desc: "Strategic advisory for operational excellence." },
];
const RIGHT_ITEMS = [
  { label: "Pilot Facility",      color: "#34D399", icon: <FaIndustry />,        desc: "Prototype and validate innovations at scale." },
  { label: "Incubation Center",   color: "#60A5FA", icon: <FaFlask />,           desc: "Nurturing ventures with mentorship & resources." },
  { label: "Support BIS Standards",color:"#FBBF24", icon: <FaTools />,           desc: "Shaping next-gen quality & compliance benchmarks." },
  { label: "Training & Workshops",color: "#F87171", icon: <FaChalkboardTeacher />,desc:"Expert-led upskilling across key industry domains." },
];
const ALL_ITEMS = [...LEFT_ITEMS, ...RIGHT_ITEMS];

// ── SVG constants ───────────────────────────────────────────
const SVG_W = 900, SVG_H = 520;
const CX = SVG_W / 2, CY = SVG_H / 2;
const CENTER_R = 68;
const LEFT_X = 96, RIGHT_X = SVG_W - 96;
const NODE_W = 192, NODE_H = 66;

function getY(i, total, h) { return (h / (total + 1)) * (i + 1); }

// ── Draw-in bezier ──────────────────────────────────────────
function AnimatedPath({ d, color, delay, active }) {
  const ref = useRef(null);
  const [off, setOff] = useState(600);

  useEffect(() => {
    const len = ref.current?.getTotalLength() ?? 600;
    setOff(len);
    const t = setTimeout(() => {
      let start = null;
      const dur = 800;
      const tick = (ts) => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / dur, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        setOff(len * (1 - ease));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <path
      ref={ref} d={d} fill="none"
      stroke={active ? color : "rgba(255,255,255,0.10)"}
      strokeWidth={active ? 2.2 : 1.2}
      strokeDasharray={600} strokeDashoffset={off}
      strokeLinecap="round"
      style={{
        transition: "stroke 0.3s, stroke-width 0.3s",
        filter: active ? `drop-shadow(0 0 5px ${color}99)` : "none",
      }}
    />
  );
}

// ── SVG Node ────────────────────────────────────────────────
function SvgNode({ x, y, item, side, active, onHover }) {
  const L = side === "left";
  const nx = L ? x - NODE_W : x;

  return (
    <g onMouseEnter={() => onHover(item.label)} onMouseLeave={() => onHover(null)} style={{ cursor: "pointer" }}>
      {active && (
        <rect x={nx - 4} y={y - NODE_H / 2 - 6} width={NODE_W + 8} height={NODE_H + 12}
          rx={14} fill={item.color + "14"} stroke={item.color + "44"} strokeWidth={1} />
      )}
      <rect x={nx} y={y - NODE_H / 2} width={NODE_W} height={NODE_H}
        rx={11} fill={active ? item.color + "1A" : "#0A172A"}
        stroke={active ? item.color + "88" : SITE.nodeBorder} strokeWidth={1}
        style={{ transition: "all 0.3s" }} />
      {/* icon circle */}
      <circle cx={nx + 26} cy={y} r={16}
        fill={active ? item.color : item.color + "22"}
        style={{ transition: "fill 0.3s" }} />
      {/* label */}
      <text x={nx + 48} y={y - 5}
        fill={active ? "#FFF" : SITE.textPrimary}
        fontSize="14" fontWeight="600" fontFamily="'Outfit',sans-serif">
        {item.label}
      </text>
      <text x={nx + 48} y={y + 11}
        fill={active ? item.color : SITE.textMuted}
        fontSize="9.5" fontFamily="'Outfit',sans-serif" style={{ transition: "fill 0.3s" }}>
        {active ? item.desc.slice(0, 34) + "…" : "Hover to explore"}
      </text>
      {/* edge dot */}
      <circle cx={L ? x : x} cy={y} r={3.5} fill={active ? item.color : "#1E3A5A"} style={{ transition: "fill 0.3s" }} />
    </g>
  );
}

// ── Mobile stacked node ─────────────────────────────────────
function MobileNode({ item, active, onTap, index, total }) {
  const isLeft = index % 2 === 0;
  return (
    <div
      onClick={() => onTap(active ? null : item.label)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        flexDirection: isLeft ? "row" : "row-reverse",
        padding: "12px 14px",
        borderRadius: "12px",
        background: active ? item.color + "18" : "rgba(10,23,42,0.7)",
        border: `1px solid ${active ? item.color + "66" : SITE.nodeBorder}`,
        cursor: "pointer",
        transition: "all 0.3s ease",
        boxShadow: active ? `0 4px 20px ${item.color}30` : "none",
        textAlign: isLeft ? "left" : "right",
      }}
    >
      <div style={{
        width: 40, height: 40, borderRadius: 10, flexShrink: 0,
        background: active ? item.color : item.color + "22",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 16, color: active ? "#fff" : item.color,
        transition: "all 0.3s",
      }}>
        {item.icon}
      </div>
      <div>
        <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: active ? "#fff" : SITE.textPrimary, fontFamily: "'Outfit',sans-serif" }}>
          {item.label}
        </p>
        {active && (
          <p style={{ margin: "4px 0 0", fontSize: 11, color: item.color, fontFamily: "'Outfit',sans-serif", lineHeight: 1.5 }}>
            {item.desc}
          </p>
        )}
      </div>
    </div>
  );
}

// ── Main Component ──────────────────────────────────────────
export default function MissionEcosystem() {
  const [active, setActive] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    setTimeout(() => setMounted(true), 100);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800&family=Playfair+Display:ital,wght@1,700&display=swap');
        @keyframes hubPulse {
          0%,100% { transform: scale(1); }
          50%      { transform: scale(1.04); }
        }
        @keyframes ringOut {
          0%   { r: ${CENTER_R}; opacity: 0.4; }
          100% { r: ${CENTER_R + 40}; opacity: 0; }
        }
        .hub-circle { animation: hubPulse 3s ease-in-out infinite; transform-origin: ${CX}px ${CY}px; }
      `}</style>

      <section style={{
        background: SITE.sectionBg,
        padding: isMobile ? "56px 16px 64px" : "72px 24px 80px",
        fontFamily: "'Outfit', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Grid bg */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: `
            radial-gradient(ellipse 700px 350px at 50% 50%, rgba(41,171,226,0.06) 0%, transparent 70%),
            linear-gradient(${SITE.gridLine} 1px, transparent 1px),
            linear-gradient(90deg, ${SITE.gridLine} 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 48px 48px, 48px 48px",
        }} />

        {/* ── Header ── */}
        <div style={{
          textAlign: "center", marginBottom: isMobile ? 36 : 12,
          opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(-12px)",
          transition: "all 0.6s ease", position: "relative",
        }}>
          <p style={{ margin: "0 0 8px", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: SITE.cyan }}>
            ◆ &nbsp; What We Deliver

          </p>
          <h2 style={{
            margin: 0,
            fontSize: "clamp(22px, 3.5vw, 38px)",
            fontWeight: 700,
            color: SITE.textPrimary,
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
          }}>
            Our{" "}
            <em style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", color: SITE.cyan }}>
              Mission
            </em>
          </h2>
          <p style={{ margin: "10px auto 0", fontSize: 13, color: SITE.textMuted, maxWidth: 400, lineHeight: 1.7, fontWeight: 300 }}>
            {isMobile ? "Tap any pillar to explore" : "Hover any node · all pillars connect to our core mission"}
          </p>
        </div>

        {/* ── DESKTOP SVG ── */}
        {!isMobile && (
          <div style={{ width: "100%", maxWidth: 960, margin: "0 auto", position: "relative" }}>
            <svg viewBox={`0 0 ${SVG_W} ${SVG_H}`} style={{ width: "100%", height: "auto", overflow: "visible", display: "block" }}>
              <defs>
                <radialGradient id="hubGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#F5A040" />
                  <stop offset="100%" stopColor={SITE.orange} />
                </radialGradient>
                <filter id="hubGlow">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <filter id="softGlow">
                  <feGaussianBlur stdDeviation="3" result="b" />
                  <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>

              {/* Particles */}
              {[...Array(20)].map((_, i) => (
                <circle key={i} cx={60 + (i * 47) % (SVG_W - 120)} cy={20 + (i * 63) % (SVG_H - 40)} r={1} fill="rgba(255,255,255,0.1)">
                  <animate attributeName="opacity" values="0.1;0.45;0.1" dur={`${2 + i % 3}s`} begin={`${i * 0.25}s`} repeatCount="indefinite" />
                </circle>
              ))}

              {/* Left beziers */}
              {LEFT_ITEMS.map((item, i) => {
                const ny = getY(i, LEFT_ITEMS.length, SVG_H);
                const mx = LEFT_X + (CX - CENTER_R - LEFT_X) * 0.5;
                return <AnimatedPath key={item.label} d={`M ${CX - CENTER_R} ${CY} C ${mx} ${CY}, ${LEFT_X + 55} ${ny}, ${LEFT_X} ${ny}`} color={item.color} delay={250 + i * 110} active={active === item.label} />;
              })}

              {/* Right beziers */}
              {RIGHT_ITEMS.map((item, i) => {
                const ny = getY(i, RIGHT_ITEMS.length, SVG_H);
                const mx = RIGHT_X - (RIGHT_X - CX - CENTER_R) * 0.5;
                return <AnimatedPath key={item.label} d={`M ${CX + CENTER_R} ${CY} C ${mx} ${CY}, ${RIGHT_X - 55} ${ny}, ${RIGHT_X} ${ny}`} color={item.color} delay={250 + i * 110} active={active === item.label} />;
              })}

              {/* Pulse rings */}
              {[0, 1.1].map((begin, i) => (
                <circle key={i} cx={CX} cy={CY} r={CENTER_R} fill="none" stroke={SITE.orange} strokeWidth="1" opacity="0">
                  <animate attributeName="r" from={CENTER_R} to={CENTER_R + 42} dur="2.4s" begin={`${begin}s`} repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.35" to="0" dur="2.4s" begin={`${begin}s`} repeatCount="indefinite" />
                </circle>
              ))}

              {/* Hub */}
              <g className="hub-circle">
                <circle cx={CX} cy={CY} r={CENTER_R} fill="url(#hubGrad)" filter="url(#hubGlow)" />
                <circle cx={CX} cy={CY} r={CENTER_R} fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
                <circle cx={CX} cy={CY} r={CENTER_R - 11} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1" strokeDasharray="4 7" />
              </g>
              <text x={CX} y={CY - 8} textAnchor="middle" fill="white" fontSize="17" fontWeight="800" fontFamily="'Outfit',sans-serif" letterSpacing="0.1em">MISSION</text>
              <line x1={CX - 26} y1={CY + 2} x2={CX + 26} y2={CY + 2} stroke="rgba(255,255,255,0.25)" strokeWidth="0.8" />
              <text x={CX} y={CY + 16} textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8.5" fontFamily="'Outfit',sans-serif" letterSpacing="0.15em">CORE HUB</text>

              {/* Left nodes */}
              {LEFT_ITEMS.map((item, i) => (
                <SvgNode key={item.label} x={LEFT_X} y={getY(i, LEFT_ITEMS.length, SVG_H)} item={item} side="left" active={active === item.label} onHover={setActive} />
              ))}
              {/* Right nodes */}
              {RIGHT_ITEMS.map((item, i) => (
                <SvgNode key={item.label} x={RIGHT_X} y={getY(i, RIGHT_ITEMS.length, SVG_H)} item={item} side="right" active={active === item.label} onHover={setActive} />
              ))}
            </svg>
          </div>
        )}

        {/* ── MOBILE stacked layout ── */}
        {isMobile && (
          <div style={{ maxWidth: 420, margin: "0 auto", display: "flex", flexDirection: "column", gap: 0, position: "relative" }}>

            {/* Center hub pill */}
            <div style={{
              display: "flex", justifyContent: "center", margin: "4px 0 4px",
              position: "relative", zIndex: 2,
            }}>
              {/* vertical line */}
              <div style={{
                position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)",
                width: 1, height: 20, background: `linear-gradient(${SITE.orange}, ${SITE.cyan})`,
              }} />
              <div style={{
                background: `radial-gradient(circle at 40% 40%, #F5A040, ${SITE.orange})`,
                borderRadius: 999, padding: "10px 28px",
                display: "flex", alignItems: "center", gap: 10,
                boxShadow: `0 0 24px ${SITE.orange}55`,
              }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(255,255,255,0.5)" }} />
                <span style={{ fontSize: 15, fontWeight: 800, color: "white", letterSpacing: "0.1em" }}>MISSION</span>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(255,255,255,0.5)" }} />
              </div>
            </div>

            {/* Connector line top */}
            <div style={{ position: "relative" }}>
              <div style={{
                position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
                width: 1, height: "100%",
                background: `linear-gradient(${SITE.cyan}44, transparent)`,
                zIndex: 0,
              }} />
              <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: 10, padding: "16px 0 0" }}>
                {ALL_ITEMS.map((item, i) => (
                  <MobileNode key={item.label} item={item} active={active === item.label} onTap={setActive} index={i} total={ALL_ITEMS.length} />
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}