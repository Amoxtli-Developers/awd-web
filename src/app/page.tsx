"use client";
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

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ margin: "0 auto", maxWidth: "100%", }}>
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
}

export default Home;