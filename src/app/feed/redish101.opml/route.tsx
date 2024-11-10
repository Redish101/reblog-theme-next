import type { NextApiRequest } from "next";
import { getConfig } from "@/core/config";
import { XMLBuilder } from "fast-xml-parser";

export const dynamic = "auto";

export async function GET(req: NextApiRequest) {
  const config = getConfig();
  const friendLinks = config.friendLinks || [];

  const linksWithFeed = friendLinks.filter((link) => !!link.feed);

  const opmlData = {
    opml: {
      version: "1.0",
      head: {
        title: "Redish101的朋友们",
      },
      body: {
        outline: linksWithFeed.map((link) => ({
          text: link.name,
          title: link.name,
          type: "rss",
          xmlUrl: link.feed,
          htmlUrl: link.link,
        })),
      },
    },
  };

  const builder = new XMLBuilder({
    ignoreAttributes: false,
    format: true,
  });

  const opmlContent = builder.build(opmlData);

  return new Response(opmlContent, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "max-age=60, s-maxage=86400",
      "CDN-Cache-Control": "max-age=86400",
      "Cloudflare-CDN-Cache-Control": "max-age=86400",
      "Vercel-CDN-Cache-Control": "max-age=86400",
    },
  });
}
