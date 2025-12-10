import React from "react";
import { motion } from "framer-motion";
import image from "../../assets/images/bg3.jpg";
import logo from "/logo1.png"; // update as needed

const PsgCoEAbout = () => {
  return (
    <section
      className="min-h-screen py-20 px-6 bg-gradient-to-br from-indigo-50 via-white to-indigo-50"
      style={{
        "--color-deep-indigo": "#22227A",
        "--color-indigo": "#434C9A",
        "--color-purple": "#6D77B3",
      }}
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Page Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center tracking-tight"
          style={{ color: "var(--color-deep-indigo)" }}
        >
          About COE INDUTECH
        </motion.h1>

        {/* Info Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex items-start gap-4 p-5 rounded-xl border border-green-200 bg-green-50 shadow-sm"
        >
          <div className="flex-shrink-0 mt-1">
            <svg
              className="w-7 h-7 text-green-600"
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
              Welcome — Centre of Excellence (INDUTECH)
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              A joint initiative of the Ministry of Textiles and PSG College of
              Technology to strengthen industrial and home textile innovation,
              testing, and incubation.
            </p>
          </div>
        </motion.div>

        {/* Banner Image */}
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

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start mt-10">
          {/* Left: Logo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center space-y-4"
          >
            <div className="p-4 bg-white">
              <img
                src={logo}
                alt="PSG Tech Logo"
                className="w-36 h-36 rounded-full shadow-md object-contain"
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
          </motion.div>

          {/* Right: Content */}
          <motion.article
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-8 text-gray-800 leading-relaxed"
          >
            {/* INDUTECH Section */}
            <div>
              <h2
                className="text-2xl font-bold mb-3"
                style={{ color: "var(--color-deep-indigo)" }}
              >
                INDUTECH
              </h2>
              <p className="text-justify text-sm sm:text-base">
                The term <strong>“Industrial Textiles”</strong> refers to a
                subgroup of a wider category of Technical Textiles, referring
                specifically to those textile products used in the course of
                manufacturing operations such as filters, conveyor belts, and
                abrasive substrates, or which are incorporated into other
                industrial products like electrical components, cables,
                flexible seals, acoustic and thermal insulation of industrial
                appliances. The rate of growth for Industrial Textile Products
                is expected to be over 12% per annum, which presents
                opportunities for new entrants.
              </p>
            </div>

            {/* HOMETECH Section */}
            <div>
              <h2
                className="text-2xl font-bold mb-3"
                style={{ color: "var(--color-deep-indigo)" }}
              >
                HOMETECH
              </h2>
              <p className="text-justify text-sm sm:text-base">
                The <strong>Hometech</strong> segment of technical textiles
                comprises the textile components used in the domestic
                environment — interior decoration and furniture, carpeting,
                protection against sunlight, cushioning materials, and
                fireproofing. These include floor and wall coverings, reinforced
                textile fittings, and filter products for vacuum cleaners and
                other consumer items. They are made of both natural and
                synthetic fibres. Hometech technical textile consumption is
                estimated at around Rs. 3,200 crore in 2007–08, with fibrefill
                and mattress components together constituting over 50% of the
                usage, followed by blinds, carpet backing, and others.
              </p>
            </div>

            <div className="pt-4">
              <a
                href="/all-events"
                className="inline-block px-5 py-2 rounded-lg font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105"
                style={{
                  background: "var(--color-indigo)",
                  color: "white",
                  boxShadow: "0 4px 12px rgba(67,76,154,0.3)",
                }}
              >
                Explore Events & Training
              </a>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default PsgCoEAbout;
