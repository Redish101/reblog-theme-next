import React from "react";
import { compiler, MarkdownToJSX } from "markdown-to-jsx";
import MCodeBlock from "./MCodeBlock";
import { MImage, MParagraph } from "./renderers";
import { ExtraTest } from "./extra";

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

      ExtraTest,

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
      ...extendsRules,
    },
  });

  return mdElement;
}
