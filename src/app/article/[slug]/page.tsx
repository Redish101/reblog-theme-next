import getThemeKit from "@/libs/themekit";
import { Metadata } from "next";
import * as motion from "framer-motion/client";

import Comment from "@/components/Comment";
import { notFound } from "next/navigation";
import Markdown from "@/components/Markdown";

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
      <div className="my-16 flex flex-col gap-4">
        <motion.h1
          className="text-3xl font-medium leading-normal"
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {article?.title}
        </motion.h1>
        <motion.div
          className="font-normal text-slate-600 dark:text-slate-400"
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: -10, opacity: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          发布于 {cookDate(article?.created_at!)}
        </motion.div>
      </div>
      <motion.article
        className={"prose dark:prose-dark max-w-none prose-a:no-underline"}
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: -10, opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <Markdown>{article.content}</Markdown>
      </motion.article>
      <Comment />
    </div>
  );
}
