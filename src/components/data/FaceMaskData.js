import { CheckCircle, Layers, Settings, Shield, Wind, Zap } from "lucide-react";

export const maskVariants = [
  {
    id: 1,
    name: "Tie Attachment",
    description:
      "Three-ply surgical masks with adjustable tie strings for secure fit",
    icon: Settings,
    machine: "Tie Machine",
  },
  {
    id: 2,
    name: "Ear-Loop Attachment",
    description:
      "Three-ply surgical masks with elastic ear loops for quick wearing",
    icon: Zap,
    machine: "Loop Machine (Automatic)",
  },
];

export const manufacturingProcess = [
  {
    step: "01",
    title: "Blank Machine",
    description:
      "Combines three layers of nonwoven materials through ultrasonic bonding",
    icon: Layers,
    layers: [
      { name: "20 GSM Melt-Blown Fabric", color: "#e0f2fe" },
      { name: "17 GSM Medical-grade Green PP", color: "#dcfce7" },
      { name: "25 GSM White Spun bond PP", color: "#f1f5f9" },
    ],
  },
  {
    step: "02",
    title: "Tie Machine",
    description: "Attaches ties to mask blanks for tie-type masks",
    icon: Settings,
  },
  {
    step: "03",
    title: "Loop Machine",
    description:
      "Automatic attachment of elastic ear loops for ear-loop-type masks",
    icon: Zap,
  },
];

export const specifications = [
  { label: "Layers", value: "3", icon: Layers },
  { label: "Filtration Efficiency", value: "95%", icon: Shield },
  { label: "Filter Type", value: "Melt-Blown", icon: Wind },
  { label: "Standards", value: "Medical Grade", icon: CheckCircle },
];

export const availableColors = [
  {
    name: "Medical Blue",
    hex: "#3b82f6",
    description: "Standard surgical blue",
  },
  {
    name: "Medical Green",
    hex: "#10b981",
    description: "Healthcare professional green",
  },
];

export const features = [
  "3 layers with inner melt-blown filter fabric",
  "Particle filtration efficiency: 95%",
  "Ultrasonic bonding for secure layer adhesion",
  "Medical-grade polypropylene materials",
  "Comfortable fit with adjustable attachments",
  "Suitable for surgical and medical environments",
];
