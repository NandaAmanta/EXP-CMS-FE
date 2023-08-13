import React, { useState } from "react";
import NavbarCard from "./NavbarCard";
import AddNavbarModal from "./AddNavbar";
import { useSelector, useDispatch } from "react-redux";
import "./NavbarCard.scss";
import {addActions } from "../../Actions/cmsActions"
import NavList from './NavList';

type NavbarFormProps = {
  id?: number;
  initialNavbar?: string;
};

 const NavbarMasterData: React.FC<NavbarFormProps> =({
  id,
  initialNavbar = "",
}) => {
  const [navbar, setNavbar] = useState(initialNavbar);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
      dispatch(addActions(navbar));
      console.log(addActions(navbar))

    setNavbar("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNavbar(e.target.value);
  };

  return (
    <>
      <div className="contain">
        <h1 className="text-5xl font-semibold">Navbar Style</h1>

        <NavbarCard navbarStyle="navbar bg-base-100 mb-2"></NavbarCard>
        <NavbarCard navbarStyle="navbar bg-info-content mb-2"></NavbarCard>
        {/* <NavbarCard navbarStyle="navbar bg-success-content mb-2"></NavbarCard>
        <NavbarCard navbarStyle="navbar bg-warning-content mb-2"></NavbarCard>
        <NavbarCard navbarStyle="navbar bg-warning mb-2"></NavbarCard> */}

        <form onSubmit={handleSubmit} className="flex">
          <div className="input-container">
            <input
              type="text"
              placeholder="Input Note"
              onChange={handleChange}
              value={navbar}
            />
          </div>
          <button type="submit" className="submit-button btn btn-primary">
            add
          </button>
        </form>

        <NavList />

        {/* <div className="join flex justify-center">
          <button className="join-item btn btn-outline btn-circle">«</button>
          <button className="join-item btn btn-ghost">1</button>
          <button className="join-item btn btn-ghost">2</button>
          <button className="join-item btn btn-ghost">3</button>
          <button className="join-item btn btn-ghost">4</button>
          <button className="join-item btn btn-outline btn-circle">»</button>
        </div>

        <AddNavbarModal /> */}
      </div>
    </>
  );
}

export default NavbarMasterData;