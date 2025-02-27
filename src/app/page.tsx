"use client";

import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { I18nextProvider } from "react-i18next"; // Import I18nextProvider
import i18n from "../../src/i18n"; // Import your i18n configuration
import theme from "../../src/theme";
import Navbar from "@components/Navbar/Navbar";
import HeroView from "@components/Views/HeroView";
import AboutView from "@components/Views/AboutView";
import ProcessView from "@components/Views/ProcessView";
import PricingView from "@components/Views/PricingView";
import AWDFooter from "@components/AWDFooter/AWDFooter";
import ProjectsView from "@components/Views/ProjectsView";
import AWDLoader from "@components/AWDLoader/AWDLoader";
import { NextPage } from "next";
import FloatingGifButton from "@components/FloatinButtont";
import axo from "@assets/about/grid_2.gif";

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Fire a page view conversion on this page
    window.gtag("event", "conversion", {
      send_to: "AW-11564510788/2KE2COqTsooaEMTcsYor",
    });

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    // Render only the loader during the loading phase
    return (
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AWDLoader />
        </ThemeProvider>
      </I18nextProvider>
    );
  }

  // Render the rest of the page only after loading is complete
  return (
    <I18nextProvider i18n={i18n}>
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
          <FloatingGifButton
            gifSrc={axo}
            tooltipText="Open AXO GPT"
            redirectUrl="https://chatgpt.com/g/g-67c0b0dca5e8819188626380af172562-axo-gpt"
          />
        </Box>
      </ThemeProvider>
    </I18nextProvider>
  );
};

export default Home;
