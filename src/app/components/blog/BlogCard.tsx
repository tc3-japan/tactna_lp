import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import type { Blog } from "@/lib/microcms/types";
import { getLocaleFromBlog, getBlogSlug } from "@/lib/microcms/types";

interface BlogCardProps {
  blog: Blog;
  className?: string;
}

export function BlogCard({ blog, className }: BlogCardProps) {
  const blogLocale = getLocaleFromBlog(blog);
  const t = useTranslations("blog");
  const publishedDate = blog.publishedAt || blog.createdAt;
  const formattedDate = new Date(publishedDate).toLocaleDateString(
    blogLocale === "ja" ? "ja-JP" : "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );
  console.log(blog);

  return (
    <article
      className={cn(
        "group relative flex flex-col bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden",
        className
      )}
    >
      <Link href={`/blog/${getBlogSlug(blog)}`} className="block">
        <div className="relative aspect-video overflow-hidden bg-gray-100">
          {blog.thumbnail ? (
            <Image
              src={blog.thumbnail.url}
              alt={blog.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-gray-100 to-gray-200">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 bg-gray-300 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="text-sm text-gray-500">No Image</span>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
        </div>
        <div className="p-6 space-y-3">
          <time className="inline-block px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full">
            {formattedDate}
          </time>
          <h3 className="line-clamp-2 text-xl font-bold tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
            {blog.title}
          </h3>
          <div
            className="line-clamp-3 text-gray-600 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html:
                blog.content.replace(/<[^>]*>/g, "").substring(0, 150) + "...",
            }}
          />
          <div className="pt-2">
            <span className="inline-flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-800 transition-colors">
              {t("readMore")}
              <svg
                className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
