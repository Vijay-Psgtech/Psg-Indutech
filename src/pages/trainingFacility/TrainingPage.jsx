import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { trainingData } from "../../components/data/TrainingFacilityData.js";
import { brandColors, grad, gradText, borderColor } from "../../components/common/brand.js";

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
      <span
        className="w-2 h-2 rounded-full"
        style={{ background: grad.subtle }}
      />
      <span
        className="text-xs font-bold uppercase tracking-widest"
        style={{ color: brandColors.secondary }}
      >
        {children}
      </span>
    </div>
  );
}

const TrainingPage = () => {
  const [filter, setFilter] = useState("all");
  const categories = [
    "all",
    ...Array.from(new Set(trainingData.map((e) => e.category))),
  ];

  const filtered =
    filter === "all"
      ? trainingData
      : trainingData.filter((e) => e.category === filter);
  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 bg-gradient-to-br from-indigo-50 via-white to-indigo-50">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <Eyebrow>Training Programs</Eyebrow>
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight"
          style={{ color: brandColors.primary }}
        >
          Training Program <span style={gradText}>Capability</span>
        </h1>
        <p className="mt-3 text-slate-500 text-base max-w-2xl mx-auto">
          Explore our collection of events and summaries at PSG Tech's COE
          INDUTECH.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-20"
        >
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                filter === c
                  ? "text-white shadow-md"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-indigo-300"
              }`}
              style={
                filter === c ? { backgroundColor: `${brandColors.tertiary}` } : {}
              }
            >
              {c.charAt(0).toUpperCase() + c.slice(1)}
            </button>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filtered.map((ev) => (
            <motion.article
              key={ev.title}
              className="relative bg-white rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-shadow"
              whileHover={{ y: -4 }}
            >
              {/* Card Header: Title and Date */}
              <div className="flex flex-col gap-3 mb-4">
                <div>
                  <h3 className="text-sm sm:text-base md:text-lg font-bold break-words"
                    style={{ color: `${brandColors.primary}`}}
                  >
                    {ev.title}
                  </h3>
                  <p className="inline-flex items-center gap-1 text-xs sm:text-sm text-gray-600 mt-2">
                    <MapPin
                      className="w-3.5 sm:w-4 h-3.5 sm:h-4 flex-shrink-0"
                      style={{ color: `${brandColors.accent}` }}
                    />
                    <span className="truncate">{ev.location}</span>
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-600">
                  <Calendar
                    className="w-3.5 sm:w-4 h-3.5 sm:h-4 flex-shrink-0"
                    style={{ color: `${brandColors.accent}` }}
                  />
                  <span className="whitespace-nowrap">
                    {new Date(ev.date).toDateString()}
                  </span>
                </div>
              </div>

              {/* Card Body: Excerpt */}
              <p className="text-gray-600 text-xs sm:text-sm line-clamp-3 mb-4">
                {ev.excerpt}
              </p>

              {/* Card Footer: Category and Button */}
              <div className="mt-auto pt-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <span
                  className="text-xs px-3 py-1.5 rounded-full border w-fit"
                  style={{
                    backgroundColor: "var(--color-indigo-50)",
                    color: `${brandColors.secondary}`,
                    borderColor: `${borderColor()}`,
                  }}
                >
                  {ev.category}
                </span>
                <button
                  onClick={() =>
                    window.open(ev.pdf, "_blank", "noopener,noreferrer")
                  }
                  className="event-read-more-btn inline-flex items-center justify-center gap-2 text-white text-xs sm:text-sm font-medium rounded-full px-4 py-2 transition-all focus:outline-none focus-visible:ring-2"
                  style={{
                    backgroundColor: `${brandColors.secondary}`,
                    focusVisibleRingColor: `${brandColors.accent}`,
                  }}
                >
                  Read More
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingPage;
