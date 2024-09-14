import getThemeKit from "@/libs/themekit";
import { Article } from "@reblog/themekit";
import * as motion from "framer-motion/client";
import clsx from "clsx";
import Link from "next/link";

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

async function PostLink({
  article,
  index,
}: {
  article: Article;
  index: number;
}) {
  const { title, slug, created_at } = article;
  const { month, day } = formatDate(created_at);

  return (
    <motion.div
      className="flex gap-4 text-lg"
      key={index}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div
        className={clsx("text-slate-600 shrink-0", "dark:text-slate-400")}
      >{`${month}-${day}`}</div>
      <Link
        href={`/article/${slug}`}
        className={clsx(
          "text-slate-600 hover:text-slate-950 transition",
          "dark:text-slate-300 dark:hover:text-slate-50",
        )}
      >
        {title}
      </Link>
    </motion.div>
  );
}

export default async function Home() {
  const themekit = getThemeKit();

  const site = await themekit.getSite();
  const articles = await themekit.getArticleList({
    pageIndex: 1,
    pageSize: Number.MAX_SAFE_INTEGER,
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
    {} as { [year: number]: Article[] },
  );

  const sortedYears = groupedArticles
    ? Object.entries(groupedArticles).sort(
        (a, b) => parseInt(b[0]) - parseInt(a[0]),
      )
    : [];

  return (
    <div className="flex flex-col gap-24 my-16">
      <div className="flex flex-col gap-4">
        <motion.h1
          className="text-4xl font-medium"
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {site?.name}
        </motion.h1>
        <motion.div
          className="text-base font-normal text-slate-600 dark:text-slate-400"
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: -10, opacity: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          {site?.desc}
        </motion.div>
      </div>
      <div>
        {sortedYears.map(([year, articlesForYear], yearIndex) => (
          <div key={year} className="flex flex-col gap-8 mb-32">
            <motion.h2
              className={clsx(
                "text-8xl font-semibold text-slate-200",
                "dark:text-slate-800",
                "absolute z-[-1] mt-[-35px] ml-[-35px] pl-[10px] select-none",
              )}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: yearIndex * 0.2 + 0.4 }}
            >
              {year}
            </motion.h2>
            <div className="flex flex-col gap-4">
              {articlesForYear.map((article, index) => (
                <PostLink key={article.slug} article={article} index={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
