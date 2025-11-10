import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-16 bg-gray-100 text-gray-800">
      <motion.div
        className="container mx-auto px-4 md:px-8 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold text-indigo-900 mb-6">
          About COE INDUTECH
        </h2>
        <p className="text-justify leading-relaxed max-w-4xl mx-auto font-sans text-xl">
          A project promoted by the Ministry of Textiles, Government of India,
          to promote the field of technical textiles in India. PSG College of
          Technology set up the COE in Industrial Textiles, a segment of
          technical textiles. The lab has a wide range of products such as
          Conveyor Belts, Automobile Textiles, and many more.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
