"use client";

import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n"; // Your i18n setup
import theme from "../../theme";
import Navbar from "@components/Navbar/Navbar";
import AWDFooter from "@components/AWDFooter/AWDFooter";
import StoreView from "@components/Views/StoreView";

const Store = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar isStorePage={true} />
        <StoreView />
        <AWDFooter />
      </ThemeProvider>
    </I18nextProvider>
  );
};

export default Store;
