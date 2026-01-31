import { ThermometerSun, Wind, Layers, Sparkles } from "lucide-react";

export const specifications = {
  capacity: "Up to 40 kg/hour",
  materials: ["Polyester", "Lowmelt polyester"],
  denier: "0.6D – 3D",
  gsm: "40 – 500 GSM",
  temperature: "120°C – 200°C",
  chamberLength: "3 meters",
  moq: "250 kg",
};

export const processFeatures = [
  {
    icon: Wind,
    title: "Hot Air Bonding",
    description:
      "Controlled heat source using appropriate gas burners for uniform bonding",
    color: "from-sky-400 to-blue-500",
  },
  {
    icon: ThermometerSun,
    title: "Temperature Control",
    description: "Adjustable operating temperature between 120°C and 200°C",
    color: "from-orange-400 to-red-500",
  },
  {
    icon: Layers,
    title: "Fiber Fusion",
    description: "Thermoplastic fibers soften and bond at intersection points",
    color: "from-purple-400 to-pink-500",
  },
  {
    icon: Sparkles,
    title: "Quality Output",
    description:
      "Consistent fabric quality with process safety and energy efficiency",
    color: "from-emerald-400 to-teal-500",
  },
];

export const applications = [
  "Thermal Insulation",
  "Acoustic Insulation",
  "Automotive Applications",
  "Construction Materials",
  "Packaging Solutions",
  "Filtration Media",
];

export const processSequence = [
  {
    step: 1,
    title: "Carding & Cross-Lapping",
    desc: "Fiber web preparation similar to needle-punched fabric production",
  },
  {
    step: 2,
    title: "Oven Entry",
    desc: "Cross-laid web is conveyed into the single-chamber oven",
  },
  {
    step: 3,
    title: "Heat Application",
    desc: "Gas burners provide controlled temperature for fiber softening",
  },
  {
    step: 4,
    title: "Bonding",
    desc: "Thermoplastic fibers fuse at intersection points",
  },
  {
    step: 5,
    title: "Cooling & Output",
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
