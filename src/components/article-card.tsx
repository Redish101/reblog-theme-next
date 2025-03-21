import * as motion from "framer-motion/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import Markdown from "./markdown";
import Comment from "./twikoo";
import CopyrightCard from "./copyright-card";
import getSiteInfo from "@/utils/siteInfo";
import { AISummary} from "./ai-summary";

interface ArticleCardProps {
  title: string;
  description?: string;
  date: string;
  slug: string;
  index?: number;
  cover?: string; // Add cover prop
}

export function ArticleCard({
  title,
  description,
  date,
  slug,
  index,
  cover,
}: ArticleCardProps) {
  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -10, opacity: 0 }}
      transition={{ delay: (index || 0) * 0.1, duration: 0.4 }}
    >
      <Link href={`/article/${slug}`}>
        <Card className="transition-all overflow-hidden hover:bg-none hover:shadow-md">
          {cover && (
            <div className="relative w-full md:h-64 h-48">
              <Image
                src={cover}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          )}
          <CardHeader>
            <CardTitle className="text-xl font-medium">{title}</CardTitle>
            {description && (
              <p className="mt-2 text-muted-foreground font-normal">
                {description}
              </p>
            )}
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                发布于{" "}
                {new Date(date).toLocaleDateString("zh-CN", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </p>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
export async function ArticleContentCard({
  title,
  content,
  date,
  slug,
  cover,
  aiSummary
}: ArticleCardProps & { content: string, aiSummary?: string }) {
  return (
    <div>
      <Card className="transition-all overflow-hidden hover:bg-none hover:shadow-md">
        {cover && (
          <div className="relative w-full md:h-64 h-48">
            <Image
              src={cover}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
        <CardHeader>
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <CardTitle className="text-2xl font-medium">{title}</CardTitle>
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mt-4"
            >
              <p className="text-muted-foreground">
                发布于{" "}
                {new Date(date).toLocaleDateString("zh-CN", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </p>
            </motion.div>
          </motion.div>
        </CardHeader>
        <CardContent>
          { aiSummary && (
            <div className="mt-4">
              <AISummary summary={aiSummary} />
            </div>
          )}
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="prose dark:prose-invert max-w-none mt-2 prose-a:no-underline"
          >
            <Markdown>{content}</Markdown>
          </motion.div>
          <CopyrightCard
            title={title}
            url={`${(await getSiteInfo())?.url}/article/${slug}`}
          />
        </CardContent>
      </Card>
      <Comment />
    </div>
  );
}
