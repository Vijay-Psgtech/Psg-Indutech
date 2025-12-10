import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { capabilities } from "../../components/data/IncProData";
import OrbitalLayout from "../../components/OrbitalLayout";

const IncubationPrototype = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // close modal with Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    if (selectedImage) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedImage]);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 bg-gradient-to-br from-indigo-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "var(--color-deep-indigo)" }}
          >
            Incubation / Prototype Capabilities
          </h1>
          
          <p
            className="text-md sm:text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ color: "var(--color-muted)" }}
          >
            Incubation centre will foster innovation driven entrepreneurship
            through incubation, research and dissemination of knowledge. It will
            help to flourish new technologies in India and abroad.
          </p>
        </motion.header>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-12"
        >
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow px-6 py-6">
              <h2
                className="text-xl font-semibold mb-3"
                style={{ color: "var(--color-deep-indigo)" }}
              >
                Mission
              </h2>
              <p
                className="text-md text-gray-700 mb-4"
                style={{ color: "var(--color-muted)" }}
              >
                To accelerate new venture development in the related areas of
                industrial textiles technology in conjunction with technological
                innovation from within PSG Tech environment and the PSG's
                extended community.
              </p>

              <h2
                className="text-xl font-semibold mb-3"
                style={{ color: "var(--color-deep-indigo)" }}
              >
                Strategy
              </h2>
              <p
                className="text-md text-gray-700 mb-4"
                style={{ color: "var(--color-muted)" }}
              >
                The present plan is to setup the incubation centre equipped with
                full fledged prototyping facilities for developing various
                products such as industrial filters, insulation materials,
                coated and laminated fabrics, abrasives, natural fiber based
                composites, mattress ticking, ropes and cordages, brushes etc.
                After the completion of initial setup of incubation centre, the
                enterprises that are producing the diversified technical textile
                products related to industrial textiles will be trained to
                market the products in the respective markets. PSG Tech's COE
                Indutech will be assisting them till launching the product in
                the market.
              </p>

              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "var(--color-deep-indigo)" }}
              >
                Capabilities
              </h3>
              <p
                className="text-md text-gray-700 mb-6"
                style={{ color: "var(--color-muted)" }}
              >
                COE Indutech current Proto-typing capabilities are listed below
                and to know more details please click the image for the
                respective section.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-inside">
                <li className="text-sm">
                  - Complete Nonwoven Needle Punching Line
                </li>
                <li className="text-sm">- Through Air Bonding (Nonwoven)</li>
                <li className="text-sm">- Thermal Bonding (Nonwoven)</li>
                <li className="text-sm">- Needlepunching (Nonwoven)</li>
                <li className="text-sm">- Filament or Tow Cutting Machine</li>
                <li className="text-sm">- Dip or Padding Mangle (Coating)</li>
                <li className="text-sm">
                  - Knife on Roll &amp; Knife on Air (Coating)
                </li>
                <li className="text-sm">
                  - And more prototyping facilities...
                </li>
              </ul>
            </div>
          </div>

          <aside>
            <div className="bg-white rounded-xl shadow p-6">
              <h3
                className="text-lg font-semibold mb-3"
                style={{ color: "var(--color-deep-indigo)" }}
              >
                Quick Glance
              </h3>
              <p
                className="text-md text-gray-700 mb-4"
                style={{ color: "var(--color-muted)" }}
              >
                The incubation centre will support startups and researchers in
                prototyping, testing and scaling industrial textile products.
              </p>
              <a
                href="/contact"
                className="inline-block px-4 py-2 rounded-lg text-white font-semibold"
                style={{
                  background:
                    "linear-gradient(90deg, var(--color-indigo), var(--color-purple))",
                }}
              >
                Contact COE Indutech
              </a>
            </div>
          </aside>
        </motion.section>

        {/* Orbital section */}
        <OrbitalLayout
        image="/images/indu_05.gif"
        items={capabilities}
        radius={220}
        rotationSpeed={40}
        size={500}
      />
      </div>
    </div>
  );
};

export default IncubationPrototype;
