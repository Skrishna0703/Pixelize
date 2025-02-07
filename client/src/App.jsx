import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./pages/Home";
import Result from "./pages/Result";

import { Navbar } from "./component/Navbar";
import Footer from "./component/Footer";

export const App = () => {
  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50">
      <ToastContainer position="bottom-right" />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
