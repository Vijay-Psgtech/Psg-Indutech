import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import { Home } from "lucide-react";

const App = () => {
  return (
    <>
      {/*Page routes*/}
      <main className="pt-20">
        <Routes>
          <Route path="" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </main>
      
    </>
  );
};

export default App;
