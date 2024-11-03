import React from 'react';
import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { useTranslation } from 'react-i18next';
import './Projects.css';

const ProjectCard = ({ title, description, date, isEven }) => {
  const { ref, controls } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      className={`project-card ${isEven ? 'even' : 'odd'}`}
      animate={controls}
      initial={{ opacity: 0, y: 50 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <span className="project-date">{date}</span>
    </motion.div>
  );
};

function Projects() {
  const { t } = useTranslation();
  const projects = Object.entries(t('projects', { returnObjects: true }))
    .filter(([key, project]) => key !== 'title' && project.title && project.description)
    .map(([, project]) => project);

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">{t('projects.title')}</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            isEven={index % 2 === 0}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
