"use client";

import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import PricingCard from "@components/PricingCard/PricingCard";

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
  const pricingPlans = [
    {
      title: "Single Page",
      price: "$4,500 MXN",
      description: "Perfect for personal projects or portfolios",
      bulletPoints: [
        "Responsive Design",
        "SEO Optimized",
        "Fast Loading Speed",
        "Basic Analytics",
        "SSL Certificate",
        "CTA Banners",
        "1 Page",
      ],
      backgroundColor: "#FFFFFF",
      textColor: "#000000",
      href: "#get-started-single",
    },
    {
      title: "Landing Page",
      price: "$8,000 MXN",
      description: "Built to drive conversions and capture leads",
      bulletPoints: [
        "Custom Design",
        "SEO Optimized",
        "Email Marketing Integration",
        "Lead Capture Forms",
        "Advanced Analytics",
        "CTA Banners",
        "Up to 4 Pages",
      ],
      backgroundColor: "#FA206F",
      textColor: "#FFFFFF",
      href: "#get-started-landing",
    },
    {
      title: "E-commerce",
      price: "$20,000 MXN",
      description: "Robust solution for your online store",
      bulletPoints: [
        "Custom Design",
        "Checkout Payment Gateway Setup",
        "Inventory Management",
        "Shopping cart configuration",
        "Advanced Analytics",
        "Sales Dashboard",
        "Up to 8 Pages",
      ],
      backgroundColor: "#FFFFFF",
      textColor: "#000000",
      href: "#get-started-ecommerce",
    },
    {
      title: "Brand Design",
      price: "$3,500 MXN",
      description: "Ideal for starting your brand or startup",
      bulletPoints: [
        "Logo Design",
        "Color Palette Selection",
        "Typography Guidelines",
        "Basic Brand Style Guide",
        "Two Design Revisions",
        "Final files in multiple formats (PNG, SVG, PDF, AI)",
      ],
      backgroundColor: "#FFFFFF",
      textColor: "#000000",
      href: "#get-started-brand",
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
            Pricing Plans
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
            Find the perfect{" "}
            <span style={{ fontWeight: "bold", color: "#FA206F" }}>plan</span>{" "}
            for your needs. Whether <span style={{ fontWeight: "bold", color: "#FA206F" }}>starting out</span> or <span style={{ fontWeight: "bold", color: "#FA206F" }}>scaling up,</span> our plans offer
            the flexibility and features to help you <span style={{ fontWeight: "bold", color: "#FA206F" }}>succeed.</span>
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
