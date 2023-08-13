import React, { useState } from "react";
import BannerCard from "./BannerCard";
import AddBannerModal from "./AddBanner";
import "./BannerCard.scss";
import AddNavbarModal from "../NavbarMasterData/AddNavbar";

export default function NavbarMasterData() {
  return (
    <>
    <div className="contain">
    <h1 className="text-5xl font-semibold">Banner Style</h1>

    
      <BannerCard bannerStyle="hero min-h-screen bg-base-200 mb-2"></BannerCard>
      <BannerCard bannerStyle="hero min-h-screen bg-base-200 mb-2"></BannerCard>


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

