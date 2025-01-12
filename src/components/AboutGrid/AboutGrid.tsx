"use client";

import React, { useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { useTranslation } from "react-i18next"; // Importar useTranslation
import grid1 from "@assets/about/grid_1.jpg";
import grid2 from "@assets/about/grid_2.gif";
import grid3 from "@assets/about/grid_3.jpg";
import grid4 from "@assets/about/grid_4.jpg";

const aboutData = [
  {
    id: 1,
    frontImage: grid1,
    backTextKey: "about.grid1", // Clave de traducción
    gridSize: 8,
  },
  {
    id: 2,
    frontImage: grid2,
    backTextKey: "about.grid2", // Clave de traducción
    gridSize: 4,
  },
  {
    id: 3,
    frontImage: grid3,
    backTextKey: "about.grid3", // Clave de traducción
    gridSize: 4,
  },
  {
    id: 4,
    frontImage: grid4,
    backTextKey: "about.grid4", // Clave de traducción
    gridSize: 8,
  },
];

const FlipCard = ({
  frontImage,
  backTextKey,
}: {
  frontImage: StaticImageData;
  backTextKey: string;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { t } = useTranslation(); // Inicializar traducciones

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
          height: "500px", // Ajusta la altura de las tarjetas
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
          <Typography
            variant="h6"
            textAlign="center"
            sx={{
              fontSize: { xs: "1rem", sm: "1.5rem", md: "1.2rem" },
            }}
          >
            {t(backTextKey)} {/* Traducción dinámica */}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const AboutGrid = () => {
  return (
    <Grid container spacing={3}>
      {aboutData.map((data) => (
        <Grid
          item
          xs={12}
          md={data.gridSize}
          key={data.id}
        >
          <FlipCard
            frontImage={data.frontImage}
            backTextKey={data.backTextKey} // Pasar clave de traducción
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default AboutGrid;
