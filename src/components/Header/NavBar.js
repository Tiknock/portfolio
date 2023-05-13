import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const { t, i18n } = useTranslation("en", { useSuspense: false });

  const handleLangChange = (e) => {
    localStorage.setItem("language", e.target.value);
    i18n.changeLanguage(localStorage.getItem("language"));
  };

  const updateNavBarActiveClass = (section) => {
    document
      .querySelectorAll(".nav-a")
      .forEach((a) => a.classList.remove("nav-active"));
    document
      .querySelector(`.nav-a[href="#${section}"]`)
      .classList.add("nav-active");

    // Ajouter une vérification spécifique pour la section "home"
    if (section === "home") {
      document
        .querySelector(`.nav-a[href="#home"]`)
        .classList.add("nav-active");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "achievements", "contact"];
      let newActiveSection = activeSection;

      for (const section of sections) {
        const element = document.getElementById(section);
        const bounding = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (bounding.top >= 0 && bounding.top <= windowHeight) {
          newActiveSection = section;
          break;
        }
      }

      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
        updateNavBarActiveClass(newActiveSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  useEffect(() => {
    updateNavBarActiveClass(activeSection);
  }, [activeSection]);

  const navBar = (section) => {
    setActiveSection(section);
  };

  return (
    <ul className="nav-bar menu-items">
      <li>
        <a
          className={`nav-a ${activeSection === "home" ? "nav-active" : ""}`}
          href="#home"
          onClick={() => navBar("home")}
        >
          {t("header.nav.home")}
        </a>
      </li>
      <li>
        <a
          className={`nav-a ${activeSection === "about" ? "nav-active" : ""}`}
          href="#about"
          onClick={() => navBar("about")}
        >
          {t("header.nav.about")}
        </a>
      </li>
      <li>
        <a
          className={`nav-a ${activeSection === "skills" ? "nav-active" : ""}`}
          href="#skills"
          onClick={() => navBar("skills")}
        >
          {t("header.nav.skills")}
        </a>
      </li>
      <li>
        <a
          className={`nav-a ${
            activeSection === "achievements" ? "nav-active" : ""
          }`}
          href="#achievements"
          onClick={() => navBar("achievements")}
        >
          {t("header.nav.achievements")}
        </a>
      </li>
      <li>
        <a
          className={`nav-a ${activeSection === "contact" ? "nav-active" : ""}`}
          href="#contact"
          onClick={() => navBar("contact")}
        >
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
