import React from "react";
import { motion } from "framer-motion";
import { trainingItems } from "../../components/data/TrainingData";
import img1 from "/images/Training/TrainC1.jpg";
import OrbitalLayout from "../../components/OrbitalLayout";
import { Mail, Phone } from "lucide-react";

const Traning = () => {
  return (
    <motion.section
      className="w-full flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Header */}
      <h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
        style={{ color: "var(--color-deep-indigo)" }}
      >
        Training Capabilities
      </h1>

      <p
        className="text-md sm:text-lg text-gray-600 max-w-2xl mx-auto"
        style={{ color: "var(--color-muted)" }}
      >
        As Center of Excellence for Technical Textiles, one of our mission is to
        impart knowledge on technical textile products to various set of people
        that includes Students, Professor, Research Scholars and Industry
        Personnel. To bridge this knowledge gap that exists currently we conduct
        following kinds of programs.
      </p>

      {/* Central Orbital Layout */}
      <OrbitalLayout
        image="/images/training_05.gif"
        items={trainingItems}
        radius={220}
        rotationSpeed={40}
        size={500}
      />

      {/*Image*/}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center"
      >
        <img
          src={img1}
          alt="Training Image"
          className="w-72 md:w-80 rounded-xl shadow-lg object-cover"
        />
      </motion.div>

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
          Mr.V.Muthukumar
        </p>

        {/* Designation */}
        <p className="text-sm font-medium text-gray-600 mb-4">Admin</p>

        {/* Address */}
        <div className="flex flex-col items-center justify-center space-y-2 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-[var(--color-purple)]" />
            <p>+91 9952340925 </p>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-[var(--color-purple)]" />
            <a
              href="admin.int@psgtech.ac.in"
              className="text-[var(--color-indigo)] font-medium hover:text-[var(--color-purple)] transition-all duration-200"
            >
              admin.int@psgtech.ac.in
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

export default Traning;
