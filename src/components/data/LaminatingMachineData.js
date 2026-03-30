import { Layers, Leaf, Factory, Target } from "lucide-react";
import img1 from "/images/HotMelt/img1.JPG";
import img2 from "/images/HotMelt/img2.JPG";
import img3 from "/images/HotMelt/img3.JPG";
import img4 from "/images/HotMelt/img4.JPG";  

export const prodImages = [
  { label: "Baby-hood", img: img1 },
  { label: "Baby Bed Protector", img: img2 },
  { label: "Matress Protector", img: img3 },
  { label: "", img: img4 },
];

export const sections = [
  { id: "overview", label: "Overview", icon: Leaf },
  // { id: "process", label: "Process", icon: Factory },
  { id: "specifications", label: "Specifications", icon: Layers },
  { id: "applications", label: "Applications", icon: Target },
];

export const keyMetrics = [
  { value: "2000mm", label: "Working Width" },
  { value: "40 m/min", label: "Max Speed" },
  { value: "20 g/m²", label: "Max Coating" },
  { value: "200 kg", label: "Capacity" },
];

export const advantages = [
  "Superior finishing quality",
  "Capability to laminate any two flexible rollform materials",
];

export const specifications = [
  { label: "Working Width", value: "1200 – 2200 mm" },
  { label: "Roller Width", value: "2400 mm" },
  { label: "Speed", value: "3 – 40 m/min" },
  { label: "Production Capacity", value: "2000 – 15,000 meters/shift" },
  {
    label: "Minimum Order Quantity",
    value: "2000 meters (Samples: 100 meters)",
  },
];

export const rawMaterials = ["PUR", "TPU Film", "PE Film"];

export const applications = [
  {
    label: "Layering of Materials",
    img: "/images/products/layering.jpg",
  },
  {
    label: "Bed Dry Sheets",
    img: "/images/products/dry Sheets.jpg",
  },
  {
    label: "Garment Interlinings",
    img: "/images/products/garmentinterlining.jpg",
  },
  {
    label: "Mattress Covers",
    img: "/images/products/MatressCovers.webp",
  },
  {
    label: "Military Suits",
    img: "/images/products/Milatary.webp",
  },
  {
    label: "Seat Coverings",
    img: "/images/products/seatcoverings.jpg",
  },
];

export const productApplications = [
        {
    label: "Baby garments",
    img: "/images/products/babyGarments.jpg",
  },
     {
    label: "Rainwear",
    img: "/images/products/raincoat.jpg",
  },

   {
    label: "Cold weather jackets",
    img: "/images/products/cold jackets.jpg",
  },
   {
    label: "Coveralls",
    img: "/images/products/coveralls.jpg",
  },

  {
    label: "Ironing boards",
    img: "/images/products/ironboard.jpg",
  },
    
];