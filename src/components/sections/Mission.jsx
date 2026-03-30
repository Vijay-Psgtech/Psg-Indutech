import { useState, useEffect } from "react";
import {
  FaBook, FaIndustry, FaFlask, FaTools,
  FaChalkboardTeacher, FaHandshake, FaVial
} from "react-icons/fa";

// ─── Hex clip-path (flat-top) ─────────────────────────────────────────────────
const HEX = "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";

// ─── 7 Mission items ──────────────────────────────────────────────────────────
const ITEMS = [
  { id:0, short:"Resource\nCenter",       label:"Resource Center",          color:"#9C0060", light:"#E91E8C", icon:<FaBook />,             desc:"Centralized hub for research, data & industry knowledge."                },
  { id:1, short:"Pilot\nFacility",        label:"Pilot Facility",           color:"#5C1191", light:"#AB47BC", icon:<FaIndustry />,          desc:"State-of-the-art infrastructure to prototype & validate innovations."    },
  { id:2, short:"Incubation\nCenter",     label:"Incubation Center",        color:"#006A77", light:"#00BCD4", icon:<FaFlask />,             desc:"Nurturing early-stage ventures with mentorship & resources."             },
  { id:3, short:"BIS Test\nStandards",    label:"Support BIS Standards",    color:"#1B5E20", light:"#43A047", icon:<FaVial />,             desc:"Collaborating with BIS to shape next-gen quality benchmarks."           },
  { id:4, short:"Training &\nWorkshops",  label:"Training & Workshops",     color:"#B74800", light:"#FF7043", icon:<FaChalkboardTeacher />, desc:"Expert-led programs designed to upskill industry professionals."        },
  { id:5, short:"Testing\nCapabilities",  label:"Testing Capabilities",     color:"#880E1F", light:"#EF5350", icon:<FaTools />,             desc:"Advanced testing infrastructure for robust product validation."         },
  { id:6, short:"Consultancy",            label:"Consultancy",              color:"#C45E00", light:"#F47920", icon:<FaHandshake />,         desc:"Strategic advisory driving operational excellence & growth."            },
];

// ─── Honeycomb math ───────────────────────────────────────────────────────────
// Container: 560 × 620  |  Hex: W=200 H=173 (flat-top R=100)
// Center hub: pixel (280, 265)
// Neighbor formula: dx = ±3R/2 = ±150,  dy = ±R√3/2 ≈ ±86.6  or  dy = ±R√3 ≈ ±173
//
//  Hex centers (px):
//   [0] Top           (280, 92)   [5] Top-left    (130, 178)
//   [1] Top-right     (430, 178)  [4] Bot-left    (130, 351)
//   [2] Bot-right     (430, 351)  [3] Bottom      (280, 438)
//   [6] Extended      (430, 524)   ← shares edge with [2] & [3]
//   CTR Center hub   (280, 265)
//
//  Position = top-left corner:  left = (cx-100)/560,  top = (cy-86.5)/620

const HEX_POS = [
  { left:"32.14%", top: "0.89%" },   // 0 Top
  { left:"58.93%", top:"14.76%" },   // 1 Top-right
  { left:"58.93%", top:"42.66%" },   // 2 Bot-right
  { left:"32.14%", top:"56.69%" },   // 3 Bottom
  { left: "5.36%", top:"42.66%" },   // 4 Bot-left
  { left: "5.36%", top:"14.76%" },   // 5 Top-left
  { left:"58.93%", top:"70.56%" },   // 6 Extended ← NEW
];
const CENTER_POS = { left:"32.14%", top:"28.79%" };
const HEX_W  = "35.71%";            // 200/560
const HEX_AR = "200 / 173";
const CONT_AR = "560 / 624";

// ─── Site palette ─────────────────────────────────────────────────────────────
const S = { bg:"#0D1B2E", cyan:"#29ABE2", text:"#F0F6FF", muted:"#5B7A99" };

