// Hero.jsx
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./Hero.css";

function Hero() {
  const { t } = useTranslation();

  return (
    <motion.section
      className="hero-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">{t("hero.greeting")} Miguel</h1>
          <p className="hero-subtitle">{t("hero.title")}</p>
          <p className="hero-description">{t("hero.subtitle")}</p>
        </div>
        <motion.div
          className="hero-action"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.a
            href="#experience"
            className="cta-button"
            whileHover={{ scale: 1.05, boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            {t("hero.cta")}
          </motion.a>
          <p className="hero-location">{t("hero.location")}</p>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero;
