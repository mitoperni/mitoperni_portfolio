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

const ProjectModal = ({ project, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleScrollResize = () => {
      if (modalRef.current) {
        const { innerHeight, innerWidth, scrollY, scrollX } = window;
        const modalHeight = modalRef.current.offsetHeight;
        const modalWidth = modalRef.current.offsetWidth;
        const top = (innerHeight - modalHeight) / 2 + scrollY;
        const left = (innerWidth - modalWidth) / 2 + scrollX;
        modalRef.current.style.top = `${top}px`;
        modalRef.current.style.left = `${left}px`;
      }
    };

    // Centrar el modal al cargar y al redimensionar/scroll
    handleScrollResize();
    window.addEventListener('scroll', handleScrollResize);
    window.addEventListener('resize', handleScrollResize);

    return () => {
      window.removeEventListener('scroll', handleScrollResize);
      window.removeEventListener('resize', handleScrollResize);
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="project-modal-backdrop"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          ref={modalRef}
          className="project-modal"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={(e) => e.stopPropagation()} // Evitar que el click cierre el modal
        >
          <button className="close-button" onClick={onClose}>X</button>

          {/* Imagen GIF con key única para forzar la recarga */}
          <img
            src={project.gif}
            alt={`${project.title} preview`}
            className="project-modal-image"
            key={project.gif + Date.now()} // Usa Date.now() para generar una key única
          />

          <h2 className="project-modal-title">{project.title}</h2>
          <p className="project-modal-description">{project.description}</p>

          {project.technologies && Array.isArray(project.technologies) && (
            <p className="project-modal-technologies">
              <strong>Tecnologías:</strong> {project.technologies.join(', ')}
            </p>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;