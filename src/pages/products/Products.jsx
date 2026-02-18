import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { productsData } from "../../components/data/ProductsData";
import {
  Check,
  ExternalLink,
  Info,
  Layers,
  Palette,
  Ruler,
  ShieldCheck,
  ArrowLeft,
  Share2,
  ZoomIn,
} from "lucide-react";
import { brandColors, gradText } from "../../components/common/brand";
import { useParams } from "react-router-dom";

const Products = () => {
  const { id } = useParams();
  const [selectedProductId, setSelectedProductId] = useState(id || null);

  // Scroll to top when switching views or products
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedProductId]);

  const selectedProduct = productsData.find((p) => p.id === Number(selectedProductId));

  // Animation Variants
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0 },
  };

  const cardVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  if (selectedProduct) {
    return (
      <ProductDetailView
        product={selectedProduct}
        onBack={() => setSelectedProductId(null)}
        onSelectProduct={setSelectedProductId}
      />
    );
  }

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
          <h1
            className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6"
            style={{ color: brandColors.primary }}
          >
            Our <span style={gradText}>Products</span>
          </h1>
          <div className="w-16 h-1 mx-auto rounded-full mb-8 bg-gradient-to-r from-cyan-400 to-purple-500"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Discover our premium range of industrial and home textile solutions,
            designed for durability and performance.
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
              onClick={() => setSelectedProductId(product.id)}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-500 flex flex-col h-full cursor-pointer relative"
            >
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-indigo-900 shadow-sm border border-white/50">
                    #{product.id.toString().padStart(2, "0")}
                  </span>
                </div>
                {/* Hover Overlay with "View Details" */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-[2px]">
                  <span className="bg-white/90 text-indigo-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Details
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {/* Color dots preview */}
                    {product.colors &&
                      product.colors
                        .slice(0, 3)
                        .map((color, i) => (
                          <div
                            key={i}
                            className="w-6 h-6 rounded-full border-2 border-white bg-slate-200"
                            title={color}
                          />
                        ))}
                    {product.colors && product.colors.length > 3 && (
                      <div className="w-6 h-6 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500">
                        +{product.colors.length - 3}
                      </div>
                    )}
                  </div>
                  <span className="text-indigo-600 font-semibold text-sm flex items-center">
                    Explore <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Can't find what you're looking for?
          </h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            We specialize in custom manufacturing solutions tailored to your
            specific needs. Reach out to our team.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center text-indigo-600 font-bold hover:text-indigo-800 transition-colors uppercase tracking-wide text-sm"
          >
            Contact our team <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

// --- Product Detail Sub-Component ---

const ProductDetailView = ({ product, onBack, onSelectProduct }) => {
  // Mocking multiple images for the gallery since data has only one
  const galleryImages = [
    product.image,
    product.image, // Duplicate for demo
    product.image, // Duplicate for demo
  ];

  const [activeImage, setActiveImage] = useState(0);

  // Filter "You Might Also Like" - random 3 other products
  const relatedProducts = productsData
    .filter((p) => p.id !== product.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Navigation */}
        <button
          onClick={onBack}
          className="group flex items-center text-slate-500 hover:text-indigo-600 font-medium mb-8 transition-colors"
        >
          <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center mr-3 shadow-sm group-hover:shadow-md transition-all">
            <ArrowLeft className="w-5 h-5" />
          </div>
          Back to Products
        </button>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Left Column: Images (Side-by-Side Main Image & Gallery) */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-200/50 aspect-[4/3] group"
            >
              <img
                src={galleryImages[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur rounded-full shadow-sm cursor-pointer hover:scale-110 transition-transform">
                <ZoomIn className="w-5 h-5 text-slate-700" />
              </div>
            </motion.div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-4">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative rounded-xl overflow-hidden aspect-square border-2 transition-all duration-300 ${
                    activeImage === idx
                      ? "border-indigo-600 ring-2 ring-indigo-200 ring-offset-2"
                      : "border-transparent opacity-70 hover:opacity-100 hover:border-slate-300"
                  }`}
                >
                  <img
                    src={img}
                    alt={`View ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Product Info & Specs */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/40 border border-slate-100 h-full flex flex-col"
            >
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-100 uppercase tracking-wider">
                    Product ID: #{product.id.toString().padStart(2, "0")}
                  </span>
                  <button className="text-slate-400 hover:text-indigo-600 transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
                <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 leading-tight">
                  {product.name}
                </h1>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Key Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {product.material && (
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <Layers className="w-5 h-5 text-indigo-500 mb-2" />
                    <div className="text-xs text-slate-500 font-semibold uppercase">
                      Material
                    </div>
                    <div
                      className="text-sm font-bold text-slate-800 line-clamp-1"
                      title={product.material}
                    >
                      {product.material}
                    </div>
                  </div>
                )}
                {product.colors && (
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <Palette className="w-5 h-5 text-purple-500 mb-2" />
                    <div className="text-xs text-slate-500 font-semibold uppercase">
                      Colors
                    </div>
                    <div className="text-sm font-bold text-slate-800">
                      {product.colors.length} Available
                    </div>
                  </div>
                )}
              </div>

              {/* Specs & Features Tabs/List */}
              <div className="space-y-6 mb-8 flex-grow">
                {/* Features */}
                {product.features && (
                  <div>
                    <h3 className="flex items-center text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">
                      <ShieldCheck className="w-4 h-4 mr-2 text-emerald-500" />{" "}
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {product.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start text-sm text-slate-600"
                        >
                          <Check className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Detailed Specs */}
                {product.details && (
                  <div className="pt-6 border-t border-slate-100">
                    <h3 className="flex items-center text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">
                      <Info className="w-4 h-4 mr-2 text-blue-500" />{" "}
                      Specifications
                    </h3>
                    <div className="grid grid-cols-1 gap-y-2">
                      {Object.entries(product.details).map(([key, value]) => (
                        <div
                          key={key}
                          className="flex justify-between text-sm py-1 border-b border-slate-50 last:border-0"
                        >
                          <span className="text-slate-500 capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}:
                          </span>
                          <span className="ml-2 font-medium text-slate-900 text-right">
                            {Array.isArray(value) ? value.join(", ") : value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Colors */}
                {product.colors && (
                  <div className="pt-6 border-t border-slate-100">
                    <h3 className="flex items-center text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">
                      <Palette className="w-4 h-4 mr-2 text-purple-500" />{" "}
                      Available Colors
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {product.colors.map((c, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Sizes */}
                {product.size && (
                  <div className="pt-6 border-t border-slate-100">
                    <h3 className="flex items-center text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">
                      <Ruler className="w-4 h-4 mr-2 text-orange-500" />{" "}
                      Dimensions
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {Array.isArray(product.size) ? (
                        product.size.map((s, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700"
                          >
                            {s}
                          </span>
                        ))
                      ) : (
                        <span className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                          {product.size}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Variants */}
                {product.variants && (
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wide">
                      Product Variants
                    </h4>
                    <div className="overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide">
                      <div className="flex sm:flex-wrap gap-4">
                        {product.variants.map((variant, i) => (
                          <div
                            key={i}
                            className="flex-shrink-0 w-48 bg-white border border-slate-200 rounded-lg p-3 shadow-sm text-xs"
                          >
                            <div className="font-bold text-indigo-700 mb-1 border-b border-indigo-100 pb-1">
                              {variant.type}
                            </div>
                            {Object.entries(variant)
                              .filter(([k]) => k !== "type")
                              .map(([k, v]) => (
                                <div
                                  key={k}
                                  className="flex justify-between py-1 border-b border-slate-50 last:border-0"
                                >
                                  <span className="text-slate-400 capitalize">
                                    {k.replace(/([A-Z])/g, " $1").trim()}
                                  </span>
                                  <span
                                    className="text-slate-700 font-medium truncate ml-2 max-w-[80px]"
                                    title={v}
                                  >
                                    {v}
                                  </span>
                                </div>
                              ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* CTA Action */}
              <div className="mt-auto pt-6">
                <a
                  href="/contact"
                  target="_blank"
                  className="w-full flex items-center justify-center py-4 px-6 bg-slate-900 hover:bg-indigo-600 text-white rounded-xl font-bold text-base transition-all duration-300 shadow-lg shadow-slate-900/20 hover:shadow-indigo-500/30 transform hover:-translate-y-1"
                >
                  Request a Quote <ExternalLink className="w-5 h-5 ml-2" />
                </a>
                <div className="text-center mt-3">
                  <span className="text-xs text-slate-400">
                    Custom sizing available upon request
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 'You Might Also Like' Section */}
        <div className="border-t border-slate-200 pt-16">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              You Might Also Like
            </h2>
            <a
              href="#"
              onClick={onBack}
              className="text-indigo-600 font-semibold text-sm hover:underline"
            >
              View All Products
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => onSelectProduct(item.id)}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 mb-4 border border-slate-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-1">
                  {item.name}
                </h3>
                <p className="text-sm text-slate-500 line-clamp-1">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
