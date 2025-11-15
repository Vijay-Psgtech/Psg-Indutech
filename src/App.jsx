import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import AboutCoE from "./pages/AboutCoE";
import PsgCoEAbout from "./pages/PsgCoEAbout";
import EventsPage from "./pages/EventsPage";

const App = () => {
  return (
    <>
      {/*Page routes*/}
      <main className="pt-20">
        <Routes>
          <Route path="" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-coe" element={<AboutCoE /> } />
            <Route path="/psg-coe-about" element={<PsgCoEAbout />} />
            <Route path="/all-events" element={<EventsPage />} />
          </Route>
        </Routes>
      </main>
      
    </>
  );
};

export default App;
