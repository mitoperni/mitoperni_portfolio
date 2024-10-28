import React from "react";
import { useTranslation } from "react-i18next";

// Componente para un trabajo individual
const JobCard = ({ jobKey }) => {
  const { t } = useTranslation();
  
  return (
    <div className="job-card">
      <h3>{t(`experience.${jobKey}.title`)}</h3>
      <div className="job-info">
        <span className="company">{t(`experience.${jobKey}.company`)}</span>
        <span className="date">{t(`experience.${jobKey}.date`)}</span>
      </div>
      <p className="description">{t(`experience.${jobKey}.description`)}</p>
    </div>
  );
};

function Experience() {
  const { t } = useTranslation();
  const jobs = ['job1', 'job2', 'job3']; // Fácil de expandir añadiendo más jobs aquí

  return (
    <section id="experience">
      <h2>{t("experience.title")}</h2>
      <div className="jobs-container">
        {jobs.map((job) => (
          <JobCard key={job} jobKey={job} />
        ))}
      </div>
    </section>
  );
}

export default Experience;