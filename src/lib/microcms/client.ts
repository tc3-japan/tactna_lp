// 直接fetchを使用してmicroCMS APIにアクセス
import type { Blog, BlogList } from "./types";
import { getLocaleFromBlog, getBlogId } from "./types";

function getMicroCMSConfig() {
  const MICROCMS_SERVICE_DOMAIN = process.env.MICROCMS_SERVICE_DOMAIN;
  const MICROCMS_API_KEY = process.env.MICROCMS_API_KEY;

  if (!MICROCMS_SERVICE_DOMAIN) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
  }

  if (!MICROCMS_API_KEY) {
    throw new Error("MICROCMS_API_KEY is required");
  }

  return {
    MICROCMS_SERVICE_DOMAIN,
    MICROCMS_API_KEY,
    baseURL: `https://${MICROCMS_SERVICE_DOMAIN}/api/v1`,
  };
}

async function fetchFromMicroCMS(
  endpoint: string,
  params?: Record<string, string | number | boolean>
) {
  const { baseURL, MICROCMS_API_KEY } = getMicroCMSConfig();
  const url = new URL(`${baseURL}/${endpoint}`);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        url.searchParams.append(key, String(value));
      }
    });
  }


  const response = await fetch(url.toString(), {
    headers: {
      "X-MICROCMS-API-KEY": MICROCMS_API_KEY,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
}

export async function getBlogs(params?: { limit?: number; offset?: number }) {
  const { limit = 10, offset = 0 } = params || {};

  const queryParams = {
    limit,
    offset,
    orders: "-publishedAt",
  };

  const response = await fetchFromMicroCMS("blogs", queryParams);

  // レスポンスが単一記事の場合と複数記事の場合を処理
  if (response.contents && Array.isArray(response.contents)) {
    // 複数記事の場合（BlogList形式）
    return response as BlogList;
  } else if (response.createdAt) {
    // 単一記事の場合、BlogList形式に変換
    return {
      contents: [response],
      totalCount: 1,
      offset: 0,
      limit: 1,
    } as BlogList;
  } else {
    // 記事が存在しない場合
    return {
      contents: [],
      totalCount: 0,
      offset: 0,
      limit: 0,
    } as BlogList;
  }
}

export async function getBlogBySlug(slug: string) {
  try {
    return (await fetchFromMicroCMS(`blogs/${slug}`)) as Blog;
  } catch {
    // IDで見つからない場合、全記事から検索
    const allData = await getBlogs({ limit: 100 });

    const blog = allData.contents.find(
      (blog) => blog.slug === slug || getBlogId(blog) === slug
    );

    return blog || null;
  }
}

export async function getBlogById(id: string) {
  return (await fetchFromMicroCMS(`blogs/${id}`)) as Blog;
}

export async function getAllBlogSlugs() {
  const data = await getBlogs({ limit: 100 });

  return data.contents.map((blog) => ({
    slug: blog.slug || getBlogId(blog),
    locale: getLocaleFromBlog(blog),
  }));
}

export async function getRelatedBlogs(
  currentBlogId: string,
  locale: "ja" | "en",
  limit: number = 3
) {
  const data = await getBlogs({ limit: 50 });

  // クライアント側でフィルタリング
  const filteredBlogs = data.contents
    .filter(
      (blog) =>
        getBlogId(blog) !== currentBlogId && getLocaleFromBlog(blog) === locale
    )
    .slice(0, limit);

  return filteredBlogs;
}
