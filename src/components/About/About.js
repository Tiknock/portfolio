import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
// import Pdp from "../../assets/img/Lolita_Danancher4.png";
import Pdp from "../../assets/img/Lolita_Danancher2.webp";
import Presentation from "./Presentation";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  const { t } = useTranslation("en", { useSuspense: false });
  const slideInTop = (elem, delay, duration) => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      elem,
      {
        opacity: 0,
        y: -200,
      },
      {
        opacity: 1,
        y: 0,
        delay: delay || 0.2,
        duration: duration || 0.6,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center",
        },
      }
    );
  };
  const photoEffect = (elem, delay, duration) => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      elem,
      {
        opacity: 0.1,
      },
      {
        opacity: 1,
        delay: delay || 0.1,
        duration: duration || 0.4,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center",
        },
      }
    );
  };

  useEffect(() => {
    slideInTop("#about > h2");
  }, []);
  useEffect(() => {
    photoEffect("#about-photo");
  }, []);

  return (
    <section id="about">
      <h2>{t("about.title")}</h2>
      <div className="presentation-container">
        <div className="presentation-pic">
          <img
            id="about-photo"
            src={Pdp}
            alt="Lolita Danancher"
            width="400px"
          />
        </div>
        <Presentation />
      </div>
    </section>
  );
};

export default About;
