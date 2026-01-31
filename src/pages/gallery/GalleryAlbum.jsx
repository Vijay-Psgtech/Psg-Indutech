import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { albums } from "../../components/data/GalleryAlbumData.js";

const GalleryAlbum = () => {
  const navigate = useNavigate();
  const handleGalleryClick = (id, title, date) => {
    navigate(`/gallery/${id}`, { state: { title, date } });
  };
  return (
    <section
      className="min-h-screen py-20 px-6 bg-gradient-to-b from-indigo-50 via-white to-indigo-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1
            className="text-5xl sm:text-6xl font-bold mb-4"
            style={{ color: "var(--color-deep-indigo)" }}
          >
            Gallery
          </h1>
          <div
            className="w-16 h-1 mx-auto rounded-full mb-8"
            style={{
              background: "linear-gradient(90deg, var(--color-cyan), var(--color-purple))",
            }}
          ></div>
          <p
            className="text-lg sm:text-xl max-w-2xl mx-auto"
            style={{ color: "var(--color-indigo)" }}
          >
            Explore memorable moments and events captured in our gallery albums.
          </p>
        </motion.div>

        {/* Albums Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.map((album, index) => (
            <motion.div
              key={album.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -12 }}
              onClick={() =>
                handleGalleryClick(album.id, album.title, album.date)
              }
              className="group cursor-pointer rounded-2xl overflow-hidden shadow-2xl transition-all duration-300"
              style={{
                backgroundColor: "var(--color-indigo-50)",
                border: "2px solid var(--color-indigo-100)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--color-cyan)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(6, 182, 212, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-indigo-100)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.1)";
              }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100">
                <img
                  src={album.cover}
                  alt={album.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Image Count Badge */}
                <div 
                  className="absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-bold text-white backdrop-blur-md"
                  style={{ backgroundColor: "rgba(34, 34, 122, 0.85)" }}
                >
                  View Album
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0.8 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl font-bold mb-3 line-clamp-2"
                  style={{
                    color: "var(--color-deep-indigo)",
                  }}
                >
                  {album.title}
                </motion.h3>

                {/* Date */}
                <div className="flex items-center gap-2 mb-4">
                  <span 
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: "var(--color-cyan)" }}
                  ></span>
                  <p 
                    className="text-sm font-medium"
                    style={{ color: "var(--color-indigo)" }}
                  >
                    {album.date}
                  </p>
                </div>

                {/* Divider */}
                <div 
                  className="w-8 h-1 rounded-full mb-4 transition-all duration-300 group-hover:w-16"
                  style={{
                    background: "linear-gradient(90deg, var(--color-cyan), var(--color-purple))",
                  }}
                ></div>

                {/* Hover CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  whileInView={{ opacity: 0 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-sm font-semibold flex items-center gap-2"
                  style={{ color: "var(--color-deep-indigo)" }}
                >
                  Explore Gallery
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryAlbum;
