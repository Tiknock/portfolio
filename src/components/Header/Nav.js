import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo";
import { useTranslation } from "react-i18next";

const Nav = () => {
  const navBar = (e) => {
    console.log(e);
    document
      .querySelectorAll(".nav-a")
      .forEach((a) => a.classList.remove("nav-active"));
    e.target.classList.add("nav-active");
  };

  const { t, i18n } = useTranslation("en", { useSuspense: false });

  const handleLangChange = (e) => {
    // console.log(e.target.value);
    i18n.changeLanguage(e.target.value);
  };
  return (
    <header id="home">
      <nav>
        <NavLink to="/">
          <div className="logo">
            <Logo />
          </div>
        </NavLink>
        <ul className="nav-bar">
          <a href="#home" onClick={navBar}>
            <li className="nav-a nav-active">{t("header.nav.home")}</li>
          </a>
          <a href="#about" onClick={navBar}>
            <li className="nav-a">{t("header.nav.about")}</li>
          </a>
          <a href="#skills" onClick={navBar}>
            <li className="nav-a">{t("header.nav.skills")}</li>
          </a>
          <a href="#achievements" onClick={navBar}>
            <li className="nav-a">{t("header.nav.achievements")}</li>
          </a>
          <a href="#contact" onClick={navBar}>
            <li className="nav-a">{t("header.nav.contact")}</li>
          </a>
          <li>
            <select className="language-selector" onChange={handleLangChange}>
              <option value="en" selected>
                EN
              </option>
              <option value="fr">FR</option>
            </select>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
