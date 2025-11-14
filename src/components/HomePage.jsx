"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import EventsSection from "./EventsSection";

// ---------- Reusable Components ----------
function Button({ children, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`group inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-white text-lg font-medium transition-all duration-300 ${className}`}
      style={{ backgroundColor: "var(--color-indigo)" }}
      onMouseEnter={(e) =>
        (e.target.style.backgroundColor = "var(--color-purple)")
      }
      onMouseLeave={(e) =>
        (e.target.style.backgroundColor = "var(--color-indigo)")
      }
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
    {
      text: "Tender Notice: Last date for bid submission is 03/08/2024",
      pdf: "/docs/forms/Testing requesitition form Yr 22-23.pdf",
    },
    {
      text: "Workshop: FESEM and Simultaneous Thermal Analysis (DSC/TGA)",
      pdf: "/docs/PSG COE Indutech  2019.pdf",
    },
    {
      text: "Training Program: Advanced Industrial Textiles 2025",
      pdf: "/docs/forms/Textile COE.pdf",
    },
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
      pdf: "/docs/forms/Testing requesitition form Yr 22-23.pdf",
    },
    {
      title: "Testing Lab Charges",
      pdf: "/docsforms/2019- 2020 Testing Charges consolidated 01.01.2020.pdf",
    },
    {
      title: "Application for Industrial Associate Membership",
      pdf: "/docs/forms/Industrial Assoisated membership 2016.pdf",
    },
    {
      title: "Lifetime Membership for Library",
      pdf: "/docs/forms/Life time membership form for library.doc",
    },
    {
      title: "Compendium",
      pdf: "/docs/forms/Textile COE.pdf",
    },
  ];

  return (
    <div
      className="text-gray-900 bg-transparent flex flex-col items-center justify-center mt-2"
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
      <div
        className="w-full text-white py-3 overflow-hidden"
        style={{ backgroundColor: "var(--color-deep-indigo)" }}
      >
        <div className="whitespace-nowrap overflow-visible animate-scroll font-medium text-lg">
          {notifications.map((note, index) => (
            <a
              key={index}
              href={note.pdf}
              target="_blank"
              rel="noopener noreferrer"
              title={note.text}
              className="mx-10 inline-block cursor-pointer"
            >
              ⚡ {note.text}
            </a>
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
            /* allow pausing when focused (keyboard) */
          }
          /* Pause animation on hover, active or when a child gets focus (keyboard / click) */
          .animate-scroll:hover,
          .animate-scroll:active,
          .animate-scroll:focus-within {
            animation-play-state: paused;
          }
          .animate-scroll a { color: inherit; text-decoration: none; }
          .animate-scroll a:focus,
          .animate-scroll a:hover { text-decoration: underline; }
        `}
      </style>

      {/* ===== About Section ===== */}
      <motion.section
        className="w-full flex flex-col items-center justify-center py-24 px-6 text-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(255,255,255,1), rgba(224,235,255,0.3))",
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2
          className="text-4xl font-bold mb-4 border-b-4 border-transparent inline-block transition-all"
          style={{
            color: "var(--color-deep-indigo)",
            borderColor: "var(--color-indigo)",
          }}
        >
          About COE INDUTECH
        </h2>
        <p className="max-w-3xl text-lg text-gray-700 mt-6 leading-relaxed">
          A project promoted by Ministry of Textiles, Government of India to promote the field of technical textiles in India. PSG College of Technology setting up the COE in Industrial Textiles, a segment of Technical Textiles has a wide range of products such as Conveyer Belts, Automobile Textile, etc..
        </p>
        <div className="mt-8">
          <a
            href="/docs/PSG COE Indutech  2019.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>Click Here for Brochure</Button>
          </a>
        </div>
      </motion.section>

      {/* ===== Vision Section ===== */}
      <motion.section
        className="w-full flex flex-col items-center justify-center py-24 px-6 text-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(224,235,255,0.3), rgba(255,255,255,1))",
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2
          className="text-4xl font-bold mb-4 border-b-4 border-transparent inline-block transition-all"
          style={{
            color: "var(--color-deep-indigo)",
            borderColor: "var(--color-indigo)",
          }}
        >
          Vision
        </h2>
        <p className="max-w-3xl text-lg text-gray-700 mt-6 leading-relaxed">
          To be a dynamic, competitive and world class ‘Centre of Excellence’
          for Industrial Textiles Research dedicated to the aspirations of the
          Indian technical textile industry.
        </p>
      </motion.section>

      {/* ===== Forms Section (Flip Card Design) ===== */}
      <motion.section
        className="w-full flex flex-col items-center justify-center py-24 px-6 text-center relative"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(255,255,255,0.6), rgba(224,235,255,0.2))",
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2
          className="text-4xl font-bold mb-12 border-b-4 border-transparent inline-block transition-all"
          style={{
            color: "var(--color-deep-indigo)",
            borderColor: "var(--color-indigo)",
          }}
        >
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
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-white/80 to-blue-100/60 border rounded-3xl shadow-xl backface-hidden"
                  style={{ borderColor: "#dbeafe" }}
                >
                  <div
                    className="p-5 rounded-full mb-4 shadow-inner"
                    style={{ backgroundColor: "var(--color-indigo-50)" }}
                  >
                    <FileText
                      className="w-10 h-10"
                      style={{ color: "var(--color-indigo)" }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {form.title}
                  </h3>
                  <p className="text-gray-500 mt-3 text-sm">Click to Preview</p>
                </div>

                {/* Back Side */}
                <div
                  className="absolute inset-0 flex flex-col justify-between bg-white rounded-3xl shadow-2xl border p-4 [transform:rotateY(180deg)] backface-hidden overflow-hidden"
                  style={{ borderColor: "var(--color-indigo-100)" }}
                >
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
                    className="mt-4 flex items-center justify-center gap-2 font-semibold hover:underline"
                    style={{ color: "var(--color-indigo)" }}
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
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 10 }}
            className="absolute w-40 h-40 bg-gradient-to-br rounded-full flex items-center justify-center text-white font-bold text-lg shadow-2xl z-20 transition-all"
            style={{
              backgroundImage:
                "linear-gradient(to bottom right, var(--color-indigo), var(--color-deep-indigo))",
              boxShadow: "0 0 40px 10px rgba(55, 48, 163, 0.6)",
            }}
          >
            MISSION
          </motion.div>

          <motion.div
            className="absolute inset-0 rounded-full border-2"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            style={{ borderColor: "rgba(55, 48, 163, 0.4)" }}
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
      {/* ===== Events Section ===== */}
      <EventsSection />
    </div>
  );
}
