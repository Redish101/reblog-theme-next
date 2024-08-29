import { getConfig } from "@/core/config";
import ThemeKit from "@reblog/themekit";

let __THEMEKIT_INSTANCE: ThemeKit | null = null;

export default function getThemeKit() {
  if (!__THEMEKIT_INSTANCE) {
    const { serverUrl } = getConfig();
    __THEMEKIT_INSTANCE = new ThemeKit({
      server: {
        url: serverUrl,
      },
      cache: "no-cache",
    });
  }

  return __THEMEKIT_INSTANCE;
}
