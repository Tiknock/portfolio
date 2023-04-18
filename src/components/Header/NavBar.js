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
    i18n.changeLanguage(e.target.value);
  };
  return (
    <ul className="nav-bar menu-items">
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
          <option value="en" defaultValue>
            EN
          </option>
          <option value="fr">FR</option>
        </select>
      </li>
    </ul>
  );
};

export default NavBar;
