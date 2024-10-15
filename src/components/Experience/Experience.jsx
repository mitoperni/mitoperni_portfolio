import React from "react";
import { useTranslation } from "react-i18next";

function Experience() {
  const { t } = useTranslation();

  return (
    <div id="experience">
      <div id="experience-title">
        <p>{t("experience.title")}</p>
      </div>


      <div id="experience-job1">
        <div id="experience-job1-title">
          <p>{t('experience.job1.title')}</p>
        </div>
        <div id="experience-job1-date">
          <p>{t('experience.job1.date')}</p>
        </div>
        <div id="experience-job1-company">
          <p>{t('experience.job1.company')}</p>
        </div>
        <div id="experience-job1-description">
          <p>{t('experience.job1.description')}</p>
        </div>
      </div>


      <div id="experience-job2">
        <div id="experience-job2-title">
          <p>{t('experience.job2.title')}</p>
        </div>
        <div id="experience-job2-date">
          <p>{t('experience.job2.date')}</p>
        </div>
        <div id="experience-job2-company">
          <p>{t('experience.job2.company')}</p>
        </div>
        <div id="experience-job2-description">
          <p>{t('experience.job2.description')}</p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
