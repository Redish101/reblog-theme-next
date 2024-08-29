import getThemeKit from "@/libs/themekit";
import { Article } from "@reblog/themekit";
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

async function PostLink({ article }: { article: Article }) {
  const { title, slug, created_at } = article;
  const { month, day } = formatDate(created_at);

  return (
    <div className="flex gap-4 text-lg justify-between">
      <div className="text-slate-600 shrink-0">{`${month}-${day}`}</div>
      <Link
        href={`/article/${slug}`}
        className="text-slate-600 hover:text-slate-950 transition w-full text-start"
      >
        {title}
      </Link>
    </div>
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
        <h1 className="text-4xl font-medium">{site?.name}</h1>
        <div className="text-base font-normal text-slate-600">{site?.desc}</div>
      </div>
      <div>
        {sortedYears.map(([year, articlesForYear]) => (
          <div key={year} className="flex flex-col gap-8 mb-32">
            <h2 className="text-8xl font-semibold text-slate-200 absolute z-[-1] mt-[-35px] ml-[-35px] pl-[10px] select-none">
              {year}
            </h2>
            <div className="flex flex-col gap-4">
              {articlesForYear.map((article) => (
                <PostLink key={article.slug} article={article} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
