import React from "react";
import { useTranslation } from "react-i18next";
import Pdp from "../../assets/img/Lolita_Danancher1.webp";
import Presentation from "./Presentation";

const About = () => {
  const { t } = useTranslation("en", { useSuspense: false });

  return (
    <section id="about">
      <h2>{t("about.title")}</h2>
      <div className="presentation-container">
        <div className="presentation-pic">
          <img src={Pdp} alt="Lolita Danancher" width="300px" />
        </div>
        <Presentation />
      </div>
    </section>
  );
};

export default About;
