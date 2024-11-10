import clsx from "clsx";

const CopyrightCard: React.FC<{ title: string; url: string }> = (props) => (
  <div
    className={clsx(
      "max-w-none bg-slate-100 mx-auto rounded-lg border-slate-300 border p-4 my-6 flex gap-3 flex-col",
      "dark:bg-slate-800 dark:border-slate-700",
      "md:hover:shadow-lg md:hover:-translate-y-1 transition-all ease-out hover:shadow-xl hover:-translate-y-2",
      "active:shadow-none active:translate-y-0",
    )}
  >
    <div className="flex flex-col gap-1 z-20">
      <div className="text-xl font-medium">{props.title}</div>
      <div className="text-xs text-slate-600">{props.url}</div>
    </div>
    <div>本文采用 CC BY-NC-ND 4.0 协议授权，完整转载请注明出处。</div>
  </div>
);

export default CopyrightCard;
