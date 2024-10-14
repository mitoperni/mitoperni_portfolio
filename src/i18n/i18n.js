import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enTranslations from './en.json'
import esTranslations from './es.json'
import ptTranslations from './pt.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      es: { translation: esTranslations },
      pt: { translation: ptTranslations }
    },
    lng: "es", // idioma por defecto
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  })

export default i18n