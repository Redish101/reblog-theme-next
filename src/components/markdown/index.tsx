import React from "react";
import { compiler, MarkdownToJSX } from "markdown-to-jsx";
import { MImage, MLink, MParagraph, MCodeBlock } from "./renderers";
import { ExtraTest, GithubRepoCard } from "./extra";

export default function Markdown({
  children,
  overrides,
  extendsRules,
}: {
  children: string;
  overrides?: MarkdownToJSX.Overrides;
  extendsRules?: MarkdownToJSX.ExtendsRules;
}) {
  const mdElement = compiler(children, {
    overrides: {
      p: MParagraph,
      img: MImage,
      link: MLink,

      ExtraTest,
      GithubRepoCard,

      ...overrides,
    },
    extendsRules: {
      codeBlock: {
        react(node, output, state) {
          return (
            <MCodeBlock key={state?.key} lang={node.lang}>
              {node.content}
            </MCodeBlock>
          );
        },
      },
      link: {
        react(node, output, state) {
          const { target, title } = node;

          return (
            <MLink href={target} title={title} key={state?.key}>
              {output(node.content, state!)}
            </MLink>
          );
        },
      },
      ...extendsRules,
    },
  });

  return mdElement;
}
