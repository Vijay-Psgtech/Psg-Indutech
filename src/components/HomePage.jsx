"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";

// ---------- Reusable Components ----------
function Button({ children, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`group inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-pink-600 text-white text-lg font-medium hover:bg-pink-700 transition-all duration-300 ${className}`}
    >
      {children}
      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
    </button>
  );
}

// ---------- Main Component ----------
export default function HomePage() {
  const [expanded, setExpanded] = useState(false);
  const [current, setCurrent] = useState(0);

  const banners = [
    "src/assets/images/banner1.jpg",
    "src/assets/images/banner2.jpg",
    "src/assets/images/banner3.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % banners.length),
      4000
    );
    return () => clearInterval(interval);
  }, [banners.length]);

  const notifications = [
    "Tender Notice: Last date for bid submission is 03/08/2024",
    "Workshop: FESEM and Simultaneous Thermal Analysis (DSC/TGA)",
    "Training Program: Advanced Industrial Textiles 2025",
  ];

  const missionItems = [
    { title: "Resource Center", color: "from-pink-400 to-pink-600", deg: 300 },
    {
      title: "Testing Capabilities",
      color: "from-orange-400 to-orange-600",
      deg: 240,
    },
    { title: "Consultancy", color: "from-sky-400 to-sky-600", deg: 180 },
    {
      title: "Training & Workshops",
      color: "from-red-400 to-red-600",
      deg: 120,
    },
    {
      title: "Support BIS Standards",
      color: "from-blue-400 to-blue-600",
      deg: 60,
    },
    { title: "Pilot Facility", color: "from-yellow-400 to-yellow-600", deg: 0 },
    {
      title: "Incubation Center",
      color: "from-emerald-400 to-emerald-600",
      deg: 330,
    },
  ];

  const formLinks = [
    {
      title: "Testing Requisition Form",
      pdf: "/docs/Testing requesitition form Yr 22-23.pdf",
    },
    {
      title: "Testing Lab Charges",
      pdf: "/docs/2019- 2020 Testing Charges consolidated 01.01.2020.pdf",
    },
    {
      title: "Application for Industrial Associate Membership",
      pdf: "/docs/Industrial Assoisated membership 2016.pdf",
    },
    {
      title: "Lifetime Membership for Library",
      pdf: "/docs/Life time membership form for library.doc",
    },
    {
      title: "Compendium",
      pdf: "/docs/Textile COE.pdf",
    },
  ];

  return (
    <div
      className="text-gray-900 bg-transparent flex flex-col items-center justify-center"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* ===== Banner Carousel ===== */}
      <div className="relative w-full h-[100vh] overflow-hidden">
        {banners.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt={`Banner ${i + 1}`}
            className="absolute top-0 left-0 w-full h-full object-cover"
            animate={{ opacity: current === i ? 1 : 0 }}
            transition={{ duration: 1 }}
          />
        ))}
      </div>

      {/* ===== Scrolling Notification ===== */}
      <div className="w-full bg-pink-700 text-white py-3 overflow-hidden">
        <div className="whitespace-nowrap animate-scroll font-medium text-lg">
          {notifications.map((note, index) => (
            <span key={index} className="mx-10">
              ⚡ {note}
            </span>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-scroll {
            display: inline-block;
            animation: scroll 25s linear infinite;
          }
        `}
      </style>

      {/* ===== About Section ===== */}
      <motion.section
        className="w-full flex flex-col items-center justify-center py-24 px-6 text-center bg-gradient-to-b from-white to-pink-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-pink-700 mb-4 border-b-4 border-transparent hover:border-pink-600 inline-block transition-all">
          About COE INDUTECH
        </h2>
        <p className="max-w-3xl text-lg text-gray-700 mt-6 leading-relaxed">
          A project promoted by the Ministry of Textiles, Government of India to
          promote the field of technical textiles in India. PSG College of
          Technology established the Centre of Excellence (COE) in Industrial
          Textiles, covering products like Conveyor Belts, Automobile Textiles,
          and more.
        </p>
        <div className="mt-8">
          <Button>Click Here for Brochure</Button>
        </div>
      </motion.section>

      {/* ===== Vision Section ===== */}
      <motion.section
        className="w-full flex flex-col items-center justify-center py-24 px-6 text-center bg-gradient-to-b from-pink-50 to-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-pink-700 mb-4 border-b-4 border-transparent hover:border-pink-600 inline-block transition-all">
          Vision
        </h2>
        <p className="max-w-3xl text-lg text-gray-700 mt-6 leading-relaxed">
          To be a dynamic, competitive, and world-class Centre of Excellence for
          Industrial Textiles Research dedicated to the aspirations of the
          Indian technical textile industry.
        </p>
      </motion.section>

      {/* ===== Forms Section (Flip Card Design) ===== */}
      <motion.section
        className="w-full flex flex-col items-center justify-center py-24 px-6 bg-gradient-to-b from-white/60 to-pink-50/60 text-center relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-pink-700 mb-12 border-b-4 border-transparent hover:border-pink-600 inline-block transition-all">
          Forms & Documents
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 perspective max-w-7xl w-full">
          {formLinks.map((form, index) => (
            <div
              key={index}
              className="relative w-full h-80 cursor-pointer group"
            >
              <div className="preserve-3d w-full h-full transition-transform duration-700 group-hover:[transform:rotateY(180deg)]">
                {/* Front Side */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-white/80 to-pink-100/60 border border-pink-200/40 rounded-3xl shadow-xl backface-hidden">
                  <div className="bg-pink-100 p-5 rounded-full mb-4 shadow-inner">
                    <FileText className="w-10 h-10 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {form.title}
                  </h3>
                  <p className="text-gray-500 mt-3 text-sm">Click to Preview</p>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 flex flex-col justify-between bg-white rounded-3xl shadow-2xl border border-pink-200/50 p-4 [transform:rotateY(180deg)] backface-hidden overflow-hidden">
                  <div className="flex-grow rounded-xl overflow-hidden border border-gray-200">
                    <iframe
                      src={form.pdf}
                      title={form.title}
                      className="w-full h-full pointer-events-none"
                      sandbox=""
                    ></iframe>
                  </div>
                  <motion.a
                    href={form.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="mt-4 flex items-center justify-center gap-2 text-pink-600 font-semibold hover:underline"
                  >
                    View Full PDF <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <style>{`
        .perspective {
          perspective: 1200px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
      </motion.section>

      {/* ===== Mission Section with Orbit ===== */}
      <motion.section
        className="w-full flex flex-col items-center justify-center py-24 px-6 bg-gradient-to-b from-pink-50/30 to-white relative overflow-hidden text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div
          className="relative w-[500px] h-[500px] flex items-center justify-center"
          onMouseEnter={() => setExpanded(true)}
          onMouseLeave={() => setExpanded(false)}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 10 }}
            className="absolute w-40 h-40 bg-gradient-to-br from-pink-600 to-pink-700 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-2xl z-20 hover:shadow-[0_0_40px_10px_rgba(236,72,153,0.6)] transition-all"
          >
            MISSION
          </motion.div>

          <motion.div
            className="absolute inset-0 rounded-full border-2 border-pink-300/40"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          ></motion.div>

          {missionItems.map((item, i) => (
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
                  boxShadow: "0 0 25px rgba(236,72,153,0.9)",
                }}
                className={`w-36 h-36 bg-gradient-to-br ${item.color} rounded-full shadow-lg flex items-center justify-center text-white font-semibold text-center text-sm px-3 py-2 cursor-pointer`}
              >
                {item.title}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
