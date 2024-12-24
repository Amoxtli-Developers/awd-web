"use client";

import React from "react";
import { Box, Typography, Link } from "@mui/material";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  backgroundImage: string; // URL for the image
  href: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  backgroundImage,
  href,
}) => {
  return (
    <Link
      href={href}
      underline="none"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        textDecoration: "none",
        display: "block",
        borderRadius: "24px",
        overflow: "hidden",
        position: "relative",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: 0,
          paddingTop: "170%", // Aspect ratio for consistent height
          overflow: "hidden",
          borderRadius: "24px",
        }}
      >
        {/* Background Image */}
        <Image
          src={backgroundImage}
          alt={title}
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />

        {/* Dark Overlay Layer */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.2)", // Semi-transparent black
            zIndex: 1, // Ensure it's behind the text
          }}
        />

        {/* Content Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0, // Align text at the top
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start", // Align text to the top
            color: "#fbfbfb",
            padding: 4,
            zIndex: 2, // Ensure text is above the dark layer
          }}
        >
          {/* Small Description */}
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "14px", sm: "14px", md: "16px" },
              marginBottom: 1,
              fontWeight: 400,
            }}
          >
            {description}
          </Typography>

          {/* Title */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "28px", sm: "28px", md: "28px" },
            }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};

export default ProjectCard;
