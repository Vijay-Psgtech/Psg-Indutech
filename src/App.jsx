import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Headerfull";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <>
      {/* Global Header */}
      <Header />

      {/*Page routes*/}
      <main className="pt-20">
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
