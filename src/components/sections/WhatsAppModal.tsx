"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getWhatsAppUrl } from "./useWhatsAppCTA";

interface Props {
  open: boolean;
  onClose: () => void;
}

const WhatsAppModal = ({ open, onClose }: Props) => {
  const { t } = useTranslation();
  const waUrl = getWhatsAppUrl();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-ink/40 px-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            key="card"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
            className="relative flex w-full max-w-sm flex-col items-center gap-6 rounded-2xl border border-line bg-paper p-8 shadow-[0_20px_60px_rgba(0,0,0,0.10)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-ink/20 hover:text-ink"
              aria-label="Cerrar"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Header */}
            <div className="text-center">
              <h2 className="text-xl font-semibold text-ink">
                {t("whatsapp.modalTitle")}
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                {t("whatsapp.modalSubtitle")}
              </p>
            </div>

            {/* QR */}
            <div className="rounded-xl border border-line p-4">
              <QRCodeSVG
                value={waUrl}
                size={192}
                bgColor="#FBFBFB"
                fgColor="#FA1F6F"
                level="M"
              />
            </div>

            {/* Fallback link */}
            <a
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-primary transition-opacity hover:opacity-70"
            >
              {t("whatsapp.openLink")} →
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default WhatsAppModal;
