import React from "react";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  return (
    <div id="hero">
      <div id="hero-greeting">
        <p>{t("hero.greeting")}</p>
      </div>
      <div id="hero-name">
        <p>{t("hero.name")}</p>
      </div>
      <div id="hero-title">
        <p>{t("hero.title")}</p>
      </div>
      <div id="hero-subtitle">
        <p>{t("hero.subtitle")}</p>
      </div>
    </div>
  );
}

export default Hero;
