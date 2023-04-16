import React from "react";
import NavBar from "./NavBar";

const BurgerMenu = () => {
  return (
    <div>
      <input class="checkbox" type="checkbox" name="" id="" />
      <div class="hamburger-lines">
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </div>
      <NavBar />
    </div>
  );
};

export default BurgerMenu;
