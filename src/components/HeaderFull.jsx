"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PrimaryPinkButton from "../ui/primary-pink-button";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [facilityOpen, setFacilityOpen] = useState(false);
  const [infoCenterOpen, setInfoCenterOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center bg-white/80 backdrop-blur-md shadow-md">
      <nav className="w-full max-w-6xl px-6 py-3 flex items-center justify-between rounded-2xl">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-semibold text-orange-800 hover:text-pink-600 transition"
        >
          PSGTech's COE INDUTECH
          <p className="text-xs md:text-sm text-orange-800 hover:text-pink-600 transition">
            Centre of Excellence for Industrial and Home Textiles
          </p>
        </Link>

        {/* ===== Desktop Menu ===== */}
        <div className="hidden md:flex space-x-8 items-center relative">
          <Link
            to="/"
            className="text-gray-700 hover:text-pink-600 font-medium transition"
          >
            Home
          </Link>

          {/* About Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button className="flex items-center text-gray-700 hover:text-pink-600 font-medium transition">
              About <ChevronDown className="ml-1 w-4 h-4" />
            </button>

            <AnimatePresence>
              {aboutOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-xl border border-pink-100 py-2 w-48"
                >
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition"
                  >
                    About Us
                  </Link>
                  <Link
                    to="/ceo"
                    className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition"
                  >
                    COE Page
                  </Link>
                  <Link
                    to="/aboutceo"
                    className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition"
                  >
                    About COE indo tech Page
                  </Link>
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
            <button className="flex items-center text-gray-700 hover:text-pink-600 font-medium transition">
              Facilities <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <AnimatePresence>
              {facilityOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-xl border border-pink-100 py-2 w-48"
                >
                  <Link
                    to="/inc-pro"
                    className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition"
                  >
                    Incubation & Prototyping
                  </Link>

                  <Link
                    to="/prod-dev"
                    className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition"
                  >
                    Product Development
                  </Link>

                  <Link
                    to="/testing"
                    className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition"
                  >
                    Testing
                  </Link>

                  <Link
                    to="/comm-prod"
                    className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition"
                  >
                    Commercial Production Setup
                  </Link>

                  <Link
                    to="/hot-mlc"
                    className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition"
                  >
                    Hot Melt Lamination & Coating
                  </Link>

                  <Link
                    to="/train-prog"
                    className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition"
                  >
                    Training Programs
                  </Link>

                  <Link
                    to="/Res-cen"
                    className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition"
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
            <button className="flex items-center text-gray-700 hover:text-pink-600 font-medium transition">
              Info Center <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <AnimatePresence>
              {infoCenterOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-xl border border-pink-100 py-2 w-48"
                >
                  <Link
                    to="/coelinks"
                    className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition"
                  >
                    Web Links of CoE
                  </Link>

                  <Link
                    to="/textile-org"
                    className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition"
                  >
                    Textile Organizations
                  </Link>

                  <Link
                    to="/tech-textiles"
                    className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition"
                  >
                    Technical textiles
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/coming-soon"
            className="text-gray-700 hover:text-pink-600 font-medium transition"
          >
            Archives
          </Link>

          <Link
            to="/coming-soon"
            className="text-gray-700 hover:text-pink-600 font-medium transition"
          >
            Gallery
          </Link>

          <Link
            to="/coming-soon"
            className="text-gray-700 hover:text-pink-600 font-medium transition"
          >
            Contact Us
          </Link>
        </div>

        {/* ===== Right Actions ===== */}
        <div className="flex items-center space-x-4">
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-pink-600 transition"
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
              className="text-gray-800 hover:text-pink-600 transition"
            >
              Home
            </Link>

            {/* Mobile About Submenu */}
            <div className="w-full">
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="flex items-center justify-between w-full text-gray-800 hover:text-pink-600 transition"
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
                      to="/profile"
                      onClick={() => setMobileOpen(false)}
                      className="text-gray-700 hover:text-pink-600 transition"
                    >
                      About Us
                    </Link>
                    <Link
                      to="/ceo"
                      onClick={() => setMobileOpen(false)}
                      className="text-gray-700 hover:text-pink-600 transition"
                    >
                      COE Page
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/coming-soon"
              onClick={() => setMobileOpen(false)}
              className="text-gray-800 hover:text-pink-600 transition"
            >
              Facilities
            </Link>

            <Link
              to="/coming-soon"
              onClick={() => setMobileOpen(false)}
              className="text-gray-800 hover:text-pink-600 transition"
            >
              Info Center
            </Link>

            <Link
              to="/coming-soon"
              onClick={() => setMobileOpen(false)}
              className="text-gray-800 hover:text-pink-600 transition"
            >
              Archives
            </Link>
            <Link
              to="/coming-soon"
              onClick={() => setMobileOpen(false)}
              className="text-gray-800 hover:text-pink-600 transition"
            >
              Gallery
            </Link>
            <Link
              to="/coming-soon"
              onClick={() => setMobileOpen(false)}
              className="text-gray-800 hover:text-pink-600 transition"
            >
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
