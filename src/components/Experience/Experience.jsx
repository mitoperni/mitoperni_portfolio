// Experience.js
import { useState } from "react";
import { motion } from "framer-motion";
import useScrollAnimationFromRight from "../../hooks/useScrollAnimationFromRight";
import { useTranslation } from "react-i18next";
import JobCard from "./JobCard/JobCard";
import JobModal from "./JobModal/JobModal";
import "./Experience.css";

function Experience() {
  const { t } = useTranslation();
  const jobs = ["job1", "job2", "job3"];

  // Nueva referencia y controles independientes para el título h2
  const { ref, controls } = useScrollAnimationFromRight();
  const { refUp = ref, controlsUp = controls } = useScrollAnimationFromRight();

  // Estados para el modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  // Maneja la apertura del modal con los datos del trabajo seleccionado
  const handleCardClick = (jobKey) => {
    const jobData = {
      title: t(`experience.${jobKey}.title`),
      company: t(`experience.${jobKey}.company`),
      date: t(`experience.${jobKey}.date`),
      description: t(`experience.${jobKey}.description`),
    };
    setSelectedJob(jobData);
    setIsModalOpen(true);
  };

  return (
    <section id="experience" className="experience-section">
      <h2
        className="experience-title-up"
      >
        {t("experience.title")}
      </h2>
      <div className="jobs-container">
        {jobs.map((job) => (
          <JobCard
            key={job}
            jobKey={job}
            onClick={() => handleCardClick(job)}
          />
        ))}
      </div>

      {/* Renderizar el modal si está abierto */}
      {isModalOpen && selectedJob && (
        <JobModal job={selectedJob} onClose={() => setIsModalOpen(false)} />
      )}
      <div className="experience-container">
        <motion.h2
          ref={ref}
          animate={controls}
          initial={{ opacity: 0, x: 300 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="experience-title"
        >
          {t("experience.title")}
        </motion.h2>
      </div>
    </section>
  );
}

export default Experience;
