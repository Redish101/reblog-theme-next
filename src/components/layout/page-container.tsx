import { ReactNode } from "react";
import * as motion from "framer-motion/client";

export default function PageContainer({
  children,
  title,
  subTitle,
}: {
  children: ReactNode;
  title?: ReactNode;
  subTitle?: ReactNode;
}) {
  return (
    <main className="min-h-screen max-w-[855px] mx-auto px-2 pt-32 break-words transition-all">
      {title && subTitle && (
        <div className="mx-4 my-16 flex flex-col space-y-2">
          {title && (
            <motion.h1
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-3xl font-medium leading-normal"
            >
              {title}
            </motion.h1>
          )}
          {subTitle && (
            <div className="font-normal text-slate-600 dark:text-slate-400">
              <motion.div
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: -10, opacity: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                {subTitle}
              </motion.div>
            </div>
          )}
        </div>
      )}
      {children}
    </main>
  );
}
