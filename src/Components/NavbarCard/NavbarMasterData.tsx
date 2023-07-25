import React, { useState } from "react";
import "./NavbarCard.scss";


export default function NavbarMasterData() {
  
  return (
    <>
      <div className="contain">
        <h1>Navbar Style</h1>
        <div className="container-card">
          <nav>
          <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#news">News</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#about">About</a></li>
          </ul>
          </nav>
        </div>
      </div>
    </>
  )
    
}

