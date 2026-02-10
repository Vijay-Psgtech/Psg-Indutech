"use client";
import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { brandColors } from "./common/brand";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [facilityOpen, setFacilityOpen] = useState(false);
  const [infoCenterOpen, setInfoCenterOpen] = useState(false);

  return (
    <header
      role="banner"
      className="fixed top-0 left-0 w-full z-50 flex justify-center shadow-md"
      style={{
        backgroundColor: "rgba(255,255,255,0.98)",
        backdropFilter: "blur(10px)",
      }}
    >
      <nav className="w-full px-4 sm:px-8 lg:px-12 py-4 md:py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center flex-shrink-0">
          <img
            src="/logo.png"
            alt="PSGTech COE INDUTECH logo"
            className="h-14 w-auto"
          />
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
          <a
            href="/"
            className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition duration-200"
          >
            Home
          </a>

          <div
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button className="px-3 py-2 flex items-center text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition duration-200">
              About <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <AnimatePresence>
              {aboutOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-lg py-2 w-64 z-10"
                  style={{ border: `1px solid #e0e7ff` }}
                >
                  <a
                    href="/psg-coe-about"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition"
                  >
                    PSG Techs COE Indutech
                  </a>
                  <a
                    href="https://www.psgtech.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition"
                  >
                    PSG College of Technology
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setFacilityOpen(true)}
            onMouseLeave={() => setFacilityOpen(false)}
          >
            <button className="px-3 py-2 flex items-center text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition duration-200 whitespace-nowrap">
              Commercial Production <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <AnimatePresence>
              {facilityOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-lg py-2 w-72 z-10"
                  style={{ border: `1px solid #e0e7ff` }}
                >
                  {[
                    { path: "/hot-melt", label: "Hot melt coating" },
                    { path: "/needle-punch", label: "Needle punching line" },
                    { path: "/thermal-wadding", label: "Thermal Wadding" },
                    { path: "/wet-wipe", label: "Wet wipe" },
                    { path: "/uv-print", label: "UV Printing" },
                    { path: "/coir-needle", label: "Coir needle felt" },
                    {
                      path: "/composite-manufacturing",
                      label: "Composite manufacturing machine",
                    },
                  ].map((it) => (
                    <a
                      key={it.path}
                      href={it.path}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition"
                    >
                      {it.label}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setInfoCenterOpen(true)}
            onMouseLeave={() => setInfoCenterOpen(false)}
          >
            <button className="px-3 py-2 flex items-center text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition duration-200 whitespace-nowrap">
              Incubation & Prototype <br /> Machines{" "}
              <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <AnimatePresence>
              {infoCenterOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-lg py-2 w-64 z-10"
                  style={{ border: `1px solid #e0e7ff` }}
                >
                  <a
                    href="/web-links"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition"
                  >
                    Lab model needle punching line
                  </a>
                  <a
                    href="/textile-org"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition"
                  >
                    Lab model coating machine
                  </a>
                  <a
                    href="/technical-textile"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition"
                  >
                    Face mask
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="/testing"
            className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition duration-200 whitespace-nowrap"
          >
            Testing Facility
          </a>
          <a
            href="/training"
            className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition duration-200 whitespace-nowrap"
          >
            Training Facility
          </a>
          <a
            href="/res-center"
            className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition duration-200 whitespace-nowrap"
          >
            Resource Centre
          </a>
          <a
            href="/products"
            className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition duration-200 whitespace-nowrap"
          >
            Product Development
          </a>
          <a
            href="/gallery"
            className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition duration-200"
          >
            Gallery
          </a>
          <a
            href="/contact"
            className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition duration-200"
          >
            Contact
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="md:hidden p-2 rounded-lg hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
            style={{ color: brandColors.secondary }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute top-full left-0 w-full bg-white flex flex-col items-start px-6 py-6 space-y-3 shadow-lg md:hidden"
          >
            <a
              href="/"
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2 w-full text-sm font-medium rounded-md transition"
              style={{
                color: brandColors.primary,
                backgroundColor: "#eef2ff",
              }}
            >
              Home
            </a>

            <div className="w-full">
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="flex items-center justify-between w-full px-3 py-2 font-medium text-sm rounded-md transition"
                style={{
                  color: brandColors.primary,
                  backgroundColor: "#eef2ff",
                }}
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
                    <a
                      href="/psg-coe-about"
                      onClick={() => setMobileOpen(false)}
                      className="px-3 py-2 text-sm text-gray-700 hover:text-indigo-600 rounded-md transition"
                    >
                      PSG Techs COE Indutech
                    </a>
                    <a
                      href="https://www.psgtech.edu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 text-sm text-gray-700 hover:text-indigo-600 rounded-md transition"
                    >
                      PSG College of Technology
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="w-full">
              <button
                onClick={() => setFacilityOpen(!facilityOpen)}
                className="flex items-center justify-between w-full px-3 py-2 font-medium text-sm rounded-md transition"
                style={{
                  color: brandColors.primary,
                  backgroundColor: "#eef2ff",
                }}
              >
                Commercial Production
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
                      { path: "/hot-melt", label: "Hot melt coating" },
                      { path: "/needle-punch", label: "Needle punching line" },
                      { path: "/thermal-wadding", label: "Thermal wadding" },
                      { path: "/wet-wipe", label: "Wet wipe" },
                      { path: "/uv-print", label: "UV printing" },
                      { path: "/coir-needle", label: "Coir needle felt" },
                      {
                        path: "/composite-manufacturing",
                        label: "Composite manufacturing machine",
                      },
                    ].map((item) => (
                      <a
                        key={item.path}
                        href={item.path}
                        onClick={() => setMobileOpen(false)}
                        className="px-3 py-2 text-sm text-gray-700 hover:text-indigo-600 rounded-md transition"
                      >
                        {item.label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="w-full">
              <button
                onClick={() => setInfoCenterOpen(!infoCenterOpen)}
                className="flex items-center justify-between w-full px-3 py-2 font-medium text-sm rounded-md transition"
                style={{
                  color: brandColors.primary,
                  backgroundColor: "#eef2ff",
                }}
              >
                Incubation & Prototype Machines
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
                      {
                        path: "/web-links",
                        label: "Lab model needle punching line",
                      },
                      {
                        path: "/textile-org",
                        label: "Lab model coating machine",
                      },
                      { path: "/technical-textile", label: "Face mask" },
                    ].map((item) => (
                      <a
                        key={item.path}
                        href={item.path}
                        onClick={() => setMobileOpen(false)}
                        className="px-3 py-2 text-sm text-gray-700 hover:text-indigo-600 rounded-md transition"
                      >
                        {item.label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {[
              "/testing",
              "/training",
              "/res-center",
              "/products",
              "/gallery",
              "/contact",
            ].map((path, idx) => (
              <a
                key={idx}
                href={path}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 w-full text-sm font-medium rounded-md transition hover:text-indigo-600"
                style={{ color: brandColors.primary }}
              >
                {
                  [
                    "Testing Facility",
                    "Training Facility",
                    "Resource Centre",
                    "Product Development",
                    "Gallery",
                    "Contact Us",
                  ][idx]
                }
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
