"use client";

import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import AWDTitle from "@components/AWDTitle/AWDTitle";
import AboutGrid from "@components/AboutGrid/AboutGrid";
import { motion } from "framer-motion";
import TeamSwiper from "@components/TeamSwiper/TeamSwiper";
import { useTranslation } from "react-i18next"; // Import useTranslation

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const AboutView = () => {
  const { t } = useTranslation(); // Initialize translation hook

  return (
    <Box
      id="meet-awd"
      sx={{
        width: "100%",
        minHeight: "100vh",
        px: { xs: 2, sm: 4, md: 6, lg: 12 },
        py: { xs: 4, sm: 10, md: 12 },
      }}
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Title Section */}
      <Grid
        container
        spacing={3}
        sx={{ marginBottom: { xs: "3rem", sm: "4rem", md: "4rem" } }}
        component={motion.div}
        variants={childVariants}
      >
        <Grid item xs={12} md={6}>
          <AWDTitle
            text={t("about.mission")}
            highlight={[t("about.missionHighlight")]}
            alignText="left"
          />
        </Grid>
      </Grid>

      {/* About Grid Section */}
      <Box
        component={motion.div}
        variants={childVariants}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        sx={{
          width: "100%",
        }}
      >
        <AboutGrid />
      </Box>

      {/* Second Title Section */}
      <Grid
        container
        spacing={3}
        sx={{ marginTop: { xs: "2rem", sm: "3rem", md: "4rem" } }}
        component={motion.div}
        variants={childVariants}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { xs: "none", md: "block" } }}
        ></Grid>
        <Grid item xs={12} md={6}>
          <AWDTitle
            text={t("about.dream")}
            highlight={[
              t("about.dreamHighlight1"),
              t("about.dreamHighlight2"),
            ]}
            alignText="right"
          />
        </Grid>
      </Grid>

      {/* Team Section */}
      <Box
        component={motion.div}
        variants={childVariants}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        sx={{
          width: "100%",
          mt: { xs: 6, sm: 8, md: 12 },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textAlign: { xs: "center", md: "left" },
            mb: { xs: 4, sm: 6, md: 8 },
            fontSize: { xs: "48px", sm: "32px", md: "48px", lg: "64px" },
          }}
        >
          {t("about.teamTitle")}{" "}
          <span style={{ color: "#FA206F", fontWeight: "bold" }}>
            {t("about.teamHighlight")}
          </span>
        </Typography>
        <TeamSwiper />
      </Box>
    </Box>
  );
};

export default AboutView;
