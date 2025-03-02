import getThemeKit from "@/lib/themekit"
import type { Metadata } from "next"
import * as motion from "framer-motion/client"
import { ArticleCard } from "@/components/article-card"
import getSiteInfo from "@/utils/siteInfo"
import PageContainer from "@/components/layout/page-container"

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
    <PageContainer
      title={site?.name}
      subTitle={site?.desc}
    >
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
    </PageContainer>
  )
}

