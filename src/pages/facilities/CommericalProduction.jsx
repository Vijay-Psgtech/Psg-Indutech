import React from "react";
import { motion } from "framer-motion";
import OrbitalLayout from "../../components/OrbitalLayout";
import { commProdItems } from "../../components/data/CommericalProdData";

const CommericalProduction = () => {
  return (
    <motion.section
      className="w-full flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/*Header*/}
      <h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
        style={{ color: "var(--color-deep-indigo)" }}
      >
        Commerical Production Set Up
      </h1>
      <p
        className="text-md sm:text-lg text-gray-600 max-w-2xl mx-auto"
        style={{ color: "var(--color-muted)" }}
      >
        Commercialization of Technical Textile products is capital intensive and
        hence to help the industry to develop and commercialize the product to
        understand the market, COE Indutech has invested in full production
        lines for some technical textile products. List of all the current full
        production set up is given below:
      </p>
      {/* Central Orbital Layout */}
      <OrbitalLayout
        image="/images/com_06.gif"
        items={commProdItems}
        radius={220}
        rotationSpeed={40}
        size={500}
      />
    </motion.section>
  );
};

export default CommericalProduction;
