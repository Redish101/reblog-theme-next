import { FriendLinkItem, getConfig } from "@/core/config";
import clsx from "clsx";
import Link from "next/link";

async function LinkItem({ link }: { link: FriendLinkItem }) {
  return (
    <Link
      href={link.link}
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
  const links = getConfig().friendLinks;

  return (
    <div className="flex flex-col gap-24 my-16">
      <h1 className="text-4xl font-medium">友情链接</h1>
      <div className="flex flex-col gap-4">
        {links?.map((link) => <LinkItem key={link.name} link={link} />)}
      </div>
      <LinkItem
        link={{
          name: "添加您的网站",
          desc: "",
          link: "https://github.com/Redish101/reblog-theme-next",
        }}
      />
    </div>
  );
}
