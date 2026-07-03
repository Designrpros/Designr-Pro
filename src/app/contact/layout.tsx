import type { Metadata } from "next";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Designr.pro",
  description:
    "Contact Vegar Berentsen for app design, web development, portfolio work, AI tools, and creative technology projects.",
  path: "/contact",
});

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
