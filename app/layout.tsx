import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { siteConfig } from "@/data/site";
import { Preloader } from "@/components/layout/Preloader";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "700"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.fullTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "full-stack developer",
    "react developer",
    "node.js developer",
    "freelance web developer",
    "website development",
  ],
  openGraph: {
    title: siteConfig.fullTitle,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.fullTitle,
    type: "website",
    images: ["/saqi-photo.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.fullTitle,
    description: siteConfig.description,
    images: ["/saqi-photo.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    url: siteConfig.url,
    image: `${siteConfig.url}/saqi-photo.jpg`,
    sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
    knowsAbout: [
      "React.js",
      "Node.js",
      "Express.js",
      "REST APIs",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  };

  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Preloader />
        {children}
      </body>
    </html>
  );
}
