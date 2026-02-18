import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaBook,
  FaIndustry,
  FaFlask,
  FaTools,
  FaChalkboardTeacher,
  FaHandshake,
} from "react-icons/fa";
import { small } from "framer-motion/client";

export default function MissionOrbit() {
  const [radius, setRadius] = useState(260);
  const HUB_SIZE = 150;

  const missionItems = [
    { label: "Resource Center", color: "#2563eb", icon: <FaBook /> },
    { label: "Pilot Facility", color: "#f59e0b", icon: <FaIndustry /> },
    { label: "Incubation Center", color: "#10b981", icon: <FaFlask /> },
    {
      label: "Support BIS for development of new test standards",
      color: "#06b6d4",
      icon: <FaTools />,
    }, 
    {
      label: "Training & Workshops",
      color: "#6366f1",
      icon: <FaChalkboardTeacher />,
    },
    { label: "Consultancy", color: "#ef4444", icon: <FaHandshake /> },
  ];

  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 480) setRadius(0);
      else if (window.innerWidth < 768) setRadius(170);
      else if (window.innerWidth < 1024) setRadius(240);
      else setRadius(300);
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  const CONTAINER_SIZE =
    radius > 0 ? (radius + HUB_SIZE / 2) * 2 + 120 : "100%";

  const getItemPosition = (index) => {
    const angle = (index / missionItems.length) * Math.PI * 2 - Math.PI / 2;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  };

  return (
    <section
      className="relative w-full flex items-center justify-center py-32 px-4"
      style={{
        background:
          "radial-gradient(circle at center,#ffffffcc 0%,#f1f5f9cc 40%,#e2e8f0cc 100%)",
      }}
    >
      {radius > 0 && (
        <div
          className="relative hidden sm:flex items-center justify-center mx-auto"
          style={{ width: CONTAINER_SIZE, height: CONTAINER_SIZE }}
        >
          {/* CONNECTOR SVG */}
          <svg
            className="absolute inset-0 z-1"
            viewBox={`0 0 ${CONTAINER_SIZE} ${CONTAINER_SIZE}`}
          >
            {missionItems.map((item, i) => {
              const pos = getItemPosition(i);
              const cx = CONTAINER_SIZE / 2;
              const cy = CONTAINER_SIZE / 2;

              // card half width/height offset so line stops before box
              const CARD_OFFSET = 40;

              const angle = Math.atan2(pos.y, pos.x);

              const tx = cx + pos.x - Math.cos(angle) * CARD_OFFSET;
              const ty = cy + pos.y - Math.sin(angle) * CARD_OFFSET;

              const midX = (cx + tx) / 2;
              const midY = (cy + ty) / 2 - 160;

              const path = `M ${cx} ${cy} Q ${midX} ${midY} ${tx} ${ty}`;

              return (
                <g key={i}>
                  <path
                    d={path}
                    stroke="#e2e8f0"
                    strokeWidth="0.5"
                    fill="none"
                  />

                  <motion.path
                    d={path}
                    stroke={item.color}
                    strokeWidth="2"
                    strokeDasharray="5 16"
                    fill="none"
                    animate={{ strokeDashoffset: [0, -190] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  {/* dot now starts outside the box */}
                  <motion.circle
                    r="6"
                    fill={item.color}
                    style={{ offsetPath: `path('${path}')` }}
                    animate={{ offsetDistance: ["0%", "10%"] }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.35,
                    }}
                  />
                </g>
              );
            })}
          </svg>

          {/* CENTER HUB */}
          <motion.div
            className="absolute z-20 flex items-center justify-center rounded-full text-white font-bold"
            style={{
              width: HUB_SIZE,
              height: HUB_SIZE,
              top: "40%",
              left: "42%",
              transform: "translate(-50%, -60%)",
              background: "linear-gradient(135deg,#fb923c,#f97316,#ea580c)",
              boxShadow:
                "0 30px 70px rgba(249,115,22,.45), inset 0 0 40px rgba(255,255,255,.15)",
              letterSpacing: "0.21em",
            }}
            animate={{ scale: [1, 1.12, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            MISSION
          </motion.div>

          {/* CARDS */}
          {missionItems.map((item, i) => {
            const pos = getItemPosition(i);
            const cx = CONTAINER_SIZE / 2;
            const cy = CONTAINER_SIZE / 2;

            return (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: cx + pos.x,
                  top: cy + pos.y,
                  transform: "translate(-50%, -50%)",
                  width: 220,
                }}
                whileHover={{
                  scale: 1.15,
                  y: -22,
                }}
              >
                <div
                  className="px-6 py-4 rounded-2xl border flex items-center gap-4 cursor-pointer transition-all duration-300"
                  style={{
                    background: `${item.bg}cc`,
                    borderColor: item.color,
                    backdropFilter: "blur(6px)",
                    boxShadow: `0 12px 30px ${item.color}22`,
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow = `0 20px 50px ${item.color}55`)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.boxShadow = `0 12px 30px ${item.color}22`)
                  }
                >
                  <span className="text-xl" style={{ color: item.color }}>
                    {item.icon}
                  </span>

                  <span
                    className="text-sm font-semibold leading-snug"
                    style={{ color: "#1f2937" }}
                  >
                    {item.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* MOBILE */}
      {radius === 0 && (
        <div className="sm:hidden flex flex-col items-center gap-5 w-full max-w-sm">
          <div
            className="w-28 h-28 rounded-full flex items-center justify-center text-white font-bold"
            style={{
              background: "linear-gradient(135deg,#fb923c,#f97316,#ea580c)",
              boxShadow: "0 25px 45px rgba(249,115,22,.35)",
            }}
          >
            MISSION
          </div>

          {missionItems.map((item, i) => (
            <div
              key={i}
              className="w-full px-4 py-3 rounded-xl border flex items-center gap-3"
              style={{
                borderColor: "#e5e7eb",
                background: "#ffffff",
                boxShadow: "0 8px 18px rgba(0,0,0,.06)",
              }}
            >
              <span style={{ color: item.color }}>{item.icon}</span>
              <span className="text-sm font-medium text-gray-700">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
