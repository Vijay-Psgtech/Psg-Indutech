import React, { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import { albumImages } from "../../components/data/GalleryAlbumData";

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
      <div className="max-w-6xl mx-auto">
        {/* Back */}
        <Link
          to="/gallery"
          className="inline-flex items-center text-sm text-indigo-600 mb-6 hover:text-purple-600 transition"
        >
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to Gallery
        </Link>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl font-bold text-center mb-10 text-indigo-900"
        >
          {title || "Album"}
          {date && <span className="block text-sm text-gray-500 mt-2">{date}</span>}
        </motion.h1>

        {/* Grid */}
        {images.length > 0 ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((src, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="rounded-xl overflow-hidden shadow-md bg-white cursor-pointer"
                onClick={() => setActiveIndex(index)}
              >
                <img
                  src={src}
                  alt={`Album ${index + 1}`}
                  className="w-full h-56 object-cover"
                />
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 mt-10">
            No images available for this album.
          </p>
        )}
      </div>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
          >
            {/* Image */}
            <motion.img
              key={activeIndex}
              src={images[activeIndex]}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-h-[85vh] max-w-full rounded-xl shadow-2xl"
            />

            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white bg-black/50 p-2 rounded-full hover:bg-black transition"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev */}
            <button
              onClick={showPrev}
              className="absolute left-4 md:left-8 text-white bg-black/40 p-3 rounded-full hover:bg-black transition"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            {/* Next */}
            <button
              onClick={showNext}
              className="absolute right-4 md:right-8 text-white bg-black/40 p-3 rounded-full hover:bg-black transition"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AlbumPage;
