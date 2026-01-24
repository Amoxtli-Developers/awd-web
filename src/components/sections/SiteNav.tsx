"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import LanguageToggle from "./LanguageToggle";
import styles from "./sections.module.css";
import logoMain from "@assets/logo/main.svg";
import logoWhite from "@assets/logo/white.svg";

const SiteNav = ({
  onLanguageChange,
}: {
  onLanguageChange: (lang: "en" | "es") => void;
}) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const navLinks = useMemo(
    () => [
      { href: "#meet-awd", label: t("navbar.meetAWD") },
      { href: "#services", label: t("navbar.services") },
      { href: "#process", label: t("navbar.process") },
      { href: "#projects", label: t("navbar.projects") },
      { href: "#pricing", label: t("navbar.pricing") },
      { href: "#testimonials", label: t("navbar.testimonials") },
      { href: "#initiatives", label: t("navbar.initiatives") },
    ],
    [t]
  );

  useEffect(() => {
    const container = document.querySelector(".snap-container");
    const hero = document.getElementById("top");
    if (!hero || !container) return;

    const handleScroll = () => {
      const rect = hero.getBoundingClientRect();
      setIsScrolled(rect.bottom <= 80);
    };

    handleScroll();
    container.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open) {
      if (!dialog.open) {
        dialog.showModal();
      }
      setPanelOpen(false);
      requestAnimationFrame(() => setPanelOpen(true));
      return;
    }

    setPanelOpen(false);
    const timer = window.setTimeout(() => {
      if (dialog.open) {
        dialog.close();
      }
    }, 300);

    return () => window.clearTimeout(timer);
  }, [open]);

  const linkClass = isScrolled
    ? "text-ink/70 hover:text-ink"
    : "text-paper/80 hover:text-paper";
  const activeClass = isScrolled ? "text-primary" : "text-secondary";
  const ctaClass = isScrolled
    ? "border-primary text-primary hover:bg-primary hover:text-paper"
    : "border-paper text-paper hover:bg-paper hover:text-paper";

  const [activeSection, setActiveSection] = useState("#top");

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean) as Element[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          const id = `#${visible[0].target.id}`;
          setActiveSection(id);
        }
      },
      { root: document.querySelector(".snap-container"), threshold: [0.3, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [navLinks]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-[120] transition-colors ${
        isScrolled
          ? "border-b border-line bg-paper/95 backdrop-blur"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-6 py-2">
        <a href="#top" className="flex items-center">
          <Image
            src={isScrolled ? logoMain : logoWhite}
            alt={t("brand.logoAlt")}
            width={80}
            height={20}
            className="h-5 w-auto"
            priority
          />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          <div className="flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors ${linkClass} ${
                  activeSection === link.href ? activeClass : ""
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <LanguageToggle
            compact
            inverse={!isScrolled}
            onLanguageChange={onLanguageChange}
          />
          <button
            type="button"
            onClick={() => {
              window.open("https://calendar.app.google/XSn3nbJqGQ1imCnJ8", "_blank", "noopener,noreferrer");
            }}
            className={`group min-h-[44px] rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${ctaClass}`}
          >
            <span className={`${isScrolled ? "text-current" : "text-paper"} transition-colors ${!isScrolled ? "group-hover:mix-blend-difference" : ""}`}>
              {t("navbar.bookCall")}
            </span>
          </button>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <LanguageToggle
            compact
            inverse={!isScrolled}
            onLanguageChange={onLanguageChange}
          />
          <button
            type="button"
            className={`flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border ${
              isScrolled ? "border-line text-ink" : "border-paper/60 text-paper"
            }`}
            aria-label={t("nav.openMenu")}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className="sr-only">{t("nav.openMenu")}</span>
            <div className="flex flex-col gap-1">
              <span
                className={`h-[2px] w-5 rounded ${
                  isScrolled ? "bg-ink" : "bg-paper"
                }`}
              />
              <span
                className={`h-[2px] w-5 rounded ${
                  isScrolled ? "bg-ink" : "bg-paper"
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      <div className="lg:hidden">
        <dialog
          ref={dialogRef}
          className={`${styles.mobileDialog} m-0 h-full w-full bg-transparent p-0`}
          onClose={() => setOpen(false)}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setOpen(false);
            }
          }}
          aria-label={t("nav.openMenu")}
        >
          <div className={`${styles.mobilePanel} ${panelOpen ? styles.mobilePanelOpen : ""}`}>
            <div className="flex items-center justify-end border-b border-paper/30 px-6 py-4">
              <button
                type="button"
                className="min-h-[40px] min-w-[40px] rounded-full border border-paper/40 text-paper"
                onClick={() => setOpen(false)}
                aria-label={t("nav.closeMenu")}
              >
                ✕
              </button>
            </div>
            <div className="flex flex-col gap-6 px-6 py-8 text-base text-paper">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="min-h-[44px] text-paper/80 transition-all duration-300 hover:text-paper"
                  style={{ transitionDelay: `${index * 40}ms` }}
                >
                  {link.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  window.open("https://calendar.app.google/XSn3nbJqGQ1imCnJ8", "_blank", "noopener,noreferrer");
                }}
                className="min-h-[44px] rounded-full border border-paper px-5 py-2 text-center text-sm font-semibold text-paper transition-colors hover:bg-paper hover:text-primary"
              >
                {t("navbar.bookCall")}
              </button>
            </div>
          </div>
        </dialog>
      </div>
    </header>
  );
};

export default SiteNav;
