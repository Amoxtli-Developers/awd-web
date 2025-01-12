"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import the Autoplay module
import "swiper/css";
import { Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";

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
    position: "Ceo and Front-end lead",
    image: salo,
    bgColor: "#FF0099",
  },
  {
    name: "Sofía",
    position: "Cto and Back-end lead",
    image: sofy,
    bgColor: "#FF99C8",
  },
  {
    name: "Arturo",
    position: "Co-founder & Back-end dev",
    image: arthur,
    bgColor: "#F8D1FF",
  },
  {
    name: "Daniel",
    position: "AI tech-lead",
    image: dani,
    bgColor: "#101010",
  },
  {
    name: "Rodrigo",
    position: "Co-founder",
    image: ro,
    bgColor: "#FF99C8",
  },
  {
    name: "Isaac",
    position: "Co-founder & Front-end dev",
    image: isic,
    bgColor: "#F8D1FF",
  },
];

const TeamSwiper = () => {
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
              <Typography variant="body2">{member.position}</Typography>
            </CardContent>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TeamSwiper;
