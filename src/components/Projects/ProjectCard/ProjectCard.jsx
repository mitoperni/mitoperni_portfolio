// ProjectCard.js
import { motion } from 'framer-motion';
import './ProjectCard.css';

// eslint-disable-next-line react/prop-types
const ProjectCard = ({ title, date, image, onClick }) => (
  <motion.div
    className="project-card"
    whileHover={{ scale: 1.05 }}
    onClick={onClick}
  >
    <img src={image} alt={`${title} preview`} className="project-image" />
    <div className="project-info">
      <h3 className="project-title">{title}</h3>
      <span className="project-date">{date}</span>
    </div>
  </motion.div>
);

export default ProjectCard;
