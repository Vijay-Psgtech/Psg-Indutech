import React, { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Search, ExternalLink } from "lucide-react";
import { archiveItems } from "../../components/data/ArchiveData"

const Archives = () => {
  const [search, setSearch] = useState("");

  const filteredItems = archiveItems.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-b from-indigo-50 via-white to-indigo-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-6"
          style={{ color: "#22227A" }}
        >
          Archives
        </motion.h1>

        <p className="text-center text-gray-600 mb-10">
          Browse tender documents, reports, and official notices.
        </p>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-10 relative">
          <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search archives..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Archive List */}
        <div className="space-y-4">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start sm:items-center justify-between bg-white rounded-lg shadow-md hover:shadow-lg transition-all p-4"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-[#22227A]">
                    <FileText className="w-6 h-6" />
                  </div>
                  <p className="text-gray-800 font-medium leading-snug">
                    {item.title}
                  </p>
                </div>

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-purple-600 transition flex items-center gap-1 text-sm font-medium mt-2 sm:mt-0"
                  >
                    View <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-500 mt-8">
              No matching archives found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Archives;
