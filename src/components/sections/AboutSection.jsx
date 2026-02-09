import React from "react";
import { motion } from "framer-motion";
import { brandColors, grad, gradText, borderColor } from "../common/brand.js";
import { CTAButton } from "./HeroBanner.jsx";
import bannerImg8 from "../../assets/images/img11.jpg";

const textVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AboutSection() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: "#fff" }}
    >
      {/* ambient blob – bottom right */}
      <div
        className="absolute bottom-0 right-0 w-96 h-96 blur-3xl pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${brandColors.accent}0e 0%, transparent 70%)`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* ── image column ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* outer frame with brand border */}
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              style={{ border: `2px solid ${borderColor()}` }}
            >
              <motion.img
                src={bannerImg8}
                alt="PSG COE INDUTECH facility"
                className="w-full object-cover"
                style={{ maxHeight: 440 }}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.7 }}
              />
            </div>
          </motion.div>

          {/* ── text column ── */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            {/* eyebrow */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
              style={{
                background: `linear-gradient(135deg, ${brandColors.primary}0c, ${brandColors.accent}0c)`,
                border: `1.5px solid ${borderColor()}`,
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: grad.subtle }}
              />
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: brandColors.secondary }}
              >
                About Us
              </span>
            </div>

            {/* heading */}
            <h2
              className="text-4xl sm:text-5xl font-black tracking-tight leading-tight"
              style={{ color: brandColors.primary }}
            >
              About <span style={gradText}>COE INDUTECH</span>
            </h2>

            {/* body */}
            <p className="mt-5 text-base text-slate-600 leading-relaxed max-w-xl">
              PSGTECHS COE INDUTECH, Center of Excellence for Industrial and Home Textiles project
              sponsored by the Ministry of Textiles, Govt. of India under the scheme Technology Mission for
              Technical Textiles (TMTT) and is implemented by the Departments of Textile Technology and
              Automobile Engineering, PSG College of Technology and the COE is located within the premises
              of the PSG campus at Neelambur, Coimbatore. The PSGTECHS COE INDUTECH is committed to
              being a dynamic, competitive, and world-class “Center of Excellence” for developing,
              manufacturing, and testing new industrial and home textiles.<br /><br />

              PSGTECHS COE INDUTECH, being the Centre of Excellence for Industrial Textiles and Home
              Textiles, focus on activities to promote Technical Textiles in general and more specifically
              Industrial Textiles and Home Textiles in our country.
            </p>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="/docs/PSG COE Indutech  2019.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <CTAButton>Brochure</CTAButton>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
