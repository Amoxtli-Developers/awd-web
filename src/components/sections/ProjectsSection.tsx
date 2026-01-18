"use client";

import { useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import FadeIn from "./FadeIn";
import styles from "./sections.module.css";

import p2 from "@assets/projects/2.jpeg";
import p1 from "@assets/projects/1.jpeg";
import p4 from "@assets/projects/4.jpeg";
import p6 from "@assets/projects/6.jpeg";
import p9 from "@assets/projects/9.jpeg";
import p13 from "@assets/projects/13.jpeg";

const ProjectsSection = () => {
  const { t } = useTranslation();
  const enableGsap = true;
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (!enableGsap || prefersReducedMotion) return;

    const cleanups: Array<() => void> = [];

    cardRefs.current.forEach((card) => {
      if (!card) return;

      const onEnter = () => {
        gsap.to(card, { y: -3, duration: 0.25, ease: "power2.out" });
      };

      const onLeave = () => {
        gsap.to(card, { y: 0, duration: 0.25, ease: "power2.out" });
      };

      card.addEventListener("mouseenter", onEnter);
      card.addEventListener("mouseleave", onLeave);

      cleanups.push(() => {
        card.removeEventListener("mouseenter", onEnter);
        card.removeEventListener("mouseleave", onLeave);
      });
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [enableGsap, prefersReducedMotion]);

  const projects = [
    {
      title: t("projects.xianna.title"),
      description: t("projects.xianna.description"),
      image: p13,
      href: "https://xianna.com.mx/",
    },
    {
      title: t("projects.psiqueSer.title"),
      description: t("projects.psiqueSer.description"),
      image: p6,
      href: "https://psiqueyser.org",
    },
    {
      title: t("projects.fratellis.title"),
      description: t("projects.fratellis.description"),
      image: p2,
      href: "https://fratellishelados.com",
    },
    {
      title: t("projects.colegioSucre.title"),
      description: t("projects.colegioSucre.description"),
      image: p9,
      href: "https://colegiosucre.netlify.app/",
    },
    {
      title: t("projects.mgsi.title"),
      description: t("projects.mgsi.description"),
      image: p4,
      href: "https://mgsi.mx",
    },
    {
      title: t("projects.cmc.title"),
      description: t("projects.cmc.description"),
      image: p1,
      href: "https://cmcya.mx",
    },
  ];

  return (
    <section id="projects" className="snap-section snap-center-section bg-paper z-0">
      <div className="mx-auto w-full max-w-[1200px] px-6 py-20">
        <FadeIn>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-ink sm:text-4xl">
                {t("projectsView.titleShort")}
              </h2>
              <p className="mt-4 max-w-[520px] text-sm leading-relaxed text-ink/70 sm:text-base">
                {t("projectsView.subtitleShort")}
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={0.03 * index}>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className={styles.projectStack}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                aria-label={`${project.title} ${t("projectsView.viewProject")}`}
              >
                <div className="relative h-40 w-full sm:h-44">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="text-base font-semibold text-ink">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink/70">
                    {project.description}
                  </p>
                  <span className="mt-3 inline-flex min-h-[36px] items-center text-xs font-semibold text-primary transition-colors hover:text-ink">
                    {t("projectsView.viewProject")}
                  </span>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
