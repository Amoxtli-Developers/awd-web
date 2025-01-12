"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { supabase } from "@utils/supabaseClient";
import { useTranslation } from "react-i18next"; // Import useTranslation

const textVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.8,
      delay: 0.3,
    },
  },
};

const Hero = () => {
  const { t } = useTranslation(); // Initialize translation hook
  const [heroImageUrl, setHeroImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchHeroImage = async () => {
      const { data } = await supabase.storage
        .from("AWD images") // Replace with your bucket name
        .getPublicUrl("hero/hero.jpg"); // Path inside the bucket

      if (!data) {
        console.error("Error fetching hero image");
        return;
      }

      setHeroImageUrl(data.publicUrl);
    };

    fetchHeroImage();
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        justifyContent: { xs: "center", md: "flex-end" },
        alignItems: "center",
      }}
    >
      {/* Background Image */}
      {heroImageUrl && (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: -2,
          }}
        >
          <Image
            src={heroImageUrl}
            alt={t("hero.backgroundAlt")}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
          />
        </Box>
      )}

      {/* Overlay with Blur Effect */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(4px)",
          zIndex: -1,
        }}
      />

      {/* Content */}
      <Box
        component={motion.div}
        initial="hidden"
        animate="visible"
        sx={{
          textAlign: { xs: "right", md: "right" },
          color: "white",
          px: { xs: 2, sm: 4, md: 6 },
          maxWidth: { xs: "90%", md: "1000px" },
        }}
      >
        {/* Title */}
        <motion.div variants={textVariants}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 400,
              lineHeight: 1.2,
              fontSize: { xs: "56px", sm: "72px", md: "80px", lg: "96px" },
            }}
          >
            {t("hero.title")} <strong>{t("hero.amoxtli")}</strong>
            <br />
            <strong>{t("hero.subtitle")}</strong>
          </Typography>
        </motion.div>

        {/* Subheading */}
        <motion.div variants={textVariants} custom={0.5}>
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: { xs: "14px", sm: "20px", md: "24px", lg: "1.5rem" },
              fontWeight: 400,
              mt: 2,
            }}
          >
            {t("hero.subheading")}
          </Typography>
        </motion.div>

        {/* Description */}
        <motion.div variants={textVariants} custom={1}>
          <Typography
            variant="h3"
            sx={{
              mt: 3,
              lineHeight: 1.8,
              fontSize: { xs: "18px", sm: "28px", md: "32px", lg: "40px" },
            }}
          >
            {t("hero.description")}
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Hero;
