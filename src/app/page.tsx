"use client";

import { useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../../src/i18n";
import SiteNav from "@components/sections/SiteNav";
import HeroSection from "@components/sections/HeroSection";
import ServicesSection from "@components/sections/ServicesSection";
import AboutSection from "@components/sections/AboutSection";
import ProcessSection from "@components/sections/ProcessSection";
import ProjectsSection from "@components/sections/ProjectsSection";
import PricingSection from "@components/sections/PricingSection";
import TestimonialsSection from "@components/sections/TestimonialsSection";
import SiteFooter from "@components/sections/SiteFooter";
import CookieBanner from "@components/sections/CookieBanner";
import AWDLoader from "@components/ui/AWDLoader";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-11564510788/2KE2COqTsooaEMTcsYor",
      });
    }

    return () => clearTimeout(timer);
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      {isLoading ? (
        <AWDLoader />
      ) : (
        <>
          <SiteNav />
          <div className="snap-container bg-paper text-ink">
            <main>
              <HeroSection />
              <AboutSection />
              <ServicesSection />
              <ProcessSection />
              <ProjectsSection />
              <PricingSection />
              <TestimonialsSection />
            </main>
            <SiteFooter />
            <CookieBanner />
          </div>
        </>
      )}
    </I18nextProvider>
  );
};

export default Home;
