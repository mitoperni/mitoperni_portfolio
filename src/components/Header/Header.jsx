import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Header.css';

function Header() {
  const { t, i18n } = useTranslation();
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLangMenuOpen(false);
  };

  const navItems = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];

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

  return (
    <header id="header" className={scrolled ? 'scrolled' : ''}>
      <div className="header-content">
        <nav id="header-nav">
          <ul id="header-nav-list">
            {navItems.map((item) => (
              <li key={item}>
                <a href={`#${item}`}>{t(`header.${item}`)}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div id="header-lang-selector">
          <button id="header-lang-button" onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}>
            {i18n.language.toUpperCase()}
          </button>
          {isLangMenuOpen && (
            <ul id="header-lang-menu">
              <li onClick={() => changeLanguage('en')}>🇬🇧 EN</li>
              <li onClick={() => changeLanguage('es')}>🇪🇸 ES</li>
              <li onClick={() => changeLanguage('pt')}>🇵🇹 PT</li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;