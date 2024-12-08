import getThemeKit from "@/libs/themekit";
import { Article } from "@reblog/themekit";
import * as motion from "framer-motion/client";
import clsx from "clsx";
import Link from "next/link";

export const dynamic = "force-dynamic";

function formatDate(dateString: string): {
  year: number;
  month: string;
  day: string;
} {
  const date = new Date(dateString);
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return {
    year: date.getFullYear(),
    month: month,
    day: day,
  };
}

function PostLink({
  article,
  index,
  yearIndex,
}: {
  article: Article;
  index: number;
  yearIndex: number;
}) {
  const { title, slug, created_at } = article;
  const { month, day } = formatDate(created_at);

  return (
    <div className="flex items-center gap-4 text-lg">
      <motion.div
      key={index}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: yearIndex * 0.2 + index * 0.1 }}
    >
      <span className={clsx("text-slate-600 shrink-0 w-16", "dark:text-slate-400")}>
        {`${month}-${day}`}
      </span>
      <Link
        href={`/article/${slug}`}
        className={clsx(
          "text-slate-600 hover:text-slate-950 transition ml-2",
          "dark:text-slate-300 dark:hover:text-slate-50"
        )}
      >
        {title}
      </Link>
    </motion.div>
    </div>
    
  );
}

export default async function Home() {
  const themekit = getThemeKit();

  const site = await themekit.getSite();
  const articles = await themekit.getArticleList({
    pageIndex: 1,
    pageSize: Number.MAX_SAFE_INTEGER,
    withContent: false,
  });

  const groupedArticles = articles?.articles.reduce(
    (acc, article) => {
      const { year } = formatDate(article.created_at);
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(article);
      return acc;
    },
    {} as { [year: number]: Article[] }
  );

  const sortedYears = groupedArticles
    ? Object.entries(groupedArticles).sort(
        (a, b) => parseInt(b[0]) - parseInt(a[0])
      )
    : [];

  return (
    <div className="flex flex-col gap-24 my-16">
      <div className="flex flex-col gap-4">
        <div className="text-4xl font-medium">
          <motion.h1
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {site?.name}
          </motion.h1>
        </div>
        <div className="text-base font-normal text-slate-600 dark:text-slate-400">
          <motion.div
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: -10, opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            {site?.desc}
          </motion.div>
        </div>
      </div>
      <div>
        {sortedYears.map(([year, articlesForYear], yearIndex) => (
          <div key={year} className="flex flex-col gap-8 mb-32">
            <div
              className={clsx(
                "text-8xl font-semibold text-slate-200",
                "dark:text-slate-800",
                "absolute z-[-1] mt-[-35px] ml-[-35px] pl-[10px] select-none"
              )}
            >
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: yearIndex * 0.2 + 0.4 }}
              >
                {year}
              </motion.h2>
            </div>

            <div className="flex flex-col gap-4">
              {articlesForYear.map((article, index) => (
                <PostLink
                  key={article.slug}
                  article={article}
                  index={index}
                  yearIndex={yearIndex}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}