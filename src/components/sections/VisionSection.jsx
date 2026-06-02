import React from "react";
import { motion } from "framer-motion";

export default function VisionSection() {
  // Brand colors - refined palette for tech/research
  const colors = {
    primary: "#0f172a", // Deep navy
    secondary: "#1e293b", // Charcoal
    accent: "#3b82f6", // Refined blue
    accentLight: "#60a5fa",
    text: "#0f172a",
    textLight: "#475569",
    textMuted: "#94a3b8",
    white: "#ffffff",
  };

  // Text content
  const visionStatement = {
    prefix: "To be a",
    emphasis: "dynamic, competitive and world-class",
    center: "Centre of Excellence",
    suffix:
      "for Technical Textiles research with an emphasis on Industrial & Home textiles, dedicated to the aspirations of the Indian Technical Textile Industry.",
  };

  // Container variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Animated word component
  const AnimatedWord = ({ word, delay, isEmphasis = false }) => (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={`inline-block mr-2 ${isEmphasis ? "font-bold" : ""}`}
    >
      {word}
    </motion.span>
  );

  // Animated line element
  const AnimatedLine = ({ delay, width = "w-32", direction = "left" }) => (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay, ease: "easeOut" }}
      className={`h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent origin-${direction}`}
      style={{ width: "100%", maxWidth: direction === "left" ? "128px" : "80px" }}
    />
  );

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* ========== ANIMATED BACKGROUND WITH TEXTURE ========== */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50" />

      {/* Subtle animated orbs in background */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)`,
        }}
        animate={{ x: [0, 40, 0], y: [0, 50, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute -bottom-60 -left-60 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, rgba(30, 41, 59, 0.06) 0%, transparent 70%)`,
        }}
        animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(15, 23, 42, 0.1) 25%, rgba(15, 23, 42, 0.1) 26%, transparent 27%, transparent 74%, rgba(15, 23, 42, 0.1) 75%, rgba(15, 23, 42, 0.1) 76%, transparent 77%, transparent),
                           linear-gradient(90deg, transparent 24%, rgba(15, 23, 42, 0.1) 25%, rgba(15, 23, 42, 0.1) 26%, transparent 27%, transparent 74%, rgba(15, 23, 42, 0.1) 75%, rgba(15, 23, 42, 0.1) 76%, transparent 77%, transparent)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ========== MAIN CONTENT ========== */}
      <div className="relative z-10 px-4 md:px-8 max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ========== TOP ACCENT ========== */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center mb-8"
          >
            <div className="h-px flex-grow bg-gradient-to-r from-transparent to-blue-300" />
            <span
              className="px-4 text-xs md:text-sm font-semibold tracking-widest uppercase"
              style={{ color: colors.accent }}
            >
              Our Strategic Direction
            </span>
            <div className="h-px flex-grow bg-gradient-to-l from-transparent to-blue-300" />
          </motion.div>

          {/* ========== MAIN HEADING WITH ASYMMETRIC LAYOUT ========== */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start mb-12 md:mb-16">
            {/* Left column - "Vision" heading */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-1 flex flex-col items-start justify-start"
            >
              <div className="mb-6">
                <h1
                  className="text-5xl md:text-6xl font-black tracking-tight leading-tight"
                  style={{ color: colors.primary }}
                >
                  Our
                </h1>
              </div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <div
                  className="text-6xl md:text-7xl font-black tracking-tight"
                  style={{
                    background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.accentLight} 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Vision
                </div>
                {/* Decorative underline */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="h-1.5 bg-gradient-to-r from-blue-400 to-blue-600 mt-3 rounded-full"
                />
              </motion.div>
            </motion.div>

            {/* Right column - Vision statement */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-2 flex flex-col justify-start"
            >
              {/* Decorative quote mark */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 0.1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-8xl font-black leading-none mb-4"
                style={{ color: colors.accent }}
              >
                "
              </motion.div>

              {/* Vision text with staggered animation */}
              <motion.div className="space-y-6">
                {/* First part */}
                <p
                  className="text-lg md:text-xl leading-relaxed font-light"
                  style={{ color: colors.textLight }}
                >
                  {visionStatement.prefix.split(" ").map((word, idx) => (
                    <AnimatedWord
                      key={`prefix-${idx}`}
                      word={word}
                      delay={0.5 + idx * 0.1}
                    />
                  ))}
                  {visionStatement.emphasis.split(" ").map((word, idx) => (
                    <AnimatedWord
                      key={`emphasis-${idx}`}
                      word={word}
                      delay={0.7 + idx * 0.1}
                      isEmphasis={true}
                    />
                  ))}
                </p>

                {/* Center emphasis */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
                  className="relative py-6"
                >
                  <div className="absolute -left-4 -right-4 -top-2 -bottom-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg opacity-60" />
                  <p
                    className="text-2xl md:text-3xl font-black italic tracking-tight relative"
                    style={{
                      background: `linear-gradient(135deg, ${colors.accent} 0%, #1e40af 100%)`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {visionStatement.center}
                  </p>
                </motion.div>

                {/* Closing part */}
                <p
                  className="text-lg md:text-xl leading-relaxed font-light"
                  style={{ color: colors.textLight }}
                >
                  {visionStatement.suffix.split(" ").map((word, idx) => (
                    <AnimatedWord
                      key={`suffix-${idx}`}
                      word={word}
                      delay={1.6 + idx * 0.08}
                    />
                  ))}
                </p>
              </motion.div>

              {/* Closing quote mark */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 0.1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 2.4 }}
                className="text-8xl font-black leading-none mt-4 text-right"
                style={{ color: colors.accent }}
              >
                "
              </motion.div>
            </motion.div>
          </div>

          {/* ========== BOTTOM ACCENT ELEMENTS ========== */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-8 md:gap-12 mt-16 md:mt-20"
          >
            <AnimatedLine delay={0.8} width="w-24" direction="left" />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
              className="w-3 h-3 rounded-full"
              style={{ background: colors.accent }}
            />
            <AnimatedLine delay={0.8} width="w-24" direction="right" />
          </motion.div>

          {/* ========== CALL TO ACTION (optional) ========== */}
          <motion.div
            variants={itemVariants}
            className="mt-16 md:mt-20 text-center"
          >
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className="group relative px-8 md:px-12 py-4 md:py-5 rounded-lg font-semibold text-sm md:text-base tracking-wide uppercase transition-all duration-300"
              style={{
                background: colors.accent,
                color: colors.white,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 20px 40px rgba(59, 130, 246, 0.3)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Explore Our Research
              <motion.span
                className="inline-block ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* ========== BOTTOM BORDER ACCENT ========== */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}