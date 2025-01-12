"use client";

import { useEffect, useState } from "react";
import { AppBar, Toolbar, Box, Typography, Switch } from "@mui/material";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import logo from "@assets/logo/awd_logo_white.svg";
import logo2 from "@assets/logo/awd_logo.svg";
import AWDButton from "@components/AWDButton/AWDButton";

interface NavbarProps {
  isStorePage?: boolean; // Prop to detect if it's the store page
}

const Navbar: React.FC<NavbarProps> = ({ isStorePage = false }) => {
  const { t, i18n } = useTranslation();
  const menuItems = [
    { label: t("navbar.meetAWD"), path: "/#meet-awd" },
    { label: t("navbar.process"), path: "/#process" },
    { label: t("navbar.pricing"), path: "/#pricing" },
    { label: t("navbar.projects"), path: "/#projects" },
    { label: t("navbar.store"), path: "/store" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isSpanish, setIsSpanish] = useState(i18n.language === "es"); // Detect current language

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      setIsScrolled(scrollPosition > 900); // Adjust as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fontColor = isStorePage || isScrolled ? "#FA206F" : "white";

  const toggleLanguage = () => {
    const newLanguage = isSpanish ? "en" : "es";
    i18n.changeLanguage(newLanguage);
    setIsSpanish(!isSpanish);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "transparent",
        boxShadow: "none",
        transition: "background-color 0.3s ease-in-out",
        backdropFilter: isStorePage || isScrolled ? "blur(10px)" : "none",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 2, sm: 4, md: 10 },
          py: 2,
        }}
      >
        {/* Logo Section */}
        <Box display="flex" alignItems="center">
          <Image
            src={isScrolled || isStorePage ? logo2 : logo}
            alt="Amoxtli Logo"
            width={100}
            height={100}
            priority
          />
        </Box>

        {/* Navigation Links */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 6,
          }}
        >
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.path}
              style={{
                color: fontColor,
                fontSize: "0.9rem",
                fontWeight: 700,
                textTransform: "none",
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              {item.label}
            </a>
          ))}
        </Box>

        {/* Language Switcher and Call to Action */}
        <Box display="flex" alignItems="center" gap={2}>
          {/* Language Switcher */}
          <Box display="flex" alignItems="center">
            <Typography
              variant="body2"
              sx={{
                color: fontColor,
                fontSize: "0.9rem",
                fontWeight: 700,
                mr: 1,
              }}
            >
              {isSpanish ? "ES" : "EN"}
            </Typography>
            <Switch
              checked={isSpanish}
              onChange={toggleLanguage}
              color="default"
              sx={{
                "& .MuiSwitch-thumb": {
                  backgroundColor: fontColor,
                },
                "& .MuiSwitch-track": {
                  backgroundColor: isScrolled || isStorePage ? "#FA206F" : "white",
                },
              }}
            />
          </Box>

          {/* Call to Action */}
          <AWDButton
            link="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1cdpJh66qBBGSsHQROwXAyx8-wogW4ICntw-FUVtXZnz9yYvrJCrrcGds46hdzJFa4Vo13qVeA"
            borderColor={fontColor}
            fontColor={fontColor}
            backgroundColor="transparent"
            hoverBackgroundColor={fontColor}
            hoverFontColor={isStorePage || isScrolled ? "#fbfbfb" : "#101010"}
          >
            {t("navbar.bookCall")}
          </AWDButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
