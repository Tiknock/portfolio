import React, { useEffect } from "react";
import Slider from "./Slider";
import projects from "../../assets/achievements.json";
import { useTranslation } from "react-i18next";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Achievements = () => {
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

  useEffect(() => {
    slideInTop("#achievements > h2");
  }, []);

  return (
    <section id="achievements">
      <h2>{t("achievements")}</h2>
      <Slider projects={projects} />
    </section>
  );
};

export default Achievements;
