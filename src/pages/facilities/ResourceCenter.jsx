import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, User } from "lucide-react";
import {
  resourceImages,
  resourceItems,
} from "../../components/data/ResourceCenterData";
import OrbitalLayout from "../../components/OrbitalLayout";

const ResourceCenterCapabilities = () => {
  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-b from-indigo-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center"
          style={{ color: "var(--color-deep-indigo)" }}
        >
          Resource Center Capabilities
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-md sm:text-lg text-gray-600 max-w-2xl mx-auto"
          style={{ color: "var(--color-muted)" }}
        >
          COE Indutech’s Resource Center is equipped with books, journals, and
          test standards related to technical textile products. This facility is
          open to the public for research and reference. Please click the below
          links to explore more details.
        </motion.p>

        {/* Circular layout */}
        <OrbitalLayout
          image="/images/resource_05.gif"
          items={resourceItems}
          radius={220}
          rotationSpeed={40}
          size={500}
        />

        {/* Images Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto mb-12"
        >
          {resourceImages.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all bg-white"
            >
              <img
                src={img}
                alt={`Resource center ${index + 1}`}
                className="w-full h-48 object-cover"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-gray-700 max-w-3xl mx-auto mb-10"
        >
          <p className="text-sm leading-relaxed">
            <span className="font-semibold text-[var(--color-indigo)]">
              Note:
            </span>{" "}
            A life-time membership fee of ₹500 is applicable for utilizing the
            PSGTECHS COE INDUTECH Resource Center facility. Payment should be
            made via DD in favour of “coeindutech psgct”, payable at Coimbatore.
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pt-10 text-center text-sm text-gray-700 border-t border-indigo-100"
        >
          <p className="font-medium mb-2">For any enquiries, please contact:</p>

          <p className="text-base font-bold text-[var(--color-indigo)] flex items-center justify-center gap-2">
            <User className="w-4 h-4 text-[var(--color-purple)]" /> Mr. V. Muthu
            Kumar — QC Manager
          </p>

          <div className="flex flex-col items-center justify-center mt-3 space-y-2 text-gray-700">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[var(--color-purple)]" />
              <a
                href="mailto:testing.int@apaps.psgtech.ac.in"
                className="text-[var(--color-indigo)] font-medium hover:text-[var(--color-purple)] transition-all"
              >
                testing.int@apaps.psgtech.ac.in
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResourceCenterCapabilities;
