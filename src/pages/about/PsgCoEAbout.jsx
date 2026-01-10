import React from "react";
import { motion } from "framer-motion";
import image from "../../assets/images/bg3.jpg";
import logo from "/logo1.png";

const PsgCoEAbout = () => {
  return (
    <section
      className="min-h-screen py-20 px-6 bg-linear-to-br from-indigo-50 via-white to-indigo-50"
      style={{
        "--color-deep-indigo": "#22227A",
        "--color-indigo": "#434C9A",
        "--color-purple": "#6D77B3",
      }}
    >
      <div className="max-w-6xl mx-auto space-y-14">
        {/* ================= PAGE HEADING ================= */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center tracking-tight"
          style={{ color: "var(--color-deep-indigo)" }}
        >
          About COE INDUTECH
        </motion.h1>

        {/* ================= INTRODUCTION CALLOUT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex items-start gap-4 p-6 rounded-xl border border-indigo-200 bg-indigo-50 shadow-sm"
        >
          <div className="shrink-0 mt-1">
            <svg
              className="w-7 h-7 text-indigo-600"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <div>
            <p
              className="text-base font-semibold mb-1"
              style={{ color: "var(--color-deep-indigo)" }}
            >
              Introduction — Centre of Excellence (INDUTECH)
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              The Centre of Excellence for Industrial Textiles (COE INDUTECH) is
              a flagship initiative supported by the Ministry of Textiles,
              Government of India, and hosted at PSG College of Technology. The
              centre aims to foster innovation, research, testing, incubation,
              and skill development in the field of industrial and home
              technical textiles, bridging academia and industry for sustainable
              growth.
            </p>
          </div>
        </motion.div>

        {/* ================= BANNER IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src={image}
            alt="PSG COE Indutech Banner"
            className="w-72 md:w-80 rounded-xl shadow-lg object-cover"
          />
        </motion.div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* -------- LEFT: LOGO -------- */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center space-y-4"
          >
            <div className="p-4 bg-white rounded-xl shadow-md">
              <img
                src={logo}
                alt="PSG Tech Logo"
                className="w-36 h-36 rounded-full object-contain"
              />
            </div>

            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-medium shadow-sm"
              style={{
                background:
                  "linear-gradient(90deg, var(--color-indigo), var(--color-purple))",
                color: "#fff",
              }}
            >
              PSG TECH — COE INDUTECH
            </span>

            {/* ===== BROCHURE LINK ===== */}
            <a
              href="/docs/PSG COE Indutech  2019.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105"
              style={{
                background: "var(--color-deep-indigo)",
                color: "white",
                boxShadow: "0 4px 12px rgba(34,34,122,0.35)",
              }}
            >
              Download Brochure
            </a>
          </motion.div>

          {/* -------- RIGHT: CONTENT -------- */}
          <motion.article
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-8 text-gray-800 leading-relaxed"
          >
            {/* INDUTECH */}
            <div>
              <h2
                className="text-2xl font-bold mb-3"
                style={{ color: "var(--color-deep-indigo)" }}
              >
                INDUTECH
              </h2>
              <p className="text-justify text-sm sm:text-base">
                The term <strong>Industrial Textiles</strong> refers to a
                specialized segment of technical textiles used in manufacturing
                and industrial operations such as filters, conveyor belts,
                abrasive substrates, insulation materials, seals, and
                reinforcements. With an expected growth rate exceeding 12% per
                annum, industrial textiles present immense opportunities for
                innovation, product development, and entrepreneurship.
              </p>
            </div>

            {/* HOMETECH */}
            <div>
              <h2
                className="text-2xl font-bold mb-3"
                style={{ color: "var(--color-deep-indigo)" }}
              >
                HOMETECH
              </h2>
              <p className="text-justify text-sm sm:text-base">
                <strong>Hometech</strong> encompasses textile products used in
                domestic and interior environments such as furnishings,
                carpeting, upholstery, blinds, mattress components, insulation,
                and fire-retardant materials. These products are manufactured
                using natural and synthetic fibers and play a crucial role in
                comfort, safety, and functionality within modern living spaces.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a
                href="/training"
                className="inline-block px-6 py-3 rounded-lg font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105"
                style={{
                  background: "var(--color-indigo)",
                  color: "white",
                  boxShadow: "0 4px 12px rgba(67,76,154,0.3)",
                }}
              >
                Explore Events & Training Programs
              </a>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default PsgCoEAbout;
