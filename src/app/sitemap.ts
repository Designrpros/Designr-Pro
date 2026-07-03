import type { MetadataRoute } from "next";
import { siteUrl } from "./seo";

const routes = [
  { path: "/", priority: 1 },
  { path: "/about", priority: 0.8 },
  { path: "/cv", priority: 0.8 },
  { path: "/gallery", priority: 0.7 },
  { path: "/contact", priority: 0.7 },
  { path: "/blog", priority: 0.7 },
  { path: "/blog/uke-11-2026", priority: 0.6 },
  { path: "/blog/uke-12-2026", priority: 0.6 },
  { path: "/news", priority: 0.7 },
  { path: "/news/uke-1", priority: 0.6 },
  { path: "/news/uke-12-2026", priority: 0.6 },
  { path: "/privacy-policy", priority: 0.3 },
  { path: "/terms-of-service", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-03");

  return routes.map(({ path, priority }) => ({
    url: `${siteUrl}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: path === "/" || path === "/blog" || path === "/news" ? "weekly" : "monthly",
    priority,
  }));
}
