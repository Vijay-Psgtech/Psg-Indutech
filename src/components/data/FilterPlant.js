import { Layers, Leaf, Target } from "lucide-react";
import img1 from "/images/filter/img1.JPG";
import img2 from "/images/filter/img2.JPG";
import img3 from "/images/filter/img3.jpg";


export const prodImages = [
  { label: "Spun Filter", img: img1 },
  { label: "Carbon Filter", img: img2 },
  { label: "String Wound Filter", img: img3 },
];

export const sections = [
  { id: "overview", label: "Overview", icon: Leaf },
  { id: "specifications", label: "Specifications", icon: Layers },
  { id: "applications", label: "Applications", icon: Target },
];

export const keyMetrics = [
  { value: "6 – 40 inches", label: "Length range" },
  { value: "60 – 110 mm", label: "Diameter range" },
  { value: "2RO & ETP filtration systems", label: "Applications" },
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