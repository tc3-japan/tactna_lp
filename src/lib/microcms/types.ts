export type Blog = {
  id?: string; // idが存在しない場合があるためオプショナル
  title: string;
  slug?: string; // slugが存在しない場合があるためオプショナル
  content: string;
  thumbnail?: {
    url: string;
    height: number;
    width: number;
  };
  publishedAt?: string; // publishedAtが存在しない場合があるためオプショナル
  locale: string[] | string;
  createdAt: string;
  updatedAt: string;
  revisedAt?: string;
};

export function getBlogId(blog: Blog): string {
  return blog.id || blog.createdAt;
}

export function getBlogSlug(blog: Blog): string {
  return blog.slug || getBlogId(blog);
}

export type BlogList = {
  contents: Blog[];
  totalCount: number;
  offset: number;
  limit: number;
};

export function getLocaleFromBlog(blog: Blog): "ja" | "en" {
  if (Array.isArray(blog.locale)) {
    const localeString = blog.locale[0]?.toLowerCase();
    if (localeString?.includes("日本") || localeString?.includes("ja")) {
      return "ja";
    }
    return "en";
  }

  const localeString = blog.locale?.toLowerCase();
  if (localeString === "ja" || localeString?.includes("日本")) {
    return "ja";
  }

  return "en";
}
