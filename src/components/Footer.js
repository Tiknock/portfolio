import React from "react";
import { useTranslation } from "react-i18next";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Modale from "./Modale";

const Footer = () => {
  const { t } = useTranslation("en", { useSuspense: false });

  return (
    <footer itemScope itemType="http://schema.org/Organization">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-title">
            <span>
              <img
                src="./icon.webp"
                width="50px"
                alt="Logo de Lolita Danancher"
              />
            </span>
            <h4 itemProp="name">Lolita Danancher</h4>
          </div>
          <p>{t("footer.1")}</p>
          <ul>
            <li>
              <a href="#home">{t("footer.2")}</a>
            </li>
            <li>
              <a href="#achievements">Portfolio</a>
            </li>
            <Modale />
          </ul>
        </div>
        <div
          className="footer-middle"
          itemProp="address"
          itemScope
          itemType="http://schema.org/PostalAddress"
        >
          <h4>{t("footer.4")}</h4>
          <div className="middle-box">
            <p itemProp="addressLocality">
              <i className="fa-solid fa-location-dot"></i>Rhône-Alpes & PACA
            </p>
            <CopyToClipboard text="0681177109" className="hover">
              <p
                style={{ cursor: "pointer" }}
                className="clipboard"
                onClick={() => alert("Téléphone copié !")}
              >
                <i className="fa-sharp fa-solid fa-phone"></i>
                06 81 17 71 09
              </p>
            </CopyToClipboard>
            <CopyToClipboard
              text="lolita.danancher@wanadoo.fr"
              className="hover"
            >
              <p
                style={{ cursor: "pointer" }}
                className="clipboard"
                onClick={() => alert("Email copié !")}
              >
                <i className="fa-solid fa-envelope"></i>
                lolita.danancher@wanadoo.fr
              </p>
            </CopyToClipboard>
          </div>
        </div>
        <div className="footer-right">
          <h4>{t("footer.5")}</h4>
          <p>
            {t("footer.6")}
            <span className="react">
              React<i className="fa-brands fa-react"></i>
            </span>
          </p>
          <p>{t("footer.7")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
