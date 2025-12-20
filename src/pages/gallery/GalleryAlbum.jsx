import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { albums } from "../../components/data/GalleryAlbumData";

const GalleryAlbum = () => {
  const navigate = useNavigate();
  const handleGalleryClick = (id, title, date) => {
    navigate(`/gallery/${id}`, { state: { title, date } });
  };
  return (
    <section
      className="min-h-screen py-20 px-6 bg-gradient-to-b from-indigo-50 via-white to-indigo-50"
      style={{
        "--color-deep-indigo": "#22227A",
        "--color-indigo": "#434C9A",
        "--color-purple": "#6D77B3",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--color-deep-indigo)" }}
          >
            Gallery
          </h1>
          <div
            className="w-20 h-1 mx-auto rounded-full mb-6"
            style={{
              background:
                "linear-gradient(90deg, var(--color-deep-indigo), var(--color-indigo), var(--color-purple))",
            }}
          ></div>
          <p
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto"
            style={{ color: "var(--color-muted)" }}
          >
            Explore memorable moments and events captured in our gallery albums.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.map((album, index) => (
            <motion.div
              key={album.id}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 120, damping: 10 }}
              className="rounded-xl overflow-hidden shadow-lg bg-white group"
            >
              <div
                className="relative hover:cursor-pointer"
                onClick={() =>
                  handleGalleryClick(album.id, album.title, album.date)
                }
              >
                <img
                  src={album.cover}
                  alt={album.title}
                  className="w-full h-52 object-cover group-hover:opacity-90 transition-all"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
              <div className="p-4 text-center">
                <h3
                  className="text-lg font-semibold mb-1"
                  style={{ color: "var(--color-indigo)" }}
                >
                  {album.title}
                </h3>
                <p className="text-sm text-gray-500">{album.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryAlbum;
