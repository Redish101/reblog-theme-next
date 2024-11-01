import Markdown from "@/components/Markdown";
import getThemeKit from "@/libs/themekit";
import { Feed } from "feed";

export const dynamic = "force-dynamic";
export const revalidate = 86400; // 1天

const site = await getThemeKit().getSite();

export async function GET(req: Request) {
  const feed = new Feed({
    title: site?.name || "reblog 站点",
    description: site?.desc || "reblog 站点",
    id: `${site?.url}/feed`,
    link: site?.url,
    language: "zh-CN",
    copyright: `All rights reserved ${new Date().getFullYear()}, ${site?.name}`,
  });

  const articleList = await getThemeKit().getArticleList({
    pageIndex: 1,
    pageSize: 10,
    withContent: true,
  });

  const ReactDOM = (await import("react-dom/server")).default;

  articleList?.articles?.forEach((article) => {
    const link = `${site?.url}/article/${article.slug}`;

    const content = () => {
      try {
        return ReactDOM.renderToString(
          <>
            <blockquote>
              本文该渲染由 reblog 前端生成，可能存在排版问题，最佳体验请前往：
              <a href={link}>{link}</a>
            </blockquote>
            <Markdown
              overrides={{
                img: (props: { src: string; alt?: string }) => (
                  <img src={props.src} alt={props.alt || ""} />
                ),
              }}
              extendsRules={{
                codeBlock: {
                  react(node, output, state) {
                    return (
                      <pre
                        key={state.key}
                        className={
                          node.lang
                            ? `language-${node.lang} lang-${node.lang}`
                            : ""
                        }
                      >
                        <code
                          className={
                            node.lang
                              ? `language-${node.lang} lang-${node.lang}`
                              : ""
                          }
                        >
                          {node.content}
                        </code>
                      </pre>
                    );
                  },
                },
              }}
            >
              {article.content}
            </Markdown>
            <a href={`${link}#twikoo`}>看完了？点击发送评论</a>
          </>,
        );
      } catch (err) {
        return ReactDOM.renderToString(
          <p>
            由于渲染错误，本文无法通过此 RSS 阅读器阅读，请前往：
            <a href={link}>{link}</a>
          </p>,
        );
      }
    };

    feed.addItem({
      title: article.title,
      id: link,
      link,
      date: new Date(article.created_at),
      content: content(),
    });
  });

  return new Response(feed.atom1(), {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "max-age=60, s-maxage=86400",
      "CDN-Cache-Control": "max-age=86400",
      "Cloudflare-CDN-Cache-Control": "max-age=86400",
      "Vercel-CDN-Cache-Control": "max-age=86400",
    },
  });
}
