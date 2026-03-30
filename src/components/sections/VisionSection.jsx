import React from "react";
import { motion } from "framer-motion";
import { brandColors, grad, gradText, borderColor } from "../common/brand.js";

export default function VisionSection() {
  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{ background: "#f8f9ff" }}
    >
      {/* subtle radial wash – top-right */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] blur-3xl pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${brandColors.secondary}10 0%, transparent 70%)`,
        }}
      />
      {/* bottom-left */}
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] blur-3xl pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${brandColors.accent}0c 0%, transparent 70%)`,
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        {/* heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-black tracking-tight"
          style={{ color: brandColors.primary }}
        >
          Our <span style={gradText}>Vision</span>
        </motion.h2>

        {/* accent bar */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 72 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mx-auto mt-5 h-1 rounded-full"
          style={{ background: grad.subtle }}
        />

        {/* quote block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 relative"
        >
          {/* decorative open-quote mark */}
          <span
            className="absolute -top-4 -left-3 text-8xl font-black leading-none select-none"
            style={{ color: `${brandColors.accent}18` }}
          >
            "
          </span>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
            To be a dynamic, competitive and world-class{" "}
            <span
              className="font-black italic"
              style={{ color: brandColors.primary }}
            >
              "Centre of Excellence"
            </span>{" "}
            for Technical Textiles research with an emphasis on Industrial &
            Home textiles, dedicated to the aspirations of the Indian Technical
            Textile Industry.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
