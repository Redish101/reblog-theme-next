import React from "react";
import { compiler } from "markdown-to-jsx";
import MCodeBlock from "./MCodeBlock";

export default function Markdown({ children }: { children: string }) {
  const mdElement = compiler(children, {
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
    },
  });

  return mdElement;
}
