import React from "react";
import Slider from "./Slider";
import projects from "../../assets/achievements.json";
import { useTranslation } from "react-i18next";

const Achievements = () => {
  const { t } = useTranslation("en", { useSuspense: false });

  return (
    <section id="achievements">
      <h2>{t("achievements")}</h2>
      <Slider projects={projects} />
    </section>
  );
};

export default Achievements;
