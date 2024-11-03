// ProjectModal.js
import { motion } from 'framer-motion';
import './ProjectModal.css';

// eslint-disable-next-line react/prop-types
const ProjectModal = ({ project, onClose }) => (
  <motion.div
    className="project-modal-backdrop"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
  >
    <motion.div
      className="project-modal"
      initial={{ y: "-100vh" }}
      animate={{ y: "0" }}
      exit={{ y: "-100vh" }}
      onClick={(e) => e.stopPropagation()} // Evitar que el click cierre el modal
    >
      <button className="close-button" onClick={onClose}>X</button>
      <img src={project.gif} alt={`${project.title} preview`} className="project-modal-image" />
      <h2 className="project-modal-title">{project.title}</h2>
      <p className="project-modal-description">{project.description}</p>
      {project.technologies && Array.isArray(project.technologies) && (
        <p className="project-modal-technologies">
          <strong>Tecnologías:</strong> {project.technologies.join(', ')}
        </p>
      )}
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-modal-link">Ver Demo</a>
    </motion.div>
  </motion.div>
);

export default ProjectModal;
