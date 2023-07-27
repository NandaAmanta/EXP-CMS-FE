import React, { useState } from "react";
import NavbarCard from "./NavbarCard";


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

      <div className="add-btn fixed right-7 bottom-7 ">
      <button className="btn btn-circle btn-outline btn-info btn-lg">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 stroke-2">
          <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
      </svg>
        </button>
      </div>
      </div>
    </>
  )
    
}

