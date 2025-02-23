import getThemeKit from "@/lib/themekit"
import type { Metadata } from "next"
import * as motion from "framer-motion/client"
import { ArticleCard } from "@/components/article-card"
import getSiteInfo from "@/utils/siteInfo"

export const dynamic = "force-dynamic"

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSiteInfo()
  return {
    title: site?.name,
    description: site?.desc,
    openGraph: {
      title: site?.name,
      description: site?.desc,
      url: (await getSiteInfo())?.url,
      siteName: site?.name,
      locale: "zh-CN",
      type: "website",
    },
  }
}

export default async function ArticlesPage() {
  const themekit = getThemeKit()
  const articles = (await themekit.getArticleList())?.articles!
  const site = await themekit.getSite()

  return (
    <div className="transition-all">
      <div className="mx-4 my-16 flex flex-col space-y-2">
        <motion.h1
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-medium leading-normal"
        >
          {site?.name}
        </motion.h1>
        <div className="font-normal text-slate-600 dark:text-slate-400">
          <motion.div
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: -10, opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            {site?.desc}
          </motion.div>
        </div>
      </div>
      <div className="space-y-6">
        {articles.map((article, index) => (
          <ArticleCard
            key={article.slug}
            title={article.title}
            description={article.desc}
            date={article.created_at}
            slug={article.slug}
            cover={article.cover}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}

