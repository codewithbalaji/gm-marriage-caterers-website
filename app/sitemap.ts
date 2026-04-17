import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://gmmarriagecaterers.com";
  const lastModified = new Date();

  return [
    { url: base, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/about`, lastModified, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/menu`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/gallery`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/booknow`, lastModified, changeFrequency: "yearly", priority: 0.9 },
  ];
}
