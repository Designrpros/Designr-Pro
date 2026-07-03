import type { Metadata } from "next";

export const siteUrl = "https://designr.pro";
export const siteName = "Designr.pro";
export const ownerName = "Vegar Berentsen";

export const defaultDescription =
  "Designr.pro is the portfolio of Vegar Berentsen, a designer and developer in Norway building apps, websites, AI tools, and community projects.";

export const ogImage = {
  url: "/dp-Designr.Pro.png",
  width: 201,
  height: 163,
  alt: "Designr.pro logo",
};

type PageSeo = {
  title: string;
  description: string;
  path: string;
};

export function pageMetadata({ title, description, path }: PageSeo): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName,
      images: [ogImage],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  };
}

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  description: defaultDescription,
  inLanguage: "en",
  publisher: {
    "@type": "Person",
    name: ownerName,
    url: siteUrl,
  },
};

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: ownerName,
  url: siteUrl,
  image: `${siteUrl}${ogImage.url}`,
  jobTitle: "Designer and Developer",
  email: "mailto:designr.pros@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Osteras",
    addressCountry: "NO",
  },
  knowsAbout: [
    "Next.js",
    "React",
    "SwiftUI",
    "TypeScript",
    "web design",
    "iOS development",
    "AI tools",
  ],
};
