import React, { useState } from "react";
import { Box, Card, Typography } from "@mui/material";
import Image from "next/image";

interface ProcessCardProps {
  title: string;
  description: string;
  imageSrc: string; // Default black image
  hoverImageSrc: string; // Hover white image
}

const ProcessCard: React.FC<ProcessCardProps> = ({
  title,
  description,
  imageSrc,
  hoverImageSrc,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      sx={{
        textAlign: "left",
        padding: 4,
        borderRadius: "30px",
        boxShadow: "none",
        backgroundColor: isHovered ? "#FA206F" : "white",
        color: isHovered ? "#FBFBFB" : "#101010",
        height: "100%",
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Description */}
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "20px" }, // Responsive font sizes
          marginBottom: 2,
          color: isHovered ? "#FBFBFB" : "#101010",
        }}
      >
        {description}
      </Typography>

      {/* Image */}
      <Box sx={{ display: "flex", justifyContent: "center", my: 10 }}>
        <Image
          src={isHovered ? hoverImageSrc : imageSrc}
          alt={title}
          width={200}
          height={200}
          style={{
            marginTop: "16px",
            objectFit: "contain",
          }}
        />
      </Box>

      {/* Title */}
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "24px", sm: "28px", md: "32px", lg: "36px" }, // Responsive font sizes
          color: isHovered ? "#FBFBFB" : "#101010",
        }}
      >
        {title}
      </Typography>
    </Card>
  );
};

export default ProcessCard;
