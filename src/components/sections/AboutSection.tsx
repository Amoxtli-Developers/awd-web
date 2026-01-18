"use client";

import { useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import FadeIn from "./FadeIn";
import gsap from "gsap";
import teamPhoto from "@assets/about/team.jpg";

const AboutSection = () => {
  const { t } = useTranslation();
  const enableGsap = true;
  const chipRefs = useRef<(HTMLDivElement | null)[]>([]);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const pillars = [
    {
      title: t("about.objectivesTitle"),
      text: t("about.objectives"),
    },
    {
      title: t("about.valuesTitle"),
      text: t("about.values"),
    },
    {
      title: t("about.focusTitle"),
      text: t("about.focus"),
    },
    {
      title: t("about.goalsTitle"),
      text: t("about.goals"),
    },
  ];

  useEffect(() => {
    if (!enableGsap || prefersReducedMotion) return;

    const cleanups: Array<() => void> = [];

    chipRefs.current.forEach((chip) => {
      if (!chip) return;

      const onEnter = () => {
        gsap.to(chip, { rotate: 3, y: -2, duration: 0.25, ease: "power2.out" });
      };

      const onLeave = () => {
        gsap.to(chip, { rotate: 0, y: 0, duration: 0.25, ease: "power2.out" });
      };

      chip.addEventListener("mouseenter", onEnter);
      chip.addEventListener("mouseleave", onLeave);

      cleanups.push(() => {
        chip.removeEventListener("mouseenter", onEnter);
        chip.removeEventListener("mouseleave", onLeave);
      });
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [enableGsap, prefersReducedMotion]);


  return (
    <section id="meet-awd" className="snap-section snap-center-section bg-paper z-0">
      <div className="mx-auto w-full max-w-[1200px] px-6 py-20">
        <FadeIn>
          <div className="mx-auto max-w-[720px]">
            <h2 className="mt-3 text-center text-3xl font-semibold text-ink sm:text-4xl">
              {t("about.missionShort")}
            </h2>
            <p className="mt-4 text-center text-sm leading-relaxed text-ink/70 sm:text-base">
              {t("about.objective")}
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <FadeIn delay={0.1}>
            <div className="relative h-80 w-full overflow-hidden rounded-2xl border border-line">
              <Image
                src={teamPhoto}
                alt={t("about.teamAlt")}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover "
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {pillars.map((item) => (
                <article key={item.title} className="rounded-2xl border border-line p-4 transition-colors hover:border-primary sm:p-5">
                  <p className="text-sm font-semibold text-ink">{item.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <div
              className="flex items-center justify-center rounded-full bg-secondary px-4 py-2 text-center cursor-pointer"
              ref={(el) => {
                chipRefs.current[0] = el;
              }}
            >
              <p className="text-xs font-semibold text-paper whitespace-nowrap">
                {t("about.metrics.projects")}
              </p>
            </div>
            <div
              className="flex items-center justify-center rounded-full bg-secondary px-4 py-2 text-center cursor-pointer"
              ref={(el) => {
                chipRefs.current[1] = el;
              }}
            >
              <p className="text-xs font-semibold text-paper whitespace-nowrap">
                {t("about.metrics.industries")}
              </p>
            </div>
            <div
              className="flex items-center justify-center rounded-full bg-secondary px-4 py-2 text-center cursor-pointer"
              ref={(el) => {
                chipRefs.current[2] = el;
              }}
            >
              <p className="text-xs font-semibold text-paper whitespace-nowrap">
                {t("about.metrics.products")}
              </p>
            </div>
            <div
              className="flex items-center justify-center rounded-full bg-secondary px-4 py-2 text-center cursor-pointer"
              ref={(el) => {
                chipRefs.current[3] = el;
              }}
            >
              <p className="text-xs font-semibold text-paper whitespace-nowrap">
                {t("about.metrics.ai")}
              </p>
            </div>
            <div
              className="flex items-center justify-center rounded-full bg-secondary px-4 py-2 text-center cursor-pointer"
              ref={(el) => {
                chipRefs.current[4] = el;
              }}
            >
              <p className="text-xs font-semibold text-paper whitespace-nowrap">
                {t("about.metrics.automation")}
              </p>
            </div>
            <div
              className="flex items-center justify-center rounded-full bg-secondary px-4 py-2 text-center cursor-pointer"
              ref={(el) => {
                chipRefs.current[5] = el;
              }}
            >
              <p className="text-xs font-semibold text-paper whitespace-nowrap">
                {t("about.metrics.tech")}
              </p>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default AboutSection;
