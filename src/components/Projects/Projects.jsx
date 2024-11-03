// Projects.js
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from './ProjectCard/ProjectCard';
import ProjectModal from './ProjectModal/ProjectModal';
import './Projects.css';

const Projects = () => {
  const { t } = useTranslation();
  const projects = Object.entries(t('projects', { returnObjects: true }))
    .filter(([key, project]) => key !== 'title' && project.title && project.description)
    .map(([, project]) => project);

  const [selectedProject, setSelectedProject] = useState(null);

  // Función para cerrar el modal
  const closeModal = () => setSelectedProject(null);

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">{t('projects.title')}</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            date={project.date}
            image={project.image}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
};

export default Projects;
