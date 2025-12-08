import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import BacktoTop from "./components/BacktoTOp";
import HomePage from "./components/HomePage";
import AboutCoE from "./pages/AboutCoE";
import PsgCoEAbout from "./pages/PsgCoEAbout";
import EventsPage from "./pages/EventsPage";
import Products from "./pages/Products";
import Page404 from "./components/page404";

const App = () => {
  return (
    <>
      {/*Page routes*/}
      <main className="pt-20">
        <BacktoTop />
        <Routes>
          <Route path="" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-coe" element={<AboutCoE />} />
            <Route path="/psg-coe-about" element={<PsgCoEAbout />} />
            <Route path="/all-events" element={<EventsPage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/coming-soon" element={<Page404 />} />
          </Route>
        </Routes>
      </main>
    </>
  );
};

export default App;
