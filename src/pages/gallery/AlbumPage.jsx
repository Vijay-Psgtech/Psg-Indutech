import React, { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import { albumImages } from "../../components/data/GalleryAlbumData.js";

const AlbumPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const { title, date } = location.state || {};
  const images = albumImages[id] || [];

  const [activeIndex, setActiveIndex] = useState(null);

  const closeModal = () => setActiveIndex(null);
  const showPrev = () =>
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  const showNext = () =>
    setActiveIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));

  /* Keyboard navigation */
  useEffect(() => {
    const handleKey = (e) => {
      if (activeIndex === null) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex]);

  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-b from-indigo-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link
          to="/gallery"
          className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300 group mb-10"
          style={{ color: "var(--color-deep-indigo)" }}
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Gallery</span>
        </Link>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1
            className="text-4xl sm:text-5xl font-bold mb-3"
            style={{ color: "var(--color-deep-indigo)" }}
          >
            {title || "Album"}
          </h1>
          {date && (
            <p
              className="text-lg flex items-center gap-2"
              style={{ color: "var(--color-indigo)" }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "var(--color-cyan)" }}
              ></span>
              {date}
            </p>
          )}
          <div
            className="w-12 h-1 rounded-full mt-4"
            style={{
              background: `linear-gradient(to right, var(--color-cyan), var(--color-purple))`,
            }}
          ></div>
        </motion.div>

        {/* Grid */}
        {images.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {images.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group relative cursor-pointer rounded-2xl overflow-hidden shadow-2xl transition-all duration-300"
                style={{
                  backgroundColor: "var(--color-indigo-50)",
                  border: "2px solid var(--color-indigo-100)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "var(--color-cyan)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor =
                    "var(--color-indigo-100)")
                }
                onClick={() => setActiveIndex(index)}
              >
                {/* Image Container */}
                <div
                  className="relative h-64 sm:h-72 overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, var(--color-indigo), var(--color-purple))`,
                  }}
                >
                  <img
                    src={src}
                    alt={`Album ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className="text-white font-medium text-sm">
                      View Full Size
                    </span>
                  </div>
                </div>

                {/* Image Counter */}
                <div
                  className="absolute top-3 right-3 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: "rgba(34, 34, 122, 0.8)",
                    color: "white",
                  }}
                >
                  {index + 1}/{images.length}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20">
            <p className="text-lg" style={{ color: "var(--color-indigo)" }}>
              No images available for this album.
            </p>
          </div>
        )}
      </div>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 backdrop-blur-md flex flex-col items-center justify-center px-3 sm:px-4 py-6 sm:py-8"
            style={{ backgroundColor: "rgba(34, 34, 122, 0.6)" }}
            onClick={closeModal}
          >
            {/* Modal Container */}
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{
                duration: 0.3,
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="relative w-full max-w-5xl flex flex-col items-center"
            >
              {/* Image */}
              <motion.img
                key={activeIndex}
                src={images[activeIndex]}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="max-h-[60vh] sm:max-h-[75vh] max-w-full w-full rounded-xl sm:rounded-2xl shadow-2xl"
                style={{ border: "2px solid var(--color-indigo-100)" }}
              />

              {/* Image Counter & Info */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.3 }}
                className="mt-6 text-center text-sm font-medium"
              >
                <span
                  className="inline-block px-4 py-2 backdrop-blur-sm rounded-full"
                  style={{
                    backgroundColor: "rgba(68, 76, 154, 0.8)",
                    color: "var(--color-on-deep)",
                    border: "1px solid var(--color-indigo-100)",
                  }}
                >
                  {activeIndex + 1} / {images.length}
                </span>
              </motion.div>

              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                onClick={closeModal}
                className="absolute -top-10 right-0 text-white p-3 rounded-full transition-all duration-300 shadow-lg"
                style={{
                  backgroundColor: "rgba(220, 38, 38, 0.8)",
                  border: "2px solid rgba(220, 38, 38, 0.3)",
                }}
              >
                <X className="w-5 h-5" />
              </motion.button>

              {/* Navigation Buttons */}
              <motion.button
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
                onClick={showPrev}
                className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 sm:-translate-x-16 text-white p-2 sm:p-4 rounded-full transition-all duration-300 shadow-lg"
                style={{
                  backgroundColor: "rgba(6, 182, 212, 0.8)",
                  border: "2px solid rgba(6, 182, 212, 0.3)",
                }}
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
                onClick={showNext}
                className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 sm:translate-x-16 text-white p-2 sm:p-4 rounded-full transition-all duration-300 shadow-lg"
                style={{
                  backgroundColor: "rgba(6, 182, 212, 0.8)",
                  border: "2px solid rgba(6, 182, 212, 0.3)",
                }}
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.button>

              {/* Keyboard hint - hidden on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="hidden sm:flex mt-6 text-center text-xs gap-6 justify-center flex-wrap"
                style={{ color: "var(--color-on-deep)", opacity: 0.6 }}
              >
                <span>
                  Press{" "}
                  <kbd
                    className="px-2 py-1 rounded border text-xs font-medium mx-1"
                    style={{
                      backgroundColor: "rgba(68, 76, 154, 0.6)",
                      borderColor: "var(--color-indigo-100)",
                      color: "var(--color-on-deep)",
                    }}
                  >
                    ←
                  </kbd>{" "}
                  /{" "}
                  <kbd
                    className="px-2 py-1 rounded border text-xs font-medium mx-1"
                    style={{
                      backgroundColor: "rgba(68, 76, 154, 0.6)",
                      borderColor: "var(--color-indigo-100)",
                      color: "var(--color-on-deep)",
                    }}
                  >
                    →
                  </kbd>{" "}
                  to navigate
                </span>
                <span>
                  Press{" "}
                  <kbd
                    className="px-2 py-1 rounded border text-xs font-medium mx-1"
                    style={{
                      backgroundColor: "rgba(68, 76, 154, 0.6)",
                      borderColor: "var(--color-indigo-100)",
                      color: "var(--color-on-deep)",
                    }}
                  >
                    Esc
                  </kbd>{" "}
                  to close
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AlbumPage;
