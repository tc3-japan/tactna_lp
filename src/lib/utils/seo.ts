/**
 * SEO関連のユーティリティ関数
 */

/**
 * HTMLタグを完全に除去してプレーンテキストを生成
 * 入れ子タグや特殊文字も適切に処理
 */
export function stripHtmlTags(html: string): string {
  // HTMLエンティティをデコード
  const entityMap: { [key: string]: string } = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
    '&nbsp;': ' ',
  };
  
  const text = html
    // HTMLタグを除去（入れ子も対応）
    .replace(/<[^>]*>/g, '')
    // HTMLエンティティをデコード
    .replace(/&[a-zA-Z0-9#]+;/g, (entity) => entityMap[entity] || entity)
    // 連続する空白文字を1つに
    .replace(/\s+/g, ' ')
    // 前後の空白を除去
    .trim();
    
  return text;
}

/**
 * 記事の読了時間を計算（分単位）
 * 平均読書速度：400文字/分（日本語）、200単語/分（英語）
 */
export function calculateReadingTime(content: string, locale: 'ja' | 'en' = 'ja'): number {
  const plainText = stripHtmlTags(content);
  
  if (locale === 'ja') {
    // 日本語の場合：文字数ベース
    const charCount = plainText.length;
    const readingTime = Math.ceil(charCount / 400);
    return Math.max(1, readingTime); // 最低1分
  } else {
    // 英語の場合：単語数ベース
    const wordCount = plainText.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);
    return Math.max(1, readingTime); // 最低1分
  }
}

/**
 * descriptionテキストを指定した文字数で切り詰める
 */
export function truncateDescription(text: string, maxLength: number = 160): string {
  if (text.length <= maxLength) {
    return text;
  }
  
  // 単語の途中で切れないように調整
  const truncated = text.substring(0, maxLength);
  const lastSpaceIndex = truncated.lastIndexOf(' ');
  
  if (lastSpaceIndex > maxLength * 0.8) {
    return truncated.substring(0, lastSpaceIndex) + '...';
  }
  
  return truncated + '...';
}