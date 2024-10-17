import React from 'react'
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <div id='about'>
      <div id="about-title">
        <h2>{t('about.title')}</h2>
      </div>
      <div id="about-description">
        <p>{t('about.description')}</p>
      </div>
    </div>
  )
}

export default About