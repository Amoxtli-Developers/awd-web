"use client";

import { useTranslation } from "react-i18next";
import { GraduationCap, Handshake } from "lucide-react";
import FadeIn from "./FadeIn";

const InitiativesSection = () => {
  const { t } = useTranslation();

  return (
    <section id="initiatives" className="snap-section snap-center-section bg-paper z-0">
      <div className="mx-auto w-full max-w-[1200px] px-6 py-20">
        <FadeIn>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-semibold text-ink sm:text-4xl">
                {t("initiatives.title")}
              </h2>
              <p className="max-w-[520px] text-sm text-ink/70 sm:text-base">
                {t("initiatives.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="flex flex-col gap-6 rounded-[28px] border border-[#1F2A44] bg-[#1F2A44] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                <div className="flex max-w-[520px] flex-col gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-paper/30 text-paper">
                    <Handshake className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-2xl font-semibold text-paper">
                    {t("initiatives.partners.title")}
                  </h3>
                  <p className="text-sm leading-relaxed text-paper/80 sm:text-base">
                    {t("initiatives.partners.description")}
                  </p>
                </div>
                <a
                  href="https://partners.amoxtli.tech"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-paper px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-paper hover:text-[#1F2A44]"
                >
                  {t("initiatives.partners.cta")}
                </a>
              </div>

              <div className="flex flex-col gap-6 rounded-[28px] border border-[#4F46E5] bg-[#4F46E5] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                <div className="flex max-w-[520px] flex-col gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-paper/30 text-paper">
                    <GraduationCap className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-2xl font-semibold text-paper">
                    {t("initiatives.school.title")}
                  </h3>
                  <p className="text-sm leading-relaxed text-paper/80 sm:text-base">
                    {t("initiatives.school.description")}
                  </p>
                </div>
                <a
                  href="https://school.amoxtli.tech/#home"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-paper px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-paper hover:text-[#4F46E5]"
                >
                  {t("initiatives.school.cta")}
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default InitiativesSection;
