import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./JobModal.css";

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

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
};

const JobModal = ({ job, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleScrollResize = () => centerModal(modalRef.current);

    handleScrollResize();
    window.addEventListener("scroll", handleScrollResize);
    window.addEventListener("resize", handleScrollResize);

    return () => {
      window.removeEventListener("scroll", handleScrollResize);
      window.removeEventListener("resize", handleScrollResize);
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="jobmodal-backdrop"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
      >
        <motion.div
          ref={modalRef}
          className="jobmodal-content"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="jobmodal-close-button" onClick={onClose}>X</button>
          <h3 className="jobmodal-title">{job.title}</h3>
          <div className="jobmodal-info">
            <span className="jobmodal-company">{job.company}</span>
            <span className="jobmodal-date">{job.date}</span>
          </div>
          <p className="jobmodal-description">{job.description}</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default JobModal;
