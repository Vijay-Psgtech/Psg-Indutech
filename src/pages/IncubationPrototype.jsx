import React from "react";
import { motion } from "framer-motion";

const IncubationPrototype = () => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 bg-gradient-to-br from-indigo-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8 text-center"
        >
          Incubation Prototype
        </motion.h1>
      </div>
    </div>
  );
};

export default IncubationPrototype;
