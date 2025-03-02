import getShikiInstance from "@/lib/shiki";
import clsx from "clsx";
import { Code, FileTerminal } from "lucide-react";
import { bundledLanguages } from "shiki";

const highlighter = await getShikiInstance();

const shikiSupportedLangsSet = new Set(Object.keys(bundledLanguages));
function isSupportedShikiLang(lang: string) {
  return shikiSupportedLangsSet.has(lang);
}

const iconProps = {
  className: "h-4 w-4",
}

const languageIcons = {
  default: <Code {...iconProps}/>,

  bash: <FileTerminal {...iconProps}/>,
};

export default async function MCodeBlock({
  lang,
  children,
}: {
  lang: string;
  children: string;
}) {
  const renderedCode = highlighter.codeToHtml(children, {
    lang: isSupportedShikiLang(lang) ? lang : "",
    themes: {
      light: "one-light",
      dark: "one-dark-pro",
    },
  });

  const languageIcon =
    lang in languageIcons
      ? languageIcons[lang as keyof typeof languageIcons]
      : languageIcons.default;
  return (
    <div className="group relative">
      <span
        className={clsx(
          "center absolute bottom-2 right-4 flex gap-1 opacity-50 items-center",
          "text-sm font-light tracking-wider",
          "dark:text-white"
        )}
      >
        {/* {lang ? languageIcon : null} */}
        {lang?.toUpperCase()}
      </span>
      <div dangerouslySetInnerHTML={{ __html: renderedCode }} />
    </div>
  );
}
