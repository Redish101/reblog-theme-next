import userConfig from "@/../blog.config";

export interface MenuItem {
  label: string;
  path: string;
}

export interface twikooConfig {
  envId: string;
}

export interface UserConfig {
  serverUrl: string;
  menu?: MenuItem[];
  twikoo?: twikooConfig;
}

export function defineConfig(options: UserConfig) {
  return options;
}

export function getConfig() {
  return userConfig;
}
