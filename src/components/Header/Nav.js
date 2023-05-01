import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo";
import BurgerMenu from "./BurgerMenu";
import NavBar from "./NavBar";

const Nav = () => {
  const [isWindowSmall, setIsWindowSmall] = useState(window.innerWidth < 768);

  useEffect(() => {
    // window size management for burger menu
    function handleResize() {
      setIsWindowSmall(window.innerWidth < 700);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header id="home" className="navbar">
      <nav>
        <NavLink to="/">
          <div className="logo">
            <Logo />
          </div>
        </NavLink>
        <div className="container nav-container">
          {isWindowSmall ? <BurgerMenu /> : <NavBar />}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
