import type { Metadata } from "next";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description:
    "Read the Designr.pro terms of service for portfolio content, services, applications, third-party providers, and user responsibilities.",
  path: "/terms-of-service",
});

export default function TermsOfServiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
