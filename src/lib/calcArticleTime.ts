export default function calcArticleTime(article: string): number {
  const wordsPerMinute = 200;
  const words = article.split(' ').length;
  const minutes = words / wordsPerMinute;
  return Math.ceil(minutes);
}