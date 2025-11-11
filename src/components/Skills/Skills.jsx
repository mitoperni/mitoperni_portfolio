import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./Skills.css";

const skillsList = {
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "React Router",
    "Phoenix",
    "TailwindCSS",
    "Bootstrap",
    "Figma",
    "SEO",
    "Lighthouse",
    "Internationalization",
    "User Experience",
    "Playwright",
    "Jest",
    "Responsive Design",
  ],
  backend: [
    "Python",
    "Flask",
    "Elixir",
    "SQLAlchemy",
    "PostgreSQL",
    "MongoDB",
    "RESTful APIs",
    "Node.js",
    "GraphQL",
    "JSON",
    "JWT",
    "OAuth",
    "JWT",
  ],
  tools: [
    "GitHub",
    "Git",
    "GitHub Actions",
    "Docker",
    "MongoDB Compass",
    "VS Code",
    "Postman",
    "Vite",
    "Vercel",
    "Jira",
    "Confluence",
    "Notion",
    "Slack",
    "Trello",
    "Draw.io",
  ],
};

function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title-2">{t("skills.title")}</h2>
      <div className="skills-container">
        {Object.entries(skillsList).map(([category, skills]) => (
          <div
            key={category}
            className="skills-category"
          >
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
      <h2 className="skills-title">{t("skills.title")}</h2>
    </section>
  );
}

export default Skills;
