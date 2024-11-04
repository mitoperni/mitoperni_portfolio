// JobCard.js
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import useScrollAnimation from "../../../hooks/useScrollAnimation";
import "./JobCard.css";

// eslint-disable-next-line react/prop-types
const JobCard = ({ jobKey, onClick }) => {
  const { t } = useTranslation();
  const { ref, controls } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      className="job-card"
      animate={controls}
      whileHover={{ scale: 1.01 }}
      onClick={onClick}
    >
      <h3 className="job-title">{t(`experience.${jobKey}.title`)}</h3>
      <div className="job-info">
        <span className="company">{t(`experience.${jobKey}.company`)}</span>
        <span className="date">{t(`experience.${jobKey}.date`)}</span>
      </div>
      <p className="job-plus-info">+ info</p>
    </motion.div>
  );
};

export default JobCard;
