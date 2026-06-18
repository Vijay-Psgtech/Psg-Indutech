import {
  ThermometerSun,
  Wind,
  Layers,
  Sparkles,
  Leaf,
  Factory,
  Target,
  ThermometerSnowflake,
  Zap,
  CheckCircle2,
} from "lucide-react";

// ============================================
// IMAGE CONFIGURATION
// ============================================
// All images are served from the public folder
// Location: /public/images/ThermalWadding/
// No imports needed - just use URL strings

// Product images - using public folder URLs
export const prodImages = [
  { label: "Thermal Wadding", img: "/images/ThermalWadding/img1.JPG" },
  { label: "Thermal Wadding Detail", img: "/images/ThermalWadding/img2.jpg" },
];

// Process step images mapping
export const processImagesMap = {
  0: "/images/NeedlePunching/Card L 636.jpeg",
  1: "/images/NeedlePunching/Carding.jpeg",
  2: "/images/NeedlePunching/Crosslapper.jpeg",
  3: "/images/NeedlePunching/Chute.jpeg",
  4: "/images/NeedlePunching/Slitting.jpeg",
};

// ============================================
// NAVIGATION SECTIONS
// ============================================
export const sections = [
  { id: "overview", label: "Overview", icon: Leaf },
  { id: "process", label: "Process", icon: Factory },
  { id: "specifications", label: "Specifications", icon: Layers },
  { id: "applications", label: "Applications", icon: Target },
];

// ============================================
// QUICK STATS
// ============================================
export const quickStats = [
  { label: "Temperature Range", value: "120°C – 200°C" },
  { label: "Chamber Length", value: "3 meters" },
  { label: "Capacity", value: "40 kg/hr" },
  { label: "GSM Range", value: "50 – 500 GSM" },
];

// ============================================
// TECHNICAL SPECIFICATIONS
// ============================================
export const specifications = {
  capacity: "Up to 40 kg/hour",
  materials: ["Polyester", "Lowmelt polyester"],
  denier: "0.8D to 15D",
  gsm: "50 – 500 GSM",
  temperature: "120°C – 200°C",
  chamberLength: "3 meters",
  moq: "100 kg",
};

// ============================================
// APPLICATIONS
// ============================================
export const applications = [
  {
    label: "Thermal Insulation",
    img: "/images/products/thermalinsolation.webp",
  },
  {
    label: "Acoustic Insulation",
    img: "/images/products/acousticinsulation.webp",
  },
  {
    label: "Automotive Applications",
    img: "/images/products/automotive.jpg",
  },
  {
    label: "Construction Materials",
    img: "/images/products/construction.jpg",
  },
  {
    label: "Packaging Solutions",
    img: "/images/products/packagingsolutions.jpg",
  },
  {
    label: "Filtration Media",
    img: "/images/products/filtarationmedia.jpg",
  },
];

// ============================================
// PROCESS STEPS
// ============================================
export const processSteps = [
  {
    id: 1,
    name: "Carding & Cross-Lapping",
    icon: Factory,
    desc: "Fiber web preparation similar to needle-punched fabric production. The raw fibers are carded and cross-lapped to create a uniform web structure.",
  },
  {
    id: 2,
    name: "Oven Entry",
    icon: Layers,
    desc: "Cross-laid web is conveyed into the single-chamber oven. The web is positioned on a conveyor belt for consistent heat application.",
  },
  {
    id: 3,
    name: "Heat Application",
    icon: ThermometerSun,
    desc: "Gas burners provide controlled temperature for fiber softening. Temperature ranges from 120°C to 200°C depending on material composition.",
  },
  {
    id: 4,
    name: "Bonding & Cooling",
    icon: Zap,
    desc: "Thermoplastic fibers fuse at intersection points creating permanent bonds. The fabric then cools on the exit conveyor.",
  },
  {
    id: 5,
    name: "Finishing & Slitting",
    icon: ThermometerSnowflake,
    desc: "Uniform bonded fabric is slitted to required widths and wound on rolls. Quality inspection ensures consistent output.",
  },
  // {
  //   id: 6,
  //   name: "Quality Assurance",
  //   icon: CheckCircle2,
  //   desc: "Final product undergoes rigorous testing for strength, consistency, and quality standards. Certified output ready for delivery.",
  // },
];

// ============================================
// KEY BENEFITS
// ============================================
export const keyBenefits = [
  {
    title: "Uniform Bonding",
    desc: "Consistent thermal bonding across the entire web ensures superior fabric strength and durability.",
  },
  {
    title: "Process Safety",
    desc: "Controlled oven environment with safety measures and temperature regulation for operator safety.",
  },
  {
    title: "Energy Efficiency",
    desc: "Optimized heat chamber and controlled temperature application reduce energy consumption while maintaining quality.",
  },
  {
    title: "Versatile Materials",
    desc: "Compatible with polyester and low-melt polyester fibers in various denier ranges.",
  },
  {
    title: "High Output",
    desc: "Capacity up to 40 kg/hour with consistent quality across different GSM ranges.",
  },
  {
    title: "Customizable Properties",
    desc: "Adjustable temperature and web speed allow for customized bonding strength and fabric characteristics.",
  },
];

// ============================================
// EXPORT CHECK - All data exports properly
// ============================================
// Exported: prodImages
// Exported: processImagesMap
// Exported: sections
// Exported: quickStats
// Exported: specifications
// Exported: applications
// Exported: processSteps
// Exported: keyBenefits