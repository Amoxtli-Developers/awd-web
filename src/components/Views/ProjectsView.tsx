"use client";

import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import ProjectSlider from "@components/ProjectSlider/ProjectSlider"; // Import the ProjectSlider component
import { AnimatedTestimonialsDemo } from "@components/AnimatedTestimonialsDemo";
import { Grid } from "@mui/material";
import AWDButton from "@components/AWDButton/AWDButton";

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
          mt: 0, // Remove any top margin for proper centering
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
          Our Work in <br />
          <span style={{ color: "#FA206F", fontWeight: "bold" }}>action</span>
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
          Explore our portfolio of projects, showcasing{" "}
          <span style={{ fontWeight: "bold", color: "#FA206F" }}>
            innovative
          </span>{" "}
          solutions and
          <span style={{ fontWeight: "bold", color: "#FA206F" }}>
            impactful
          </span>{" "}
          results crafted for our{" "}
          <span style={{ fontWeight: "bold", color: "#FA206F" }}>clients.</span>
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
                Ready to take your{" "}
                <span style={{ color: "#FA206F", fontWeight: "bold" }}>
                  first step
                </span>{" "}
                and rise to your digital potential?
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "16px", sm: "16px", md: "18px" },
                  color: "#555",
                  mb: 4,
                }}
              >
                Book a 30-minute call to get feedback and a budget estimate from
                our expert team.
              </Typography>
              <AWDButton
                link="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1cdpJh66qBBGSsHQROwXAyx8-wogW4ICntw-FUVtXZnz9yYvrJCrrcGds46hdzJFa4Vo13qVeA"
                borderColor="#FA206F"
                fontColor="#FA206F"
                backgroundColor="transparent"
                hoverBackgroundColor="#FA206F"
                hoverFontColor="#fbfbfb"
              >
                Book a call
              </AWDButton>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectsView;
