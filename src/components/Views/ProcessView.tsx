"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import ProcessSwiper from "@components/ProcessSwiper/ProcessSwiper";

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

const ProcessView = () => {
  return (
    <Box
      id="process"
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
          How does the <br />
          <span style={{ color: "#FA206F", fontWeight: "bold" }}>
            process
          </span>{" "}
          work?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            mb: { xs: 4, sm: 6, md: 8 },
            maxWidth: { xs: "100%", sm: "80%", md: "60%" },
            fontSize: { xs: "20px", sm: "20px", md: "28px", lg: "32px" },
          }}
        >
          We guide you from{" "}
          <span style={{ fontWeight: "bold", color: "#FA206F" }}>
            idea to launch,
          </span>{" "}
          ensuring a{" "}
          <span style={{ fontWeight: "bold", color: "#FA206F" }}>
            smooth process
          </span>{" "}
          with tailored planning, design, development, and support to bring your
          vision to{" "}
          <span style={{ fontWeight: "bold", color: "#FA206F" }}>life.</span>
        </Typography>
      </Box>
      <ProcessSwiper />
    </Box>
  );
};

export default ProcessView;
