import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import './components/styles/index.css'
import Hero from "./components/Hero";
import Grid2D from './components/DosD'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div className="navbar">
      <Navbar />
    </div>
    <div className="hero">
      <Hero />
    </div>
    <div className="grid-2d">
      <Grid2D />
    </div>
  </>,
);