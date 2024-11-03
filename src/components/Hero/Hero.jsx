// Hero.jsx (Ejemplo de un efecto parallax en Hero)
import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./Hero.css";

function Hero() {
  const { t } = useTranslation();
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 300], [0, 50]); // Ajusta los valores según la intensidad del parallax

  return (
    <motion.section
      className="hero-section"
      style={{ y }}
    >
      <h1 className="hero-title">{t("hero.greeting")} Miguel</h1>
      <p className="hero-subtitle">{t("hero.title")}</p>
      <p className="hero-description">{t("hero.subtitle")}</p>
      <motion.a
        href="#about"
        className="cta-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {t("hero.cta")}
      </motion.a>
    </motion.section>
  );
}

export default Hero;
