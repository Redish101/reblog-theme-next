import Comment from "@/components/Comment";
import getThemeKit from "@/libs/themekit";
import { Friend } from "@reblog/themekit";
import clsx from "clsx";
import Link from "next/link";

async function LinkItem({ link }: { link: Friend }) {
  return (
    <Link
      href={link.url}
      className={clsx(
        "text-slate-600 hover:text-slate-950 transition text-lg",
        "dark:text-slate-300 dark:hover:text-slate-50",
      )}
    >
      {link.name}
    </Link>
  );
}

export default async function Links() {
  const themekit = getThemeKit();
  const links = await themekit.getFriendList({
    pageIndex: 1,
    pageSize: Number.MAX_SAFE_INTEGER,
  });

  return (
    <div className="flex flex-col gap-24 my-16">
      <h1 className="text-4xl font-medium">友情链接</h1>
      <div>
        {links?.friends.map((link) => <LinkItem key={link.name} link={link} />)}
      </div>
      <p>可通过下方留言添加您的网站</p>
      <Comment />
    </div>
  );
}
