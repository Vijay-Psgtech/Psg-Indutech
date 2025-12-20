import React, { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Search, ExternalLink } from "lucide-react";
import { archiveItems } from "../../components/data/ArchiveData";

const Archives = () => {
  const [search, setSearch] = useState("");

  const filteredItems = archiveItems.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-b from-indigo-50 via-white to-indigo-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--color-deep-indigo)" }}
          >
            Archives
          </h1>
          <div
            className="w-20 h-1 mx-auto rounded-full mb-6"
            style={{
              background:
                "linear-gradient(90deg, var(--color-deep-indigo), var(--color-indigo), var(--color-purple))",
            }}
          ></div>
          <p
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto"
            style={{ color: "var(--color-muted)" }}
          >
            Browse tender documents, reports, and official notices.
          </p>
        </motion.div>

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
