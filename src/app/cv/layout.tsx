import type { Metadata } from "next";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({
  title: "CV - Vegar Berentsen",
  description:
    "View the CV, experience, skills, projects, and technical background of Vegar Berentsen, designer and developer behind Designr.pro.",
  path: "/cv",
});

export default function CvLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
