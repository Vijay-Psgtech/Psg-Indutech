import { Flame, Layers, Gauge, Settings } from "lucide-react";

export const hotPressFeatures = [
  {
    icon: Layers,
    title: "Rigid & Compact Construction",
    desc: "Minimizes thermal distortion during operation",
  },
  {
    icon: Flame,
    title: "Uniform Heat Distribution",
    desc: "Consistent temperature across sample surface",
  },
  {
    icon: Gauge,
    title: "Heavy-Duty Hydraulics",
    desc: "Industrial-grade hydraulic cylinders",
  },
  {
    icon: Settings,
    title: "Flexible Controls",
    desc: "Manual and semi-automatic operation modes",
  },
];

export const filterApplications = [
  "Water & wastewater filtration",
  "Pre-filtration for RO systems",
  "Pre-filtration in desalination plants",
  "Industrial water treatment",
  "Metal plating processes",
  "Photographic fluid filtration",
  "Chemical filtration",
  "Textile printing inks & specialty coatings",
  "Highly viscous liquid filtration",
  "Weak acids, bases, chemicals & solvents",
];

export const meltBlownSpecs = [
  { size: "63 mm × 10″", weight: "110–130 g", micron: "5", app: "Home RO" },
  {
    size: "61 mm × 20″",
    weight: "220–250 g",
    micron: "5",
    app: "RO/Commercial",
  },
  { size: "61 mm × 40″", weight: "550 g", micron: "5", app: "ETP" },
  { size: "110 mm × 20″", weight: "880 g", micron: "2", app: "Commercial RO" },
];

export const ctoSpecs = {
  material: "Coconut shell activated carbon",
  functions: ["Odor removal", "Taste improvement"],
  size: "10″ length, 61–63 mm diameter",
  app: "RO filtration",
};
