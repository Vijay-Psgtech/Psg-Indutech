import React from "react";
import { motion } from "framer-motion";
import { FileText, ArrowRight } from "lucide-react";
import { brandColors, grad, gradText, borderColor } from "../common/brand.js";
import { formLinks } from "../data/FormsData.js";

const grid = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const card = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 90, damping: 18 },
  },
};

export default function FormsDocuments() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: "#f8f9ff" }}
    >
      {/* blob */}
      <div
        className="absolute top-0 left-0 w-80 h-80 blur-3xl pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${brandColors.secondary}0e 0%, transparent 70%)`,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
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
              Resources
            </span>
          </div>

          <h2
            className="text-4xl sm:text-5xl font-black tracking-tight"
            style={{ color: brandColors.primary }}
          >
            Forms &amp; <span style={gradText}>Documents</span>
          </h2>
          <p className="mt-3 text-slate-500 text-base max-w-xl mx-auto">
            Download the latest forms, guidelines, and official documents.
          </p>
        </motion.div>

        {/* ── card grid ── */}
        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {formLinks.map((form, i) => (
            <motion.div
              key={i}
              variants={card}
              className="group relative bg-white rounded-2xl p-7 shadow-md overflow-hidden cursor-pointer"
              style={{
                border: `2px solid ${borderColor()}`,
                transition: "box-shadow 0.35s ease, border-color 0.35s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 16px 40px -8px ${brandColors.accent}30`;
                e.currentTarget.style.borderColor = brandColors.accent;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "";
                e.currentTarget.style.borderColor = borderColor();
              }}
            >
              {/* top accent bar */}
              <div
                className="absolute top-0 left-0 h-1 rounded-b-full"
                style={{
                  background: grad.subtle,
                  width: "0%",
                  transition: "width 0.45s cubic-bezier(0.22,1,0.36,1)",
                }}
                ref={(el) => {
                  if (!el) return;
                  const parent = el.parentElement;
                  parent.onmouseenter = () => {
                    el.style.width = "100%";
                  };
                  parent.onmouseleave = () => {
                    el.style.width = "0%";
                  };
                }}
              />

              {/* icon badge */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 shadow-md"
                style={{ background: grad.subtle }}
              >
                <FileText className="w-6 h-6 text-white" />
              </div>

              {/* title */}
              <h3
                className="text-base font-bold leading-snug"
                style={{ color: brandColors.primary }}
              >
                {form.title}
              </h3>

              {/* link */}
              <a
                href={form.pdf}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 mt-4 text-xs font-bold uppercase tracking-wider transition-colors duration-200"
                style={{ color: brandColors.accent }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = brandColors.secondary)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = brandColors.accent)
                }
              >
                View PDF
                <ArrowRight
                  className="w-4 h-4"
                  style={{
                    transition: "transform 0.25s",
                    transform: "translateX(0)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "translateX(3px)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "translateX(0)")
                  }
                />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
