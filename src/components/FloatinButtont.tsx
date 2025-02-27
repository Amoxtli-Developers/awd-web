"use client";

import React, { useState } from "react";
import { Box, IconButton, Tooltip, Zoom } from "@mui/material";
import { useTranslation } from "react-i18next";
import Image, { StaticImageData } from "next/image";

// Add translations to the i18n registry
const translationKeys = {
  en: {
    openAxoGPT: "Open AXO GPT"
  },
  es: {
    openAxoGPT: "Abrir AXO GPT"
  }
};

interface FloatingGifButtonProps {
  gifSrc?: string | StaticImageData;
  altText?: string;
  size?: number;
  tooltipText?: string;
  translationKey?: string;
  redirectUrl?: string;
  position?: {
    bottom: number;
    right: number;
  };
  zIndex?: number;
}

const FloatingGifButton: React.FC<FloatingGifButtonProps> = ({ 
  gifSrc = "/path-to-your-gif.gif", 
  altText = "Action Button",
  size = 80,
  tooltipText = "openAxoGPT", // Default key in translation file
  translationKey,
  redirectUrl = "https://chatgpt.com/g/g-67c0b0dca5e8819188626380af172562-axo-gpt",
  position = { bottom: 24, right: 24 },
  zIndex = 1000
}) => {
  const { t, i18n } = useTranslation();
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Register translation namespace dynamically
  React.useEffect(() => {
    if (!i18n.hasResourceBundle('en', 'axoButton')) {
      i18n.addResourceBundle('en', 'axoButton', translationKeys.en);
    }
    if (!i18n.hasResourceBundle('es', 'axoButton')) {
      i18n.addResourceBundle('es', 'axoButton', translationKeys.es);
    }
  }, [i18n]);

  const handleClick = () => {
    // Open the URL in a new tab
    window.open(redirectUrl, '_blank', 'noopener,noreferrer');
  };

  // Use either direct tooltipText or translated key
  const tooltipContent = translationKey ? t(translationKey) : t(tooltipText);

  return (
    <Box
      sx={{
        position: "fixed",
        ...position,
        zIndex,
        transition: "transform 0.3s ease-in-out",
        transform: isHovered ? "scale(1.1)" : "scale(1)",
      }}
    >
      <Tooltip
        title={tooltipContent}
        placement="left"
        TransitionComponent={Zoom}
        arrow
      >
        <IconButton
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          sx={{
            width: size,
            height: size,
            borderRadius: "50%",
            boxShadow: isHovered 
              ? "0 8px 16px rgba(0,0,0,0.2)" 
              : "0 4px 8px rgba(0,0,0,0.1)",
            overflow: "hidden",
            p: 0,
            "&:hover": {
              bgcolor: "#ff3266",
              cursor: "pointer"
            },
            backgroundColor: "#ff3266"
          }}
        >
          {/* Using Box for direct string paths */}
          {typeof gifSrc === 'string' ? (
            <Box
              component="img"
              src={gifSrc}
              alt={altText}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          ) : (
            /* Using Next.js Image for StaticImageData */
            <Image
              src={gifSrc}
              alt={altText || ""}
              width={size}
              height={size}
              style={{
                width: "90%",
                height: "90%",
                objectFit: "cover",
              }}
            />
          )}
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default FloatingGifButton;