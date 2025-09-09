"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import type { Blog } from "@/lib/microcms/types";
import { getLocaleFromBlog } from "@/lib/microcms/types";
import { BlogCard } from "./BlogCard";
import { cn } from "@/lib/utils";

interface BlogDetailProps {
  blog: Blog;
  relatedBlogs?: Blog[];
  className?: string;
}

export function BlogDetail({
  blog,
  relatedBlogs = [],
  className,
}: BlogDetailProps) {
  const t = useTranslations("blog");
  const blogLocale = getLocaleFromBlog(blog);
  const publishedDate = blog.publishedAt || blog.createdAt;

  const formattedDate = new Date(publishedDate).toLocaleDateString(
    blogLocale === "ja" ? "ja-JP" : "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className={cn("mx-auto max-w-4xl", className)}>
      {/* メインコンテンツ - 中央表示 */}
      <article>
        {/* ヘッダー部分 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          {blog.thumbnail && (
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={blog.thumbnail.url}
                alt={blog.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <time className="inline-block px-3 py-1 text-sm font-medium bg-blue-600/90 rounded-full mb-4">
                  {formattedDate}
                </time>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                  {blog.title}
                </h1>
              </div>
            </div>
          )}

          {!blog.thumbnail && (
            <div className="p-8">
              <time className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full mb-6">
                {formattedDate}
              </time>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                {blog.title}
              </h1>
            </div>
          )}
        </div>

        {/* コンテンツ部分 */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-8 relative">
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </article>

      {/* 関連記事セクション */}
      {relatedBlogs.length > 0 && (
        <section className="mt-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-gray-900 flex items-center">
              <svg
                className="w-6 h-6 text-blue-600 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
              {t("relatedPosts")}
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedBlogs.map((relatedBlog) => (
                <BlogCard key={relatedBlog.id} blog={relatedBlog} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
