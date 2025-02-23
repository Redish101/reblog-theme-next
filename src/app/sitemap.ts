import getThemeKit from "@/lib/themekit";
import getSiteInfo from "@/utils/siteInfo";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const themekit = getThemeKit();
  const site = await getSiteInfo();
  const articles = await themekit.getArticleList({
    pageIndex: 1,
    pageSize: Number.MAX_SAFE_INTEGER,
    withContent: false,
  });

  const articlesSitemap: MetadataRoute.Sitemap =
    articles?.articles.map((article) => ({
      url: `${site?.url!}/article/${article.slug}`,
      lastModified: new Date(article.updated_at),
      changeFrequency: "daily",
      priority: 0.8,
    })) || [];

  return [
    {
      url: site?.url!,
      changeFrequency: "daily",
      priority: 1,
    },
    ...articlesSitemap,
  ];
}
