import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("en", { useSuspense: false });

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-title">
            <span>
              <img
                src="./icon.png"
                width="50px"
                alt="Logo de Lolita Danancher"
              />
            </span>
            <h4>Lolita Danancher</h4>
          </div>
          <p>{t("footer.1")}</p>
          <ul>
            <li>
              <a href="#home">{t("footer.2")}</a>
            </li>
            <li>
              <a href="#achievements">Portfolio</a>
            </li>
            <li>{t("footer.3")}</li>
          </ul>
        </div>
        <div className="footer-middle">
          <h4>{t("footer.4")}</h4>
          <div className="middle-box">
            <p>
              <i class="fa-solid fa-location-dot"></i>Rhône-Alpes & PACA
            </p>
            <p>
              <i class="fa-sharp fa-solid fa-phone"></i>06 81 17 71 09
            </p>
            <p>
              <i class="fa-solid fa-envelope"></i>lolita.danancher@wanadoo.fr
            </p>
          </div>
        </div>
        <div className="footer-right">
          <h4>{t("footer.5")}</h4>
          <p>
            {t("footer.6")}
            <span className="react">
              React<i class="fa-brands fa-react"></i>
            </span>
          </p>
          <p>{t("footer.7")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
