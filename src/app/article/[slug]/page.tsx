import getThemeKit from "@/libs/themekit";
import { Metadata } from "next";

import "./content.css";
import render from "@/core/render";
import Comment from "@/components/Comment";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const themekit = getThemeKit();
  const article = await themekit.getArticle(params.slug);
  const site = await themekit.getSite();
  return {
    title: `${article?.title} - ${site?.name}`,
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

export default async function Article({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const themekit = getThemeKit();
  const article = await themekit.getArticle(slug);
  if (!article) {
    return notFound();
  }

  const renderedContent = await render(article?.content!);

  return (
    <div className="transition-all">
      <div className="my-16 flex flex-col gap-4">
        <h1 className="text-3xl font-medium leading-normal">
          {article?.title}
        </h1>
        <div className="font-normal text-slate-600 dark:text-slate-400">
          发布于 {cookDate(article?.created_at!)}
        </div>
      </div>
      <article
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: renderedContent }}
      />
      <Comment />
    </div>
  );
}
