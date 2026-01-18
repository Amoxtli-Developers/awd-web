import type { Metadata } from "next";
import { cookies } from "next/headers";
import Script from "next/script";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import en from "../locales/en/translation.json";
import es from "../locales/es/translation.json";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const getMeta = (lang: "en" | "es") => {
  const data = lang === "es" ? es : en;
  return data.meta;
};

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const lang = cookieStore.get("amoxtli-language")?.value === "es" ? "es" : "en";
  const meta = getMeta(lang);
  const baseUrl = new URL("https://www.amoxtli.tech");

  return {
    metadataBase: baseUrl,
    title: meta.title,
    description: meta.description,
    themeColor: "#FA1F6F",
    applicationName: "Amoxtli",
    category: "technology",
    referrer: "origin-when-cross-origin",
    icons: {
      icon: "/assets/favicon.png",
    },
    alternates: {
      canonical: "/",
      languages: {
        "en-US": "/?lang=en",
        "es-MX": "/?lang=es",
      },
    },
    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDescription,
      url: baseUrl,
      siteName: "Amoxtli",
      images: [
        {
          url: "/assets/og-image.png",
          width: 512,
          height: 512,
          alt: meta.ogAlt,
        },
      ],
      locale: lang === "es" ? "es_MX" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.twitterTitle,
      description: meta.twitterDescription,
      images: ["/assets/og-image.png"],
      site: "@amoxtli",
    },
    authors: [{ name: "Salomón Martínez", url: "https://www.amoxtli.tech" }],
    keywords: meta.keywords,
    robots: {
      index: true,
      follow: true,
    },
    viewport: {
      width: "device-width",
      initialScale: 1,
      maximumScale: 1,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = (await cookies()).get("amoxtli-language")?.value === "es" ? "es" : "en";
  const meta = getMeta(lang);
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Amoxtli",
    url: "https://www.amoxtli.tech",
    logo: "https://www.amoxtli.tech/assets/logo.svg",
    email: "hello@amoxtli.tech",
    sameAs: [
      "https://www.instagram.com/amoxtli.tech",
      "https://www.linkedin.com/company/amoxtli-web-developers",
    ],
    slogan:
      lang === "es"
        ? "Tecnología con propósito para startups y equipos en crecimiento"
        : "Technology with purpose for startups and growing teams",
  };
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Amoxtli",
    url: "https://www.amoxtli.tech",
    inLanguage: lang === "es" ? "es-MX" : "en-US",
    description: meta.description,
    publisher: {
      "@type": "Organization",
      name: "Amoxtli",
    },
  };
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: meta.title,
    description: meta.description,
    url: "https://www.amoxtli.tech/",
    inLanguage: lang === "es" ? "es-MX" : "en-US",
    isPartOf: {
      "@type": "WebSite",
      name: "Amoxtli",
      url: "https://www.amoxtli.tech",
    },
  };
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType:
      lang === "es"
        ? "Desarrollo de software, apps, SaaS, web y branding"
        : "Software, app, SaaS, web, and branding development",
    provider: {
      "@type": "Organization",
      name: "Amoxtli",
      url: "https://www.amoxtli.tech",
    },
    areaServed: "MX",
  };

  return (
    <html lang={lang === "es" ? "es" : "en"}>
      <head />
      <body className={`${spaceGrotesk.variable} antialiased`}>{children}</body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-11564510788"
        strategy="afterInteractive"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11564510788');
          `,
        }}
      />
      <Script
        id="ld-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <Script
        id="ld-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <Script
        id="ld-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Script
        id="ld-webpage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
    </html>
  );
}
