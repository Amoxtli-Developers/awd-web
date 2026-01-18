"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import FadeIn from "./FadeIn";
import avatar1 from "@assets/testimonials/orza.jpg";
import avatar2 from "@assets/testimonials/fratellis.jpg";
import avatar3 from "@assets/testimonials/rondo.jpg";
import avatar4 from "@assets/testimonials/sucre.jpg";

const TestimonialsSection = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      quote: t("testimonials.orza.quote"),
      name: t("testimonials.orza.name"),
      role: t("testimonials.orza.designation"),
      image: avatar1,
    },
    {
      quote: t("testimonials.fratellis.quote"),
      name: t("testimonials.fratellis.name"),
      role: t("testimonials.fratellis.designation"),
      image: avatar2,
    },
    {
      quote: t("testimonials.rondo.quote"),
      name: t("testimonials.rondo.name"),
      role: t("testimonials.rondo.designation"),
      image: avatar3,
    },
    {
      quote: t("testimonials.sucre.quote"),
      name: t("testimonials.sucre.name"),
      role: t("testimonials.sucre.designation"),
      image: avatar4,
    },
  ];

  return (
    <section id="testimonials" className="snap-section snap-center-section bg-paper z-0">
      <div className="mx-auto w-full max-w-[1200px] px-6 py-20">
        <FadeIn>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-ink sm:text-4xl">
                {t("testimonials.title")}
              </h2>
            </div>
            <p className="max-w-[360px] text-sm text-ink/70 sm:text-base">
              {t("testimonials.subtitle")}
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.name} delay={index * 0.05}>
              <article className="rounded-2xl border border-line p-4 transition-colors hover:border-primary sm:p-6">
                <p className="text-sm leading-relaxed text-ink/80">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="mt-5 flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-ink/60">{testimonial.role}</p>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
