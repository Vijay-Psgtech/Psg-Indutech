import React, { useState } from "react";
import { Zap, Wrench, Cpu, Award } from "lucide-react";
import { motion } from "framer-motion";
import { brandColors, grad, gradText, borderColor } from "../common/brand.js";

/* ── data ── */
const cards = [
  {
    icon: Zap,
    title: "Wide Range of Capabilities",
    desc: "Technical textile & nonwoven capabilities spanning every stage of production.",
    accent: brandColors.accent,
    link: "/hot-melt-coating",
  },
  {
    icon: Wrench,
    title: "Flexible Sampling",
    desc: "Customized production solutions tailored to your exact requirements.",
    accent: brandColors.tertiary,
    link: "/needle-punch",
  },
  {
    icon: Cpu,
    title: "Advanced Machinery",
    desc: "European technology & equipment for precision manufacturing.",
    accent: brandColors.secondary,
    link: "/dilo-needle-machine",
  },
  {
    icon: Award,
    title: "Quality Assured",
    desc: "Consistency & application-specific solutions you can rely on.",
    accent: brandColors.primary,
    link: "/composite-manufacturing",
  },
];

/* ── variants ── */
const sectionV = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};
const gridV = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const cardV = {
  hidden: { opacity: 0, y: 36, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 90, damping: 18 },
  },
};

export default function WhyChooseUs() {
  const [hov, setHov] = useState(null);

  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: "#f8f9ff" }}
    >
      {/* ambient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            width: 480,
            height: 480,
            top: -160,
            left: -140,
            background: `radial-gradient(circle, ${brandColors.accent}15 0%, transparent 70%)`,
          }}
        />
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            width: 400,
            height: 400,
            bottom: -120,
            right: -100,
            background: `radial-gradient(circle, ${brandColors.secondary}12 0%, transparent 70%)`,
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── heading ── */}
        <motion.div
          variants={sectionV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center mb-14"
        >
          <h2
            className="text-4xl sm:text-5xl font-black tracking-tight leading-tight"
            style={{ color: brandColors.primary }}
          >
            Why Choose <span style={gradText}>Us</span>
          </h2>
          <p className="mt-3 text-slate-500 text-base max-w-xl mx-auto">
            We combine decades of textile expertise with modern technology to
            deliver solutions that set the standard.
          </p>
        </motion.div>

        {/* ── card grid ── */}
        <motion.div
          variants={gridV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {cards.map((c, i) => {
            const Icon = c.icon;
            const isH = hov === i;
            return (
              <motion.div
                key={i}
                variants={cardV}
                onHoverStart={() => setHov(i)}
                onHoverEnd={() => setHov(null)}
                whileHover={{
                  y: -10,
                  transition: { type: "spring", stiffness: 300, damping: 22 },
                }}
                className="relative rounded-2xl overflow-hidden"
                style={{
                  background: "#fff",
                  border: `2px solid ${isH ? c.accent : borderColor()}`,
                  boxShadow: isH
                    ? `0 24px 48px -12px ${c.accent}35, 0 0 0 3px ${c.accent}18`
                    : "0 4px 24px -4px rgba(34,34,122,0.10)",
                  transition:
                    "box-shadow 0.35s cubic-bezier(0.4,0,0.2,1), border-color 0.35s ease",
                }}
              >
                {/* top accent bar */}
                <div
                  className="absolute top-0 left-0 h-1 rounded-b-full"
                  style={{
                    background: `linear-gradient(90deg, ${c.accent}, ${brandColors.secondary})`,
                    width: isH ? "100%" : "40%",
                    transition: "width 0.5s cubic-bezier(0.22,1,0.36,1)",
                  }}
                />

                {/* bg wash */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at 50% 0%, ${c.accent}0a 0%, transparent 70%)`,
                    opacity: isH ? 1 : 0,
                    transition: "opacity 0.4s ease",
                  }}
                />

                <div className="relative p-7">
                  {/* icon */}
                  <motion.div
                    animate={
                      isH ? { scale: 1.12, rotate: 6 } : { scale: 1, rotate: 0 }
                    }
                    transition={{ type: "spring", stiffness: 260, damping: 22 }}
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      background: `linear-gradient(135deg, ${c.accent}, ${brandColors.secondary})`,
                      boxShadow: isH
                        ? `0 8px 24px -4px ${c.accent}50`
                        : `0 4px 12px -2px ${c.accent}35`,
                      transition: "box-shadow 0.3s ease",
                    }}
                  >
                    <Icon className="w-7 h-7 text-white" strokeWidth={2.2} />
                  </motion.div>

                  {/* watermark number */}
                  <span
                    className="absolute top-5 right-6 text-7xl font-black select-none pointer-events-none"
                    style={{
                      color: isH ? c.accent + "18" : brandColors.primary + "06",
                      lineHeight: 1,
                      transition: "color 0.4s ease",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* title */}
                  <h3
                    className="text-base font-bold leading-snug mb-2.5"
                    style={{
                      color: isH ? c.accent : brandColors.primary,
                      transition: "color 0.3s ease",
                    }}
                  >
                    {c.title}
                  </h3>

                  {/* desc */}
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {c.desc}
                  </p>

                  {/* learn-more arrow */}
                  <div
                    className="mt-5 flex items-center gap-1.5"
                    style={{
                      opacity: isH ? 1 : 0,
                      transform: isH ? "translateY(0)" : "translateY(6px)",
                      transition: "opacity 0.35s ease, transform 0.35s ease",
                    }}
                  >
                    <a
                      href={c.link}
                      target="_blank"
                      className="absolute inset-0 z-10"
                    />
                    <span
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: c.accent }}
                    >
                      Learn more
                    </span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      style={{
                        color: c.accent,
                        transform: isH ? "translateX(3px)" : "translateX(0)",
                        transition: "transform 0.3s ease",
                      }}
                    >
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
