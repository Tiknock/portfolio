import React from "react";
import { useTranslation } from "react-i18next";

const Presentation = () => {
  const { t } = useTranslation("en", { useSuspense: false });
  return (
    <div className="presentation-right-box">
      <p>
        {t("about.presentation.1")}
        <span className="red">{t("about.presentation.2")}</span>
        {t("about.presentation.3")}
        <span className="red">{t("about.presentation.4")}</span>
        {t("about.presentation.5")}
        <span className="red">{t("about.presentation.6")}</span>
        {t("about.presentation.7")}
        <span className="red">{t("about.presentation.8")}</span>
        {t("about.presentation.9")}
        <span className="red">{t("about.presentation.10")}</span>
        {t("about.presentation.11")}
        <span className="red">{t("about.presentation.12")}</span>
        {t("about.presentation.13")}
        <span className="red">{t("about.presentation.14")}</span>
        {t("about.presentation.15")}
        <span className="red">{t("about.presentation.16")}</span>
        {t("about.presentation.17")}
        <span className="red">{t("about.presentation.18")}</span>
        {t("about.presentation.19")}
        <span className="red">{t("about.presentation.20")}</span>
        {t("about.presentation.21")}
        <span className="red">{t("about.presentation.22")}</span>
        {t("about.presentation.23")}
        <span className="red">{t("about.presentation.24")}</span>
      </p>
      <a
        className="btn cv-btn"
        target="blank"
        href="/uploads/media/default/0001/01/540cb75550adf33f281f29132dddd14fded85bfc.pdf"
      >
        {t("about.cv")}
      </a>
    </div>
  );
};

export default Presentation;
