import { ThermometerSun, Wind, Layers, Sparkles, Leaf, Factory, Target, ThermometerSnowflake, Zap } from "lucide-react";

import img1 from "/images/products/_95A0823 - Thermal wadding.JPG";

export const prodImages = [
  {label: "Thermal Wadding", img: img1}
]

export const sections = [
  { id: "overview", label: "Overview", icon: Leaf },
  { id: "process", label: "Process", icon: Factory },
  { id: "specifications", label: "Specifications", icon: Layers },
  { id: "applications", label: "Applications", icon: Target },
];

export const quickStats = [
  { label: "Temperature Range", value: "120-200°C" },
  { label: "Chamber Length", value: "3 meters" },
  { label: "Capacity", value: "40 kg/hr" },
];

export const specifications = {
  capacity: "Up to 40 kg/hour",
  materials: ["Polyester", "Lowmelt polyester"],
  denier: "0.6D – 3D",
  gsm: "40 – 500 GSM",
  temperature: "120°C – 200°C",
  chamberLength: "3 meters",
  moq: "250 kg",
};

export const applications = [
  "Thermal Insulation",
  "Acoustic Insulation",
  "Automotive Applications",
  "Construction Materials",
  "Packaging Solutions",
  "Filtration Media",
];

export const processSteps = [
  {
    id: 1,
    name: "Carding & Cross-Lapping",
    icon: Factory,
    desc: "Fiber web preparation similar to needle-punched fabric production",
  },
  {
    id: 2,
    name: "Oven Entry",
    icon: Layers,
    desc: "Cross-laid web is conveyed into the single-chamber oven",
  },
  {
    id: 3,
    name: "Heat Application",
    icon: ThermometerSun,
    desc: "Gas burners provide controlled temperature for fiber softening",
  },
  {
    id: 4,
    name: "Bonding",
    icon: Zap,
    desc: "Thermoplastic fibers fuse at intersection points",
  },
  {
    id: 5,
    name: "Cooling & Output",
    icon: ThermometerSnowflake,
    desc: "Uniform bonded fabric with consistent quality",
  },
];

export const keyBenefits = [
  {
    title: "Uniform Bonding",
    desc: "Consistent bonding across the entire web",
  },
  {
    title: "Process Safety",
    desc: "Controlled environment with safety measures",
  },
  {
    title: "Energy Efficiency",
    desc: "Optimized energy consumption and consistent quality",
  },
];
