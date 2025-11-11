"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PrimaryPinkButton from "../ui/primary-pink-button";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center bg-white/80 backdrop-blur-md shadow-md">
      <nav className="w-full max-w-6xl px-6 py-3 flex items-center justify-between rounded-2xl">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-semibold text-orange-800 hover:text-pink-600 transition"
        >
          PSG INDUTECH
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

          <Link
            to="/coming-soon"
            className="text-gray-700 hover:text-pink-600 font-medium transition"
          >
            Facilities
          </Link>

          <Link
            to="/coming-soon"
            className="text-gray-700 hover:text-pink-600 font-medium transition"
          >
            Info Center
          </Link>

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

            {/* <div className="pt-2 w-full">
              <PrimaryPinkButton button="Buy Now" />
            </div> */}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
