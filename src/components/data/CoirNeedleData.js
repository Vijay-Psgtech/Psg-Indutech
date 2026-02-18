import {
  Leaf,
  Sprout,
  TreePine,
  Droplet,
  Mountain,
  Wind,
  Target,
  CheckCircle,
  Layers,
  Factory,
  Zap,
} from "lucide-react";

import img1 from "/images/products/Coir pot - step.jpeg";
import img2 from "/images/products/Coir pot - round.jpeg";
import img3 from "/images/products/Coir pot - Half round.jpeg";

export const prodImages = [
  { label: "Coir pot - step", img: img1 },
  { label: "Coir pot - round", img: img2 },
  { label: "Coir pot - Half round", img: img3 },
];

export const quickStats = [
  { label: "Working Width", value: "2000mm" },
  { label: "Capacity", value: "1 ton/shift" },
  { label: "GSM", value: "800-1200" },
  { label: "Thickness", value: "10-15mm" },
];

export const sections = [
  { id: "overview", label: "Overview", icon: Leaf },
  { id: "process", label: "Process", icon: Factory },
  { id: "specifications", label: "Specifications", icon: Layers },
  { id: "applications", label: "Applications", icon: Target },
];

export const benefits = [
  {
    title: "Erosion Control",
    desc: "Prevents topsoil loss and stabilizes vulnerable areas",
    icon: Mountain,
  },
  {
    title: "Water Retention",
    desc: "Helps retain moisture and prevents soil from drying out",
    icon: Droplet,
  },
  {
    title: "Vegetation Growth",
    desc: "Promotes healthy growth of new vegetation",
    icon: Sprout,
  },
  {
    title: "100% Natural",
    desc: "No additional bonding materials - environmentally friendly",
    icon: Leaf,
  },
];

export const processSteps = [
  {
    id: 1,
    name: "Opening & Cleaning",
    desc: "Raw coir fibers are opened and cleaned to remove impurities",
    icon: Factory,
  },
  {
    id: 2,
    name: "Pneumatic Conveying",
    desc: "Fibers are conveyed pneumatically to the needle loom",
    icon: Wind,
  },
  {
    id: 3,
    name: "Needle Punching",
    desc: "Mechanical interlocking creates strong, cohesive felt structure",
    icon: Zap,
  },
  {
    id: 4,
    name: "Density Control",
    desc: "Varying punching intensity produces desired thickness and density",
    icon: Layers,
  },
  {
    id: 5,
    name: "Winding",
    desc: "Continuous sheet is wound for storage and transport",
    icon: Target,
  },
];

export const applications = [
  {
    name: "Mulch Mats",
    icon: Sprout,
    desc: "Moisture retention for agricultural applications",
    benefits: [
      "Water conservation",
      "Weed suppression",
      "Soil temperature control",
    ],
  },
  {
    name: "Mattresses",
    icon: Wind,
    desc: "Natural fiber mattress cores and padding",
    benefits: ["Breathable material", "Eco-friendly", "Durable construction"],
  },
  {
    name: "Coir Boards",
    icon: Mountain,
    desc: "Composite boards for construction",
    benefits: ["Structural strength", "Sound insulation", "Fire resistant"],
  },
  {
    name: "Garden Products",
    icon: TreePine,
    desc: "Landscaping and garden applications",
    benefits: ["Biodegradable", "Plant-friendly", "Weather resistant"],
  },
  {
    name: "Biofilters",
    icon: Droplet,
    desc: "Water treatment and filtration",
    benefits: ["Natural filtration", "High porosity", "Long-lasting"],
  },
  {
    name: "Geotextiles",
    icon: Target,
    desc: "Erosion control and soil stabilization",
    benefits: ["Prevents soil erosion", "Promotes vegetation", "UV resistant"],
  },
];

export const specifications = {
  workingWidth: "2000 mm",
  capacity: "Up to 1 ton per shift",
  gsm: "800 – 1200 GSM",
  needleBoards: "2",
  materials: ["Coir", "Jute", "Sisal", "Blends"],
  thickness: "10 – 15 mm",
  moq: "1000 kg",
  supplier: "M/s 2M Engineers",
};

export const specGrids = [
  { label: "Working Width", value: specifications.workingWidth, icon: Layers },
  {
    label: "Production Capacity",
    value: specifications.capacity,
    icon: Factory,
  },
  { label: "GSM Range", value: specifications.gsm, icon: Target },
  { label: "Thickness", value: specifications.thickness, icon: Mountain },
  { label: "Needle Boards", value: specifications.needleBoards, icon: Zap },
  { label: "Minimum Order", value: specifications.moq, icon: CheckCircle },
];
