import getThemeKit from "@/lib/themekit";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import getSiteInfo from "@/utils/siteInfo";
import { ArticleContentCard } from "@/components/article-card";
import PageContainer from "@/components/layout/page-container";

export const dynamic = "force-dynamic";

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const themekit = getThemeKit();
  const article = await themekit.getArticle(params.slug);
  const site = await themekit.getSite();
  return {
    title: `${article?.title} - ${site?.name}`,
    description: article?.desc,
    openGraph: {
      title: `${article?.title} - ${site?.name}`,
      description: article?.desc,
      url: `${(await getSiteInfo())?.url}/article/${params.slug}`,
      siteName: site?.name,
      locale: "zh-CN",
      type: "article",
    },
  };
}

export default async function Article(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const { slug } = params;
  const themekit = getThemeKit();
  const article = await themekit.getArticle(slug);
  if (!article) {
    return notFound();
  }

  return (
    <PageContainer>
      <ArticleContentCard
        title={article.title}
        date={article.created_at}
        slug={article.slug}
        cover={article.cover}
        content={article.content}
        aiSummary={article.ai_summary}
      />
    </PageContainer>
  );
}
