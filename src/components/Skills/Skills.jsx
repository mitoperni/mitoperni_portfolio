import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Skills.css';

const skillsList = {
  frontend: ["React", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Responsive Design"],
  backend: ["Python", "Flask", "SQLAlchemy", "PostgreSQL", "RESTful APIs", "Database Design"],
  tools: ["Git", "GitHub", "Agile/Scrum", "VS Code", "Trello", "Pair Programming"]
};

function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">{t("skills.title")}</h2>
      <div className="skills-container">
        {Object.entries(skillsList).map(([category, skills]) => (
          <div key={category} className="skills-category">
            <h3 className="skills-category-title">{t(`skills.${category}`)}</h3>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-card"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
