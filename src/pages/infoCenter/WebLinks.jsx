import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { linksData } from "../../components/data/WebLinkData";

export default function WebLinks() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-indigo-50 via-white to-indigo-50">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#22227A]"
        >
          Information Centre
        </motion.h1>

        <p className="text-center text-gray-600 mb-10">
          Web Links for Centres of Excellence (COEs)
        </p>

        {/* Table Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-xl rounded-xl overflow-hidden"
        >
          {/* Header */}
          <div className="hidden md:grid grid-cols-[80px_1fr_2fr] bg-[#22227A] text-white font-semibold text-sm">
            <div className="px-6 py-4">S.No</div>
            <div className="px-6 py-4">CoE Category</div>
            <div className="px-6 py-4">Association & Links</div>
          </div>

          {/* Rows */}
          <div className="divide-y">
            {linksData.map((item, index) => (
              <motion.div
                key={item.id}
                whileHover={{ backgroundColor: "#F5F7FF" }}
                className="grid md:grid-cols-[80px_1fr_2fr] gap-4 px-6 py-5 text-sm"
              >
                {/* S.No */}
                <div className="font-semibold text-[#22227A]">{item.id}</div>

                {/* Category */}
                <div className="font-medium text-gray-800">{item.category}</div>

                {/* Link */}
                <div>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#434C9A] hover:text-[#6D77B3] font-medium transition"
                  >
                    {item.linkText}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
