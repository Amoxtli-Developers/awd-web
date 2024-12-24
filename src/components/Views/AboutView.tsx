"use client";

import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import AWDTitle from "@components/AWDTitle/AWDTitle";
import AboutGrid from "@components/AboutGrid/AboutGrid";
import { motion } from "framer-motion";
import TeamSwiper from "@components/TeamSwiper/TeamSwiper";

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
            text="Our mission is to empower you with the essential tools to kickstart your online journey."
            highlight={["online journey."]}
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
            text="Our dream is to make sure that good ideas are not lost and become a reality."
            highlight={["good ideas", "reality."]}
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
          Meet the{" "}
          <span style={{ color: "#FA206F", fontWeight: "bold" }}>
            Amoxtlers
          </span>
        </Typography>
        <TeamSwiper />
      </Box>

      {/* Card Section */}
      {/* <Grid
        container
        spacing={3}
        sx={{
          mt: { xs: 6, sm: 8, md: 10 },
          justifyContent: "center",
        }}
        component={motion.div}
        variants={childVariants}
      >
        {[
          {
            title: "Innovative Team",
            text: "Building custom web solutions for startup success.",
            bgColor: "#FF0099",
          },
          {
            title: "Tailored Approach",
            text: "Crafting unique solutions for every client.",
            bgColor: "#FF99C8",
          },
          {
            title: "Expert Commitment",
            text: "Empowering startups through digital innovation.",
            bgColor: "#F8D1FF",
          },
        ].map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: "100%",
                backgroundColor: card.bgColor,
                color: "#fbfbfb",
                borderRadius: "30px",
                boxShadow: "none",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "left",
                  alignItems: "left",
                  height: "100%",
                  textAlign: "left",
                  px: 6,
                  py: 4,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mt: 2,
                    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                  }}
                >
                  {card.text}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid> */}
    </Box>
  );
};

export default AboutView;
