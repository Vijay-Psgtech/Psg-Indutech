import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";

const banners = [
  // "/images/banner/img1.JPG",
  "/images/banner/img2.jpg",
  "/images/banner/img3.JPG",
  "/images/banner/img4.JPG",
  "/images/banner/img5.jpg",
];

const HeroBannerModern = ({ onExploreClick }) => {
  const [current, setCurrent] = useState(0);
  const [hoveredDot, setHoveredDot] = useState(null);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % banners.length),
      6000
    );
    return () => clearInterval(timer);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: i * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Enhanced Transitions */}
      <div className="absolute inset-0 w-full h-full">
        {banners.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 1.15 }}
            animate={{
              opacity: current === i ? 1 : 0,
              scale: current === i ? 1 : 1.15,
            }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={img}
              alt={`banner ${i + 1}`}
              className="w-full h-full object-cover"
              fetchPriority={i === 0 ? "high" : "auto"}
              loading={i === 0 ? "eager" : "lazy"}
            />
          </motion.div>
        ))}

        {/* Premium Gradient Overlays */}
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/85 via-slate-900/60 to-slate-900/30" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 via-transparent to-transparent" />

        {/* Animated Texture Overlay */}
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><defs><pattern id=%22grid%22 width=%2210%22 height=%2210%22 patternUnits=%22userSpaceOnUse%22><path d=%22M 10 0 L 0 0 0 10%22 fill=%22none%22 stroke=%22rgba(255,255,255,0.03)%22 stroke-width=%220.5%22/></pattern></defs><rect width=%22100%22 height=%22100%22 fill=%22url(%23grid)%22/></svg>')] opacity-20"
        />
      </div>

      {/* Decorative Geometric Elements */}
      <motion.div
        className="absolute top-20 right-0 w-96 h-96 bg-linear-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute -bottom-32 left-0 w-80 h-80 bg-linear-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, -40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Animated Line Accent */}
      <motion.div
        className="absolute top-1/4 -left-20 w-96 h-1 bg-linear-to-r from-transparent via-cyan-400 to-transparent opacity-30"
        animate={{ x: [0, 400, 0], opacity: [0.1, 0.4, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Content */}
      <div className="relative z-20 w-full px-4 sm:px-8 lg:px-12 py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <motion.div
            className="space-y-8 md:space-y-10"
            initial="hidden"
            animate="visible"
          >
            {/* Accent Pill */}
            <motion.div
              custom={0}
              variants={textVariants}
              className="flex items-center gap-3 w-fit"
            >
              {/* <div className="w-12 h-12 rounded-full bg-linear-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/50">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-cyan-400 font-semibold tracking-widest text-sm uppercase">
                Premium Collection
              </span> */}
            </motion.div>

            {/* Main Heading */}
            <div className="overflow-hidden">
              <motion.h1
                custom={1}
                variants={textVariants}
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-none tracking-tight"
              >
                Centre of
              </motion.h1>
              <motion.h1
                custom={2}
                variants={textVariants}
                className="mt-3 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-300 via-cyan-400 to-blue-400"
              >
                Excellence
              </motion.h1>
            </div>

            {/* Subheading */}
            <motion.div
              custom={3}
              variants={textVariants}
              className="space-y-3"
            >
              <h2 className="text-2xl sm:text-3xl font-light text-gray-200 tracking-tight">
                Industrial & Home Textiles
              </h2>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-lg font-light">
                Crafting premium fabrics with innovation, precision, and decades of expertise in every thread.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              custom={4}
              variants={textVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.button
                onClick={onExploreClick}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-linear-to-r from-cyan-400 to-blue-500 text-slate-900 rounded-full font-bold text-lg shadow-[0_20px_40px_rgba(34,211,238,0.3)] hover:shadow-[0_30px_60px_rgba(34,211,238,0.4)] transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Explore Collection
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-cyan-300 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </motion.button>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-full border-2 border-cyan-400/50 text-white font-semibold text-lg hover:border-cyan-300 hover:bg-cyan-400/10 transition-all duration-300 backdrop-blur-sm text-center"
              >
                Get in Touch
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              custom={5}
              variants={textVariants}
              className="flex gap-8 pt-8 border-t border-white/10"
            >
              <div>
                <p className="text-3xl font-bold text-cyan-400">50+</p>
                <p className="text-gray-400 text-sm">Years Excellence</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-cyan-400">1000+</p>
                <p className="text-gray-400 text-sm">Premium Designs</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-cyan-400">Global</p>
                <p className="text-gray-400 text-sm">Reach</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Floating Card */}
          {/* <motion.div
            variants={floatingVariants}
            animate="animate"
            className="hidden lg:block"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative group"
            >
              
              <div className="absolute -inset-1 bg-linear-to-r from-cyan-400 via-blue-500 to-cyan-400 rounded-2xl opacity-40 blur-xl group-hover:opacity-60 transition-opacity duration-300" />

              <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl">
               
                <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400/5 rounded-full blur-3xl" />

                <div className="relative space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      Why Choose Us
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Eco-Friendly Production",
                        "Advanced Technology",
                        "Quality Assurance",
                      ].map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          className="flex items-center gap-3 text-gray-300"
                        >
                          <div className="w-2 h-2 rounded-full bg-linear-to-r from-cyan-400 to-blue-500" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                 
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative h-48 bg-linear-to-br from-cyan-500/20 to-blue-500/20 rounded-xl overflow-hidden border border-cyan-400/20 cursor-pointer group/img"
                  >
                    <img
                      src={banners[current]}
                      alt="Featured textile"
                      className="w-full h-full object-cover opacity-60 group-hover/img:opacity-80 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900 to-transparent" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div> */}
        </div>
      </div>

      {/* Bottom Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex items-center gap-6"
        >
          {/* Slide Counter */}
          <div className="text-white/60 text-sm font-mono">
            <span className="text-cyan-400">{String(current + 1).padStart(2, "0")}</span>
            <span className="text-white/40"> / {String(banners.length).padStart(2, "0")}</span>
          </div>

          {/* Dots */}
          <div className="flex gap-2.5">
            {banners.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setCurrent(i)}
                onMouseEnter={() => setHoveredDot(i)}
                onMouseLeave={() => setHoveredDot(null)}
                whileHover={{ scale: 1.2 }}
                className="group relative"
              >
                {/* Outer Ring */}
                <div
                  className={`absolute inset-0 rounded-full transition-all duration-300 ${
                    current === i
                      ? "w-3 h-3 border border-cyan-400"
                      : "w-2 h-2 border border-white/40"
                  }`}
                  style={{
                    transform: hoveredDot === i ? "scale(1.4)" : "scale(1)",
                  }}
                />

                {/* Inner Dot */}
                <motion.div
                  animate={{
                    scale: current === i ? 1 : 0.5,
                    opacity: current === i ? 1 : 0.4,
                  }}
                  className="w-2 h-2 rounded-full bg-linear-to-r from-cyan-400 to-blue-500"
                />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 right-8 z-20 flex flex-col items-center gap-3 opacity-50 hover:opacity-100 transition-opacity duration-300"
      >
        <span className="text-white/70 text-xs tracking-[0.3em] uppercase font-light">
          Explore
        </span>
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-cyan-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroBannerModern;