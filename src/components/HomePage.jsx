import React from "react";

import HeroBanner from "./sections/HeroBanner.jsx";
import NotificationTicker from "./sections/NotificationTicker.jsx";
import AboutSection from "./sections/AboutSection.jsx";
import VisionSection from "./sections/VisionSection.jsx";
import MissionOrbit from "./sections/MissionOrbit.jsx";
import FormsDocuments from "./sections/FormsDocuments.jsx";
import WhyChooseUs from "./sections/WhyChooseUs.jsx";

/* ---------- Main Component ---------- */
export default function HomePage() {
  return (
    <div
      className="text-gray-900 bg-transparent"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* ===== HERO BANNER ===== */}
      <HeroBanner />

      {/* ===== NOTIFICATIONS ===== */}
      <NotificationTicker />

      {/* ===== ABOUT ===== */}
      <AboutSection />

      {/* ===== VISION ===== */}
      <VisionSection />

      {/* ===== Mission Section with Orbit ===== */}
      <MissionOrbit />

      {/* ===== FORMS & DOCUMENTS (AFTER VISION + MISSION) ===== */}
      <FormsDocuments />

      {/* ==== Why Choose Us ========== */}
      <WhyChooseUs />
    </div>
  );
}
