"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import FadeIn from "./FadeIn";
import heroImage from "@assets/hero/hero.jpg";
import logoWhite from "@assets/logo/white.svg";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="top"
      className="snap-section relative -mt-[88px] min-h-screen overflow-hidden bg-paper pt-[88px] z-0"
    >
      <Image
        src={heroImage}
        alt={t("hero.backgroundAlt")}
        priority
        fill
        className="object-cover blur-[2px]"
      />
      <div className="absolute inset-0 bg-ink/12" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(0,0,0,0.28),rgba(0,0,0,0.05))]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1200px] items-center justify-end px-6 py-16">
        <div className="flex max-w-[560px] flex-col items-end text-right text-paper drop-shadow-[0_6px_16px_rgba(0,0,0,0.35)]">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] text-paper/70">
              {t("hero.subheading")}
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="mt-4 flex flex-wrap items-center justify-end gap-3 text-[2.8rem] font-semibold leading-[1.05] sm:text-[3.6rem] md:text-[4.2rem]">
              <span>{t("hero.title")}</span>
              <Image
                src={logoWhite}
                alt={t("brand.logoAlt")}
                width={220}
                height={56}
                className="h-10 w-auto sm:h-12 md:h-14"
                priority
              />
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-paper/80 sm:text-lg">
              {t("hero.description")}
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-6 flex flex-wrap items-center justify-end gap-4">
              <a
                href="https://calendar.app.google/XSn3nbJqGQ1imCnJ8"
                target="_blank"
                rel="noreferrer"
                className="group min-h-[44px] rounded-full border border-paper px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-paper"
              >
                <span className="text-paper transition-colors group-hover:mix-blend-difference">
                  {t("hero.primaryCta")}
                </span>
              </a>
              <a
                href="#projects"
                className="min-h-[44px] rounded-full border border-paper/60 px-6 py-3 text-sm font-semibold text-paper transition-colors hover:border-paper hover:bg-paper/10"
              >
                {t("hero.secondaryCta")}
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
