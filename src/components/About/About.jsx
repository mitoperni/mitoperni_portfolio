import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./About.css";

function About() {
  const { t } = useTranslation();

  return (
    <motion.section
      className="about-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      id="about"
    >
      <h2 className="about-title">{t("about.title")}</h2>
      <div className="about-description">
        <p>{t("about.description")}</p>
        <p>{t("about.description_2")}</p>
        <p>{t("about.description_3")}</p>
      </div>
    </motion.section>
  );
}

export default About;
