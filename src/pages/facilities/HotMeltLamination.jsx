import React from "react";
import { motion } from "framer-motion";
import img1 from "/images/HotMelt/coe11.png";
import img2 from "/images/HotMelt/coe4.png";
import img3 from "/images/HotMelt/coe2.png";
import { Mail, Phone, MapPin } from "lucide-react";

const HotMeltLamination = () => {
  const products = [
    "Surgical Gowns",
    "Industrial special protective clothing",
    "High visibility garments",
    "Military suit",
    "Garment interlinings",
    "Tarpaulins",
    "Textile containers (Flexible)",
    "Breathable waterproof garments for sports, leisure and protective applications",
    "Tents",
    "Furniture upholstery",
    "Ironing board covers",
    "Seat covering",
    "Inflatable craft",
    "Shower curtains",
    "Mattress covers",
    "Baby dry sheet",
    "Various Insulation Products",
  ];

  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-b from-indigo-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-bold text-center"
          style={{ color: "var(--color-deep-indigo)" }}
        >
          Hot Melt Lamination & Coating
        </motion.h1>

        {/* Description & Layout */}
        <div className="grid md:grid-cols-2 gap-12 mt-10">
          {/* Left - Product List */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 text-gray-800"
          >
            <p className="text-base text-gray-700 leading-relaxed mb-6">
              COE INDUTECH specializes in *Hot Melt Lamination and Coating*
              processes, enabling a wide range of functional and technical
              textile applications for industrial and home textile sectors.
              Below are some of the end-use products developed using these
              technologies:
            </p>

            <ul className="space-y-2 pl-4 list-none">
              {products.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.02, color: "#434C9A" }}
                  className="flex items-start gap-2 text-sm sm:text-base"
                >
                  <span className="text-[var(--color-indigo)] mt-1">➤</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right - Images */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4 items-center justify-center"
          >
            <div className="col-span-2">
              <motion.img
                src={img1}
                alt="Hot Melt Lamination Machine"
                whileHover={{ scale: 1.03 }}
                className="w-full rounded-lg shadow-md object-cover"
              />
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg p-2 text-center shadow"
            >
              <img
                src={img2}
                alt="Baby Dry Sheet"
                className="w-full rounded-md object-cover mb-2"
              />
              <p className="text-sm font-semibold text-green-700">
                Baby Dry Sheet
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg p-2 text-center shadow"
            >
              <img
                src={img3}
                alt="Mattress Protector"
                className="w-full rounded-md object-cover mb-2"
              />
              <p className="text-sm font-semibold text-green-700">
                Mattress Protector
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Contact Section */}
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
            For more details, please contact
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
            PSGTECHS COE INDUTECH
          </p>

          {/* Address */}
          <div className="flex flex-col items-center justify-center space-y-2 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[var(--color-purple)]" />
              <p>
                Avinashi Road, Neelambur, <br />
                Coimbatore – 641062
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[var(--color-purple)]" />
              <p>0422 – 3933250 – 252</p>
            </div>

            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[var(--color-purple)]" />
              <a
                href="mailto:lamicoat.int@psgtech.ac.in"
                className="text-[var(--color-indigo)] font-medium hover:text-[var(--color-purple)] transition-all duration-200"
              >
                lamicoat.int@psgtech.ac.in
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
      </div>
    </section>
  );
};

export default HotMeltLamination;
