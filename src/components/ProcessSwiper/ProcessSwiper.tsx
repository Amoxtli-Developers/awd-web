"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProcessCard from "@components/ProcessCard/ProcessCard";
import desingBlack from "@assets/process/black/design.gif";
import discoverBlack from "@assets/process/black/discover.gif";
import scopingBlack from "@assets/process/black/scoping.gif";
import reviewBlack from "@assets/process/black/review.gif";
import supportBlack from "@assets/process/black/support.gif";
import developmentBlack from "@assets/process/black/development.gif";

import desingWhite from "@assets/process/white/design_white.gif";
import discoverWhite from "@assets/process/white/discover_white.gif";
import scopingWhite from "@assets/process/white/scoping_white.gif";
import reviewWhite from "@assets/process/white/review_white.gif";
import supportWhite from "@assets/process/white/support_white.gif";
import developmentWhite from "@assets/process/white/development_white.gif";

const ProcessSwiper: React.FC = () => {
  const processes = [
    {
      title: "Discovering",
      description:
        "1-week phase to ensure project fit with technical, budget, and timeline alignment.",
      imageSrc: discoverBlack.src,
      hoverImageSrc: discoverWhite.src,
    },
    {
      title: "Scoping",
      description:
        "2-3 weeks to detail requirements, budget, and timeline for your app.",
      imageSrc: scopingBlack.src,
      hoverImageSrc: scopingWhite.src,
    },
    {
      title: "Design",
      description:
        "1-2 weeks to create high-fidelity mockups and align on the design.",
      imageSrc: desingBlack.src,
      hoverImageSrc: desingWhite.src,
    },
    {
      title: "Development",
      description:
        "Development phase, ranging from 1 week to several months, to build and test your app.",
      imageSrc: developmentBlack.src,
      hoverImageSrc: developmentWhite.src,
    },
    {
      title: "Review",
      description:
        "1-month phase to review and ensure the final product meets your expectations.",
      imageSrc: reviewBlack.src,
      hoverImageSrc: reviewWhite.src,
    },
    {
      title: "Support",
      description:
        "Ongoing or one-time support to continuously improve your app post-launch.",
      imageSrc: supportBlack.src,
      hoverImageSrc: supportWhite.src,
    },
  ];

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      loop={false}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      style={{ padding: "20px" }}
    >
      {processes.map((process, index) => (
        <SwiperSlide
          key={index}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ProcessCard
            title={process.title}
            description={process.description}
            imageSrc={process.imageSrc}
            hoverImageSrc={process.hoverImageSrc}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProcessSwiper;
