"use client";

import { useTranslation } from "react-i18next";
import FadeIn from "./FadeIn";
import { Check } from "lucide-react";
import { useState } from "react";
import PricingInquiryModal from "./PricingInquiryModal";

const PricingSection = () => {
  const { t } = useTranslation();
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const plans = [
    {
      key: "singlePage",
      title: t("pricing.singlePage.title"),
      price: t("pricing.singlePage.price"),
      description: t("pricing.singlePage.description"),
      features: [
        t("pricing.singlePage.features.responsiveDesign"),
        t("pricing.singlePage.features.seoOptimized"),
        t("pricing.singlePage.features.fastLoading"),
        t("pricing.singlePage.features.basicAnalytics"),
        t("pricing.singlePage.features.sslCertificate"),
        t("pricing.singlePage.features.ctaBanners"),
        t("pricing.singlePage.features.pages"),
      ],
    },
    {
      key: "landingPage",
      title: t("pricing.landingPage.title"),
      price: t("pricing.landingPage.price"),
      description: t("pricing.landingPage.description"),
      features: [
        t("pricing.landingPage.features.customDesign"),
        t("pricing.landingPage.features.seoOptimized"),
        t("pricing.landingPage.features.emailIntegration"),
        t("pricing.landingPage.features.leadForms"),
        t("pricing.landingPage.features.advancedAnalytics"),
        t("pricing.landingPage.features.ctaBanners"),
        t("pricing.landingPage.features.pages"),
      ],
    },
    {
      key: "ecommerce",
      title: t("pricing.ecommerce.title"),
      price: t("pricing.ecommerce.price"),
      description: t("pricing.ecommerce.description"),
      features: [
        t("pricing.ecommerce.features.customDesign"),
        t("pricing.ecommerce.features.paymentGateway"),
        t("pricing.ecommerce.features.inventoryManagement"),
        t("pricing.ecommerce.features.shoppingCart"),
        t("pricing.ecommerce.features.advancedAnalytics"),
        t("pricing.ecommerce.features.salesDashboard"),
        t("pricing.ecommerce.features.pages"),
      ],
    },
    {
      key: "brandDesign",
      title: t("pricing.brandDesign.title"),
      price: t("pricing.brandDesign.price"),
      description: t("pricing.brandDesign.description"),
      features: [
        t("pricing.brandDesign.features.logoDesign"),
        t("pricing.brandDesign.features.colorPalette"),
        t("pricing.brandDesign.features.typography"),
        t("pricing.brandDesign.features.styleGuide"),
        t("pricing.brandDesign.features.revisions"),
        t("pricing.brandDesign.features.finalFiles"),
        t("pricing.brandDesign.features.brandApplications"),
      ],
    },
  ];

  return (
    <section id="pricing" className="snap-section snap-center-section bg-paper z-0">
      <div className="mx-auto w-full max-w-[1200px] px-6 py-20">
        <FadeIn>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-ink sm:text-4xl">
                {t("pricing.titleFull")}
              </h2>
            </div>
            <p className="max-w-[480px] text-sm leading-relaxed text-ink/70 sm:text-base">
              {t("pricing.subtitleShort")}
            </p>
          </div>
        </FadeIn>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {plans.map((plan, index) => (
            <FadeIn key={plan.key} delay={index * 0.05}>
              <article
                className="flex h-full min-h-[300px] flex-col rounded-2xl border border-line p-4 transition-colors hover:border-primary sm:min-h-[310px] sm:p-5"
                role="button"
                tabIndex={0}
                onClick={() => setSelectedService(plan.title)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setSelectedService(plan.title);
                  }
                }}
              >
                <div>
                  <h3 className="text-xl font-semibold text-ink">
                    {plan.title}
                  </h3>
                  <p className="mt-2 flex items-baseline gap-2 text-base text-primary">
                    <span className="text-[11px] tracking-[0.2em] text-ink/50">
                      {t("pricing.from")}
                    </span>
                    <span>{plan.price}</span>
                  </p>
                  <p className="mt-2 text-sm text-ink/70">{plan.description}</p>
                </div>
                <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-ink/70 sm:grid-cols-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={`${plan.key}-${featureIndex}`} className="flex gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-ink/30" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    setSelectedService(plan.title);
                  }}
                  className="mt-auto inline-flex min-h-[40px] items-center justify-center rounded-full border border-primary px-4 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-paper max-sm:mt-4"
                >
                  {t("pricingCard.button")}
                </button>
              </article>
            </FadeIn>
          ))}
        </div>
        <PricingInquiryModal
          open={Boolean(selectedService)}
          service={selectedService || undefined}
          onClose={() => setSelectedService(null)}
        />
      </div>
    </section>
  );
};

export default PricingSection;
