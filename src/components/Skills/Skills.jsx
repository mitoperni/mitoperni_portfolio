import React from "react";
import { useTranslation } from "react-i18next";
import './Skills.css'

const frontendSkills = ["React", "HTML5", "CSS3", "JavaScript"];
const backendSkills = [
  "Python",
  "Flask",
  "SQLAlchemy",
  "PostgreSQL",
  "RESTful APIs",
  "Relational Databases",
];
const toolsSkills = ["Git", "Github", "Trello", "Pair Programming"];

function Skills() {
  const { t } = useTranslation();

  return (
    <>
      <div id="skills">
        <div id="skills-title">
          <h2>{t("skills.title")}</h2>
        </div>
        <div id="skills-frontend">
          <h3>{t("skills.frontend")}</h3>
          <div id="skills-frontend-list">
            <ul className="skills-list">
              {frontendSkills.map((skill, index) => (
                <div key={index} className="skills-frontend-list-item">
                  <p>{skill}</p>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <div id="skills-backend">
          <h3>{t("skills.backend")}</h3>
          <div id="skills-backend-list">
            <div id="skills-backend-list">
              <ul className="skills-list backend-list">
                {backendSkills.map((skill, index) => (
                  <div key={index} className="skills-backend-list-item">
                    <p>{skill}</p>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div id="skills-tools">
          <h3>{t("skills.tools")}</h3>
          <div id="skills-tools-list">
            <div id="skills-tools-list">
              <ul className="skills-list">
                {toolsSkills.map((skill, index) => (
                  <div key={index} className="skills-tools-list-item">
                    <p>{skill}</p>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
