import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.tactna.com";
  const lastModified = new Date();
  
  const routes = routing.locales.map((locale) => ({
    url: locale === "ja" ? baseUrl : `${baseUrl}/${locale}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 1,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((l) => [
          l,
          l === "ja" ? baseUrl : `${baseUrl}/${l}`
        ])
      )
    }
  }));
  
  return routes;
}
