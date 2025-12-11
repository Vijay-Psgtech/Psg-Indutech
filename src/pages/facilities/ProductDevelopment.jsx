import React, { useState } from "react";
import { motion } from "framer-motion";
import { Proditems, Prodimages } from "../../components/data/ProdDevData";
import OrbitalLayout from "../../components/OrbitalLayout";
import { Mail } from "lucide-react";

const ProductDevelopment = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <motion.section
      className="w-full flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-center"
      style={{
        "--color-deep-indigo": "#22227A",
        "--color-indigo": "#434C9A",
        "--color-purple": "#6D77B3",
        backgroundImage:
          "linear-gradient(to bottom, rgba(224,235,255,0.1), rgba(255,255,255,1))",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Header */}
      <h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
        style={{ color: "var(--color-deep-indigo)" }}
      >
        Product Development Capabilities
      </h1>

      <p
        className="text-md sm:text-lg text-gray-600 max-w-2xl mx-auto"
        style={{ color: "var(--color-muted)" }}
      >
        COE Indutech is sanctioned to be Center of Excellence for Indutech &
        Hometech and we concentrate on the following technical textile products.
        The below list of products are selected as we have testing capabilities
        related to these products or we have expertise to work on these
        products.
      </p>

      {/* Central Orbital Layout */}
      <OrbitalLayout
        image="/images/pro_05.gif"
        items={Proditems}
        radius={220}
        rotationSpeed={40}
        size={500}
      />

      {/* Product Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mb-10">
        {Prodimages.map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all"
          >
            <img
              src={img}
              alt={`Product ${i + 1}`}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-12 text-center text-gray-700 relative"
      >
        {/* Gradient Divider */}
        <div
          className="mx-auto mb-6 w-32 h-1 rounded-full"
          style={{
            background:
              "linear-gradient(90deg, var(--color-indigo), var(--color-purple))",
          }}
        ></div>

        {/* Section Heading */}
        <p
          className="text-base font-semibold tracking-wide mb-2"
          style={{ color: "var(--color-deep-indigo)" }}
        >
          For any enquiries please contact:
        </p>

        {/* Name */}
        <p
          className="text-lg font-bold mb-1"
          style={{ color: "var(--color-indigo)" }}
        >
          Dr. T. Senthilram
        </p>

        {/* Designation */}
        <p className="text-sm font-medium text-gray-600 mb-4">
          Product Development In-Charge
        </p>

        {/* Address */}
        <div className="flex flex-col items-center justify-center space-y-2 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-[var(--color-purple)]" />
            <a
              href="productdevelopment.int@gapps.psgtech.ac.in"
              className="text-[var(--color-indigo)] font-medium hover:text-[var(--color-purple)] transition-all duration-200"
            >
              productdevelopment.int@gapps.psgtech.ac.in
            </a>
          </div>
        </div>

        {/* Soft Glow Shadow */}
        <div
          className="absolute inset-x-0 bottom-0 h-12 blur-3xl opacity-30 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, rgba(67,76,154,0.4), transparent 70%)",
          }}
        ></div>
      </motion.div>
    </motion.section>
  );
};

export default ProductDevelopment;
