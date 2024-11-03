import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './About.css';

function About() {
  const { t } = useTranslation();

  return (
    <motion.section
      className="about-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="about"
    >
      <h2 className="about-title">{t('about.title')}</h2>
      <p className="about-description">{t('about.description')}</p>
    </motion.section>
  );
}

export default About;
