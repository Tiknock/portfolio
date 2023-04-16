import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo";
import BurgerMenu from "./BurgerMenu";
import NavBar from "./NavBar";

const Nav = () => {
  return (
    <header id="home" className="navbar">
      <nav>
        <NavLink to="/">
          <div className="logo">
            <Logo />
          </div>
        </NavLink>
        <div className="container nav-container">
          {window.innerWidth <= 500 ? <BurgerMenu /> : <NavBar />}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
