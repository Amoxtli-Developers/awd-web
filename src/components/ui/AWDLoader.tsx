"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import axo from "@assets/about/grid_2.gif";
import { gsap } from "gsap";

const AWDLoader: React.FC = () => {
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (textRef.current) {
      const text = "< Amoxtli />";
      const typewriter = gsap.timeline();

      text.split("").forEach((char, i) => {
        typewriter.to(textRef.current, {
          textContent: text.substring(0, i + 1),
          duration: 0.05,
          ease: "none",
        });
      });
    }
  }, []);

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-[#FF3266] text-center md:flex-row">
      <div className="flex items-center justify-center">
        <Image src={axo} alt="AWD Logo" width={200} height={200} />
      </div>
      {/* <Typography
        ref={textRef}
        variant="h5"
        sx={{
          color: "#fbfbfb",
          ml: { xs: 0, md: 2 },
          fontWeight: 700,
          fontFamily: "var(--font-space-grotesk)",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
      </Typography> */}
    </div>
  );
};

export default AWDLoader;
