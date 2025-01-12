"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import the Autoplay module
import "swiper/css";
import { Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import { useTranslation } from "react-i18next"; // Import useTranslation

// Import images
import salo from "@assets/team/salo.jpeg";
import sofy from "@assets/team/sofy.jpeg";
import arthur from "@assets/team/arthur.jpeg";
import ro from "@assets/team/ro.jpeg";
import isic from "@assets/team/isic.jpeg";
import dani from "@assets/team/dani.jpeg";

const teamData = [
  {
    name: "Salomon",
    positionKey: "team.ceo", // Clave de traducción
    image: salo,
    bgColor: "#FF0099",
  },
  {
    name: "Sofía",
    positionKey: "team.cto", // Clave de traducción
    image: sofy,
    bgColor: "#FF99C8",
  },
  {
    name: "Arturo",
    positionKey: "team.cofounderBackend", // Clave de traducción
    image: arthur,
    bgColor: "#F8D1FF",
  },
  {
    name: "Daniel",
    positionKey: "team.aiLead", // Clave de traducción
    image: dani,
    bgColor: "#101010",
  },
  {
    name: "Rodrigo",
    positionKey: "team.cofounder", // Clave de traducción
    image: ro,
    bgColor: "#FF99C8",
  },
  {
    name: "Isaac",
    positionKey: "team.cofounderFrontend", // Clave de traducción
    image: isic,
    bgColor: "#F8D1FF",
  },
];

const TeamSwiper = () => {
  const { t } = useTranslation(); // Initialize translation hook

  return (
    <Swiper
      spaceBetween={40}
      slidesPerView="auto"
      loop={true}
      autoplay={{
        delay: 1000, // Adjust delay for smooth autoplay
        disableOnInteraction: false,
      }}
      modules={[Autoplay]} // Include the Autoplay module
      style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
    >
      {teamData.map((member, index) => (
        <SwiperSlide
          key={index}
          style={{
            width: "300px",
            height: "300px",
          }}
        >
          {/* Card Component */}
          <Card
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* Background Image */}
            <Image
              src={member.image}
              alt={member.name}
              layout="fill"
              objectFit="cover"
            />

            {/* Card Content */}
            <CardContent
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                backgroundColor: member.bgColor,
                color: member.bgColor === "#F8D1FF" ? "#101010" : "#fbfbfb",
                borderRadius: "0 0 16px 16px",
                py: "1rem",
                px: "1.5rem",
                textAlign: "left",
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
              >
                {member.name}
              </Typography>
              <Typography variant="body2" sx={{fontWeight: 400}}>
                {t(member.positionKey)} {/* Traducción dinámica */}
              </Typography>
            </CardContent>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TeamSwiper;
