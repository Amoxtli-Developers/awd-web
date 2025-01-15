import type { Metadata } from "next";
import "./globals.css";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Amoxtli Web Developers | Empowering Startups with Digital Excellence",
  description:
    "Amoxtli Web Developers specializes in web development, app design, and digital branding to help startups and businesses in Mexico and beyond succeed in the digital age.",
  themeColor: "#fa206f",
  icons: {
    icon: "/assets/favicon2.png",
  },
  openGraph: {
    title: "Amoxtli Web Developers | Digital Excellence for Startups",
    description:
      "Empowering businesses with custom web development, mobile apps, and branding solutions. Discover how Amoxtli can elevate your digital presence.",
    url: "https://www.amoxtli.tech",
    siteName: "Amoxtli Web Developers",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Amoxtli Web Developers - Crafting Digital Success",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amoxtli Web Developers | Digital Excellence for Startups",
    description:
      "Custom web development, mobile apps, and digital branding tailored for startups and businesses. Boost your online presence with Amoxtli.",
    images: ["/assets/og-image.png"],
    site: "@amoxtli", // Replace with your actual Twitter handle
  },
  authors: [{ name: "Salomón Martínez", url: "https://www.amoxtli.tech" }],
  keywords: [
    "Amoxtli",
    "Web Developers",
    "Digital Success",
    "Startups",
    "Web Development",
    "Software",
    "Apps",
    "Web Design",
    "UI/UX Design",
    "Digital Branding",
    "SEO Services",
    "Tech Solutions",
    "Technology Innovation",
    "E-commerce Solutions",
    "Mobile App Development",
    "Mexican Developers",
    "Next.js Developers",
    "React Developers",
    "Affordable Web Design",
    "Custom Software",
    "Cloud Integration",
    "Responsive Websites",
    "Progressive Web Apps",
    "Creative Agency",
    "Brand Strategy",
    "Logo Design",
    "Social Media Marketing",
    "Business Websites",
    "Modern UI Design",
    "Interactive Websites",
    "Professional Web Hosting",
    "Scalable Web Solutions",
    "Digital Transformation",
    "Agile Development",
    "Frontend Development",
    "Backend Development",
    "Cross-Platform Apps",
    "Digital Marketing",
    "Business Growth",
    "Custom Web Design",
    "Tech Startups",
    "Web Optimization",
    "Digital Identity",
    "Online Presence",
    "Corporate Websites",
    "Landing Pages",
    "CMS Integration",
    "Startup Success",
    "Mobile-Friendly Websites",
    "Web Development in Mexico",
    "Full-Stack Developers",
    "Website Redesign",
    "Affordable Web Solutions",
    "Online Branding",
    "User-Centered Design",
    "Innovation in Tech",
    "High-Performance Websites",
    "Future-Ready Apps",
    "Creative Web Solutions",
    "Amoxtli Digital Services",
    "Web Apps Development",
    "Business Success",
    "Affordable SEO",
  ],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11564510788"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11564510788');
            `,
          }}
        />
      </head>
      <body className={`${quicksand.variable} antialiased`}>{children}</body>
    </html>
  );
}
