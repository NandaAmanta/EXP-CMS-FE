import React, { useState } from "react";
import NavbarCard from "./NavbarCard";
import AddNavbarModal from "./AddNavbar";
import "./NavbarCard.scss";

export default function NavbarMasterData() {
  return (
    <>
    <div className="contain">
        <h1 className="text-5xl font-semibold">Navbar Style</h1>

        <NavbarCard navbarStyle="navbar bg-base-100 mb-2"></NavbarCard>
        <NavbarCard navbarStyle="navbar bg-info-content mb-2"></NavbarCard>
        <NavbarCard navbarStyle="navbar bg-success-content mb-2"></NavbarCard>
        <NavbarCard navbarStyle="navbar bg-warning-content mb-2"></NavbarCard>
        <NavbarCard navbarStyle="navbar bg-warning mb-2"></NavbarCard>

      <div className="join flex justify-center">
        <button className="join-item btn btn-outline btn-circle">«</button>
        <button className="join-item btn btn-ghost">1</button>
        <button className="join-item btn btn-ghost">2</button>
        <button className="join-item btn btn-ghost">3</button>
        <button className="join-item btn btn-ghost">4</button>
        <button className="join-item btn btn-outline btn-circle">»</button>
      </div>

     <AddNavbarModal></AddNavbarModal>    

      </div>
    </>
  )
    
}

