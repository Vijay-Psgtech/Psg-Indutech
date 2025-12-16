import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Search } from "lucide-react";
import { textileLinks } from "../../components/data/TextileOrgData";

const TextileOrganizations = () => {
  const [search, setSearch] = useState("");

  const filteredLinks = textileLinks.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-b from-indigo-50 via-white to-indigo-50">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl font-bold text-center mb-6"
          style={{ color: "#22227A" }}
        >
          List of E-mail / Web Addresses of Textile Organizations
        </motion.h1>

        {/* Search */}
        <div className="max-w-md mx-auto mb-10 relative">
          <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search organization..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* List */}
        <div className="space-y-4">
          {filteredLinks.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
              className="bg-white rounded-xl shadow-md p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between hover:shadow-xl transition"
            >
              <div>
                <p className="text-xs text-gray-500 mb-1">#{item.id}</p>
                <h3 className="font-semibold text-gray-800">
                  {item.name}
                </h3>
              </div>

              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 sm:mt-0 inline-flex items-center text-sm font-medium text-indigo-600 hover:text-purple-600 transition"
              >
                Visit Website
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Empty */}
        {filteredLinks.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No matching organizations found.
          </p>
        )}
      </div>
    </section>
  );
};

export default TextileOrganizations;
