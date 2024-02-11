//lib
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// custom
import Home from "../pages/Home/Home.jsx";
import About from "../pages/About/About.jsx";

const router = () => {
  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default router;
