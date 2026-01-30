import React from "react";
import { motion } from "framer-motion";
import { productsData } from "../../components/data/ProductsData";

const ProductsData = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-indigo-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 lg:mb-20"
        >

          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-slate-900"
            style={{ letterSpacing: "-0.02em", color: "var(--color-deep-indigo)" }}
          >
            Our Products
          </h1>
          <div
            className="w-20 h-1.5 mx-auto rounded-full mb-8"
            style={{
              background:
                "linear-gradient(90deg, var(--color-indigo), var(--color-purple), var(--color-cyan))",
            }}
          ></div>
          <p
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Explore our comprehensive range of high-quality industrial and home
            textile products, engineered with precision, innovation, and sustainability at their core.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {productsData.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-indigo-200 border border-indigo-100 transition-all duration-300"
            >
              <div className="relative h-56 bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-indigo-700 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>

                {product.size && (
                  <div className="mb-2">
                    <h4 className="text-sm font-semibold text-indigo-600">
                      Size:
                    </h4>
                    <ul className="text-gray-700 text-sm list-disc ml-5">
                      {product.size.map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {product.colors && (
                  <div className="mb-2">
                    <h4 className="text-sm font-semibold text-indigo-600">
                      Available Colors:
                    </h4>
                    <p className="text-gray-700 text-sm">
                      {product.colors.join(", ")}
                    </p>
                  </div>
                )}

                {product.material && (
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Material:</strong> {product.material}
                  </p>
                )}

                {product.features && (
                  <div className="mb-2">
                    <h4 className="text-sm font-semibold text-indigo-600">
                      Features:
                    </h4>
                    <ul className="list-disc ml-5 text-gray-700 text-sm space-y-1">
                      {product.features.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {product.details && (
                  <div className="mb-2 border-t border-gray-200 pt-2">
                    <h4 className="text-sm font-semibold text-indigo-600 mb-1">
                      Details:
                    </h4>
                    <ul className="text-gray-700 text-sm list-disc ml-5 space-y-1">
                      {Object.entries(product.details).map(([key, value]) => (
                        <li key={key}>
                          <strong className="capitalize">{key}:</strong>{" "}
                          {Array.isArray(value) ? value.join(", ") : value}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {product.variants && (
                  <div className="border-t border-gray-200 pt-2">
                    <h4 className="text-sm font-semibold text-indigo-600 mb-1">
                      Variants:
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {product.variants.map((variant, i) => (
                        <div key={i} className="mb-2 text-sm text-gray-700">
                          <p>
                            <strong>{variant.type}: </strong> {variant.filter}
                          </p>
                          <p>
                            <strong>Size:</strong> {variant.size}
                          </p>
                          <p>
                            <strong>Weight:</strong> {variant.weight}
                          </p>
                          <p>
                            <strong>Surface Finish:</strong> {variant.surfaceFinish}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsData;