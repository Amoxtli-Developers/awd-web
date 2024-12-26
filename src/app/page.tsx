"use client";

import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { NextPage } from "next";
import theme from "../../src/theme";
import Navbar from "@components/Navbar/Navbar";
import HeroView from "@components/Views/HeroView";
import AboutView from "@components/Views/AboutView";
import ProcessView from "@components/Views/ProcessView";
import PricingView from "@components/Views/PricingView";
import AWDFooter from "@components/AWDFooter/AWDFooter";
import ProjectsView from "@components/Views/ProjectsView";
import AWDLoader from "@components/AWDLoader/AWDLoader";

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    // Render only the loader during the loading phase
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AWDLoader />
      </ThemeProvider>
    );
  }

  // Render the rest of the page only after loading is complete
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ margin: "0 auto", maxWidth: "100%" }}>
        <Navbar />
        <HeroView />
        <AboutView />
        <ProcessView />
        <PricingView />
        <ProjectsView />
        <AWDFooter />
      </Box>
    </ThemeProvider>
  );
};

export default Home;
