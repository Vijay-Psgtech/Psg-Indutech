import React from "react";
import { motion } from "framer-motion";
import image from "../assets/images/bg3.jpg";

const PsgCoEAbout = () => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 bg-gradient-to-br from-indigo-50 via-white to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center"
          style={{ color: "var(--color-deep-indigo)" }}
        >
          About COE INDUTECH
        </motion.h1>

        {/* Green info callout */}
        <div className="mt-6 rounded-lg bg-green-50 border border-green-100 p-4 flex items-start gap-4">
          <div className="flex-shrink-0 mt-1">
            <svg
              className="w-8 h-8 text-green-600"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div>
            <p
              className="text-sm font-semibold"
              style={{ color: "var(--color-deep-indigo)" }}
            >
              Welcome — Centre of Excellence (INDUTECH)
            </p>
            <p
              className="mt-1 text-sm text-gray-700"
              style={{ color: "var(--color-muted)" }}
            >
              A joint initiative of the Ministry of Textiles and PSG College of
              Technology to strengthen industrial and home textile innovation,
              testing and incubation.
            </p>
          </div>
        </div>
        {/* Hero banner (composite image). Place /images/coe-banner.png in public/ if you want a single composite banner. */}
        <div className="mt-6">
          <motion.img
            src={image}
            alt="PSG COE Indutech banner"
            className="w-64 rounded-lg shadow-md object-fit  mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />

          {/* Main content: logo + article (responsive) */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-1 flex flex-col items-center text-center">
              <img
                src="/logo1.png"
                alt="PSG Tech Logo"
                className="w-36 h-36 rounded-full shadow-md object-contain"
              />
              <span
                className="mt-4 inline-block px-3 py-1 rounded-full text-sm font-medium"
                style={{
                  background:
                    "linear-gradient(90deg,var(--color-indigo),var(--color-purple))",
                  color: "white",
                }}
              >
                PSG TECH — COE INDUTECH
              </span>
            </div>

            <article className="prose prose-sm sm:prose lg:prose-lg max-w-none lg:col-span-2">
              <h2
                className="font-bold"
                style={{ color: "var(--color-deep-indigo)" }}
              >
                INDUTECH
              </h2>
              <p className="p-2">
                The term 'Industrial Textiles' refers to a subgroup of a wider
                category of Technical Textiles, referring specifically to those
                textile products used in the course of manufacturing operations
                (such as filters, conveyor belts, abrasive substrates) or which
                are incorporated into other industrial products (such as
                electrical components, cables, flexible seals, acoustic and
                thermal insulation of industrial appliances). The rate of growth
                for Industrial Textile Products is expected to be over 12% per
                annum, which is healthy and presents opportunities for new
                entrants.
              </p>

              <h2
                className="font-bold"
                style={{ color: "var(--color-deep-indigo)" }}
              >
                HOMETECH
              </h2>
              <p className="p-2">
                Hometech segment of technical textiles comprises the textile
                components used in the domestic environment — interior
                decoration and furniture, carpeting, protection against the sun,
                cushion materials, fireproofing, floor and wall coverings,
                textile reinforced structures/fittings, filter products for
                vacuum cleaners and other consumer products. They are made of
                both natural and synthetic fibres. Technical textiles
                consumption under Hometech is estimated at around Rs. 3,200
                crore in 2007-08. Fibrefill and pillow and mattress components
                together constitute over 50% of the technical textile usage
                under the Hometech segment followed by blinds, carpet backing
                and others.
              </p>

              <div className="mt-6">
                <a
                  href="/all-events"
                  className="inline-block px-4 py-2 rounded-md text-sm font-semibold"
                  style={{ background: "var(--color-indigo)", color: "white" }}
                >
                  Explore Events & Training
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PsgCoEAbout;
