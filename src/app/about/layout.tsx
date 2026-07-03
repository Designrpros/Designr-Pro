import type { Metadata } from "next";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({
  title: "About Vegar Berentsen",
  description:
    "Learn about Vegar Berentsen, the designer and developer behind Designr.pro, apps, websites, AI tools, and community projects.",
  path: "/about",
});

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
