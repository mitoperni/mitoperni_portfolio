// Projects.js
import { useState, useEffect, useRef } from 'react';
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
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  const closeModal = () => setSelectedProject(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionTop = sectionRef.current.offsetTop;
      const scrollY = window.scrollY;

      // Efecto parallax en el título
      if (titleRef.current) {
        const titleDistance = scrollY - sectionTop;
        titleRef.current.style.transform = `translateY(${titleDistance * 0.15}px) scale(${1 - titleDistance / 1000})`;
        titleRef.current.style.opacity = `${1 - titleDistance / 500}`;
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Aplicar observer a cada *card* individualmente
    cardsRef.current.forEach((card) => observer.observe(card));

    // Listener para el scroll
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="projects-section">
      <h2 ref={titleRef} className="projects-title">
        {t('projects.title')}
      </h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div
            ref={(el) => (cardsRef.current[index] = el)}
            className="project-card-wrapper"
            key={index}
          >
            <ProjectCard
              title={project.title}
              date={project.date}
              image={project.image}
              onClick={() => setSelectedProject(project)}
            />
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
};

export default Projects;
