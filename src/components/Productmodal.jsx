import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * ProductModal Component
 * Displays a full-screen modal with product image
 * Auto-opens on first page load (after delay)
 * Can be closed with X button or clicking outside
 */
export default function ProductModal({ imageSrc, delay = 1.5, autoOpen = true }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  // Auto-open modal on page load
  useEffect(() => {
    if (autoOpen && !hasShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasShown(true);
        // Prevent body scroll when modal is open
        document.body.style.overflow = "hidden";
      }, delay * 1000);

      return () => clearTimeout(timer);
    }
  }, [autoOpen, hasShown, delay]);

  // Handle close modal
  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
            className="fixed inset-0 z-9998 bg-black/40 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              duration: 0.4,
            }}
            className="fixed inset-0 z-9999 flex items-center justify-center p-4 sm:p-6"
          >
            {/* Modal Content */}
            <div className="relative w-full max-w-5xl bg-white rounded-xl shadow-2xl overflow-hidden">
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-lg"
                aria-label="Close modal"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </motion.button>

              {/* Image Container with smooth scrolling */}
              <div className="relative max-h-[85vh] overflow-y-auto bg-gray-50">
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  src={imageSrc}
                  alt="Product Showcase"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              {/* Footer with CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="px-6 py-4 bg-linear-to-r from-indigo-50 to-violet-50 border-t border-indigo-200 flex flex-col sm:flex-row items-center justify-between gap-4"
              >
                <p className="text-sm text-gray-700 font-medium">
                  Explore our innovative textile solutions
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleClose}
                  className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors whitespace-nowrap"
                >
                  Start Exploring
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}