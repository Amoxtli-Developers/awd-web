"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import FadeIn from "./FadeIn";

import discoverBlack from "@assets/process/black/discover.gif";
import scopingBlack from "@assets/process/black/scoping.gif";
import designBlack from "@assets/process/black/design.gif";
import developmentBlack from "@assets/process/black/development.gif";
import reviewBlack from "@assets/process/black/review.gif";
import supportBlack from "@assets/process/black/support.gif";


const ProcessSection = () => {
  const { t } = useTranslation();

  const steps = [
    {
      title: t("processSwiper.discovering.title"),
      description: t("processSwiper.discovering.description"),
      image: discoverBlack,
      imageAlt: t("processSwiper.discovering.title"),
    },
    {
      title: t("processSwiper.scoping.title"),
      description: t("processSwiper.scoping.description"),
      image: scopingBlack,
      imageAlt: t("processSwiper.scoping.title"),
    },
    {
      title: t("processSwiper.design.title"),
      description: t("processSwiper.design.description"),
      image: designBlack,
      imageAlt: t("processSwiper.design.title"),
    },
    {
      title: t("processSwiper.development.title"),
      description: t("processSwiper.development.description"),
      image: developmentBlack,
      imageAlt: t("processSwiper.development.title"),
    },
    {
      title: t("processSwiper.review.title"),
      description: t("processSwiper.review.description"),
      image: reviewBlack,
      imageAlt: t("processSwiper.review.title"),
    },
    {
      title: t("processSwiper.support.title"),
      description: t("processSwiper.support.description"),
      image: supportBlack,
      imageAlt: t("processSwiper.support.title"),
    },
  ];

  return (
    <section id="process" className="snap-section snap-center-section bg-paper z-0">
      <div className="mx-auto w-full max-w-[1200px] px-6 py-20">
        <FadeIn>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-ink sm:text-4xl">
                {t("process.titleFull")}
              </h2>
            </div>
            <p className="max-w-[480px] text-sm leading-relaxed text-ink/70 sm:text-base">
              {t("process.description.start")}{" "}
              <span className="font-semibold text-ink">
                {t("process.description.important1")}
              </span>{" "}
              {t("process.description.middle")}{" "}
              <span className="font-semibold text-ink">
                {t("process.description.important2")}
              </span>{" "}
              {t("process.description.end")}{" "}
              <span className="font-semibold text-ink">
                {t("process.description.important3")}
              </span>
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <FadeIn key={step.title} delay={index * 0.04}>
              <article className="group flex h-full min-h-[240px] flex-col rounded-2xl border border-line p-4 transition-colors hover:border-primary sm:p-6">
                <div className="relative h-20 w-20">
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    fill
                    sizes="80px"
                    className="object-contain"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink transition-colors group-hover:text-primary">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  {step.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
