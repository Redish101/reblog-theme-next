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
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.4, delay: 0.1 * index + 0.2 }}
    >
      <Link
        href={link.link}
        className={clsx(
          "text-slate-600 hover:text-slate-950 transition text-lg",
          "dark:text-slate-300 dark:hover:text-slate-50",
        )}
      >
        {link.name}
      </Link>
    </motion.div>
  );
}

export default async function Links() {
  const links = getConfig().friendLinks;

  return (
    <div className="flex flex-col gap-24 my-16">
      <motion.h1
        className="text-4xl font-medium"
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        友情链接
      </motion.h1>
      <div className="flex flex-col gap-4">
        {links?.map((link, index) => (
          <LinkItem key={link.name} link={link} index={index} />
        ))}
      </div>
      <LinkItem
        link={{
          name: "添加您的网站",
          desc: "",
          link: "https://github.com/Redish101/reblog-theme-next",
        }}
        index={links?.length! + 1}
      />
    </div>
  );
}
