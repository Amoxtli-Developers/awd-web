"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
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

  if (!open || !mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60"
      onClick={onClose}
    >
      <div
        className="relative flex w-[90%] max-w-sm flex-col items-center gap-6 rounded-2xl bg-ink p-8 text-paper"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-paper/30 text-paper/70 transition-colors hover:text-paper"
          aria-label="Cerrar"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="text-center">
          <h2 className="font-space-grotesk text-xl font-semibold">
            {t("whatsapp.modalTitle")}
          </h2>
          <p className="mt-2 text-sm text-paper/70">
            {t("whatsapp.modalSubtitle")}
          </p>
        </div>

        <div className="rounded-xl bg-paper p-4">
          <QRCodeSVG value={waUrl} size={200} bgColor="#ffffff" fgColor="#1a1a1a" />
        </div>

        <a
          href={waUrl}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-paper/70 transition-colors hover:text-paper"
        >
          {t("whatsapp.openLink")} →
        </a>
      </div>
    </div>,
    document.body
  );
};

export default WhatsAppModal;
