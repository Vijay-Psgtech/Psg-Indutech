import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { events } from "../components/data/EventsData";

const EventsPage = () => {
  const [filter, setFilter] = useState("all");
  const categories = [
    "all",
    ...Array.from(new Set(events.map((e) => e.category))),
  ];

  const filtered =
    filter === "all" ? events : events.filter((e) => e.category === filter);
  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 bg-gradient-to-br from-indigo-50 via-white to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center"
          style={{ color: "var(--color-deep-indigo)" }}
        >
          Events & Summaries
        </motion.h1>

        <p
          className="text-base sm:text-lg md:text-xl text-gray-600 text-center mb-10 max-w-3xl mx-auto"
          style={{ color: "var(--color-muted)" }}
        >
          Explore our collection of events and summaries at PSG Tech's COE INDUTECH.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12"
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
                filter === c
                  ? { backgroundColor: "var(--color-indigo)" }
                  : {}
              }
            >
              {c.charAt(0).toUpperCase() + c.slice(1)}
            </button>
          ))}
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
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
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 break-words">
                  {ev.title}
                </h3>
                <p className="inline-flex items-center gap-1 text-xs sm:text-sm text-gray-600 mt-2">
                  <MapPin className="w-3.5 sm:w-4 h-3.5 sm:h-4 flex-shrink-0" style={{ color: "var(--color-indigo)" }} />
                  <span className="truncate">{ev.location}</span>
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-600">
                <Calendar className="w-3.5 sm:w-4 h-3.5 sm:h-4 flex-shrink-0" style={{ color: "var(--color-indigo)" }} />
                <span className="whitespace-nowrap">{new Date(ev.date).toLocaleDateString()}</span>
              </div>
            </div>

            {/* Card Body: Excerpt */}
            <p className="text-gray-600 text-xs sm:text-sm line-clamp-3 mb-4">{ev.excerpt}</p>

            {/* Card Footer: Category and Button */}
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
    </section>
  );
};

export default EventsPage;
