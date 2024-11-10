import {
  createHighlighterCore,
  createJavaScriptRegexEngine,
  HighlighterCore,
} from "shiki";
import oneLight from "shiki/themes/one-light.mjs";
import oneDarkPro from "shiki/themes/one-dark-pro.mjs";

let _SHIKI_INSTANCE: HighlighterCore | null = null;

export default async function getShikiInstance() {
  if (!_SHIKI_INSTANCE) {
    const js = createJavaScriptRegexEngine();

    _SHIKI_INSTANCE = await createHighlighterCore({
      themes: [oneLight, oneDarkPro],
      langs: [
        import("shiki/langs/ts.mjs"),
        import("shiki/langs/tsx.mjs"),
        import("shiki/langs/go.mjs"),
        import("shiki/langs/rust.mjs"),
        import("shiki/langs/python.mjs"),
        import("shiki/langs/json.mjs"),
        import("shiki/langs/yaml.mjs"),
        import("shiki/langs/toml.mjs"),
        import("shiki/langs/html.mjs"),
        import("shiki/langs/css.mjs"),
        import("shiki/langs/bash.mjs"),
        import("shiki/langs/xml.mjs"),
        import("shiki/langs/diff.mjs"),
      ],
      engine: js,
    });
  }
  return _SHIKI_INSTANCE;
}
