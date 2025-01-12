"use client";

import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import StoreCard from "@components/StoreCard/StoreCard";
import hoodie from "@assets/store/hoodie-front.png";
import tee from "@assets/store/tshirt-front.png";
import cap from "@assets/store/hat.png";

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

const StoreView = () => {
  const { t } = useTranslation();

  const products = [
    {
      id: 1,
      title: t("store.products.hoodie.title"),
      price: t("store.products.hoodie.price"),
      image: hoodie.src,
    },
    {
      id: 2,
      title: t("store.products.cap.title"),
      price: t("store.products.cap.price"),
      image: cap.src,
    },
    {
      id: 3,
      title: t("store.products.tshirt.title"),
      price: t("store.products.tshirt.price"),
      image: tee.src,
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        px: { xs: 2, sm: 4, md: 6, lg: 12 },
        py: { xs: 4, sm: 10, md: 12 },
        mt: { xs: 8, sm: 6, md: 6 },
      }}
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Header Section */}
      <Grid
        container
        spacing={2}
        sx={{
          mb: { xs: 4, sm: 6, md: 8 },
        }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              textAlign: { xs: "center", sm: "left" },
              fontSize: { xs: "32px", sm: "48px", lg: "64px" },
            }}
          >
            {t("store.title.part1")}
            <br />
            <span style={{ color: "#FA206F", fontWeight: "bold" }}>
              {t("store.title.part2")}
            </span>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <Typography
            sx={{
              textAlign: { xs: "center", sm: "right" },
              fontSize: { xs: "20px", sm: "20px", md: "28px", lg: "32px" },
            }}
          >
            <span style={{ color: "#FA206F", fontWeight: "bold" }}>
              {t("store.supports.awdStore")}
            </span>{" "}
            {t("store.supports.text1")}{" "}
            <span style={{ color: "#FA206F", fontWeight: "bold" }}>
              {t("store.supports.quetzal")}
            </span>{" "}
            {t("store.supports.text2")}{" "}
            <span style={{ color: "#FA206F", fontWeight: "bold" }}>
              {t("store.supports.axomerch")}
            </span>{" "}
            {t("store.supports.text3")}
            <span style={{ color: "#FA206F", fontWeight: "bold" }}>
              {t("store.supports.conservation")}
            </span>
            .
          </Typography>
        </Grid>
      </Grid>

      {/* Product Grid Section */}
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <StoreCard
              title={product.title}
              price={product.price}
              image={product.image}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StoreView;
