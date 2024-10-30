import { getConfig } from "@/core/config";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const config = getConfig();
  const feed = await fetch(`${config.serverUrl}/api/feed`, {
    cache: "no-cache",
  });

  return new Response(await feed.text(), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
