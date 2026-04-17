import type { MetadataRoute } from "next";
import { WEB_URL } from "@/lib/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: WEB_URL, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${WEB_URL}/about`, lastModified, changeFrequency: "yearly", priority: 0.8 },
    { url: `${WEB_URL}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${WEB_URL}/menu`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${WEB_URL}/gallery`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${WEB_URL}/booknow`, lastModified, changeFrequency: "yearly", priority: 0.9 },
  ];
}
