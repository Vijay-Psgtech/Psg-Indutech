import {
  Droplets,
  Sparkles,
  HandHeart,
  Baby,
  Shield,
  Package,
  Heart,
  Clock,
  Leaf,
  Factory,
  Layers,
  Target,
} from "lucide-react";

export const sections = [
  { id: "overview", label: "Overview", icon: Leaf },
  { id: "process", label: "Process", icon: Factory },
  { id: "specifications", label: "Specifications", icon: Layers },
  { id: "applications", label: "Applications", icon: Target },
];

export const quickStats = [
  {
    label: "Production Capacity",
    value: "5000 packs/shift",
  },
  {
    label: "Wipe Size",
    value: "220×220 mm",
  },
  {
    label: "GSM Range",
    value: "45-80 GSM",
  },
  {
    label: "Pack Options",
    value: "10/20 wipes",
  },
];

export const processSteps = [
  {
    id: 1,
    name: "Material Preparation",
    icon: Factory,
    desc: "High-quality substrates prepared to specifications",
  },
  {
    id: 2,
    name: "Folding & Moisturizing",
    icon: Layers,
    desc: "Wipes folded and treated with active solution",
  },
  {
    id: 3,
    name: "Hygienic Packaging",
    icon: Package,
    desc: "Sealed in 10 or 20-piece packs for safety",
  },
];

export const specifications = {
  packSizes: ["10 wipes/pack", "20 wipes/pack"],
  capacity: "5000 packs per shift (10 wipes/pack)",
  wipeSize: "220 × 220 mm",
  sizeRange: "150 × 150 mm to 220 × 220 mm",
  gsm: "45 – 80 GSM",
  materials: ["Viscose", "Polyester", "Blends"],
  moq: "5000 packs",
  supplier: "Chungda Machinery Ltd",
};

export const wipeTypes = [
  {
    id: "multisurface",
    name: "Multi-surface Wipes",
    icon: Sparkles,
    color: "bg-gradient-to-br from-[#06b6d4] to-[#434C9A]",
    gradient: "bg-gradient-to-b from-[#06b6d4]/10 to-[#434C9A]/5",
    description: "Versatile cleaning for various surfaces",
    features: ["All-purpose cleaning", "Quick-drying", "Streak-free finish"],
  },
  {
    id: "handface",
    name: "Hand & Face Wipes",
    icon: HandHeart,
    color: "bg-gradient-to-br from-[#434C9A] to-[#6D77B3]",
    gradient: "bg-gradient-to-b from-[#6D77B3]/10 to-[#22227A]/5",
    description: "Gentle cleansing for personal care",
    features: [
      "Soft & gentle",
      "Alcohol-free options",
      "Dermatologically tested",
    ],
  },
  {
    id: "baby",
    name: "Baby Wipes",
    icon: Baby,
    color: "bg-gradient-to-br from-[#06b6d4] to-[#6D77B3]",
    gradient: "bg-gradient-to-b from-[#06b6d4]/10 to-[#434C9A]/5",
    description: "Ultra-gentle for delicate baby skin",
    features: ["Hypoallergenic", "Fragrance-free", "pH balanced"],
  },
  {
    id: "leather",
    name: "Leather Wipes",
    icon: Shield,
    color: "bg-gradient-to-br from-[#22227A] to-[#434C9A]",
    gradient: "bg-gradient-to-b from-[#22227A]/10 to-[#434C9A]/5",
    description: "Specialized care for leather products",
    features: ["Conditioning formula", "Protective coating", "Restores shine"],
  },
];

export const keyFeatures = [
  {
    icon: Droplets,
    title: "Wet-Strength Substrate",
    description:
      "High-quality, soft-fibre materials with excellent permeability",
  },
  {
    icon: Package,
    title: "Hygienic Packaging",
    description: "Folded, moisturized, and sealed for convenience and safety",
  },
  {
    icon: Heart,
    title: "Custom Formulation",
    description: "Any active substance can be impregnated in the wet wipe",
  },
  {
    icon: Clock,
    title: "High Efficiency",
    description: "Production capacity up to 5000 packs per shift",
  },
];

export const techSpecs = [
  { label: "Pack Sizes", value: specifications.packSizes.join(", ") },
  { label: "Production Capacity", value: specifications.capacity },
  { label: "Standard Wipe Size", value: specifications.wipeSize },
  { label: "Size Range", value: specifications.sizeRange },
  { label: "GSM Range", value: specifications.gsm },
  { label: "Minimum Order", value: specifications.moq },
];
