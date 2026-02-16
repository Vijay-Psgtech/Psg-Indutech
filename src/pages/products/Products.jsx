import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { productsData } from "../../components/data/ProductsData";
import { Check, ChevronDown, ChevronUp, ExternalLink, Info, Layers, Palette, Ruler, ShieldCheck } from "lucide-react";
import { brandColors, gradText } from "../../components/common/brand";

const Products = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6"
            style={{ color: brandColors.primary }}
          >
            Our <span style={gradText}>Products</span>
          </h1>
          <div
            className="w-16 h-1 mx-auto rounded-full mb-8"
            style={{
              background: "linear-gradient(90deg, var(--color-cyan), var(--color-purple))",
            }}
          ></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Discover our premium range of industrial and home textile solutions, designed for durability and performance.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          {productsData.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-500 flex flex-col h-full"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                
                {/* ID Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-indigo-900 shadow-sm border border-white/50">
                    #{product.id.toString().padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Content Header */}
              <div className="p-6 pb-2">
                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
              </div>

              {/* Scrollable/Expandable Details Area */}
              <div className="flex-grow px-6 pb-4">
                <div className="space-y-4">
                  
                  {/* Key Attributes - Always Visible */}
                  <div className="flex flex-wrap gap-2">
                    {product.material && (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-medium border border-indigo-100">
                        <Layers className="w-3 h-3 mr-1" />
                        {product.material.length > 25 ? "Premium Material" : product.material}
                      </span>
                    )}
                    {product.colors && (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-purple-50 text-purple-700 text-xs font-medium border border-purple-100">
                        <Palette className="w-3 h-3 mr-1" />
                        {product.colors.length} Colors
                      </span>
                    )}
                    {product.size && (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-100">
                        <Ruler className="w-3 h-3 mr-1" />
                        {Array.isArray(product.size) ? `${product.size.length} Sizes` : "Standard Size"}
                      </span>
                    )}
                  </div>

                  {/* Expandable Content Toggle */}
                  <button
                    onClick={() => toggleExpand(product.id)}
                    className="w-full mt-2 py-2 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-indigo-600 border-t border-slate-100 transition-colors"
                  >
                    <span>{expandedId === product.id ? "Show Less" : "View Details & Specs"}</span>
                    {expandedId === product.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  <AnimatePresence>
                    {expandedId === product.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-2 space-y-5 text-lg">
                          
                          {/* Features List */}
                          {product.features && (
                            <div className="space-y-2">
                              <h4 className="font-semibold text-slate-900 flex items-center gap-2 text-sm uppercase tracking-wide">
                                <ShieldCheck className="w-3.5 h-3.5 text-indigo-500" /> Key Features
                              </h4>
                              <ul className="space-y-1.5 pl-1">
                                {product.features.map((feature, idx) => (
                                  <li key={idx} className="flex items-start text-slate-600 text-sm leading-relaxed">
                                    <Check className="w-3 h-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {/* Colors list */}
                          {product.colors && (
                            <div className="space-y-2">
                              <h4 className="font-semibold text-slate-900 flex items-center gap-2 text-sm uppercase tracking-wide">
                                <Palette className="w-3.5 h-3.5 text-indigo-500" /> Available Colors
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {product.colors.map((color, idx) => (
                                  <span key={idx} className="px-2 py-1 bg-slate-50 text-slate-600 text-[12px] font-medium rounded border border-slate-200">
                                    {color}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Sizes List - if complex */}
                          {product.size && Array.isArray(product.size) && (
                            <div className="space-y-2">
                               <h4 className="font-semibold text-slate-900 flex items-center gap-2 text-sm uppercase tracking-wide">
                                <Ruler className="w-3.5 h-3.5 text-indigo-500" />Available Sizes</h4>
                               <div className="flex flex-wrap gap-1.5">
                                 {product.size.map((s, i) => (
                                   <span key={i} className="px-2 py-1 bg-slate-50 text-slate-600 text-[12px] font-medium rounded border border-slate-200">
                                     {s}
                                   </span>
                                 ))}
                               </div>
                            </div>
                          )}

                          {/* Specific Details Map */}
                          {product.details && (
                            <div className="bg-slate-50/80 rounded-lg p-3 border border-slate-100">
                              <h4 className="font-semibold text-slate-900 text-xs mb-2 flex items-center gap-1 uppercase tracking-wide">
                                <Info className="w-3.5 h-3.5 text-indigo-500" /> Specifications
                              </h4>
                              <div className="space-y-2">
                                {Object.entries(product.details).map(([key, value], i) => (
                                  <div key={key} className="flex justify-between text-xs border-b border-slate-200/50 pb-1.5 last:border-0 last:pb-0">
                                    <span className="font-medium text-slate-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                                    <span className="text-slate-700 text-right font-medium max-w-[60%] ml-2">
                                      {Array.isArray(value) ? value.join(", ") : value}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Variants Table Style */}
                          {product.variants && (
                             <div className="space-y-2">
                               <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wide">Product Variants</h4>
                               <div className="overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide">
                                 <div className="flex gap-3">
                                   {product.variants.map((variant, i) => (
                                     <div key={i} className="flex-shrink-0 w-48 bg-white border border-slate-200 rounded-lg p-3 shadow-sm text-xs">
                                       <div className="font-bold text-indigo-700 mb-1 border-b border-indigo-100 pb-1">{variant.type}</div>
                                       {Object.entries(variant).filter(([k]) => k !== 'type').map(([k, v]) => (
                                         <div key={k} className="flex justify-between py-1 border-b border-slate-50 last:border-0">
                                           <span className="text-slate-400 capitalize">{k.replace(/([A-Z])/g, ' $1').trim()}</span>
                                           <span className="text-slate-700 font-medium truncate ml-2 max-w-[80px]" title={v}>{v}</span>
                                         </div>
                                       ))}
                                     </div>
                                   ))}
                                 </div>
                               </div>
                             </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 pt-2 mt-auto">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center py-3.5 px-4 bg-slate-900 hover:bg-indigo-600 text-white rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg shadow-slate-200 hover:shadow-indigo-200/50"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Contact for Quote
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Bottom CTA */}
         <div className="mt-24 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Can't find what you're looking for?</h2>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">We specialize in custom manufacturing solutions tailored to your specific needs. Reach out to our engineering team.</p>
            <a href="/contact" className="inline-flex items-center text-indigo-600 font-bold hover:text-indigo-800 transition-colors uppercase tracking-wide text-sm">
              Contact our team <ExternalLink className="w-4 h-4 ml-2" />
            </a>
         </div>
      </div>
    </div>
  );
};

export default Products;
