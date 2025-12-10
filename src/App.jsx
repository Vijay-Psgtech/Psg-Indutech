import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import BacktoTop from "./components/BacktoTOp";
import HomePage from "./components/HomePage";
import AboutCoE from "./pages/AboutCoE";
import PsgCoEAbout from "./pages/PsgCoEAbout";
import EventsPage from "./pages/EventsPage";
import Products from "./pages/Products";
import IncubationPrototype from "./pages/facilities/IncubationPrototype";
import ProductDevelopment from "./pages/facilities/ProductDevelopment";
import ContactPage from "./pages/ContactUs";
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
            <Route path="/inc-pro" element={<IncubationPrototype />} />
            <Route path="/prod-dev" element={<ProductDevelopment />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/coming-soon" element={<Page404 />} />
          </Route>
        </Routes>
      </main>
    </>
  );
};

export default App;
