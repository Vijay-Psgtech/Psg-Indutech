import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { productsData } from "../../components/data/ProductsData";

const Products = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [focusedCardId, setFocusedCardId] = useState(null);
  const modalRef = useRef(null);

  // Close modal on Escape key and manage focus
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && selectedProduct) {
        setSelectedProduct(null);
      }
    };
    if (selectedProduct) {
      window.addEventListener("keydown", handleKeyDown);
      // Trap focus in modal
      if (modalRef.current) {
        modalRef.current.focus();
      }
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [selectedProduct]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 15
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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    hover: { x: 8, transition: { duration: 0.2 } },
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
            style={{ letterSpacing: "-0.02em", color: "var(--color-deep-indigo)" }}
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
          <p
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Explore our comprehensive range of high-quality industrial and home
            textile products, engineered with precision, innovation, and sustainability at their core.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 auto-rows-max"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
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
                  setSelectedProduct(product);
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
                      onClick={() => setSelectedProduct(product)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setSelectedProduct(product);
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
                    initial="hidden"
                    whileInView="visible"
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
                  <p
                    className="text-xs sm:text-sm text-gray-600 line-clamp-3 min-h-12 mb-5 leading-relaxed"
                  >
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
                    <span
                      className="text-xs font-semibold uppercase tracking-wider text-indigo-600"
                    >
                      Premium Quality
                    </span>
                    <motion.button
                      whileHover={{ x: 5 }}
                      whileTap={{ x: 0 }}
                      onClick={() => setSelectedProduct(product)}
                      aria-label={`Learn more about ${product.name}`}
                      className="flex items-center gap-1.5 text-indigo-600 hover:text-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded px-2 py-1"
                    >
                      <span
                        className="text-sm font-semibold"
                      >
                        Learn More
                      </span>
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
            Interested in learning more about our products or requesting a quote?
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
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Product Modal: Enhanced with better UX and accessibility */}
        <AnimatePresence>
          {selectedProduct && (
            <>
              {/* Backdrop with animation */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedProduct(null)}
                className="fixed inset-0 bg-black z-40"
                style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
                aria-hidden="true"
              />

              {/* Modal Container */}
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none overflow-y-auto">
                <motion.div
                  ref={modalRef}
                  initial={{ opacity: 0, scale: 0.92, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: 20 }}
                  transition={{ duration: 0.3, ease: "easeOut", type: "spring", stiffness: 200, damping: 20 }}
                  className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl pointer-events-auto overflow-hidden border border-slate-200"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="modal-title"
                  tabIndex={-1}
                >
                  <div className="lg:flex lg:items-stretch max-h-[90vh] overflow-y-auto lg:overflow-y-visible">
                    {/* Image column with overlay */}
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1, duration: 0.4 }}
                      className="lg:w-1/2 w-full h-64 sm:h-80 lg:h-auto bg-gradient-to-br from-indigo-100 to-purple-100 relative overflow-hidden"
                    >
                      <img
                        src={selectedProduct.image}
                        alt={selectedProduct.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </motion.div>

                    {/* Content column */}
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15, duration: 0.4 }}
                      className="lg:w-1/2 w-full p-6 sm:p-8 lg:p-10 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <motion.span
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="inline-block px-3 py-1.5 rounded-full text-xs font-bold text-white mb-4"
                              style={{ background: "var(--color-cyan)" }}
                            >
                              #{selectedProduct.id.toString().padStart(2, "0")}
                            </motion.span>
                            <h2
                              id="modal-title"
                              className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-3 text-slate-900 leading-tight"
                              style={{ letterSpacing: "-0.01em" }}
                            >
                              {selectedProduct.name}
                            </h2>
                            <p
                              className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed"
                            >
                              {selectedProduct.description &&
                              selectedProduct.description !== ""
                                ? selectedProduct.description
                                : "Premium quality product engineered for superior performance in industrial and home textile applications with sustainability focus."}
                            </p>
                          </div>

                          <motion.button
                            onClick={() => setSelectedProduct(null)}
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-2 rounded-full hover:bg-indigo-100 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 flex-shrink-0"
                            aria-label="Close modal"
                          >
                            <svg
                              className="w-6 h-6 text-indigo-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </motion.button>
                        </div>

                        {/* Product Info Grid with enhanced design */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.25, duration: 0.4 }}
                          className="mt-8 grid grid-cols-2 gap-3 sm:gap-4"
                        >
                          <div
                            className="p-4 rounded-xl border"
                            style={{
                              background: "rgba(99, 102, 241, 0.08)",
                              borderColor: "rgba(99, 102, 241, 0.2)",
                            }}
                          >
                            <p
                              className="text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-1"
                            >
                              Category
                            </p>
                            <p
                              className="font-bold text-slate-900 text-sm sm:text-base"
                            >
                              Industrial
                            </p>
                          </div>
                          <div
                            className="p-4 rounded-xl border"
                            style={{
                              background: "rgba(168, 85, 247, 0.08)",
                              borderColor: "rgba(168, 85, 247, 0.2)",
                            }}
                          >
                            <p
                              className="text-xs font-semibold uppercase tracking-wider text-purple-600 mb-1"
                            >
                              Quality Grade
                            </p>
                            <p
                              className="font-bold text-slate-900 text-sm sm:text-base"
                            >
                              Premium
                            </p>
                          </div>
                        </motion.div>
                      </div>

                      {/* Action Buttons with enhanced styling */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                        className="mt-8 flex flex-col sm:flex-row gap-3"
                      >
                        <a
                          href="/contact"
                          className="flex-1 inline-flex items-center justify-center px-6 py-3.5 sm:py-4 rounded-xl text-white font-semibold text-base transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 active:scale-95"
                          style={{
                            background:
                              "linear-gradient(135deg, var(--color-indigo), var(--color-purple))",
                          }}
                          aria-label={`Request quote for ${selectedProduct.name}`}
                        >
                          Request Quote
                          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </a>
                        <button
                          onClick={() => setSelectedProduct(null)}
                          className="flex-1 px-6 py-3.5 sm:py-4 rounded-xl border-2 font-semibold text-indigo-600 transition-all hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 active:scale-95"
                          style={{
                            borderColor: "var(--color-indigo)",
                          }}
                          aria-label="Close modal"
                        >
                          Close
                        </button>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Products;
