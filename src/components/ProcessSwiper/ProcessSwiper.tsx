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
import { useTranslation } from "react-i18next"; // Import useTranslation

const ProcessSwiper: React.FC = () => {
  const { t } = useTranslation(); // Initialize translation hook

  const processes = [
    {
      title: t("processSwiper.discovering.title"),
      description: t("processSwiper.discovering.description"),
      imageSrc: discoverBlack.src,
      hoverImageSrc: discoverWhite.src,
    },
    {
      title: t("processSwiper.scoping.title"),
      description: t("processSwiper.scoping.description"),
      imageSrc: scopingBlack.src,
      hoverImageSrc: scopingWhite.src,
    },
    {
      title: t("processSwiper.design.title"),
      description: t("processSwiper.design.description"),
      imageSrc: desingBlack.src,
      hoverImageSrc: desingWhite.src,
    },
    {
      title: t("processSwiper.development.title"),
      description: t("processSwiper.development.description"),
      imageSrc: developmentBlack.src,
      hoverImageSrc: developmentWhite.src,
    },
    {
      title: t("processSwiper.review.title"),
      description: t("processSwiper.review.description"),
      imageSrc: reviewBlack.src,
      hoverImageSrc: reviewWhite.src,
    },
    {
      title: t("processSwiper.support.title"),
      description: t("processSwiper.support.description"),
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
