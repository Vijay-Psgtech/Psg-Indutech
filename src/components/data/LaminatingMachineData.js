import { Layers, Zap, TrendingUp, Leaf, Factory, Target } from "lucide-react";
import img1 from "/images/HotMelt/coe2.png";
import img2 from "/images/HotMelt/coe4.png";

export const prodImages = [img1, img2];

export const sections = [
  { id: "overview", label: "Overview", icon: Leaf },
  { id: "process", label: "Process", icon: Factory },
  { id: "specifications", label: "Specifications", icon: Layers },
  { id: "applications", label: "Applications", icon: Target },
];

export const keyMetrics = [
  { value: "2000mm", label: "Working Width"},
  { value: "40 m/min", label: "Max Speed"},
  { value: "20 g/m²", label: "Max Coating"},
  { value: "200 kg", label: "Capacity"},
];

export const equipFeatures = [
  "IR heater for precise temperature control",
  "Drum melters (20 kg and 200 kg capacities)",
  "Extruder for precise adhesive application",
  "Positive and negative blade system",
  "Multi-blade system for full-surface coating",
];

export const materials = [
  "Woven fabrics",
  "Knitted fabrics",
  "Polar fleece",
  "Terry fabrics",
  "Nonwoven materials",
  "Mesh fabrics",
  "Foams",
];

export const advantages = [
  "Superior finishing quality",
  "Capability to laminate any two flexible rollform materials",
];

export const orderInfo = [
  { label: "Minimum Order Quantity", value: "2000 meters" },
  { label: "Sample Quantity", value: "100 meters" },
];

/* ========= Specification Tab Data ============== */

export const specifications = [
  { label: "Working Width", value: "1200 – 2200 mm" },
  { label: "Roller Width", value: "2400 mm" },
  { label: "Speed", value: "3 – 40 m/min" },
  { label: "Production Capacity", value: "2000 – 15,000 meters/shift" },
  { label: "Minimum Order Quantity", value: "2000 meters (Samples: 100 meters)" },
];

export const rawMaterials = ["PUR", "TPU Film", "PE Film"];


/* ========= Applications Tab Data ============== */

export const applications = [
  "Layering of Materials",
  "Bed Dry Sheets",
  "Garment Interlinings",
  "Mattress Covers",
  "Military Suits",
  "Seat Coverings",
];

export const productApplications = [
  "Baby garments",
  "Rainwear",
  "Cold weather jackets",
  "Coveralls",
  "Ironing boards",
];
