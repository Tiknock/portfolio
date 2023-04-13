import React from "react";
import SkillsList from "./SkillsList";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation("en", { useSuspense: false });

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
