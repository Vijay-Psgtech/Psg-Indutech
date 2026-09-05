import {
  Printer,
  Zap,
  Maximize,
  Layers,
  Palette,
  Leaf,
  Target,
} from "lucide-react";

import img1 from "/images/Uv/Acrylic-printing.jpg";
import img2 from "/images/Uv/Canvas Printing.png";
import img3 from "/images/Uv/Coir Sheet print.png";
import img4 from "/images/Uv/Foam board.png";
import img5 from "/images/Uv/Glass Printing.png";
import img6 from "/images/Uv/Leather Printing.png";
import img7 from "/images/Uv/Metal Sheet.png";
import img8 from "/images/Uv/Tiles Printing.png";
import img9 from "/images/Uv/vinayl printing 1.png";
import img10 from "/images/Uv/Wood print.png";

export const sections = [
  { id: "overview", label: "Overview", icon: Leaf },
  // { id: "process", label: "Process", icon: Factory },
  { id: "specifications", label: "Specifications", icon: Layers },
  { id: "applications", label: "Applications", icon: Target },
];

export const prodImages = [
  { label: "Acrylic-printing", img: img1 },
  { label: "Canvas Printing", img: img2 },
  { label: "Coir Sheet print", img: img3 },
  { label: "Foam board", img: img4 },
  { label: "Glass Printing", img: img5 },
  { label: "Leather Printing", img: img6 },
  { label: "Metal Sheet", img: img7 },
  { label: "Tiles Printing", img: img8 },
  { label: "vinayl printing 1", img: img9 },
  { label: "Wood print", img: img10 },
];

export const quickStats = [
  {
    label: "Max Print Size",
    value: "10 × 6 ft – 10 x 8 ft",
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
    value: "Min 3 years",
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
      "Print sizes up to 10 ft × 8 ft on materials up to 100mm thick",
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
  "Coir sheets",
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
  maxSize: "10 ft × 6 ft – 10 ft × 8 ft",
  printThickness: "Up to 100 mm",
  maxMaterial: "8 ft × 10 ft",
  durability: "Upto 2 years in sunlight (field observed)",
};

export const benefits = [
  "Instant curing for immediate handling",
  "Sharp, high-resolution images",
  "Excellent color accuracy and vibrancy",
  "Strong ink adhesion on diverse materials",
  "Environmentally friendly process",
  "3D and embossing capabilities",
];