import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ReactCountryFlag from "react-country-flag";
import './Header.css';

function Header() {
  const { t, i18n } = useTranslation();
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState(0); // Para seguir la sección actual
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Para detectar si es pantalla pequeña

  const sections = ['#home', '#experience', '#projects', '#skills', '#contact'];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLangMenuOpen(false);
  };

  const handleNextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
      document.querySelector(sections[currentSection + 1]).scrollIntoView({ behavior: 'smooth' });
    } else {
      setCurrentSection(0); // Volver al inicio
      document.querySelector(sections[0]).scrollIntoView({ behavior: 'smooth' });
    }
  };

  const flags = {
    en: { code: 'GB', name: 'English' },
    es: { code: 'ES', name: 'Español' },
    pt: { code: 'PT', name: 'Português' },
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header id="header" className={scrolled ? 'scrolled' : ''}>
      <div className="header-content">
        <nav id="header-nav">
          <div id="header-nav-brand">
            <a href="#home">Mitoperni</a>
          </div>
          {!isMobile ? (
            <ul id="header-nav-list">
              {sections.map((section, index) => (
                <li key={index}>
                  <a href={section}>{t(`header.${section.substring(1)}`)}</a>
                </li>
              ))}
            </ul>
          ) : (
              <a onClick={handleNextSection} className="next-section-btn">{currentSection < sections.length - 1 ? t('header.next-section') : t('header.back-top')} </a>
          )}
        </nav>
        <div id="header-lang-selector">
          <button id="header-lang-button" onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}>
            <ReactCountryFlag
              countryCode={flags[i18n.language].code}
              svg
              style={{ width: '15px', height: '15px', margin: '0' }}
              title={flags[i18n.language].name}
            />
          </button>
          {isLangMenuOpen && (
            <ul id="header-lang-menu">
              {Object.entries(flags).map(([lang, flag]) =>
                lang !== i18n.language ? (
                  <li key={lang} onClick={() => changeLanguage(lang)}>
                    <ReactCountryFlag
                      countryCode={flag.code}
                      svg
                      style={{ width: '15px', height: '15px' }}
                      title={flag.name}
                    />
                  </li>
                ) : null
              )}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
