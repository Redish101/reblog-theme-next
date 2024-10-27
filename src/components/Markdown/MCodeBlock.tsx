import getShikiInstance from "@/libs/shiki";

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
  return <div dangerouslySetInnerHTML={{ __html: renderedCode }} />;
}
