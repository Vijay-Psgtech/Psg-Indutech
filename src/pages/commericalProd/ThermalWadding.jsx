import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Flame,
  CheckCircle2,
  Sparkles,
  User,
  Mail,
  ArrowRight,
  Zap,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  specifications,
  processSteps,
  applications,
  sections,
  quickStats,
  keyBenefits,
  prodImages,
  processImagesMap,
} from "../../components/data/ThermalWaddingData";
import { brandColors, grad } from "../../components/common/brand";
import usePageTitle from "../../hooks/usePageTitle.jsx";

// Fallback image for when images fail to load
const FALLBACK_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23f3f4f6' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='16' fill='%239ca3af' text-anchor='middle' dominant-baseline='middle'%3EImage not available%3C/text%3E%3C/svg%3E";

// ✅ Image component with fallback — navigate & handleContactClick removed from here
const ImageWithFallback = ({ src, alt, className, ...props }) => {
  const [imageSrc, setImageSrc] = useState(src);

  const handleError = () => {
    setImageSrc(FALLBACK_IMAGE);
    console.warn(`Failed to load image: ${src}`);
  };

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      onError={handleError}
      {...props}
    />
  );
};

// Animated background gradient
const AnimatedBackground = ({ isHovered }) => (
  <div className="absolute inset-0 overflow-hidden rounded-3xl">
    <motion.div
      className="absolute -inset-full opacity-30"
      animate={{
        backgroundPosition: isHovered ? ["0% 0%", "100% 100%"] : "0% 0%",
      }}
      transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      style={{
        background: `linear-gradient(45deg, ${brandColors.accent}20, ${brandColors.primary}20)`,
        backgroundSize: "400% 400%",
      }}
    />
  </div>
);