// ─── Hex Cell ─────────────────────────────────────────────────────────────────
function HexCell({ item, pos, active, onHover, delay, isNew }) {
  return (
    <div
      onMouseEnter={() => onHover(item.id)}
      onMouseLeave={() => onHover(null)}
      style={{
        position:"absolute", width:HEX_W, aspectRatio:HEX_AR, ...pos,
        cursor:"pointer", zIndex: active ? 10 : 2,
        transform: active ? "scale(1.10)" : "scale(1)",
        transition:"transform 0.38s cubic-bezier(0.34,1.56,0.64,1)",
        animation:`hexIn 0.6s cubic-bezier(0.34,1.56,0.64,1) ${delay}ms both`,
      }}
    >
      {/* Outer border hex */}
      <div style={{
        position:"absolute", inset:0, clipPath:HEX,
        background: active
          ? `linear-gradient(145deg,${item.light}77,${item.color}55)`
          : isNew
            ? "rgba(255,255,255,0.28)"
            : "rgba(255,255,255,0.22)",
        transition:"background 0.3s",
        filter: active ? `drop-shadow(0 0 14px ${item.light}77)` : "none",
      }}/>

      {/* Inner colored hex */}
      <div style={{
        position:"absolute", top:"8%", left:"8%", right:"8%", bottom:"8%",
        clipPath:HEX,
        background:`linear-gradient(145deg,${item.light},${item.color})`,
        display:"flex", flexDirection:"column",
        alignItems:"center", justifyContent:"center", gap:"5%",
        filter: active
          ? `brightness(1.18) drop-shadow(0 0 10px ${item.light}88)`
          : "brightness(1)",
        transition:"filter 0.3s",
      }}>
        <div style={{
          fontSize:"clamp(15px,2.6vw,26px)", color:"white",
          filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.4))",
          transform: active ? "scale(1.18)" : "scale(1)",
          transition:"transform 0.3s",
        }}>
          {item.icon}
        </div>
        <p style={{
          margin:0, fontWeight:700, color:"white", textAlign:"center",
          whiteSpace:"pre-line", lineHeight:1.25, padding:"0 8%",
          fontSize:"clamp(5.5px,0.95vw,15px)",
          textShadow:"0 1px 4px rgba(0,0,0,0.5)",
        }}>
          {item.short}
        </p>
      </div>
    </div>
  );
}

// ─── Connector accent between hex[6] and hex[2]/hex[3] ───────────────────────
function EdgeAccent({ visible }) {
  return (
    <div style={{
      position:"absolute",
      // Sits between hex[2] bottom-edge and hex[6] top-edge in the gap
      left:"58.93%", top:"57.32%",
      width:HEX_W, height:"3.5%",
      display:"flex", alignItems:"center", justifyContent:"center",
      pointerEvents:"none", zIndex:1,
      opacity: visible ? 0.55 : 0,
      transition:"opacity 0.5s ease 0.8s",
    }}>
      <div style={{
        width:"30%", height:"1.5px",
        background:`linear-gradient(90deg,${ITEMS[6].light},${ITEMS[6].color})`,
        borderRadius:99,
      }}/>
    </div>
  );
}

// ─── Center Hub ───────────────────────────────────────────────────────────────
function CenterHex({ pos, activeItem }) {
  return (
    <div style={{
      position:"absolute", width:HEX_W, aspectRatio:HEX_AR, ...pos,
      zIndex:3,
      animation:"hexIn 0.4s cubic-bezier(0.34,1.56,0.64,1) 0ms both",
    }}>
      {/* Pulse rings */}
      {[0,1].map(i => (
        <div key={i} style={{
          position:"absolute", inset:"-5%", clipPath:HEX,
          background:`rgba(41,171,226,0.06)`,
          animation:`hubRing 3s ease-in-out ${i * 1.5}s infinite`,
          pointerEvents:"none",
        }}/>
      ))}
      {/* Outer border */}
      <div style={{
        position:"absolute", inset:0, clipPath:HEX,
        background:"rgba(255,255,255,0.18)",
      }}/>
      {/* Inner dark hex */}
      <div style={{
        position:"absolute", top:"8%", left:"8%", right:"8%", bottom:"8%",
        clipPath:HEX,
        background:"linear-gradient(160deg,#1E3450,#0A1520)",
        display:"flex", flexDirection:"column",
        alignItems:"center", justifyContent:"center", gap:"4%",
      }}>
        {activeItem ? (
          <>
            <div style={{ fontSize:"clamp(13px,2vw,19px)", color:activeItem.light, animation:"popIn 0.28s ease both" }}>
              {activeItem.icon}
            </div>
            <p style={{
              margin:0, fontSize:"clamp(5px,0.78vw,12px)", fontWeight:700,
              color:activeItem.light, textAlign:"center",
              padding:"0 10%", lineHeight:1.3, whiteSpace:"pre-line",
              animation:"popIn 0.28s ease both",
            }}>
              {activeItem.label}
            </p>
          </>
        ) : (
          <>
            <p style={{
              margin:0, fontSize:"clamp(6.5px,1.2vw,12px)", fontWeight:800,
              color:S.cyan, letterSpacing:"0.1em", textTransform:"uppercase",
            }}>MISSION</p>
            <div style={{ width:"35%", height:1, background:"rgba(41,171,226,0.35)", margin:"2% 0" }}/>
            <p style={{
              margin:0, fontSize:"clamp(4px,0.58vw,5.8px)", color:"rgba(255,255,255,0.35)",
              textAlign:"center", padding:"0 12%", lineHeight:1.4, letterSpacing:"0.06em",
            }}>CORE HUB</p>
          </>
        )}
      </div>
    </div>
  );
}

