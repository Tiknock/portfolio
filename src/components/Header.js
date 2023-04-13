import React from "react";
import AnimHeader from "./AnimHeader";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
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
            <li className="nav-a nav-active">{t("header.home")}</li>
          </a>
          <a href="#about" onClick={navBar}>
            <li className="nav-a">{t("header.about")}</li>
          </a>
          <a href="#skills" onClick={navBar}>
            <li className="nav-a">{t("header.skills")}</li>
          </a>
          <a href="#achievements" onClick={navBar}>
            <li className="nav-a">{t("header.achievements")}</li>
          </a>
          <a href="#contact" onClick={navBar}>
            <li className="nav-a">{t("header.contact")}</li>
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
      <section className="presentation-section">
        <div className="presentation-container">
          <div className="presentation-left-box">
            <h1>
              Lolita Danancher <br /> A{" "}
              <span className="color1">passionate</span> Web developer
            </h1>
            <span className="line-header"></span>
            <ul>
              <li>Creation of website.</li>
              <li>Improving your online image.</li>
              <li>Together let's grow your business</li>
            </ul>
          </div>
          <AnimHeader />
        </div>
        <NavLink className="btn btn-contact" to="/contact">
          Contact Me
        </NavLink>{" "}
      </section>{" "}
    </header>
  );
};

export default Header;
