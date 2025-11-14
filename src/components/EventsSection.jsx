import React, { useState } from "react";
import { motion } from "framer-motion";
import { X, Calendar } from "lucide-react";
import { MapPin } from "lucide-react";
import { events } from "./data/EventsData";
import { Link } from "react-router-dom";

export default function EventsSection() {
  const maxVisible = 3;
  const VisibleEvents = events.slice(0, maxVisible);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="w-full px-6 py-20"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(255,255,255,1), var(--color-indigo-50))",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          <h2
            className="text-3xl md:text-4xl font-bold border-b-4 border-transparent inline-block transition-all"
            style={{
              color: "var(--color-deep-indigo)",
              borderColor: "var(--color-indigo)",
            }}
          >
            Events & Summaries
          </h2>
          <div className="flex flex-wrap gap-2 md:gap-3">
            <Link
              to="/all-events"
              className="px-3 md:px-4 py-2 text-sm md:text-md font-medium hover:underline transition-all"
              style={{
                color: "var(--color-indigo)",
                borderColor: "var(--color-indigo)",
              }}
            >
              More Reports
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VisibleEvents.map((ev) => (
            <motion.article
              key={ev.title}
              className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition"
              whileHover={{ y: -6 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                    {ev.title}
                  </h3>
                  <p className="inline-flex gap-1 text-xs sm:text-sm text-gray-500 mt-1">
                    <MapPin className="w-4 sm:w-5 h-4 sm:h-5" style={{ color: "var(--color-indigo)" }} /> {ev.location}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 whitespace-nowrap">
                  <Calendar
                    className="w-4 sm:w-5 h-4 sm:h-5"
                    style={{ color: "var(--color-indigo)" }}
                  />
                  <span>{new Date(ev.date).toLocaleDateString()}</span>
                </div>
              </div>

              <p className="mt-4 text-gray-600 text-sm">{ev.excerpt}</p>

              <div className="mt-6 flex items-center justify-between gap-4">
                <span
                  className="text-xs px-3 py-1 rounded-full border"
                  style={{
                    backgroundColor: "var(--color-indigo-50)",
                    color: "var(--color-indigo)",
                    borderColor: "var(--color-indigo-100)",
                  }}
                >
                  {ev.category}
                </span>
                <button
                  onClick={() =>
                    window.open(ev.pdf, "_blank", "noopener,noreferrer")
                  }
                  className="ml-auto inline-flex items-center gap-2 text-white text-sm font-medium rounded-full px-4 py-2 transition"
                  style={{ backgroundColor: "var(--color-indigo)" }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "var(--color-purple)")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "var(--color-indigo)")
                  }
                >
                  Read More
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
