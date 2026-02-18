import React from "react";
import { motion } from "framer-motion";
import { Mail, User } from "lucide-react";
import {
  resourceImages,
  resourceItems,
} from "../../components/data/ResourceCenterData.js";
// import OrbitalLayout from "../../components/OrbitalLayout"; // no longer needed
import { grad, gradText } from "../../components/common/brand.js";
import Eyebrow from "../../components/common/EyeBrow";
import { Book, FileText, Archive } from "lucide-react"; // icons for cards

const ResourceCenterCapabilities = () => {
  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-b from-indigo-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <Eyebrow>Resource Center</Eyebrow>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight text-slate-900"
        >
          Resource <span style={gradText}> Center Capabilities</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 text-md sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          COE Indutech’s Resource Center houses a rich collection of books,
          journals, and industry standards for technical textiles. Open to
          researchers and the public, our curated listings are available below
          – simply click to view the PDF.
        </motion.p>
        <h2 className="text-center mt-4 text-xl text-yellow-700 font-medium hover:underline transition-all">
          <a href="/docs/res-center/Harmonized test methods Nonwoven and rela.pdf" target="_blank" rel="noopener noreferrer">
            Harmonized test method
          </a>
        </h2>

        {/* ================= RESOURCE GRID ================= */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto my-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
        >
          {resourceItems.map((item, idx) => {
            const icon =
              item.title.toLowerCase().includes("book") ? (
                <Book className="w-6 h-6" />
              ) : item.title.toLowerCase().includes("journal") ? (
                <FileText className="w-6 h-6" />
              ) : (
                <Archive className="w-6 h-6" />
              );

            return (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
                }}
                className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 overflow-hidden"
              >
                <div
                  className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"
                  style={{ opacity: 0.5 }}
                />

                <div className="relative z-10">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white shadow-lg bg-gradient-to-br ${item.color}`}
                  >
                    {icon}
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-indigo-700 transition-colors line-clamp-2 min-h-[3.5rem] flex items-center">
                    {item.title}
                  </h3>

                  <a
                    href={item.doc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 mt-4 group/link"
                  >
                    View List
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ================= PHOTO GALLERY ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12"
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
                className="w-full h-52 object-cover transform hover:scale-110 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Important note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto mb-10"
        >
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-md text-yellow-900">
            <p className="font-semibold">Membership Fee</p>
            <p className="mt-2 text-sm leading-relaxed">
              A life-time membership fee of ₹500 is applicable for utilizing the
              PSGTECHS COE INDUTECH Resource Center facility. Payment should be
              made via DD in favour of “coeindutech psgct”, payable at
              Coimbatore.
            </p>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pt-10 max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-6 shadow-lg border border-indigo-50">
            <div className="flex flex-col items-center space-y-4">
              <User className="w-8 h-8 text-indigo-600" />
              <h2 className="text-xl font-bold text-slate-900">
                Contact Resource Center
              </h2>
              <p className="text-center text-slate-600">
                For enquiries regarding membership or access, please reach out.
              </p>

              <a
                href="mailto:info.int@psgtech.ac.in"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition-all shadow-md"
              >
                <Mail className="w-5 h-5" />
                info.int@psgtech.ac.in
              </a>

              <p className="text-sm text-slate-500">
                <span className="font-semibold">Contact Person:</span> Mr. V.
                Muthu Kumar — Admin
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResourceCenterCapabilities;
