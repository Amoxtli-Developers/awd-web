"use client";

import { useEffect, useState } from "react";
import { AppBar, Toolbar, Box } from "@mui/material";
import Image from "next/image";
import logo from "@assets/logo/awd_logo_white.svg";
import logo2 from "@assets/logo/awd_logo.svg";
import AWDButton from "@components/AWDButton/AWDButton";

const Navbar = () => {
  const menuItems = [
    { label: "Meet AWD", path: "#meet-awd" }, // ID of the section
    { label: "Process", path: "#process" },
    { label: "Pricing", path: "#pricing" },
    { label: "Projects", path: "#projects" },
    { label: "Store", path: "#store" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "transparent",
        boxShadow: "none",
        transition: "background-color 0.3s ease-in-out",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
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
            src={isScrolled ? logo2 : logo}
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
              href={item.path} // Navigate to the section ID
              style={{
                color: isScrolled ? "#FA206F" : "white",
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

        {/* Call to Action */}
        <AWDButton
          link="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1cdpJh66qBBGSsHQROwXAyx8-wogW4ICntw-FUVtXZnz9yYvrJCrrcGds46hdzJFa4Vo13qVeA"
          borderColor={isScrolled ? "#FA206F" : "white"}
          fontColor={isScrolled ? "#FA206F" : "white"}
          backgroundColor="transparent"
          hoverBackgroundColor={isScrolled ? "#FA206F" : "#fbfbfb"}
          hoverFontColor={isScrolled ? "#fbfbfb" : "#101010"}
        >
          Book a call
        </AWDButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
