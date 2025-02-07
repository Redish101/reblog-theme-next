import getThemeKit from "@/libs/themekit";
import { Metadata } from "next";
import * as motion from "framer-motion/client";

import Comment from "@/components/comment";
import { notFound } from "next/navigation";
import Markdown from "@/components/markdown";
import CopyrightCard from "@/components/copyright-card";
import getSiteInfo from "@/utils/siteInfo";

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
      <div className="my-16 flex flex-col gap-4">
        <div className="text-3xl font-medium leading-normal">
          <motion.h1
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {article?.title}
          </motion.h1>
        </div>
        <div className="font-normal text-slate-600 dark:text-slate-400">
          <motion.div
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: -10, opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            发布于 {cookDate(article?.created_at!)}
          </motion.div>
        </div>
      </div>
      <div className="prose dark:prose-invert max-w-none prose-a:no-underline">
        <motion.article
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: -10, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <Markdown>{article.content}</Markdown>
        </motion.article>
      </div>

      <CopyrightCard
        title={article.title}
        url={`${(await getSiteInfo())?.url}/article/${slug}`}
      />
      <Comment />
    </div>
  );
}
