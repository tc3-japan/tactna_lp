import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getAllBlogSlugs } from "@/lib/microcms/client";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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

  const blogListPages = routing.locales.map((locale) => ({
    url: `${baseUrl}/${locale}/blog`,
    lastModified,
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

  let blogDetailPages: MetadataRoute.Sitemap = [];
  
  try {
    const blogSlugs = await getAllBlogSlugs();
    blogDetailPages = blogSlugs.map((blog) => ({
      url: `${baseUrl}/${blog.locale}/blog/${blog.slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }));
  } catch (error) {
    console.error('Failed to fetch blog slugs for sitemap:', error);
  }
  
  return [...routes, ...blogListPages, ...blogDetailPages];
}