// Premium Process Step Card
const ProcessStepCard = ({ step, index, imageUrl, isEven }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = step.icon;
  const stepNumber = index + 1;
  const isLast = index === processSteps.length - 1;

  const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="relative"
    >
      {/* Connecting Arrow */}
      {!isLast && (
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 -bottom-16 z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowRight
              className="text-transparent -rotate-90"
              size={40}
              style={{ stroke: `${brandColors.accent}`, strokeWidth: 1.5 }}
            />
          </motion.div>
        </motion.div>
      )}

      {/* Main Card Container */}
      <div
        className={`flex flex-col ${isEven ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-12 items-stretch mb-24 lg:mb-32`}
      >
        {/* Image Section */}
        <motion.div
          className="flex-1 relative overflow-hidden rounded-3xl shadow-2xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <AnimatedBackground isHovered={isHovered} />

          <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-3xl bg-gray-100">
            <motion.div
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.6 }}
            >
              <ImageWithFallback
                src={imageUrl}
                alt={step.name}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </motion.div>

            <motion.div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)`,
              }}
              animate={{ opacity: isHovered ? 0.6 : 0.3 }}
              transition={{ duration: 0.3 }}
            />

            {/* Step Number Badge */}
            <motion.div
              className="absolute top-6 right-6"
              animate={{ y: isHovered ? -8 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl text-white shadow-lg backdrop-blur-md"
                style={{
                  background: `linear-gradient(135deg, ${brandColors.accent}, ${brandColors.primary})`,
                }}
              >
                {String(stepNumber).padStart(2, "0")}
              </div>
            </motion.div>

            {/* Icon Badge */}
            <motion.div
              className="absolute bottom-6 left-6"
              animate={{ y: isHovered ? 8 : 0, x: isHovered ? -8 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-md"
                style={{ background: `rgba(255, 255, 255, 0.95)` }}
              >
                <Icon
                  className="w-7 h-7"
                  style={{ color: brandColors.accent }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="flex-1 flex flex-col justify-center"
          initial={{ opacity: 0, x: isEven ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
          viewport={{ once: true }}
        >
          {/* Step Indicator */}
          <motion.div
            className="inline-flex items-center gap-2 mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
            viewport={{ once: true }}
          >
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: brandColors.accent }}
            />
            <span
              className="text-xs font-bold tracking-widest uppercase"
              style={{ color: brandColors.accent }}
            >
              Step {stepNumber}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h3
            className="text-4xl lg:text-5xl font-black mb-4 leading-tight"
            style={{ color: brandColors.primary }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
            viewport={{ once: true }}
          >
            {step.name}
          </motion.h3>

          {/* Description */}
          <motion.p
            className="text-lg text-slate-600 mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
            viewport={{ once: true }}
          >
            {step.desc}
          </motion.p>

          {/* Features List */}
          <motion.div
            className="space-y-3 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
            viewport={{ once: true }}
          >
            {[
              `Advanced ${step.name.toLowerCase()} technology`,
              `Precision control for consistency`,
              `Enhanced thermal efficiency`,
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.2 + 0.4 + i * 0.1,
                }}
                viewport={{ once: true }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Zap
                    size={18}
                    style={{ color: brandColors.accent }}
                    className="shrink-0"
                  />
                </motion.div>
                <span className="text-slate-700 font-medium">{feature}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Learn More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl backdrop-blur-md border font-semibold text-white transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, ${brandColors.accent}20, ${brandColors.primary}20)`,
                borderColor: `${brandColors.accent}40`,
              }}
              whileHover={{
                scale: 1.05,
                background: `linear-gradient(135deg, ${brandColors.accent}40, ${brandColors.primary}40)`,
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span style={{ color: brandColors.primary }}>Learn More</span>
              <motion.div
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronRight size={20} style={{ color: brandColors.accent }} />
              </motion.div>
            </motion.button>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            className="mt-12 space-y-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between text-xs font-semibold">
              <span style={{ color: brandColors.primary }}>
                Process Completion
              </span>
              <span className="text-slate-500">
                {Math.round(((index + 1) / processSteps.length) * 100)}%
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${brandColors.accent}, ${brandColors.primary})`,
                }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{
                  duration: 1,
                  delay: index * 0.2 + 0.6,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Main Component
export default function ThermalBondingPremium() {
  usePageTitle("Thermal Bonding process");
  const [activeSection, setActiveSection] = useState("overview");
  const contactRef = useRef(null);
  const navigate = useNavigate(); // ✅ Moved to top of main component

  // ✅ Moved here so it's accessible wherever called in this component
  const handleContactClick = () => {
    navigate("/contact", {
      state: {
        recipientEmail: "mfr1.int@psgtech.ac.in",
        service: "Thermal Wadding",
        source: "Thermal Wadding Page",
      },
    });
  };

  const handleContactScroll = () => {
    setTimeout(() => {
      contactRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50 text-left">
      {/* Hero Section */}
      <header className="relative overflow-hidden h-[480px] flex items-center bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
        <div
          className="absolute inset-0 w-full h-full bg-center bg-cover md:bg-fixed bg-no-repeat z-0"
          style={{
            backgroundImage: `url('/images/ThermalWadding/thermal-wadding.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative mx-auto px-4 sm:px-6 lg:px-8 w-full sm:mt-50">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative hidden md:block"
            >
              <div className="absolute inset-0 bg-orange-400/20 blur-xl rounded-2xl" />
            </motion.div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex-1 text-left"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3 leading-tight drop-shadow-lg">
                Thermal Bonding Machine
              </h1>
              <p className="text-sm md:text-base text-cyan-100 font-medium">
                Heat/Melt Bonding | Wadding Technology
              </p>
              <p className="text-sm text-gray-200 mt-2 max-w-xl">
                Advanced thermal fusion process for superior nonwoven fabric
                bonding
              </p>

              <div className="mt-6 flex gap-4">
                <button
                  className="px-6 py-3 rounded-lg text-white font-semibold shadow-lg transition"
                  onClick={() => setActiveSection("process")}
                  style={{ background: `${grad.subtle}` }}
                >
                  View Process
                </button>
                <button
                  className="px-6 py-3 rounded-lg border border-white text-white hover:bg-white hover:text-black transition"
                  onClick={handleContactScroll}
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Side Navigation */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-8 space-y-2">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <motion.button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl smooth-all text-left ${
                      activeSection === section.id
                        ? "text-white shadow-lg"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                    style={
                      activeSection === section.id
                        ? { background: `${grad.subtle}` }
                        : {}
                    }
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-bold">{section.label}</span>
                  </motion.button>
                );
              })}
            </div>
          </aside>

          {/* Mobile Navigation */}
          <div className="lg:hidden w-full mb-8">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <motion.button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl smooth-all whitespace-nowrap ${
                      activeSection === section.id
                        ? "text-white shadow-lg"
                        : "bg-slate-100 text-slate-700"
                    }`}
                    style={
                      activeSection === section.id
                        ? { background: `${grad.subtle}` }
                        : {}
                    }
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-bold text-sm">{section.label}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {/* Process Section */}
            {activeSection === "process" && (
              <section className="py-12">
                {/* Section Header */}
                <motion.div
                  className="text-center mb-20"
                  initial={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full backdrop-blur-md border"
                    style={{
                      background: `${brandColors.accent}10`,
                      borderColor: `${brandColors.accent}30`,
                    }}
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: brandColors.accent }}
                    />
                    <span
                      className="text-sm font-bold tracking-wider uppercase"
                      style={{ color: brandColors.accent }}
                    >
                      Heat & Precision
                    </span>
                  </motion.div>

                  <h2
                    className="text-5xl lg:text-6xl font-black mb-6 leading-tight"
                    style={{ color: brandColors.primary }}
                  >
                    Complete Thermal Bonding{" "}
                    <span
                      style={{
                        background: `linear-gradient(135deg, ${brandColors.accent}, ${brandColors.primary})`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Process
                    </span>
                  </h2>

                  <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                    Discover each stage of our thermal bonding manufacturing
                    process
                  </p>
                </motion.div>

                {/* Process Steps */}
                <div className="relative">
                  {processSteps.map((step, index) => (
                    <ProcessStepCard
                      key={step.id}
                      step={step}
                      index={index}
                      imageUrl={processImagesMap[index]}
                      isEven={index % 2 === 0}
                    />
                  ))}
                </div>

                {/* Completion Card */}
                <motion.div
                  className="mt-20"
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div
                    className="relative overflow-hidden rounded-3xl p-12 lg:p-16 backdrop-blur-md"
                    style={{
                      background: `linear-gradient(135deg, ${brandColors.primary}10, ${brandColors.accent}10)`,
                      border: `2px solid ${brandColors.tertiary}30`,
                    }}
                  >
                    <div className="absolute inset-0 opacity-50">
                      <div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(135deg, ${brandColors.accent}20, transparent)`,
                        }}
                      />
                    </div>

                    <div className="relative z-10">
                      <motion.div
                        className="flex items-start gap-4 mb-6"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{
                            background: `linear-gradient(135deg, ${brandColors.accent}, ${brandColors.primary})`,
                          }}
                        >
                          <Zap className="w-6 h-6 text-white" />
                        </div>
                        <h3
                          className="text-3xl lg:text-4xl font-black"
                          style={{ color: brandColors.primary }}
                        >
                          Thermally Bonded Excellence
                        </h3>
                      </motion.div>

                      <motion.p
                        className="text-lg text-slate-700 max-w-3xl mb-8 leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: true }}
                      >
                        Our precision thermal bonding process fuses fibre webs
                        at crossover points using controlled heat (120-200°C).
                        This creates uniform, durable nonwoven fabric with
                        excellent structural integrity and consistent quality.
                      </motion.p>

                      <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        viewport={{ once: true }}
                      >
                        {[
                          { label: "Heat Range", value: "120-200°C" },
                          { label: "Chamber Length", value: "3 meters" },
                          { label: "Output Quality", value: "Premium" },
                        ].map((stat, i) => (
                          <motion.div
                            key={i}
                            className="p-6 rounded-2xl backdrop-blur-md border"
                            style={{
                              background: `${brandColors.accent}10`,
                              borderColor: `${brandColors.accent}30`,
                            }}
                            whileHover={{
                              scale: 1.05,
                              borderColor: `${brandColors.accent}60`,
                            }}
                          >
                            <div
                              className="text-sm font-bold tracking-wider uppercase mb-2"
                              style={{ color: brandColors.accent }}
                            >
                              {stat.label}
                            </div>
                            <div
                              className="text-2xl font-black"
                              style={{ color: brandColors.primary }}
                            >
                              {stat.value}
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </section>
            )}

            {/* Overview Section */}
            {activeSection === "overview" && (
              <div className="space-y-12 py-12">
                <motion.div
                  className="rounded-3xl p-10 border-2 shadow-sm"
                  style={{
                    background: `linear-gradient(135deg, ${brandColors.primary}08, ${brandColors.accent}08)`,
                    borderColor: `${brandColors.tertiary}40`,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2
                    className="text-4xl font-extrabold mb-6"
                    style={{ color: brandColors.primary }}
                  >
                    Thermal Bonding (Heat/Melt Bonding)
                  </h2>
                  <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
                    <p>
                      <span className="font-semibold text-slate-800">
                        Thermal bonding,
                      </span>{" "}
                      also known as heat bonding or melt bonding, is a process
                      in which a fibre web is fused at the fibre crossover
                      points through controlled heat application.
                    </p>
                    <p>
                      The oven chamber is 3 meters long with operating
                      temperatures between 120°C and 200°C, depending on fibre
                      composition and required bonding strength.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                    {quickStats.map((stat, idx) => (
                      <motion.div
                        key={idx}
                        className="bg-white/10 backdrop-blur-sm border border-black/30 rounded-xl p-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="text-black text-sm font-semibold mb-1">
                          {stat.label}
                        </div>
                        <div
                          className="text-2xl font-black"
                          style={{ color: brandColors.secondary }}
                        >
                          {stat.value}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            )}

            {/* Specifications Section */}
            {activeSection === "specifications" && (
              <div className="space-y-12 py-12">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2
                    className="text-4xl font-black mb-4"
                    style={{ color: brandColors.primary }}
                  >
                    Technical Specifications
                  </h2>
                  <p className="text-lg text-slate-600">
                    Detailed specifications and performance capabilities
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <motion.div
                    className="relative rounded-2xl overflow-hidden shadow-xl border flex items-center justify-center bg-gray-100"
                    style={{ borderColor: `${brandColors.tertiary}40` }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <ImageWithFallback
                      src="/images/ThermalWadding/thermal-wadding.jpg"
                      alt="Thermal Wadding"
                      className="w-full h-64 object-contain p-4"
                      loading="lazy"
                    />
                  </motion.div>

                  <motion.div
                    className="rounded-2xl border-2 overflow-hidden shadow-md"
                    style={{
                      borderColor: `${brandColors.tertiary}30`,
                      background: `linear-gradient(135deg, ${brandColors.primary}03, ${brandColors.accent}05)`,
                    }}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-slate-100/50">
                          <th className="p-4 text-sm font-semibold uppercase text-slate-500 text-left">
                            Parameter
                          </th>
                          <th className="p-4 text-sm font-semibold uppercase text-slate-500">
                            Details
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            label: "Production Capacity",
                            value: specifications.capacity,
                          },
                          {
                            label: "Fiber Denier",
                            value: specifications.denier,
                          },
                          { label: "GSM Range", value: specifications.gsm },
                          {
                            label: "Temperature Range",
                            value: specifications.temperature,
                          },
                          {
                            label: "Chamber Length",
                            value: specifications.chamberLength,
                          },
                          { label: "Minimum Order", value: specifications.moq },
                        ].map((row, idx) => (
                          <tr
                            key={idx}
                            className="border-t"
                            style={{ borderColor: `${brandColors.tertiary}30` }}
                          >
                            <td className="p-4 font-medium text-slate-700">
                              {row.label}
                            </td>
                            <td
                              className="p-4 font-bold"
                              style={{ color: brandColors.primary }}
                            >
                              {row.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </motion.div>
                </div>

                {/* Raw Materials Section */}
                <div
                  className="rounded-2xl p-4 sm:p-8 border-2 shadow-sm"
                  style={{ borderColor: `${brandColors.tertiary}40` }}
                >
                  <h3
                    className="text-lg sm:text-2xl font-black mb-6"
                    style={{ color: brandColors.primary }}
                  >
                    Raw Materials
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {specifications.materials.map((material, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl text-center border transition-all duration-300 hover:shadow-md"
                        style={{
                          background: `linear-gradient(135deg, ${brandColors.primary}08, ${brandColors.accent}08)`,
                          border: `2px solid ${brandColors.tertiary}30`,
                        }}
                      >
                        <div
                          className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: `${brandColors.accent}15` }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke={brandColors.accent}
                            className="w-5 h-5 sm:w-6 sm:h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 2c1.657 0 3 1.343 3 3v2a3 3 0 01-6 0V5c0-1.657 1.343-3 3-3zM6 10a6 6 0 1112 0v8a6 6 0 11-12 0v-8z"
                            />
                          </svg>
                        </div>
                        <div
                          className="text-sm font-semibold"
                          style={{ color: brandColors.primary }}
                        >
                          {material}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto mb-16 px-4">
                  {prodImages.map((img, i) => (
                    <div
                      key={i}
                      className="relative group rounded-2xl overflow-hidden shadow-lg transform-gpu"
                    >
                      <img
                        src={img.img}
                        alt={img.label}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-56 sm:h-64 object-cover transition-transform duration-300 group-hover:scale-105 will-change-transform"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <p className="text-white font-semibold">{img.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Applications Section */}
            {activeSection === "applications" && (
              <div className="space-y-12 py-12">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2
                    className="text-4xl font-black mb-4"
                    style={{ color: brandColors.primary }}
                  >
                    Applications & Benefits
                  </h2>
                  <p className="text-lg text-slate-600">
                    Thermal bonding solutions for diverse industries
                  </p>
                </motion.div>

                {/* Applications Grid */}
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {applications.map((app, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.08 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.03 }}
                      className="relative group rounded-3xl overflow-hidden shadow-xl border"
                      style={{ borderColor: `${brandColors.tertiary}40` }}
                    >
                      {/* Image */}
                      <ImageWithFallback
                        src={app.img}
                        alt={app.label}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

                      {/* Label */}
                      <div className="absolute bottom-0 p-6">
                        <div className="flex items-center gap-3">
                          <div
                            className="p-2 rounded-lg"
                            style={{ background: `${grad.subtle}` }}
                          >
                            <ArrowRight className="w-5 h-5 text-white" />
                          </div>
                          <h3 className="text-white text-xl font-bold tracking-wide">
                            {app.label}
                          </h3>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Key Benefits */}
                <motion.div
                  className="mt-16"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3
                    className="text-3xl font-black mb-8"
                    style={{ color: brandColors.primary }}
                  >
                    Key Benefits
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {keyBenefits.map((benefit, idx) => (
                      <motion.div
                        key={idx}
                        className="bg-white rounded-2xl p-8 shadow-lg border-2"
                        style={{ borderColor: `${brandColors.tertiary}30` }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{
                          y: -8,
                          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                        }}
                      >
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                          style={{
                            background: `linear-gradient(135deg, ${brandColors.accent}, ${brandColors.primary})`,
                          }}
                        >
                          <Sparkles className="w-6 h-6 text-white" />
                        </div>
                        <h4
                          className="text-xl font-bold mb-3"
                          style={{ color: brandColors.primary }}
                        >
                          {benefit.title}
                        </h4>
                        <p className="text-slate-600">{benefit.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Contact Section */}
      <div
        ref={contactRef}
        className="mt-10 sm:mt-20 py-8 sm:py-16 border-t border-indigo-100"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <p className="font-medium mb-2">For any enquiries, please contact:</p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-4 sm:px-6 py-2 sm:py-3 w-full sm:w-auto">
              <p
                className="text-base font-bold flex items-center justify-center gap-2"
                style={{ color: brandColors.primary }}
              >
                <Zap className="w-4 h-4" />
              </p>
              <div className="flex flex-col items-center justify-center mt-3 space-y-2 text-gray-700">
                <div className="flex items-center gap-2">
                  {/* ✅ Removed duplicate Mail icon — handleContactClick now accessible here */}
                  <button
                    onClick={handleContactClick}
                    className="flex items-center gap-2 font-medium hover:text-blue-600 transition-all cursor-pointer"
                    style={{ color: brandColors.secondary }}
                  >
                    <Mail className="w-4 h-4" />
                    <span className="underline">mfr1.int@psgtech.ac.in</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}