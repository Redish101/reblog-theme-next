import getThemeKit from "@/libs/themekit";
import { Metadata } from "next";
import * as motion from "framer-motion/client";

import Comment from "@/components/twikoo";
import { notFound } from "next/navigation";
import Markdown from "@/components/markdown";
import CopyrightCard from "@/components/copyright-card";
import getSiteInfo from "@/utils/siteInfo";
import { ArticleContentCard } from "@/components/article-card";

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

function cookDate(date: string) {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
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
    <div className="transition-all">
      <ArticleContentCard
        title={article.title}
        date={article.created_at}
        slug={article.slug}
        cover={article.cover}
        content={article.content}
      />

      <CopyrightCard
        title={article.title}
        url={`${(await getSiteInfo())?.url}/article/${slug}`}
      />
      <Comment />
    </div>
  );
}
