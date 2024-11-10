import simpleGit from "simple-git";

const getLastestCommit = async () => {
  console.log("getLastestCommit");
  try {
    const git = simpleGit();
    const log = await git.log(["-1"]);
    return {
      hash: log.latest?.hash,
      msg: log.latest?.message,
    };
  } catch (err) {
    return {
      hash: "0000000",
      msg: `error: 获取提交信息失败 ${err}`,
    };
  }
};

export default getLastestCommit;
