import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogDetail } from "@/app/components/blog/BlogDetail";
import {
  getBlogBySlug,
  getAllBlogSlugs,
  getRelatedBlogs,
} from "@/lib/microcms/client";
import { getBlogId } from "@/lib/microcms/types";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import { stripHtmlTags, truncateDescription } from "@/lib/utils/seo";

interface BlogDetailPageProps {
  params: Promise<{
    locale: "ja" | "en";
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();

  return slugs.map((item) => ({
    locale: item.locale,
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug, locale } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Post Not Found",
    };
  }

  const publishedDate = blog.publishedAt || blog.createdAt;
  const plainTextContent = stripHtmlTags(blog.content);
  const description = truncateDescription(plainTextContent, 160);
  const baseUrl = "https://www.tactna.com";
  const canonical = `${baseUrl}/${locale}/blog/${slug}`;

  return {
    title: blog.title,
    description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical,
      languages: {
        ja: `${baseUrl}/ja/blog/${slug}`,
        en: `${baseUrl}/en/blog/${slug}`,
      },
    },
    openGraph: {
      title: blog.title,
      description,
      url: canonical,
      images: blog.thumbnail ? [blog.thumbnail.url] : [],
      type: "article",
      publishedTime: publishedDate,
      modifiedTime: blog.updatedAt,
      locale: locale === "ja" ? "ja_JP" : "en_US",
      siteName: "Tactna",
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description,
      images: blog.thumbnail ? [blog.thumbnail.url] : [],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { locale, slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = await getRelatedBlogs(getBlogId(blog), locale, 3);

  const publishedDate = blog.publishedAt || blog.createdAt;

  // 構造化データ（BlogPosting + BreadcrumbList）
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `https://www.tactna.com/${locale}/blog/${slug}#article`,
        headline: blog.title,
        description: stripHtmlTags(blog.content).substring(0, 160),
        datePublished: publishedDate,
        dateModified: blog.updatedAt,
        image: blog.thumbnail?.url,
        author: {
          "@type": "Organization",
          "@id": "https://www.tactna.com/#organization",
          name: "TACTNA",
        },
        publisher: {
          "@type": "Organization",
          "@id": "https://www.tactna.com/#organization",
          name: "TACTNA",
          logo: {
            "@type": "ImageObject",
            url: "https://www.tactna.com/logo.svg",
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://www.tactna.com/${locale}/blog/${slug}`,
        },
        inLanguage: locale,
        isPartOf: {
          "@type": "Blog",
          "@id": `https://www.tactna.com/${locale}/blog`,
          name: "Tactna Blog",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://www.tactna.com/${locale}/blog/${slug}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "ホーム",
            item: `https://www.tactna.com/${locale}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "ブログ",
            item: `https://www.tactna.com/${locale}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: blog.title,
            item: `https://www.tactna.com/${locale}/blog/${slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="min-h-screen pt-20">
        <div className="container mx-auto px-4 py-16">
          <BlogDetail blog={blog} relatedBlogs={relatedBlogs} />
        </div>
      </main>
      <Footer />
    </>
  );
}
