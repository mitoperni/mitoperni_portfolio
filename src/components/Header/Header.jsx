import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ReactCountryFlag from "react-country-flag"
import './Header.css';

function Header() {
  const { t, i18n } = useTranslation();
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLangMenuOpen(false);
  };

  const navItems = [ 'experience', 'projects', 'skills', 'contact'];

  const flags = {
    en: { code: 'GB', name: 'English' },
    es: { code: 'ES', name: 'Español' },
    pt: { code: 'PT', name: 'Português' },
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header id="header" className={scrolled ? 'scrolled' : ''}>
      <div className="header-content">
        <nav id="header-nav">
          <div id="header-nav-brand">
            <a href="#home">Mitoperni</a>
          </div>
          <button className="hamburger-menu" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul id="header-nav-list" className={isMenuOpen ? 'open' : ''}>
            {navItems.map((item) => (
              <li key={item}>
                <a href={`#${item}`} onClick={() => setIsMenuOpen(false)}>{t(`header.${item}`)}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div id="header-lang-selector">
          <button id="header-lang-button" onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}>
            <ReactCountryFlag 
              countryCode={flags[i18n.language].code} 
              svg 
              style={{
                width: '15px',
                height: '15px',
                margin: '0',
              }}
              title={flags[i18n.language].name}
            />
          </button>
          {isLangMenuOpen && (
            <ul id="header-lang-menu">
              {Object.entries(flags).map(([lang, flag]) => (
                lang !== i18n.language && (
                  <li key={lang} onClick={() => changeLanguage(lang)}>
                    <ReactCountryFlag 
                      countryCode={flag.code} 
                      svg 
                      style={{
                        width: '15px',
                        height: '15px',
                      }}
                      title={flag.name}
                    />
                  </li>
                )
              ))}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;