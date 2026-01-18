"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ArrowUp } from "lucide-react";
import LanguageToggle from "./LanguageToggle";
import logoMark from "@assets/logo/main.svg";

const SiteFooter = () => {
  const { t } = useTranslation();
  const footerRef = useRef<HTMLDivElement | null>(null);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const container = document.querySelector(".snap-container");
    if (!container || !footerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowTop(entry.isIntersecting);
      },
      { root: container, threshold: 0.2 }
    );

    observer.observe(footerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="snap-section snap-center-section bg-paper">
      <div ref={footerRef} className="mx-auto w-full max-w-[1200px] px-6 py-16">
        <div className="grid grid-cols-1 gap-10 rounded-[36px] border border-line bg-paper p-6 md:grid-cols-[1.1fr_0.9fr] md:p-12">
          <div>
            <h2 className="text-3xl font-semibold text-ink sm:text-4xl">
              {t("contact.title")}
            </h2>
            <p className="mt-4 max-w-[460px] text-sm leading-relaxed text-ink/70 sm:text-base">
              {t("contact.subtitle")}
            </p>
            <p className="mt-6 text-sm text-ink/70">{t("contact.note")}</p>
            <div className="mt-8">
              <a
                href="https://calendar.app.google/XSn3nbJqGQ1imCnJ8"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[44px] items-center rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-paper"
              >
                {t("contact.primaryCta")}
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-8">
            <div className="flex items-center justify-between">
              <Image
                src={logoMark}
                alt={t("brand.logoAlt")}
                width={80}
                height={20}
                className="h-5 w-auto"
              />
              <LanguageToggle compact />
            </div>

            <div className="grid grid-cols-2 gap-6 text-sm">
              <div className="flex flex-col gap-3">
                <p className="text-xs uppercase tracking-[0.3em] text-ink/50">
                  {t("footer.sections.links")}
                </p>
                <a
                  href="https://reptilarioyajolotarioquetzal.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink/70 hover:text-primary"
                >
                  {t("footer.links.helpAxolotls")}
                </a>
                <a
                  href="https://partners.amoxtli.tech"
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink/70 hover:text-primary"
                >
                  {t("footer.links.visitSanctuary")}
                </a>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-xs uppercase tracking-[0.3em] text-ink/50">
                  {t("footer.sections.social")}
                </p>
                <a href="https://www.instagram.com/amoxtli.tech" className="text-ink/70 hover:text-primary" target="_blank" rel="noreferrer">
                  {t("footer.social.instagram")}
                </a>
                <a href="https://www.linkedin.com/company/amoxtli-web-developers" className="text-ink/70 hover:text-primary" target="_blank" rel="noreferrer">
                  {t("footer.social.linkedin")}
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-3 border-t border-line pt-6 text-xs text-ink/60">
              <a
                href={`mailto:${t("footer.contact")}`}
                className="text-ink/70 hover:text-primary"
              >
                {t("footer.contact")}
              </a>
              <div className="text-xs text-ink/50">
                {t("footer.copyright")} · {t("footer.rights")}
              </div>
            </div>
          </div>
        </div>
      </div>
      {showTop && (
        <button
          type="button"
          onClick={() => {
            const target = document.getElementById("top");
            if (target) {
              target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }}
          className="fixed bottom-6 left-1/2 z-40 inline-flex min-h-[44px] -translate-x-1/2 items-center gap-2 rounded-full border border-line bg-paper px-4 text-xs font-semibold text-ink shadow-[0_10px_24px_rgba(0,0,0,0.12)] transition-colors hover:border-primary hover:text-primary"
          aria-label={t("footer.backToTop")}
          title={t("footer.backToTop")}
        >
          <ArrowUp className="h-4 w-4" />
          {t("footer.backToTop")}
        </button>
      )}
    </footer>
  );
};

export default SiteFooter;
