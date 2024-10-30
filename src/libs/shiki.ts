import {
  createHighlighterCore,
  createJavaScriptRegexEngine,
  HighlighterCore,
} from "shiki";
import oneLight from "shiki/themes/one-light.mjs";
import oneDarkPro from "shiki/themes/one-dark-pro.mjs";

import ts from "shiki/langs/ts.mjs";
import tsx from "shiki/langs/tsx.mjs";
import go from "shiki/langs/go.mjs";
import rust from "shiki/langs/rust.mjs";
import python from "shiki/langs/python.mjs";
import json from "shiki/langs/json.mjs";
import yaml from "shiki/langs/yaml.mjs";
import toml from "shiki/langs/toml.mjs";
import html from "shiki/langs/html.mjs";
import css from "shiki/langs/css.mjs";
import bash from "shiki/langs/bash.mjs";
import xml from "shiki/langs/xml.mjs";

let _SHIKI_INSTANCE: HighlighterCore | null = null;

export default async function getShikiInstance() {
  if (!_SHIKI_INSTANCE) {
    const js = createJavaScriptRegexEngine();

    _SHIKI_INSTANCE = await createHighlighterCore({
      themes: [oneLight, oneDarkPro],
      langs: [
        ts,
        tsx,
        go,
        rust,
        python,
        json,
        yaml,
        toml,
        html,
        css,
        bash,
        xml,
      ],
      engine: js,
    });
  }
  return _SHIKI_INSTANCE;
}
