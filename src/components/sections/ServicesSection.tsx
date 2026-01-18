"use client";

import { useEffect, useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Code2, Globe, PenTool, LineChart, Users, Sparkles } from "lucide-react";
import gsap from "gsap";
import FadeIn from "./FadeIn";

const ServicesSection = () => {
  const { t } = useTranslation();
  const enableGsap = true;
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const iconRefs = useRef<(SVGSVGElement | null)[]>([]);
  const items = [
    {
      title: t("services.items.software.title"),
      description: t("services.items.software.description"),
      icon: Code2,
    },
    {
      title: t("services.items.web.title"),
      description: t("services.items.web.description"),
      icon: Globe,
    },
    {
      title: t("services.items.brand.title"),
      description: t("services.items.brand.description"),
      icon: PenTool,
    },
    {
      title: t("services.items.marketing.title"),
      description: t("services.items.marketing.description"),
      icon: LineChart,
    },
    {
      title: t("services.items.consulting.title"),
      description: t("services.items.consulting.description"),
      icon: Users,
    },
    {
      title: t("services.items.ai.title"),
      description: t("services.items.ai.description"),
      icon: Sparkles,
    },
  ];

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (!enableGsap || prefersReducedMotion) return;

    const cleanups: Array<() => void> = [];

    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      const icon = iconRefs.current[index];

      const onEnter = () => {
        gsap.to(card, { y: -4, duration: 0.3, ease: "power2.out" });
        if (icon) {
          gsap.to(icon, { rotate: 6, duration: 0.3, ease: "power2.out" });
        }
      };

      const onLeave = () => {
        gsap.to(card, { y: 0, duration: 0.3, ease: "power2.out" });
        if (icon) {
          gsap.to(icon, { rotate: 0, duration: 0.3, ease: "power2.out" });
        }
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

  return (
    <section id="services" className="snap-section snap-center-section bg-paper z-0">
      <div className="mx-auto w-full max-w-[1200px] px-6 py-20">
        <FadeIn>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-ink sm:text-4xl">
                {t("services.title")}
              </h2>
            </div>
            <p className="max-w-[420px] text-sm text-ink/70 sm:text-base">
              {t("services.subtitle")}
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {items.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.05}>
              <article
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className="flex min-h-[180px] flex-col justify-center gap-2 rounded-2xl border border-line p-4 transition-colors hover:border-primary sm:gap-3 sm:p-6"
              >
                <div className="flex flex-col gap-2">
                  <item.icon
                    ref={(el) => {
                      iconRefs.current[index] = el;
                    }}
                    className="h-4 w-4 text-ink/30"
                  />
                  <h3 className="text-xl font-semibold text-ink">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-ink/70">
                  {item.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
