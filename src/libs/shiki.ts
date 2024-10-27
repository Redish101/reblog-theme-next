import {
  createHighlighterCore,
  createJavaScriptRegexEngine,
  HighlighterCore,
} from "shiki";
import oneLight from "shiki/themes/one-light.mjs";
import oneDarkPro from "shiki/themes/one-dark-pro.mjs";
import { getConfig } from "@/core/config";

let _SHIKI_INSTANCE: HighlighterCore | null = null;

export default async function getShikiInstance() {
  if (!_SHIKI_INSTANCE) {
    const js = createJavaScriptRegexEngine();

    _SHIKI_INSTANCE = await createHighlighterCore({
      themes: [oneLight, oneDarkPro],
      langs: getConfig().shiki?.langs,
      engine: js,
    });
  }
  return _SHIKI_INSTANCE;
}
