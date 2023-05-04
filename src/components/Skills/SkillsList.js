import React, { useEffect, useState } from "react";
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
import { gsap } from "gsap";

const SkillsList = () => {
  // skill navigation management
  const [typeOfSkills, setTypeOfSkills] = useState("hard");
  const [skillSelected, setSkillSelected] = useState("");
  const [montage, setMontage] = useState(false);

  const { t } = useTranslation("en", { useSuspense: false });

  // type of skills management onclick
  const handleType = (e, type) => {
    setTypeOfSkills(type);
    document.querySelectorAll(".type-btn > li").forEach((btn) => {
      btn.className = "";
    });
    document.querySelectorAll(".skills-list-box > ul > li").forEach((btn) => {
      btn.className = "";
    });
    setSkillSelected("");
    setMontage(false);
    e.target.className = "active-skills";
  };

  // skill selected management on click
  const activeSkill = (e, skill) => {
    if (skillSelected === "") {
      setMontage(true);
    }
    document.querySelectorAll(".skills-list-box > ul > li").forEach((btn) => {
      btn.className = "";
    });
    if (e.target.tagName.toLowerCase() !== "img") {
      e.target.className = "active-skill";
    } else if (e.target.tagName.toLowerCase() === "img") {
      e.target.parentNode.className = "active-skill";
    }
    setSkillSelected(skill);
  };

  const hardSkills = () => {
    gsap.timeline().fromTo(
      ".hard > li",
      {
        opacity: 0,
        x: -200,
      },
      {
        opacity: 1,
        x: 0,
        stagger: 0.33,
        duration: 0.7,
      }
    );
  };
  const softSkills = (elem) => {
    gsap.timeline().fromTo(
      ".soft > li",
      {
        opacity: 0,
        x: 200,
      },
      {
        opacity: 1,
        x: 0,
        stagger: 0.33,
        duration: 0.7,
      }
    );
  };
  const details = (elem) => {
    gsap.timeline().fromTo(
      ".skills-details-box",
      {
        opacity: 0,
        x: 200,
      },
      {
        opacity: 1,
        x: 0,
        stagger: 0.33,
        duration: 0.7,
      }
    );
  };
  const detailsRes = (elem) => {
    gsap.timeline().fromTo(
      ".skills-details-box",
      {
        opacity: 0,
        y: -200,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.33,
        duration: 0.7,
      }
    );
  };
  const list = (elem) => {
    gsap.timeline().fromTo(
      ".skills-list",
      {
        x: 200,
      },
      {
        x: 0,
        stagger: 0.33,
        duration: 0.7,
      }
    );
  };
  const reverseList = (elem) => {
    gsap.timeline().fromTo(
      ".skills-list",
      {
        x: -200,
      },
      {
        x: 0,
        stagger: 0.33,
        duration: 0.7,
      }
    );
  };

  useEffect(() => {
    softSkills();
  }, [typeOfSkills]);
  useEffect(() => {
    hardSkills();
  }, [typeOfSkills]);

  useEffect(() => {
    if (window.innerWidth > 500) {
      details();
      if (montage) {
        list();
      } else {
        reverseList();
      }
    } else {
      detailsRes();
    }
  }, [montage]);
  return (
    <div className="skills-box">
      <div className="skills-list">
        <ul className="type-btn">
          <li
            className="active-skills"
            onClick={(e) => {
              handleType(e, "hard");
            }}
          >
            {t("skills.list.hard")}
          </li>
          <li
            onClick={(e) => {
              handleType(e, "soft");
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
                  activeSkill(e, "HTML/CSS");
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
                  activeSkill(e, "SASS");
                }}
              >
                SASS
                <img src={sass} alt="SASS logo" width="25px" />
              </li>
              <li
                onClick={(e) => {
                  activeSkill(e, "Javascript");
                }}
              >
                Javascript
                <img src={js} alt="Js logo" width="25px" />
              </li>
              <li
                onClick={(e) => {
                  activeSkill(e, "React");
                }}
              >
                React
                <img src={react} alt="React logo" width="25px" />
              </li>
              <li
                onClick={(e) => {
                  activeSkill(e, "NodeJs");
                }}
              >
                NodeJs
                <img src={node} alt="NodeJs logo" width="25px" />
              </li>
              <li
                onClick={(e) => {
                  activeSkill(e, "MongoDB");
                }}
              >
                MongoDB
                <img src={mongodb} alt="Mongodb logo" width="25px" />
              </li>
              <li
                onClick={(e) => {
                  activeSkill(e, "SEO");
                }}
              >
                SEO
              </li>
              <li
                onClick={(e) => {
                  activeSkill(e, "github");
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
                  activeSkill(e, "Empathie");
                }}
              >
                {t("skills.detail.empathie.title")}
              </li>
              <li
                onClick={(e) => {
                  activeSkill(e, "Equipe");
                }}
              >
                {t("skills.detail.equipe.title")}
              </li>
              <li
                onClick={(e) => {
                  activeSkill(e, "Pédagogie");
                }}
              >
                {t("skills.detail.pedagogie.title")}
              </li>
              <li
                onClick={(e) => {
                  activeSkill(e, "Autonomie");
                }}
              >
                {t("skills.detail.autonomie.title")}
              </li>
              <li
                onClick={(e) => {
                  activeSkill(e, "Adaptation");
                }}
              >
                {t("skills.detail.adaptation.title")}
              </li>
              <li
                onClick={(e) => {
                  activeSkill(e, "Gestion de projet");
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
