import { getConfig } from "@/core/config";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextApiRequest) {
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
