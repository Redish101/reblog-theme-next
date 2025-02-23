import { getConfig } from "@/core/config";
import { Octokit } from "octokit";

const config = getConfig();

const octokit = new Octokit({
  auth: config.githubToken,
  userAgent: "reblog-theme-next",
});

const getRepo = async (owner: string, repo: string) => {
  try {
    const response = await octokit.request("GET /repos/{owner}/{repo}", {
      owner,
      repo,
    });

    return response.data;
  } catch (e) {
    return {
      name: "error",
      description: "获取仓库信息失败",
    };
  }
};

export { getRepo };
