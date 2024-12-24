import React from "react";
import { Button, useTheme } from "@mui/material";

interface AWDButtonProps {
  link: string;
  borderColor: string;
  fontColor: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  hoverFontColor?: string;
  children: React.ReactNode;
}

const AWDButton: React.FC<AWDButtonProps> = ({
  link,
  borderColor,
  fontColor,
  backgroundColor = "transparent",
  hoverBackgroundColor = "white",
  hoverFontColor = "black",
  children,
}) => {
  const theme = useTheme();

  return (
    <Button
      href={link}
      variant="outlined"
      target="_blank"
      sx={{
        border: `1px solid ${borderColor}`,
        color: fontColor,
        backgroundColor,
        textTransform: "none",
        borderRadius: "24px",
        fontSize: { xs: "0.9rem", sm: "1rem" }, // Adjust font size for small screens
        fontWeight: 500,
        padding: { xs: "6px 16px", sm: "8px 24px" }, // Adjust padding for small screens
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          backgroundColor: hoverBackgroundColor,
          color: hoverFontColor,
          borderColor: hoverBackgroundColor,
          "@media (hover: none)": {
            backgroundColor, // Disable hover effect on touch devices
            color: fontColor,
            borderColor,
          },
        },
        [theme.breakpoints.down("sm")]: {
          // Additional styles for small screens
          padding: "6px 16px",
        },
      }}
    >
      {children}
    </Button>
  );
};

export default AWDButton;
