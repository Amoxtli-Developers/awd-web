import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en/translation.json";
import translationES from "./locales/es/translation.json";

const getInitialLanguage = () => {
  if (typeof window === "undefined") return "es";
  const stored = window.localStorage.getItem("amoxtli-lang");
  if (stored) return stored;
  return "es";
};

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEN },
    es: { translation: translationES },
  },
  lng: getInitialLanguage(),
  fallbackLng: "es",
  supportedLngs: ["en", "es"],
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
