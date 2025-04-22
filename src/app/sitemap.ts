import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.tactna.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://www.tactna.com/en",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];
}
