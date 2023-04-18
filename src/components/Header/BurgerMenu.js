import React from "react";
import NavBar from "./NavBar";

const BurgerMenu = () => {
  return (
    <div className="burgerMenu">
      <label id="bgmenulabel" htmlFor="bgmenu"></label>
      <input className="checkbox" type="checkbox" name="" id="bgmenu" />
      <div className="hamburger-lines">
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </div>
      <NavBar />
    </div>
  );
};

export default BurgerMenu;
