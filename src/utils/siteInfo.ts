import getThemeKit from "@/lib/themekit";
import { isDynamicServerError } from "next/dist/client/components/hooks-server-context";
import { cache } from "react";

const getSiteInfo = cache(async () => {
  const themekit = getThemeKit();
  try {
    const siteInfo = await themekit.getSite();
    return siteInfo;
  } catch (error) {
    if (isDynamicServerError(error)) {
      throw error;
    }
    throw new Error(`获取站点信息失败: ${error}`);
  }
});

export default getSiteInfo;
