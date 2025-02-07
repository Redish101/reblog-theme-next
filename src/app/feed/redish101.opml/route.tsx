import { getConfig } from "@/core/config";
import { XMLBuilder } from "fast-xml-parser";

export const dynamic = "force-static";

export async function GET(req: Request) {
  const config = getConfig();
  const friendLinks = config.friendLinks || [];

  const linksWithFeed = friendLinks.filter((link) => !!link.feed);

  const opmlData = {
    opml: {
      $version: "2.0",
      head: {
        title: "Redish101的朋友们",
        ownerName: "Redish101",
        ownerEmail: "i@redish101.top",
      },
      body: {
        outline: linksWithFeed.map((link) => ({
          $text: link.name,
          $title: link.name,
          $type: "rss",
          $xmlUrl: link.feed,
          $htmlUrl: link.link,
        })),
      },
    },
  };

  const builder = new XMLBuilder({
    ignoreAttributes: false,
    format: true,
    attributeNamePrefix: "$",
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
