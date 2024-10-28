import React from 'react';
import { useTranslation } from 'react-i18next';

const ProjectCard = ({ title, description, date, isEven }) => (
  <div className={`project-card project-card-${isEven ? 'even' : 'odd'}`}>
    <h3>{title}</h3>
    <p>{description}</p>
    <p>{date}</p>
  </div>
);

const monthsMap = {
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  es: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
  pt: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
};

function Projects() {
  const { t, i18n } = useTranslation();
  
  const parseDate = (dateString) => {
    const [month, year] = dateString.split(' ');
    const monthIndex = monthsMap[i18n.language].indexOf(month);
    return new Date(year, monthIndex);
  };
  
  const projects = Object.entries(t('projects', { returnObjects: true }))
    .filter(([key, project]) => key !== 'title' && project.title && project.description)
    .sort(([, a], [, b]) => {
      const dateA = parseDate(a.date.split(' - ')[0]);
      const dateB = parseDate(b.date.split(' - ')[0]);
      return dateB - dateA;
    })
    .map(([, project]) => project);

  return (
    <section id="projects">
      <h2>{t('projects.title')}</h2>
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