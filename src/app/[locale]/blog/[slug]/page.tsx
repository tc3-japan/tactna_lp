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
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Post Not Found",
    };
  }

  const publishedDate = blog.publishedAt || blog.createdAt;

  return {
    title: blog.title,
    description: blog.content.replace(/<[^>]*>/g, "").substring(0, 160),
    openGraph: {
      title: blog.title,
      description: blog.content.replace(/<[^>]*>/g, "").substring(0, 160),
      images: blog.thumbnail ? [blog.thumbnail.url] : [],
      type: "article",
      publishedTime: publishedDate,
      modifiedTime: blog.updatedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.content.replace(/<[^>]*>/g, "").substring(0, 160),
      images: blog.thumbnail ? [blog.thumbnail.url] : [],
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    datePublished: publishedDate,
    dateModified: blog.updatedAt,
    image: blog.thumbnail?.url,
    author: {
      "@type": "Organization",
      name: "TACTNA",
    },
    publisher: {
      "@type": "Organization",
      name: "TACTNA",
      logo: {
        "@type": "ImageObject",
        url: "/logo.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://tactna.com/${locale}/blog/${slug}`,
    },
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
