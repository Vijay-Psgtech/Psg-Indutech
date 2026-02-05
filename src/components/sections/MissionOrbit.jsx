import React, { useState } from "react";
import { motion } from "framer-motion";
import { brandColors, grad } from "../common/brand.js";
import { missionItems } from "../data/MissionItems.js";

/* ── constants ── */
const ORBIT_R = 200; // px, radius on desktop
const HUB_SIZE = 152; // px, centre circle diameter

export default function MissionOrbit() {
  const [expanded, setExpanded] = useState(true);

  return (
    <motion.section
      className="relative w-full flex flex-col items-center justify-center py-24 px-6 overflow-hidden"
      style={{ background: "#fff" }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* soft ambient wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, ${brandColors.accent}08 0%, transparent 65%)`,
        }}
      />

      <div className="relative">
        {/* ── desktop orbit ── */}
        <div
          className="relative hidden sm:flex items-center justify-center"
          style={{
            width: ORBIT_R * 2 + HUB_SIZE,
            height: ORBIT_R * 2 + HUB_SIZE,
          }}
          onMouseEnter={() => setExpanded(true)}
          onMouseLeave={() => setExpanded(false)}
        >
          {/* rotating ring */}
          {/* <motion.div
            className="absolute rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            style={{
              width: ORBIT_R * 2 + 60,
              height: ORBIT_R * 2 + 60,
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              border: `2px solid ${brandColors.tertiary}30`,
            }}
          /> */}

          {/* hub */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 140, damping: 12 }}
            className="relative z-20 flex items-center justify-center rounded-full text-white font-black text-lg tracking-widest shadow-2xl"
            style={{
              width: HUB_SIZE,
              height: HUB_SIZE,
              background: grad.hero,
              boxShadow: `0 0 48px 8px ${brandColors.secondary}45`,
            }}
          >
            MISSION
          </motion.div>

          {/* satellite items */}
          {missionItems.map((item, i) => {
            const angle = (i / missionItems.length) * 360;
            const rad = (angle * Math.PI) / 180;
            const x = expanded ? Math.cos(rad) * ORBIT_R : 0;
            const y = expanded ? Math.sin(rad) * ORBIT_R : 0;

            return (
              <motion.div
                key={i}
                className="absolute z-10 flex items-center justify-center"
                style={{ top: "50%", left: "50%" }}
                animate={{
                  x: x - 64, // 64 = half of w-32
                  y: y - 64,
                }}
                transition={{
                  type: "spring",
                  stiffness: 90,
                  damping: 14,
                  delay: i * 0.06,
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.12 }}
                  transition={{ duration: 0.25 }}
                  className="w-32 h-32 rounded-full flex items-center justify-center text-white text-center text-xs font-bold px-3 leading-tight shadow-lg cursor-pointer"
                  style={{
                    background: grad.subtle,
                    boxShadow: `0 4px 20px ${brandColors.accent}30`,
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow = `0 0 28px ${brandColors.accent}60`)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.boxShadow = `0 4px 20px ${brandColors.accent}30`)
                  }
                >
                  {item.title}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* ── mobile fallback: vertical list ── */}
        <div className="sm:hidden flex flex-col items-center gap-4">
          {/* hub */}
          <div
            className="flex items-center justify-center rounded-2xl text-white font-black text-base tracking-widest shadow-xl px-8 py-4"
            style={{ background: grad.hero }}
          >
            MISSION
          </div>

          {/* items as cards */}
          {missionItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="w-full max-w-xs flex items-center gap-4 px-5 py-4 rounded-xl shadow-md"
              style={{
                background: "#fff",
                border: `2px solid ${brandColors.tertiary}22`,
              }}
            >
              <span
                className="flex-shrink-0 w-3 h-3 rounded-full"
                style={{ background: grad.subtle }}
              />
              <span
                className="font-bold text-sm"
                style={{ color: brandColors.primary }}
              >
                {item.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
