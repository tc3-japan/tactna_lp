import { BlogCard } from './BlogCard';
import type { Blog } from '@/lib/microcms/types';
import { cn } from '@/lib/utils';

interface BlogListProps {
  blogs: Blog[];
  className?: string;
  locale?: "ja" | "en";
}

export function BlogList({ blogs, className, locale }: BlogListProps) {
  if (blogs.length === 0) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <p className="text-gray-600 text-lg">ブログ記事がありません</p>
          <p className="text-gray-500 text-sm">新しい記事が投稿されるまでお待ちください</p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn('grid gap-8 md:grid-cols-2 lg:grid-cols-3', className)}>
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} locale={locale} />
      ))}
    </div>
  );
}