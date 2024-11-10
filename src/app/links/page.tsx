import { FriendLinkItem, getConfig } from "@/core/config";
import * as motion from "framer-motion/client";
import clsx from "clsx";
import Link from "next/link";

async function LinkItem({
  link,
  index,
}: {
  link: FriendLinkItem;
  index: number;
}) {
  return (
    <motion.a
      animate={{ x: 0, y: 0, opacity: 1 }}
      initial={{ x: -5, y: -10, opacity: 0 }}
      transition={{ duration: 0.4, delay: 0.1 * index + 0.2 }}
      className={clsx(
        "w-full sm:w-auto",
        "bg-slate-100 rounded-lg border-slate-300 border flex gap-2",
        "dark:bg-slate-800 dark:border-slate-700",
        "md:hover:shadow-lg md:hover:-translate-y-1 transition-all ease-out hover:shadow-xl hover:-translate-y-2",
        "active:shadow-none active:translate-y-0"
      )}
      href={link.link}
    >
      <div className="flex flex-col justify-center p-4">
        <div className="text-lg">{link.name}</div>
        <div className="text-sm text-slate-600">{link.desc}</div>
      </div>
    </motion.a>
  );
}

export default async function Links() {
  const links = getConfig().friendLinks;

  return (
    <div className="flex flex-col gap-24 my-16">
      <motion.h1
        className="text-4xl md:text-3xl sm:text-2xl font-medium"
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        友情链接
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {links?.map((link, index) => (
          <LinkItem key={link.name} link={link} index={index} />
        ))}
      </div>
      <Link href="https://github.com/Redish101/reblog-theme-next">
        添加您的网站
      </Link>
    </div>
  );
}
