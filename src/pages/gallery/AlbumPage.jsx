import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { albumImages } from "../../components/data/GalleryAlbumData";

const AlbumPage = () => {
  const { id } = useParams();
  const images = albumImages[id] || [];

  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-b from-indigo-50 via-white to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <Link
          to="/gallery"
          className="inline-flex items-center text-sm text-[var(--color-indigo)] mb-6 hover:text-[var(--color-purple)] transition"
        >
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to Gallery
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl font-bold text-center mb-10"
          style={{ color: "var(--color-deep-indigo)" }}
        >
          {id.replace("-", " ").toUpperCase()}
        </motion.h1>

        {images.length > 0 ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((src, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="rounded-xl overflow-hidden shadow-md bg-white"
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
    </section>
  );
};

export default AlbumPage;
