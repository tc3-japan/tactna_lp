import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { BlogList } from "@/app/components/blog/BlogList";
import { getBlogs } from "@/lib/microcms/client";
import { getLocaleFromBlog } from "@/lib/microcms/types";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

interface BlogPageProps {
  params: Promise<{
    locale: "ja" | "en";
  }>;
  searchParams: Promise<{
    page?: string;
  }>;
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function BlogPage({
  params,
  searchParams,
}: BlogPageProps) {
  const { locale } = await params;
  const { page = "1" } = await searchParams;
  const t = await getTranslations({ locale, namespace: "blog" });

  const currentPage = parseInt(page, 10);
  const limit = 9;
  const offset = (currentPage - 1) * limit;

  // 全記事を取得してクライアント側でフィルタリング
  const allData = await getBlogs({ limit: 100, offset: 0 });

  // 現在のlocaleに合致する記事のみをフィルタリング
  const filteredBlogs = allData.contents.filter(
    (blog) => getLocaleFromBlog(blog) === locale
  );

  // ページネーション処理
  const startIndex = offset;
  const endIndex = startIndex + limit;
  const blogs = filteredBlogs.slice(startIndex, endIndex);
  const totalCount = filteredBlogs.length;
  const totalPages = Math.ceil(totalCount / limit);

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-10">
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
              {t("title")}
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-600">
              {t("description")}
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <BlogList blogs={blogs} />

          {totalPages > 1 && (
            <nav className="mt-16 flex justify-center space-x-2">
              {currentPage > 1 && (
                <a
                  href={`/${locale}/blog?page=${currentPage - 1}`}
                  className="flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700 transition-colors"
                >
                  {t("previous")}
                </a>
              )}

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (pageNum) => (
                  <a
                    key={pageNum}
                    href={`/${locale}/blog?page=${pageNum}`}
                    className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      pageNum === currentPage
                        ? "bg-blue-600 text-white border border-blue-600"
                        : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                    }`}
                  >
                    {pageNum}
                  </a>
                )
              )}

              {currentPage < totalPages && (
                <a
                  href={`/${locale}/blog?page=${currentPage + 1}`}
                  className="flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700 transition-colors"
                >
                  {t("next")}
                </a>
              )}
            </nav>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
