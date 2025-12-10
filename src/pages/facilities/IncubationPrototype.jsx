import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { capabilities } from "../../components/data/IncProData";

const IncubationPrototype = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [expanded, setExpanded] = useState(true);

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
        <motion.section
          className="w-full flex flex-col items-center justify-center py-24 px-6 relative overflow-hidden text-center"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(224,235,255,0.1), rgba(255,255,255,1))",
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div
            className="relative w-[500px] h-[500px] flex items-center justify-center"
            onMouseEnter={() => setExpanded(true)}
            onMouseLeave={() => setExpanded(false)}
          >
            {/* Center Logo */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 10 }}
              className="absolute w-40 h-40 rounded-full flex flex-col items-center justify-center text-center text-gray-800 font-bold text-lg shadow-2xl z-20 bg-white"
              style={{
                boxShadow: "0 0 40px 10px rgba(59,130,246,0.3)",
              }}
            >
              <img
                src="/images/indu_05.gif"
                alt="COE INDU TECH"
                className="w-60 h-26 object-contain mb-2"
              />
            </motion.div>

            {/* Rotating orbit ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              style={{ borderColor: "rgba(59,130,246,0.4)" }}
            ></motion.div>

            {/* Orbiting Capabilities */}
            {capabilities.map((item, i) => (
              <motion.div
                key={i}
                className="absolute flex items-center justify-center"
                animate={{
                  transform: expanded
                    ? `rotate(${item.deg}deg) translate(220px) rotate(-${item.deg}deg)`
                    : "rotate(0deg) translate(0px) rotate(0deg)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                  delay: i * 0.05,
                }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 25px rgba(59,130,246,0.8)",
                  }}
                  className={`w-36 h-36 bg-gradient-to-br ${item.color} rounded-full shadow-lg flex items-center justify-center text-white font-semibold text-center text-sm px-3 py-2 cursor-pointer whitespace-pre-line`}
                  onClick={() =>
                    window.open(item.doc, "_blank", "noopener,noreferrer")
                  }
                >
                  {item.title}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default IncubationPrototype;
