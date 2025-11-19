import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { productsData } from "../components/data/ProductsData";

const Products = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedProduct(null);
      }
    };
    if (selectedProduct) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [selectedProduct]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
            style={{ color: "var(--color-deep-indigo)" }}
          >
            Our Products
          </h1>
          <div
            className="w-20 h-1 mx-auto rounded-full mb-6"
            style={{
              background:
                "linear-gradient(90deg, var(--color-indigo), var(--color-purple), var(--color-cyan))",
            }}
          ></div>
          <p
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto"
            style={{ color: "var(--color-muted)" }}
          >
            Explore our comprehensive range of high-quality industrial and home
            textile products, crafted with precision and innovation.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {productsData.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group h-full"
            >
              {/* Card Container */}
              <div
                className="h-full rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white cursor-pointer"
                style={{
                  boxShadow:
                    hoveredId === product.id
                      ? "0 20px 40px rgba(79, 70, 229, 0.15)"
                      : "0 10px 25px rgba(0, 0, 0, 0.08)",
                }}
              >
                {/* Image Container */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />

                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-4"
                  >
                    <div className="w-full">
                      <motion.button
                        onClick={() => setSelectedProduct(product)}
                        initial={{ y: 10, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="w-full py-2 px-4 rounded-lg font-semibold text-sm"
                        style={{
                          background:
                            "linear-gradient(90deg, var(--color-indigo), var(--color-purple))",
                          color: "white",
                        }}
                      >
                        View Details
                      </motion.button>
                    </div>
                  </motion.div>

                  {/* Product ID Badge */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white"
                    style={{ background: "var(--color-cyan)" }}
                  >
                    #{product.id.toString().padStart(2, "0")}
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="p-5 sm:p-6">
                  <motion.h3
                    className="text-lg sm:text-xl font-bold mb-2 line-clamp-2"
                    style={{ color: "var(--color-deep-indigo)" }}
                    whileHover={{ letterSpacing: "0.5px" }}
                    transition={{ duration: 0.2 }}
                  >
                    {product.name}
                  </motion.h3>

                  {/* Description or Placeholder */}
                  <p
                    className="text-sm text-gray-600 line-clamp-3 min-h-12 mb-4"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {product.description && product.description !== ""
                      ? product.description
                      : "Premium quality product designed for industrial and home textile applications."}
                  </p>

                  {/* Footer with CTA */}
                  <motion.div
                    className="flex items-center justify-between pt-4 border-t"
                    style={{ borderColor: "var(--color-indigo-50)" }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                  >
                    <span
                      className="text-xs font-semibold uppercase tracking-wider"
                      style={{ color: "var(--color-purple)" }}
                    >
                      Premium Quality
                    </span>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-1"
                      style={{ color: "var(--color-indigo)" }}
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
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-lg mb-6" style={{ color: "var(--color-muted)" }}>
            Interested in learning more about our products?
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 rounded-lg font-semibold text-lg text-white transition-shadow hover:shadow-lg"
            style={{
              background:
                "linear-gradient(90deg, var(--color-indigo), var(--color-purple))",
            }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Product Modal */}
        <AnimatePresence>
          {selectedProduct && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProduct(null)}
                className="fixed inset-0 bg-black z-40"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
              />

              {/* Modal */}
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto"
                >
                  {/* Close Button */}
                  <div className="sticky top-0 flex justify-end p-4 bg-gradient-to-b from-white to-transparent z-10">
                    <motion.button
                      onClick={() => setSelectedProduct(null)}
                      whileHover={{ rotate: 90, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 rounded-full transition-colors"
                      style={{ background: "var(--color-indigo-50)" }}
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        style={{ color: "var(--color-deep-indigo)" }}
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

                  <div className="px-6 sm:px-8 pb-8">
                    {/* Product ID Badge */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 }}
                      className="inline-block px-3 py-1 rounded-full text-sm font-bold text-white mb-4"
                      style={{ background: "var(--color-cyan)" }}
                    >
                      Product #{selectedProduct.id.toString().padStart(2, "0")}
                    </motion.div>

                    {/* Product Image */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100"
                    >
                      <img
                        src={selectedProduct.image}
                        alt={selectedProduct.name}
                        className="w-full h-80 object-cover"
                      />
                    </motion.div>

                    {/* Product Name */}
                    <motion.h2
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                      className="text-3xl sm:text-4xl font-bold mb-3"
                      style={{ color: "var(--color-deep-indigo)" }}
                    >
                      {selectedProduct.name}
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-lg mb-6"
                      style={{ color: "var(--color-muted)" }}
                    >
                      {selectedProduct.description &&
                      selectedProduct.description !== ""
                        ? selectedProduct.description
                        : "Premium quality product designed for industrial and home textile applications. Engineered for performance and durability with excellent market demand and growth potential."}
                    </motion.p>

                    {/* Product Details Grid */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 }}
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8 p-4 rounded-lg"
                      style={{ background: "var(--color-indigo-50)" }}
                    >
                      <div className="text-center">
                        <p
                          className="text-sm font-semibold"
                          style={{ color: "var(--color-purple)" }}
                        >
                          Type
                        </p>
                        <p
                          className="text-lg font-bold mt-1"
                          style={{ color: "var(--color-deep-indigo)" }}
                        >
                          Industrial
                        </p>
                      </div>
                      <div className="text-center">
                        <p
                          className="text-sm font-semibold"
                          style={{ color: "var(--color-purple)" }}
                        >
                          Quality
                        </p>
                        <p
                          className="text-lg font-bold mt-1"
                          style={{ color: "var(--color-deep-indigo)" }}
                        >
                          Premium
                        </p>
                      </div>
                      <div className="text-center">
                        <p
                          className="text-sm font-semibold"
                          style={{ color: "var(--color-purple)" }}
                        >
                          Status
                        </p>
                        <p
                          className="text-lg font-bold mt-1"
                          style={{ color: "var(--color-deep-indigo)" }}
                        >
                          Available
                        </p>
                      </div>
                    </motion.div>

                    {/* Key Features */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mb-8"
                    >
                      <h3
                        className="text-xl font-bold mb-4"
                        style={{ color: "var(--color-deep-indigo)" }}
                      >
                        Key Features
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <svg
                            className="w-5 h-5 mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            style={{ color: "var(--color-cyan)" }}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span style={{ color: "var(--color-muted)" }}>
                            Meets international quality standards
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg
                            className="w-5 h-5 mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            style={{ color: "var(--color-cyan)" }}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span style={{ color: "var(--color-muted)" }}>
                            Durable and long-lasting performance
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg
                            className="w-5 h-5 mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            style={{ color: "var(--color-cyan)" }}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span style={{ color: "var(--color-muted)" }}>
                            Environmentally conscious manufacturing
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg
                            className="w-5 h-5 mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            style={{ color: "var(--color-cyan)" }}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span style={{ color: "var(--color-muted)" }}>
                            Competitive pricing and bulk discounts available
                          </span>
                        </li>
                      </ul>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 }}
                      className="flex flex-col sm:flex-row gap-4"
                    >
                      <motion.a
                        href="/contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 py-3 px-6 rounded-lg font-semibold text-center text-white transition-shadow hover:shadow-lg"
                        style={{
                          background:
                            "linear-gradient(90deg, var(--color-indigo), var(--color-purple))",
                        }}
                      >
                        Request Quote
                      </motion.a>
                      <motion.button
                        onClick={() => setSelectedProduct(null)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 py-3 px-6 rounded-lg font-semibold border-2 transition-all"
                        style={{
                          borderColor: "var(--color-indigo)",
                          color: "var(--color-indigo)",
                        }}
                      >
                        Close
                      </motion.button>
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
