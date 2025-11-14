import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import AboutCoE from "./pages/AboutCoE";
import { Home } from "lucide-react";

const App = () => {
  return (
    <>
      {/*Page routes*/}
      <main className="pt-20">
        <Routes>
          <Route path="" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-coe" element={<AboutCoE /> } />
          </Route>
        </Routes>
      </main>
      
    </>
  );
};

export default App;
