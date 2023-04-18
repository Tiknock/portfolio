import React from "react";
import { useTranslation } from "react-i18next";

const SkillDetails = ({ type }) => {
  const { t } = useTranslation("en", { useSuspense: false });

  let title;
  let content1;
  let content2;
  let content3;
  let content4;
  let content5;
  let content6;

  switch (type) {
    case "HTML/CSS":
      title = "HTML/CSS";
      content1 = t("skills.detail.htmlcss.content.1");
      content2 = t("skills.detail.htmlcss.content.2");
      content3 = "";
      content4 = "";
      content5 = "";
      content6 = "";
      break;
    case "SASS":
      title = "SASS";
      content1 = t("skills.detail.sass.content.1");
      content2 = t("skills.detail.sass.content.2");
      content3 = "";
      content4 = "";
      content5 = "";
      content6 = "";
      break;
    case "Javascript":
      title = "Javascript";
      content1 = t("skills.detail.js.content.1");
      content2 = t("skills.detail.js.content.2");
      content3 = t("skills.detail.js.content.3");
      content4 = "";
      content5 = "";
      content6 = "";
      break;
    case "React":
      title = "React";
      content1 = t("skills.detail.react.content.1");
      content2 = t("skills.detail.react.content.2");
      content3 = t("skills.detail.react.content.3");
      content4 = "";
      content5 = "";
      content6 = "";
      break;
    case "NodeJs":
      title = "NodeJs";
      content1 = t("skills.detail.node.content.1");
      content2 = t("skills.detail.node.content.2");
      content3 = t("skills.detail.node.content.3");
      content4 = "";
      content5 = "";
      content6 = "";
      break;
    case "MongoDB":
      title = "MongoDB";
      content1 = t("skills.detail.mongodb.content.1");
      content2 = "";
      content3 = "";
      content4 = "";
      content5 = "";
      content6 = "";
      break;
    case "SEO":
      title = "SEO";
      content1 = t("skills.detail.seo.content.1");
      content2 = t("skills.detail.seo.content.2");
      content3 = "";
      content4 = "";
      content5 = "";
      content6 = "";
      break;
    case "github":
      title = "Github";
      content1 = t("skills.detail.github.content.1");
      content2 = t("skills.detail.github.content.2");
      content3 = "";
      content4 = "";
      content5 = "";
      content6 = "";
      break;
    case "Empathie":
      title = t("skills.detail.empathie.title");
      content1 = t("skills.detail.empathie.content");
      content2 = "";
      content3 = "";
      content4 = "";
      content5 = "";
      content6 = "";
      break;
    case "Equipe":
      title = t("skills.detail.equipe.title");
      content1 = t("skills.detail.equipe.content");
      content2 = "";
      content3 = "";
      content4 = "";
      content5 = "";
      content6 = "";
      break;
    case "Pédagogie":
      title = t("skills.detail.pedagogie.title");
      content1 = t("skills.detail.pedagogie.content");
      content2 = "";
      content3 = "";
      content4 = "";
      content5 = "";
      content6 = "";
      break;
    case "Autonomie":
      title = t("skills.detail.autonomie.title");
      content1 = t("skills.detail.autonomie.content");
      content2 = "";
      content3 = "";
      content4 = "";
      content5 = "";
      content6 = "";
      break;
    case "Adaptation":
      title = t("skills.detail.adaptation.title");
      content1 = t("skills.detail.adaptation.content");
      content2 = "";
      content3 = "";
      content4 = "";
      content5 = "";
      content6 = "";
      break;
    case "Gestion de projet":
      title = t("skills.detail.gestion.title");
      content1 = t("skills.detail.gestion.content.1");
      content2 = t("skills.detail.gestion.content.2");
      content3 = t("skills.detail.gestion.content.3");
      content4 = t("skills.detail.gestion.content.4");
      content5 = t("skills.detail.gestion.content.5");
      content6 = t("skills.detail.gestion.content.6");
      break;
    default:
      return null;
  }

  return (
    <div className="skills-details-box">
      <h3>{title}</h3>
      <div className="details-content">
        {content1 ? (
          <p>
            <i class="fa-solid fa-check"></i>
            {content1}
          </p>
        ) : (
          ""
        )}
        {content2 ? (
          <p>
            <i class="fa-solid fa-check"></i>
            {content2}
          </p>
        ) : (
          ""
        )}
        {content3 ? (
          <p>
            <i class="fa-solid fa-check"></i>
            {content3}
          </p>
        ) : (
          ""
        )}
        {content4 ? (
          <p>
            <i class="fa-solid fa-check"></i>
            {content4}
          </p>
        ) : (
          ""
        )}
        {content5 ? (
          <p>
            <i class="fa-solid fa-check"></i>
            {content5}
          </p>
        ) : (
          ""
        )}
        {content6 ? (
          <p>
            <i class="fa-solid fa-check"></i>
            {content6}
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SkillDetails;
