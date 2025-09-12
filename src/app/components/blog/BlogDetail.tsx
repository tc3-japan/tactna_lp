"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useState, useMemo } from "react";
import type { Blog } from "@/lib/microcms/types";
import { getLocaleFromBlog } from "@/lib/microcms/types";
import { BlogCard } from "./BlogCard";
import { cn } from "@/lib/utils";
import { calculateReadingTime } from "@/lib/utils/seo";

interface BlogDetailProps {
  blog: Blog;
  relatedBlogs?: Blog[];
  className?: string;
}

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function BlogDetail({
  blog,
  relatedBlogs = [],
  className,
}: BlogDetailProps) {
  const t = useTranslations("blog");
  const blogLocale = getLocaleFromBlog(blog);
  const publishedDate = blog.publishedAt || blog.createdAt;
  const [activeId, setActiveId] = useState<string>("");
  
  // 読了時間を計算
  const readingTime = useMemo(() => {
    return calculateReadingTime(blog.content, blogLocale);
  }, [blog.content, blogLocale]);
  
  // 正規表現で見出しを抽出（サーバーサイド対応）
  const { processedContent, tocItems } = useMemo(() => {
    const headingRegex = /<(h[1-4])[^>]*>(.*?)<\/h[1-4]>/gi;
    const toc: TocItem[] = [];
    let content = blog.content;
    let match;
    let index = 0;
    
    while ((match = headingRegex.exec(blog.content)) !== null) {
      const [fullMatch, tag, text] = match;
      const id = `heading-${index}`;
      const level = parseInt(tag.substring(1));
      
      // 見出しにIDを付与
      const newHeading = `<${tag} id="${id}">${text}</${tag}>`;
      content = content.replace(fullMatch, newHeading);
      
      toc.push({
        id,
        text: text.replace(/<[^>]*>/g, ''), // HTMLタグを除去
        level
      });
      
      index++;
    }
    
    return {
      processedContent: content,
      tocItems: toc
    };
  }, [blog.content]);

  const formattedDate = new Date(publishedDate).toLocaleDateString(
    blogLocale === "ja" ? "ja-JP" : "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  // Intersection Observerで現在表示中のセクションをハイライト
  useEffect(() => {
    if (tocItems.length === 0) return;

    const headings = document.querySelectorAll('h1[id], h2[id], h3[id], h4[id]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-100px 0px -70% 0px',
        threshold: 0
      }
    );

    headings.forEach((heading) => {
      observer.observe(heading);
    });

    return () => {
      headings.forEach((heading) => {
        observer.unobserve(heading);
      });
    };
  }, [tocItems]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

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
                <div className="flex flex-wrap gap-3 mb-4">
                  <time className="inline-block px-3 py-1 text-sm font-medium bg-blue-600/90 rounded-full">
                    {formattedDate}
                  </time>
                  <span className="inline-block px-3 py-1 text-sm font-medium bg-green-600/90 rounded-full">
                    読了時間: {readingTime}分
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                  {blog.title}
                </h1>
              </div>
            </div>
          )}

          {!blog.thumbnail && (
            <div className="p-8">
              <div className="flex flex-wrap gap-3 mb-6">
                <time className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
                  {formattedDate}
                </time>
                <span className="inline-block px-3 py-1 text-sm font-medium text-green-600 bg-green-50 rounded-full">
                  読了時間: {readingTime}分
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                {blog.title}
              </h1>
            </div>
          )}
        </div>

        {/* 目次部分 */}
        {tocItems.length > 0 && (
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
            <div className="border-l-4 border-blue-600 pl-4">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                {t("tableOfContents")}
              </h2>
              <nav className="space-y-2">
                {tocItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToHeading(item.id)}
                    className={cn(
                      "block w-full text-left transition-all duration-200 hover:text-blue-600",
                      item.level === 1 && "font-bold text-base",
                      item.level === 2 && "pl-4 text-sm",
                      item.level === 3 && "pl-8 text-sm text-gray-600",
                      item.level === 4 && "pl-12 text-xs text-gray-500",
                      activeId === item.id && "text-blue-600 font-semibold"
                    )}
                  >
                    {item.text}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        )}

        {/* コンテンツ部分 */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-8 relative">
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: processedContent }}
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
