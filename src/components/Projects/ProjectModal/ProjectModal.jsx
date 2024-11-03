// ProjectModal.js
import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectModal.css';

// Función para centrar el modal dinámicamente
const centerModal = (modal) => {
  if (modal) {
    const { innerHeight, innerWidth, scrollY, scrollX } = window;
    const modalHeight = modal.offsetHeight;
    const modalWidth = modal.offsetWidth;

    const top = (innerHeight - modalHeight) / 2 + scrollY;
    const left = (innerWidth - modalWidth) / 2 + scrollX;

    modal.style.top = `${top}px`;
    modal.style.left = `${left}px`;
  }
};

// Configuración de animaciones para fondo y modal
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 }
};

// eslint-disable-next-line react/prop-types
const ProjectModal = ({ project, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleScrollResize = () => centerModal(modalRef.current);

    // Centrar modal al cargar y en eventos de scroll/resize
    handleScrollResize();
    window.addEventListener('scroll', handleScrollResize);
    window.addEventListener('resize', handleScrollResize);

    // Limpieza de eventos
    return () => {
      window.removeEventListener('scroll', handleScrollResize);
      window.removeEventListener('resize', handleScrollResize);
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="project-modal-backdrop"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
      >
        <motion.div
          ref={modalRef}
          className="project-modal"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()} // Evitar que el click cierre el modal
        >
          <button className="close-button" onClick={onClose}>X</button>
          <img src={project.image} alt={`${project.title} preview`} className="project-modal-image" />
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
    </AnimatePresence>
  );
};

export default ProjectModal;
