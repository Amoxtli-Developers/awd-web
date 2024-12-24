"use client";

import React from "react";
import { Box, Grid, Typography, Link } from "@mui/material";
import logo from "@assets/logo/awd_logo_white.svg";
import Image from "next/image";

const AWDFooter: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FA206F", // Match pink background
        color: "#fbfbfb", // White text
        borderRadius: { xs: "20px", sm: "30px" },
        p: { xs: 2, sm: 4, md: 6 },
        mx: { xs: 2, sm: 4, md: 6, lg: 12 },
        my: { xs: 2, sm: 4, md: 6 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Top Section */}
      <Grid
        container
        spacing={2}
        sx={{
          width: "100%",
          mb: 4,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <Grid
          item
          xs={12}
          sm={4}
          sx={{ textAlign: { xs: "center", sm: "left" } }}
        >
          <Image src={logo} alt="AWD Logo" width={150} height={150} />
        </Grid>

        {/* Links */}
        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            textAlign: { xs: "center", sm: "center" },
            mt: { xs: 2, sm: 0 },
          }}
        >
          <Typography variant="body2">
            <Link
              href="/store"
              underline="none"
              sx={{
                color: "#fbfbfb",
                display: "block",
                mb: 1,
                fontWeight: 600,
              }}
            >
              Axo Store
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              sx={{
                color: "#fbfbfb",
                display: "block",
                mb: 1,
                fontWeight: 600,
              }}
            >
              Help the Axolotls
            </Link>
            <Link
              href="https://reptilarioyajolotarioquetzal.com/"
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              sx={{
                color: "#fbfbfb",
                display: "block",
                mb: 1,
                fontWeight: 600,
              }}
            >
              Visit AxoSanctuary
            </Link>
          </Typography>
        </Grid>

        {/* Social Links */}
        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            textAlign: { xs: "center", sm: "right" },
            mt: { xs: 2, sm: 0 },
          }}
        >
          <Typography variant="body2">
            <Link
              href="https://www.instagram.com/amoxtli.tech/"
              underline="none"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#fbfbfb",
                display: "block",
                mb: 1,
                fontWeight: 600,
              }}
            >
              Instagram
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61551487858288"
              underline="none"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#fbfbfb",
                display: "block",
                mb: 1,
                fontWeight: 600,
              }}
            >
              Facebook
            </Link>
            <Link
              href="https://www.linkedin.com/company/amoxtli-web-developers"
              underline="none"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#fbfbfb",
                display: "block",
                mb: 1,
                fontWeight: 600,
              }}
            >
              LinkedIn
            </Link>
          </Typography>
        </Grid>
      </Grid>

      {/* Contact Section */}
      <Link
        href="mailto:contact@amoxtli.tech"
        underline="none"
        sx={{
          color: "#fbfbfb",
          fontWeight: "bold",
          textAlign: "center",
          fontSize: { xs: "20px", sm: "32px", md: "48px" },
        }}
      >
        contact@amoxtli.tech
      </Link>
    </Box>
  );
};

export default AWDFooter;