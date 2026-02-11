import React, { useRef } from "react";

import HeroBanner from "./sections/HeroBanner.jsx";
import AboutSection from "./sections/AboutSection.jsx";
import VisionSection from "./sections/VisionSection.jsx";
import MissionOrbit from "./sections/MissionOrbit.jsx";
import FormsDocuments from "./sections/FormsDocuments.jsx";
import WhyChooseUs from "./sections/WhyChooseUs.jsx";

/* ---------- Main Component ---------- */
export default function HomePage() {
  const aboutRef = useRef(null);
  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      className="text-gray-900 bg-transparent"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <HeroBanner onExploreClick={scrollToAbout} />
      <AboutSection refProp={aboutRef} />
      <VisionSection />
      <MissionOrbit />
      <FormsDocuments />
      <WhyChooseUs />
    </div>
  );
}
