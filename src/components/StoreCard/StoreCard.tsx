"use client";

import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import Image from "next/image";

interface StoreCardProps {
  image: string; // URL of the product image
  title: string;
  price: string; // Price with currency
}

const StoreCard: React.FC<StoreCardProps> = ({ image, title, price }) => {
  return (
    <Card
      sx={{
        borderRadius: "30px",
        backgroundColor: "#fff",
        boxShadow: "none",
        textAlign: "center",
        height: "100%",
      }}
    >
      {/* Centered Product Image */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 2,
        }}
      >
        <Image
          src={image}
          alt={title}
          width={350}
          height={350}
          style={{
            borderTopLeftRadius: "30px",
            borderTopRightRadius: "30px",
          }}
        />
      </Box>

      {/* Product Content */}
      <CardContent sx={{ padding: 4 }}>
        <Box display={"flex"} justifyContent="space-between" sx={{ alignItems: "center" }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#FA206F", // Pink color
              fontSize: "32px",
            }}
          >
            {title}
          </Typography>

          {/* Product Price */}
          <Typography
            variant="body1"
            sx={{
              color: "#101010", // Darker text color for contrast
              fontSize: "24px",
            }}
          >
            {price}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default StoreCard;
