"use client";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const LANG_STORAGE_KEY = "amoxtli-language";

export const useLanguage = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem(LANG_STORAGE_KEY);
    if (saved && saved !== i18n.language) {
      i18n.changeLanguage(saved);
    }
  }, [i18n]);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = i18n.language || "en";
    }
  }, [i18n.language]);

  const setLanguage = (lang: "en" | "es") => {
    i18n.changeLanguage(lang);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(LANG_STORAGE_KEY, lang);
      document.cookie = `amoxtli-language=${lang}; path=/; max-age=31536000`;
    }
  };

  return {
    language: (i18n.language || "en") as "en" | "es",
    setLanguage,
  };
};
