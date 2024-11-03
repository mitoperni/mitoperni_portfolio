import React from 'react';
import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { useTranslation } from 'react-i18next';
import './Experience.css';

const JobCard = ({ jobKey }) => {
  const { t } = useTranslation();
  const { ref, controls } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      className="job-card"
      animate={controls}
      initial={{ opacity: 0, y: 50 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h3 className="job-title">{t(`experience.${jobKey}.title`)}</h3>
      <div className="job-info">
        <span className="company">{t(`experience.${jobKey}.company`)}</span>
        <span className="date">{t(`experience.${jobKey}.date`)}</span>
      </div>
      <p className="job-description">{t(`experience.${jobKey}.description`)}</p>
    </motion.div>
  );
};

function Experience() {
  const { t } = useTranslation();
  const jobs = ['job1', 'job2', 'job3'];

  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-title">{t("experience.title")}</h2>
      <div className="jobs-container">
        {jobs.map((job) => (
          <JobCard key={job} jobKey={job} />
        ))}
      </div>
    </section>
  );
}

export default Experience;
