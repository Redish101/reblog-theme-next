import userConfig from "@/../blog.config";

export interface MenuItem {
  label: string;
  path: string;
}

export interface FriendLinkItem {
  name: string;
  desc: string;
  link: string;
}

export interface twikooConfig {
  envId: string;
}

export interface SentryConfig {
  enabled: boolean;
  dsn?: string;
  org?: string;
  project?: string;
}

export interface UserConfig {
  serverUrl: string;
  menu?: MenuItem[];
  friendLinks?: FriendLinkItem[];
  twikoo?: twikooConfig;
  sentry: SentryConfig;
}

export function defineConfig(options: UserConfig) {
  return options;
}

export function getConfig() {
  return userConfig;
}
