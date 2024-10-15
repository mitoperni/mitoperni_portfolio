import React from "react";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  return (
    <div id="contact-name">
      <div id="contact-description">
        <h2>{t("contact.title")}</h2>
        <h5>{t("contact.description")}</h5>
      </div>
      <div id="contact-name">
        <p>{t('contact.name')}</p>
      </div>
      <div id="contact-email">
        <p>{t('contact.email')}</p>
      </div>
    </div>
  );
}

export default Contact;
