"use client";

import React, { useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import grid1 from "@assets/about/grid_1.jpg";
import grid2 from "@assets/about/grid_2.gif";
import grid3 from "@assets/about/grid_3.jpg";
import grid4 from "@assets/about/grid_4.jpg";

const aboutData = [
  {
    id: 1,
    frontImage: grid1,
    backText:
      "At Amoxtli, we are passionate developers creating innovative software solutions to simplify tasks and solve real-world challenges. Our mission is to transform ideas into impactful technology that improves lives and empowers businesses.",
  },
  {
    id: 2,
    frontImage: grid2,
    backText:
      "At Amoxtli, the axolotl symbolizes resilience, adaptability, and innovation—values that drive our work. Beyond being our emblem, it represents our commitment to preserving Mexico’s heritage. We actively support axolotl sanctuaries through sponsorships and collaborations, helping protect this iconic species for future generations.",
  },
  {
    id: 3,
    frontImage: grid3,
    backText:
      "At Amoxtli, we’ve delivered over 20 successful software projects across diverse industries, leveraging a wide range of technologies and programming languages. Our expertise enables us to craft innovative, tailor-made solutions that meet each client’s unique needs. Experience advanced custom software with Amoxtli, where innovation meets precision and quality.",
  },
  {
    id: 4,
    frontImage: grid4,
    backText:
      "Amoxtli proudly participated in HackMx at Tecnológico de Monterrey, where we developed an innovative tool for Thales Enterprise. Using advanced AI models from Google and Happy Face, our solution analyzes and classifies 911 emergency calls to improve response efficiency and effectiveness. This project highlights our dedication to leveraging cutting-edge technology to address real-world challenges and support critical decision-making in emergency scenarios.",
  },
];

const FlipCard = ({
  frontImage,
  backText,
}: {
  frontImage: StaticImageData;
  backText: string;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Box
      onClick={handleCardClick}
      sx={{
        perspective: "1000px",
        cursor: "pointer",
        width: "100%",
        height: "100%",
        borderRadius: "30px",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "500px", // Adjust card height
          transformStyle: "preserve-3d",
          transition: "transform 0.8s",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front Side */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
          }}
        >
          <Image
            src={frontImage}
            alt="Front Image"
            layout="fill"
            objectFit="cover"
            style={{ borderRadius: "16px" }}
          />
        </Box>

        {/* Back Side */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#FA206F",
            color: "white",
            padding: "3rem",
          }}
        >
          <Typography variant="h6" textAlign="center" sx={{ fontSize: { xs: "1rem", sm: "1.5rem", md: "1.2rem" } }}>
            {backText}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const AboutGrid = () => {
  return (
    <Grid container spacing={3}>
      {/* Grid Image 1 (Takes md=8) */}
      <Grid item xs={12} md={8}>
        <FlipCard
          frontImage={aboutData[0].frontImage}
          backText={aboutData[0].backText}
        />
      </Grid>

      {/* Grid Image 2 (Takes md=4) */}
      <Grid item xs={12} md={4}>
        <FlipCard
          frontImage={aboutData[1].frontImage}
          backText={aboutData[1].backText}
        />
      </Grid>

      {/* Grid Image 3 (Takes md=4) */}
      <Grid item xs={12} md={4}>
        <FlipCard
          frontImage={aboutData[2].frontImage}
          backText={aboutData[2].backText}
        />
      </Grid>

      {/* Grid Image 4 (Takes md=8) */}
      <Grid item xs={12} md={8}>
        <FlipCard
          frontImage={aboutData[3].frontImage}
          backText={aboutData[3].backText}
        />
      </Grid>
    </Grid>
  );
};

export default AboutGrid;
