"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const COLORS = {
  deepIndigo: "#22227A",
  indigo: "#434C9A",
  purple: "#6D77B3",
  cyan: "#06b6d4",
  indigo50: "#eef2ff",
  indigo100: "#e0e7ff",
};

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [facilityOpen, setFacilityOpen] = useState(false);
  const [infoCenterOpen, setInfoCenterOpen] = useState(false);

  return (
    <header
      role="banner"
      className="fixed top-0 left-0 w-full z-50 flex justify-center shadow-sm"
      style={{ backgroundColor: "rgba(255,255,255,0.95)", backdropFilter: "blur(8px)" }}
    >
      <nav className="w-full max-w-6xl px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-4">
          <img src="/logo.png" alt="PSGTech COE INDUTECH logo" className="w-32 md:w-46 h-auto" />
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 font-medium hover:text-indigo-600 transition">
            Home
          </Link>

          <div className="relative" onMouseEnter={() => setAboutOpen(true)} onMouseLeave={() => setAboutOpen(false)}>
            <button className="flex items-center font-medium text-gray-700 hover:text-indigo-600 transition">
              About <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <AnimatePresence>
              {aboutOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-lg py-2 w-60"
                  style={{ border: `1px solid ${COLORS.indigo100}` }}
                >
                  <Link to="/about-coe" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition">
                    CoE
                  </Link>
                  <Link to="/psg-coe-about" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition">
                    PSG Techs COE Indutech
                  </Link>
                  <a href="https://www.psgtech.edu/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition">
                    PSG College of Technology
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative" onMouseEnter={() => setFacilityOpen(true)} onMouseLeave={() => setFacilityOpen(false)}>
            <button className="flex items-center font-medium text-gray-700 hover:text-indigo-600 transition">
              Facilities <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <AnimatePresence>
              {facilityOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-lg py-2 w-64"
                  style={{ border: `1px solid ${COLORS.indigo100}` }}
                >
                  {[
                    { path: "/inc-pro", label: "Incubation & Prototyping" },
                    { path: "/prod-dev", label: "Product Development" },
                    { path: "/testing", label: "Testing" },
                    { path: "/comm-prod", label: "Commercial Production Setup" },
                    { path: "/hot_mlc", label: "Hot Melt Lamination & Coating" },
                    { path: "/training", label: "Training Programs" },
                    { path: "/res-center", label: "Resource Center" },
                  ].map((it) => (
                    <Link key={it.path} to={it.path} className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition">
                      {it.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative" onMouseEnter={() => setInfoCenterOpen(true)} onMouseLeave={() => setInfoCenterOpen(false)}>
            <button className="flex items-center font-medium text-gray-700 hover:text-indigo-600 transition">
              Info Center <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <AnimatePresence>
              {infoCenterOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-lg py-2 w-52"
                  style={{ border: `1px solid ${COLORS.indigo100}` }}
                >
                  <Link to="/web-links" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition">
                    Web Links of CoE
                  </Link>
                  <Link to="/textile-org" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition">
                    Textile Organizations
                  </Link>
                  <Link to="/technical-textile" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition">
                    Technical Textiles
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/products" className="text-gray-700 font-medium hover:text-indigo-600 transition">
            Products
          </Link>
          <Link to="/gallery" className="text-gray-700 font-medium hover:text-indigo-600 transition">
            Gallery
          </Link>
          <Link to="/coming-soon" className="text-gray-700 font-medium hover:text-indigo-600 transition">
            Archives
          </Link>
          <Link to="/contact" className="text-gray-700 font-medium hover:text-indigo-600 transition">
            Contact Us
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="md:hidden p-2 rounded-md hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            style={{ color: COLORS.indigo }}
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
            className="absolute top-full left-0 w-full bg-white flex flex-col items-start px-6 py-5 space-y-4 shadow-md md:hidden"
          >
            <Link to="/" onClick={() => setMobileOpen(false)} className="text-gray-800 font-medium" style={{ color: COLORS.deepIndigo }}>
              Home
            </Link>

            <div className="w-full">
              <button onClick={() => setAboutOpen(!aboutOpen)} className="flex items-center justify-between w-full font-medium" style={{ color: COLORS.deepIndigo }}>
                About
                <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${aboutOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {aboutOpen && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="flex flex-col ml-4 mt-2 space-y-2 overflow-hidden">
                    <Link to="/about-coe" onClick={() => setMobileOpen(false)} className="text-gray-700 hover:text-indigo-600">
                      COE Page
                    </Link>
                    <Link to="/psg-coe-about" onClick={() => setMobileOpen(false)} className="text-gray-700 hover:text-indigo-600">
                      PSG Techs COE Indutech
                    </Link>
                    <a href="https://www.psgtech.edu/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-indigo-600">
                      PSG College of Technology
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="w-full">
              <button onClick={() => setFacilityOpen(!facilityOpen)} className="flex items-center justify-between w-full font-medium" style={{ color: COLORS.deepIndigo }}>
                Facilities
                <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${facilityOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {facilityOpen && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="flex flex-col ml-4 mt-2 space-y-2 overflow-hidden">
                    {[{ path: "/inc-pro", label: "Incubation & Prototyping" }, { path: "/prod-dev", label: "Product Development" }, { path: "/testing", label: "Testing" }, { path: "/comm-prod", label: "Commercial Product Setup" }, { path: "/hot_mlc", label: "Hot Melt Lamination & Coating" }, { path: "/training", label: "Training Programmes" }, { path: "/res-center", label: "Resource Center" }].map((item) => (
                      <Link key={item.path} to={item.path} onClick={() => setMobileOpen(false)} className="text-gray-700 hover:text-indigo-600">
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="w-full">
              <button onClick={() => setInfoCenterOpen(!infoCenterOpen)} className="flex items-center justify-between w-full font-medium" style={{ color: COLORS.deepIndigo }}>
                Info Center
                <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${infoCenterOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {infoCenterOpen && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="flex flex-col ml-4 mt-2 space-y-2 overflow-hidden">
                    {[{ path: "/web-links", label: "Web Links of CoE" }, { path: "/textile-org", label: "Textile Organizations" }, { path: "/technical-textile", label: "Technical textiles" }].map((item) => (
                      <Link key={item.path} to={item.path} className="text-gray-700 hover:text-indigo-600">
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {['/products', '/gallery', '/coming-soon', '/contact'].map((path, idx) => (
              <Link key={idx} to={path} onClick={() => setMobileOpen(false)} className="text-gray-800 font-medium hover:text-indigo-600">
                {['Products', 'Gallery', 'Archives', 'Contact Us'][idx]}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
