import React, { useState } from "react";
import { motion } from "framer-motion";
import { X, Calendar } from "lucide-react";
import { events } from "./data/EventsData";
import { Link } from "react-router-dom";

export default function EventsSection() {
  const [selected, setSelected] = useState(null);

  const maxVisible = 3;
  const VisibleEvents = events.slice(0, maxVisible);

  return (
    <section className="w-full px-6 py-20" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,1), rgba(224,235,255,0.2))' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold border-b-4 border-transparent inline-block transition-all" style={{ color: '#1e3a8a', borderColor: '#3730a3' }}>
            Events & Summaries
          </h2>
          <div className="flex flex-wrap gap-2 md:gap-3">
            <Link
              to="/all-events"
              className="px-3 md:px-4 py-2 text-sm md:text-md font-medium hover:underline transition-all"
              style={{ color: '#3730a3', borderColor: '#3730a3' }}
            >
              More Reports
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VisibleEvents.map((ev) => (
            <motion.article
              key={ev.id}
              className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition"
              whileHover={{ y: -6 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                    {ev.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    {ev.location}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 whitespace-nowrap">
                  <Calendar className="w-4 sm:w-5 h-4 sm:h-5" style={{ color: '#3730a3' }} />
                  <span>{new Date(ev.date).toLocaleDateString()}</span>
                </div>
              </div>

              <p className="mt-4 text-gray-600 text-sm">{ev.excerpt}</p>

              <div className="mt-6 flex items-center justify-between gap-4">
                <span className="text-xs px-3 py-1 rounded-full border" style={{ backgroundColor: '#f3f0ff', color: '#3730a3', borderColor: '#c7d2fe' }}>
                  {ev.category}
                </span>
                <button
                  onClick={() => setSelected(ev)}
                  className="ml-auto inline-flex items-center gap-2 text-white text-sm font-medium rounded-full px-4 py-2 transition"
                  style={{ backgroundColor: '#3730a3' }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = '#4c1d95')}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = '#3730a3')}
                >
                  Read More
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Modal */}
        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setSelected(null)}
            ></div>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl z-10"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>

              <h3 className="text-2xl font-semibold text-gray-800">
                {selected.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {selected.location} —{" "}
                {new Date(selected.date).toLocaleDateString()}
              </p>

              <div className="mt-4 text-gray-700">{selected.details}</div>

              <div className="mt-6 flex gap-3 justify-end">
                <a
                  href="#"
                  className="px-4 py-2 rounded-full border border-indigo-200 text-indigo-600"
                >
                  Add to calendar
                </a>
                <a
                  href="#"
                  className="px-4 py-2 rounded-full bg-indigo-600 text-white"
                >
                  Register
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
