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
            Summary on Events
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
              <div className="flex flex-col gap-3 mb-4">
                <div>
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 break-words">
                    {ev.title}
                  </h3>
                  <p className="inline-flex items-center gap-1 text-xs sm:text-sm text-gray-600 mt-2">
                    <MapPin
                      className="w-3.5 sm:w-4 h-3.5 sm:h-4 flex-shrink-0"
                      style={{ color: "var(--color-indigo)" }}
                    />
                    <span className="truncate">{ev.location}</span>
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-600">
                  <Calendar
                    className="w-3.5 sm:w-4 h-3.5 sm:h-4 flex-shrink-0"
                    style={{ color: "var(--color-indigo)" }}
                  />
                  <span className="whitespace-nowrap">
                    {new Date(ev.date).toLocaleDateString()}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 text-xs sm:text-sm line-clamp-3 mb-4">
                {ev.excerpt}
              </p>

              <div className="mt-auto pt-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <span
                  className="text-xs px-3 py-1.5 rounded-full border w-fit"
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
                  className="event-read-more-btn inline-flex items-center justify-center gap-2 text-white text-xs sm:text-sm font-medium rounded-full px-4 py-2 transition-all focus:outline-none focus-visible:ring-2"
                  style={{
                    backgroundColor: "var(--color-indigo)",
                    focusVisibleRingColor: "var(--color-cyan)",
                  }}
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
