import React from "react";
import HeroSlider, { Slide } from "hero-slider";

import IntroPage from "./BasicSlader/IntroPage";
import About from "./BasicSlader/About";
import Price from "./BasicSlader/Price";
import ContactPage from "./BasicSlader/ContactPage";
import Referenc from "./BasicSlader/Referenc";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function BasicSlader(props) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Price" element={<Price />} />
          <Route path="/ContactPage" element={<ContactPage />} />
          <Route path="/Referenc" element={<Referenc />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default BasicSlader;
