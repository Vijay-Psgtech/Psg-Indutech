import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { productsData } from "../../components/data/ProductsData";
import { X } from "lucide-react";

const Products = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [selected, setSelected] = useState(null);
  const [focusedCardId, setFocusedCardId] = useState(null);
  const modalRef = useRef(null);

  // Close modal on Escape key and manage focus
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && selected) {
        setSelected(null);
      }
    };
    if (selected) {
      window.addEventListener("keydown", handleKeyDown);
      // Trap focus in modal
      if (modalRef.current) {
        modalRef.current.focus();
      }
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [selected]);

  const containerVariants = {
    initial: { opacity: 1 },
    animate: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    initial: { opacity: 1, rotateY: -15, y: 20, scale: 0.98 },
    animate: {
      rotateY: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        type: "spring",
        stiffness: 80,
        damping: 18,
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.12,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const badgeVariants = {
    initial: { opacity: 0.8, rotate: -12, scale: 0.9 },
    animate: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: { duration: 0.5, delay: 0.3 },
    },
    hover: {
      rotate: 8,
      scale: 1.1,
      transition: { duration: 0.3, type: "spring", stiffness: 200 },
    },
  };

  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 lg:mb-20"
        >
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-slate-900"
            style={{
              letterSpacing: "-0.02em",
              color: "var(--color-deep-indigo)",
            }}
          >
            Our Products
          </h1>
          <div
            className="w-20 h-1.5 mx-auto rounded-full mb-8"
            style={{
              background:
                "linear-gradient(90deg, var(--color-indigo), var(--color-purple), var(--color-cyan))",
            }}
          ></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive range of high-quality industrial and home
            textile products, engineered with precision, innovation, and
            sustainability at their core.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 auto-rows-max"
          variants={containerVariants}
          initial="initial"
          animate="animate"
          viewport={{ once: true, amount: 0.1 }}
          role="list"
        >
          {productsData.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              onFocus={() => setFocusedCardId(product.id)}
              onBlur={() => setFocusedCardId(null)}
              className="group h-full"
              role="listitem"
              tabIndex="0"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelected(product);
                }
              }}
            >
              {/* Card Container with light theme */}
              <div
                className={`h-full rounded-2xl overflow-hidden bg-white transition-all duration-300 cursor-pointer transform
                  ${
                    focusedCardId === product.id
                      ? "ring-2 ring-offset-2 ring-indigo-500 scale-105"
                      : ""
                  }`}
                style={{
                  border: "1px solid rgba(226, 232, 240, 0.8)",
                  boxShadow:
                    hoveredId === product.id
                      ? "0 20px 40px rgba(79, 70, 229, 0.15), 0 8px 16px rgba(0, 0, 0, 0.08)"
                      : "0 10px 25px rgba(0, 0, 0, 0.08)",
                }}
              >
                {/* Image Container with gradient overlay */}
                <div className="relative h-72 sm:h-80 lg:h-96 overflow-hidden bg-gradient-to-br from-indigo-400 to-purple-600">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    style={{ willChange: "transform" }}
                    variants={imageVariants}
                    whileHover="hover"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent opacity-40 group-hover:opacity-50 transition-opacity duration-300"></div>

                  {/* Hover Action Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-end p-4 sm:p-6"
                  >
                    <button
                      onClick={() => setSelected(product)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setSelected(product);
                        }
                      }}
                      aria-label={`View details for ${product.name}`}
                      className="w-full py-3 px-4 rounded-lg font-semibold text-sm sm:text-base transform transition-all duration-200 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--color-indigo), var(--color-purple))",
                        color: "white",
                      }}
                    >
                      View Details
                    </button>
                  </motion.div>

                  {/* Product ID Badge with animation */}
                  <motion.div
                    variants={badgeVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold text-white transition-all duration-300"
                    style={{ background: "var(--color-cyan)" }}
                    aria-label={`Product ${product.id}`}
                  >
                    #{product.id.toString().padStart(2, "0")}
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="p-5 sm:p-6 lg:p-7">
                  <h3
                    className="text-lg sm:text-xl font-bold mb-3 line-clamp-2 text-slate-900 group-hover:text-indigo-600 transition-colors"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {product.name}
                  </h3>

                  {/* Description with better contrast */}
                  <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 min-h-12 mb-5 leading-relaxed">
                    {product.description && product.description !== ""
                      ? product.description
                      : "Premium quality product engineered for superior performance in industrial and home textile applications."}
                  </p>

                  {/* Footer with enhanced CTA */}
                  <motion.div
                    className="flex items-center justify-between pt-4 border-t"
                    style={{ borderColor: "rgba(226, 232, 240, 0.6)" }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                  >
                    <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                      Premium Quality
                    </span>
                    <motion.button
                      whileHover={{ x: 5 }}
                      whileTap={{ x: 0 }}
                      onClick={() => setSelected(product)}
                      aria-label={`Learn more about ${product.name}`}
                      className="flex items-center gap-1.5 text-indigo-600 hover:text-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded px-2 py-1"
                    >
                      <span className="text-sm font-semibold">Learn More</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 lg:mt-24 text-center"
        >
          <p className="text-lg sm:text-xl text-gray-700 mb-8">
            Interested in learning more about our products or requesting a
            quote?
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl font-semibold text-base sm:text-lg text-white transition-all hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"
            style={{
              background:
                "linear-gradient(135deg, var(--color-indigo), var(--color-purple))",
            }}
            aria-label="Contact us for product inquiries"
          >
            Get In Touch
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </motion.a>
        </motion.div>

        {/* Product Modal: Enhanced with better UX and accessibility */}
        {/* Modal Section */}
        {/* Enhanced Modal Section */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                className="relative bg-white rounded-3xl shadow-2xl max-w-5xl w-full mx-4 overflow-hidden"
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                transition={{ type: "spring", stiffness: 180, damping: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-5 right-5 bg-[#F3F4F6] hover:bg-[#06b6d4]/10 text-[#22227A] hover:text-[#06b6d4] rounded-full p-2 shadow transition"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="bg-gray-100 h-64 md:h-auto">
                    <img
                      src={selected.image}
                      alt={selected.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details Section */}
                  <div className="p-8 flex flex-col justify-between overflow-y-auto max-h-[85vh]">
                    <div>
                      <h2 className="text-3xl font-bold text-[#22227A] mb-3">
                        {selected.name}
                      </h2>
                      <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                        {selected.description}
                      </p>

                      <div className="space-y-4">
                        {/* Size */}
                        {selected.size && (
                          <div>
                            <h4 className="font-semibold text-[#06b6d4] mb-1 text-sm">
                              Sizes Available
                            </h4>
                            <ul className="list-disc ml-5 text-gray-700 text-sm space-y-1">
                              {selected.size.map((s, i) => (
                                <li key={i}>{s}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Colors */}
                        {selected.colors && (
                          <div>
                            <h4 className="font-semibold text-[#06b6d4] mb-1 text-sm">
                              Colors
                            </h4>
                            <p className="text-gray-700 text-sm">
                              {selected.colors.join(", ")}
                            </p>
                          </div>
                        )}

                        {/* Material */}
                        {selected.material && (
                          <div>
                            <h4 className="font-semibold text-[#06b6d4] mb-1 text-sm">
                              Material
                            </h4>
                            <p className="text-gray-700 text-sm">
                              {selected.material}
                            </p>
                          </div>
                        )}

                        {/* Features */}
                        {selected.features && (
                          <div>
                            <h4 className="font-semibold text-[#06b6d4] mb-1 text-sm">
                              Features
                            </h4>
                            <ul className="list-disc ml-5 text-gray-700 text-sm space-y-1">
                              {selected.features.map((f, i) => (
                                <li key={i}>{f}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Details */}
                        {selected.details && (
                          <div>
                            <h4 className="font-semibold text-[#06b6d4] mb-1 text-sm">
                              Specifications
                            </h4>
                            <ul className="list-disc ml-5 text-gray-700 text-sm space-y-1">
                              {Object.entries(selected.details).map(
                                ([key, value]) => (
                                  <li key={key}>
                                    <strong className="capitalize">
                                      {key}:
                                    </strong>{" "}
                                    {Array.isArray(value)
                                      ? value.join(", ")
                                      : value}
                                  </li>
                                ),
                              )}
                            </ul>
                          </div>
                        )}

                        {/* Variants */}
                        {selected.variants && (
                          <div className="mt-6">
                            <h4 className="text-base md:text-lg font-bold mb-4 text-[#06b6d4] text-center md:text-left">
                              Product Variants
                            </h4>

                            <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-hide snap-x snap-mandatory">
                              {selected.variants.map((variant, i) => (
                                <div
                                  key={i}
                                  className="min-w-[85%] sm:min-w-[45%] md:min-w-[80%] bg-gradient-to-br from-white to-[#f8f9fb] border border-[#E0E2EB] rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-4 snap-center"
                                >
                                  <div className="flex justify-between items-center mb-2">
                                    <h5 className="font-semibold text-[#22227A] text-sm md:text-base">
                                      {variant.type}
                                    </h5>
                                    <span className="bg-[#06b6d4]/10 text-[#06b6d4] px-2 py-0.5 text-xs font-medium rounded-full">
                                      {variant.filter}
                                    </span>
                                  </div>

                                  <div className="border-t border-[#06b6d4]/10 my-2"></div>

                                  <div className="space-y-2 text-xs md:text-sm text-gray-700">
                                    <div className="flex justify-between">
                                      <span className="font-medium text-[#434C9A]">
                                        Size:
                                      </span>
                                      <span>{variant.size}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="font-medium text-[#434C9A]">
                                        Weight:
                                      </span>
                                      <span>{variant.weight}</span>
                                    </div>

                                    {variant.surfaceFinish && (
                                      <div className="flex justify-between">
                                        <span className="font-medium text-[#434C9A]">
                                          Finish:
                                        </span>
                                        <span>{variant.surfaceFinish}</span>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-6 text-center">
                      <a href="/contact" target="_blank">
                        <button className="px-6 py-2.5 bg-[#434C9A] text-white rounded-lg font-medium shadow-md hover:bg-[#06b6d4] transition-all duration-300 cursor-pointer">
                          Contact for Details
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Products;
