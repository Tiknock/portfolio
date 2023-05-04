import React from "react";
import { useTranslation } from "react-i18next";

const NavBar = () => {
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
    localStorage.setItem("language", e.target.value);
    i18n.changeLanguage(localStorage.getItem("language"));
  };
  return (
    <ul className="nav-bar menu-items">
      <li>
        <a className="nav-a nav-active" href="#home" onClick={navBar}>
          {t("header.nav.home")}
        </a>
      </li>
      <li>
        <a className="nav-a" href="#about" onClick={navBar}>
          {t("header.nav.about")}
        </a>
      </li>
      <li>
        <a className="nav-a" href="#skills" onClick={navBar}>
          {t("header.nav.skills")}
        </a>
      </li>
      <li>
        <a className="nav-a" href="#achievements" onClick={navBar}>
          {t("header.nav.achievements")}
        </a>
      </li>
      <li>
        <a className="nav-a" href="#contact" onClick={navBar}>
          {t("header.nav.contact")}
        </a>
      </li>
      <li>
        {i18n.language === "en" ? (
          <select className="language-selector" onChange={handleLangChange}>
            <option value="en" defaultValue>
              EN
            </option>
            <option value="fr">FR</option>
          </select>
        ) : (
          <select className="language-selector" onChange={handleLangChange}>
            <option value="fr" defaultValue>
              FR
            </option>
            ;<option value="en">EN</option>
          </select>
        )}
      </li>
    </ul>
  );
};

export default NavBar;
