import type { Metadata } from "next";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "Read the Designr.pro privacy policy for the portfolio website and related apps, including local processing, app data, and contact information.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
