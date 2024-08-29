import getThemeKit from "@/libs/themekit";
import { cache } from "react";

const getSiteInfo = cache(async () => {
  const themekit = getThemeKit();
  try {
    const siteInfo = await themekit.getSite();
    return siteInfo;
  } catch (error) {
    throw new Error(`获取站点信息失败: ${error}`);
  }
});

export default getSiteInfo;
