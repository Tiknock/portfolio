import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import SkillDetails from "./SkillDetails";
import html from "../../assets/img/html.png";
import css from "../../assets/img/css.png";
import sass from "../../assets/img/sass.png";
import js from "../../assets/img/js.png";
import node from "../../assets/img/node.png";
import mongodb from "../../assets/img/mongodb.png";
import github from "../../assets/img/github.png";
import react from "../../assets/img/react.png";

const SkillsList = () => {
  // skill navigation management
  const [typeOfSkills, setTypeOfSkills] = useState("hard");
  const [skillSelected, setSkillSelected] = useState("");

  const { t } = useTranslation("en", { useSuspense: false });

  const activeSkill = (e) => {
    document.querySelectorAll(".skills-list-box > ul > li").forEach((btn) => {
      btn.className = "";
    });
    if (e.target.tagName.toLowerCase() !== "img") {
      e.target.className = "active-skill";
    } else if (e.target.tagName.toLowerCase() === "img") {
      e.target.parentNode.className = "active-skill";
    }
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
                <img src={html} alt="HTML logo" width="25px" />
                <img
                  src={css}
                  className="css-icon"
                  alt="CSS logo"
                  width="22.5px"
                />
              </li>
              <li
                onClick={(e) => {
                  setSkillSelected("SASS");
                  activeSkill(e);
                }}
              >
                SASS
                <img src={sass} alt="SASS logo" width="25px" />
              </li>
              <li
                onClick={(e) => {
                  setSkillSelected("Javascript");
                  activeSkill(e);
                }}
              >
                Javascript
                <img src={js} alt="Js logo" width="25px" />
              </li>
              <li
                onClick={(e) => {
                  setSkillSelected("React");
                  activeSkill(e);
                }}
              >
                React
                <img src={react} alt="React logo" width="25px" />
              </li>
              <li
                onClick={(e) => {
                  setSkillSelected("NodeJs");
                  activeSkill(e);
                }}
              >
                NodeJs
                <img src={node} alt="NodeJs logo" width="25px" />
              </li>
              <li
                onClick={(e) => {
                  setSkillSelected("MongoDB");
                  activeSkill(e);
                }}
              >
                MongoDB
                <img src={mongodb} alt="Mongodb logo" width="25px" />
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
                <img src={github} alt="Github logo" width="25px" />
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
