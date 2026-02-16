import {
  Printer,
  Zap,
  Maximize,
  Layers,
  Palette,
  Leaf,
  Target,
} from "lucide-react";

import img1 from "/images/products/_95A0798 - UV print coated fabric.JPG";
import img2 from "/images/products/_95A0807 - UV print Acrylic sheet.JPG";
import img3 from "/images/products/_95A0810 - UV print foam board.JPG";

export const sections = [
  { id: "overview", label: "Overview", icon: Leaf },
  // { id: "process", label: "Process", icon: Factory },
  { id: "specifications", label: "Specifications", icon: Layers },
  { id: "applications", label: "Applications", icon: Target },
];

export const prodImages = [
  { label: "UV Print Coated Fabric", img: img1 },
  { label: "UV print Acrylic Sheet", img: img2 },
  { label: "UV print Foam Board", img: img3 },
];

export const quickStats = [
  {
    label: "Max Print Size",
    value: "10 × 6 ft",
  },
  {
    label: "Capacity",
    value: "32 sq.ft/hr",
  },
  {
    label: "Thickness",
    value: "100 mm",
  },
  {
    label: "Durability",
    value: "2 years",
  },
];

export const inkColors = [
  { name: "Cyan", color: "from-cyan-400 to-cyan-600", hex: "#00BCD4" },
  { name: "Magenta", color: "from-pink-400 to-pink-600", hex: "#E91E63" },
  { name: "Yellow", color: "from-yellow-400 to-yellow-600", hex: "#FFEB3B" },
  { name: "Black", color: "from-gray-700 to-gray-900", hex: "#000000" },
  { name: "Varnish", color: "from-purple-400 to-purple-600", hex: "#9C27B0" },
];

export const features = [
  {
    icon: Layers,
    title: "3D & Embossing Printing",
    description:
      "Create tactile, raised designs with stunning dimensional effects",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Instant UV Curing",
    description: "Immediate drying as ink is printed for maximum efficiency",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Maximize,
    title: "Large Format Capability",
    description:
      "Print sizes up to 10 ft × 6 ft on materials up to 100mm thick",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Palette,
    title: "Superior Color Accuracy",
    description:
      "CMYK + Varnish hybrid inks deliver exceptional color fidelity",
    gradient: "from-green-500 to-emerald-500",
  },
];

export const materials = [
  "Vinyl",
  "Foam board",
  "Acrylic",
  "Metal",
  "Wood",
  "Canvas",
  "Leather",
  "Tiles",
  "Glass",
];

export const applications = [
  {
    category: "Signage",
    items: ["Indoor signs", "Outdoor displays", "Retail graphics"],
  },
  { category: "Decor", items: ["Wall art", "Custom tiles", "Wood prints"] },
  {
    category: "Commercial",
    items: ["Promotional items", "Packaging prototypes", "POS displays"],
  },
  {
    category: "Industrial",
    items: ["Control panels", "Equipment labels", "Safety signs"],
  },
];

export const specifications = {
  modelYear: "2018",
  capacity: "32 sq.ft/hour",
  maxSize: "10 ft × 6 ft",
  printThickness: "Up to 100 mm",
  maxMaterial: "8 ft × 10 ft",
  durability: "Up to 2 years in sunlight (field observed)",
};

export const benefits = [
  "Instant curing for immediate handling",
  "Sharp, high-resolution images",
  "Excellent color accuracy and vibrancy",
  "Strong ink adhesion on diverse materials",
  "Environmentally friendly process",
  "3D and embossing capabilities",
];
