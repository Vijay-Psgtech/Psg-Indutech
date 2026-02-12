import {
  Factory,
  Filter,
  Layers,
  Zap,
  Settings,
  Sparkles,
  Target,
  TrendingUp,
  Leaf,
} from "lucide-react";

import img1 from "/images/products/_95A0818 - Needle Felt.JPG";

export const prodImages = [
  {label: "Needle Felt", img: img1}
]

export const sections = [
  { id: "overview", label: "Overview", icon: Leaf },
  { id: "process", label: "Process", icon: Factory },
  { id: "specifications", label: "Specifications", icon: Layers },
  { id: "applications", label: "Applications", icon: Target },
];

export const quickStats = [
  { label: "Finished width ", value: "1.5meters" },
  { label: "Handling Capability", value: "0.8D – 3D" },
  { label: "GSM", value: "100 – 400" },
  { label: "Thickness", value: "10-15mm" },
];

export const features = [
  {
    icon: Filter,
    title: "Filters",
    desc: "High-efficiency filtration media",
  },
  {
    icon: Target,
    title: "Medical",
    desc: "Cast pads & medical grade",
  },
  {
    icon: Sparkles,
    title: "Wipes",
    desc: "Soft absorbent substrates",
  },
  {
    icon: TrendingUp,
    title: "Quality",
    desc: "Premium finishing system",
  },
];

export const specifications = {
  capacity: "Up to 40 kg/hour",
  materials: ["Polyester", "Lowmelt polyester", "Viscose", "PP", "Cotton"],
  denier: "0.6D – 3D",
  denierRange: "0.8 to 3 denier",
  gsm: "100 – 400",
  width: "1.5 meters",
  moq: "250 kg",
};

export const processSteps = [
  {
    id: 1,
    name: "MBO",
    icon: Factory,
    desc: "Material preparation and opening system",
    detail: "Initial fiber preparation for optimal processing",
  },
  {
    id: 2,
    name: "Mono Cylinder",
    icon: Layers,
    desc: "Uniform fiber distribution",
    detail: "Ensures consistent fiber layering",
  },
  {
    id: 3,
    name: "Flexi Clean",
    icon: Sparkles,
    desc: "Advanced cleaning system",
    detail: "Removes impurities for premium quality",
  },
  {
    id: 4,
    name: "Carding Machine",
    icon: Settings,
    desc: "Flat system fiber alignment",
    detail: "Parallel arrangement of fibers",
  },
  {
    id: 5,
    name: "Cross Lapper",
    icon: Layers,
    desc: "Web formation and layering",
    detail: "Creates uniform cross-laid web",
  },
  {
    id: 6,
    name: "4 Needle Loom",
    icon: Zap,
    desc: "Mechanical entanglement",
    detail: "Barbed needle penetration process",
  },
];

export const applications = [
  { name: "Filters", icon: Filter, desc: "High-efficiency filtration media" },
  {
    name: "Medical Cast Pads",
    icon: Target,
    desc: "Cast pads & medical grade",
  },
  { name: "Wipes", icon: Sparkles, desc: "Soft absorbent substrates" },
];

export const rawMaterials = ["Viscose", "Polyester", "Nylon", "PP", "Cotton"];
