import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, BookOpen, Home, ArrowRight, Download, ExternalLink } from "lucide-react";
import logo  from "/logo1.png";
import { brandColors, grad, gradText, borderColor } from "../../components/common/brand.js";


/* ── shared motion presets ──────────────────────────────────── */
const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const fadeLeft = {
  hidden:  { opacity: 0, x: -36 },
  visible: { opacity: 1, x: 0,  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};
const fadeRight = {
  hidden:  { opacity: 0, x: 36 },
  visible: { opacity: 1, x: 0,  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.1 } },
};
const childFade = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

/* ── small reusable pieces ─────────────────────────────────── */
function Eyebrow({ children }) {
  return (
    <div
      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full"
      style={{
        background: `linear-gradient(135deg, ${brandColors.primary}0c, ${brandColors.accent}0c)`,
        border: `1.5px solid ${borderColor()}`,
      }}
    >
      <span className="w-2 h-2 rounded-full" style={{ background: grad.subtle }} />
      <span className="text-xs font-bold uppercase tracking-widest" style={{ color: brandColors.secondary }}>
        {children}
      </span>
    </div>
  );
}

function CTAButton({ href, target, children, icon: Icon = ArrowRight }) {
  return (
    <a
      href={href}
      target={target}
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-bold tracking-wide transition-all duration-300"
      style={{
        background: grad.subtle,
        boxShadow: `0 4px 18px ${brandColors.accent}40`,
      }}
      onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 6px 28px ${brandColors.accent}60`)}
      onMouseLeave={e => (e.currentTarget.style.boxShadow = `0 4px 18px ${brandColors.accent}40`)}
    >
      {children}
      <Icon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
    </a>
  );
}

export default function PsgCoEAbout() {
  const [hovPill, setHovPill] = useState(null);   // "indutech" | "hometech" | null

  /* pill data – keeps the JSX clean */
  const pills = [
    {
      key: "indutech",
      icon: BookOpen,
      label: "INDUTECH",
      subtitle: "Industrial Textiles",
      body: (
        <>
          The term <strong className="text-slate-800">Industrial Textiles</strong> refers to a subgroup of a wider category of Technical Textiles,
          referring specifically to those textile products used in the course of manufacturing operations
          (such as filters, conveyor belts, abrasive substrates) or which are incorporated into other
          industrial products (such as electrical components, cables, flexible seals, acoustic and thermal
          insulation of industrial appliances). The rate of growth for Industrial Textile Products are
          expected to be over <strong className="text-slate-800">12 % per annum</strong>, which is quite healthy and presents an opportunity to a
          new entrant the scope and space to establish himself.
        </>
      ),
    },
    {
      key: "hometech",
      icon: Home,
      label: "HOMETECH",
      subtitle: "Home Textiles",
      body: (
        <>
          <strong className="text-slate-800">Hometech</strong> segment of technical textiles comprises of the textile components used in the
          domestic environment-interior decoration and furniture, carpeting, protection against the sun,
          cushion materials, fireproofing, floor and wall coverings, textile reinforced structures / fittings,
          filter products for vacuum cleaners. They are made of both natural and synthetic
          fibres. Compound Annual Growth Rate (CAGR) of approximately <strong className="text-slate-800">5-6.4%</strong>through 2030. Fiberfil
          and pillow and mattress components together constitute over 50% of the technical textile usage
          under the Hometech segment followed by blinds, Carpet backing and others.
        </>
      ),
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden" style={{ background: "#f8f9ff" }}>

      {/* ── ambient blobs ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute rounded-full blur-3xl"
          style={{ width: 500, height: 500, top: -180, right: -140,
            background: `radial-gradient(circle, ${brandColors.accent}12 0%, transparent 70%)` }} />
        <div className="absolute rounded-full blur-3xl"
          style={{ width: 420, height: 420, bottom: -150, left: -130,
            background: `radial-gradient(circle, ${brandColors.secondary}0e 0%, transparent 70%)` }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-18">

        {/* ═══  PAGE HEADER ═══ */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center"
        >
          <Eyebrow>About Us</Eyebrow>

          <h1
            className="mt-4 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight"
            style={{ color: brandColors.primary }}
          >
            About <span style={gradText}>COE INDUTECH</span>
          </h1>
          <p className="mt-3 text-slate-500 text-base max-w-2xl mx-auto">
            Driving innovation in industrial &amp; home textiles for a
            sustainable future.
          </p>
        </motion.div>

        {/* ═══ INTRO CALLOUT ═══ */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="relative overflow-hidden rounded-2xl"
          style={{
            background: "#fff",
            border: `2px solid ${borderColor()}`,
            boxShadow: "0 4px 24px -4px rgba(34,34,122,0.10)",
          }}
        >
          {/* left accent stripe */}
          <div className="absolute top-0 left-0 w-1.5 h-full rounded-r-full"
            style={{ background: grad.subtle }} />

          <div className="flex items-start gap-5 p-6 pl-8">
            {/* star badge */}
            <div
              className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center shadow-md"
              style={{ background: grad.subtle }}
            >
              <Star className="w-5 h-5 text-white" fill="white" />
            </div>

            <div>
              <p className="text-sm font-bold mb-1" style={{ color: brandColors.primary }}>
                Introduction – Centre of Excellence (INDUTECH)
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                The Centre of Excellence for Industrial Textiles (COE INDUTECH)
                is a flagship initiative supported by the Ministry of Textiles,
                Government of India, and hosted at PSG College of Technology.
                The centre aims to foster innovation, research, testing,
                incubation, and skill development in the field of industrial and
                home technical textiles, bridging academia and industry for
                sustainable growth.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ═══ HERO IMAGE + LOGO ROW ═══ */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-stretch">

          {/* ── banner image (spans 3 cols) ── */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="md:col-span-3 relative rounded-3xl overflow-hidden shadow-xl"
            style={{ border: `2px solid ${borderColor()}` }}
          >
            <img
              src="/images/about/img1.jpg"
              alt="PSG COE Indutech"
              className="w-full h-full object-cover"
              style={{ minHeight: 240 }}
            />
            {/* gradient scrim at bottom so the label is readable */}
            <div className="absolute bottom-0 left-0 right-0 h-28"
              style={{ background: "linear-gradient(to top, rgba(20,20,60,0.65), transparent)" }} />
            {/* floating label */}
            <div className="absolute bottom-4 left-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-xs font-bold tracking-wide"
                style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.25)" }}>
                <span className="w-2 h-2 rounded-full" style={{ background: brandColors.accent }} />
                PSG College of Technology, Coimbatore
              </span>
            </div>
          </motion.div>

          {/* ── logo card (spans 2 cols) ── */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="md:col-span-2 flex flex-col items-center justify-center rounded-3xl p-8 gap-5"
            style={{
              background: "#fff",
              border: `2px solid ${borderColor()}`,
              boxShadow: "0 4px 24px -4px rgba(34,34,122,0.10)",
            }}
          >
            {/* logo ring */}
            <div className="relative">
              <div className="absolute inset-0 rounded-full blur-xl opacity-40"
                style={{ background: grad.subtle }} />
              <div className="relative w-32 h-32 rounded-full flex items-center justify-center shadow-lg overflow-hidden"
                style={{ border: `3px solid ${borderColor("33")}`, background: "#fff" }}>
                <img src={logo} alt="PSG Tech Logo" className="w-24 h-24 object-contain" />
              </div>
            </div>

            {/* name pill */}
            <span
              className="px-5 py-2 rounded-full text-white text-xs font-bold tracking-wider shadow-md"
              style={{ background: grad.subtle }}
            >
              PSG TECH – COE INDUTECH
            </span>

            {/* brochure CTA */}
            <CTAButton href="/docs/PSG COE Indutech  2019.pdf" target="_blank" icon={Download}>
              Download Brochure
            </CTAButton>
          </motion.div>
        </div>

        {/* ═══ INDUTECH / HOMETECH CARDS ═══ */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {pills.map((pill) => {
            const Icon = pill.icon;
            const isH  = hovPill === pill.key;

            return (
              <motion.div
                key={pill.key}
                variants={childFade}
                onHoverStart={() => setHovPill(pill.key)}
                onHoverEnd  ={() => setHovPill(null)}
                whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 22 } }}
                className="relative rounded-2xl overflow-hidden"
                style={{
                  background: "#fff",
                  border: `2px solid ${isH ? brandColors.accent : borderColor()}`,
                  boxShadow: isH
                    ? `0 20px 40px -10px ${brandColors.accent}30, 0 0 0 3px ${brandColors.accent}15`
                    : "0 4px 24px -4px rgba(34,34,122,0.10)",
                  transition: "box-shadow 0.35s cubic-bezier(0.4,0,0.2,1), border-color 0.35s ease",
                }}
              >
                {/* top accent bar */}
                <div className="absolute top-0 left-0 h-1 rounded-b-full"
                  style={{
                    background: grad.subtle,
                    width: isH ? "100%" : "35%",
                    transition: "width 0.5s cubic-bezier(0.22,1,0.36,1)",
                  }}
                />

                {/* subtle bg wash */}
                <div className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at 50% 0%, ${brandColors.accent}0a 0%, transparent 70%)`,
                    opacity: isH ? 1 : 0,
                    transition: "opacity 0.4s ease",
                  }}
                />

                <div className="relative p-7">
                  {/* icon + label row */}
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      animate={isH ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 260, damping: 22 }}
                      className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md"
                      style={{
                        background: grad.subtle,
                        boxShadow: isH ? `0 6px 20px -4px ${brandColors.accent}50` : `0 3px 10px -2px ${brandColors.accent}35`,
                        transition: "box-shadow 0.3s ease",
                      }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>

                    <div>
                      <h2 className="text-lg font-black leading-tight" style={{ color: isH ? brandColors.accent : brandColors.primary, transition: "color 0.3s ease" }}>
                        {pill.label}
                      </h2>
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        {pill.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* body */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pill.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ═══ BOTTOM CTA BANNER ═══ */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="relative rounded-3xl overflow-hidden p-8 md:p-10 text-white"
          style={{ background: grad.hero }}
        >
          {/* decorative dot grid */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.08]"
            style={{
              backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-black leading-tight">
                Explore Events &amp; Training
              </h3>
              <p className="mt-2 text-white/70 text-sm max-w-md">
                Stay updated with the latest workshops, seminars, and skill-
                development programmes offered by COE INDUTECH.
              </p>
            </div>

            <CTAButton href="/training" icon={ExternalLink}>
              View All Programs
            </CTAButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}