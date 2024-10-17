import React from 'react';
import { useTranslation } from 'react-i18next';

function Projects() {
  const { t, i18n } = useTranslation();
  
  // Obtener los datos de los proyectos del objeto de traducción
  const projectsData = t('projects', { returnObjects: true });
  
  // Función para convertir la fecha a un formato que se pueda ordenar
  const parseDate = (dateString) => {
    const months = {
      'en': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      'es': ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
      'pt': ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
    };
    const [month, year] = dateString.split(' ');
    const monthIndex = months[i18n.language].indexOf(month);
    return new Date(year, monthIndex);
  };
  
  // Ordenar proyectos por fecha de inicio (más reciente primero)
  const sortedProjects = Object.values(projectsData)
    .filter(project => project.title && project.description) // Filtra elementos que no son proyectos
    .sort((a, b) => {
      const dateA = parseDate(a.date.split(' - ')[0]);
      const dateB = parseDate(b.date.split(' - ')[0]);
      return dateB - dateA;
    });
  
  const evenProject = (n) => {
    if (n % 2 === 0){
      return 'even'
    }
    else return 'odd'
  }
  
  return (
    <div>
      <h2>{t('projects.title')}</h2>
      {sortedProjects.map((project, index) => (
        <div key={index} className={'project-card project-card-' + evenProject(index)}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p>{project.date}</p>
        </div>
      ))}
    </div>
  );
}

export default Projects;