import {
  Droplet,
  Flame,
  Shield,
  Layers,
  Thermometer,
  Settings,
  Zap,
} from "lucide-react";

import { brandColors } from "../common/brand";

export const coatingTechnologies = [
  { name: "Dip Coating", icon: Droplet },
  { name: "Knife-on-Roll Coating", icon: Settings },
  { name: "Knife-on-Air Coating", icon: Layers },
  { name: "Foam Coating", icon: Droplet },
  { name: "Hand Spray Adhesive System", icon: Zap },
  { name: "Hot Calendar Roll", icon: Thermometer },
];

export const availableFinishes = [
  { name: "Water Repellent", icon: Droplet, color: brandColors.accent },
  { name: "Fire Retardant", icon: Flame, color: "#ef4444" },
  { name: "Antimicrobial", icon: Shield, color: "#10b981" },
  { name: "Slip Resistance", icon: Shield, color: "#8b5cf6" },
  { name: "PU and PV Coatings", icon: Layers, color: brandColors.secondary },
  { name: "Stiffening Agents", icon: Settings, color: brandColors.tertiary },
  { name: "Abrasion Resistance", icon: Shield, color: "#f59e0b" },
];

export const coatingSpecs = [
  { label: "Working Width", value: "0.6 meters" },
  { label: "Oven Temperature", value: "Up to 200°C" },
  { label: "Fabric Types", value: "Woven, Knitted, Nonwoven" },
  { label: "Purpose", value: "R&D, Product Development, Trials" },
];

export const thermalSpecs = [
  { label: "Fiber Fineness Range", value: "1.5 – 6.0 denier" },
  { label: "Fiber Cut Lengths", value: "38 – 61 mm" },
  { label: "Minimum Raw Material", value: "5 kg" },
  { label: "GSM Range", value: "40 – 200 gsm" },
  { label: "Maximum Web Width", value: "0.6 m" },
  { label: "Maximum Thickness", value: "30 – 40 mm" },
];

export const thermalFiberTypes = [
  "Polypropylene (PP)",
  "Bi-component Fibers",
  "Polyester (PET)",
  "Nylon",
  "Cotton",
  "Jute",
  "Flax",
  "Recycled Shoddy Fibers",
];
