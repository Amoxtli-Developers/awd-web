import React from "react";
import { Typography } from "@mui/material";

interface AWDTitleProps {
  text: string;
  highlight: string[]; // Array of words or phrases to highlight
  alignText?: "left" | "center" | "right"; // Optional text alignment
}

const AWDTitle: React.FC<AWDTitleProps> = ({ text, highlight, alignText}) => {
  const renderHighlightedText = () => {
    // Split the text into words or phrases based on the highlight array
    const regex = new RegExp(`(${highlight.join("|")})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) => {
      if (highlight.some((word) => word.toLowerCase() === part.toLowerCase())) {
        // Highlighted word or phrase
        return (
          <span
            key={index}
            style={{
              fontWeight: "bold",
              color: "#FA206F", // Highlight color
            }}
          >
            {part}
          </span>
        );
      }
      // Regular text
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <Typography
      variant="h3" // Adjust variant based on your usage
      sx={{
        fontSize: { xs: "2rem", sm: "3rem", md: "48px" }, // Responsive font sizes
        fontWeight: 400,
        lineHeight: 1.2,
        textAlign: alignText, // Default text alignment
      }}
    >
      {renderHighlightedText()}
    </Typography>
  );
};

export default AWDTitle;
