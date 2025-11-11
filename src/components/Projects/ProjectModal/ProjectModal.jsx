/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  const { t } = useTranslation();
  const modalRef = useRef(null);

  useEffect(() => {
    const handleScrollResize = () => {
      if (modalRef.current) {
        const { innerHeight, innerWidth, scrollY, scrollX } = window;
        const modalHeight = modalRef.current.offsetHeight;
        const modalWidth = modalRef.current.offsetWidth;

        // Solo posicionar si el modal ya tiene dimensiones
        if (modalHeight > 0 && modalWidth > 0) {
          // Centrar en el viewport visible actual
          const top = scrollY + Math.max(0, (innerHeight - modalHeight) / 2);
          const left = scrollX + Math.max(0, (innerWidth - modalWidth) / 2);

          modalRef.current.style.top = `${top}px`;
          modalRef.current.style.left = `${left}px`;
        }
      }
    };

    // Centrar el modal al cargar con un pequeño delay para asegurar que el DOM esté listo
    const initialPosition = setTimeout(handleScrollResize, 0);

    // También verificar después de que las animaciones/imágenes se carguen
    const delayedPosition = setTimeout(handleScrollResize, 100);

    window.addEventListener('scroll', handleScrollResize);
    window.addEventListener('resize', handleScrollResize);

    return () => {
      clearTimeout(initialPosition);
      clearTimeout(delayedPosition);
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
          <button className="close-button" onClick={onClose}>
            X
          </button>

          <video
            key={project.video}
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
            className="project-modal-image"
          />

          <h2 className="project-modal-title">{project.title}</h2>
          <p className="project-modal-description">{project.description}</p>

          {project.technologies && Array.isArray(project.technologies) && (
            <p className="project-modal-technologies">
              <strong>Tecnologías:</strong> {project.technologies.join(", ")}
            </p>
          )}

          {project.link && (
            <button
              onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
              className="link-button"
            >
              {t('projects.viewProject')}
            </button>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;