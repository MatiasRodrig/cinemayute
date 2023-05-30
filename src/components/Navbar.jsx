import React from "react";
import { useState } from "react";
import './styles/navbar.css'

function Navbar() {

const [isActive, setIsActive] = useState(false);

const toggleMenu = () => {
  setIsActive(!isActive);
};


  return (
    <div className="nav">
      <div className="logo">
       <a href=""> <h1>CineMayute</h1> </a>
      </div>
      <div
        className={`menu-toggle ${isActive ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="hamburger"></div>
      </div>

      <nav className={`menu ${isActive ? "active" : ""}`}>
        <a href="">Inicio</a>
        <a href="">Estrenos</a>
        <a href="">Peliculas 2D</a>
        <a href="">Peliculas 3D y 4D</a>
      </nav>
    </div>
  );
}

export default Navbar;
