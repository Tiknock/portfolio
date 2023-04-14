import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import SkillDetails from "./SkillDetails";

const SkillsList = () => {
  const [typeOfSkills, setTypeOfSkills] = useState("hard");
  const [skillSelected, setSkillSelected] = useState("");

  const { t } = useTranslation("en", { useSuspense: false });

  const activeSkill = (e) => {
    document.querySelectorAll(".skills-list-box > ul > li").forEach((btn) => {
      btn.className = "";
    });
    e.target.className = "active-skill";
    console.log(e);
  };
  return (
    <div className="skills-box">
      <div className="skills-list">
        <ul className="type-btn">
          <li
            className="active-skills"
            onClick={(e) => {
              setTypeOfSkills("hard");
              document.querySelectorAll(".type-btn > li").forEach((btn) => {
                btn.className = "";
              });
              document
                .querySelectorAll(".skills-list-box > ul > li")
                .forEach((btn) => {
                  btn.className = "";
                });
              setSkillSelected("");
              e.target.className = "active-skills";
            }}
          >
            {t("skills.list.hard")}
          </li>
          <li
            onClick={(e) => {
              setTypeOfSkills("soft");
              document.querySelectorAll(".type-btn > li").forEach((btn) => {
                btn.className = "";
              });
              document
                .querySelectorAll(".skills-list-box > ul > li")
                .forEach((btn) => {
                  btn.className = "";
                });
              setSkillSelected("");
              e.target.className = "active-skills";
            }}
          >
            {t("skills.list.soft")}
          </li>
        </ul>
        <div className="skills-list-box">
          {typeOfSkills === "hard" ? (
            <ul className="hard">
              <li
                onClick={(e) => {
                  setSkillSelected("HTML/CSS");
                  activeSkill(e);
                }}
              >
                HTML/CSS
              </li>
              <li
                onClick={(e) => {
                  setSkillSelected("SASS");
                  activeSkill(e);
                }}
              >
                SASS
              </li>
              <li
                onClick={(e) => {
                  setSkillSelected("Javascript");
                  activeSkill(e);
                }}
              >
                Javascript
              </li>
              <li
                onClick={(e) => {
                  setSkillSelected("React");
                  activeSkill(e);
                }}
              >
                React
              </li>
              <li
                onClick={(e) => {
                  setSkillSelected("NodeJs");
                  activeSkill(e);
                }}
              >
                NodeJs
              </li>
              <li
                onClick={(e) => {
                  setSkillSelected("MongoDB");
                  activeSkill(e);
                }}
              >
                MongoDB
              </li>
              <li
                onClick={(e) => {
                  setSkillSelected("SEO");
                  activeSkill(e);
                }}
              >
                SEO
              </li>
              <li
                onClick={(e) => {
                  setSkillSelected("github");
                  activeSkill(e);
                }}
              >
                Github
              </li>
            </ul>
          ) : (
            <ul className="soft">
              <li
                onClick={(e) => {
                  setSkillSelected("Empathie");
                  activeSkill(e);
                }}
              >
                {t("skills.detail.empathie.title")}
              </li>
              <li
                onClick={(e) => {
                  setSkillSelected("Equipe");
                  activeSkill(e);
                }}
              >
                {t("skills.detail.equipe.title")}
              </li>
              <li
                onClick={(e) => {
                  setSkillSelected("Pédagogie");
                  activeSkill(e);
                }}
              >
                {t("skills.detail.pedagogie.title")}
              </li>
              <li
                onClick={(e) => {
                  setSkillSelected("Autonomie");
                  activeSkill(e);
                }}
              >
                {t("skills.detail.autonomie.title")}
              </li>
              <li
                onClick={(e) => {
                  setSkillSelected("Adaptation");
                  activeSkill(e);
                }}
              >
                {t("skills.detail.adaptation.title")}
              </li>
              <li
                onClick={(e) => {
                  setSkillSelected("Gestion de projet");
                  activeSkill(e);
                }}
              >
                {t("skills.detail.gestion.title")}
              </li>
            </ul>
          )}
        </div>
      </div>
      <SkillDetails type={skillSelected} />
    </div>
  );
};

export default SkillsList;
