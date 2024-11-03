import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import { useTranslation } from "react-i18next";
import { Linkedin, Github, Calendar1Icon, Mail, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const { t } = useTranslation();
  const form = useRef();
  const [status, setStatus] = useState("");
  const { ref, controls } = useScrollAnimation();

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        form.current.reset();
        setTimeout(() => setStatus(""), 3000);
      })
      .catch((error) => {
        console.error("Error:", error);
        setStatus("error");
        setTimeout(() => setStatus(""), 3000);
      });
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      id="contact"
      className="contact-wrapper"
    >
      {/* Contenedor de información de contacto */}
      <div id="contact-text-div">
        <h2>{t("contact.title")}</h2>
        <p className="contact-description">{t("contact.description")}</p>
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-details">
              <div className="contact-item">
                <Mail size={20} />
                <p>{t("contact.email")}</p>
              </div>
              <div className="contact-item">
                <MapPin size={20} />
                <p>{t("contact.location")}</p>
              </div>
            </div>
            <div className="social-links">
              <a
                href={t("contact.linkedin")}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link linkedin"
              >
                <Linkedin size={20} />
                <span>{t("contact.linkedin_text")}</span>
              </a>
              <a
                href={t("contact.github")}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link github"
              >
                <Github size={20} />
                <span>{t("contact.github_text")}</span>
              </a>
            </div>
            <div>
              <h5>{t("contact.calendly_title")}</h5>
              <a
                href="https://calendly.com/mitoperni/30-minute-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link calendly"
              >
                <Calendar1Icon size={20} />
                <span>{t("contact.calendly_text")}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contenedor del formulario de contacto */}
      <div id="contact-form-div">
        <h4>{t("contact.form.title")}</h4>
        <form ref={form} className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="from_name">{t("contact.form.name")}</label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              required
              placeholder={t("contact.form.name_placeholder")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="reply_to">{t("contact.form.email")}</label>
            <input
              type="email"
              id="reply_to"
              name="reply_to"
              required
              placeholder={t("contact.form.email_placeholder")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">{t("contact.form.message")}</label>
            <textarea
              id="message"
              name="message"
              required
              placeholder={t("contact.form.message_placeholder")}
              rows="4"
            />
          </div>
          <motion.button
            type="submit"
            className={`submit-button ${status}`}
            disabled={status === "sending"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Send size={16} />
            {t(`contact.form.${status || "submit"}`)}
          </motion.button>
          {status === "success" && <p className="success-message">{t("contact.form.success")}</p>}
          {status === "error" && <p className="error-message">{t("contact.form.error")}</p>}
        </form>
      </div>
    </motion.div>
  );
}

export default Contact;
