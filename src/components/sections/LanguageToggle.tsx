"use client";

import { useTranslation } from "react-i18next";
import { useLanguage } from "./useLanguage";

interface LanguageToggleProps {
  compact?: boolean;
  inverse?: boolean;
}

const LanguageToggle = ({ compact = false, inverse = false }: LanguageToggleProps) => {
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguage();

  const baseBg = inverse ? "bg-transparent border-paper/40" : "bg-paper border-line";
  const activeBg = inverse ? "bg-paper text-ink" : "bg-primary text-paper";
  const inactiveText = inverse ? "text-paper/70 hover:text-paper" : "text-ink/70 hover:text-ink";

  return (
    <div
      className={`flex items-center gap-2 rounded-full border p-1 uppercase tracking-[0.2em] ${baseBg} ${
        compact ? "text-[10px]" : "text-xs"
      }`}
      aria-label={t("nav.languageLabel")}
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`min-h-[36px] min-w-[44px] rounded-full px-3 transition-colors ${
          language === "en"
            ? activeBg
            : inactiveText
        }`}
        aria-pressed={language === "en"}
      >
        {t("nav.langEn")}
      </button>
      <button
        type="button"
        onClick={() => setLanguage("es")}
        className={`min-h-[36px] min-w-[44px] rounded-full px-3 transition-colors ${
          language === "es"
            ? activeBg
            : inactiveText
        }`}
        aria-pressed={language === "es"}
      >
        {t("nav.langEs")}
      </button>
    </div>
  );
};

export default LanguageToggle;
