import getLastestCommit from "@/libs/git";

export default async function Footer() {
  const commit = await getLastestCommit();
  return (
    <footer className="py-4 text-center text-sm text-slate-600">
      <div>Powered by reblog</div>
      <div>
        {commit.msg}(
        <span className="uppercase">{commit.hash?.substring(0, 7)}</span>)
      </div>
    </footer>
  );
}
