import React from "react";
import AnimHeader from "./AnimHeader";
import { useTranslation } from "react-i18next";

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
          <ul>
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
        Contact Me
      </a>{" "}
    </section>
  );
};

export default Header;
