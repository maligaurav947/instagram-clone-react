import React from 'react';
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Mfooter from "./components/Mfooter";
import "../src/scss/dist/css/main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header />
    <Hero />
    <Mfooter />
  </div>
);

