import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importa los archivos de traducción
import translationEN from "./locales/en/translation.json";
import translationES from "./locales/es/translation.json";

i18n
  .use(initReactI18next) // Inicializa react-i18next
  .init({
    resources: {
      en: { translation: translationEN },
      es: { translation: translationES },
    },
    lng: "en", // Establece inglés como idioma predeterminado
    fallbackLng: "en", // Idioma de respaldo en caso de que falten traducciones
    interpolation: {
      escapeValue: false, // React ya maneja el escape
    },
  });

export default i18n;
