"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const COLORS = {
  deepIndigo: "#22227A", // Deep indigo (main text)
  indigo: "#434C9A", // Medium indigo (hover/buttons)
  purple: "#6D77B3", // Purple (accent)
  cyan: "#06b6d4", // Cyan (bright accent)
  indigo50: "#eef2ff", // Light indigo background
  indigo100: "#e0e7ff", // Indigo border
};

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [facilityOpen, setFacilityOpen] = useState(false);
  const [infoCenterOpen, setInfoCenterOpen] = useState(false);

  const linkStyle = {
    color: "#374151",
    fontWeight: "500",
    transition: "color 0.3s",
    cursor: "pointer",
  };

  const hoverLinkStyle = {
    color: COLORS.indigo,
  };

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 flex justify-center shadow-md"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(12px)",
      }}
    >
      <nav className="w-full max-w-6xl px-6 py-3 flex items-center justify-between rounded-2xl">
        {/* Logo + Title */}
        <a href="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="PSGTech COE INDUTECH logo"
            className="w-28 md:w-48 h-auto"
          />
        </a>

        {/* ===== Desktop Menu ===== */}
        <div className="hidden md:flex space-x-8 items-center relative">
          <Link
            to="/"
            style={linkStyle}
            onMouseEnter={(e) => (e.target.style.color = COLORS.indigo)}
            onMouseLeave={(e) => (e.target.style.color = "#374151")}
          >
            Home
          </Link>

          {/* About Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button
              className="flex items-center font-medium transition"
              style={linkStyle}
              onMouseEnter={(e) => (e.target.style.color = COLORS.indigo)}
              onMouseLeave={(e) => (e.target.style.color = "#374151")}
            >
              About <ChevronDown className="ml-1 w-4 h-4" />
            </button>

            <AnimatePresence>
              {aboutOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-xl py-2 w-64"
                  style={{ border: `1px solid ${COLORS.indigo100}` }}
                >
                  <Link
                    to="/about-coe"
                    className="block px-4 py-2 text-gray-700 transition"
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = COLORS.indigo50;
                      e.target.style.color = COLORS.indigo;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.color = "#374151";
                    }}
                  >
                    CoE
                  </Link>
                  <Link
                    to="/psg-coe-about"
                    className="block px-4 py-2 text-gray-700 transition"
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = COLORS.indigo50;
                      e.target.style.color = COLORS.indigo;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.color = "#374151";
                    }}
                  >
                    PSG Techs COE Indutech
                  </Link>
                  <a
                    href="https://www.psgtech.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-gray-700 transition"
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = COLORS.indigo50;
                      e.target.style.color = COLORS.indigo;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.color = "#374151";
                    }}
                  >
                    PSG College of Technology
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Facilities dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setFacilityOpen(true)}
            onMouseLeave={() => setFacilityOpen(false)}
          >
            <button
              className="flex items-center font-medium transition"
              style={linkStyle}
              onMouseEnter={(e) => (e.target.style.color = COLORS.indigo)}
              onMouseLeave={(e) => (e.target.style.color = "#374151")}
            >
              Facilities <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <AnimatePresence>
              {facilityOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-xl py-2 w-64"
                  style={{ border: `1px solid ${COLORS.indigo100}` }}
                >
                  <Link
                    to="/inc-pro"
                    className="block px-4 py-2 text-gray-700 transition"
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = COLORS.indigo50;
                      e.target.style.color = COLORS.indigo;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.color = "#374151";
                    }}
                  >
                    Incubation & Prototyping
                  </Link>
                  <Link
                    to="/prod-dev"
                    className="block px-4 py-2 text-gray-700 transition"
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = COLORS.indigo50;
                      e.target.style.color = COLORS.indigo;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.color = "#374151";
                    }}
                  >
                    Product Development
                  </Link>
                  <Link
                    to="/testing"
                    className="block px-4 py-2 text-gray-700 transition"
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = COLORS.indigo50;
                      e.target.style.color = COLORS.indigo;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.color = "#374151";
                    }}
                  >
                    Testing
                  </Link>
                  <Link
                    to="/comm-prod"
                    className="block px-4 py-2 text-gray-700 transition"
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = COLORS.indigo50;
                      e.target.style.color = COLORS.indigo;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.color = "#374151";
                    }}
                  >
                    Commercial Production Setup
                  </Link>
                  <Link
                    to="/hot_mlc"
                    className="block px-4 py-2 text-gray-700 transition"
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = COLORS.indigo50;
                      e.target.style.color = COLORS.indigo;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.color = "#374151";
                    }}
                  >
                    Hot Melt Lamination & Coating
                  </Link>
                  <Link
                    to="/training"
                    className="block px-4 py-2 text-gray-700 transition"
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = COLORS.indigo50;
                      e.target.style.color = COLORS.indigo;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.color = "#374151";
                    }}
                  >
                    Training Programs
                  </Link>
                  <Link
                    to="/res-center"
                    className="block px-4 py-2 text-gray-700 transition"
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = COLORS.indigo50;
                      e.target.style.color = COLORS.indigo;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.color = "#374151";
                    }}
                  >
                    Resource Center
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Info Center DropDown */}
          <div
            className="relative"
            onMouseEnter={() => setInfoCenterOpen(true)}
            onMouseLeave={() => setInfoCenterOpen(false)}
          >
            <button
              className="flex items-center font-medium transition"
              style={linkStyle}
              onMouseEnter={(e) => (e.target.style.color = COLORS.indigo)}
              onMouseLeave={(e) => (e.target.style.color = "#374151")}
            >
              Info Center <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <AnimatePresence>
              {infoCenterOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-xl py-2 w-48"
                  style={{ border: `1px solid ${COLORS.indigo100}` }}
                >
                  <Link
                    to="/web-links"
                    className="block px-4 py-2 text-gray-700 transition"
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = COLORS.indigo50;
                      e.target.style.color = COLORS.indigo;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.color = "#374151";
                    }}
                  >
                    Web Links of CoE
                  </Link>
                  <Link
                    to="/textile-org"
                    className="block px-4 py-2 text-gray-700 transition"
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = COLORS.indigo50;
                      e.target.style.color = COLORS.indigo;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.color = "#374151";
                    }}
                  >
                    Textile Organizations
                  </Link>
                  <Link
                    to="/coming-soon"
                    className="block px-4 py-2 text-gray-700 transition"
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = COLORS.indigo50;
                      e.target.style.color = COLORS.indigo;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.color = "#374151";
                    }}
                  >
                    Technical Textiles
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/products"
            style={linkStyle}
            onMouseEnter={(e) => (e.target.style.color = COLORS.indigo)}
            onMouseLeave={(e) => (e.target.style.color = "#374151")}
          >
            Products
          </Link>

          <Link
            to="/gallery"
            style={linkStyle}
            onMouseEnter={(e) => (e.target.style.color = COLORS.indigo)}
            onMouseLeave={(e) => (e.target.style.color = "#374151")}
          >
            Gallery
          </Link>

          <Link
            to="/contact"
            style={linkStyle}
            onMouseEnter={(e) => (e.target.style.color = COLORS.indigo)}
            onMouseLeave={(e) => (e.target.style.color = "#374151")}
          >
            Contact Us
          </Link>
        </div>

        {/* ===== Right Actions ===== */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 transition"
            style={{ color: COLORS.indigo }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* ===== Mobile Menu ===== */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-white flex flex-col items-start px-6 py-4 space-y-4 shadow-lg md:hidden"
          >
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="text-gray-800 transition"
              style={{ color: COLORS.deepIndigo }}
              onMouseEnter={(e) => (e.target.style.color = COLORS.indigo)}
              onMouseLeave={(e) => (e.target.style.color = COLORS.deepIndigo)}
            >
              Home
            </Link>

            {/* Mobile About Submenu */}
            <div className="w-full">
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="flex items-center justify-between w-full font-medium transition"
                style={{ color: COLORS.deepIndigo }}
                onMouseEnter={(e) => (e.target.style.color = COLORS.indigo)}
                onMouseLeave={(e) => (e.target.style.color = COLORS.deepIndigo)}
              >
                About
                <ChevronDown
                  className={`w-4 h-4 ml-2 transition-transform ${
                    aboutOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {aboutOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="flex flex-col ml-4 mt-2 space-y-2 overflow-hidden"
                  >
                    <Link
                      to="/about-coe"
                      onClick={() => setMobileOpen(false)}
                      className="text-gray-700 transition"
                      style={{ color: COLORS.indigo }}
                    >
                      About Us
                    </Link>
                    <Link
                      to="/psg-coe-about"
                      onClick={() => setMobileOpen(false)}
                      className="text-gray-700 transition"
                      style={{ color: COLORS.indigo }}
                    >
                      COE Page
                    </Link>
                    <Link
                      to="/psg-coe-about"
                      onClick={() => setMobileOpen(false)}
                      className="text-gray-700 transition"
                      style={{ color: COLORS.indigo }}
                    >
                      PSG Techs COE Indutech
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Facilities Submenu */}
            <div className="w-full">
              <button
                onClick={() => setFacilityOpen(!facilityOpen)}
                className="flex items-center justify-between w-full font-medium transition"
                style={{ color: COLORS.deepIndigo }}
                onMouseEnter={(e) => (e.target.style.color = COLORS.indigo)}
                onMouseLeave={(e) => (e.target.style.color = COLORS.deepIndigo)}
              >
                Facilities{" "}
                <ChevronDown
                  className={`w-4 h-4 ml-2 transition-transform ${
                    facilityOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {facilityOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="flex flex-col ml-4 mt-2 space-y-2 overflow-hidden"
                  >
                    {[
                      {
                        path: "/inc-pro",
                        label: "Incubation & Prototyping",
                      },
                      { path: "/prod-dev", label: "Product Development" },
                      { path: "/testing", label: "Testing" },
                      {
                        path: "/comm-prod",
                        label: "Commercial Product Setup",
                      },
                      {
                        path: "/hot_mlc",
                        label: "Hot Melt Lamination & Coating",
                      },
                      { path: "/training", label: "Training Programmes" },
                      { path: "/res-center", label: "Resource Center" },
                    ].map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setMobileOpen(false)}
                        className="text-gray-700 transition"
                        style={{ color: COLORS.indigo }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Info Center Submenu */}
            <div className="w-full">
              <button
                onClick={() => setInfoCenterOpen(!infoCenterOpen)}
                className="flex items-center justify-between w-full font-medium transition"
                style={{ color: COLORS.deepIndigo }}
                onMouseEnter={(e) => (e.target.style.color = COLORS.indigo)}
                onMouseLeave={(e) => (e.target.style.color = COLORS.deepIndigo)}
              >
                Info Center{" "}
                <ChevronDown
                  className={`w-4 h-4 ml-2 transition-transform ${
                    infoCenterOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {infoCenterOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="flex flex-col ml-4 mt-2 space-y-2 overflow-hidden"
                  >
                    {[
                      { path: "/web-links", label: "Web Links of CoE" },
                      { path: "/textile-org", label: "Textile Organizations" },
                      { path: "/coming-soon", label: "Technical textiles" },
                    ].map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="text-gray-700 transition"
                        style={{ color: COLORS.indigo }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {["/products", "/gallery", "/contact"].map((path, idx) => (
              <Link
                key={idx}
                to={path}
                onClick={() => setMobileOpen(false)}
                className="text-gray-800 transition"
                style={{ color: COLORS.deepIndigo }}
                onMouseEnter={(e) => (e.target.style.color = COLORS.indigo)}
                onMouseLeave={(e) => (e.target.style.color = COLORS.deepIndigo)}
              >
                {["Products", "Gallery", "Contact Us"][idx]}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
