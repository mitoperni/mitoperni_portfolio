import React from 'react'

function About() {
  return (
    <div id='about'>
      <div id="about-title">
        <p>{t('about.title')}</p>
      </div>
      <div id="about-description">
        <p>{t('about.description')}</p>
      </div>
    </div>
  )
}

export default About