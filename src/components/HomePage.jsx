"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText, ChevronDown } from "lucide-react";
import { notifications } from "./data/NotificationsData";
import { missionItems } from "./data/MissionItems";
import { formLinks } from "./data/FormsData";

/* ===== Banner Images (ORDER WISE) ===== */
import bannerImg1 from "../assets/images/img4.jpg";
import bannerImg2 from "../assets/images/img5.jpg";
import bannerImg3 from "../assets/images/img6.jpg";
import bannerImg4 from "../assets/images/img7.jpg";
import bannerImg5 from "../assets/images/img8.jpg";
import bannerImg6 from "../assets/images/img9.jpg";
import bannerImg7 from "../assets/images/img10.jpg";
import bannerImg8 from "../assets/images/img11.jpg";
import bannerImg9 from "../assets/images/img12.jpg";
import bannerImg10 from "../assets/images/img13.jpg";

/* ---------- Reusable Button ---------- */
function Button({ children }) {
  return (
    <button
      className="group inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-white text-lg font-medium transition-all duration-300"
      style={{ backgroundColor: "var(--color-indigo)" }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = "var(--color-purple)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = "var(--color-indigo)")
      }
    >
      {children}
      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
    </button>
  );
}

/* ---------- Main Component ---------- */
export default function HomePage() {
  const [expanded, setExpanded] = useState(true);
  const [current, setCurrent] = useState(0);

  const banners = [
    bannerImg1,
    bannerImg2,
    bannerImg3,
    bannerImg4,
    bannerImg5,
    bannerImg6,
    bannerImg7,
    bannerImg8,
    bannerImg9,
    bannerImg10,
  ];

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % banners.length),
      4000,
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="text-gray-900 bg-transparent"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* ===== HERO BANNER ===== */}
      <div className="relative w-full h-[80vh] overflow-hidden">
        {banners.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            className="absolute inset-0 w-full h-full object-cover"
            animate={{ opacity: current === i ? 1 : 0 }}
            transition={{ duration: 1 }}
          />
        ))}

        {/* LEFT CONTENT */}
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="max-w-2xl px-12 text-white">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl lg:text-5xl font-bold leading-tight  text-blue-300"
            >
              Centre of Excellence <br /> Industrial Textiles
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-5 text-lg text-blue-50"
            >
              Ministry of Textiles, Government of India
            </motion.p>

            <div className="mt-8">
              <Button>Explore More</Button>
            </div>
          </div>
        </div>

        {/* SCROLL ARROW */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white"
        >
          <ChevronDown size={36} />
        </motion.div>
      </div>

      {/* ===== NOTIFICATIONS ===== */}
      <div className="w-full text-white py-3 overflow-hidden bg-indigo-900">
        <div className="animate-scroll whitespace-nowrap text-lg font-medium">
          {notifications.map((n, i) => (
            <a
              key={i}
              href={n.pdf}
              target="_blank"
              className="mx-10 inline-block hover:underline"
            >
              ⚡ {n.text}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-scroll {
          display: inline-block;
          animation: scroll 25s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* ===== ABOUT ===== */}
      <section className="py-24 text-center bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              className="rounded-[2rem] overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <motion.img
                src={bannerImg8}
                alt="PSG COE INDUTECH"
                className="w-full h-full object-cover"
                initial={{ scale: 1.05 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>

            {/* Text Content */}
            <div>
              <h2 className="text-4xl font-extrabold text-indigo-900 tracking-tight">
                About COE INDUTECH
              </h2>
              <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-700">
                PSGTECHS COE INDUTECH, the Center of Excellence for Industrial
                and Home Textiles, is a project sponsored by the Ministry of
                Textiles, Government of India, under the Technology Mission for
                Technical Textiles (TMTT). The Centre is jointly implemented by
                the Departments of Textile Technology and Automobile
                Engineering, PSG College of Technology, and is located within
                the PSGitech campus at Neelambur, Coimbatore.
              </p>
              <div className="mt-8">
                <a href="/docs/PSG COE Indutech  2019.pdf" target="_blank">
                  <Button>Click Here for Brochure</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VISION ===== */}
      <section className="relative py-28 bg-gradient-to-br from-indigo-50 via-white to-indigo-100 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(79,70,229,0.1),_transparent_60%)]"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-5xl font-extrabold text-indigo-900 tracking-tight">
            Our Vision
          </h2>
          <div className="mt-6">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              To be a dynamic, competitive and world-class <span className="italic font-bold text-indigo-900">"Centre of Excellence"</span> for
              Technical Textiles research with an emphasis on Industrial & Home textiles dedicated to the aspirations of the Indian Technical Textile Industry.
            </p>
          </div>
          <div className="mt-10 flex justify-center">
            <div className="h-1 w-24 bg-indigo-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

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
            className="absolute w-40 h-40 bg-linear-to-br rounded-full flex items-center justify-center text-white font-bold text-lg shadow-2xl z-20 transition-all"
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
                className={`w-36 h-36 bg-linear-to-br ${item.color} rounded-full shadow-lg flex items-center justify-center text-white font-semibold text-center text-sm px-3 py-2 cursor-pointer`}
              >
                {item.title}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ===== FORMS & DOCUMENTS (AFTER VISION + MISSION) ===== */}
      <section className="py-24 bg-indigo-50 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-indigo-900">
          Forms & Documents
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 max-w-7xl mx-auto">
          {formLinks.map((form, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-8 shadow-xl hover:scale-105 transition"
            >
              <FileText className="w-10 h-10 mx-auto text-indigo-700" />
              <h3 className="mt-4 font-semibold">{form.title}</h3>
              <a
                href={form.pdf}
                target="_blank"
                className="inline-flex gap-2 mt-4 text-indigo-700 hover:underline"
              >
                View PDF <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
