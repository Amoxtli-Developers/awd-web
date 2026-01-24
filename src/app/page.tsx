"use client";

import { useEffect, useState, useRef } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../../src/i18n";
import { gsap } from "gsap";
import { useLanguage } from "@components/sections/useLanguage";
import SiteNav from "@components/sections/SiteNav";
import HeroSection from "@components/sections/HeroSection";
import ServicesSection from "@components/sections/ServicesSection";
import InitiativesSection from "@components/sections/InitiativesSection";
import AboutSection from "@components/sections/AboutSection";
import ProcessSection from "@components/sections/ProcessSection";
import ProjectsSection from "@components/sections/ProjectsSection";
import PricingSection from "@components/sections/PricingSection";
import TestimonialsSection from "@components/sections/TestimonialsSection";
import SiteFooter from "@components/sections/SiteFooter";
import CookieBanner from "@components/sections/CookieBanner";
import AWDLoader from "@components/ui/AWDLoader";

const Home = () => {
  const [showLoader, setShowLoader] = useState(true);
  const contentRef = useRef(null);
  const { setLanguage } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setShowLoader(false);
        },
      });

      tl.to(".loader-wrapper", {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut",
      }).to(
        contentRef.current,
        {
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.5"
      );
    }, 2000);

    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-11564510788/2KE2COqTsooaEMTcsYor",
      });
    }

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleLanguageChange = (lang: "en" | "es") => {
    if (!contentRef.current) return;
    const tl = gsap.timeline();
    tl.to(contentRef.current, { opacity: 0, duration: 0.3, ease: "power1.in" })
      .call(() => {
        setLanguage(lang);
      })
      .to(contentRef.current, { opacity: 1, duration: 0.5, ease: "power1.out" });
  };

  return (
    <I18nextProvider i18n={i18n}>
      {showLoader && (
        <div className="loader-wrapper fixed inset-0 z-50">
          <AWDLoader />
        </div>
      )}
      <div ref={contentRef} style={{ opacity: showLoader ? 0 : 1 }}>
        <SiteNav onLanguageChange={handleLanguageChange} />
        <div className="snap-container bg-paper text-ink">
          <main>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <ProcessSection />
            <ProjectsSection />
            <PricingSection />
            <TestimonialsSection />
            <InitiativesSection />
          </main>
          <SiteFooter onLanguageChange={handleLanguageChange} />
          <CookieBanner />
        </div>
      </div>
    </I18nextProvider>
  );
};

export default Home;
