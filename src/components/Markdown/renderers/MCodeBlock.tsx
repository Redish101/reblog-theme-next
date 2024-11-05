import getShikiInstance from "@/libs/shiki";
import clsx from "clsx";

const highlighter = await getShikiInstance();

export default async function MCodeBlock({
  lang,
  children,
}: {
  lang: string;
  children: string;
}) {
  const renderedCode = highlighter.codeToHtml(children, {
    lang,
    themes: {
      light: "one-light",
      dark: "one-dark-pro",
    },
  });
  return (
    <div className="group relative">
      <span className="center absolute bottom-2 right-4 flex gap-1 text-xm uppercase opacity-50 dark:text-white items-center">
        {lang}
      </span>
      <div dangerouslySetInnerHTML={{ __html: renderedCode }} />
    </div>
  );
}
