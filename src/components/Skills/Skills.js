import React, { useEffect } from "react";
import SkillsList from "./SkillsList";
import { useTranslation } from "react-i18next";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollPlugin } from "gsap/ScrollToPlugin";
const Skills = () => {
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
    slideInTop("#skills > h2");
  }, []);

  return (
    <section id="skills">
      <h2>{t("skills.title")}</h2>
      <div className="skills-container">
        <SkillsList />
      </div>
    </section>
  );
};

export default Skills;
