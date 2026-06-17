"use client";

import { useState, useCallback } from "react";

const getWaUrl = () => {
  const num = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";
  const msg = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ?? "";
  return `https://wa.me/${num}?text=${msg}`;
};

const isMobileDevice = () => {
  if (typeof window === "undefined") return false;
  return (
    /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
    window.innerWidth <= 768
  );
};

export const getWhatsAppUrl = getWaUrl;

export const useWhatsAppCTA = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleCTA = useCallback(() => {
    if (isMobileDevice()) {
      window.open(getWaUrl(), "_blank", "noopener,noreferrer");
    } else {
      setModalOpen(true);
    }
  }, []);

  const closeModal = useCallback(() => setModalOpen(false), []);

  return { handleCTA, modalOpen, closeModal };
};
