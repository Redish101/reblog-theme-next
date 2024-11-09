import clsx from "clsx";
import { getRepo } from "@/libs/github";
import Link from "next/link";

const GithubRepoCard: React.FC<{ owner: string; repo: string }> = async (
  props,
) => {
  const repo = await getRepo(props.owner, props.repo);
  return (
    <Link
      className={clsx(
        "max-w-96 bg-slate-100 mx-auto rounded-lg border-slate-300 border p-4 my-6 flex gap-3",
        "dark:bg-slate-800 dark:border-slate-700",
        "md:hover:shadow-lg md:hover:-translate-y-1 transition-all ease-out hover:shadow-xl hover:-translate-y-2",
        "active:shadow-none active:translate-y-0",
      )}
      href={`https://github.com/${props.owner}/${props.repo}`}
    >
      <div className="flex items-center">
        <span className="icon-[line-md--github-twotone] text-4xl text-slate-500"></span>
      </div>
      <div className="flex flex-col justify-center">
        <div className="font-bold text-lg">
          {props.owner}/{props.repo}
        </div>
        <div className="font-light text-sm text-slate-500">
          {repo.description}
        </div>
      </div>
    </Link>
  );
};

export default GithubRepoCard;
