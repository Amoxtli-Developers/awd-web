"use client";

import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

export type PricingInquiryPayload = {
  service: string;
  name: string;
  email: string;
  company: string;
  website?: string;
  budget: string;
  timeline: string;
  message: string;
};

interface PricingInquiryModalProps {
  open: boolean;
  service?: string;
  onClose: () => void;
}

const PricingInquiryModal = ({ open, service, onClose }: PricingInquiryModalProps) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { isSubmitting, isSubmitSuccessful, errors },
  } = useForm<PricingInquiryPayload>({
    defaultValues: {
      service: service || "",
      name: "",
      email: "",
      company: "",
      website: "",
      budget: "",
      timeline: "",
      message: "",
    },
  });

  const heading = useMemo(
    () => (service ? t("pricing.form.titleWithService", { service }) : t("pricing.form.title")),
    [service, t]
  );
  const [submitError, setSubmitError] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    reset((current) => ({ ...current, service: service || "" }));
  }, [service, reset]);

  useEffect(() => {
    if (!open) {
      reset({
        service: service || "",
        name: "",
        email: "",
        company: "",
        website: "",
        budget: "",
        timeline: "",
        message: "",
      });
      setSubmitError(false);
      setStep(0);
    }
  }, [open, reset, service]);

  if (!open) return null;

  const onSubmit = async (data: PricingInquiryPayload) => {
    try {
      setSubmitError(false);
      const payload = { ...data, service: service || data.service };
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to send");
      }
      reset({
        service: service || "",
        name: "",
        email: "",
        company: "",
        website: "",
        budget: "",
        timeline: "",
        message: "",
      });
      setStep(0);
    } catch {
      setSubmitError(true);
    }
  };

  const handleNext = async () => {
    const ok = await trigger(["name", "email", "company"]);
    if (ok) {
      setStep(1);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-ink/40 px-4 pt-24 sm:items-center sm:pt-0">
      <div className="flex w-full max-w-[640px] flex-col rounded-3xl border border-line bg-paper p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)] sm:max-h-[80vh] max-h-[85dvh]">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold text-ink">
              {isSubmitSuccessful
                ? t("pricing.form.successTitle")
                : submitError
                  ? t("pricing.form.errorTitle")
                  : heading}
            </h3>
            <p className="mt-2 text-sm text-ink/70">
              {isSubmitSuccessful
                ? t("pricing.form.successMessage")
                : submitError
                  ? t("pricing.form.errorMessage")
                  : t("pricing.form.subtitle")}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-sm text-ink/60 hover:text-ink"
            aria-label={t("pricing.form.close")}
          >
            {t("pricing.form.close")}
          </button>
        </div>

        {isSubmitSuccessful || submitError ? (
          <div className="mt-6 rounded-2xl bg-paper text-sm text-ink/70">
            <button
              type="button"
              onClick={onClose}
              className="mt-4 inline-flex min-h-[40px] items-center rounded-full border border-primary px-4 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-paper"
            >
              {t("pricing.form.done")}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 flex flex-1 flex-col text-sm text-ink/70">
            <input type="hidden" value={service || ""} {...register("service")} />
            <div className="flex-1 space-y-4 overflow-y-auto pr-1">
              {step === 0 ? (
                <>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="flex flex-col gap-2">
                      <span className="text-xs uppercase tracking-[0.2em] text-ink/50">
                        {t("pricing.form.name")}
                      </span>
                      <input
                        {...register("name", { required: true })}
                        className="rounded-xl border border-line px-4 py-2 text-sm text-ink"
                      />
                      {errors.name && (
                        <span className="text-xs text-primary">{t("pricing.form.required")}</span>
                      )}
                    </label>
                    <label className="flex flex-col gap-2">
                      <span className="text-xs uppercase tracking-[0.2em] text-ink/50">
                        {t("pricing.form.email")}
                      </span>
                      <input
                        type="email"
                        {...register("email", { required: true })}
                        className="rounded-xl border border-line px-4 py-2 text-sm text-ink"
                      />
                      {errors.email && (
                        <span className="text-xs text-primary">{t("pricing.form.required")}</span>
                      )}
                    </label>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="flex flex-col gap-2">
                      <span className="text-xs uppercase tracking-[0.2em] text-ink/50">
                        {t("pricing.form.company")}
                      </span>
                      <input
                        {...register("company", { required: true })}
                        className="rounded-xl border border-line px-4 py-2 text-sm text-ink"
                      />
                      {errors.company && (
                        <span className="text-xs text-primary">{t("pricing.form.required")}</span>
                      )}
                    </label>
                    <label className="flex flex-col gap-2">
                      <span className="text-xs uppercase tracking-[0.2em] text-ink/50">
                        {t("pricing.form.website")}
                      </span>
                      <input
                        {...register("website")}
                        className="rounded-xl border border-line px-4 py-2 text-sm text-ink"
                      />
                    </label>
                  </div>
                </>
              ) : (
                <>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="flex flex-col gap-2">
                      <span className="text-xs uppercase tracking-[0.2em] text-ink/50">
                        {t("pricing.form.budget")}
                      </span>
                      <select
                        {...register("budget", { required: true })}
                        className="rounded-xl border border-line bg-paper px-4 py-2 text-sm text-ink"
                      >
                        <option value="">{t("pricing.form.select")}</option>
                        <option value={t("pricing.form.budgetOptions.low")}>
                          {t("pricing.form.budgetOptions.low")}
                        </option>
                        <option value={t("pricing.form.budgetOptions.mid")}>
                          {t("pricing.form.budgetOptions.mid")}
                        </option>
                        <option value={t("pricing.form.budgetOptions.high")}>
                          {t("pricing.form.budgetOptions.high")}
                        </option>
                      </select>
                      {errors.budget && (
                        <span className="text-xs text-primary">{t("pricing.form.required")}</span>
                      )}
                    </label>
                    <label className="flex flex-col gap-2">
                      <span className="text-xs uppercase tracking-[0.2em] text-ink/50">
                        {t("pricing.form.timeline")}
                      </span>
                      <select
                        {...register("timeline", { required: true })}
                        className="rounded-xl border border-line bg-paper px-4 py-2 text-sm text-ink"
                      >
                        <option value="">{t("pricing.form.select")}</option>
                        <option value={t("pricing.form.timelineOptions.asap")}>
                          {t("pricing.form.timelineOptions.asap")}
                        </option>
                        <option value={t("pricing.form.timelineOptions.soon")}>
                          {t("pricing.form.timelineOptions.soon")}
                        </option>
                        <option value={t("pricing.form.timelineOptions.flexible")}>
                          {t("pricing.form.timelineOptions.flexible")}
                        </option>
                      </select>
                      {errors.timeline && (
                        <span className="text-xs text-primary">{t("pricing.form.required")}</span>
                      )}
                    </label>
                  </div>

                  <label className="flex flex-col gap-2">
                    <span className="text-xs uppercase tracking-[0.2em] text-ink/50">
                      {t("pricing.form.message")}
                    </span>
                    <textarea
                      rows={4}
                      {...register("message", { required: true })}
                      className="rounded-xl border border-line px-4 py-2 text-sm text-ink"
                    />
                    {errors.message && (
                      <span className="text-xs text-primary">{t("pricing.form.required")}</span>
                    )}
                  </label>
                </>
              )}
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              {step === 0 ? (
                <>
                  <button
                    type="button"
                    onClick={onClose}
                    className="min-h-[40px] rounded-full border border-line px-4 text-xs font-semibold text-ink transition-colors hover:border-primary"
                  >
                    {t("pricing.form.cancel")}
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="min-h-[40px] rounded-full border border-primary px-4 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-paper"
                  >
                    {t("pricing.form.next")}
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => setStep(0)}
                    className="min-h-[40px] rounded-full border border-line px-4 text-xs font-semibold text-ink transition-colors hover:border-primary"
                  >
                    {t("pricing.form.back")}
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="min-h-[40px] rounded-full border border-primary px-4 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-paper disabled:opacity-60"
                  >
                    {isSubmitting ? t("pricing.form.sending") : t("pricing.form.submit")}
                  </button>
                </>
              )}
              {errors.root && (
                <span className="text-xs text-primary">{t("pricing.form.error")}</span>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default PricingInquiryModal;
