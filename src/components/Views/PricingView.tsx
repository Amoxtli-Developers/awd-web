"use client";

import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import PricingCard from "@components/PricingCard/PricingCard";
import { useTranslation } from "react-i18next"; // Import useTranslation

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

const PricingView = () => {
  const { t } = useTranslation(); // Initialize translation hook

  const pricingPlans = [
    {
      title: t("pricing.singlePage.title"),
      price: t("pricing.singlePage.price"),
      description: t("pricing.singlePage.description"),
      bulletPoints: [
        t("pricing.singlePage.features.responsiveDesign"),
        t("pricing.singlePage.features.seoOptimized"),
        t("pricing.singlePage.features.fastLoading"),
        t("pricing.singlePage.features.basicAnalytics"),
        t("pricing.singlePage.features.sslCertificate"),
        t("pricing.singlePage.features.ctaBanners"),
        t("pricing.singlePage.features.pages"),
      ],
      backgroundColor: "#FFFFFF",
      textColor: "#000000",
      href: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3-Z0m1jTqkrAMsmX92MdfF--07g4sEkRlNqkxPwbCsd5vRnbtWFSMMoKaHHsNO0MJTAgZ0Lr8m",
    },
    {
      title: t("pricing.landingPage.title"),
      price: t("pricing.landingPage.price"),
      description: t("pricing.landingPage.description"),
      bulletPoints: [
        t("pricing.landingPage.features.customDesign"),
        t("pricing.landingPage.features.seoOptimized"),
        t("pricing.landingPage.features.emailIntegration"),
        t("pricing.landingPage.features.leadForms"),
        t("pricing.landingPage.features.advancedAnalytics"),
        t("pricing.landingPage.features.ctaBanners"),
        t("pricing.landingPage.features.pages"),
      ],
      backgroundColor: "#FA206F",
      textColor: "#FFFFFF",
      href: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ194tE2ge5Fp80T3yPfH489R2KU6hQTbvfNSceg477tPE0wFWk6kp6tdbb4K2B5-Pd7zJPYz0NB",
    },
    {
      title: t("pricing.ecommerce.title"),
      price: t("pricing.ecommerce.price"),
      description: t("pricing.ecommerce.description"),
      bulletPoints: [
        t("pricing.ecommerce.features.customDesign"),
        t("pricing.ecommerce.features.paymentGateway"),
        t("pricing.ecommerce.features.inventoryManagement"),
        t("pricing.ecommerce.features.shoppingCart"),
        t("pricing.ecommerce.features.advancedAnalytics"),
        t("pricing.ecommerce.features.salesDashboard"),
        t("pricing.ecommerce.features.pages"),
      ],
      backgroundColor: "#FFFFFF",
      textColor: "#000000",
      href: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0Mdzy_Bpm60JI7B4PLy94RvT3iOX49-_FLtvIwBVGO2LyhytH9-0Bn_hyVcIBhCBuAp0aNhl9d",
    },
    {
      title: t("pricing.brandDesign.title"),
      price: t("pricing.brandDesign.price"),
      description: t("pricing.brandDesign.description"),
      bulletPoints: [
        t("pricing.brandDesign.features.logoDesign"),
        t("pricing.brandDesign.features.colorPalette"),
        t("pricing.brandDesign.features.typography"),
        t("pricing.brandDesign.features.styleGuide"),
        t("pricing.brandDesign.features.revisions"),
        t("pricing.brandDesign.features.finalFiles"),
      ],
      backgroundColor: "#FFFFFF",
      textColor: "#000000",
      href: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1cdpJh66qBBGSsHQROwXAyx8-wogW4ICntw-FUVtXZnz9yYvrJCrrcGds46hdzJFa4Vo13qVeA",
    },
  ];

  return (
    <Box
      id="pricing"
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
      <Grid
        container
        spacing={2}
        component={motion.div}
        variants={childVariants}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        sx={{
          mt: 0,
          mb: { xs: 4, sm: 6, md: 8 },
        }}
      >
        <Grid item xs={12} sm={6} md={6}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              textAlign: { xs: "center", sm: "left" },
              fontSize: { xs: "48px", sm: "32px", md: "48px", lg: "64px" },
            }}
          >
            <span style={{ color: "#FA206F", fontWeight: "bold" }}>AWD</span>{" "}
            {t("pricing.title")}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Typography
            variant="body1"
            sx={{
              textAlign: { xs: "center", sm: "right" },
              fontSize: { xs: "20px", sm: "20px", md: "28px", lg: "32px" },
            }}
          >
            {t("pricing.subtitle.start")}{" "}
            <span style={{ fontWeight: "bold", color: "#FA206F" }}>
              {t("pricing.subtitle.important1")}
            </span>{" "}
            {t("pricing.subtitle.middle")}{" "}
            <span style={{ fontWeight: "bold", color: "#FA206F" }}>
              {t("pricing.subtitle.important2")}
            </span>{" "}
            {t("pricing.subtitle.end")}
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        {pricingPlans.map((plan, index) => (
          <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
            <PricingCard
              title={plan.title}
              price={plan.price}
              description={plan.description}
              bulletPoints={plan.bulletPoints}
              backgroundColor={plan.backgroundColor}
              textColor={plan.textColor}
              href={plan.href}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PricingView;
