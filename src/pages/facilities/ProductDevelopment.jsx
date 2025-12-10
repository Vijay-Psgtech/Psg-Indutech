import React, { useState } from "react";
import { motion } from "framer-motion";
import { Proditems, Prodimages } from "../../components/data/ProdDevData";

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
              src="/images/pro_05.gif"
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
          {Proditems.map((item, i) => (
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
              >
                {item.title}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.section>

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
      <div className="text-center text-gray-700 mt-6">
        <p>
          For any enquiries please contact: <br />
          <span className="font-semibold text-[var(--color-deep-indigo)]">
            Dr. Senthil Ram
          </span>{" "}
          – Product Development In-Charge <br />
          <span className="font-semibold">
            Email: productdevelopment.int@gapps.psgtech.ac.in
          </span>
        </p>
      </div>
    </motion.section>
  );
};

export default ProductDevelopment;
