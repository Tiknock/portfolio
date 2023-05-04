import React, { useEffect } from "react";
import AnimHeader from "./AnimHeader";
import { useTranslation } from "react-i18next";

import { gsap } from "gsap";

const Header = () => {
  // use of useTranslation
  const { t, i18n } = useTranslation("en", { useSuspense: false });
  // management of the selected language
  let classToApplyfr = "";
  if (i18n.language === "fr") {
    classToApplyfr = "fr-red";
  }
  let classToApplyen = "";
  if (i18n.language === "en") {
    classToApplyen = "en-red";
  }

  const displayIndic = () => {
    gsap.timeline().fromTo(
      ".indic > li",
      {
        opacity: 0,
        x: -400,
      },
      {
        opacity: 1,
        x: 0,
        stagger: 0.45,
        duration: 0.7,
      }
    );
  };
  useEffect(() => {
    displayIndic();
  }, []);
  return (
    <section className="presentation-section">
      <div className="presentation-container">
        <div className="presentation-left-box">
          <h1>
            Lolita Danancher <br /> {t("header.presentation.1")}{" "}
            <span className={classToApplyen}>{t("header.presentation.2")}</span>{" "}
            <span className={classToApplyfr}>{t("header.presentation.3")}</span>
          </h1>
          <span className="line-header"></span>
          <ul className="indic">
            <li>{t("header.presentation.4")}</li>
            <li>{t("header.presentation.5")}</li>
            <li>{t("header.presentation.6")}</li>
          </ul>
        </div>
        <div className="presentation-right-box">
          <AnimHeader />
        </div>
      </div>
      <a href="#contact" className="btn btn-contact">
        {t("header.presentation.btn")}
      </a>{" "}
    </section>
  );
};

export default Header;
