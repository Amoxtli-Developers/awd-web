import React from "react";
import {
  Card,
  CardActions,
  Typography,
  Button,
  List,
  ListItem,
  Box,
} from "@mui/material";
import { useTranslation } from "react-i18next"; // Import useTranslation

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  bulletPoints: string[];
  backgroundColor?: string;
  textColor?: string;
  href: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  bulletPoints,
  backgroundColor = "#FFFFFF",
  textColor = "#000000",
  href,
}) => {
  const { t } = useTranslation(); // Initialize translation hook

  return (
    <Card
      sx={{
        backgroundColor,
        color: textColor,
        borderRadius: "30px",
        boxShadow: "none",
        p: { xs: 2, sm: 4 }, // Responsive padding
        height: "100%",
        "&:hover": {
          boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.1)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "row" }, // Stacks content vertically on small screens
        }}
      >
        {/* Title */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            marginBottom: { xs: 2, sm: "10px" },
            fontSize: "36px", // Maintains the larger text configuration
            textAlign: { xs: "center", sm: "left" }, // Centers text on smaller screens
          }}
        >
          {title}
        </Typography>

        {/* Price */}
        <Typography
          variant="h6"
          sx={{
            marginBottom: { xs: 2, sm: "10px" },
            fontSize: "32px", // Maintains the larger text configuration
            textAlign: { xs: "center", sm: "right" }, // Centers text on smaller screens
          }}
        >
          {price}
        </Typography>
      </Box>

      {/* Description */}
      <Typography
        variant="body1"
        sx={{
          marginBottom: "20px",
          fontSize: { xs: "14px", sm: "16px" }, // Responsive font size for smaller text
          textAlign: { xs: "center", sm: "left" }, // Centers text on smaller screens
        }}
      >
        {description}
      </Typography>

      {/* Bullet Points */}
      <List sx={{ marginBottom: "20px" }}>
        {bulletPoints.map((point, index) => (
          <ListItem
            key={index}
            sx={{
              display: "list-item",
              padding: 0,
              fontSize: { xs: "16px", sm: "20px" }, // Responsive bullet point text size
              textAlign: { xs: "center", sm: "left" }, // Centers text on smaller screens
            }}
          >
            - {point}
          </ListItem>
        ))}
      </List>

      {/* Button */}
      <CardActions sx={{ justifyContent: { xs: "center", sm: "end" } }}>
        <Button
          variant="text"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            backgroundColor: "transparent",
            color: textColor,
            textTransform: "none",
            borderRadius: "24px",
            padding: "10px 20px",
            fontSize: { xs: "16px", sm: "18px" }, // Responsive button font size
          }}
        >
          {t("pricingCard.button")} &rarr;
        </Button>
      </CardActions>
    </Card>
  );
};

export default PricingCard;
