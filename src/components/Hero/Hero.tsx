"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import heroImage from "@assets/hero/hero.jpg";

const textVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.8,
      delay: 0.3,
    },
  },
};

const Hero = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        justifyContent: { xs: "center", md: "flex-end" }, // Center text on mobile
        alignItems: "center",
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: -2,
        }}
      >
        <Image
          src={heroImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center" // Ensures proper image positioning
          priority
        />
      </Box>

      {/* Overlay with Blur Effect */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(4px)",
          zIndex: -1,
        }}
      />

      {/* Content */}
      <Box
        component={motion.div}
        initial="hidden"
        animate="visible"
        sx={{
          textAlign: { xs: "right", md: "right" }, // Center text on mobile
          color: "white",
          px: { xs: 2, sm: 4, md: 6 },
          maxWidth: { xs: "90%", md: "1000px" },
        }}
      >
        {/* Title */}
        <motion.div variants={textVariants}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 400,
              lineHeight: 1.2,
              fontSize: { xs: "64px", sm: "72px", md: "80px", lg: "96px" },
            }}
          >
            We are <strong>Amoxtli</strong> <br />
            <strong>Web Developers</strong>
          </Typography>
        </motion.div>

        {/* Subheading */}
        <motion.div variants={textVariants} custom={0.5}>
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: { xs: "16px", sm: "20px", md: "24px", lg: "1.5rem" },
              fontWeight: 400,
              mt: 2,
            }}
          >
            amox·tli /ˈaːmoʃt͡ɬi/ nāhuatl: codex
          </Typography>
        </motion.div>

        {/* Description */}
        <motion.div variants={textVariants} custom={1}>
          <Typography
            variant="h3"
            sx={{
              mt: 3,
              lineHeight: 1.8,
              fontSize: { xs: "24px", sm: "28px", md: "32px", lg: "40px" },
            }}
          >
            A software development startup founded in{" "}
            <span style={{ fontWeight: "bold" }}>Mexico</span> by a group of
            passionate engineers seeking to help startups and small businesses
            succeed in the{" "}
            <span style={{ fontWeight: "bold" }}>digital world</span>.
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Hero;
