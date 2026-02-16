import { Leaf, Factory, Layers, Target, Sparkles } from "lucide-react";

export const sections = [
  { id: "overview", label: "Overview", icon: Leaf },
  { id: "process", label: "Process", icon: Factory },
  { id: "specifications", label: "Specifications", icon: Layers },
  { id: "applications", label: "Applications", icon: Target },
];

export const quickStats = [
  { label: "Working Width", value: "600 mm" },
  { label: "Fineness ranging", value: "1.5 - 6.0 D" },
  { label: "Cut lengths", value: "38 - 61 mm" },
];

export const processSteps = [
  {
    id: 1,
    name: "Opening Section",
    icon: Factory,
    desc: "The fibres are opened and cleaned using a rotating beater to ensure proper fibre separation and impurity removal.",
  },
  {
    id: 2,
    name: "Carding Section",
    icon: Layers,
    desc: "The opened fibres are individualized and aligned to form a uniform and consistent web",
  },
  {
    id: 3,
    name: "Cross-Lapper Section",
    icon: Target,
    desc: "The carded web is cross-laid onto a conveyor bed to achieve the desired web weight and structural uniformity",
  },
  {
    id: 4,
    name: "Needle-Punching Section",
    icon: Sparkles,
    desc: "The cross-laid webs are mechanically consolidated through needle punching from the top side, bottom side, or both sides, depending on the product requirements",
  },
];

export const specifications = {
  worlingWidth: "600 mm",
  capacity: "Up to 10 kg/hour (depending on GSM & stitch density)",
  gsmRange: "80 -500 GSM",
  stitchDensity: "100 - 1000/cm²",
  needleDensity: "4000 needles/m (needle board width: 200 mm)",
  noofneedleBoards: "4",
  fiberDenier: "3D - 16D",
  fiberLength: "40 - 50 mm",
  sampleQty: "Minimum 3 kg",
  moq: "100 kg",
};

export const rawMaterials = [
  "Polyester",
  "PP",
  "Nylon",
  "Cotton",
  "Jute",
  "Sisal",
  "Flax & Blends",
];

export const applications = [
  "Technical nonwovens",
  "Filtration media",
  "Industrial felts",
];

export const fiberRanges = [
  "Polypropylene (PP)",
  "Polyester (PET)",
  "Nylon",
  "Cotton",
  "Jute",
  "Flax & Blends",
];
