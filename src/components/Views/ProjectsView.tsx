"use client";

import React from "react";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import ProjectSlider from "@components/ProjectSlider/ProjectSlider";
import { AnimatedTestimonialsDemo } from "@components/AnimatedTestimonialsDemo";
import AWDButton from "@components/AWDButton/AWDButton";
import { useTranslation } from "react-i18next";

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

const ProjectsView = () => {
  const { t } = useTranslation();

  return (
    <Box
      id="projects"
      sx={{
        width: "100%",
        px: { xs: 2, sm: 4, md: 6, lg: 12 },
        py: { xs: 4, sm: 10, md: 12 },
      }}
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <Box
        component={motion.div}
        variants={childVariants}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          mt: 0,
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            textAlign: "center",
            fontSize: { xs: "48px", sm: "32px", md: "48px", lg: "64px" },
          }}
        >
          {t("projectsView.title")} <br />
          <span style={{ color: "#FA206F", fontWeight: "bold" }}>
            {t("projectsView.action")}
          </span>
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            mb: { xs: 0, sm: 6, md: 8 },
            maxWidth: { xs: "100%", sm: "80%", md: "60%" },
            fontSize: { xs: "20px", sm: "20px", md: "28px", lg: "32px" },
          }}
        >
          {t("projectsView.subtitle.start")}{" "}
          <span style={{ fontWeight: "bold", color: "#FA206F" }}>
            {t("projectsView.subtitle.innovative")}
          </span>{" "}
          {t("projectsView.subtitle.middle")}{" "}
          <span style={{ fontWeight: "bold", color: "#FA206F" }}>
            {t("projectsView.subtitle.impactful")}
          </span>{" "}
          {t("projectsView.subtitle.end")}
        </Typography>
      </Box>

      {/* Project Slider Section */}
      <Box
        sx={{
          width: "100%",
          mt: { xs: 4, sm: 6, md: 8 },
        }}
      >
        <ProjectSlider />
      </Box>

      <Grid container spacing={2} sx={{ mt: { xs: 4, sm: 6, md: 8 } }}>
        <Grid item xs={12} md={6}>
          <AnimatedTestimonialsDemo />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              backgroundColor: "white",
              color: "#101010",
              padding: { xs: 3, sm: 4, md: 6 },
              borderRadius: "30px",
              boxShadow: "none",
              textAlign: "center",
              height: "100%",
              alignContent: "center",
            }}
          >
            <CardContent>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: "28px", sm: "28px", md: "36px" },
                  mb: 2,
                }}
              >
                {t("projectsView.callToAction.title.start")}{" "}
                <span style={{ color: "#FA206F", fontWeight: "bold" }}>
                  {t("projectsView.callToAction.title.highlight")}
                </span>{" "}
                {t("projectsView.callToAction.title.end")}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "16px", sm: "16px", md: "18px" },
                  color: "#555",
                  mb: 4,
                }}
              >
                {t("projectsView.callToAction.subtitle")}
              </Typography>
              <AWDButton
                link="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1cdpJh66qBBGSsHQROwXAyx8-wogW4ICntw-FUVtXZnz9yYvrJCrrcGds46hdzJFa4Vo13qVeA"
                borderColor="#FA206F"
                fontColor="#FA206F"
                backgroundColor="transparent"
                hoverBackgroundColor="#FA206F"
                hoverFontColor="#fbfbfb"
              >
                {t("projectsView.callToAction.button")}
              </AWDButton>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectsView;
