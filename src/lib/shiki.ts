import {
  createHighlighterCore,
  createJavaScriptRegexEngine,
  HighlighterCore,
} from "shiki";
import oneLight from "shiki/themes/one-light.mjs";
import oneDarkPro from "shiki/themes/one-dark-pro.mjs";

let _SHIKI_INSTANCE: HighlighterCore | null = null;

const gn = {
  "name": "gn",
  "scopeName": "source.gn",
  "fileTypes": ["*.gn", "BUILD.gn"],
  "patterns": [
    { "include": "#comments" },
    { "include": "#keywords" },
    { "include": "#functions" },
    { "include": "#conditionals" },
    { "include": "#strings" },
    { "include": "#placeholders" },
    { "include": "#variables" },
    { "include": "#operators" },
    { "include": "#arrays" },
    { "include": "#toolchains" },
    { "include": "#compiler_flags" },
    { "include": "#braces" }
  ],
  "repository": {
    "comments": {
      "name": "comment.line.number-sign.gn",
      "match": "#.*"
    },
    "keywords": {
      "patterns": [{
        "name": "keyword.control.gn",
        "match": "\\b(toolchain|config|static_library|if|else|public_configs|sources|include_dirs|defines|libs|cflags|frameworks|public|sources|current_os|tool|command|description|outputs|depfile|depsformat|alink|solink|link|stamp|copy|soname|sofile|rspfile|rspfile_content|ldflags|solibs|default_output_extension|output_prefix|link_output|depend_output|outfile|is_mac)\\b"
      }]
    },
    "functions": {
      "patterns": [{
        "name": "meta.function.gn",
        "match": "(\\w+)\\s*(\")",
        "captures": {
          "1": { "name": "entity.name.function.gn" },
          "2": { "name": "string.quoted.double.gn" }
        }
      }]
    },
    "conditionals": {
      "patterns": [{
        "name": "meta.conditional.gn",
        "begin": "\\b(if)\\s*(\\()",
        "end": "\\)",
        "beginCaptures": {
          "1": { "name": "keyword.control.conditional.gn" },
          "2": { "name": "punctuation.section.parens.begin.gn" }
        },
        "endCaptures": {
          "0": { "name": "punctuation.section.parens.end.gn" }
        },
        "patterns": [
          { "include": "#variables" },
          { "include": "#strings" },
          { "include": "#placeholders" },
          { "include": "#operators" }
        ]
      }]
    },
    "strings": {
      "name": "string.quoted.double.gn",
      "match": "\"(?:[^\"\\\\]|\\\\.)*\""
    },
    "placeholders": {
      "patterns": [{
        "name": "variable.parameter.placeholder.gn",
        "match": "\\{\\{\\w+\\}\\}"
      }]
    },
    "variables": {
      "name": "variable.other.gn",
      "match": "\\b\\w+\\b(?=\\s*[=+])"
    },
    "operators": {
      "patterns": [{
        "name": "keyword.operator.gn",
        "match": "==|=|\\+=|\\-="
      }, {
        "name": "punctuation.separator.array.gn",
        "match": "[\\[\\]]"
      }]
    },
    "arrays": {
      "name": "meta.array.gn",
      "begin": "\\[",
      "end": "\\]",
      "patterns": [
        { "include": "#strings" },
        { "include": "#variables" },
        { "include": "#placeholders" }
      ]
    },
    "toolchains": {
      "patterns": [{
        "name": "meta.toolchain.gn",
        "begin": "toolchain\\(\"([\\w-]+)\"\\)\\s*\\{",
        "end": "\\}",
        "beginCaptures": {
          "1": { "name": "entity.name.toolchain.gn" }
        },
        "patterns": [
          { "include": "#tool-definition" }
        ]
      }]
    },
    "tool-definition": {
      "patterns": [{
        "name": "meta.tool.gn",
        "begin": "tool\\(\"([\\w-]+)\"\\)\\s*\\{",
        "end": "\\}",
        "beginCaptures": {
          "1": { "name": "entity.name.tool.gn" }
        },
        "patterns": [
          { "include": "$self" }
        ]
      }]
    },
    "compiler_flags": {
      "patterns": [{
        "name": "keyword.other.compiler-flag.gn",
        "match": "\\b(-MMD|-MF|-c|-shared|-Wl,|@executable_path|--whole-archive|--no-whole-archive|--start-group|--end-group)\\b"
      }]
    },
    "braces": {
      "patterns": [{
        "name": "meta.braces.gn",
        "begin": "\\{",
        "end": "\\}",
        "patterns": [
          { "include": "$self" }
        ]
      }]
    }
  }
}


export default async function getShikiInstance() {
  if (!_SHIKI_INSTANCE) {
    const js = createJavaScriptRegexEngine();

    _SHIKI_INSTANCE = await createHighlighterCore({
      themes: [oneLight, oneDarkPro],
      langs: [
        import("shiki/langs/js.mjs"),
        import("shiki/langs/jsx.mjs"),
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
        import("shiki/langs/markdown.mjs"),
        import("shiki/langs/powershell.mjs"),
        import("shiki/langs/cpp.mjs"),
        gn
      ],
      engine: js,
    });
  }
  return _SHIKI_INSTANCE;
}
