import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-left">
          <span>
            <Logo />
          </span>
          <h4>Lolita Danancher</h4>
          <p>Développeuse Web, création de site internet,...</p>
          <ul>
            <li>
              <a href="#home">Accueil</a>
            </li>
            <li>
              <a href="#achievements">Portfolio</a>
            </li>
            <li>Mentions légales</li>
            <li>Plan du site</li>
          </ul>
        </div>
        <div className="footer-middle">
          <h4>Mes coordonnées</h4>
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
          <h4>Mentions</h4>
          <p>Site créé avec</p>
          <p>2023 Copyright | Lolita Danancher tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
