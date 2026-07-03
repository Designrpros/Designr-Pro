import type { Metadata } from "next";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({
  title: "Gallery",
  description:
    "Browse the Designr.pro gallery with creative visuals, project imagery, and portfolio snapshots from Vegar Berentsen.",
  path: "/gallery",
});

export default function GalleryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
