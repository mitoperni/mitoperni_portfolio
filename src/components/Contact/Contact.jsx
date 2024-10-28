import React from "react";
import { useTranslation } from "react-i18next";
import { Linkedin, Github, Mail, MapPin } from "lucide-react";
import './Contact.css'

function Contact() {
  const { t } = useTranslation();

  const handleEmailClick = () => {
    window.location.href = `mailto:${t('contact.email')}`;
  };

  return (
    <section id="contact">
      <div id="contact-content">
        <h2>{t("contact.title")}</h2>
        <p className="contact-description">{t("contact.description")}</p>
        
        <div className="contact-info">
          <div id="contact-name">
            <h3>{t('contact.name')}</h3>
          </div>
          
          <div className="contact-details">
            <div 
              className="contact-item" 
              onClick={handleEmailClick} 
              role="button" 
              tabIndex={0}
            >
              <Mail size={20} />
              <p>{t('contact.email')}</p>
            </div>
            
            <div className="contact-item">
              <MapPin size={20} />
              <p>{t('contact.location')}</p>
            </div>
          </div>
          
          <div className="social-links">
            <a 
              href={t('contact.linkedin')} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link linkedin"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
              <span>{t('contact.linkedin_text')}</span>
            </a>
            <a 
              href={t('contact.github')} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link github"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
              <span>{t('contact.github_text')}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;