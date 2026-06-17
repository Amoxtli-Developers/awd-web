import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FA1F6F",
};

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const lang = cookieStore.get("amoxtli-lang")?.value === "es" ? "es" : "en";
  const meta = getMeta(lang);
  const baseUrl = "https://www.amoxtli.tech";

  const esKeywords = [
    "Amoxtli", "Amoxtli tech", "Amoxtli México", "Amoxtli studio",
    "amoxtli.tech", "AWD Amoxtli", "Amoxtli Web Developers", "Amoxtli software",
    "desarrollo de software México", "software a la medida", "desarrollo web",
    "desarrollo de apps", "SaaS", "diseño de producto", "sistemas de marca",
    "diseño de logo", "UX UI", "transformación digital", "flujos con IA",
    "automatización", "estudio tecnológico digital", "CDMX tecnología",
    "Next.js", "React", "diseño y desarrollo web", "branding en México",
    "analítica y SEO", "studio digital México", "agencia de software México",
  ];
  const enKeywords = [
    "Amoxtli", "Amoxtli tech", "Amoxtli Mexico", "Amoxtli studio",
    "amoxtli.tech", "AWD Amoxtli", "Amoxtli Web Developers", "Amoxtli software",
    "software development Mexico", "custom software", "web development",
    "app development", "SaaS development", "product design", "brand systems",
    "logo design", "UX UI design", "digital transformation", "AI workflows",
    "business automation", "digital technology studio", "Mexico City tech studio",
    "Next.js development", "React development", "web design and development",
    "brand design Mexico", "analytics and SEO", "digital studio Mexico",
    "software agency Mexico",
  ];

  const title = lang === "es"
    ? "Amoxtli® | Studio de Software, Branding y Sistemas Digitales | México"
    : "Amoxtli® | Software Studio, Branding & Digital Systems | Mexico";
  const description = lang === "es"
    ? "Amoxtli es el studio tech en México que construye software a medida, apps, SaaS, sitios web y sistemas de marca para startups y equipos que quieren crecer con propósito."
    : "Amoxtli is a Mexico-based tech studio building custom software, apps, SaaS platforms, websites, and brand systems for startups and growing teams with purpose.";
  const ogTitle = lang === "es"
    ? "Amoxtli® | Studio Tech en México"
    : "Amoxtli® | Tech Studio in Mexico";
  const ogDescription = lang === "es"
    ? "Software a medida, apps, SaaS, web y branding con propósito — construido por Amoxtli, studio digital en México."
    : "Custom software, apps, SaaS, web and branding with purpose — built by Amoxtli, a digital studio in Mexico.";

  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    applicationName: "Amoxtli",
    category: "technology",
    referrer: "origin-when-cross-origin",
    creator: "Amoxtli",
    publisher: "Amoxtli",
    authors: [{ name: "Amoxtli", url: baseUrl }],
    keywords: lang === "es" ? esKeywords : enKeywords,
    icons: {
      icon: "/assets/favicon.png",
    },
    alternates: {
      canonical: `${baseUrl}/`,
      languages: {
        "x-default": `${baseUrl}/`,
        "es-MX": `${baseUrl}/`,
        "en-US": `${baseUrl}/`,
      },
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: baseUrl,
      siteName: "Amoxtli",
      images: [
        {
          url: "/assets/og-image.jpg",
          width: 5184,
          height: 3456,
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
      images: ["/assets/og-image.jpg"],
      site: "@amoxtlitech",
      creator: "@amoxtlitech",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = (await cookies()).get("amoxtli-lang")?.value === "es" ? "es" : "en";
  const meta = getMeta(lang);

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.amoxtli.tech/#organization",
    name: "Amoxtli",
    legalName: "Amoxtli Web Developers",
    url: "https://www.amoxtli.tech",
    logo: {
      "@type": "ImageObject",
      url: "https://www.amoxtli.tech/assets/logo.svg",
      width: 400,
      height: 100,
    },
    image: "https://www.amoxtli.tech/assets/og-image.jpg",
    description:
      lang === "es"
        ? "Amoxtli es un studio tech en México que construye software a medida, apps, SaaS, sitios web y sistemas de marca para startups y equipos en crecimiento."
        : "Amoxtli is a Mexico-based tech studio building custom software, apps, SaaS, websites, and brand systems for startups and growing teams.",
    foundingDate: "2022",
    email: "hello@amoxtli.tech",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ciudad de México",
      addressRegion: "CDMX",
      addressCountry: "MX",
    },
    areaServed: [
      { "@type": "Country", name: "Mexico" },
      { "@type": "City", name: "Ciudad de México" },
    ],
    sameAs: [
      "https://www.instagram.com/amoxtli.tech",
      "https://www.linkedin.com/company/amoxtli-web-developers",
      "https://partners.amoxtli.tech",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@amoxtli.tech",
      contactType: "customer service",
      availableLanguage: ["Spanish", "English"],
    },
    slogan:
      lang === "es"
        ? "Tecnología con propósito para startups y equipos en crecimiento"
        : "Technology with purpose for startups and growing teams",
    numberOfEmployees: { "@type": "QuantitativeValue", minValue: 2, maxValue: 10 },
    knowsAbout: ["Software Development", "Web Design", "Branding", "SaaS", "AI", "Digital Transformation"],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.amoxtli.tech/#website",
    name: "Amoxtli",
    alternateName: ["Amoxtli tech", "Amoxtli Web Developers", "AWD"],
    url: "https://www.amoxtli.tech",
    inLanguage: lang === "es" ? "es-MX" : "en-US",
    description:
      lang === "es"
        ? "Studio tech en México — software, apps, SaaS, web y branding con propósito."
        : "Tech studio in Mexico — software, apps, SaaS, web and branding with purpose.",
    publisher: { "@type": "Organization", "@id": "https://www.amoxtli.tech/#organization" },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.amoxtli.tech/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.amoxtli.tech/#webpage",
    name: meta.title,
    description: meta.description,
    url: "https://www.amoxtli.tech/",
    inLanguage: lang === "es" ? "es-MX" : "en-US",
    isPartOf: { "@type": "WebSite", "@id": "https://www.amoxtli.tech/#website" },
    about: { "@type": "Organization", "@id": "https://www.amoxtli.tech/#organization" },
  };

  const professionalServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.amoxtli.tech/#service",
    name: "Amoxtli",
    url: "https://www.amoxtli.tech",
    description:
      lang === "es"
        ? "Servicios de desarrollo de software, apps, SaaS, diseño web, branding y transformación digital en México."
        : "Software development, apps, SaaS, web design, branding, and digital transformation services in Mexico.",
    provider: { "@type": "Organization", "@id": "https://www.amoxtli.tech/#organization" },
    areaServed: { "@type": "Country", name: "Mexico" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: lang === "es" ? "Servicios de Amoxtli" : "Amoxtli Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: lang === "es" ? "Software, apps y SaaS" : "Software, apps & SaaS" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: lang === "es" ? "Diseño y desarrollo web" : "Website design & development" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: lang === "es" ? "Branding y sistemas visuales" : "Branding & visual systems" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: lang === "es" ? "Marketing digital y analítica" : "Digital marketing & analytics" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: lang === "es" ? "Consultoría de transformación digital" : "Digital transformation consulting" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: lang === "es" ? "Expansión con IA y productos AMOXTLI" : "AI expansion & Amoxtli products" } },
      ],
    },
  };

  const aggregateRatingJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.amoxtli.tech/#organization",
    name: "Amoxtli",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "4",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Andrés I." },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          lang === "es"
            ? "Nuestro sitio web ahora es más rápido, más responsivo y con un diseño que nos representa. El equipo capturó exactamente nuestra visión."
            : "Our business website is now faster, more responsive, and beautifully designed. The team perfectly captured our vision.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Laura O." },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          lang === "es"
            ? "La plataforma de e-commerce que construyeron llevó nuestras ventas a otro nivel. El diseño intuitivo superó todas nuestras expectativas."
            : "The e-commerce platform built for us has taken our sales to the next level. The intuitive design exceeded all expectations.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Omar D." },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          lang === "es"
            ? "El sitio de portafolio que crearon es impresionante y funcional. Nos ha ayudado a conseguir más clientes."
            : "The portfolio site created for us is stunning and functional. It has helped us gain more clients.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Patricia A." },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          lang === "es"
            ? "Nuestro sitio educativo ahora es un centro de aprendizaje interactivo. La atención al detalle del equipo marcó la diferencia."
            : "Our educational site is now a hub for interactive learning. The team's attention to detail made all the difference.",
      },
    ],
  };

  return (
    <html lang={lang === "es" ? "es" : "en"}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingJsonLd) }}
        />
        <meta name="geo.region" content="MX" />
        <meta name="geo.placename" content="Ciudad de México" />
        <meta name="geo.position" content="19.4326;-99.1332" />
        <meta name="ICBM" content="19.4326, -99.1332" />
      </head>
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
    </html>
  );
}
