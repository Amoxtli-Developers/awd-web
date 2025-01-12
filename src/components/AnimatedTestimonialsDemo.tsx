"use client";

import { AnimatedTestimonials } from "@components/animated-testimonials";
import avatar1 from "@assets/testimonials/orza.jpg";
import avatar2 from "@assets/testimonials/fratellis.jpg";
import avatar3 from "@assets/testimonials/rondo.jpg";
import avatar4 from "@assets/testimonials/sucre.jpg";
import { useTranslation } from "react-i18next";

export function AnimatedTestimonialsDemo() {
  const { t } = useTranslation();

  const testimonials = [
    {
      quote: t("testimonials.orza.quote"),
      name: t("testimonials.orza.name"),
      designation: t("testimonials.orza.designation"),
      src: avatar1.src,
    },
    {
      quote: t("testimonials.fratellis.quote"),
      name: t("testimonials.fratellis.name"),
      designation: t("testimonials.fratellis.designation"),
      src: avatar2.src,
    },
    {
      quote: t("testimonials.rondo.quote"),
      name: t("testimonials.rondo.name"),
      designation: t("testimonials.rondo.designation"),
      src: avatar3.src,
    },
    {
      quote: t("testimonials.sucre.quote"),
      name: t("testimonials.sucre.name"),
      designation: t("testimonials.sucre.designation"),
      src: avatar4.src,
    },
  ];

  return <AnimatedTestimonials testimonials={testimonials} />;
}
