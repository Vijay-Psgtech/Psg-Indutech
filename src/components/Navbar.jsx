import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="bg-gradient-to-br from-indigo-600 via-blue-900 to-indigo-900 text-white shadow-md fixed w-full z-50"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto flex flex-wrap justify-between items-center p-4">
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="COE INDUTECH" className="w-12 h-12" />
          <div>
            <h1 className="font-bold text-lg md:text-xl">
              PSGTech's COE INDUTECH
            </h1>
            <p className="text-xs md:text-sm text-gray-200">
              Centre of Excellence for Industrial and Home Textiles
            </p>
          </div>
        </div>
        <ul className="hidden md:flex space-x-12 text-md font-medium">
          {[
            "Home",
            "About Us",
            "Facilities",
            "Info Centre",
            "Gallery",
            "Contact",
          ].map((item) => (
            <li
              key={item}
              className="hover:text-yellow-400 cursor-pointer transition"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