// ─── Mobile hex tile ──────────────────────────────────────────────────────────
function MobileTile({ item, active, onTap, delay, isNew }) {
  return (
    <div
      onClick={() => onTap(active ? null : item.id)}
      style={{
        aspectRatio: HEX_AR, position:"relative", cursor:"pointer",
        transform: active ? "scale(1.07)" : "scale(1)",
        transition:"transform 0.35s cubic-bezier(0.34,1.56,0.64,1)",
        animation:`hexIn 0.55s cubic-bezier(0.34,1.56,0.64,1) ${delay}ms both`,
      }}
    >
      <div style={{ position:"absolute", inset:0, clipPath:HEX, background:"rgba(255,255,255,0.22)" }}/>
      <div style={{
        position:"absolute", top:"8%", left:"8%", right:"8%", bottom:"8%",
        clipPath:HEX,
        background:`linear-gradient(145deg,${item.light},${item.color})`,
        display:"flex", flexDirection:"column",
        alignItems:"center", justifyContent:"center", gap:4,
        filter: active ? `brightness(1.15) drop-shadow(0 0 8px ${item.light}77)` : "none",
      }}>
        <div style={{ fontSize:20, color:"white", filter:"drop-shadow(0 1px 3px rgba(0,0,0,0.4))" }}>{item.icon}</div>
        <p style={{
          margin:0, fontSize:12, fontWeight:700, color:"white",
          textAlign:"center", whiteSpace:"pre-line", lineHeight:1.2, padding:"0 10%",
          textShadow:"0 1px 3px rgba(0,0,0,0.4)",
        }}>{item.short}</p>
      </div>
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────
export default function MissionHoneycomb7() {
  const [active, setActive]   = useState(null);
  const [mobile, setMobile]   = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const chk = () => setMobile(window.innerWidth < 640);
    chk();
    window.addEventListener("resize", chk);
    const t = setTimeout(() => setMounted(true), 80);
    return () => { window.removeEventListener("resize", chk); clearTimeout(t); };
  }, []);

  const activeItem = active !== null ? ITEMS[active] : null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800&family=Playfair+Display:ital,wght@1,700&display=swap');
        @keyframes hexIn {
          from { opacity:0; transform:scale(0.65) rotate(-6deg); }
          to   { opacity:1; transform:scale(1)    rotate(0deg);  }
        }
        @keyframes popIn {
          from { opacity:0; transform:scale(0.75); }
          to   { opacity:1; transform:scale(1);    }
        }
        @keyframes hubRing {
          0%,100% { opacity:0.3; transform:scale(1);    }
          50%     { opacity:0.8; transform:scale(1.07); }
        }
        @keyframes descSlide {
          from { opacity:0; transform:translateY(8px); }
          to   { opacity:1; transform:translateY(0);   }
        }
        @keyframes badgePop {
          from { opacity:0; transform:scale(0.5); }
          to   { opacity:1; transform:scale(1);   }
        }
        @keyframes connectorDraw {
          from { width:0%; }
          to   { width:30%; }
        }
      `}</style>

      <section style={{
        background:S.bg, fontFamily:"'Outfit',sans-serif",
        padding: mobile ? "48px 16px 60px" : "60px 24px 72px",
        position:"relative", overflow:"hidden",
      }}>
        {/* BG grid + glow */}
        <div style={{
          position:"absolute", inset:0, pointerEvents:"none",
          backgroundImage:`
            radial-gradient(ellipse 700px 320px at 50% 45%, rgba(41,171,226,0.06), transparent 70%),
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize:"100% 100%, 52px 52px, 52px 52px",
        }}/>

        {/* ── Header ─────────────────────────────────────────────────────────── */}
        <div style={{
          textAlign:"center", marginBottom: mobile ? 28 : 36,
          opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(-12px)",
          transition:"all 0.65s ease", position:"relative",
        }}>
          <p style={{
            margin:"0 0 8px", fontSize:11, fontWeight:700,
            letterSpacing:"0.2em", textTransform:"uppercase", color:S.cyan,
          }}>◆ &nbsp; What We Deliver</p>
          <h2 style={{
            margin:0, fontWeight:700, letterSpacing:"-0.02em", color:S.text, lineHeight:1.2,
            fontSize:"clamp(22px,3.5vw,38px)",
          }}>
            Our{" "}
            <em style={{ fontFamily:"'Playfair Display',serif", fontStyle:"italic", color:S.cyan }}>
              Mission
            </em>
          </h2>
          <p style={{ margin:"10px auto 0", fontSize:13, color:S.muted, maxWidth:420, lineHeight:1.7, fontWeight:300 }}>
            {mobile
              ? "Tap any hexagon · 7 pillars of our core mission"
              : "Hover any hexagon · 7 interconnected pillars forming our mission"}
          </p>
        </div>

        {/* ── DESKTOP Honeycomb ───────────────────────────────────────────────── */}
        {!mobile && (
          <div style={{ maxWidth:580, margin:"0 auto" }}>
            <div style={{
              position:"relative", width:"100%", aspectRatio: CONT_AR,
              opacity: mounted ? 1 : 0, transition:"opacity 0.45s ease 0.1s",
            }}>
              {ITEMS.map((item, i) => (
                <HexCell
                  key={item.id}
                  item={item}
                  pos={HEX_POS[i]}
                  active={active === item.id}
                  onHover={setActive}
                  delay={100 + i * 85}
                  isNew={item.id === 6}
                />
              ))}
              <CenterHex pos={CENTER_POS} activeItem={activeItem} />
              <EdgeAccent visible={mounted} />
            </div>

            {/* Description strip */}
            <div style={{ minHeight:58, display:"flex", alignItems:"center", justifyContent:"center", marginTop:4 }}>
              {activeItem ? (
                <div style={{
                  display:"inline-flex", alignItems:"center", gap:10,
                  background:`linear-gradient(135deg,${activeItem.light}12,${activeItem.color}08)`,
                  border:`1px solid ${activeItem.light}40`,
                  borderRadius:10, padding:"10px 22px",
                  animation:"descSlide 0.3s ease both", maxWidth:540,
                }}>
                  <span style={{ color:activeItem.light, fontSize:16, flexShrink:0 }}>{activeItem.icon}</span>
                  <p style={{ margin:0, fontSize:13, color:S.text, lineHeight:1.5 }}>
                    <strong style={{ color:activeItem.light }}>{activeItem.label}:</strong>{" "}
                    <span style={{ color:S.muted }}>{activeItem.desc}</span>
                  </p>
                </div>
              ) : (
                <p style={{ margin:0, fontSize:12, color:"rgba(91,122,153,0.5)", letterSpacing:"0.06em" }}>
                  Hover a hexagon to explore
                </p>
              )}
            </div>
          </div>
        )}

        {/* ── MOBILE 2-col hex grid ────────────────────────────────────────────── */}
        {mobile && (
          <div style={{ maxWidth:390, margin:"0 auto" }}>
            {/* Mission badge */}
            <div style={{ textAlign:"center", marginBottom:18 }}>
              <div style={{
                display:"inline-flex", alignItems:"center", gap:8,
                background:"linear-gradient(135deg,#1A2F4A,#0A1520)",
                border:`1.5px solid ${S.cyan}44`, borderRadius:999,
                padding:"8px 24px", boxShadow:`0 0 20px ${S.cyan}22`,
              }}>
                <div style={{ width:7, height:7, borderRadius:"50%", background:S.cyan, opacity:0.8 }}/>
                <span style={{ fontSize:14, fontWeight:800, color:S.cyan, letterSpacing:"0.1em" }}>MISSION</span>
                <div style={{ width:7, height:7, borderRadius:"50%", background:S.cyan, opacity:0.8 }}/>
              </div>
            </div>

            {/* 2-col hex grid — 7 items, last one centered */}
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"8px 4px" }}>
              {ITEMS.slice(0, 6).map((item, i) => (
                <MobileTile key={item.id} item={item} active={active === item.id} onTap={setActive} delay={i * 65} isNew={false} />
              ))}
            </div>
            {/* 7th item centered below */}
            <div style={{ display:"flex", justifyContent:"center", marginTop:4 }}>
              <div style={{ width:"47%" }}>
                <MobileTile item={ITEMS[6]} active={active === 6} onTap={setActive} delay={420} isNew />
              </div>
            </div>

            {/* Mobile description */}
            {activeItem && (
              <div style={{
                marginTop:14,
                background:`${activeItem.light}12`,
                border:`1px solid ${activeItem.light}44`,
                borderRadius:10, padding:"12px 16px",
                animation:"descSlide 0.3s ease both",
                display:"flex", alignItems:"flex-start", gap:10,
              }}>
                <span style={{ color:activeItem.light, fontSize:18, flexShrink:0, marginTop:2 }}>{activeItem.icon}</span>
                <div>
                  <p style={{ margin:"0 0 4px", fontSize:13, fontWeight:700, color:activeItem.light }}>
                    {activeItem.label}
                    {activeItem.id === 6 && (
                      <span style={{
                        marginLeft:8, background:`linear-gradient(135deg,${activeItem.light},${activeItem.color})`,
                        borderRadius:99, padding:"1px 7px", fontSize:8, fontWeight:800, color:"#fff",
                        verticalAlign:"middle",
                      }}>NEW</span>
                    )}
                  </p>
                  <p style={{ margin:0, fontSize:12, color:S.muted, lineHeight:1.6 }}>{activeItem.desc}</p>
                </div>
              </div>
            )}
          </div>
        )}
      </section>
    </>
  );
}